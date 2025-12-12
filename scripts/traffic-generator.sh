#!/bin/bash

# Traffic Generator Script for Delineate API
# Continuously hits all endpoints to generate metrics data

API_URL="${API_URL:-http://localhost:3000}"
INTERVAL="${INTERVAL:-2}"  # seconds between requests

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Counter for requests
declare -A request_counts
request_counts[health]=0
request_counts[root]=0
request_counts[docs]=0
request_counts[openapi]=0
request_counts[download_initiate]=0
request_counts[download_check]=0
request_counts[download_start]=0
request_counts[errors_404]=0
request_counts[errors_400]=0

# Store job IDs and file IDs
declare -a job_ids
declare -a file_ids_queue

# Known file IDs that exist in MinIO (seeded data)
KNOWN_FILE_IDS=(12345678 23456789 34567890 45678901 56789012 67890123 78901234 89012345 90123456 11111111 22222222 33333333 44444444 55555555)

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Delineate API Traffic Generator      ║${NC}"
echo -e "${BLUE}╠════════════════════════════════════════╣${NC}"
echo -e "${BLUE}║${NC} ${YELLOW}API URL:${NC} $API_URL"
echo -e "${BLUE}║${NC} ${YELLOW}Interval:${NC} ${INTERVAL}s between iterations"
echo -e "${BLUE}║${NC} ${YELLOW}Press Ctrl+C to stop${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo ""

# Function to make requests and track them
make_request() {
    local method=$1
    local endpoint=$2
    local data=$3
    local silent=$4
    
    local start_time=$(date +%s%3N)
    
    if [ -n "$data" ]; then
        response=$(curl -s -w "\n%{http_code}" -X "$method" "$API_URL$endpoint" \
            -H "Content-Type: application/json" \
            -d "$data" 2>/dev/null)
    else
        response=$(curl -s -w "\n%{http_code}" -X "$method" "$API_URL$endpoint" 2>/dev/null)
    fi
    
    local end_time=$(date +%s%3N)
    local duration=$((end_time - start_time))
    
    # Extract status code (last line) and body (everything else)
    local status_code=$(echo "$response" | tail -n1)
    local body=$(echo "$response" | sed '$d')
    
    # Color based on status code
    local color=$GREEN
    if [[ "$status_code" =~ ^2 ]]; then
        color=$GREEN
    elif [[ "$status_code" =~ ^4 ]]; then
        color=$YELLOW
    elif [[ "$status_code" =~ ^5 ]]; then
        color=$RED
    fi
    
    if [ "$silent" != "true" ]; then
        echo -e "  ${color}${status_code}${NC} ${method} ${endpoint} ${CYAN}(${duration}ms)${NC}"
    fi
    
    # Return body for further processing (on stdout)
    echo "$body"
    
    # Return status code via exit code trick (use a temp file)
    echo "$status_code" > /tmp/last_status_code
}

# Cleanup function
cleanup() {
    echo ""
    echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
    echo -e "${BLUE}║     Traffic Generation Summary         ║${NC}"
    echo -e "${BLUE}╠════════════════════════════════════════╣${NC}"
    echo -e "${BLUE}║${NC} ${GREEN}Root requests:${NC}        ${request_counts[root]}"
    echo -e "${BLUE}║${NC} ${GREEN}Health checks:${NC}        ${request_counts[health]}"
    echo -e "${BLUE}║${NC} ${GREEN}Docs requests:${NC}        ${request_counts[docs]}"
    echo -e "${BLUE}║${NC} ${GREEN}OpenAPI requests:${NC}     ${request_counts[openapi]}"
    echo -e "${BLUE}║${NC} ${CYAN}Download initiate:${NC}    ${request_counts[download_initiate]}"
    echo -e "${BLUE}║${NC} ${CYAN}Download check:${NC}       ${request_counts[download_check]}"
    echo -e "${BLUE}║${NC} ${CYAN}Download start:${NC}       ${request_counts[download_start]}"
    echo -e "${BLUE}║${NC} ${YELLOW}404 errors:${NC}           ${request_counts[errors_404]}"
    echo -e "${BLUE}║${NC} ${YELLOW}400 errors:${NC}           ${request_counts[errors_400]}"
    echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
    exit 0
}

trap cleanup SIGINT SIGTERM

