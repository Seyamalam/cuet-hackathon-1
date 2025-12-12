#!/bin/bash

# Seed MinIO with sample files for testing
# This creates test files so the download/check endpoint returns available: true

MINIO_ALIAS="myminio"
MINIO_ENDPOINT="${MINIO_ENDPOINT:-http://localhost:9000}"
MINIO_ACCESS_KEY="${MINIO_ACCESS_KEY:-minioadmin}"
MINIO_SECRET_KEY="${MINIO_SECRET_KEY:-minioadmin}"
BUCKET_NAME="${BUCKET_NAME:-downloads}"
NUM_FILES="${NUM_FILES:-20}"

echo "╔════════════════════════════════════════╗"
echo "║      MinIO Sample Data Seeder          ║"
echo "╠════════════════════════════════════════╣"
echo "║ Endpoint: $MINIO_ENDPOINT"
echo "║ Bucket:   $BUCKET_NAME"
echo "║ Files:    $NUM_FILES"
echo "╚════════════════════════════════════════╝"
echo ""

# Check if mc (MinIO Client) is available
if ! command -v mc &> /dev/null; then
    echo "MinIO Client (mc) not found. Using docker..."
    USE_DOCKER=true
else
    USE_DOCKER=false
fi

run_mc() {
    if [ "$USE_DOCKER" = true ]; then
        docker run --rm --network host minio/mc "$@"
    else
        mc "$@"
    fi
}

# Configure MinIO client
echo "Configuring MinIO client..."
run_mc alias set $MINIO_ALIAS $MINIO_ENDPOINT $MINIO_ACCESS_KEY $MINIO_SECRET_KEY --api S3v4

# Ensure bucket exists
echo "Ensuring bucket '$BUCKET_NAME' exists..."
run_mc mb $MINIO_ALIAS/$BUCKET_NAME --ignore-existing

# Generate sample file IDs (between 10000 and 100000000)
echo ""
echo "Creating $NUM_FILES sample files..."

# Create a temp directory for sample files
TEMP_DIR=$(mktemp -d)
trap "rm -rf $TEMP_DIR" EXIT

for i in $(seq 1 $NUM_FILES); do
    # Generate a random file ID in the valid range
    FILE_ID=$((RANDOM * RANDOM % 99990000 + 10000))
    # Use the correct S3 key format: downloads/{fileId}.zip
    FILE_KEY="downloads/${FILE_ID}.zip"
    
    # Create a sample file with some content
    FILE_SIZE=$((RANDOM % 10000 + 1000))
    dd if=/dev/urandom of="$TEMP_DIR/file_$i.dat" bs=1 count=$FILE_SIZE 2>/dev/null
    
    # Upload to MinIO
    echo "  [$i/$NUM_FILES] Uploading file_id=$FILE_ID (${FILE_SIZE} bytes)..."
    
    if [ "$USE_DOCKER" = true ]; then
        # For docker, we need to copy the file into a volume or use stdin
        cat "$TEMP_DIR/file_$i.dat" | docker run --rm -i --network host minio/mc pipe $MINIO_ALIAS/$BUCKET_NAME/$FILE_KEY
    else
        mc cp "$TEMP_DIR/file_$i.dat" $MINIO_ALIAS/$BUCKET_NAME/$FILE_KEY
    fi
    
    # Save the file ID to a list
    echo "$FILE_ID" >> "$TEMP_DIR/file_ids.txt"
done

echo ""
echo "╔════════════════════════════════════════╗"
echo "║           Seeding Complete!            ║"
echo "╚════════════════════════════════════════╝"
echo ""
echo "Created file IDs (use these with /v1/download/check):"
cat "$TEMP_DIR/file_ids.txt" | head -10
if [ $NUM_FILES -gt 10 ]; then
    echo "... and $((NUM_FILES - 10)) more"
fi

# List bucket contents
echo ""
echo "Bucket contents:"
run_mc ls $MINIO_ALIAS/$BUCKET_NAME/downloads/ | head -10