# Main loop
iteration=0
while true; do
    iteration=$((iteration + 1))
    echo -e "\n${BLUE}━━━ Iteration $iteration ━━━${NC}"
    
    # 1. Root endpoint
    make_request "GET" "/" "" "false" > /dev/null
    ((request_counts[root]++))
    
    # 2. Health check
    make_request "GET" "/health" "" "false" > /dev/null
    ((request_counts[health]++))
    
    # 3. Docs endpoint
    make_request "GET" "/docs" "" "false" > /dev/null
    ((request_counts[docs]++))
    
    # 4. OpenAPI spec
    make_request "GET" "/openapi" "" "false" > /dev/null
    ((request_counts[openapi]++))
    
    # 5. Initiate a download job with multiple file IDs
    # Generate random file IDs between 10000 and 100000000
    file_id1=$((RANDOM * RANDOM % 99990000 + 10000))
    file_id2=$((RANDOM * RANDOM % 99990000 + 10000))
    file_id3=$((RANDOM * RANDOM % 99990000 + 10000))
    
    echo -e "  ${CYAN}Initiating download job...${NC}"
    initiate_response=$(make_request "POST" "/v1/download/initiate" \
        "{\"file_ids\": [$file_id1, $file_id2, $file_id3]}" "false")
    ((request_counts[download_initiate]++))
    
    # Extract job ID
    job_id=$(echo "$initiate_response" | grep -o '"jobId":"[^"]*"' | cut -d'"' -f4)
    if [ -n "$job_id" ]; then
        job_ids+=("$job_id")
        file_ids_queue+=("$file_id1" "$file_id2" "$file_id3")
        echo -e "    ${GREEN}✓ Job created:${NC} $job_id (files: $file_id1, $file_id2, $file_id3)"
    fi
    
    # 6. Check availability for a file - mix of known and random IDs
    if [ $((RANDOM % 2)) -eq 0 ]; then
        # Use a known file ID that exists in MinIO
        random_known_idx=$((RANDOM % ${#KNOWN_FILE_IDS[@]}))
        check_file_id=${KNOWN_FILE_IDS[$random_known_idx]}
        echo -e "  ${CYAN}Checking file availability (known file)...${NC}"
    else
        # Use a random file ID (likely doesn't exist)
        check_file_id=$((RANDOM * RANDOM % 99990000 + 10000))
        echo -e "  ${CYAN}Checking file availability (random file)...${NC}"
    fi
    check_response=$(make_request "POST" "/v1/download/check" \
        "{\"file_id\": $check_file_id}" "false")
    ((request_counts[download_check]++))
    
    available=$(echo "$check_response" | grep -o '"available":[^,}]*' | cut -d':' -f2)
    echo -e "    ${GREEN}✓ File $check_file_id available:${NC} $available"
    
    # 7. Start a download (this takes 5-15 seconds)
    # Only do this occasionally to avoid blocking too long
    if [ $((iteration % 3)) -eq 0 ]; then
        # Use a known file ID for successful downloads
        random_known_idx=$((RANDOM % ${#KNOWN_FILE_IDS[@]}))
        start_file_id=${KNOWN_FILE_IDS[$random_known_idx]}
        echo -e "  ${CYAN}Starting download (5-15s delay)...${NC}"
        start_response=$(make_request "POST" "/v1/download/start" \
            "{\"file_id\": $start_file_id}" "false")
        ((request_counts[download_start]++))
        
        status=$(echo "$start_response" | grep -o '"status":"[^"]*"' | cut -d'"' -f4)
        echo -e "    ${GREEN}✓ Download status:${NC} $status"
    fi
    
    # 8. Check some older file IDs from the queue
    if [ ${#file_ids_queue[@]} -gt 5 ]; then
        random_idx=$((RANDOM % ${#file_ids_queue[@]}))
        old_file_id=${file_ids_queue[$random_idx]}
        if [ -n "$old_file_id" ]; then
            echo -e "  ${CYAN}Re-checking old file...${NC}"
            make_request "POST" "/v1/download/check" \
                "{\"file_id\": $old_file_id}" "false" > /dev/null
            ((request_counts[download_check]++))
        fi
    fi
    
    # 9. Generate some error cases for realistic traffic
    
    # 404 - Invalid endpoint
    if [ $((RANDOM % 4)) -eq 0 ]; then
        echo -e "  ${YELLOW}Testing 404 error...${NC}"
        make_request "GET" "/invalid-endpoint-$RANDOM" "" "false" > /dev/null
        ((request_counts[errors_404]++))
    fi
    
    # 400 - Invalid request body
    if [ $((RANDOM % 5)) -eq 0 ]; then
        echo -e "  ${YELLOW}Testing 400 error (invalid file_id)...${NC}"
        make_request "POST" "/v1/download/check" \
            "{\"file_id\": 500}" "false" > /dev/null  # file_id must be >= 10000
        ((request_counts[errors_400]++))
    fi
    
    # Invalid JSON
    if [ $((RANDOM % 6)) -eq 0 ]; then
        echo -e "  ${YELLOW}Testing 400 error (invalid JSON)...${NC}"
        make_request "POST" "/v1/download/initiate" \
            "not-valid-json" "false" > /dev/null
        ((request_counts[errors_400]++))
    fi
    
    # Missing required field
    if [ $((RANDOM % 6)) -eq 0 ]; then
        echo -e "  ${YELLOW}Testing 400 error (missing field)...${NC}"
        make_request "POST" "/v1/download/check" \
            "{}" "false" > /dev/null
        ((request_counts[errors_400]++))
    fi
    
    sleep "$INTERVAL"
done
