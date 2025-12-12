var Y_ = Object.defineProperty;
var K_ = (e, t, s) =>
  t in e
    ? Y_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
    : (e[t] = s);
var _c = (e, t, s) => K_(e, typeof t != "symbol" ? t + "" : t, s);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
  new MutationObserver((a) => {
    for (const u of a)
      if (u.type === "childList")
        for (const d of u.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && i(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(a) {
    const u = {};
    return (
      a.integrity && (u.integrity = a.integrity),
      a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : a.crossOrigin === "anonymous"
          ? (u.credentials = "omit")
          : (u.credentials = "same-origin"),
      u
    );
  }
  function i(a) {
    if (a.ep) return;
    a.ep = !0;
    const u = s(a);
    fetch(a.href, u);
  }
})();
function X_(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Sc = { exports: {} },
  Li = {},
  Ec = { exports: {} },
  xe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wh;
function J_() {
  if (Wh) return xe;
  Wh = 1;
  var e = Symbol.for("react.element"),
    t = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    a = Symbol.for("react.profiler"),
    u = Symbol.for("react.provider"),
    d = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    h = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    _ = Symbol.for("react.lazy"),
    y = Symbol.iterator;
  function E(I) {
    return I === null || typeof I != "object"
      ? null
      : ((I = (y && I[y]) || I["@@iterator"]),
        typeof I == "function" ? I : null);
  }
  var C = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    N = {};
  function x(I, L, he) {
    ((this.props = I),
      (this.context = L),
      (this.refs = N),
      (this.updater = he || C));
  }
  ((x.prototype.isReactComponent = {}),
    (x.prototype.setState = function (I, L) {
      if (typeof I != "object" && typeof I != "function" && I != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, I, L, "setState");
    }),
    (x.prototype.forceUpdate = function (I) {
      this.updater.enqueueForceUpdate(this, I, "forceUpdate");
    }));
  function D() {}
  D.prototype = x.prototype;
  function B(I, L, he) {
    ((this.props = I),
      (this.context = L),
      (this.refs = N),
      (this.updater = he || C));
  }
  var V = (B.prototype = new D());
  ((V.constructor = B), T(V, x.prototype), (V.isPureReactComponent = !0));
  var K = Array.isArray,
    R = Object.prototype.hasOwnProperty,
    A = { current: null },
    q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function X(I, L, he) {
    var ce,
      _e = {},
      Se = null,
      Oe = null;
    if (L != null)
      for (ce in (L.ref !== void 0 && (Oe = L.ref),
      L.key !== void 0 && (Se = "" + L.key),
      L))
        R.call(L, ce) && !q.hasOwnProperty(ce) && (_e[ce] = L[ce]);
    var Ce = arguments.length - 2;
    if (Ce === 1) _e.children = he;
    else if (1 < Ce) {
      for (var Le = Array(Ce), nt = 0; nt < Ce; nt++)
        Le[nt] = arguments[nt + 2];
      _e.children = Le;
    }
    if (I && I.defaultProps)
      for (ce in ((Ce = I.defaultProps), Ce))
        _e[ce] === void 0 && (_e[ce] = Ce[ce]);
    return {
      $$typeof: e,
      type: I,
      key: Se,
      ref: Oe,
      props: _e,
      _owner: A.current,
    };
  }
  function z(I, L) {
    return {
      $$typeof: e,
      type: I.type,
      key: L,
      ref: I.ref,
      props: I.props,
      _owner: I._owner,
    };
  }
  function G(I) {
    return typeof I == "object" && I !== null && I.$$typeof === e;
  }
  function se(I) {
    var L = { "=": "=0", ":": "=2" };
    return (
      "$" +
      I.replace(/[=:]/g, function (he) {
        return L[he];
      })
    );
  }
  var ee = /\/+/g;
  function ye(I, L) {
    return typeof I == "object" && I !== null && I.key != null
      ? se("" + I.key)
      : L.toString(36);
  }
  function Ie(I, L, he, ce, _e) {
    var Se = typeof I;
    (Se === "undefined" || Se === "boolean") && (I = null);
    var Oe = !1;
    if (I === null) Oe = !0;
    else
      switch (Se) {
        case "string":
        case "number":
          Oe = !0;
          break;
        case "object":
          switch (I.$$typeof) {
            case e:
            case t:
              Oe = !0;
          }
      }
    if (Oe)
      return (
        (Oe = I),
        (_e = _e(Oe)),
        (I = ce === "" ? "." + ye(Oe, 0) : ce),
        K(_e)
          ? ((he = ""),
            I != null && (he = I.replace(ee, "$&/") + "/"),
            Ie(_e, L, he, "", function (nt) {
              return nt;
            }))
          : _e != null &&
            (G(_e) &&
              (_e = z(
                _e,
                he +
                  (!_e.key || (Oe && Oe.key === _e.key)
                    ? ""
                    : ("" + _e.key).replace(ee, "$&/") + "/") +
                  I,
              )),
            L.push(_e)),
        1
      );
    if (((Oe = 0), (ce = ce === "" ? "." : ce + ":"), K(I)))
      for (var Ce = 0; Ce < I.length; Ce++) {
        Se = I[Ce];
        var Le = ce + ye(Se, Ce);
        Oe += Ie(Se, L, he, Le, _e);
      }
    else if (((Le = E(I)), typeof Le == "function"))
      for (I = Le.call(I), Ce = 0; !(Se = I.next()).done; )
        ((Se = Se.value),
          (Le = ce + ye(Se, Ce++)),
          (Oe += Ie(Se, L, he, Le, _e)));
    else if (Se === "object")
      throw (
        (L = String(I)),
        Error(
          "Objects are not valid as a React child (found: " +
            (L === "[object Object]"
              ? "object with keys {" + Object.keys(I).join(", ") + "}"
              : L) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return Oe;
  }
  function Pe(I, L, he) {
    if (I == null) return I;
    var ce = [],
      _e = 0;
    return (
      Ie(I, ce, "", "", function (Se) {
        return L.call(he, Se, _e++);
      }),
      ce
    );
  }
  function re(I) {
    if (I._status === -1) {
      var L = I._result;
      ((L = L()),
        L.then(
          function (he) {
            (I._status === 0 || I._status === -1) &&
              ((I._status = 1), (I._result = he));
          },
          function (he) {
            (I._status === 0 || I._status === -1) &&
              ((I._status = 2), (I._result = he));
          },
        ),
        I._status === -1 && ((I._status = 0), (I._result = L)));
    }
    if (I._status === 1) return I._result.default;
    throw I._result;
  }
  var ge = { current: null },
    P = { transition: null },
    J = {
      ReactCurrentDispatcher: ge,
      ReactCurrentBatchConfig: P,
      ReactCurrentOwner: A,
    };
  function H() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (xe.Children = {
      map: Pe,
      forEach: function (I, L, he) {
        Pe(
          I,
          function () {
            L.apply(this, arguments);
          },
          he,
        );
      },
      count: function (I) {
        var L = 0;
        return (
          Pe(I, function () {
            L++;
          }),
          L
        );
      },
      toArray: function (I) {
        return (
          Pe(I, function (L) {
            return L;
          }) || []
        );
      },
      only: function (I) {
        if (!G(I))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return I;
      },
    }),
    (xe.Component = x),
    (xe.Fragment = s),
    (xe.Profiler = a),
    (xe.PureComponent = B),
    (xe.StrictMode = i),
    (xe.Suspense = h),
    (xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J),
    (xe.act = H),
    (xe.cloneElement = function (I, L, he) {
      if (I == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            I +
            ".",
        );
      var ce = T({}, I.props),
        _e = I.key,
        Se = I.ref,
        Oe = I._owner;
      if (L != null) {
        if (
          (L.ref !== void 0 && ((Se = L.ref), (Oe = A.current)),
          L.key !== void 0 && (_e = "" + L.key),
          I.type && I.type.defaultProps)
        )
          var Ce = I.type.defaultProps;
        for (Le in L)
          R.call(L, Le) &&
            !q.hasOwnProperty(Le) &&
            (ce[Le] = L[Le] === void 0 && Ce !== void 0 ? Ce[Le] : L[Le]);
      }
      var Le = arguments.length - 2;
      if (Le === 1) ce.children = he;
      else if (1 < Le) {
        Ce = Array(Le);
        for (var nt = 0; nt < Le; nt++) Ce[nt] = arguments[nt + 2];
        ce.children = Ce;
      }
      return {
        $$typeof: e,
        type: I.type,
        key: _e,
        ref: Se,
        props: ce,
        _owner: Oe,
      };
    }),
    (xe.createContext = function (I) {
      return (
        (I = {
          $$typeof: d,
          _currentValue: I,
          _currentValue2: I,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (I.Provider = { $$typeof: u, _context: I }),
        (I.Consumer = I)
      );
    }),
    (xe.createElement = X),
    (xe.createFactory = function (I) {
      var L = X.bind(null, I);
      return ((L.type = I), L);
    }),
    (xe.createRef = function () {
      return { current: null };
    }),
    (xe.forwardRef = function (I) {
      return { $$typeof: p, render: I };
    }),
    (xe.isValidElement = G),
    (xe.lazy = function (I) {
      return { $$typeof: _, _payload: { _status: -1, _result: I }, _init: re };
    }),
    (xe.memo = function (I, L) {
      return { $$typeof: g, type: I, compare: L === void 0 ? null : L };
    }),
    (xe.startTransition = function (I) {
      var L = P.transition;
      P.transition = {};
      try {
        I();
      } finally {
        P.transition = L;
      }
    }),
    (xe.unstable_act = H),
    (xe.useCallback = function (I, L) {
      return ge.current.useCallback(I, L);
    }),
    (xe.useContext = function (I) {
      return ge.current.useContext(I);
    }),
    (xe.useDebugValue = function () {}),
    (xe.useDeferredValue = function (I) {
      return ge.current.useDeferredValue(I);
    }),
    (xe.useEffect = function (I, L) {
      return ge.current.useEffect(I, L);
    }),
    (xe.useId = function () {
      return ge.current.useId();
    }),
    (xe.useImperativeHandle = function (I, L, he) {
      return ge.current.useImperativeHandle(I, L, he);
    }),
    (xe.useInsertionEffect = function (I, L) {
      return ge.current.useInsertionEffect(I, L);
    }),
    (xe.useLayoutEffect = function (I, L) {
      return ge.current.useLayoutEffect(I, L);
    }),
    (xe.useMemo = function (I, L) {
      return ge.current.useMemo(I, L);
    }),
    (xe.useReducer = function (I, L, he) {
      return ge.current.useReducer(I, L, he);
    }),
    (xe.useRef = function (I) {
      return ge.current.useRef(I);
    }),
    (xe.useState = function (I) {
      return ge.current.useState(I);
    }),
    (xe.useSyncExternalStore = function (I, L, he) {
      return ge.current.useSyncExternalStore(I, L, he);
    }),
    (xe.useTransition = function () {
      return ge.current.useTransition();
    }),
    (xe.version = "18.3.1"),
    xe
  );
}
var qh;
function kd() {
  return (qh || ((qh = 1), (Ec.exports = J_())), Ec.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vh;
function Q_() {
  if (Vh) return Li;
  Vh = 1;
  var e = kd(),
    t = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    i = Object.prototype.hasOwnProperty,
    a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(p, h, g) {
    var _,
      y = {},
      E = null,
      C = null;
    (g !== void 0 && (E = "" + g),
      h.key !== void 0 && (E = "" + h.key),
      h.ref !== void 0 && (C = h.ref));
    for (_ in h) i.call(h, _) && !u.hasOwnProperty(_) && (y[_] = h[_]);
    if (p && p.defaultProps)
      for (_ in ((h = p.defaultProps), h)) y[_] === void 0 && (y[_] = h[_]);
    return {
      $$typeof: t,
      type: p,
      key: E,
      ref: C,
      props: y,
      _owner: a.current,
    };
  }
  return ((Li.Fragment = s), (Li.jsx = d), (Li.jsxs = d), Li);
}
var Gh;
function Z_() {
  return (Gh || ((Gh = 1), (Sc.exports = Q_())), Sc.exports);
}
var v = Z_(),
  pe = kd(),
  _a = {},
  wc = { exports: {} },
  Pt = {},
  xc = { exports: {} },
  kc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yh;
function eS() {
  return (
    Yh ||
      ((Yh = 1),
      (function (e) {
        function t(P, J) {
          var H = P.length;
          P.push(J);
          e: for (; 0 < H; ) {
            var I = (H - 1) >>> 1,
              L = P[I];
            if (0 < a(L, J)) ((P[I] = J), (P[H] = L), (H = I));
            else break e;
          }
        }
        function s(P) {
          return P.length === 0 ? null : P[0];
        }
        function i(P) {
          if (P.length === 0) return null;
          var J = P[0],
            H = P.pop();
          if (H !== J) {
            P[0] = H;
            e: for (var I = 0, L = P.length, he = L >>> 1; I < he; ) {
              var ce = 2 * (I + 1) - 1,
                _e = P[ce],
                Se = ce + 1,
                Oe = P[Se];
              if (0 > a(_e, H))
                Se < L && 0 > a(Oe, _e)
                  ? ((P[I] = Oe), (P[Se] = H), (I = Se))
                  : ((P[I] = _e), (P[ce] = H), (I = ce));
              else if (Se < L && 0 > a(Oe, H))
                ((P[I] = Oe), (P[Se] = H), (I = Se));
              else break e;
            }
          }
          return J;
        }
        function a(P, J) {
          var H = P.sortIndex - J.sortIndex;
          return H !== 0 ? H : P.id - J.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var u = performance;
          e.unstable_now = function () {
            return u.now();
          };
        } else {
          var d = Date,
            p = d.now();
          e.unstable_now = function () {
            return d.now() - p;
          };
        }
        var h = [],
          g = [],
          _ = 1,
          y = null,
          E = 3,
          C = !1,
          T = !1,
          N = !1,
          x = typeof setTimeout == "function" ? setTimeout : null,
          D = typeof clearTimeout == "function" ? clearTimeout : null,
          B = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function V(P) {
          for (var J = s(g); J !== null; ) {
            if (J.callback === null) i(g);
            else if (J.startTime <= P)
              (i(g), (J.sortIndex = J.expirationTime), t(h, J));
            else break;
            J = s(g);
          }
        }
        function K(P) {
          if (((N = !1), V(P), !T))
            if (s(h) !== null) ((T = !0), re(R));
            else {
              var J = s(g);
              J !== null && ge(K, J.startTime - P);
            }
        }
        function R(P, J) {
          ((T = !1), N && ((N = !1), D(X), (X = -1)), (C = !0));
          var H = E;
          try {
            for (
              V(J), y = s(h);
              y !== null && (!(y.expirationTime > J) || (P && !se()));
            ) {
              var I = y.callback;
              if (typeof I == "function") {
                ((y.callback = null), (E = y.priorityLevel));
                var L = I(y.expirationTime <= J);
                ((J = e.unstable_now()),
                  typeof L == "function"
                    ? (y.callback = L)
                    : y === s(h) && i(h),
                  V(J));
              } else i(h);
              y = s(h);
            }
            if (y !== null) var he = !0;
            else {
              var ce = s(g);
              (ce !== null && ge(K, ce.startTime - J), (he = !1));
            }
            return he;
          } finally {
            ((y = null), (E = H), (C = !1));
          }
        }
        var A = !1,
          q = null,
          X = -1,
          z = 5,
          G = -1;
        function se() {
          return !(e.unstable_now() - G < z);
        }
        function ee() {
          if (q !== null) {
            var P = e.unstable_now();
            G = P;
            var J = !0;
            try {
              J = q(!0, P);
            } finally {
              J ? ye() : ((A = !1), (q = null));
            }
          } else A = !1;
        }
        var ye;
        if (typeof B == "function")
          ye = function () {
            B(ee);
          };
        else if (typeof MessageChannel < "u") {
          var Ie = new MessageChannel(),
            Pe = Ie.port2;
          ((Ie.port1.onmessage = ee),
            (ye = function () {
              Pe.postMessage(null);
            }));
        } else
          ye = function () {
            x(ee, 0);
          };
        function re(P) {
          ((q = P), A || ((A = !0), ye()));
        }
        function ge(P, J) {
          X = x(function () {
            P(e.unstable_now());
          }, J);
        }
        ((e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (P) {
            P.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            T || C || ((T = !0), re(R));
          }),
          (e.unstable_forceFrameRate = function (P) {
            0 > P || 125 < P
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (z = 0 < P ? Math.floor(1e3 / P) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return E;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return s(h);
          }),
          (e.unstable_next = function (P) {
            switch (E) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = E;
            }
            var H = E;
            E = J;
            try {
              return P();
            } finally {
              E = H;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (P, J) {
            switch (P) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                P = 3;
            }
            var H = E;
            E = P;
            try {
              return J();
            } finally {
              E = H;
            }
          }),
          (e.unstable_scheduleCallback = function (P, J, H) {
            var I = e.unstable_now();
            switch (
              (typeof H == "object" && H !== null
                ? ((H = H.delay),
                  (H = typeof H == "number" && 0 < H ? I + H : I))
                : (H = I),
              P)
            ) {
              case 1:
                var L = -1;
                break;
              case 2:
                L = 250;
                break;
              case 5:
                L = 1073741823;
                break;
              case 4:
                L = 1e4;
                break;
              default:
                L = 5e3;
            }
            return (
              (L = H + L),
              (P = {
                id: _++,
                callback: J,
                priorityLevel: P,
                startTime: H,
                expirationTime: L,
                sortIndex: -1,
              }),
              H > I
                ? ((P.sortIndex = H),
                  t(g, P),
                  s(h) === null &&
                    P === s(g) &&
                    (N ? (D(X), (X = -1)) : (N = !0), ge(K, H - I)))
                : ((P.sortIndex = L), t(h, P), T || C || ((T = !0), re(R))),
              P
            );
          }),
          (e.unstable_shouldYield = se),
          (e.unstable_wrapCallback = function (P) {
            var J = E;
            return function () {
              var H = E;
              E = J;
              try {
                return P.apply(this, arguments);
              } finally {
                E = H;
              }
            };
          }));
      })(kc)),
    kc
  );
}
var Kh;
function tS() {
  return (Kh || ((Kh = 1), (xc.exports = eS())), xc.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xh;
function nS() {
  if (Xh) return Pt;
  Xh = 1;
  var e = kd(),
    t = tS();
  function s(n) {
    for (
      var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n,
        o = 1;
      o < arguments.length;
      o++
    )
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return (
      "Minified React error #" +
      n +
      "; visit " +
      r +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var i = new Set(),
    a = {};
  function u(n, r) {
    (d(n, r), d(n + "Capture", r));
  }
  function d(n, r) {
    for (a[n] = r, n = 0; n < r.length; n++) i.add(r[n]);
  }
  var p = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    h = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    _ = {},
    y = {};
  function E(n) {
    return h.call(y, n)
      ? !0
      : h.call(_, n)
        ? !1
        : g.test(n)
          ? (y[n] = !0)
          : ((_[n] = !0), !1);
  }
  function C(n, r, o, l) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l
          ? !1
          : o !== null
            ? !o.acceptsBooleans
            : ((n = n.toLowerCase().slice(0, 5)),
              n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function T(n, r, o, l) {
    if (r === null || typeof r > "u" || C(n, r, o, l)) return !0;
    if (l) return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function N(n, r, o, l, c, f, m) {
    ((this.acceptsBooleans = r === 2 || r === 3 || r === 4),
      (this.attributeName = l),
      (this.attributeNamespace = c),
      (this.mustUseProperty = o),
      (this.propertyName = n),
      (this.type = r),
      (this.sanitizeURL = f),
      (this.removeEmptyString = m));
  }
  var x = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (n) {
      x[n] = new N(n, 0, !1, n, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (n) {
      var r = n[0];
      x[r] = new N(r, 1, !1, n[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (n) {
        x[n] = new N(n, 2, !1, n.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (n) {
      x[n] = new N(n, 2, !1, n, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (n) {
        x[n] = new N(n, 3, !1, n.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (n) {
      x[n] = new N(n, 3, !0, n, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (n) {
      x[n] = new N(n, 4, !1, n, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (n) {
      x[n] = new N(n, 6, !1, n, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (n) {
      x[n] = new N(n, 5, !1, n.toLowerCase(), null, !1, !1);
    }));
  var D = /[\-:]([a-z])/g;
  function B(n) {
    return n[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (n) {
      var r = n.replace(D, B);
      x[r] = new N(r, 1, !1, n, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (n) {
        var r = n.replace(D, B);
        x[r] = new N(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (n) {
      var r = n.replace(D, B);
      x[r] = new N(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (n) {
      x[n] = new N(n, 1, !1, n.toLowerCase(), null, !1, !1);
    }),
    (x.xlinkHref = new N(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (n) {
      x[n] = new N(n, 1, !1, n.toLowerCase(), null, !0, !0);
    }));
  function V(n, r, o, l) {
    var c = x.hasOwnProperty(r) ? x[r] : null;
    (c !== null
      ? c.type !== 0
      : l ||
        !(2 < r.length) ||
        (r[0] !== "o" && r[0] !== "O") ||
        (r[1] !== "n" && r[1] !== "N")) &&
      (T(r, o, c, l) && (o = null),
      l || c === null
        ? E(r) &&
          (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o))
        : c.mustUseProperty
          ? (n[c.propertyName] = o === null ? (c.type === 3 ? !1 : "") : o)
          : ((r = c.attributeName),
            (l = c.attributeNamespace),
            o === null
              ? n.removeAttribute(r)
              : ((c = c.type),
                (o = c === 3 || (c === 4 && o === !0) ? "" : "" + o),
                l ? n.setAttributeNS(l, r, o) : n.setAttribute(r, o))));
  }
  var K = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    R = Symbol.for("react.element"),
    A = Symbol.for("react.portal"),
    q = Symbol.for("react.fragment"),
    X = Symbol.for("react.strict_mode"),
    z = Symbol.for("react.profiler"),
    G = Symbol.for("react.provider"),
    se = Symbol.for("react.context"),
    ee = Symbol.for("react.forward_ref"),
    ye = Symbol.for("react.suspense"),
    Ie = Symbol.for("react.suspense_list"),
    Pe = Symbol.for("react.memo"),
    re = Symbol.for("react.lazy"),
    ge = Symbol.for("react.offscreen"),
    P = Symbol.iterator;
  function J(n) {
    return n === null || typeof n != "object"
      ? null
      : ((n = (P && n[P]) || n["@@iterator"]),
        typeof n == "function" ? n : null);
  }
  var H = Object.assign,
    I;
  function L(n) {
    if (I === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        I = (r && r[1]) || "";
      }
    return (
      `
` +
      I +
      n
    );
  }
  var he = !1;
  function ce(n, r) {
    if (!n || he) return "";
    he = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (
          ((r = function () {
            throw Error();
          }),
          Object.defineProperty(r.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(r, []);
          } catch (O) {
            var l = O;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (O) {
            l = O;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (O) {
          l = O;
        }
        n();
      }
    } catch (O) {
      if (O && l && typeof O.stack == "string") {
        for (
          var c = O.stack.split(`
`),
            f = l.stack.split(`
`),
            m = c.length - 1,
            S = f.length - 1;
          1 <= m && 0 <= S && c[m] !== f[S];
        )
          S--;
        for (; 1 <= m && 0 <= S; m--, S--)
          if (c[m] !== f[S]) {
            if (m !== 1 || S !== 1)
              do
                if ((m--, S--, 0 > S || c[m] !== f[S])) {
                  var w =
                    `
` + c[m].replace(" at new ", " at ");
                  return (
                    n.displayName &&
                      w.includes("<anonymous>") &&
                      (w = w.replace("<anonymous>", n.displayName)),
                    w
                  );
                }
              while (1 <= m && 0 <= S);
            break;
          }
      }
    } finally {
      ((he = !1), (Error.prepareStackTrace = o));
    }
    return (n = n ? n.displayName || n.name : "") ? L(n) : "";
  }
  function _e(n) {
    switch (n.tag) {
      case 5:
        return L(n.type);
      case 16:
        return L("Lazy");
      case 13:
        return L("Suspense");
      case 19:
        return L("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((n = ce(n.type, !1)), n);
      case 11:
        return ((n = ce(n.type.render, !1)), n);
      case 1:
        return ((n = ce(n.type, !0)), n);
      default:
        return "";
    }
  }
  function Se(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case q:
        return "Fragment";
      case A:
        return "Portal";
      case z:
        return "Profiler";
      case X:
        return "StrictMode";
      case ye:
        return "Suspense";
      case Ie:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case se:
          return (n.displayName || "Context") + ".Consumer";
        case G:
          return (n._context.displayName || "Context") + ".Provider";
        case ee:
          var r = n.render;
          return (
            (n = n.displayName),
            n ||
              ((n = r.displayName || r.name || ""),
              (n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")),
            n
          );
        case Pe:
          return (
            (r = n.displayName || null),
            r !== null ? r : Se(n.type) || "Memo"
          );
        case re:
          ((r = n._payload), (n = n._init));
          try {
            return Se(n(r));
          } catch {}
      }
    return null;
  }
  function Oe(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (n = r.render),
          (n = n.displayName || n.name || ""),
          r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Se(r);
      case 8:
        return r === X ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function Ce(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Le(n) {
    var r = n.type;
    return (
      (n = n.nodeName) &&
      n.toLowerCase() === "input" &&
      (r === "checkbox" || r === "radio")
    );
  }
  function nt(n) {
    var r = Le(n) ? "checked" : "value",
      o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r),
      l = "" + n[r];
    if (
      !n.hasOwnProperty(r) &&
      typeof o < "u" &&
      typeof o.get == "function" &&
      typeof o.set == "function"
    ) {
      var c = o.get,
        f = o.set;
      return (
        Object.defineProperty(n, r, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (m) {
            ((l = "" + m), f.call(this, m));
          },
        }),
        Object.defineProperty(n, r, { enumerable: o.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (m) {
            l = "" + m;
          },
          stopTracking: function () {
            ((n._valueTracker = null), delete n[r]);
          },
        }
      );
    }
  }
  function kn(n) {
    n._valueTracker || (n._valueTracker = nt(n));
  }
  function ts(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var o = r.getValue(),
      l = "";
    return (
      n && (l = Le(n) ? (n.checked ? "true" : "false") : n.value),
      (n = l),
      n !== o ? (r.setValue(n), !0) : !1
    );
  }
  function Vn(n) {
    if (
      ((n = n || (typeof document < "u" ? document : void 0)), typeof n > "u")
    )
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Ft(n, r) {
    var o = r.checked;
    return H({}, r, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: o ?? n._wrapperState.initialChecked,
    });
  }
  function Vt(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue,
      l = r.checked != null ? r.checked : r.defaultChecked;
    ((o = Ce(r.value != null ? r.value : o)),
      (n._wrapperState = {
        initialChecked: l,
        initialValue: o,
        controlled:
          r.type === "checkbox" || r.type === "radio"
            ? r.checked != null
            : r.value != null,
      }));
  }
  function Cr(n, r) {
    ((r = r.checked), r != null && V(n, "checked", r, !1));
  }
  function Tn(n, r) {
    Cr(n, r);
    var o = Ce(r.value),
      l = r.type;
    if (o != null)
      l === "number"
        ? ((o === 0 && n.value === "") || n.value != o) && (n.value = "" + o)
        : n.value !== "" + o && (n.value = "" + o);
    else if (l === "submit" || l === "reset") {
      n.removeAttribute("value");
      return;
    }
    (r.hasOwnProperty("value")
      ? In(n, r.type, o)
      : r.hasOwnProperty("defaultValue") && In(n, r.type, Ce(r.defaultValue)),
      r.checked == null &&
        r.defaultChecked != null &&
        (n.defaultChecked = !!r.defaultChecked));
  }
  function Ye(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var l = r.type;
      if (
        !(
          (l !== "submit" && l !== "reset") ||
          (r.value !== void 0 && r.value !== null)
        )
      )
        return;
      ((r = "" + n._wrapperState.initialValue),
        o || r === n.value || (n.value = r),
        (n.defaultValue = r));
    }
    ((o = n.name),
      o !== "" && (n.name = ""),
      (n.defaultChecked = !!n._wrapperState.initialChecked),
      o !== "" && (n.name = o));
  }
  function In(n, r, o) {
    (r !== "number" || Vn(n.ownerDocument) !== n) &&
      (o == null
        ? (n.defaultValue = "" + n._wrapperState.initialValue)
        : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var ke = Array.isArray;
  function lt(n, r, o, l) {
    if (((n = n.options), r)) {
      r = {};
      for (var c = 0; c < o.length; c++) r["$" + o[c]] = !0;
      for (o = 0; o < n.length; o++)
        ((c = r.hasOwnProperty("$" + n[o].value)),
          n[o].selected !== c && (n[o].selected = c),
          c && l && (n[o].defaultSelected = !0));
    } else {
      for (o = "" + Ce(o), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === o) {
          ((n[c].selected = !0), l && (n[c].defaultSelected = !0));
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function we(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(s(91));
    return H({}, r, {
      value: void 0,
      defaultValue: void 0,
      children: "" + n._wrapperState.initialValue,
    });
  }
  function $e(n, r) {
    var o = r.value;
    if (o == null) {
      if (((o = r.children), (r = r.defaultValue), o != null)) {
        if (r != null) throw Error(s(92));
        if (ke(o)) {
          if (1 < o.length) throw Error(s(93));
          o = o[0];
        }
        r = o;
      }
      (r == null && (r = ""), (o = r));
    }
    n._wrapperState = { initialValue: Ce(o) };
  }
  function be(n, r) {
    var o = Ce(r.value),
      l = Ce(r.defaultValue);
    (o != null &&
      ((o = "" + o),
      o !== n.value && (n.value = o),
      r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)),
      l != null && (n.defaultValue = "" + l));
  }
  function mn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue &&
      r !== "" &&
      r !== null &&
      (n.value = r);
  }
  function uo(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Rl(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml"
      ? uo(r)
      : n === "http://www.w3.org/2000/svg" && r === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : n;
  }
  var co,
    rf = (function (n) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (r, o, l, c) {
            MSApp.execUnsafeLocalFunction(function () {
              return n(r, o, l, c);
            });
          }
        : n;
    })(function (n, r) {
      if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
        n.innerHTML = r;
      else {
        for (
          co = co || document.createElement("div"),
            co.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>",
            r = co.firstChild;
          n.firstChild;
        )
          n.removeChild(n.firstChild);
        for (; r.firstChild; ) n.appendChild(r.firstChild);
      }
    });
  function Qs(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Zs = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Q0 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Zs).forEach(function (n) {
    Q0.forEach(function (r) {
      ((r = r + n.charAt(0).toUpperCase() + n.substring(1)), (Zs[r] = Zs[n]));
    });
  });
  function sf(n, r, o) {
    return r == null || typeof r == "boolean" || r === ""
      ? ""
      : o || typeof r != "number" || r === 0 || (Zs.hasOwnProperty(n) && Zs[n])
        ? ("" + r).trim()
        : r + "px";
  }
  function of(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var l = o.indexOf("--") === 0,
          c = sf(o, r[o], l);
        (o === "float" && (o = "cssFloat"),
          l ? n.setProperty(o, c) : (n[o] = c));
      }
  }
  var Z0 = H(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Ml(n, r) {
    if (r) {
      if (Z0[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(s(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(s(60));
        if (
          typeof r.dangerouslySetInnerHTML != "object" ||
          !("__html" in r.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(s(62));
    }
  }
  function Ol(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Dl = null;
  function Al(n) {
    return (
      (n = n.target || n.srcElement || window),
      n.correspondingUseElement && (n = n.correspondingUseElement),
      n.nodeType === 3 ? n.parentNode : n
    );
  }
  var Pl = null,
    ns = null,
    rs = null;
  function af(n) {
    if ((n = Ei(n))) {
      if (typeof Pl != "function") throw Error(s(280));
      var r = n.stateNode;
      r && ((r = Ao(r)), Pl(n.stateNode, n.type, r));
    }
  }
  function lf(n) {
    ns ? (rs ? rs.push(n) : (rs = [n])) : (ns = n);
  }
  function uf() {
    if (ns) {
      var n = ns,
        r = rs;
      if (((rs = ns = null), af(n), r)) for (n = 0; n < r.length; n++) af(r[n]);
    }
  }
  function cf(n, r) {
    return n(r);
  }
  function df() {}
  var Ll = !1;
  function ff(n, r, o) {
    if (Ll) return n(r, o);
    Ll = !0;
    try {
      return cf(n, r, o);
    } finally {
      ((Ll = !1), (ns !== null || rs !== null) && (df(), uf()));
    }
  }
  function ei(n, r) {
    var o = n.stateNode;
    if (o === null) return null;
    var l = Ao(o);
    if (l === null) return null;
    o = l[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((l = !l.disabled) ||
          ((n = n.type),
          (l = !(
            n === "button" ||
            n === "input" ||
            n === "select" ||
            n === "textarea"
          ))),
          (n = !l));
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (o && typeof o != "function") throw Error(s(231, r, typeof o));
    return o;
  }
  var jl = !1;
  if (p)
    try {
      var ti = {};
      (Object.defineProperty(ti, "passive", {
        get: function () {
          jl = !0;
        },
      }),
        window.addEventListener("test", ti, ti),
        window.removeEventListener("test", ti, ti));
    } catch {
      jl = !1;
    }
  function ev(n, r, o, l, c, f, m, S, w) {
    var O = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, O);
    } catch (F) {
      this.onError(F);
    }
  }
  var ni = !1,
    fo = null,
    po = !1,
    Fl = null,
    tv = {
      onError: function (n) {
        ((ni = !0), (fo = n));
      },
    };
  function nv(n, r, o, l, c, f, m, S, w) {
    ((ni = !1), (fo = null), ev.apply(tv, arguments));
  }
  function rv(n, r, o, l, c, f, m, S, w) {
    if ((nv.apply(this, arguments), ni)) {
      if (ni) {
        var O = fo;
        ((ni = !1), (fo = null));
      } else throw Error(s(198));
      po || ((po = !0), (Fl = O));
    }
  }
  function Nr(n) {
    var r = n,
      o = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do ((r = n), (r.flags & 4098) !== 0 && (o = r.return), (n = r.return));
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function pf(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (
        (r === null && ((n = n.alternate), n !== null && (r = n.memoizedState)),
        r !== null)
      )
        return r.dehydrated;
    }
    return null;
  }
  function hf(n) {
    if (Nr(n) !== n) throw Error(s(188));
  }
  function sv(n) {
    var r = n.alternate;
    if (!r) {
      if (((r = Nr(n)), r === null)) throw Error(s(188));
      return r !== n ? null : n;
    }
    for (var o = n, l = r; ; ) {
      var c = o.return;
      if (c === null) break;
      var f = c.alternate;
      if (f === null) {
        if (((l = c.return), l !== null)) {
          o = l;
          continue;
        }
        break;
      }
      if (c.child === f.child) {
        for (f = c.child; f; ) {
          if (f === o) return (hf(c), n);
          if (f === l) return (hf(c), r);
          f = f.sibling;
        }
        throw Error(s(188));
      }
      if (o.return !== l.return) ((o = c), (l = f));
      else {
        for (var m = !1, S = c.child; S; ) {
          if (S === o) {
            ((m = !0), (o = c), (l = f));
            break;
          }
          if (S === l) {
            ((m = !0), (l = c), (o = f));
            break;
          }
          S = S.sibling;
        }
        if (!m) {
          for (S = f.child; S; ) {
            if (S === o) {
              ((m = !0), (o = f), (l = c));
              break;
            }
            if (S === l) {
              ((m = !0), (l = f), (o = c));
              break;
            }
            S = S.sibling;
          }
          if (!m) throw Error(s(189));
        }
      }
      if (o.alternate !== l) throw Error(s(190));
    }
    if (o.tag !== 3) throw Error(s(188));
    return o.stateNode.current === o ? n : r;
  }
  function mf(n) {
    return ((n = sv(n)), n !== null ? gf(n) : null);
  }
  function gf(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = gf(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var yf = t.unstable_scheduleCallback,
    vf = t.unstable_cancelCallback,
    iv = t.unstable_shouldYield,
    ov = t.unstable_requestPaint,
    Ze = t.unstable_now,
    av = t.unstable_getCurrentPriorityLevel,
    Ul = t.unstable_ImmediatePriority,
    _f = t.unstable_UserBlockingPriority,
    ho = t.unstable_NormalPriority,
    lv = t.unstable_LowPriority,
    Sf = t.unstable_IdlePriority,
    mo = null,
    gn = null;
  function uv(n) {
    if (gn && typeof gn.onCommitFiberRoot == "function")
      try {
        gn.onCommitFiberRoot(mo, n, void 0, (n.current.flags & 128) === 128);
      } catch {}
  }
  var rn = Math.clz32 ? Math.clz32 : fv,
    cv = Math.log,
    dv = Math.LN2;
  function fv(n) {
    return ((n >>>= 0), n === 0 ? 32 : (31 - ((cv(n) / dv) | 0)) | 0);
  }
  var go = 64,
    yo = 4194304;
  function ri(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function vo(n, r) {
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var l = 0,
      c = n.suspendedLanes,
      f = n.pingedLanes,
      m = o & 268435455;
    if (m !== 0) {
      var S = m & ~c;
      S !== 0 ? (l = ri(S)) : ((f &= m), f !== 0 && (l = ri(f)));
    } else ((m = o & ~c), m !== 0 ? (l = ri(m)) : f !== 0 && (l = ri(f)));
    if (l === 0) return 0;
    if (
      r !== 0 &&
      r !== l &&
      (r & c) === 0 &&
      ((c = l & -l), (f = r & -r), c >= f || (c === 16 && (f & 4194240) !== 0))
    )
      return r;
    if (((l & 4) !== 0 && (l |= o & 16), (r = n.entangledLanes), r !== 0))
      for (n = n.entanglements, r &= l; 0 < r; )
        ((o = 31 - rn(r)), (c = 1 << o), (l |= n[o]), (r &= ~c));
    return l;
  }
  function pv(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function hv(n, r) {
    for (
      var o = n.suspendedLanes,
        l = n.pingedLanes,
        c = n.expirationTimes,
        f = n.pendingLanes;
      0 < f;
    ) {
      var m = 31 - rn(f),
        S = 1 << m,
        w = c[m];
      (w === -1
        ? ((S & o) === 0 || (S & l) !== 0) && (c[m] = pv(S, r))
        : w <= r && (n.expiredLanes |= S),
        (f &= ~S));
    }
  }
  function zl(n) {
    return (
      (n = n.pendingLanes & -1073741825),
      n !== 0 ? n : n & 1073741824 ? 1073741824 : 0
    );
  }
  function Ef() {
    var n = go;
    return ((go <<= 1), (go & 4194240) === 0 && (go = 64), n);
  }
  function $l(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function si(n, r, o) {
    ((n.pendingLanes |= r),
      r !== 536870912 && ((n.suspendedLanes = 0), (n.pingedLanes = 0)),
      (n = n.eventTimes),
      (r = 31 - rn(r)),
      (n[r] = o));
  }
  function mv(n, r) {
    var o = n.pendingLanes & ~r;
    ((n.pendingLanes = r),
      (n.suspendedLanes = 0),
      (n.pingedLanes = 0),
      (n.expiredLanes &= r),
      (n.mutableReadLanes &= r),
      (n.entangledLanes &= r),
      (r = n.entanglements));
    var l = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var c = 31 - rn(o),
        f = 1 << c;
      ((r[c] = 0), (l[c] = -1), (n[c] = -1), (o &= ~f));
    }
  }
  function Bl(n, r) {
    var o = (n.entangledLanes |= r);
    for (n = n.entanglements; o; ) {
      var l = 31 - rn(o),
        c = 1 << l;
      ((c & r) | (n[l] & r) && (n[l] |= r), (o &= ~c));
    }
  }
  var Fe = 0;
  function wf(n) {
    return (
      (n &= -n),
      1 < n ? (4 < n ? ((n & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var xf,
    Hl,
    kf,
    Tf,
    If,
    Wl = !1,
    _o = [],
    Gn = null,
    Yn = null,
    Kn = null,
    ii = new Map(),
    oi = new Map(),
    Xn = [],
    gv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Cf(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Gn = null;
        break;
      case "dragenter":
      case "dragleave":
        Yn = null;
        break;
      case "mouseover":
      case "mouseout":
        Kn = null;
        break;
      case "pointerover":
      case "pointerout":
        ii.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        oi.delete(r.pointerId);
    }
  }
  function ai(n, r, o, l, c, f) {
    return n === null || n.nativeEvent !== f
      ? ((n = {
          blockedOn: r,
          domEventName: o,
          eventSystemFlags: l,
          nativeEvent: f,
          targetContainers: [c],
        }),
        r !== null && ((r = Ei(r)), r !== null && Hl(r)),
        n)
      : ((n.eventSystemFlags |= l),
        (r = n.targetContainers),
        c !== null && r.indexOf(c) === -1 && r.push(c),
        n);
  }
  function yv(n, r, o, l, c) {
    switch (r) {
      case "focusin":
        return ((Gn = ai(Gn, n, r, o, l, c)), !0);
      case "dragenter":
        return ((Yn = ai(Yn, n, r, o, l, c)), !0);
      case "mouseover":
        return ((Kn = ai(Kn, n, r, o, l, c)), !0);
      case "pointerover":
        var f = c.pointerId;
        return (ii.set(f, ai(ii.get(f) || null, n, r, o, l, c)), !0);
      case "gotpointercapture":
        return (
          (f = c.pointerId),
          oi.set(f, ai(oi.get(f) || null, n, r, o, l, c)),
          !0
        );
    }
    return !1;
  }
  function Nf(n) {
    var r = br(n.target);
    if (r !== null) {
      var o = Nr(r);
      if (o !== null) {
        if (((r = o.tag), r === 13)) {
          if (((r = pf(o)), r !== null)) {
            ((n.blockedOn = r),
              If(n.priority, function () {
                kf(o);
              }));
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function So(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = Vl(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var l = new o.constructor(o.type, o);
        ((Dl = l), o.target.dispatchEvent(l), (Dl = null));
      } else return ((r = Ei(o)), r !== null && Hl(r), (n.blockedOn = o), !1);
      r.shift();
    }
    return !0;
  }
  function bf(n, r, o) {
    So(n) && o.delete(r);
  }
  function vv() {
    ((Wl = !1),
      Gn !== null && So(Gn) && (Gn = null),
      Yn !== null && So(Yn) && (Yn = null),
      Kn !== null && So(Kn) && (Kn = null),
      ii.forEach(bf),
      oi.forEach(bf));
  }
  function li(n, r) {
    n.blockedOn === r &&
      ((n.blockedOn = null),
      Wl ||
        ((Wl = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, vv)));
  }
  function ui(n) {
    function r(c) {
      return li(c, n);
    }
    if (0 < _o.length) {
      li(_o[0], n);
      for (var o = 1; o < _o.length; o++) {
        var l = _o[o];
        l.blockedOn === n && (l.blockedOn = null);
      }
    }
    for (
      Gn !== null && li(Gn, n),
        Yn !== null && li(Yn, n),
        Kn !== null && li(Kn, n),
        ii.forEach(r),
        oi.forEach(r),
        o = 0;
      o < Xn.length;
      o++
    )
      ((l = Xn[o]), l.blockedOn === n && (l.blockedOn = null));
    for (; 0 < Xn.length && ((o = Xn[0]), o.blockedOn === null); )
      (Nf(o), o.blockedOn === null && Xn.shift());
  }
  var ss = K.ReactCurrentBatchConfig,
    Eo = !0;
  function _v(n, r, o, l) {
    var c = Fe,
      f = ss.transition;
    ss.transition = null;
    try {
      ((Fe = 1), ql(n, r, o, l));
    } finally {
      ((Fe = c), (ss.transition = f));
    }
  }
  function Sv(n, r, o, l) {
    var c = Fe,
      f = ss.transition;
    ss.transition = null;
    try {
      ((Fe = 4), ql(n, r, o, l));
    } finally {
      ((Fe = c), (ss.transition = f));
    }
  }
  function ql(n, r, o, l) {
    if (Eo) {
      var c = Vl(n, r, o, l);
      if (c === null) (uu(n, r, l, wo, o), Cf(n, l));
      else if (yv(c, n, r, o, l)) l.stopPropagation();
      else if ((Cf(n, l), r & 4 && -1 < gv.indexOf(n))) {
        for (; c !== null; ) {
          var f = Ei(c);
          if (
            (f !== null && xf(f),
            (f = Vl(n, r, o, l)),
            f === null && uu(n, r, l, wo, o),
            f === c)
          )
            break;
          c = f;
        }
        c !== null && l.stopPropagation();
      } else uu(n, r, l, null, o);
    }
  }
  var wo = null;
  function Vl(n, r, o, l) {
    if (((wo = null), (n = Al(l)), (n = br(n)), n !== null))
      if (((r = Nr(n)), r === null)) n = null;
      else if (((o = r.tag), o === 13)) {
        if (((n = pf(r)), n !== null)) return n;
        n = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else r !== n && (n = null);
    return ((wo = n), null);
  }
  function Rf(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (av()) {
          case Ul:
            return 1;
          case _f:
            return 4;
          case ho:
          case lv:
            return 16;
          case Sf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Jn = null,
    Gl = null,
    xo = null;
  function Mf() {
    if (xo) return xo;
    var n,
      r = Gl,
      o = r.length,
      l,
      c = "value" in Jn ? Jn.value : Jn.textContent,
      f = c.length;
    for (n = 0; n < o && r[n] === c[n]; n++);
    var m = o - n;
    for (l = 1; l <= m && r[o - l] === c[f - l]; l++);
    return (xo = c.slice(n, 1 < l ? 1 - l : void 0));
  }
  function ko(n) {
    var r = n.keyCode;
    return (
      "charCode" in n
        ? ((n = n.charCode), n === 0 && r === 13 && (n = 13))
        : (n = r),
      n === 10 && (n = 13),
      32 <= n || n === 13 ? n : 0
    );
  }
  function To() {
    return !0;
  }
  function Of() {
    return !1;
  }
  function Ut(n) {
    function r(o, l, c, f, m) {
      ((this._reactName = o),
        (this._targetInst = c),
        (this.type = l),
        (this.nativeEvent = f),
        (this.target = m),
        (this.currentTarget = null));
      for (var S in n)
        n.hasOwnProperty(S) && ((o = n[S]), (this[S] = o ? o(f) : f[S]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? To
          : Of),
        (this.isPropagationStopped = Of),
        this
      );
    }
    return (
      H(r.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var o = this.nativeEvent;
          o &&
            (o.preventDefault
              ? o.preventDefault()
              : typeof o.returnValue != "unknown" && (o.returnValue = !1),
            (this.isDefaultPrevented = To));
        },
        stopPropagation: function () {
          var o = this.nativeEvent;
          o &&
            (o.stopPropagation
              ? o.stopPropagation()
              : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0),
            (this.isPropagationStopped = To));
        },
        persist: function () {},
        isPersistent: To,
      }),
      r
    );
  }
  var is = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (n) {
        return n.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Yl = Ut(is),
    ci = H({}, is, { view: 0, detail: 0 }),
    Ev = Ut(ci),
    Kl,
    Xl,
    di,
    Io = H({}, ci, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ql,
      button: 0,
      buttons: 0,
      relatedTarget: function (n) {
        return n.relatedTarget === void 0
          ? n.fromElement === n.srcElement
            ? n.toElement
            : n.fromElement
          : n.relatedTarget;
      },
      movementX: function (n) {
        return "movementX" in n
          ? n.movementX
          : (n !== di &&
              (di && n.type === "mousemove"
                ? ((Kl = n.screenX - di.screenX), (Xl = n.screenY - di.screenY))
                : (Xl = Kl = 0),
              (di = n)),
            Kl);
      },
      movementY: function (n) {
        return "movementY" in n ? n.movementY : Xl;
      },
    }),
    Df = Ut(Io),
    wv = H({}, Io, { dataTransfer: 0 }),
    xv = Ut(wv),
    kv = H({}, ci, { relatedTarget: 0 }),
    Jl = Ut(kv),
    Tv = H({}, is, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Iv = Ut(Tv),
    Cv = H({}, is, {
      clipboardData: function (n) {
        return "clipboardData" in n ? n.clipboardData : window.clipboardData;
      },
    }),
    Nv = Ut(Cv),
    bv = H({}, is, { data: 0 }),
    Af = Ut(bv),
    Rv = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Mv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Ov = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Dv(n) {
    var r = this.nativeEvent;
    return r.getModifierState
      ? r.getModifierState(n)
      : (n = Ov[n])
        ? !!r[n]
        : !1;
  }
  function Ql() {
    return Dv;
  }
  var Av = H({}, ci, {
      key: function (n) {
        if (n.key) {
          var r = Rv[n.key] || n.key;
          if (r !== "Unidentified") return r;
        }
        return n.type === "keypress"
          ? ((n = ko(n)), n === 13 ? "Enter" : String.fromCharCode(n))
          : n.type === "keydown" || n.type === "keyup"
            ? Mv[n.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ql,
      charCode: function (n) {
        return n.type === "keypress" ? ko(n) : 0;
      },
      keyCode: function (n) {
        return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
      },
      which: function (n) {
        return n.type === "keypress"
          ? ko(n)
          : n.type === "keydown" || n.type === "keyup"
            ? n.keyCode
            : 0;
      },
    }),
    Pv = Ut(Av),
    Lv = H({}, Io, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Pf = Ut(Lv),
    jv = H({}, ci, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ql,
    }),
    Fv = Ut(jv),
    Uv = H({}, is, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    zv = Ut(Uv),
    $v = H({}, Io, {
      deltaX: function (n) {
        return "deltaX" in n
          ? n.deltaX
          : "wheelDeltaX" in n
            ? -n.wheelDeltaX
            : 0;
      },
      deltaY: function (n) {
        return "deltaY" in n
          ? n.deltaY
          : "wheelDeltaY" in n
            ? -n.wheelDeltaY
            : "wheelDelta" in n
              ? -n.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Bv = Ut($v),
    Hv = [9, 13, 27, 32],
    Zl = p && "CompositionEvent" in window,
    fi = null;
  p && "documentMode" in document && (fi = document.documentMode);
  var Wv = p && "TextEvent" in window && !fi,
    Lf = p && (!Zl || (fi && 8 < fi && 11 >= fi)),
    jf = " ",
    Ff = !1;
  function Uf(n, r) {
    switch (n) {
      case "keyup":
        return Hv.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function zf(n) {
    return (
      (n = n.detail),
      typeof n == "object" && "data" in n ? n.data : null
    );
  }
  var os = !1;
  function qv(n, r) {
    switch (n) {
      case "compositionend":
        return zf(r);
      case "keypress":
        return r.which !== 32 ? null : ((Ff = !0), jf);
      case "textInput":
        return ((n = r.data), n === jf && Ff ? null : n);
      default:
        return null;
    }
  }
  function Vv(n, r) {
    if (os)
      return n === "compositionend" || (!Zl && Uf(n, r))
        ? ((n = Mf()), (xo = Gl = Jn = null), (os = !1), n)
        : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || (r.ctrlKey && r.altKey)) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Lf && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Gv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function $f(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Gv[n.type] : r === "textarea";
  }
  function Bf(n, r, o, l) {
    (lf(l),
      (r = Mo(r, "onChange")),
      0 < r.length &&
        ((o = new Yl("onChange", "change", null, o, l)),
        n.push({ event: o, listeners: r })));
  }
  var pi = null,
    hi = null;
  function Yv(n) {
    op(n, 0);
  }
  function Co(n) {
    var r = ds(n);
    if (ts(r)) return n;
  }
  function Kv(n, r) {
    if (n === "change") return r;
  }
  var Hf = !1;
  if (p) {
    var eu;
    if (p) {
      var tu = "oninput" in document;
      if (!tu) {
        var Wf = document.createElement("div");
        (Wf.setAttribute("oninput", "return;"),
          (tu = typeof Wf.oninput == "function"));
      }
      eu = tu;
    } else eu = !1;
    Hf = eu && (!document.documentMode || 9 < document.documentMode);
  }
  function qf() {
    pi && (pi.detachEvent("onpropertychange", Vf), (hi = pi = null));
  }
  function Vf(n) {
    if (n.propertyName === "value" && Co(hi)) {
      var r = [];
      (Bf(r, hi, n, Al(n)), ff(Yv, r));
    }
  }
  function Xv(n, r, o) {
    n === "focusin"
      ? (qf(), (pi = r), (hi = o), pi.attachEvent("onpropertychange", Vf))
      : n === "focusout" && qf();
  }
  function Jv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Co(hi);
  }
  function Qv(n, r) {
    if (n === "click") return Co(r);
  }
  function Zv(n, r) {
    if (n === "input" || n === "change") return Co(r);
  }
  function e_(n, r) {
    return (n === r && (n !== 0 || 1 / n === 1 / r)) || (n !== n && r !== r);
  }
  var sn = typeof Object.is == "function" ? Object.is : e_;
  function mi(n, r) {
    if (sn(n, r)) return !0;
    if (
      typeof n != "object" ||
      n === null ||
      typeof r != "object" ||
      r === null
    )
      return !1;
    var o = Object.keys(n),
      l = Object.keys(r);
    if (o.length !== l.length) return !1;
    for (l = 0; l < o.length; l++) {
      var c = o[l];
      if (!h.call(r, c) || !sn(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Gf(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Yf(n, r) {
    var o = Gf(n);
    n = 0;
    for (var l; o; ) {
      if (o.nodeType === 3) {
        if (((l = n + o.textContent.length), n <= r && l >= r))
          return { node: o, offset: r - n };
        n = l;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Gf(o);
    }
  }
  function Kf(n, r) {
    return n && r
      ? n === r
        ? !0
        : n && n.nodeType === 3
          ? !1
          : r && r.nodeType === 3
            ? Kf(n, r.parentNode)
            : "contains" in n
              ? n.contains(r)
              : n.compareDocumentPosition
                ? !!(n.compareDocumentPosition(r) & 16)
                : !1
      : !1;
  }
  function Xf() {
    for (var n = window, r = Vn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) n = r.contentWindow;
      else break;
      r = Vn(n.document);
    }
    return r;
  }
  function nu(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return (
      r &&
      ((r === "input" &&
        (n.type === "text" ||
          n.type === "search" ||
          n.type === "tel" ||
          n.type === "url" ||
          n.type === "password")) ||
        r === "textarea" ||
        n.contentEditable === "true")
    );
  }
  function t_(n) {
    var r = Xf(),
      o = n.focusedElem,
      l = n.selectionRange;
    if (
      r !== o &&
      o &&
      o.ownerDocument &&
      Kf(o.ownerDocument.documentElement, o)
    ) {
      if (l !== null && nu(o)) {
        if (
          ((r = l.start),
          (n = l.end),
          n === void 0 && (n = r),
          "selectionStart" in o)
        )
          ((o.selectionStart = r),
            (o.selectionEnd = Math.min(n, o.value.length)));
        else if (
          ((n = ((r = o.ownerDocument || document) && r.defaultView) || window),
          n.getSelection)
        ) {
          n = n.getSelection();
          var c = o.textContent.length,
            f = Math.min(l.start, c);
          ((l = l.end === void 0 ? f : Math.min(l.end, c)),
            !n.extend && f > l && ((c = l), (l = f), (f = c)),
            (c = Yf(o, f)));
          var m = Yf(o, l);
          c &&
            m &&
            (n.rangeCount !== 1 ||
              n.anchorNode !== c.node ||
              n.anchorOffset !== c.offset ||
              n.focusNode !== m.node ||
              n.focusOffset !== m.offset) &&
            ((r = r.createRange()),
            r.setStart(c.node, c.offset),
            n.removeAllRanges(),
            f > l
              ? (n.addRange(r), n.extend(m.node, m.offset))
              : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; (n = n.parentNode); )
        n.nodeType === 1 &&
          r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        ((n = r[o]),
          (n.element.scrollLeft = n.left),
          (n.element.scrollTop = n.top));
    }
  }
  var n_ = p && "documentMode" in document && 11 >= document.documentMode,
    as = null,
    ru = null,
    gi = null,
    su = !1;
  function Jf(n, r, o) {
    var l =
      o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    su ||
      as == null ||
      as !== Vn(l) ||
      ((l = as),
      "selectionStart" in l && nu(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (gi && mi(gi, l)) ||
        ((gi = l),
        (l = Mo(ru, "onSelect")),
        0 < l.length &&
          ((r = new Yl("onSelect", "select", null, r, o)),
          n.push({ event: r, listeners: l }),
          (r.target = as))));
  }
  function No(n, r) {
    var o = {};
    return (
      (o[n.toLowerCase()] = r.toLowerCase()),
      (o["Webkit" + n] = "webkit" + r),
      (o["Moz" + n] = "moz" + r),
      o
    );
  }
  var ls = {
      animationend: No("Animation", "AnimationEnd"),
      animationiteration: No("Animation", "AnimationIteration"),
      animationstart: No("Animation", "AnimationStart"),
      transitionend: No("Transition", "TransitionEnd"),
    },
    iu = {},
    Qf = {};
  p &&
    ((Qf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ls.animationend.animation,
      delete ls.animationiteration.animation,
      delete ls.animationstart.animation),
    "TransitionEvent" in window || delete ls.transitionend.transition);
  function bo(n) {
    if (iu[n]) return iu[n];
    if (!ls[n]) return n;
    var r = ls[n],
      o;
    for (o in r) if (r.hasOwnProperty(o) && o in Qf) return (iu[n] = r[o]);
    return n;
  }
  var Zf = bo("animationend"),
    ep = bo("animationiteration"),
    tp = bo("animationstart"),
    np = bo("transitionend"),
    rp = new Map(),
    sp =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Qn(n, r) {
    (rp.set(n, r), u(r, [n]));
  }
  for (var ou = 0; ou < sp.length; ou++) {
    var au = sp[ou],
      r_ = au.toLowerCase(),
      s_ = au[0].toUpperCase() + au.slice(1);
    Qn(r_, "on" + s_);
  }
  (Qn(Zf, "onAnimationEnd"),
    Qn(ep, "onAnimationIteration"),
    Qn(tp, "onAnimationStart"),
    Qn("dblclick", "onDoubleClick"),
    Qn("focusin", "onFocus"),
    Qn("focusout", "onBlur"),
    Qn(np, "onTransitionEnd"),
    d("onMouseEnter", ["mouseout", "mouseover"]),
    d("onMouseLeave", ["mouseout", "mouseover"]),
    d("onPointerEnter", ["pointerout", "pointerover"]),
    d("onPointerLeave", ["pointerout", "pointerover"]),
    u(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    u(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    u(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    u(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    u(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var yi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    i_ = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(yi),
    );
  function ip(n, r, o) {
    var l = n.type || "unknown-event";
    ((n.currentTarget = o), rv(l, r, void 0, n), (n.currentTarget = null));
  }
  function op(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var l = n[o],
        c = l.event;
      l = l.listeners;
      e: {
        var f = void 0;
        if (r)
          for (var m = l.length - 1; 0 <= m; m--) {
            var S = l[m],
              w = S.instance,
              O = S.currentTarget;
            if (((S = S.listener), w !== f && c.isPropagationStopped()))
              break e;
            (ip(c, S, O), (f = w));
          }
        else
          for (m = 0; m < l.length; m++) {
            if (
              ((S = l[m]),
              (w = S.instance),
              (O = S.currentTarget),
              (S = S.listener),
              w !== f && c.isPropagationStopped())
            )
              break e;
            (ip(c, S, O), (f = w));
          }
      }
    }
    if (po) throw ((n = Fl), (po = !1), (Fl = null), n);
  }
  function qe(n, r) {
    var o = r[mu];
    o === void 0 && (o = r[mu] = new Set());
    var l = n + "__bubble";
    o.has(l) || (ap(r, n, 2, !1), o.add(l));
  }
  function lu(n, r, o) {
    var l = 0;
    (r && (l |= 4), ap(o, n, l, r));
  }
  var Ro = "_reactListening" + Math.random().toString(36).slice(2);
  function vi(n) {
    if (!n[Ro]) {
      ((n[Ro] = !0),
        i.forEach(function (o) {
          o !== "selectionchange" && (i_.has(o) || lu(o, !1, n), lu(o, !0, n));
        }));
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ro] || ((r[Ro] = !0), lu("selectionchange", !1, r));
    }
  }
  function ap(n, r, o, l) {
    switch (Rf(r)) {
      case 1:
        var c = _v;
        break;
      case 4:
        c = Sv;
        break;
      default:
        c = ql;
    }
    ((o = c.bind(null, r, o, n)),
      (c = void 0),
      !jl ||
        (r !== "touchstart" && r !== "touchmove" && r !== "wheel") ||
        (c = !0),
      l
        ? c !== void 0
          ? n.addEventListener(r, o, { capture: !0, passive: c })
          : n.addEventListener(r, o, !0)
        : c !== void 0
          ? n.addEventListener(r, o, { passive: c })
          : n.addEventListener(r, o, !1));
  }
  function uu(n, r, o, l, c) {
    var f = l;
    if ((r & 1) === 0 && (r & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var m = l.tag;
        if (m === 3 || m === 4) {
          var S = l.stateNode.containerInfo;
          if (S === c || (S.nodeType === 8 && S.parentNode === c)) break;
          if (m === 4)
            for (m = l.return; m !== null; ) {
              var w = m.tag;
              if (
                (w === 3 || w === 4) &&
                ((w = m.stateNode.containerInfo),
                w === c || (w.nodeType === 8 && w.parentNode === c))
              )
                return;
              m = m.return;
            }
          for (; S !== null; ) {
            if (((m = br(S)), m === null)) return;
            if (((w = m.tag), w === 5 || w === 6)) {
              l = f = m;
              continue e;
            }
            S = S.parentNode;
          }
        }
        l = l.return;
      }
    ff(function () {
      var O = f,
        F = Al(o),
        U = [];
      e: {
        var j = rp.get(n);
        if (j !== void 0) {
          var Y = Yl,
            Z = n;
          switch (n) {
            case "keypress":
              if (ko(o) === 0) break e;
            case "keydown":
            case "keyup":
              Y = Pv;
              break;
            case "focusin":
              ((Z = "focus"), (Y = Jl));
              break;
            case "focusout":
              ((Z = "blur"), (Y = Jl));
              break;
            case "beforeblur":
            case "afterblur":
              Y = Jl;
              break;
            case "click":
              if (o.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Y = Df;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Y = xv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Y = Fv;
              break;
            case Zf:
            case ep:
            case tp:
              Y = Iv;
              break;
            case np:
              Y = zv;
              break;
            case "scroll":
              Y = Ev;
              break;
            case "wheel":
              Y = Bv;
              break;
            case "copy":
            case "cut":
            case "paste":
              Y = Nv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Y = Pf;
          }
          var te = (r & 4) !== 0,
            et = !te && n === "scroll",
            b = te ? (j !== null ? j + "Capture" : null) : j;
          te = [];
          for (var k = O, M; k !== null; ) {
            M = k;
            var $ = M.stateNode;
            if (
              (M.tag === 5 &&
                $ !== null &&
                ((M = $),
                b !== null &&
                  (($ = ei(k, b)), $ != null && te.push(_i(k, $, M)))),
              et)
            )
              break;
            k = k.return;
          }
          0 < te.length &&
            ((j = new Y(j, Z, null, o, F)),
            U.push({ event: j, listeners: te }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (
            ((j = n === "mouseover" || n === "pointerover"),
            (Y = n === "mouseout" || n === "pointerout"),
            j &&
              o !== Dl &&
              (Z = o.relatedTarget || o.fromElement) &&
              (br(Z) || Z[Cn]))
          )
            break e;
          if (
            (Y || j) &&
            ((j =
              F.window === F
                ? F
                : (j = F.ownerDocument)
                  ? j.defaultView || j.parentWindow
                  : window),
            Y
              ? ((Z = o.relatedTarget || o.toElement),
                (Y = O),
                (Z = Z ? br(Z) : null),
                Z !== null &&
                  ((et = Nr(Z)), Z !== et || (Z.tag !== 5 && Z.tag !== 6)) &&
                  (Z = null))
              : ((Y = null), (Z = O)),
            Y !== Z)
          ) {
            if (
              ((te = Df),
              ($ = "onMouseLeave"),
              (b = "onMouseEnter"),
              (k = "mouse"),
              (n === "pointerout" || n === "pointerover") &&
                ((te = Pf),
                ($ = "onPointerLeave"),
                (b = "onPointerEnter"),
                (k = "pointer")),
              (et = Y == null ? j : ds(Y)),
              (M = Z == null ? j : ds(Z)),
              (j = new te($, k + "leave", Y, o, F)),
              (j.target = et),
              (j.relatedTarget = M),
              ($ = null),
              br(F) === O &&
                ((te = new te(b, k + "enter", Z, o, F)),
                (te.target = M),
                (te.relatedTarget = et),
                ($ = te)),
              (et = $),
              Y && Z)
            )
              t: {
                for (te = Y, b = Z, k = 0, M = te; M; M = us(M)) k++;
                for (M = 0, $ = b; $; $ = us($)) M++;
                for (; 0 < k - M; ) ((te = us(te)), k--);
                for (; 0 < M - k; ) ((b = us(b)), M--);
                for (; k--; ) {
                  if (te === b || (b !== null && te === b.alternate)) break t;
                  ((te = us(te)), (b = us(b)));
                }
                te = null;
              }
            else te = null;
            (Y !== null && lp(U, j, Y, te, !1),
              Z !== null && et !== null && lp(U, et, Z, te, !0));
          }
        }
        e: {
          if (
            ((j = O ? ds(O) : window),
            (Y = j.nodeName && j.nodeName.toLowerCase()),
            Y === "select" || (Y === "input" && j.type === "file"))
          )
            var ne = Kv;
          else if ($f(j))
            if (Hf) ne = Zv;
            else {
              ne = Jv;
              var ie = Xv;
            }
          else
            (Y = j.nodeName) &&
              Y.toLowerCase() === "input" &&
              (j.type === "checkbox" || j.type === "radio") &&
              (ne = Qv);
          if (ne && (ne = ne(n, O))) {
            Bf(U, ne, o, F);
            break e;
          }
          (ie && ie(n, j, O),
            n === "focusout" &&
              (ie = j._wrapperState) &&
              ie.controlled &&
              j.type === "number" &&
              In(j, "number", j.value));
        }
        switch (((ie = O ? ds(O) : window), n)) {
          case "focusin":
            ($f(ie) || ie.contentEditable === "true") &&
              ((as = ie), (ru = O), (gi = null));
            break;
          case "focusout":
            gi = ru = as = null;
            break;
          case "mousedown":
            su = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((su = !1), Jf(U, o, F));
            break;
          case "selectionchange":
            if (n_) break;
          case "keydown":
          case "keyup":
            Jf(U, o, F);
        }
        var oe;
        if (Zl)
          e: {
            switch (n) {
              case "compositionstart":
                var de = "onCompositionStart";
                break e;
              case "compositionend":
                de = "onCompositionEnd";
                break e;
              case "compositionupdate":
                de = "onCompositionUpdate";
                break e;
            }
            de = void 0;
          }
        else
          os
            ? Uf(n, o) && (de = "onCompositionEnd")
            : n === "keydown" &&
              o.keyCode === 229 &&
              (de = "onCompositionStart");
        (de &&
          (Lf &&
            o.locale !== "ko" &&
            (os || de !== "onCompositionStart"
              ? de === "onCompositionEnd" && os && (oe = Mf())
              : ((Jn = F),
                (Gl = "value" in Jn ? Jn.value : Jn.textContent),
                (os = !0))),
          (ie = Mo(O, de)),
          0 < ie.length &&
            ((de = new Af(de, n, null, o, F)),
            U.push({ event: de, listeners: ie }),
            oe
              ? (de.data = oe)
              : ((oe = zf(o)), oe !== null && (de.data = oe)))),
          (oe = Wv ? qv(n, o) : Vv(n, o)) &&
            ((O = Mo(O, "onBeforeInput")),
            0 < O.length &&
              ((F = new Af("onBeforeInput", "beforeinput", null, o, F)),
              U.push({ event: F, listeners: O }),
              (F.data = oe))));
      }
      op(U, r);
    });
  }
  function _i(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function Mo(n, r) {
    for (var o = r + "Capture", l = []; n !== null; ) {
      var c = n,
        f = c.stateNode;
      (c.tag === 5 &&
        f !== null &&
        ((c = f),
        (f = ei(n, o)),
        f != null && l.unshift(_i(n, f, c)),
        (f = ei(n, r)),
        f != null && l.push(_i(n, f, c))),
        (n = n.return));
    }
    return l;
  }
  function us(n) {
    if (n === null) return null;
    do n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function lp(n, r, o, l, c) {
    for (var f = r._reactName, m = []; o !== null && o !== l; ) {
      var S = o,
        w = S.alternate,
        O = S.stateNode;
      if (w !== null && w === l) break;
      (S.tag === 5 &&
        O !== null &&
        ((S = O),
        c
          ? ((w = ei(o, f)), w != null && m.unshift(_i(o, w, S)))
          : c || ((w = ei(o, f)), w != null && m.push(_i(o, w, S)))),
        (o = o.return));
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var o_ = /\r\n?/g,
    a_ = /\u0000|\uFFFD/g;
  function up(n) {
    return (typeof n == "string" ? n : "" + n)
      .replace(
        o_,
        `
`,
      )
      .replace(a_, "");
  }
  function Oo(n, r, o) {
    if (((r = up(r)), up(n) !== r && o)) throw Error(s(425));
  }
  function Do() {}
  var cu = null,
    du = null;
  function fu(n, r) {
    return (
      n === "textarea" ||
      n === "noscript" ||
      typeof r.children == "string" ||
      typeof r.children == "number" ||
      (typeof r.dangerouslySetInnerHTML == "object" &&
        r.dangerouslySetInnerHTML !== null &&
        r.dangerouslySetInnerHTML.__html != null)
    );
  }
  var pu = typeof setTimeout == "function" ? setTimeout : void 0,
    l_ = typeof clearTimeout == "function" ? clearTimeout : void 0,
    cp = typeof Promise == "function" ? Promise : void 0,
    u_ =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof cp < "u"
          ? function (n) {
              return cp.resolve(null).then(n).catch(c_);
            }
          : pu;
  function c_(n) {
    setTimeout(function () {
      throw n;
    });
  }
  function hu(n, r) {
    var o = r,
      l = 0;
    do {
      var c = o.nextSibling;
      if ((n.removeChild(o), c && c.nodeType === 8))
        if (((o = c.data), o === "/$")) {
          if (l === 0) {
            (n.removeChild(c), ui(r));
            return;
          }
          l--;
        } else (o !== "$" && o !== "$?" && o !== "$!") || l++;
      o = c;
    } while (o);
    ui(r);
  }
  function Zn(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (((r = n.data), r === "$" || r === "$!" || r === "$?")) break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function dp(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0) return n;
          r--;
        } else o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var cs = Math.random().toString(36).slice(2),
    yn = "__reactFiber$" + cs,
    Si = "__reactProps$" + cs,
    Cn = "__reactContainer$" + cs,
    mu = "__reactEvents$" + cs,
    d_ = "__reactListeners$" + cs,
    f_ = "__reactHandles$" + cs;
  function br(n) {
    var r = n[yn];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if ((r = o[Cn] || o[yn])) {
        if (
          ((o = r.alternate),
          r.child !== null || (o !== null && o.child !== null))
        )
          for (n = dp(n); n !== null; ) {
            if ((o = n[yn])) return o;
            n = dp(n);
          }
        return r;
      }
      ((n = o), (o = n.parentNode));
    }
    return null;
  }
  function Ei(n) {
    return (
      (n = n[yn] || n[Cn]),
      !n || (n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3)
        ? null
        : n
    );
  }
  function ds(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(s(33));
  }
  function Ao(n) {
    return n[Si] || null;
  }
  var gu = [],
    fs = -1;
  function er(n) {
    return { current: n };
  }
  function Ve(n) {
    0 > fs || ((n.current = gu[fs]), (gu[fs] = null), fs--);
  }
  function Be(n, r) {
    (fs++, (gu[fs] = n.current), (n.current = r));
  }
  var tr = {},
    _t = er(tr),
    Rt = er(!1),
    Rr = tr;
  function ps(n, r) {
    var o = n.type.contextTypes;
    if (!o) return tr;
    var l = n.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === r)
      return l.__reactInternalMemoizedMaskedChildContext;
    var c = {},
      f;
    for (f in o) c[f] = r[f];
    return (
      l &&
        ((n = n.stateNode),
        (n.__reactInternalMemoizedUnmaskedChildContext = r),
        (n.__reactInternalMemoizedMaskedChildContext = c)),
      c
    );
  }
  function Mt(n) {
    return ((n = n.childContextTypes), n != null);
  }
  function Po() {
    (Ve(Rt), Ve(_t));
  }
  function fp(n, r, o) {
    if (_t.current !== tr) throw Error(s(168));
    (Be(_t, r), Be(Rt, o));
  }
  function pp(n, r, o) {
    var l = n.stateNode;
    if (((r = r.childContextTypes), typeof l.getChildContext != "function"))
      return o;
    l = l.getChildContext();
    for (var c in l) if (!(c in r)) throw Error(s(108, Oe(n) || "Unknown", c));
    return H({}, o, l);
  }
  function Lo(n) {
    return (
      (n =
        ((n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext) ||
        tr),
      (Rr = _t.current),
      Be(_t, n),
      Be(Rt, Rt.current),
      !0
    );
  }
  function hp(n, r, o) {
    var l = n.stateNode;
    if (!l) throw Error(s(169));
    (o
      ? ((n = pp(n, r, Rr)),
        (l.__reactInternalMemoizedMergedChildContext = n),
        Ve(Rt),
        Ve(_t),
        Be(_t, n))
      : Ve(Rt),
      Be(Rt, o));
  }
  var Nn = null,
    jo = !1,
    yu = !1;
  function mp(n) {
    Nn === null ? (Nn = [n]) : Nn.push(n);
  }
  function p_(n) {
    ((jo = !0), mp(n));
  }
  function nr() {
    if (!yu && Nn !== null) {
      yu = !0;
      var n = 0,
        r = Fe;
      try {
        var o = Nn;
        for (Fe = 1; n < o.length; n++) {
          var l = o[n];
          do l = l(!0);
          while (l !== null);
        }
        ((Nn = null), (jo = !1));
      } catch (c) {
        throw (Nn !== null && (Nn = Nn.slice(n + 1)), yf(Ul, nr), c);
      } finally {
        ((Fe = r), (yu = !1));
      }
    }
    return null;
  }
  var hs = [],
    ms = 0,
    Fo = null,
    Uo = 0,
    Gt = [],
    Yt = 0,
    Mr = null,
    bn = 1,
    Rn = "";
  function Or(n, r) {
    ((hs[ms++] = Uo), (hs[ms++] = Fo), (Fo = n), (Uo = r));
  }
  function gp(n, r, o) {
    ((Gt[Yt++] = bn), (Gt[Yt++] = Rn), (Gt[Yt++] = Mr), (Mr = n));
    var l = bn;
    n = Rn;
    var c = 32 - rn(l) - 1;
    ((l &= ~(1 << c)), (o += 1));
    var f = 32 - rn(r) + c;
    if (30 < f) {
      var m = c - (c % 5);
      ((f = (l & ((1 << m) - 1)).toString(32)),
        (l >>= m),
        (c -= m),
        (bn = (1 << (32 - rn(r) + c)) | (o << c) | l),
        (Rn = f + n));
    } else ((bn = (1 << f) | (o << c) | l), (Rn = n));
  }
  function vu(n) {
    n.return !== null && (Or(n, 1), gp(n, 1, 0));
  }
  function _u(n) {
    for (; n === Fo; )
      ((Fo = hs[--ms]), (hs[ms] = null), (Uo = hs[--ms]), (hs[ms] = null));
    for (; n === Mr; )
      ((Mr = Gt[--Yt]),
        (Gt[Yt] = null),
        (Rn = Gt[--Yt]),
        (Gt[Yt] = null),
        (bn = Gt[--Yt]),
        (Gt[Yt] = null));
  }
  var zt = null,
    $t = null,
    Ge = !1,
    on = null;
  function yp(n, r) {
    var o = Qt(5, null, null, 0);
    ((o.elementType = "DELETED"),
      (o.stateNode = r),
      (o.return = n),
      (r = n.deletions),
      r === null ? ((n.deletions = [o]), (n.flags |= 16)) : r.push(o));
  }
  function vp(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return (
          (r =
            r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase()
              ? null
              : r),
          r !== null
            ? ((n.stateNode = r), (zt = n), ($t = Zn(r.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (r = n.pendingProps === "" || r.nodeType !== 3 ? null : r),
          r !== null ? ((n.stateNode = r), (zt = n), ($t = null), !0) : !1
        );
      case 13:
        return (
          (r = r.nodeType !== 8 ? null : r),
          r !== null
            ? ((o = Mr !== null ? { id: bn, overflow: Rn } : null),
              (n.memoizedState = {
                dehydrated: r,
                treeContext: o,
                retryLane: 1073741824,
              }),
              (o = Qt(18, null, null, 0)),
              (o.stateNode = r),
              (o.return = n),
              (n.child = o),
              (zt = n),
              ($t = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Su(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Eu(n) {
    if (Ge) {
      var r = $t;
      if (r) {
        var o = r;
        if (!vp(n, r)) {
          if (Su(n)) throw Error(s(418));
          r = Zn(o.nextSibling);
          var l = zt;
          r && vp(n, r)
            ? yp(l, o)
            : ((n.flags = (n.flags & -4097) | 2), (Ge = !1), (zt = n));
        }
      } else {
        if (Su(n)) throw Error(s(418));
        ((n.flags = (n.flags & -4097) | 2), (Ge = !1), (zt = n));
      }
    }
  }
  function _p(n) {
    for (
      n = n.return;
      n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13;
    )
      n = n.return;
    zt = n;
  }
  function zo(n) {
    if (n !== zt) return !1;
    if (!Ge) return (_p(n), (Ge = !0), !1);
    var r;
    if (
      ((r = n.tag !== 3) &&
        !(r = n.tag !== 5) &&
        ((r = n.type),
        (r = r !== "head" && r !== "body" && !fu(n.type, n.memoizedProps))),
      r && (r = $t))
    ) {
      if (Su(n)) throw (Sp(), Error(s(418)));
      for (; r; ) (yp(n, r), (r = Zn(r.nextSibling)));
    }
    if ((_p(n), n.tag === 13)) {
      if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
        throw Error(s(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                $t = Zn(n.nextSibling);
                break e;
              }
              r--;
            } else (o !== "$" && o !== "$!" && o !== "$?") || r++;
          }
          n = n.nextSibling;
        }
        $t = null;
      }
    } else $t = zt ? Zn(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Sp() {
    for (var n = $t; n; ) n = Zn(n.nextSibling);
  }
  function gs() {
    (($t = zt = null), (Ge = !1));
  }
  function wu(n) {
    on === null ? (on = [n]) : on.push(n);
  }
  var h_ = K.ReactCurrentBatchConfig;
  function wi(n, r, o) {
    if (
      ((n = o.ref),
      n !== null && typeof n != "function" && typeof n != "object")
    ) {
      if (o._owner) {
        if (((o = o._owner), o)) {
          if (o.tag !== 1) throw Error(s(309));
          var l = o.stateNode;
        }
        if (!l) throw Error(s(147, n));
        var c = l,
          f = "" + n;
        return r !== null &&
          r.ref !== null &&
          typeof r.ref == "function" &&
          r.ref._stringRef === f
          ? r.ref
          : ((r = function (m) {
              var S = c.refs;
              m === null ? delete S[f] : (S[f] = m);
            }),
            (r._stringRef = f),
            r);
      }
      if (typeof n != "string") throw Error(s(284));
      if (!o._owner) throw Error(s(290, n));
    }
    return n;
  }
  function $o(n, r) {
    throw (
      (n = Object.prototype.toString.call(r)),
      Error(
        s(
          31,
          n === "[object Object]"
            ? "object with keys {" + Object.keys(r).join(", ") + "}"
            : n,
        ),
      )
    );
  }
  function Ep(n) {
    var r = n._init;
    return r(n._payload);
  }
  function wp(n) {
    function r(b, k) {
      if (n) {
        var M = b.deletions;
        M === null ? ((b.deletions = [k]), (b.flags |= 16)) : M.push(k);
      }
    }
    function o(b, k) {
      if (!n) return null;
      for (; k !== null; ) (r(b, k), (k = k.sibling));
      return null;
    }
    function l(b, k) {
      for (b = new Map(); k !== null; )
        (k.key !== null ? b.set(k.key, k) : b.set(k.index, k), (k = k.sibling));
      return b;
    }
    function c(b, k) {
      return ((b = cr(b, k)), (b.index = 0), (b.sibling = null), b);
    }
    function f(b, k, M) {
      return (
        (b.index = M),
        n
          ? ((M = b.alternate),
            M !== null
              ? ((M = M.index), M < k ? ((b.flags |= 2), k) : M)
              : ((b.flags |= 2), k))
          : ((b.flags |= 1048576), k)
      );
    }
    function m(b) {
      return (n && b.alternate === null && (b.flags |= 2), b);
    }
    function S(b, k, M, $) {
      return k === null || k.tag !== 6
        ? ((k = pc(M, b.mode, $)), (k.return = b), k)
        : ((k = c(k, M)), (k.return = b), k);
    }
    function w(b, k, M, $) {
      var ne = M.type;
      return ne === q
        ? F(b, k, M.props.children, $, M.key)
        : k !== null &&
            (k.elementType === ne ||
              (typeof ne == "object" &&
                ne !== null &&
                ne.$$typeof === re &&
                Ep(ne) === k.type))
          ? (($ = c(k, M.props)), ($.ref = wi(b, k, M)), ($.return = b), $)
          : (($ = da(M.type, M.key, M.props, null, b.mode, $)),
            ($.ref = wi(b, k, M)),
            ($.return = b),
            $);
    }
    function O(b, k, M, $) {
      return k === null ||
        k.tag !== 4 ||
        k.stateNode.containerInfo !== M.containerInfo ||
        k.stateNode.implementation !== M.implementation
        ? ((k = hc(M, b.mode, $)), (k.return = b), k)
        : ((k = c(k, M.children || [])), (k.return = b), k);
    }
    function F(b, k, M, $, ne) {
      return k === null || k.tag !== 7
        ? ((k = zr(M, b.mode, $, ne)), (k.return = b), k)
        : ((k = c(k, M)), (k.return = b), k);
    }
    function U(b, k, M) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((k = pc("" + k, b.mode, M)), (k.return = b), k);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case R:
            return (
              (M = da(k.type, k.key, k.props, null, b.mode, M)),
              (M.ref = wi(b, null, k)),
              (M.return = b),
              M
            );
          case A:
            return ((k = hc(k, b.mode, M)), (k.return = b), k);
          case re:
            var $ = k._init;
            return U(b, $(k._payload), M);
        }
        if (ke(k) || J(k))
          return ((k = zr(k, b.mode, M, null)), (k.return = b), k);
        $o(b, k);
      }
      return null;
    }
    function j(b, k, M, $) {
      var ne = k !== null ? k.key : null;
      if ((typeof M == "string" && M !== "") || typeof M == "number")
        return ne !== null ? null : S(b, k, "" + M, $);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case R:
            return M.key === ne ? w(b, k, M, $) : null;
          case A:
            return M.key === ne ? O(b, k, M, $) : null;
          case re:
            return ((ne = M._init), j(b, k, ne(M._payload), $));
        }
        if (ke(M) || J(M)) return ne !== null ? null : F(b, k, M, $, null);
        $o(b, M);
      }
      return null;
    }
    function Y(b, k, M, $, ne) {
      if ((typeof $ == "string" && $ !== "") || typeof $ == "number")
        return ((b = b.get(M) || null), S(k, b, "" + $, ne));
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case R:
            return (
              (b = b.get($.key === null ? M : $.key) || null),
              w(k, b, $, ne)
            );
          case A:
            return (
              (b = b.get($.key === null ? M : $.key) || null),
              O(k, b, $, ne)
            );
          case re:
            var ie = $._init;
            return Y(b, k, M, ie($._payload), ne);
        }
        if (ke($) || J($))
          return ((b = b.get(M) || null), F(k, b, $, ne, null));
        $o(k, $);
      }
      return null;
    }
    function Z(b, k, M, $) {
      for (
        var ne = null, ie = null, oe = k, de = (k = 0), dt = null;
        oe !== null && de < M.length;
        de++
      ) {
        oe.index > de ? ((dt = oe), (oe = null)) : (dt = oe.sibling);
        var De = j(b, oe, M[de], $);
        if (De === null) {
          oe === null && (oe = dt);
          break;
        }
        (n && oe && De.alternate === null && r(b, oe),
          (k = f(De, k, de)),
          ie === null ? (ne = De) : (ie.sibling = De),
          (ie = De),
          (oe = dt));
      }
      if (de === M.length) return (o(b, oe), Ge && Or(b, de), ne);
      if (oe === null) {
        for (; de < M.length; de++)
          ((oe = U(b, M[de], $)),
            oe !== null &&
              ((k = f(oe, k, de)),
              ie === null ? (ne = oe) : (ie.sibling = oe),
              (ie = oe)));
        return (Ge && Or(b, de), ne);
      }
      for (oe = l(b, oe); de < M.length; de++)
        ((dt = Y(oe, b, de, M[de], $)),
          dt !== null &&
            (n &&
              dt.alternate !== null &&
              oe.delete(dt.key === null ? de : dt.key),
            (k = f(dt, k, de)),
            ie === null ? (ne = dt) : (ie.sibling = dt),
            (ie = dt)));
      return (
        n &&
          oe.forEach(function (dr) {
            return r(b, dr);
          }),
        Ge && Or(b, de),
        ne
      );
    }
    function te(b, k, M, $) {
      var ne = J(M);
      if (typeof ne != "function") throw Error(s(150));
      if (((M = ne.call(M)), M == null)) throw Error(s(151));
      for (
        var ie = (ne = null), oe = k, de = (k = 0), dt = null, De = M.next();
        oe !== null && !De.done;
        de++, De = M.next()
      ) {
        oe.index > de ? ((dt = oe), (oe = null)) : (dt = oe.sibling);
        var dr = j(b, oe, De.value, $);
        if (dr === null) {
          oe === null && (oe = dt);
          break;
        }
        (n && oe && dr.alternate === null && r(b, oe),
          (k = f(dr, k, de)),
          ie === null ? (ne = dr) : (ie.sibling = dr),
          (ie = dr),
          (oe = dt));
      }
      if (De.done) return (o(b, oe), Ge && Or(b, de), ne);
      if (oe === null) {
        for (; !De.done; de++, De = M.next())
          ((De = U(b, De.value, $)),
            De !== null &&
              ((k = f(De, k, de)),
              ie === null ? (ne = De) : (ie.sibling = De),
              (ie = De)));
        return (Ge && Or(b, de), ne);
      }
      for (oe = l(b, oe); !De.done; de++, De = M.next())
        ((De = Y(oe, b, de, De.value, $)),
          De !== null &&
            (n &&
              De.alternate !== null &&
              oe.delete(De.key === null ? de : De.key),
            (k = f(De, k, de)),
            ie === null ? (ne = De) : (ie.sibling = De),
            (ie = De)));
      return (
        n &&
          oe.forEach(function (G_) {
            return r(b, G_);
          }),
        Ge && Or(b, de),
        ne
      );
    }
    function et(b, k, M, $) {
      if (
        (typeof M == "object" &&
          M !== null &&
          M.type === q &&
          M.key === null &&
          (M = M.props.children),
        typeof M == "object" && M !== null)
      ) {
        switch (M.$$typeof) {
          case R:
            e: {
              for (var ne = M.key, ie = k; ie !== null; ) {
                if (ie.key === ne) {
                  if (((ne = M.type), ne === q)) {
                    if (ie.tag === 7) {
                      (o(b, ie.sibling),
                        (k = c(ie, M.props.children)),
                        (k.return = b),
                        (b = k));
                      break e;
                    }
                  } else if (
                    ie.elementType === ne ||
                    (typeof ne == "object" &&
                      ne !== null &&
                      ne.$$typeof === re &&
                      Ep(ne) === ie.type)
                  ) {
                    (o(b, ie.sibling),
                      (k = c(ie, M.props)),
                      (k.ref = wi(b, ie, M)),
                      (k.return = b),
                      (b = k));
                    break e;
                  }
                  o(b, ie);
                  break;
                } else r(b, ie);
                ie = ie.sibling;
              }
              M.type === q
                ? ((k = zr(M.props.children, b.mode, $, M.key)),
                  (k.return = b),
                  (b = k))
                : (($ = da(M.type, M.key, M.props, null, b.mode, $)),
                  ($.ref = wi(b, k, M)),
                  ($.return = b),
                  (b = $));
            }
            return m(b);
          case A:
            e: {
              for (ie = M.key; k !== null; ) {
                if (k.key === ie)
                  if (
                    k.tag === 4 &&
                    k.stateNode.containerInfo === M.containerInfo &&
                    k.stateNode.implementation === M.implementation
                  ) {
                    (o(b, k.sibling),
                      (k = c(k, M.children || [])),
                      (k.return = b),
                      (b = k));
                    break e;
                  } else {
                    o(b, k);
                    break;
                  }
                else r(b, k);
                k = k.sibling;
              }
              ((k = hc(M, b.mode, $)), (k.return = b), (b = k));
            }
            return m(b);
          case re:
            return ((ie = M._init), et(b, k, ie(M._payload), $));
        }
        if (ke(M)) return Z(b, k, M, $);
        if (J(M)) return te(b, k, M, $);
        $o(b, M);
      }
      return (typeof M == "string" && M !== "") || typeof M == "number"
        ? ((M = "" + M),
          k !== null && k.tag === 6
            ? (o(b, k.sibling), (k = c(k, M)), (k.return = b), (b = k))
            : (o(b, k), (k = pc(M, b.mode, $)), (k.return = b), (b = k)),
          m(b))
        : o(b, k);
    }
    return et;
  }
  var ys = wp(!0),
    xp = wp(!1),
    Bo = er(null),
    Ho = null,
    vs = null,
    xu = null;
  function ku() {
    xu = vs = Ho = null;
  }
  function Tu(n) {
    var r = Bo.current;
    (Ve(Bo), (n._currentValue = r));
  }
  function Iu(n, r, o) {
    for (; n !== null; ) {
      var l = n.alternate;
      if (
        ((n.childLanes & r) !== r
          ? ((n.childLanes |= r), l !== null && (l.childLanes |= r))
          : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r),
        n === o)
      )
        break;
      n = n.return;
    }
  }
  function _s(n, r) {
    ((Ho = n),
      (xu = vs = null),
      (n = n.dependencies),
      n !== null &&
        n.firstContext !== null &&
        ((n.lanes & r) !== 0 && (Ot = !0), (n.firstContext = null)));
  }
  function Kt(n) {
    var r = n._currentValue;
    if (xu !== n)
      if (((n = { context: n, memoizedValue: r, next: null }), vs === null)) {
        if (Ho === null) throw Error(s(308));
        ((vs = n), (Ho.dependencies = { lanes: 0, firstContext: n }));
      } else vs = vs.next = n;
    return r;
  }
  var Dr = null;
  function Cu(n) {
    Dr === null ? (Dr = [n]) : Dr.push(n);
  }
  function kp(n, r, o, l) {
    var c = r.interleaved;
    return (
      c === null ? ((o.next = o), Cu(r)) : ((o.next = c.next), (c.next = o)),
      (r.interleaved = o),
      Mn(n, l)
    );
  }
  function Mn(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      ((n.childLanes |= r),
        (o = n.alternate),
        o !== null && (o.childLanes |= r),
        (o = n),
        (n = n.return));
    return o.tag === 3 ? o.stateNode : null;
  }
  var rr = !1;
  function Nu(n) {
    n.updateQueue = {
      baseState: n.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Tp(n, r) {
    ((n = n.updateQueue),
      r.updateQueue === n &&
        (r.updateQueue = {
          baseState: n.baseState,
          firstBaseUpdate: n.firstBaseUpdate,
          lastBaseUpdate: n.lastBaseUpdate,
          shared: n.shared,
          effects: n.effects,
        }));
  }
  function On(n, r) {
    return {
      eventTime: n,
      lane: r,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function sr(n, r, o) {
    var l = n.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Me & 2) !== 0)) {
      var c = l.pending;
      return (
        c === null ? (r.next = r) : ((r.next = c.next), (c.next = r)),
        (l.pending = r),
        Mn(n, o)
      );
    }
    return (
      (c = l.interleaved),
      c === null ? ((r.next = r), Cu(l)) : ((r.next = c.next), (c.next = r)),
      (l.interleaved = r),
      Mn(n, o)
    );
  }
  function Wo(n, r, o) {
    if (
      ((r = r.updateQueue), r !== null && ((r = r.shared), (o & 4194240) !== 0))
    ) {
      var l = r.lanes;
      ((l &= n.pendingLanes), (o |= l), (r.lanes = o), Bl(n, o));
    }
  }
  function Ip(n, r) {
    var o = n.updateQueue,
      l = n.alternate;
    if (l !== null && ((l = l.updateQueue), o === l)) {
      var c = null,
        f = null;
      if (((o = o.firstBaseUpdate), o !== null)) {
        do {
          var m = {
            eventTime: o.eventTime,
            lane: o.lane,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          };
          (f === null ? (c = f = m) : (f = f.next = m), (o = o.next));
        } while (o !== null);
        f === null ? (c = f = r) : (f = f.next = r);
      } else c = f = r;
      ((o = {
        baseState: l.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: f,
        shared: l.shared,
        effects: l.effects,
      }),
        (n.updateQueue = o));
      return;
    }
    ((n = o.lastBaseUpdate),
      n === null ? (o.firstBaseUpdate = r) : (n.next = r),
      (o.lastBaseUpdate = r));
  }
  function qo(n, r, o, l) {
    var c = n.updateQueue;
    rr = !1;
    var f = c.firstBaseUpdate,
      m = c.lastBaseUpdate,
      S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var w = S,
        O = w.next;
      ((w.next = null), m === null ? (f = O) : (m.next = O), (m = w));
      var F = n.alternate;
      F !== null &&
        ((F = F.updateQueue),
        (S = F.lastBaseUpdate),
        S !== m &&
          (S === null ? (F.firstBaseUpdate = O) : (S.next = O),
          (F.lastBaseUpdate = w)));
    }
    if (f !== null) {
      var U = c.baseState;
      ((m = 0), (F = O = w = null), (S = f));
      do {
        var j = S.lane,
          Y = S.eventTime;
        if ((l & j) === j) {
          F !== null &&
            (F = F.next =
              {
                eventTime: Y,
                lane: 0,
                tag: S.tag,
                payload: S.payload,
                callback: S.callback,
                next: null,
              });
          e: {
            var Z = n,
              te = S;
            switch (((j = r), (Y = o), te.tag)) {
              case 1:
                if (((Z = te.payload), typeof Z == "function")) {
                  U = Z.call(Y, U, j);
                  break e;
                }
                U = Z;
                break e;
              case 3:
                Z.flags = (Z.flags & -65537) | 128;
              case 0:
                if (
                  ((Z = te.payload),
                  (j = typeof Z == "function" ? Z.call(Y, U, j) : Z),
                  j == null)
                )
                  break e;
                U = H({}, U, j);
                break e;
              case 2:
                rr = !0;
            }
          }
          S.callback !== null &&
            S.lane !== 0 &&
            ((n.flags |= 64),
            (j = c.effects),
            j === null ? (c.effects = [S]) : j.push(S));
        } else
          ((Y = {
            eventTime: Y,
            lane: j,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null,
          }),
            F === null ? ((O = F = Y), (w = U)) : (F = F.next = Y),
            (m |= j));
        if (((S = S.next), S === null)) {
          if (((S = c.shared.pending), S === null)) break;
          ((j = S),
            (S = j.next),
            (j.next = null),
            (c.lastBaseUpdate = j),
            (c.shared.pending = null));
        }
      } while (!0);
      if (
        (F === null && (w = U),
        (c.baseState = w),
        (c.firstBaseUpdate = O),
        (c.lastBaseUpdate = F),
        (r = c.shared.interleaved),
        r !== null)
      ) {
        c = r;
        do ((m |= c.lane), (c = c.next));
        while (c !== r);
      } else f === null && (c.shared.lanes = 0);
      ((Lr |= m), (n.lanes = m), (n.memoizedState = U));
    }
  }
  function Cp(n, r, o) {
    if (((n = r.effects), (r.effects = null), n !== null))
      for (r = 0; r < n.length; r++) {
        var l = n[r],
          c = l.callback;
        if (c !== null) {
          if (((l.callback = null), (l = o), typeof c != "function"))
            throw Error(s(191, c));
          c.call(l);
        }
      }
  }
  var xi = {},
    vn = er(xi),
    ki = er(xi),
    Ti = er(xi);
  function Ar(n) {
    if (n === xi) throw Error(s(174));
    return n;
  }
  function bu(n, r) {
    switch ((Be(Ti, r), Be(ki, n), Be(vn, xi), (n = r.nodeType), n)) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Rl(null, "");
        break;
      default:
        ((n = n === 8 ? r.parentNode : r),
          (r = n.namespaceURI || null),
          (n = n.tagName),
          (r = Rl(r, n)));
    }
    (Ve(vn), Be(vn, r));
  }
  function Ss() {
    (Ve(vn), Ve(ki), Ve(Ti));
  }
  function Np(n) {
    Ar(Ti.current);
    var r = Ar(vn.current),
      o = Rl(r, n.type);
    r !== o && (Be(ki, n), Be(vn, o));
  }
  function Ru(n) {
    ki.current === n && (Ve(vn), Ve(ki));
  }
  var Ke = er(0);
  function Vo(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (
          o !== null &&
          ((o = o.dehydrated), o === null || o.data === "$?" || o.data === "$!")
        )
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        ((r.child.return = r), (r = r.child));
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      ((r.sibling.return = r.return), (r = r.sibling));
    }
    return null;
  }
  var Mu = [];
  function Ou() {
    for (var n = 0; n < Mu.length; n++)
      Mu[n]._workInProgressVersionPrimary = null;
    Mu.length = 0;
  }
  var Go = K.ReactCurrentDispatcher,
    Du = K.ReactCurrentBatchConfig,
    Pr = 0,
    Xe = null,
    st = null,
    ut = null,
    Yo = !1,
    Ii = !1,
    Ci = 0,
    m_ = 0;
  function St() {
    throw Error(s(321));
  }
  function Au(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!sn(n[o], r[o])) return !1;
    return !0;
  }
  function Pu(n, r, o, l, c, f) {
    if (
      ((Pr = f),
      (Xe = r),
      (r.memoizedState = null),
      (r.updateQueue = null),
      (r.lanes = 0),
      (Go.current = n === null || n.memoizedState === null ? __ : S_),
      (n = o(l, c)),
      Ii)
    ) {
      f = 0;
      do {
        if (((Ii = !1), (Ci = 0), 25 <= f)) throw Error(s(301));
        ((f += 1),
          (ut = st = null),
          (r.updateQueue = null),
          (Go.current = E_),
          (n = o(l, c)));
      } while (Ii);
    }
    if (
      ((Go.current = Jo),
      (r = st !== null && st.next !== null),
      (Pr = 0),
      (ut = st = Xe = null),
      (Yo = !1),
      r)
    )
      throw Error(s(300));
    return n;
  }
  function Lu() {
    var n = Ci !== 0;
    return ((Ci = 0), n);
  }
  function _n() {
    var n = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (ut === null ? (Xe.memoizedState = ut = n) : (ut = ut.next = n), ut);
  }
  function Xt() {
    if (st === null) {
      var n = Xe.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = st.next;
    var r = ut === null ? Xe.memoizedState : ut.next;
    if (r !== null) ((ut = r), (st = n));
    else {
      if (n === null) throw Error(s(310));
      ((st = n),
        (n = {
          memoizedState: st.memoizedState,
          baseState: st.baseState,
          baseQueue: st.baseQueue,
          queue: st.queue,
          next: null,
        }),
        ut === null ? (Xe.memoizedState = ut = n) : (ut = ut.next = n));
    }
    return ut;
  }
  function Ni(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ju(n) {
    var r = Xt(),
      o = r.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = n;
    var l = st,
      c = l.baseQueue,
      f = o.pending;
    if (f !== null) {
      if (c !== null) {
        var m = c.next;
        ((c.next = f.next), (f.next = m));
      }
      ((l.baseQueue = c = f), (o.pending = null));
    }
    if (c !== null) {
      ((f = c.next), (l = l.baseState));
      var S = (m = null),
        w = null,
        O = f;
      do {
        var F = O.lane;
        if ((Pr & F) === F)
          (w !== null &&
            (w = w.next =
              {
                lane: 0,
                action: O.action,
                hasEagerState: O.hasEagerState,
                eagerState: O.eagerState,
                next: null,
              }),
            (l = O.hasEagerState ? O.eagerState : n(l, O.action)));
        else {
          var U = {
            lane: F,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null,
          };
          (w === null ? ((S = w = U), (m = l)) : (w = w.next = U),
            (Xe.lanes |= F),
            (Lr |= F));
        }
        O = O.next;
      } while (O !== null && O !== f);
      (w === null ? (m = l) : (w.next = S),
        sn(l, r.memoizedState) || (Ot = !0),
        (r.memoizedState = l),
        (r.baseState = m),
        (r.baseQueue = w),
        (o.lastRenderedState = l));
    }
    if (((n = o.interleaved), n !== null)) {
      c = n;
      do ((f = c.lane), (Xe.lanes |= f), (Lr |= f), (c = c.next));
      while (c !== n);
    } else c === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Fu(n) {
    var r = Xt(),
      o = r.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = n;
    var l = o.dispatch,
      c = o.pending,
      f = r.memoizedState;
    if (c !== null) {
      o.pending = null;
      var m = (c = c.next);
      do ((f = n(f, m.action)), (m = m.next));
      while (m !== c);
      (sn(f, r.memoizedState) || (Ot = !0),
        (r.memoizedState = f),
        r.baseQueue === null && (r.baseState = f),
        (o.lastRenderedState = f));
    }
    return [f, l];
  }
  function bp() {}
  function Rp(n, r) {
    var o = Xe,
      l = Xt(),
      c = r(),
      f = !sn(l.memoizedState, c);
    if (
      (f && ((l.memoizedState = c), (Ot = !0)),
      (l = l.queue),
      Uu(Dp.bind(null, o, l, n), [n]),
      l.getSnapshot !== r || f || (ut !== null && ut.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        bi(9, Op.bind(null, o, l, c, r), void 0, null),
        ct === null)
      )
        throw Error(s(349));
      (Pr & 30) !== 0 || Mp(o, r, c);
    }
    return c;
  }
  function Mp(n, r, o) {
    ((n.flags |= 16384),
      (n = { getSnapshot: r, value: o }),
      (r = Xe.updateQueue),
      r === null
        ? ((r = { lastEffect: null, stores: null }),
          (Xe.updateQueue = r),
          (r.stores = [n]))
        : ((o = r.stores), o === null ? (r.stores = [n]) : o.push(n)));
  }
  function Op(n, r, o, l) {
    ((r.value = o), (r.getSnapshot = l), Ap(r) && Pp(n));
  }
  function Dp(n, r, o) {
    return o(function () {
      Ap(r) && Pp(n);
    });
  }
  function Ap(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !sn(n, o);
    } catch {
      return !0;
    }
  }
  function Pp(n) {
    var r = Mn(n, 1);
    r !== null && cn(r, n, 1, -1);
  }
  function Lp(n) {
    var r = _n();
    return (
      typeof n == "function" && (n = n()),
      (r.memoizedState = r.baseState = n),
      (n = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ni,
        lastRenderedState: n,
      }),
      (r.queue = n),
      (n = n.dispatch = v_.bind(null, Xe, n)),
      [r.memoizedState, n]
    );
  }
  function bi(n, r, o, l) {
    return (
      (n = { tag: n, create: r, destroy: o, deps: l, next: null }),
      (r = Xe.updateQueue),
      r === null
        ? ((r = { lastEffect: null, stores: null }),
          (Xe.updateQueue = r),
          (r.lastEffect = n.next = n))
        : ((o = r.lastEffect),
          o === null
            ? (r.lastEffect = n.next = n)
            : ((l = o.next), (o.next = n), (n.next = l), (r.lastEffect = n))),
      n
    );
  }
  function jp() {
    return Xt().memoizedState;
  }
  function Ko(n, r, o, l) {
    var c = _n();
    ((Xe.flags |= n),
      (c.memoizedState = bi(1 | r, o, void 0, l === void 0 ? null : l)));
  }
  function Xo(n, r, o, l) {
    var c = Xt();
    l = l === void 0 ? null : l;
    var f = void 0;
    if (st !== null) {
      var m = st.memoizedState;
      if (((f = m.destroy), l !== null && Au(l, m.deps))) {
        c.memoizedState = bi(r, o, f, l);
        return;
      }
    }
    ((Xe.flags |= n), (c.memoizedState = bi(1 | r, o, f, l)));
  }
  function Fp(n, r) {
    return Ko(8390656, 8, n, r);
  }
  function Uu(n, r) {
    return Xo(2048, 8, n, r);
  }
  function Up(n, r) {
    return Xo(4, 2, n, r);
  }
  function zp(n, r) {
    return Xo(4, 4, n, r);
  }
  function $p(n, r) {
    if (typeof r == "function")
      return (
        (n = n()),
        r(n),
        function () {
          r(null);
        }
      );
    if (r != null)
      return (
        (n = n()),
        (r.current = n),
        function () {
          r.current = null;
        }
      );
  }
  function Bp(n, r, o) {
    return (
      (o = o != null ? o.concat([n]) : null),
      Xo(4, 4, $p.bind(null, r, n), o)
    );
  }
  function zu() {}
  function Hp(n, r) {
    var o = Xt();
    r = r === void 0 ? null : r;
    var l = o.memoizedState;
    return l !== null && r !== null && Au(r, l[1])
      ? l[0]
      : ((o.memoizedState = [n, r]), n);
  }
  function Wp(n, r) {
    var o = Xt();
    r = r === void 0 ? null : r;
    var l = o.memoizedState;
    return l !== null && r !== null && Au(r, l[1])
      ? l[0]
      : ((n = n()), (o.memoizedState = [n, r]), n);
  }
  function qp(n, r, o) {
    return (Pr & 21) === 0
      ? (n.baseState && ((n.baseState = !1), (Ot = !0)), (n.memoizedState = o))
      : (sn(o, r) ||
          ((o = Ef()), (Xe.lanes |= o), (Lr |= o), (n.baseState = !0)),
        r);
  }
  function g_(n, r) {
    var o = Fe;
    ((Fe = o !== 0 && 4 > o ? o : 4), n(!0));
    var l = Du.transition;
    Du.transition = {};
    try {
      (n(!1), r());
    } finally {
      ((Fe = o), (Du.transition = l));
    }
  }
  function Vp() {
    return Xt().memoizedState;
  }
  function y_(n, r, o) {
    var l = lr(n);
    if (
      ((o = {
        lane: l,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Gp(n))
    )
      Yp(r, o);
    else if (((o = kp(n, r, o, l)), o !== null)) {
      var c = Tt();
      (cn(o, n, l, c), Kp(o, r, l));
    }
  }
  function v_(n, r, o) {
    var l = lr(n),
      c = {
        lane: l,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Gp(n)) Yp(r, c);
    else {
      var f = n.alternate;
      if (
        n.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = r.lastRenderedReducer), f !== null)
      )
        try {
          var m = r.lastRenderedState,
            S = f(m, o);
          if (((c.hasEagerState = !0), (c.eagerState = S), sn(S, m))) {
            var w = r.interleaved;
            (w === null
              ? ((c.next = c), Cu(r))
              : ((c.next = w.next), (w.next = c)),
              (r.interleaved = c));
            return;
          }
        } catch {
        } finally {
        }
      ((o = kp(n, r, c, l)),
        o !== null && ((c = Tt()), cn(o, n, l, c), Kp(o, r, l)));
    }
  }
  function Gp(n) {
    var r = n.alternate;
    return n === Xe || (r !== null && r === Xe);
  }
  function Yp(n, r) {
    Ii = Yo = !0;
    var o = n.pending;
    (o === null ? (r.next = r) : ((r.next = o.next), (o.next = r)),
      (n.pending = r));
  }
  function Kp(n, r, o) {
    if ((o & 4194240) !== 0) {
      var l = r.lanes;
      ((l &= n.pendingLanes), (o |= l), (r.lanes = o), Bl(n, o));
    }
  }
  var Jo = {
      readContext: Kt,
      useCallback: St,
      useContext: St,
      useEffect: St,
      useImperativeHandle: St,
      useInsertionEffect: St,
      useLayoutEffect: St,
      useMemo: St,
      useReducer: St,
      useRef: St,
      useState: St,
      useDebugValue: St,
      useDeferredValue: St,
      useTransition: St,
      useMutableSource: St,
      useSyncExternalStore: St,
      useId: St,
      unstable_isNewReconciler: !1,
    },
    __ = {
      readContext: Kt,
      useCallback: function (n, r) {
        return ((_n().memoizedState = [n, r === void 0 ? null : r]), n);
      },
      useContext: Kt,
      useEffect: Fp,
      useImperativeHandle: function (n, r, o) {
        return (
          (o = o != null ? o.concat([n]) : null),
          Ko(4194308, 4, $p.bind(null, r, n), o)
        );
      },
      useLayoutEffect: function (n, r) {
        return Ko(4194308, 4, n, r);
      },
      useInsertionEffect: function (n, r) {
        return Ko(4, 2, n, r);
      },
      useMemo: function (n, r) {
        var o = _n();
        return (
          (r = r === void 0 ? null : r),
          (n = n()),
          (o.memoizedState = [n, r]),
          n
        );
      },
      useReducer: function (n, r, o) {
        var l = _n();
        return (
          (r = o !== void 0 ? o(r) : r),
          (l.memoizedState = l.baseState = r),
          (n = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: n,
            lastRenderedState: r,
          }),
          (l.queue = n),
          (n = n.dispatch = y_.bind(null, Xe, n)),
          [l.memoizedState, n]
        );
      },
      useRef: function (n) {
        var r = _n();
        return ((n = { current: n }), (r.memoizedState = n));
      },
      useState: Lp,
      useDebugValue: zu,
      useDeferredValue: function (n) {
        return (_n().memoizedState = n);
      },
      useTransition: function () {
        var n = Lp(!1),
          r = n[0];
        return ((n = g_.bind(null, n[1])), (_n().memoizedState = n), [r, n]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (n, r, o) {
        var l = Xe,
          c = _n();
        if (Ge) {
          if (o === void 0) throw Error(s(407));
          o = o();
        } else {
          if (((o = r()), ct === null)) throw Error(s(349));
          (Pr & 30) !== 0 || Mp(l, r, o);
        }
        c.memoizedState = o;
        var f = { value: o, getSnapshot: r };
        return (
          (c.queue = f),
          Fp(Dp.bind(null, l, f, n), [n]),
          (l.flags |= 2048),
          bi(9, Op.bind(null, l, f, o, r), void 0, null),
          o
        );
      },
      useId: function () {
        var n = _n(),
          r = ct.identifierPrefix;
        if (Ge) {
          var o = Rn,
            l = bn;
          ((o = (l & ~(1 << (32 - rn(l) - 1))).toString(32) + o),
            (r = ":" + r + "R" + o),
            (o = Ci++),
            0 < o && (r += "H" + o.toString(32)),
            (r += ":"));
        } else ((o = m_++), (r = ":" + r + "r" + o.toString(32) + ":"));
        return (n.memoizedState = r);
      },
      unstable_isNewReconciler: !1,
    },
    S_ = {
      readContext: Kt,
      useCallback: Hp,
      useContext: Kt,
      useEffect: Uu,
      useImperativeHandle: Bp,
      useInsertionEffect: Up,
      useLayoutEffect: zp,
      useMemo: Wp,
      useReducer: ju,
      useRef: jp,
      useState: function () {
        return ju(Ni);
      },
      useDebugValue: zu,
      useDeferredValue: function (n) {
        var r = Xt();
        return qp(r, st.memoizedState, n);
      },
      useTransition: function () {
        var n = ju(Ni)[0],
          r = Xt().memoizedState;
        return [n, r];
      },
      useMutableSource: bp,
      useSyncExternalStore: Rp,
      useId: Vp,
      unstable_isNewReconciler: !1,
    },
    E_ = {
      readContext: Kt,
      useCallback: Hp,
      useContext: Kt,
      useEffect: Uu,
      useImperativeHandle: Bp,
      useInsertionEffect: Up,
      useLayoutEffect: zp,
      useMemo: Wp,
      useReducer: Fu,
      useRef: jp,
      useState: function () {
        return Fu(Ni);
      },
      useDebugValue: zu,
      useDeferredValue: function (n) {
        var r = Xt();
        return st === null ? (r.memoizedState = n) : qp(r, st.memoizedState, n);
      },
      useTransition: function () {
        var n = Fu(Ni)[0],
          r = Xt().memoizedState;
        return [n, r];
      },
      useMutableSource: bp,
      useSyncExternalStore: Rp,
      useId: Vp,
      unstable_isNewReconciler: !1,
    };
  function an(n, r) {
    if (n && n.defaultProps) {
      ((r = H({}, r)), (n = n.defaultProps));
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function $u(n, r, o, l) {
    ((r = n.memoizedState),
      (o = o(l, r)),
      (o = o == null ? r : H({}, r, o)),
      (n.memoizedState = o),
      n.lanes === 0 && (n.updateQueue.baseState = o));
  }
  var Qo = {
    isMounted: function (n) {
      return (n = n._reactInternals) ? Nr(n) === n : !1;
    },
    enqueueSetState: function (n, r, o) {
      n = n._reactInternals;
      var l = Tt(),
        c = lr(n),
        f = On(l, c);
      ((f.payload = r),
        o != null && (f.callback = o),
        (r = sr(n, f, c)),
        r !== null && (cn(r, n, c, l), Wo(r, n, c)));
    },
    enqueueReplaceState: function (n, r, o) {
      n = n._reactInternals;
      var l = Tt(),
        c = lr(n),
        f = On(l, c);
      ((f.tag = 1),
        (f.payload = r),
        o != null && (f.callback = o),
        (r = sr(n, f, c)),
        r !== null && (cn(r, n, c, l), Wo(r, n, c)));
    },
    enqueueForceUpdate: function (n, r) {
      n = n._reactInternals;
      var o = Tt(),
        l = lr(n),
        c = On(o, l);
      ((c.tag = 2),
        r != null && (c.callback = r),
        (r = sr(n, c, l)),
        r !== null && (cn(r, n, l, o), Wo(r, n, l)));
    },
  };
  function Xp(n, r, o, l, c, f, m) {
    return (
      (n = n.stateNode),
      typeof n.shouldComponentUpdate == "function"
        ? n.shouldComponentUpdate(l, f, m)
        : r.prototype && r.prototype.isPureReactComponent
          ? !mi(o, l) || !mi(c, f)
          : !0
    );
  }
  function Jp(n, r, o) {
    var l = !1,
      c = tr,
      f = r.contextType;
    return (
      typeof f == "object" && f !== null
        ? (f = Kt(f))
        : ((c = Mt(r) ? Rr : _t.current),
          (l = r.contextTypes),
          (f = (l = l != null) ? ps(n, c) : tr)),
      (r = new r(o, f)),
      (n.memoizedState =
        r.state !== null && r.state !== void 0 ? r.state : null),
      (r.updater = Qo),
      (n.stateNode = r),
      (r._reactInternals = n),
      l &&
        ((n = n.stateNode),
        (n.__reactInternalMemoizedUnmaskedChildContext = c),
        (n.__reactInternalMemoizedMaskedChildContext = f)),
      r
    );
  }
  function Qp(n, r, o, l) {
    ((n = r.state),
      typeof r.componentWillReceiveProps == "function" &&
        r.componentWillReceiveProps(o, l),
      typeof r.UNSAFE_componentWillReceiveProps == "function" &&
        r.UNSAFE_componentWillReceiveProps(o, l),
      r.state !== n && Qo.enqueueReplaceState(r, r.state, null));
  }
  function Bu(n, r, o, l) {
    var c = n.stateNode;
    ((c.props = o), (c.state = n.memoizedState), (c.refs = {}), Nu(n));
    var f = r.contextType;
    (typeof f == "object" && f !== null
      ? (c.context = Kt(f))
      : ((f = Mt(r) ? Rr : _t.current), (c.context = ps(n, f))),
      (c.state = n.memoizedState),
      (f = r.getDerivedStateFromProps),
      typeof f == "function" && ($u(n, r, f, o), (c.state = n.memoizedState)),
      typeof r.getDerivedStateFromProps == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function" ||
        (typeof c.UNSAFE_componentWillMount != "function" &&
          typeof c.componentWillMount != "function") ||
        ((r = c.state),
        typeof c.componentWillMount == "function" && c.componentWillMount(),
        typeof c.UNSAFE_componentWillMount == "function" &&
          c.UNSAFE_componentWillMount(),
        r !== c.state && Qo.enqueueReplaceState(c, c.state, null),
        qo(n, o, c, l),
        (c.state = n.memoizedState)),
      typeof c.componentDidMount == "function" && (n.flags |= 4194308));
  }
  function Es(n, r) {
    try {
      var o = "",
        l = r;
      do ((o += _e(l)), (l = l.return));
      while (l);
      var c = o;
    } catch (f) {
      c =
        `
Error generating stack: ` +
        f.message +
        `
` +
        f.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Hu(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function Wu(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  var w_ = typeof WeakMap == "function" ? WeakMap : Map;
  function Zp(n, r, o) {
    ((o = On(-1, o)), (o.tag = 3), (o.payload = { element: null }));
    var l = r.value;
    return (
      (o.callback = function () {
        (ia || ((ia = !0), (ic = l)), Wu(n, r));
      }),
      o
    );
  }
  function eh(n, r, o) {
    ((o = On(-1, o)), (o.tag = 3));
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var c = r.value;
      ((o.payload = function () {
        return l(c);
      }),
        (o.callback = function () {
          Wu(n, r);
        }));
    }
    var f = n.stateNode;
    return (
      f !== null &&
        typeof f.componentDidCatch == "function" &&
        (o.callback = function () {
          (Wu(n, r),
            typeof l != "function" &&
              (or === null ? (or = new Set([this])) : or.add(this)));
          var m = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: m !== null ? m : "",
          });
        }),
      o
    );
  }
  function th(n, r, o) {
    var l = n.pingCache;
    if (l === null) {
      l = n.pingCache = new w_();
      var c = new Set();
      l.set(r, c);
    } else ((c = l.get(r)), c === void 0 && ((c = new Set()), l.set(r, c)));
    c.has(o) || (c.add(o), (n = L_.bind(null, n, r, o)), r.then(n, n));
  }
  function nh(n) {
    do {
      var r;
      if (
        ((r = n.tag === 13) &&
          ((r = n.memoizedState),
          (r = r !== null ? r.dehydrated !== null : !0)),
        r)
      )
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function rh(n, r, o, l, c) {
    return (n.mode & 1) === 0
      ? (n === r
          ? (n.flags |= 65536)
          : ((n.flags |= 128),
            (o.flags |= 131072),
            (o.flags &= -52805),
            o.tag === 1 &&
              (o.alternate === null
                ? (o.tag = 17)
                : ((r = On(-1, 1)), (r.tag = 2), sr(o, r, 1))),
            (o.lanes |= 1)),
        n)
      : ((n.flags |= 65536), (n.lanes = c), n);
  }
  var x_ = K.ReactCurrentOwner,
    Ot = !1;
  function kt(n, r, o, l) {
    r.child = n === null ? xp(r, null, o, l) : ys(r, n.child, o, l);
  }
  function sh(n, r, o, l, c) {
    o = o.render;
    var f = r.ref;
    return (
      _s(r, c),
      (l = Pu(n, r, o, l, f, c)),
      (o = Lu()),
      n !== null && !Ot
        ? ((r.updateQueue = n.updateQueue),
          (r.flags &= -2053),
          (n.lanes &= ~c),
          Dn(n, r, c))
        : (Ge && o && vu(r), (r.flags |= 1), kt(n, r, l, c), r.child)
    );
  }
  function ih(n, r, o, l, c) {
    if (n === null) {
      var f = o.type;
      return typeof f == "function" &&
        !fc(f) &&
        f.defaultProps === void 0 &&
        o.compare === null &&
        o.defaultProps === void 0
        ? ((r.tag = 15), (r.type = f), oh(n, r, f, l, c))
        : ((n = da(o.type, null, l, r, r.mode, c)),
          (n.ref = r.ref),
          (n.return = r),
          (r.child = n));
    }
    if (((f = n.child), (n.lanes & c) === 0)) {
      var m = f.memoizedProps;
      if (
        ((o = o.compare), (o = o !== null ? o : mi), o(m, l) && n.ref === r.ref)
      )
        return Dn(n, r, c);
    }
    return (
      (r.flags |= 1),
      (n = cr(f, l)),
      (n.ref = r.ref),
      (n.return = r),
      (r.child = n)
    );
  }
  function oh(n, r, o, l, c) {
    if (n !== null) {
      var f = n.memoizedProps;
      if (mi(f, l) && n.ref === r.ref)
        if (((Ot = !1), (r.pendingProps = l = f), (n.lanes & c) !== 0))
          (n.flags & 131072) !== 0 && (Ot = !0);
        else return ((r.lanes = n.lanes), Dn(n, r, c));
    }
    return qu(n, r, o, l, c);
  }
  function ah(n, r, o) {
    var l = r.pendingProps,
      c = l.children,
      f = n !== null ? n.memoizedState : null;
    if (l.mode === "hidden")
      if ((r.mode & 1) === 0)
        ((r.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Be(xs, Bt),
          (Bt |= o));
      else {
        if ((o & 1073741824) === 0)
          return (
            (n = f !== null ? f.baseLanes | o : o),
            (r.lanes = r.childLanes = 1073741824),
            (r.memoizedState = {
              baseLanes: n,
              cachePool: null,
              transitions: null,
            }),
            (r.updateQueue = null),
            Be(xs, Bt),
            (Bt |= n),
            null
          );
        ((r.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (l = f !== null ? f.baseLanes : o),
          Be(xs, Bt),
          (Bt |= l));
      }
    else
      (f !== null ? ((l = f.baseLanes | o), (r.memoizedState = null)) : (l = o),
        Be(xs, Bt),
        (Bt |= l));
    return (kt(n, r, c, o), r.child);
  }
  function lh(n, r) {
    var o = r.ref;
    ((n === null && o !== null) || (n !== null && n.ref !== o)) &&
      ((r.flags |= 512), (r.flags |= 2097152));
  }
  function qu(n, r, o, l, c) {
    var f = Mt(o) ? Rr : _t.current;
    return (
      (f = ps(r, f)),
      _s(r, c),
      (o = Pu(n, r, o, l, f, c)),
      (l = Lu()),
      n !== null && !Ot
        ? ((r.updateQueue = n.updateQueue),
          (r.flags &= -2053),
          (n.lanes &= ~c),
          Dn(n, r, c))
        : (Ge && l && vu(r), (r.flags |= 1), kt(n, r, o, c), r.child)
    );
  }
  function uh(n, r, o, l, c) {
    if (Mt(o)) {
      var f = !0;
      Lo(r);
    } else f = !1;
    if ((_s(r, c), r.stateNode === null))
      (ea(n, r), Jp(r, o, l), Bu(r, o, l, c), (l = !0));
    else if (n === null) {
      var m = r.stateNode,
        S = r.memoizedProps;
      m.props = S;
      var w = m.context,
        O = o.contextType;
      typeof O == "object" && O !== null
        ? (O = Kt(O))
        : ((O = Mt(o) ? Rr : _t.current), (O = ps(r, O)));
      var F = o.getDerivedStateFromProps,
        U =
          typeof F == "function" ||
          typeof m.getSnapshotBeforeUpdate == "function";
      (U ||
        (typeof m.UNSAFE_componentWillReceiveProps != "function" &&
          typeof m.componentWillReceiveProps != "function") ||
        ((S !== l || w !== O) && Qp(r, m, l, O)),
        (rr = !1));
      var j = r.memoizedState;
      ((m.state = j),
        qo(r, l, m, c),
        (w = r.memoizedState),
        S !== l || j !== w || Rt.current || rr
          ? (typeof F == "function" && ($u(r, o, F, l), (w = r.memoizedState)),
            (S = rr || Xp(r, o, S, l, j, w, O))
              ? (U ||
                  (typeof m.UNSAFE_componentWillMount != "function" &&
                    typeof m.componentWillMount != "function") ||
                  (typeof m.componentWillMount == "function" &&
                    m.componentWillMount(),
                  typeof m.UNSAFE_componentWillMount == "function" &&
                    m.UNSAFE_componentWillMount()),
                typeof m.componentDidMount == "function" &&
                  (r.flags |= 4194308))
              : (typeof m.componentDidMount == "function" &&
                  (r.flags |= 4194308),
                (r.memoizedProps = l),
                (r.memoizedState = w)),
            (m.props = l),
            (m.state = w),
            (m.context = O),
            (l = S))
          : (typeof m.componentDidMount == "function" && (r.flags |= 4194308),
            (l = !1)));
    } else {
      ((m = r.stateNode),
        Tp(n, r),
        (S = r.memoizedProps),
        (O = r.type === r.elementType ? S : an(r.type, S)),
        (m.props = O),
        (U = r.pendingProps),
        (j = m.context),
        (w = o.contextType),
        typeof w == "object" && w !== null
          ? (w = Kt(w))
          : ((w = Mt(o) ? Rr : _t.current), (w = ps(r, w))));
      var Y = o.getDerivedStateFromProps;
      ((F =
        typeof Y == "function" ||
        typeof m.getSnapshotBeforeUpdate == "function") ||
        (typeof m.UNSAFE_componentWillReceiveProps != "function" &&
          typeof m.componentWillReceiveProps != "function") ||
        ((S !== U || j !== w) && Qp(r, m, l, w)),
        (rr = !1),
        (j = r.memoizedState),
        (m.state = j),
        qo(r, l, m, c));
      var Z = r.memoizedState;
      S !== U || j !== Z || Rt.current || rr
        ? (typeof Y == "function" && ($u(r, o, Y, l), (Z = r.memoizedState)),
          (O = rr || Xp(r, o, O, l, j, Z, w) || !1)
            ? (F ||
                (typeof m.UNSAFE_componentWillUpdate != "function" &&
                  typeof m.componentWillUpdate != "function") ||
                (typeof m.componentWillUpdate == "function" &&
                  m.componentWillUpdate(l, Z, w),
                typeof m.UNSAFE_componentWillUpdate == "function" &&
                  m.UNSAFE_componentWillUpdate(l, Z, w)),
              typeof m.componentDidUpdate == "function" && (r.flags |= 4),
              typeof m.getSnapshotBeforeUpdate == "function" &&
                (r.flags |= 1024))
            : (typeof m.componentDidUpdate != "function" ||
                (S === n.memoizedProps && j === n.memoizedState) ||
                (r.flags |= 4),
              typeof m.getSnapshotBeforeUpdate != "function" ||
                (S === n.memoizedProps && j === n.memoizedState) ||
                (r.flags |= 1024),
              (r.memoizedProps = l),
              (r.memoizedState = Z)),
          (m.props = l),
          (m.state = Z),
          (m.context = w),
          (l = O))
        : (typeof m.componentDidUpdate != "function" ||
            (S === n.memoizedProps && j === n.memoizedState) ||
            (r.flags |= 4),
          typeof m.getSnapshotBeforeUpdate != "function" ||
            (S === n.memoizedProps && j === n.memoizedState) ||
            (r.flags |= 1024),
          (l = !1));
    }
    return Vu(n, r, o, l, f, c);
  }
  function Vu(n, r, o, l, c, f) {
    lh(n, r);
    var m = (r.flags & 128) !== 0;
    if (!l && !m) return (c && hp(r, o, !1), Dn(n, r, f));
    ((l = r.stateNode), (x_.current = r));
    var S =
      m && typeof o.getDerivedStateFromError != "function" ? null : l.render();
    return (
      (r.flags |= 1),
      n !== null && m
        ? ((r.child = ys(r, n.child, null, f)), (r.child = ys(r, null, S, f)))
        : kt(n, r, S, f),
      (r.memoizedState = l.state),
      c && hp(r, o, !0),
      r.child
    );
  }
  function ch(n) {
    var r = n.stateNode;
    (r.pendingContext
      ? fp(n, r.pendingContext, r.pendingContext !== r.context)
      : r.context && fp(n, r.context, !1),
      bu(n, r.containerInfo));
  }
  function dh(n, r, o, l, c) {
    return (gs(), wu(c), (r.flags |= 256), kt(n, r, o, l), r.child);
  }
  var Gu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Yu(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function fh(n, r, o) {
    var l = r.pendingProps,
      c = Ke.current,
      f = !1,
      m = (r.flags & 128) !== 0,
      S;
    if (
      ((S = m) ||
        (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0),
      S
        ? ((f = !0), (r.flags &= -129))
        : (n === null || n.memoizedState !== null) && (c |= 1),
      Be(Ke, c & 1),
      n === null)
    )
      return (
        Eu(r),
        (n = r.memoizedState),
        n !== null && ((n = n.dehydrated), n !== null)
          ? ((r.mode & 1) === 0
              ? (r.lanes = 1)
              : n.data === "$!"
                ? (r.lanes = 8)
                : (r.lanes = 1073741824),
            null)
          : ((m = l.children),
            (n = l.fallback),
            f
              ? ((l = r.mode),
                (f = r.child),
                (m = { mode: "hidden", children: m }),
                (l & 1) === 0 && f !== null
                  ? ((f.childLanes = 0), (f.pendingProps = m))
                  : (f = fa(m, l, 0, null)),
                (n = zr(n, l, o, null)),
                (f.return = r),
                (n.return = r),
                (f.sibling = n),
                (r.child = f),
                (r.child.memoizedState = Yu(o)),
                (r.memoizedState = Gu),
                n)
              : Ku(r, m))
      );
    if (((c = n.memoizedState), c !== null && ((S = c.dehydrated), S !== null)))
      return k_(n, r, m, l, S, c, o);
    if (f) {
      ((f = l.fallback), (m = r.mode), (c = n.child), (S = c.sibling));
      var w = { mode: "hidden", children: l.children };
      return (
        (m & 1) === 0 && r.child !== c
          ? ((l = r.child),
            (l.childLanes = 0),
            (l.pendingProps = w),
            (r.deletions = null))
          : ((l = cr(c, w)), (l.subtreeFlags = c.subtreeFlags & 14680064)),
        S !== null ? (f = cr(S, f)) : ((f = zr(f, m, o, null)), (f.flags |= 2)),
        (f.return = r),
        (l.return = r),
        (l.sibling = f),
        (r.child = l),
        (l = f),
        (f = r.child),
        (m = n.child.memoizedState),
        (m =
          m === null
            ? Yu(o)
            : {
                baseLanes: m.baseLanes | o,
                cachePool: null,
                transitions: m.transitions,
              }),
        (f.memoizedState = m),
        (f.childLanes = n.childLanes & ~o),
        (r.memoizedState = Gu),
        l
      );
    }
    return (
      (f = n.child),
      (n = f.sibling),
      (l = cr(f, { mode: "visible", children: l.children })),
      (r.mode & 1) === 0 && (l.lanes = o),
      (l.return = r),
      (l.sibling = null),
      n !== null &&
        ((o = r.deletions),
        o === null ? ((r.deletions = [n]), (r.flags |= 16)) : o.push(n)),
      (r.child = l),
      (r.memoizedState = null),
      l
    );
  }
  function Ku(n, r) {
    return (
      (r = fa({ mode: "visible", children: r }, n.mode, 0, null)),
      (r.return = n),
      (n.child = r)
    );
  }
  function Zo(n, r, o, l) {
    return (
      l !== null && wu(l),
      ys(r, n.child, null, o),
      (n = Ku(r, r.pendingProps.children)),
      (n.flags |= 2),
      (r.memoizedState = null),
      n
    );
  }
  function k_(n, r, o, l, c, f, m) {
    if (o)
      return r.flags & 256
        ? ((r.flags &= -257), (l = Hu(Error(s(422)))), Zo(n, r, m, l))
        : r.memoizedState !== null
          ? ((r.child = n.child), (r.flags |= 128), null)
          : ((f = l.fallback),
            (c = r.mode),
            (l = fa({ mode: "visible", children: l.children }, c, 0, null)),
            (f = zr(f, c, m, null)),
            (f.flags |= 2),
            (l.return = r),
            (f.return = r),
            (l.sibling = f),
            (r.child = l),
            (r.mode & 1) !== 0 && ys(r, n.child, null, m),
            (r.child.memoizedState = Yu(m)),
            (r.memoizedState = Gu),
            f);
    if ((r.mode & 1) === 0) return Zo(n, r, m, null);
    if (c.data === "$!") {
      if (((l = c.nextSibling && c.nextSibling.dataset), l)) var S = l.dgst;
      return (
        (l = S),
        (f = Error(s(419))),
        (l = Hu(f, l, void 0)),
        Zo(n, r, m, l)
      );
    }
    if (((S = (m & n.childLanes) !== 0), Ot || S)) {
      if (((l = ct), l !== null)) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        ((c = (c & (l.suspendedLanes | m)) !== 0 ? 0 : c),
          c !== 0 &&
            c !== f.retryLane &&
            ((f.retryLane = c), Mn(n, c), cn(l, n, c, -1)));
      }
      return (dc(), (l = Hu(Error(s(421)))), Zo(n, r, m, l));
    }
    return c.data === "$?"
      ? ((r.flags |= 128),
        (r.child = n.child),
        (r = j_.bind(null, n)),
        (c._reactRetry = r),
        null)
      : ((n = f.treeContext),
        ($t = Zn(c.nextSibling)),
        (zt = r),
        (Ge = !0),
        (on = null),
        n !== null &&
          ((Gt[Yt++] = bn),
          (Gt[Yt++] = Rn),
          (Gt[Yt++] = Mr),
          (bn = n.id),
          (Rn = n.overflow),
          (Mr = r)),
        (r = Ku(r, l.children)),
        (r.flags |= 4096),
        r);
  }
  function ph(n, r, o) {
    n.lanes |= r;
    var l = n.alternate;
    (l !== null && (l.lanes |= r), Iu(n.return, r, o));
  }
  function Xu(n, r, o, l, c) {
    var f = n.memoizedState;
    f === null
      ? (n.memoizedState = {
          isBackwards: r,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: o,
          tailMode: c,
        })
      : ((f.isBackwards = r),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = l),
        (f.tail = o),
        (f.tailMode = c));
  }
  function hh(n, r, o) {
    var l = r.pendingProps,
      c = l.revealOrder,
      f = l.tail;
    if ((kt(n, r, l.children, o), (l = Ke.current), (l & 2) !== 0))
      ((l = (l & 1) | 2), (r.flags |= 128));
    else {
      if (n !== null && (n.flags & 128) !== 0)
        e: for (n = r.child; n !== null; ) {
          if (n.tag === 13) n.memoizedState !== null && ph(n, o, r);
          else if (n.tag === 19) ph(n, o, r);
          else if (n.child !== null) {
            ((n.child.return = n), (n = n.child));
            continue;
          }
          if (n === r) break e;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === r) break e;
            n = n.return;
          }
          ((n.sibling.return = n.return), (n = n.sibling));
        }
      l &= 1;
    }
    if ((Be(Ke, l), (r.mode & 1) === 0)) r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (o = r.child, c = null; o !== null; )
            ((n = o.alternate),
              n !== null && Vo(n) === null && (c = o),
              (o = o.sibling));
          ((o = c),
            o === null
              ? ((c = r.child), (r.child = null))
              : ((c = o.sibling), (o.sibling = null)),
            Xu(r, !1, c, o, f));
          break;
        case "backwards":
          for (o = null, c = r.child, r.child = null; c !== null; ) {
            if (((n = c.alternate), n !== null && Vo(n) === null)) {
              r.child = c;
              break;
            }
            ((n = c.sibling), (c.sibling = o), (o = c), (c = n));
          }
          Xu(r, !0, o, null, f);
          break;
        case "together":
          Xu(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function ea(n, r) {
    (r.mode & 1) === 0 &&
      n !== null &&
      ((n.alternate = null), (r.alternate = null), (r.flags |= 2));
  }
  function Dn(n, r, o) {
    if (
      (n !== null && (r.dependencies = n.dependencies),
      (Lr |= r.lanes),
      (o & r.childLanes) === 0)
    )
      return null;
    if (n !== null && r.child !== n.child) throw Error(s(153));
    if (r.child !== null) {
      for (
        n = r.child, o = cr(n, n.pendingProps), r.child = o, o.return = r;
        n.sibling !== null;
      )
        ((n = n.sibling),
          (o = o.sibling = cr(n, n.pendingProps)),
          (o.return = r));
      o.sibling = null;
    }
    return r.child;
  }
  function T_(n, r, o) {
    switch (r.tag) {
      case 3:
        (ch(r), gs());
        break;
      case 5:
        Np(r);
        break;
      case 1:
        Mt(r.type) && Lo(r);
        break;
      case 4:
        bu(r, r.stateNode.containerInfo);
        break;
      case 10:
        var l = r.type._context,
          c = r.memoizedProps.value;
        (Be(Bo, l._currentValue), (l._currentValue = c));
        break;
      case 13:
        if (((l = r.memoizedState), l !== null))
          return l.dehydrated !== null
            ? (Be(Ke, Ke.current & 1), (r.flags |= 128), null)
            : (o & r.child.childLanes) !== 0
              ? fh(n, r, o)
              : (Be(Ke, Ke.current & 1),
                (n = Dn(n, r, o)),
                n !== null ? n.sibling : null);
        Be(Ke, Ke.current & 1);
        break;
      case 19:
        if (((l = (o & r.childLanes) !== 0), (n.flags & 128) !== 0)) {
          if (l) return hh(n, r, o);
          r.flags |= 128;
        }
        if (
          ((c = r.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          Be(Ke, Ke.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((r.lanes = 0), ah(n, r, o));
    }
    return Dn(n, r, o);
  }
  var mh, Ju, gh, yh;
  ((mh = function (n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        ((o.child.return = o), (o = o.child));
        continue;
      }
      if (o === r) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r) return;
        o = o.return;
      }
      ((o.sibling.return = o.return), (o = o.sibling));
    }
  }),
    (Ju = function () {}),
    (gh = function (n, r, o, l) {
      var c = n.memoizedProps;
      if (c !== l) {
        ((n = r.stateNode), Ar(vn.current));
        var f = null;
        switch (o) {
          case "input":
            ((c = Ft(n, c)), (l = Ft(n, l)), (f = []));
            break;
          case "select":
            ((c = H({}, c, { value: void 0 })),
              (l = H({}, l, { value: void 0 })),
              (f = []));
            break;
          case "textarea":
            ((c = we(n, c)), (l = we(n, l)), (f = []));
            break;
          default:
            typeof c.onClick != "function" &&
              typeof l.onClick == "function" &&
              (n.onclick = Do);
        }
        Ml(o, l);
        var m;
        o = null;
        for (O in c)
          if (!l.hasOwnProperty(O) && c.hasOwnProperty(O) && c[O] != null)
            if (O === "style") {
              var S = c[O];
              for (m in S) S.hasOwnProperty(m) && (o || (o = {}), (o[m] = ""));
            } else
              O !== "dangerouslySetInnerHTML" &&
                O !== "children" &&
                O !== "suppressContentEditableWarning" &&
                O !== "suppressHydrationWarning" &&
                O !== "autoFocus" &&
                (a.hasOwnProperty(O)
                  ? f || (f = [])
                  : (f = f || []).push(O, null));
        for (O in l) {
          var w = l[O];
          if (
            ((S = c != null ? c[O] : void 0),
            l.hasOwnProperty(O) && w !== S && (w != null || S != null))
          )
            if (O === "style")
              if (S) {
                for (m in S)
                  !S.hasOwnProperty(m) ||
                    (w && w.hasOwnProperty(m)) ||
                    (o || (o = {}), (o[m] = ""));
                for (m in w)
                  w.hasOwnProperty(m) &&
                    S[m] !== w[m] &&
                    (o || (o = {}), (o[m] = w[m]));
              } else (o || (f || (f = []), f.push(O, o)), (o = w));
            else
              O === "dangerouslySetInnerHTML"
                ? ((w = w ? w.__html : void 0),
                  (S = S ? S.__html : void 0),
                  w != null && S !== w && (f = f || []).push(O, w))
                : O === "children"
                  ? (typeof w != "string" && typeof w != "number") ||
                    (f = f || []).push(O, "" + w)
                  : O !== "suppressContentEditableWarning" &&
                    O !== "suppressHydrationWarning" &&
                    (a.hasOwnProperty(O)
                      ? (w != null && O === "onScroll" && qe("scroll", n),
                        f || S === w || (f = []))
                      : (f = f || []).push(O, w));
        }
        o && (f = f || []).push("style", o);
        var O = f;
        (r.updateQueue = O) && (r.flags |= 4);
      }
    }),
    (yh = function (n, r, o, l) {
      o !== l && (r.flags |= 4);
    }));
  function Ri(n, r) {
    if (!Ge)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; )
            (r.alternate !== null && (o = r), (r = r.sibling));
          o === null ? (n.tail = null) : (o.sibling = null);
          break;
        case "collapsed":
          o = n.tail;
          for (var l = null; o !== null; )
            (o.alternate !== null && (l = o), (o = o.sibling));
          l === null
            ? r || n.tail === null
              ? (n.tail = null)
              : (n.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Et(n) {
    var r = n.alternate !== null && n.alternate.child === n.child,
      o = 0,
      l = 0;
    if (r)
      for (var c = n.child; c !== null; )
        ((o |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags & 14680064),
          (l |= c.flags & 14680064),
          (c.return = n),
          (c = c.sibling));
    else
      for (c = n.child; c !== null; )
        ((o |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags),
          (l |= c.flags),
          (c.return = n),
          (c = c.sibling));
    return ((n.subtreeFlags |= l), (n.childLanes = o), r);
  }
  function I_(n, r, o) {
    var l = r.pendingProps;
    switch ((_u(r), r.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Et(r), null);
      case 1:
        return (Mt(r.type) && Po(), Et(r), null);
      case 3:
        return (
          (l = r.stateNode),
          Ss(),
          Ve(Rt),
          Ve(_t),
          Ou(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (n === null || n.child === null) &&
            (zo(r)
              ? (r.flags |= 4)
              : n === null ||
                (n.memoizedState.isDehydrated && (r.flags & 256) === 0) ||
                ((r.flags |= 1024), on !== null && (lc(on), (on = null)))),
          Ju(n, r),
          Et(r),
          null
        );
      case 5:
        Ru(r);
        var c = Ar(Ti.current);
        if (((o = r.type), n !== null && r.stateNode != null))
          (gh(n, r, o, l, c),
            n.ref !== r.ref && ((r.flags |= 512), (r.flags |= 2097152)));
        else {
          if (!l) {
            if (r.stateNode === null) throw Error(s(166));
            return (Et(r), null);
          }
          if (((n = Ar(vn.current)), zo(r))) {
            ((l = r.stateNode), (o = r.type));
            var f = r.memoizedProps;
            switch (((l[yn] = r), (l[Si] = f), (n = (r.mode & 1) !== 0), o)) {
              case "dialog":
                (qe("cancel", l), qe("close", l));
                break;
              case "iframe":
              case "object":
              case "embed":
                qe("load", l);
                break;
              case "video":
              case "audio":
                for (c = 0; c < yi.length; c++) qe(yi[c], l);
                break;
              case "source":
                qe("error", l);
                break;
              case "img":
              case "image":
              case "link":
                (qe("error", l), qe("load", l));
                break;
              case "details":
                qe("toggle", l);
                break;
              case "input":
                (Vt(l, f), qe("invalid", l));
                break;
              case "select":
                ((l._wrapperState = { wasMultiple: !!f.multiple }),
                  qe("invalid", l));
                break;
              case "textarea":
                ($e(l, f), qe("invalid", l));
            }
            (Ml(o, f), (c = null));
            for (var m in f)
              if (f.hasOwnProperty(m)) {
                var S = f[m];
                m === "children"
                  ? typeof S == "string"
                    ? l.textContent !== S &&
                      (f.suppressHydrationWarning !== !0 &&
                        Oo(l.textContent, S, n),
                      (c = ["children", S]))
                    : typeof S == "number" &&
                      l.textContent !== "" + S &&
                      (f.suppressHydrationWarning !== !0 &&
                        Oo(l.textContent, S, n),
                      (c = ["children", "" + S]))
                  : a.hasOwnProperty(m) &&
                    S != null &&
                    m === "onScroll" &&
                    qe("scroll", l);
              }
            switch (o) {
              case "input":
                (kn(l), Ye(l, f, !0));
                break;
              case "textarea":
                (kn(l), mn(l));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof f.onClick == "function" && (l.onclick = Do);
            }
            ((l = c), (r.updateQueue = l), l !== null && (r.flags |= 4));
          } else {
            ((m = c.nodeType === 9 ? c : c.ownerDocument),
              n === "http://www.w3.org/1999/xhtml" && (n = uo(o)),
              n === "http://www.w3.org/1999/xhtml"
                ? o === "script"
                  ? ((n = m.createElement("div")),
                    (n.innerHTML = "<script><\/script>"),
                    (n = n.removeChild(n.firstChild)))
                  : typeof l.is == "string"
                    ? (n = m.createElement(o, { is: l.is }))
                    : ((n = m.createElement(o)),
                      o === "select" &&
                        ((m = n),
                        l.multiple
                          ? (m.multiple = !0)
                          : l.size && (m.size = l.size)))
                : (n = m.createElementNS(n, o)),
              (n[yn] = r),
              (n[Si] = l),
              mh(n, r, !1, !1),
              (r.stateNode = n));
            e: {
              switch (((m = Ol(o, l)), o)) {
                case "dialog":
                  (qe("cancel", n), qe("close", n), (c = l));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (qe("load", n), (c = l));
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < yi.length; c++) qe(yi[c], n);
                  c = l;
                  break;
                case "source":
                  (qe("error", n), (c = l));
                  break;
                case "img":
                case "image":
                case "link":
                  (qe("error", n), qe("load", n), (c = l));
                  break;
                case "details":
                  (qe("toggle", n), (c = l));
                  break;
                case "input":
                  (Vt(n, l), (c = Ft(n, l)), qe("invalid", n));
                  break;
                case "option":
                  c = l;
                  break;
                case "select":
                  ((n._wrapperState = { wasMultiple: !!l.multiple }),
                    (c = H({}, l, { value: void 0 })),
                    qe("invalid", n));
                  break;
                case "textarea":
                  ($e(n, l), (c = we(n, l)), qe("invalid", n));
                  break;
                default:
                  c = l;
              }
              (Ml(o, c), (S = c));
              for (f in S)
                if (S.hasOwnProperty(f)) {
                  var w = S[f];
                  f === "style"
                    ? of(n, w)
                    : f === "dangerouslySetInnerHTML"
                      ? ((w = w ? w.__html : void 0), w != null && rf(n, w))
                      : f === "children"
                        ? typeof w == "string"
                          ? (o !== "textarea" || w !== "") && Qs(n, w)
                          : typeof w == "number" && Qs(n, "" + w)
                        : f !== "suppressContentEditableWarning" &&
                          f !== "suppressHydrationWarning" &&
                          f !== "autoFocus" &&
                          (a.hasOwnProperty(f)
                            ? w != null && f === "onScroll" && qe("scroll", n)
                            : w != null && V(n, f, w, m));
                }
              switch (o) {
                case "input":
                  (kn(n), Ye(n, l, !1));
                  break;
                case "textarea":
                  (kn(n), mn(n));
                  break;
                case "option":
                  l.value != null && n.setAttribute("value", "" + Ce(l.value));
                  break;
                case "select":
                  ((n.multiple = !!l.multiple),
                    (f = l.value),
                    f != null
                      ? lt(n, !!l.multiple, f, !1)
                      : l.defaultValue != null &&
                        lt(n, !!l.multiple, l.defaultValue, !0));
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Do);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (r.flags |= 4);
          }
          r.ref !== null && ((r.flags |= 512), (r.flags |= 2097152));
        }
        return (Et(r), null);
      case 6:
        if (n && r.stateNode != null) yh(n, r, n.memoizedProps, l);
        else {
          if (typeof l != "string" && r.stateNode === null) throw Error(s(166));
          if (((o = Ar(Ti.current)), Ar(vn.current), zo(r))) {
            if (
              ((l = r.stateNode),
              (o = r.memoizedProps),
              (l[yn] = r),
              (f = l.nodeValue !== o) && ((n = zt), n !== null))
            )
              switch (n.tag) {
                case 3:
                  Oo(l.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 &&
                    Oo(l.nodeValue, o, (n.mode & 1) !== 0);
              }
            f && (r.flags |= 4);
          } else
            ((l = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(l)),
              (l[yn] = r),
              (r.stateNode = l));
        }
        return (Et(r), null);
      case 13:
        if (
          (Ve(Ke),
          (l = r.memoizedState),
          n === null ||
            (n.memoizedState !== null && n.memoizedState.dehydrated !== null))
        ) {
          if (Ge && $t !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0)
            (Sp(), gs(), (r.flags |= 98560), (f = !1));
          else if (((f = zo(r)), l !== null && l.dehydrated !== null)) {
            if (n === null) {
              if (!f) throw Error(s(318));
              if (
                ((f = r.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(s(317));
              f[yn] = r;
            } else
              (gs(),
                (r.flags & 128) === 0 && (r.memoizedState = null),
                (r.flags |= 4));
            (Et(r), (f = !1));
          } else (on !== null && (lc(on), (on = null)), (f = !0));
          if (!f) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0
          ? ((r.lanes = o), r)
          : ((l = l !== null),
            l !== (n !== null && n.memoizedState !== null) &&
              l &&
              ((r.child.flags |= 8192),
              (r.mode & 1) !== 0 &&
                (n === null || (Ke.current & 1) !== 0
                  ? it === 0 && (it = 3)
                  : dc())),
            r.updateQueue !== null && (r.flags |= 4),
            Et(r),
            null);
      case 4:
        return (
          Ss(),
          Ju(n, r),
          n === null && vi(r.stateNode.containerInfo),
          Et(r),
          null
        );
      case 10:
        return (Tu(r.type._context), Et(r), null);
      case 17:
        return (Mt(r.type) && Po(), Et(r), null);
      case 19:
        if ((Ve(Ke), (f = r.memoizedState), f === null)) return (Et(r), null);
        if (((l = (r.flags & 128) !== 0), (m = f.rendering), m === null))
          if (l) Ri(f, !1);
          else {
            if (it !== 0 || (n !== null && (n.flags & 128) !== 0))
              for (n = r.child; n !== null; ) {
                if (((m = Vo(n)), m !== null)) {
                  for (
                    r.flags |= 128,
                      Ri(f, !1),
                      l = m.updateQueue,
                      l !== null && ((r.updateQueue = l), (r.flags |= 4)),
                      r.subtreeFlags = 0,
                      l = o,
                      o = r.child;
                    o !== null;
                  )
                    ((f = o),
                      (n = l),
                      (f.flags &= 14680066),
                      (m = f.alternate),
                      m === null
                        ? ((f.childLanes = 0),
                          (f.lanes = n),
                          (f.child = null),
                          (f.subtreeFlags = 0),
                          (f.memoizedProps = null),
                          (f.memoizedState = null),
                          (f.updateQueue = null),
                          (f.dependencies = null),
                          (f.stateNode = null))
                        : ((f.childLanes = m.childLanes),
                          (f.lanes = m.lanes),
                          (f.child = m.child),
                          (f.subtreeFlags = 0),
                          (f.deletions = null),
                          (f.memoizedProps = m.memoizedProps),
                          (f.memoizedState = m.memoizedState),
                          (f.updateQueue = m.updateQueue),
                          (f.type = m.type),
                          (n = m.dependencies),
                          (f.dependencies =
                            n === null
                              ? null
                              : {
                                  lanes: n.lanes,
                                  firstContext: n.firstContext,
                                })),
                      (o = o.sibling));
                  return (Be(Ke, (Ke.current & 1) | 2), r.child);
                }
                n = n.sibling;
              }
            f.tail !== null &&
              Ze() > ks &&
              ((r.flags |= 128), (l = !0), Ri(f, !1), (r.lanes = 4194304));
          }
        else {
          if (!l)
            if (((n = Vo(m)), n !== null)) {
              if (
                ((r.flags |= 128),
                (l = !0),
                (o = n.updateQueue),
                o !== null && ((r.updateQueue = o), (r.flags |= 4)),
                Ri(f, !0),
                f.tail === null &&
                  f.tailMode === "hidden" &&
                  !m.alternate &&
                  !Ge)
              )
                return (Et(r), null);
            } else
              2 * Ze() - f.renderingStartTime > ks &&
                o !== 1073741824 &&
                ((r.flags |= 128), (l = !0), Ri(f, !1), (r.lanes = 4194304));
          f.isBackwards
            ? ((m.sibling = r.child), (r.child = m))
            : ((o = f.last),
              o !== null ? (o.sibling = m) : (r.child = m),
              (f.last = m));
        }
        return f.tail !== null
          ? ((r = f.tail),
            (f.rendering = r),
            (f.tail = r.sibling),
            (f.renderingStartTime = Ze()),
            (r.sibling = null),
            (o = Ke.current),
            Be(Ke, l ? (o & 1) | 2 : o & 1),
            r)
          : (Et(r), null);
      case 22:
      case 23:
        return (
          cc(),
          (l = r.memoizedState !== null),
          n !== null && (n.memoizedState !== null) !== l && (r.flags |= 8192),
          l && (r.mode & 1) !== 0
            ? (Bt & 1073741824) !== 0 &&
              (Et(r), r.subtreeFlags & 6 && (r.flags |= 8192))
            : Et(r),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, r.tag));
  }
  function C_(n, r) {
    switch ((_u(r), r.tag)) {
      case 1:
        return (
          Mt(r.type) && Po(),
          (n = r.flags),
          n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 3:
        return (
          Ss(),
          Ve(Rt),
          Ve(_t),
          Ou(),
          (n = r.flags),
          (n & 65536) !== 0 && (n & 128) === 0
            ? ((r.flags = (n & -65537) | 128), r)
            : null
        );
      case 5:
        return (Ru(r), null);
      case 13:
        if (
          (Ve(Ke), (n = r.memoizedState), n !== null && n.dehydrated !== null)
        ) {
          if (r.alternate === null) throw Error(s(340));
          gs();
        }
        return (
          (n = r.flags),
          n & 65536 ? ((r.flags = (n & -65537) | 128), r) : null
        );
      case 19:
        return (Ve(Ke), null);
      case 4:
        return (Ss(), null);
      case 10:
        return (Tu(r.type._context), null);
      case 22:
      case 23:
        return (cc(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ta = !1,
    wt = !1,
    N_ = typeof WeakSet == "function" ? WeakSet : Set,
    Q = null;
  function ws(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (l) {
          Je(n, r, l);
        }
      else o.current = null;
  }
  function Qu(n, r, o) {
    try {
      o();
    } catch (l) {
      Je(n, r, l);
    }
  }
  var vh = !1;
  function b_(n, r) {
    if (((cu = Eo), (n = Xf()), nu(n))) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = ((o = n.ownerDocument) && o.defaultView) || window;
          var l = o.getSelection && o.getSelection();
          if (l && l.rangeCount !== 0) {
            o = l.anchorNode;
            var c = l.anchorOffset,
              f = l.focusNode;
            l = l.focusOffset;
            try {
              (o.nodeType, f.nodeType);
            } catch {
              o = null;
              break e;
            }
            var m = 0,
              S = -1,
              w = -1,
              O = 0,
              F = 0,
              U = n,
              j = null;
            t: for (;;) {
              for (
                var Y;
                U !== o || (c !== 0 && U.nodeType !== 3) || (S = m + c),
                  U !== f || (l !== 0 && U.nodeType !== 3) || (w = m + l),
                  U.nodeType === 3 && (m += U.nodeValue.length),
                  (Y = U.firstChild) !== null;
              )
                ((j = U), (U = Y));
              for (;;) {
                if (U === n) break t;
                if (
                  (j === o && ++O === c && (S = m),
                  j === f && ++F === l && (w = m),
                  (Y = U.nextSibling) !== null)
                )
                  break;
                ((U = j), (j = U.parentNode));
              }
              U = Y;
            }
            o = S === -1 || w === -1 ? null : { start: S, end: w };
          } else o = null;
        }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (
      du = { focusedElem: n, selectionRange: o }, Eo = !1, Q = r;
      Q !== null;
    )
      if (((r = Q), (n = r.child), (r.subtreeFlags & 1028) !== 0 && n !== null))
        ((n.return = r), (Q = n));
      else
        for (; Q !== null; ) {
          r = Q;
          try {
            var Z = r.alternate;
            if ((r.flags & 1024) !== 0)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Z !== null) {
                    var te = Z.memoizedProps,
                      et = Z.memoizedState,
                      b = r.stateNode,
                      k = b.getSnapshotBeforeUpdate(
                        r.elementType === r.type ? te : an(r.type, te),
                        et,
                      );
                    b.__reactInternalSnapshotBeforeUpdate = k;
                  }
                  break;
                case 3:
                  var M = r.stateNode.containerInfo;
                  M.nodeType === 1
                    ? (M.textContent = "")
                    : M.nodeType === 9 &&
                      M.documentElement &&
                      M.removeChild(M.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch ($) {
            Je(r, r.return, $);
          }
          if (((n = r.sibling), n !== null)) {
            ((n.return = r.return), (Q = n));
            break;
          }
          Q = r.return;
        }
    return ((Z = vh), (vh = !1), Z);
  }
  function Mi(n, r, o) {
    var l = r.updateQueue;
    if (((l = l !== null ? l.lastEffect : null), l !== null)) {
      var c = (l = l.next);
      do {
        if ((c.tag & n) === n) {
          var f = c.destroy;
          ((c.destroy = void 0), f !== void 0 && Qu(r, o, f));
        }
        c = c.next;
      } while (c !== l);
    }
  }
  function na(n, r) {
    if (
      ((r = r.updateQueue), (r = r !== null ? r.lastEffect : null), r !== null)
    ) {
      var o = (r = r.next);
      do {
        if ((o.tag & n) === n) {
          var l = o.create;
          o.destroy = l();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Zu(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : (r.current = n);
    }
  }
  function _h(n) {
    var r = n.alternate;
    (r !== null && ((n.alternate = null), _h(r)),
      (n.child = null),
      (n.deletions = null),
      (n.sibling = null),
      n.tag === 5 &&
        ((r = n.stateNode),
        r !== null &&
          (delete r[yn],
          delete r[Si],
          delete r[mu],
          delete r[d_],
          delete r[f_])),
      (n.stateNode = null),
      (n.return = null),
      (n.dependencies = null),
      (n.memoizedProps = null),
      (n.memoizedState = null),
      (n.pendingProps = null),
      (n.stateNode = null),
      (n.updateQueue = null));
  }
  function Sh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Eh(n) {
    e: for (;;) {
      for (; n.sibling === null; ) {
        if (n.return === null || Sh(n.return)) return null;
        n = n.return;
      }
      for (
        n.sibling.return = n.return, n = n.sibling;
        n.tag !== 5 && n.tag !== 6 && n.tag !== 18;
      ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        ((n.child.return = n), (n = n.child));
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function ec(n, r, o) {
    var l = n.tag;
    if (l === 5 || l === 6)
      ((n = n.stateNode),
        r
          ? o.nodeType === 8
            ? o.parentNode.insertBefore(n, r)
            : o.insertBefore(n, r)
          : (o.nodeType === 8
              ? ((r = o.parentNode), r.insertBefore(n, o))
              : ((r = o), r.appendChild(n)),
            (o = o._reactRootContainer),
            o != null || r.onclick !== null || (r.onclick = Do)));
    else if (l !== 4 && ((n = n.child), n !== null))
      for (ec(n, r, o), n = n.sibling; n !== null; )
        (ec(n, r, o), (n = n.sibling));
  }
  function tc(n, r, o) {
    var l = n.tag;
    if (l === 5 || l === 6)
      ((n = n.stateNode), r ? o.insertBefore(n, r) : o.appendChild(n));
    else if (l !== 4 && ((n = n.child), n !== null))
      for (tc(n, r, o), n = n.sibling; n !== null; )
        (tc(n, r, o), (n = n.sibling));
  }
  var mt = null,
    ln = !1;
  function ir(n, r, o) {
    for (o = o.child; o !== null; ) (wh(n, r, o), (o = o.sibling));
  }
  function wh(n, r, o) {
    if (gn && typeof gn.onCommitFiberUnmount == "function")
      try {
        gn.onCommitFiberUnmount(mo, o);
      } catch {}
    switch (o.tag) {
      case 5:
        wt || ws(o, r);
      case 6:
        var l = mt,
          c = ln;
        ((mt = null),
          ir(n, r, o),
          (mt = l),
          (ln = c),
          mt !== null &&
            (ln
              ? ((n = mt),
                (o = o.stateNode),
                n.nodeType === 8
                  ? n.parentNode.removeChild(o)
                  : n.removeChild(o))
              : mt.removeChild(o.stateNode)));
        break;
      case 18:
        mt !== null &&
          (ln
            ? ((n = mt),
              (o = o.stateNode),
              n.nodeType === 8
                ? hu(n.parentNode, o)
                : n.nodeType === 1 && hu(n, o),
              ui(n))
            : hu(mt, o.stateNode));
        break;
      case 4:
        ((l = mt),
          (c = ln),
          (mt = o.stateNode.containerInfo),
          (ln = !0),
          ir(n, r, o),
          (mt = l),
          (ln = c));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !wt &&
          ((l = o.updateQueue), l !== null && ((l = l.lastEffect), l !== null))
        ) {
          c = l = l.next;
          do {
            var f = c,
              m = f.destroy;
            ((f = f.tag),
              m !== void 0 && ((f & 2) !== 0 || (f & 4) !== 0) && Qu(o, r, m),
              (c = c.next));
          } while (c !== l);
        }
        ir(n, r, o);
        break;
      case 1:
        if (
          !wt &&
          (ws(o, r),
          (l = o.stateNode),
          typeof l.componentWillUnmount == "function")
        )
          try {
            ((l.props = o.memoizedProps),
              (l.state = o.memoizedState),
              l.componentWillUnmount());
          } catch (S) {
            Je(o, r, S);
          }
        ir(n, r, o);
        break;
      case 21:
        ir(n, r, o);
        break;
      case 22:
        o.mode & 1
          ? ((wt = (l = wt) || o.memoizedState !== null), ir(n, r, o), (wt = l))
          : ir(n, r, o);
        break;
      default:
        ir(n, r, o);
    }
  }
  function xh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      (o === null && (o = n.stateNode = new N_()),
        r.forEach(function (l) {
          var c = F_.bind(null, n, l);
          o.has(l) || (o.add(l), l.then(c, c));
        }));
    }
  }
  function un(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        try {
          var f = n,
            m = r,
            S = m;
          e: for (; S !== null; ) {
            switch (S.tag) {
              case 5:
                ((mt = S.stateNode), (ln = !1));
                break e;
              case 3:
                ((mt = S.stateNode.containerInfo), (ln = !0));
                break e;
              case 4:
                ((mt = S.stateNode.containerInfo), (ln = !0));
                break e;
            }
            S = S.return;
          }
          if (mt === null) throw Error(s(160));
          (wh(f, m, c), (mt = null), (ln = !1));
          var w = c.alternate;
          (w !== null && (w.return = null), (c.return = null));
        } catch (O) {
          Je(c, r, O);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; ) (kh(r, n), (r = r.sibling));
  }
  function kh(n, r) {
    var o = n.alternate,
      l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((un(r, n), Sn(n), l & 4)) {
          try {
            (Mi(3, n, n.return), na(3, n));
          } catch (te) {
            Je(n, n.return, te);
          }
          try {
            Mi(5, n, n.return);
          } catch (te) {
            Je(n, n.return, te);
          }
        }
        break;
      case 1:
        (un(r, n), Sn(n), l & 512 && o !== null && ws(o, o.return));
        break;
      case 5:
        if (
          (un(r, n),
          Sn(n),
          l & 512 && o !== null && ws(o, o.return),
          n.flags & 32)
        ) {
          var c = n.stateNode;
          try {
            Qs(c, "");
          } catch (te) {
            Je(n, n.return, te);
          }
        }
        if (l & 4 && ((c = n.stateNode), c != null)) {
          var f = n.memoizedProps,
            m = o !== null ? o.memoizedProps : f,
            S = n.type,
            w = n.updateQueue;
          if (((n.updateQueue = null), w !== null))
            try {
              (S === "input" &&
                f.type === "radio" &&
                f.name != null &&
                Cr(c, f),
                Ol(S, m));
              var O = Ol(S, f);
              for (m = 0; m < w.length; m += 2) {
                var F = w[m],
                  U = w[m + 1];
                F === "style"
                  ? of(c, U)
                  : F === "dangerouslySetInnerHTML"
                    ? rf(c, U)
                    : F === "children"
                      ? Qs(c, U)
                      : V(c, F, U, O);
              }
              switch (S) {
                case "input":
                  Tn(c, f);
                  break;
                case "textarea":
                  be(c, f);
                  break;
                case "select":
                  var j = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!f.multiple;
                  var Y = f.value;
                  Y != null
                    ? lt(c, !!f.multiple, Y, !1)
                    : j !== !!f.multiple &&
                      (f.defaultValue != null
                        ? lt(c, !!f.multiple, f.defaultValue, !0)
                        : lt(c, !!f.multiple, f.multiple ? [] : "", !1));
              }
              c[Si] = f;
            } catch (te) {
              Je(n, n.return, te);
            }
        }
        break;
      case 6:
        if ((un(r, n), Sn(n), l & 4)) {
          if (n.stateNode === null) throw Error(s(162));
          ((c = n.stateNode), (f = n.memoizedProps));
          try {
            c.nodeValue = f;
          } catch (te) {
            Je(n, n.return, te);
          }
        }
        break;
      case 3:
        if (
          (un(r, n), Sn(n), l & 4 && o !== null && o.memoizedState.isDehydrated)
        )
          try {
            ui(r.containerInfo);
          } catch (te) {
            Je(n, n.return, te);
          }
        break;
      case 4:
        (un(r, n), Sn(n));
        break;
      case 13:
        (un(r, n),
          Sn(n),
          (c = n.child),
          c.flags & 8192 &&
            ((f = c.memoizedState !== null),
            (c.stateNode.isHidden = f),
            !f ||
              (c.alternate !== null && c.alternate.memoizedState !== null) ||
              (sc = Ze())),
          l & 4 && xh(n));
        break;
      case 22:
        if (
          ((F = o !== null && o.memoizedState !== null),
          n.mode & 1 ? ((wt = (O = wt) || F), un(r, n), (wt = O)) : un(r, n),
          Sn(n),
          l & 8192)
        ) {
          if (
            ((O = n.memoizedState !== null),
            (n.stateNode.isHidden = O) && !F && (n.mode & 1) !== 0)
          )
            for (Q = n, F = n.child; F !== null; ) {
              for (U = Q = F; Q !== null; ) {
                switch (((j = Q), (Y = j.child), j.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Mi(4, j, j.return);
                    break;
                  case 1:
                    ws(j, j.return);
                    var Z = j.stateNode;
                    if (typeof Z.componentWillUnmount == "function") {
                      ((l = j), (o = j.return));
                      try {
                        ((r = l),
                          (Z.props = r.memoizedProps),
                          (Z.state = r.memoizedState),
                          Z.componentWillUnmount());
                      } catch (te) {
                        Je(l, o, te);
                      }
                    }
                    break;
                  case 5:
                    ws(j, j.return);
                    break;
                  case 22:
                    if (j.memoizedState !== null) {
                      Ch(U);
                      continue;
                    }
                }
                Y !== null ? ((Y.return = j), (Q = Y)) : Ch(U);
              }
              F = F.sibling;
            }
          e: for (F = null, U = n; ; ) {
            if (U.tag === 5) {
              if (F === null) {
                F = U;
                try {
                  ((c = U.stateNode),
                    O
                      ? ((f = c.style),
                        typeof f.setProperty == "function"
                          ? f.setProperty("display", "none", "important")
                          : (f.display = "none"))
                      : ((S = U.stateNode),
                        (w = U.memoizedProps.style),
                        (m =
                          w != null && w.hasOwnProperty("display")
                            ? w.display
                            : null),
                        (S.style.display = sf("display", m))));
                } catch (te) {
                  Je(n, n.return, te);
                }
              }
            } else if (U.tag === 6) {
              if (F === null)
                try {
                  U.stateNode.nodeValue = O ? "" : U.memoizedProps;
                } catch (te) {
                  Je(n, n.return, te);
                }
            } else if (
              ((U.tag !== 22 && U.tag !== 23) ||
                U.memoizedState === null ||
                U === n) &&
              U.child !== null
            ) {
              ((U.child.return = U), (U = U.child));
              continue;
            }
            if (U === n) break e;
            for (; U.sibling === null; ) {
              if (U.return === null || U.return === n) break e;
              (F === U && (F = null), (U = U.return));
            }
            (F === U && (F = null),
              (U.sibling.return = U.return),
              (U = U.sibling));
          }
        }
        break;
      case 19:
        (un(r, n), Sn(n), l & 4 && xh(n));
        break;
      case 21:
        break;
      default:
        (un(r, n), Sn(n));
    }
  }
  function Sn(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (Sh(o)) {
              var l = o;
              break e;
            }
            o = o.return;
          }
          throw Error(s(160));
        }
        switch (l.tag) {
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (Qs(c, ""), (l.flags &= -33));
            var f = Eh(n);
            tc(n, f, c);
            break;
          case 3:
          case 4:
            var m = l.stateNode.containerInfo,
              S = Eh(n);
            ec(n, S, m);
            break;
          default:
            throw Error(s(161));
        }
      } catch (w) {
        Je(n, n.return, w);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function R_(n, r, o) {
    ((Q = n), Th(n));
  }
  function Th(n, r, o) {
    for (var l = (n.mode & 1) !== 0; Q !== null; ) {
      var c = Q,
        f = c.child;
      if (c.tag === 22 && l) {
        var m = c.memoizedState !== null || ta;
        if (!m) {
          var S = c.alternate,
            w = (S !== null && S.memoizedState !== null) || wt;
          S = ta;
          var O = wt;
          if (((ta = m), (wt = w) && !O))
            for (Q = c; Q !== null; )
              ((m = Q),
                (w = m.child),
                m.tag === 22 && m.memoizedState !== null
                  ? Nh(c)
                  : w !== null
                    ? ((w.return = m), (Q = w))
                    : Nh(c));
          for (; f !== null; ) ((Q = f), Th(f), (f = f.sibling));
          ((Q = c), (ta = S), (wt = O));
        }
        Ih(n);
      } else
        (c.subtreeFlags & 8772) !== 0 && f !== null
          ? ((f.return = c), (Q = f))
          : Ih(n);
    }
  }
  function Ih(n) {
    for (; Q !== null; ) {
      var r = Q;
      if ((r.flags & 8772) !== 0) {
        var o = r.alternate;
        try {
          if ((r.flags & 8772) !== 0)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                wt || na(5, r);
                break;
              case 1:
                var l = r.stateNode;
                if (r.flags & 4 && !wt)
                  if (o === null) l.componentDidMount();
                  else {
                    var c =
                      r.elementType === r.type
                        ? o.memoizedProps
                        : an(r.type, o.memoizedProps);
                    l.componentDidUpdate(
                      c,
                      o.memoizedState,
                      l.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var f = r.updateQueue;
                f !== null && Cp(r, f, l);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (((o = null), r.child !== null))
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  Cp(r, m, o);
                }
                break;
              case 5:
                var S = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = S;
                  var w = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      w.autoFocus && o.focus();
                      break;
                    case "img":
                      w.src && (o.src = w.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var O = r.alternate;
                  if (O !== null) {
                    var F = O.memoizedState;
                    if (F !== null) {
                      var U = F.dehydrated;
                      U !== null && ui(U);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(s(163));
            }
          wt || (r.flags & 512 && Zu(r));
        } catch (j) {
          Je(r, r.return, j);
        }
      }
      if (r === n) {
        Q = null;
        break;
      }
      if (((o = r.sibling), o !== null)) {
        ((o.return = r.return), (Q = o));
        break;
      }
      Q = r.return;
    }
  }
  function Ch(n) {
    for (; Q !== null; ) {
      var r = Q;
      if (r === n) {
        Q = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        ((o.return = r.return), (Q = o));
        break;
      }
      Q = r.return;
    }
  }
  function Nh(n) {
    for (; Q !== null; ) {
      var r = Q;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              na(4, r);
            } catch (w) {
              Je(r, o, w);
            }
            break;
          case 1:
            var l = r.stateNode;
            if (typeof l.componentDidMount == "function") {
              var c = r.return;
              try {
                l.componentDidMount();
              } catch (w) {
                Je(r, c, w);
              }
            }
            var f = r.return;
            try {
              Zu(r);
            } catch (w) {
              Je(r, f, w);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Zu(r);
            } catch (w) {
              Je(r, m, w);
            }
        }
      } catch (w) {
        Je(r, r.return, w);
      }
      if (r === n) {
        Q = null;
        break;
      }
      var S = r.sibling;
      if (S !== null) {
        ((S.return = r.return), (Q = S));
        break;
      }
      Q = r.return;
    }
  }
  var M_ = Math.ceil,
    ra = K.ReactCurrentDispatcher,
    nc = K.ReactCurrentOwner,
    Jt = K.ReactCurrentBatchConfig,
    Me = 0,
    ct = null,
    rt = null,
    gt = 0,
    Bt = 0,
    xs = er(0),
    it = 0,
    Oi = null,
    Lr = 0,
    sa = 0,
    rc = 0,
    Di = null,
    Dt = null,
    sc = 0,
    ks = 1 / 0,
    An = null,
    ia = !1,
    ic = null,
    or = null,
    oa = !1,
    ar = null,
    aa = 0,
    Ai = 0,
    oc = null,
    la = -1,
    ua = 0;
  function Tt() {
    return (Me & 6) !== 0 ? Ze() : la !== -1 ? la : (la = Ze());
  }
  function lr(n) {
    return (n.mode & 1) === 0
      ? 1
      : (Me & 2) !== 0 && gt !== 0
        ? gt & -gt
        : h_.transition !== null
          ? (ua === 0 && (ua = Ef()), ua)
          : ((n = Fe),
            n !== 0 ||
              ((n = window.event), (n = n === void 0 ? 16 : Rf(n.type))),
            n);
  }
  function cn(n, r, o, l) {
    if (50 < Ai) throw ((Ai = 0), (oc = null), Error(s(185)));
    (si(n, o, l),
      ((Me & 2) === 0 || n !== ct) &&
        (n === ct && ((Me & 2) === 0 && (sa |= o), it === 4 && ur(n, gt)),
        At(n, l),
        o === 1 &&
          Me === 0 &&
          (r.mode & 1) === 0 &&
          ((ks = Ze() + 500), jo && nr())));
  }
  function At(n, r) {
    var o = n.callbackNode;
    hv(n, r);
    var l = vo(n, n === ct ? gt : 0);
    if (l === 0)
      (o !== null && vf(o), (n.callbackNode = null), (n.callbackPriority = 0));
    else if (((r = l & -l), n.callbackPriority !== r)) {
      if ((o != null && vf(o), r === 1))
        (n.tag === 0 ? p_(Rh.bind(null, n)) : mp(Rh.bind(null, n)),
          u_(function () {
            (Me & 6) === 0 && nr();
          }),
          (o = null));
      else {
        switch (wf(l)) {
          case 1:
            o = Ul;
            break;
          case 4:
            o = _f;
            break;
          case 16:
            o = ho;
            break;
          case 536870912:
            o = Sf;
            break;
          default:
            o = ho;
        }
        o = Fh(o, bh.bind(null, n));
      }
      ((n.callbackPriority = r), (n.callbackNode = o));
    }
  }
  function bh(n, r) {
    if (((la = -1), (ua = 0), (Me & 6) !== 0)) throw Error(s(327));
    var o = n.callbackNode;
    if (Ts() && n.callbackNode !== o) return null;
    var l = vo(n, n === ct ? gt : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & n.expiredLanes) !== 0 || r) r = ca(n, l);
    else {
      r = l;
      var c = Me;
      Me |= 2;
      var f = Oh();
      (ct !== n || gt !== r) && ((An = null), (ks = Ze() + 500), Fr(n, r));
      do
        try {
          A_();
          break;
        } catch (S) {
          Mh(n, S);
        }
      while (!0);
      (ku(),
        (ra.current = f),
        (Me = c),
        rt !== null ? (r = 0) : ((ct = null), (gt = 0), (r = it)));
    }
    if (r !== 0) {
      if (
        (r === 2 && ((c = zl(n)), c !== 0 && ((l = c), (r = ac(n, c)))),
        r === 1)
      )
        throw ((o = Oi), Fr(n, 0), ur(n, l), At(n, Ze()), o);
      if (r === 6) ur(n, l);
      else {
        if (
          ((c = n.current.alternate),
          (l & 30) === 0 &&
            !O_(c) &&
            ((r = ca(n, l)),
            r === 2 && ((f = zl(n)), f !== 0 && ((l = f), (r = ac(n, f)))),
            r === 1))
        )
          throw ((o = Oi), Fr(n, 0), ur(n, l), At(n, Ze()), o);
        switch (((n.finishedWork = c), (n.finishedLanes = l), r)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Ur(n, Dt, An);
            break;
          case 3:
            if (
              (ur(n, l),
              (l & 130023424) === l && ((r = sc + 500 - Ze()), 10 < r))
            ) {
              if (vo(n, 0) !== 0) break;
              if (((c = n.suspendedLanes), (c & l) !== l)) {
                (Tt(), (n.pingedLanes |= n.suspendedLanes & c));
                break;
              }
              n.timeoutHandle = pu(Ur.bind(null, n, Dt, An), r);
              break;
            }
            Ur(n, Dt, An);
            break;
          case 4:
            if ((ur(n, l), (l & 4194240) === l)) break;
            for (r = n.eventTimes, c = -1; 0 < l; ) {
              var m = 31 - rn(l);
              ((f = 1 << m), (m = r[m]), m > c && (c = m), (l &= ~f));
            }
            if (
              ((l = c),
              (l = Ze() - l),
              (l =
                (120 > l
                  ? 120
                  : 480 > l
                    ? 480
                    : 1080 > l
                      ? 1080
                      : 1920 > l
                        ? 1920
                        : 3e3 > l
                          ? 3e3
                          : 4320 > l
                            ? 4320
                            : 1960 * M_(l / 1960)) - l),
              10 < l)
            ) {
              n.timeoutHandle = pu(Ur.bind(null, n, Dt, An), l);
              break;
            }
            Ur(n, Dt, An);
            break;
          case 5:
            Ur(n, Dt, An);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (At(n, Ze()), n.callbackNode === o ? bh.bind(null, n) : null);
  }
  function ac(n, r) {
    var o = Di;
    return (
      n.current.memoizedState.isDehydrated && (Fr(n, r).flags |= 256),
      (n = ca(n, r)),
      n !== 2 && ((r = Dt), (Dt = o), r !== null && lc(r)),
      n
    );
  }
  function lc(n) {
    Dt === null ? (Dt = n) : Dt.push.apply(Dt, n);
  }
  function O_(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && ((o = o.stores), o !== null))
          for (var l = 0; l < o.length; l++) {
            var c = o[l],
              f = c.getSnapshot;
            c = c.value;
            try {
              if (!sn(f(), c)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((o = r.child), r.subtreeFlags & 16384 && o !== null))
        ((o.return = r), (r = o));
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        ((r.sibling.return = r.return), (r = r.sibling));
      }
    }
    return !0;
  }
  function ur(n, r) {
    for (
      r &= ~rc,
        r &= ~sa,
        n.suspendedLanes |= r,
        n.pingedLanes &= ~r,
        n = n.expirationTimes;
      0 < r;
    ) {
      var o = 31 - rn(r),
        l = 1 << o;
      ((n[o] = -1), (r &= ~l));
    }
  }
  function Rh(n) {
    if ((Me & 6) !== 0) throw Error(s(327));
    Ts();
    var r = vo(n, 0);
    if ((r & 1) === 0) return (At(n, Ze()), null);
    var o = ca(n, r);
    if (n.tag !== 0 && o === 2) {
      var l = zl(n);
      l !== 0 && ((r = l), (o = ac(n, l)));
    }
    if (o === 1) throw ((o = Oi), Fr(n, 0), ur(n, r), At(n, Ze()), o);
    if (o === 6) throw Error(s(345));
    return (
      (n.finishedWork = n.current.alternate),
      (n.finishedLanes = r),
      Ur(n, Dt, An),
      At(n, Ze()),
      null
    );
  }
  function uc(n, r) {
    var o = Me;
    Me |= 1;
    try {
      return n(r);
    } finally {
      ((Me = o), Me === 0 && ((ks = Ze() + 500), jo && nr()));
    }
  }
  function jr(n) {
    ar !== null && ar.tag === 0 && (Me & 6) === 0 && Ts();
    var r = Me;
    Me |= 1;
    var o = Jt.transition,
      l = Fe;
    try {
      if (((Jt.transition = null), (Fe = 1), n)) return n();
    } finally {
      ((Fe = l), (Jt.transition = o), (Me = r), (Me & 6) === 0 && nr());
    }
  }
  function cc() {
    ((Bt = xs.current), Ve(xs));
  }
  function Fr(n, r) {
    ((n.finishedWork = null), (n.finishedLanes = 0));
    var o = n.timeoutHandle;
    if ((o !== -1 && ((n.timeoutHandle = -1), l_(o)), rt !== null))
      for (o = rt.return; o !== null; ) {
        var l = o;
        switch ((_u(l), l.tag)) {
          case 1:
            ((l = l.type.childContextTypes), l != null && Po());
            break;
          case 3:
            (Ss(), Ve(Rt), Ve(_t), Ou());
            break;
          case 5:
            Ru(l);
            break;
          case 4:
            Ss();
            break;
          case 13:
            Ve(Ke);
            break;
          case 19:
            Ve(Ke);
            break;
          case 10:
            Tu(l.type._context);
            break;
          case 22:
          case 23:
            cc();
        }
        o = o.return;
      }
    if (
      ((ct = n),
      (rt = n = cr(n.current, null)),
      (gt = Bt = r),
      (it = 0),
      (Oi = null),
      (rc = sa = Lr = 0),
      (Dt = Di = null),
      Dr !== null)
    ) {
      for (r = 0; r < Dr.length; r++)
        if (((o = Dr[r]), (l = o.interleaved), l !== null)) {
          o.interleaved = null;
          var c = l.next,
            f = o.pending;
          if (f !== null) {
            var m = f.next;
            ((f.next = c), (l.next = m));
          }
          o.pending = l;
        }
      Dr = null;
    }
    return n;
  }
  function Mh(n, r) {
    do {
      var o = rt;
      try {
        if ((ku(), (Go.current = Jo), Yo)) {
          for (var l = Xe.memoizedState; l !== null; ) {
            var c = l.queue;
            (c !== null && (c.pending = null), (l = l.next));
          }
          Yo = !1;
        }
        if (
          ((Pr = 0),
          (ut = st = Xe = null),
          (Ii = !1),
          (Ci = 0),
          (nc.current = null),
          o === null || o.return === null)
        ) {
          ((it = 1), (Oi = r), (rt = null));
          break;
        }
        e: {
          var f = n,
            m = o.return,
            S = o,
            w = r;
          if (
            ((r = gt),
            (S.flags |= 32768),
            w !== null && typeof w == "object" && typeof w.then == "function")
          ) {
            var O = w,
              F = S,
              U = F.tag;
            if ((F.mode & 1) === 0 && (U === 0 || U === 11 || U === 15)) {
              var j = F.alternate;
              j
                ? ((F.updateQueue = j.updateQueue),
                  (F.memoizedState = j.memoizedState),
                  (F.lanes = j.lanes))
                : ((F.updateQueue = null), (F.memoizedState = null));
            }
            var Y = nh(m);
            if (Y !== null) {
              ((Y.flags &= -257),
                rh(Y, m, S, f, r),
                Y.mode & 1 && th(f, O, r),
                (r = Y),
                (w = O));
              var Z = r.updateQueue;
              if (Z === null) {
                var te = new Set();
                (te.add(w), (r.updateQueue = te));
              } else Z.add(w);
              break e;
            } else {
              if ((r & 1) === 0) {
                (th(f, O, r), dc());
                break e;
              }
              w = Error(s(426));
            }
          } else if (Ge && S.mode & 1) {
            var et = nh(m);
            if (et !== null) {
              ((et.flags & 65536) === 0 && (et.flags |= 256),
                rh(et, m, S, f, r),
                wu(Es(w, S)));
              break e;
            }
          }
          ((f = w = Es(w, S)),
            it !== 4 && (it = 2),
            Di === null ? (Di = [f]) : Di.push(f),
            (f = m));
          do {
            switch (f.tag) {
              case 3:
                ((f.flags |= 65536), (r &= -r), (f.lanes |= r));
                var b = Zp(f, w, r);
                Ip(f, b);
                break e;
              case 1:
                S = w;
                var k = f.type,
                  M = f.stateNode;
                if (
                  (f.flags & 128) === 0 &&
                  (typeof k.getDerivedStateFromError == "function" ||
                    (M !== null &&
                      typeof M.componentDidCatch == "function" &&
                      (or === null || !or.has(M))))
                ) {
                  ((f.flags |= 65536), (r &= -r), (f.lanes |= r));
                  var $ = eh(f, S, r);
                  Ip(f, $);
                  break e;
                }
            }
            f = f.return;
          } while (f !== null);
        }
        Ah(o);
      } catch (ne) {
        ((r = ne), rt === o && o !== null && (rt = o = o.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Oh() {
    var n = ra.current;
    return ((ra.current = Jo), n === null ? Jo : n);
  }
  function dc() {
    ((it === 0 || it === 3 || it === 2) && (it = 4),
      ct === null ||
        ((Lr & 268435455) === 0 && (sa & 268435455) === 0) ||
        ur(ct, gt));
  }
  function ca(n, r) {
    var o = Me;
    Me |= 2;
    var l = Oh();
    (ct !== n || gt !== r) && ((An = null), Fr(n, r));
    do
      try {
        D_();
        break;
      } catch (c) {
        Mh(n, c);
      }
    while (!0);
    if ((ku(), (Me = o), (ra.current = l), rt !== null)) throw Error(s(261));
    return ((ct = null), (gt = 0), it);
  }
  function D_() {
    for (; rt !== null; ) Dh(rt);
  }
  function A_() {
    for (; rt !== null && !iv(); ) Dh(rt);
  }
  function Dh(n) {
    var r = jh(n.alternate, n, Bt);
    ((n.memoizedProps = n.pendingProps),
      r === null ? Ah(n) : (rt = r),
      (nc.current = null));
  }
  function Ah(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (((n = r.return), (r.flags & 32768) === 0)) {
        if (((o = I_(o, r, Bt)), o !== null)) {
          rt = o;
          return;
        }
      } else {
        if (((o = C_(o, r)), o !== null)) {
          ((o.flags &= 32767), (rt = o));
          return;
        }
        if (n !== null)
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null));
        else {
          ((it = 6), (rt = null));
          return;
        }
      }
      if (((r = r.sibling), r !== null)) {
        rt = r;
        return;
      }
      rt = r = n;
    } while (r !== null);
    it === 0 && (it = 5);
  }
  function Ur(n, r, o) {
    var l = Fe,
      c = Jt.transition;
    try {
      ((Jt.transition = null), (Fe = 1), P_(n, r, o, l));
    } finally {
      ((Jt.transition = c), (Fe = l));
    }
    return null;
  }
  function P_(n, r, o, l) {
    do Ts();
    while (ar !== null);
    if ((Me & 6) !== 0) throw Error(s(327));
    o = n.finishedWork;
    var c = n.finishedLanes;
    if (o === null) return null;
    if (((n.finishedWork = null), (n.finishedLanes = 0), o === n.current))
      throw Error(s(177));
    ((n.callbackNode = null), (n.callbackPriority = 0));
    var f = o.lanes | o.childLanes;
    if (
      (mv(n, f),
      n === ct && ((rt = ct = null), (gt = 0)),
      ((o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0) ||
        oa ||
        ((oa = !0),
        Fh(ho, function () {
          return (Ts(), null);
        })),
      (f = (o.flags & 15990) !== 0),
      (o.subtreeFlags & 15990) !== 0 || f)
    ) {
      ((f = Jt.transition), (Jt.transition = null));
      var m = Fe;
      Fe = 1;
      var S = Me;
      ((Me |= 4),
        (nc.current = null),
        b_(n, o),
        kh(o, n),
        t_(du),
        (Eo = !!cu),
        (du = cu = null),
        (n.current = o),
        R_(o),
        ov(),
        (Me = S),
        (Fe = m),
        (Jt.transition = f));
    } else n.current = o;
    if (
      (oa && ((oa = !1), (ar = n), (aa = c)),
      (f = n.pendingLanes),
      f === 0 && (or = null),
      uv(o.stateNode),
      At(n, Ze()),
      r !== null)
    )
      for (l = n.onRecoverableError, o = 0; o < r.length; o++)
        ((c = r[o]), l(c.value, { componentStack: c.stack, digest: c.digest }));
    if (ia) throw ((ia = !1), (n = ic), (ic = null), n);
    return (
      (aa & 1) !== 0 && n.tag !== 0 && Ts(),
      (f = n.pendingLanes),
      (f & 1) !== 0 ? (n === oc ? Ai++ : ((Ai = 0), (oc = n))) : (Ai = 0),
      nr(),
      null
    );
  }
  function Ts() {
    if (ar !== null) {
      var n = wf(aa),
        r = Jt.transition,
        o = Fe;
      try {
        if (((Jt.transition = null), (Fe = 16 > n ? 16 : n), ar === null))
          var l = !1;
        else {
          if (((n = ar), (ar = null), (aa = 0), (Me & 6) !== 0))
            throw Error(s(331));
          var c = Me;
          for (Me |= 4, Q = n.current; Q !== null; ) {
            var f = Q,
              m = f.child;
            if ((Q.flags & 16) !== 0) {
              var S = f.deletions;
              if (S !== null) {
                for (var w = 0; w < S.length; w++) {
                  var O = S[w];
                  for (Q = O; Q !== null; ) {
                    var F = Q;
                    switch (F.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Mi(8, F, f);
                    }
                    var U = F.child;
                    if (U !== null) ((U.return = F), (Q = U));
                    else
                      for (; Q !== null; ) {
                        F = Q;
                        var j = F.sibling,
                          Y = F.return;
                        if ((_h(F), F === O)) {
                          Q = null;
                          break;
                        }
                        if (j !== null) {
                          ((j.return = Y), (Q = j));
                          break;
                        }
                        Q = Y;
                      }
                  }
                }
                var Z = f.alternate;
                if (Z !== null) {
                  var te = Z.child;
                  if (te !== null) {
                    Z.child = null;
                    do {
                      var et = te.sibling;
                      ((te.sibling = null), (te = et));
                    } while (te !== null);
                  }
                }
                Q = f;
              }
            }
            if ((f.subtreeFlags & 2064) !== 0 && m !== null)
              ((m.return = f), (Q = m));
            else
              e: for (; Q !== null; ) {
                if (((f = Q), (f.flags & 2048) !== 0))
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mi(9, f, f.return);
                  }
                var b = f.sibling;
                if (b !== null) {
                  ((b.return = f.return), (Q = b));
                  break e;
                }
                Q = f.return;
              }
          }
          var k = n.current;
          for (Q = k; Q !== null; ) {
            m = Q;
            var M = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && M !== null)
              ((M.return = m), (Q = M));
            else
              e: for (m = k; Q !== null; ) {
                if (((S = Q), (S.flags & 2048) !== 0))
                  try {
                    switch (S.tag) {
                      case 0:
                      case 11:
                      case 15:
                        na(9, S);
                    }
                  } catch (ne) {
                    Je(S, S.return, ne);
                  }
                if (S === m) {
                  Q = null;
                  break e;
                }
                var $ = S.sibling;
                if ($ !== null) {
                  (($.return = S.return), (Q = $));
                  break e;
                }
                Q = S.return;
              }
          }
          if (
            ((Me = c),
            nr(),
            gn && typeof gn.onPostCommitFiberRoot == "function")
          )
            try {
              gn.onPostCommitFiberRoot(mo, n);
            } catch {}
          l = !0;
        }
        return l;
      } finally {
        ((Fe = o), (Jt.transition = r));
      }
    }
    return !1;
  }
  function Ph(n, r, o) {
    ((r = Es(o, r)),
      (r = Zp(n, r, 1)),
      (n = sr(n, r, 1)),
      (r = Tt()),
      n !== null && (si(n, 1, r), At(n, r)));
  }
  function Je(n, r, o) {
    if (n.tag === 3) Ph(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Ph(r, n, o);
          break;
        } else if (r.tag === 1) {
          var l = r.stateNode;
          if (
            typeof r.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (or === null || !or.has(l)))
          ) {
            ((n = Es(o, n)),
              (n = eh(r, n, 1)),
              (r = sr(r, n, 1)),
              (n = Tt()),
              r !== null && (si(r, 1, n), At(r, n)));
            break;
          }
        }
        r = r.return;
      }
  }
  function L_(n, r, o) {
    var l = n.pingCache;
    (l !== null && l.delete(r),
      (r = Tt()),
      (n.pingedLanes |= n.suspendedLanes & o),
      ct === n &&
        (gt & o) === o &&
        (it === 4 || (it === 3 && (gt & 130023424) === gt && 500 > Ze() - sc)
          ? Fr(n, 0)
          : (rc |= o)),
      At(n, r));
  }
  function Lh(n, r) {
    r === 0 &&
      ((n.mode & 1) === 0
        ? (r = 1)
        : ((r = yo), (yo <<= 1), (yo & 130023424) === 0 && (yo = 4194304)));
    var o = Tt();
    ((n = Mn(n, r)), n !== null && (si(n, r, o), At(n, o)));
  }
  function j_(n) {
    var r = n.memoizedState,
      o = 0;
    (r !== null && (o = r.retryLane), Lh(n, o));
  }
  function F_(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var l = n.stateNode,
          c = n.memoizedState;
        c !== null && (o = c.retryLane);
        break;
      case 19:
        l = n.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    (l !== null && l.delete(r), Lh(n, o));
  }
  var jh;
  jh = function (n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Rt.current) Ot = !0;
      else {
        if ((n.lanes & o) === 0 && (r.flags & 128) === 0)
          return ((Ot = !1), T_(n, r, o));
        Ot = (n.flags & 131072) !== 0;
      }
    else ((Ot = !1), Ge && (r.flags & 1048576) !== 0 && gp(r, Uo, r.index));
    switch (((r.lanes = 0), r.tag)) {
      case 2:
        var l = r.type;
        (ea(n, r), (n = r.pendingProps));
        var c = ps(r, _t.current);
        (_s(r, o), (c = Pu(null, r, l, n, c, o)));
        var f = Lu();
        return (
          (r.flags |= 1),
          typeof c == "object" &&
          c !== null &&
          typeof c.render == "function" &&
          c.$$typeof === void 0
            ? ((r.tag = 1),
              (r.memoizedState = null),
              (r.updateQueue = null),
              Mt(l) ? ((f = !0), Lo(r)) : (f = !1),
              (r.memoizedState =
                c.state !== null && c.state !== void 0 ? c.state : null),
              Nu(r),
              (c.updater = Qo),
              (r.stateNode = c),
              (c._reactInternals = r),
              Bu(r, l, n, o),
              (r = Vu(null, r, l, !0, f, o)))
            : ((r.tag = 0), Ge && f && vu(r), kt(null, r, c, o), (r = r.child)),
          r
        );
      case 16:
        l = r.elementType;
        e: {
          switch (
            (ea(n, r),
            (n = r.pendingProps),
            (c = l._init),
            (l = c(l._payload)),
            (r.type = l),
            (c = r.tag = z_(l)),
            (n = an(l, n)),
            c)
          ) {
            case 0:
              r = qu(null, r, l, n, o);
              break e;
            case 1:
              r = uh(null, r, l, n, o);
              break e;
            case 11:
              r = sh(null, r, l, n, o);
              break e;
            case 14:
              r = ih(null, r, l, an(l.type, n), o);
              break e;
          }
          throw Error(s(306, l, ""));
        }
        return r;
      case 0:
        return (
          (l = r.type),
          (c = r.pendingProps),
          (c = r.elementType === l ? c : an(l, c)),
          qu(n, r, l, c, o)
        );
      case 1:
        return (
          (l = r.type),
          (c = r.pendingProps),
          (c = r.elementType === l ? c : an(l, c)),
          uh(n, r, l, c, o)
        );
      case 3:
        e: {
          if ((ch(r), n === null)) throw Error(s(387));
          ((l = r.pendingProps),
            (f = r.memoizedState),
            (c = f.element),
            Tp(n, r),
            qo(r, l, null, o));
          var m = r.memoizedState;
          if (((l = m.element), f.isDehydrated))
            if (
              ((f = {
                element: l,
                isDehydrated: !1,
                cache: m.cache,
                pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
                transitions: m.transitions,
              }),
              (r.updateQueue.baseState = f),
              (r.memoizedState = f),
              r.flags & 256)
            ) {
              ((c = Es(Error(s(423)), r)), (r = dh(n, r, l, o, c)));
              break e;
            } else if (l !== c) {
              ((c = Es(Error(s(424)), r)), (r = dh(n, r, l, o, c)));
              break e;
            } else
              for (
                $t = Zn(r.stateNode.containerInfo.firstChild),
                  zt = r,
                  Ge = !0,
                  on = null,
                  o = xp(r, null, l, o),
                  r.child = o;
                o;
              )
                ((o.flags = (o.flags & -3) | 4096), (o = o.sibling));
          else {
            if ((gs(), l === c)) {
              r = Dn(n, r, o);
              break e;
            }
            kt(n, r, l, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return (
          Np(r),
          n === null && Eu(r),
          (l = r.type),
          (c = r.pendingProps),
          (f = n !== null ? n.memoizedProps : null),
          (m = c.children),
          fu(l, c) ? (m = null) : f !== null && fu(l, f) && (r.flags |= 32),
          lh(n, r),
          kt(n, r, m, o),
          r.child
        );
      case 6:
        return (n === null && Eu(r), null);
      case 13:
        return fh(n, r, o);
      case 4:
        return (
          bu(r, r.stateNode.containerInfo),
          (l = r.pendingProps),
          n === null ? (r.child = ys(r, null, l, o)) : kt(n, r, l, o),
          r.child
        );
      case 11:
        return (
          (l = r.type),
          (c = r.pendingProps),
          (c = r.elementType === l ? c : an(l, c)),
          sh(n, r, l, c, o)
        );
      case 7:
        return (kt(n, r, r.pendingProps, o), r.child);
      case 8:
        return (kt(n, r, r.pendingProps.children, o), r.child);
      case 12:
        return (kt(n, r, r.pendingProps.children, o), r.child);
      case 10:
        e: {
          if (
            ((l = r.type._context),
            (c = r.pendingProps),
            (f = r.memoizedProps),
            (m = c.value),
            Be(Bo, l._currentValue),
            (l._currentValue = m),
            f !== null)
          )
            if (sn(f.value, m)) {
              if (f.children === c.children && !Rt.current) {
                r = Dn(n, r, o);
                break e;
              }
            } else
              for (f = r.child, f !== null && (f.return = r); f !== null; ) {
                var S = f.dependencies;
                if (S !== null) {
                  m = f.child;
                  for (var w = S.firstContext; w !== null; ) {
                    if (w.context === l) {
                      if (f.tag === 1) {
                        ((w = On(-1, o & -o)), (w.tag = 2));
                        var O = f.updateQueue;
                        if (O !== null) {
                          O = O.shared;
                          var F = O.pending;
                          (F === null
                            ? (w.next = w)
                            : ((w.next = F.next), (F.next = w)),
                            (O.pending = w));
                        }
                      }
                      ((f.lanes |= o),
                        (w = f.alternate),
                        w !== null && (w.lanes |= o),
                        Iu(f.return, o, r),
                        (S.lanes |= o));
                      break;
                    }
                    w = w.next;
                  }
                } else if (f.tag === 10) m = f.type === r.type ? null : f.child;
                else if (f.tag === 18) {
                  if (((m = f.return), m === null)) throw Error(s(341));
                  ((m.lanes |= o),
                    (S = m.alternate),
                    S !== null && (S.lanes |= o),
                    Iu(m, o, r),
                    (m = f.sibling));
                } else m = f.child;
                if (m !== null) m.return = f;
                else
                  for (m = f; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (((f = m.sibling), f !== null)) {
                      ((f.return = m.return), (m = f));
                      break;
                    }
                    m = m.return;
                  }
                f = m;
              }
          (kt(n, r, c.children, o), (r = r.child));
        }
        return r;
      case 9:
        return (
          (c = r.type),
          (l = r.pendingProps.children),
          _s(r, o),
          (c = Kt(c)),
          (l = l(c)),
          (r.flags |= 1),
          kt(n, r, l, o),
          r.child
        );
      case 14:
        return (
          (l = r.type),
          (c = an(l, r.pendingProps)),
          (c = an(l.type, c)),
          ih(n, r, l, c, o)
        );
      case 15:
        return oh(n, r, r.type, r.pendingProps, o);
      case 17:
        return (
          (l = r.type),
          (c = r.pendingProps),
          (c = r.elementType === l ? c : an(l, c)),
          ea(n, r),
          (r.tag = 1),
          Mt(l) ? ((n = !0), Lo(r)) : (n = !1),
          _s(r, o),
          Jp(r, l, c),
          Bu(r, l, c, o),
          Vu(null, r, l, !0, n, o)
        );
      case 19:
        return hh(n, r, o);
      case 22:
        return ah(n, r, o);
    }
    throw Error(s(156, r.tag));
  };
  function Fh(n, r) {
    return yf(n, r);
  }
  function U_(n, r, o, l) {
    ((this.tag = n),
      (this.key = o),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = r),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Qt(n, r, o, l) {
    return new U_(n, r, o, l);
  }
  function fc(n) {
    return ((n = n.prototype), !(!n || !n.isReactComponent));
  }
  function z_(n) {
    if (typeof n == "function") return fc(n) ? 1 : 0;
    if (n != null) {
      if (((n = n.$$typeof), n === ee)) return 11;
      if (n === Pe) return 14;
    }
    return 2;
  }
  function cr(n, r) {
    var o = n.alternate;
    return (
      o === null
        ? ((o = Qt(n.tag, r, n.key, n.mode)),
          (o.elementType = n.elementType),
          (o.type = n.type),
          (o.stateNode = n.stateNode),
          (o.alternate = n),
          (n.alternate = o))
        : ((o.pendingProps = r),
          (o.type = n.type),
          (o.flags = 0),
          (o.subtreeFlags = 0),
          (o.deletions = null)),
      (o.flags = n.flags & 14680064),
      (o.childLanes = n.childLanes),
      (o.lanes = n.lanes),
      (o.child = n.child),
      (o.memoizedProps = n.memoizedProps),
      (o.memoizedState = n.memoizedState),
      (o.updateQueue = n.updateQueue),
      (r = n.dependencies),
      (o.dependencies =
        r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
      (o.sibling = n.sibling),
      (o.index = n.index),
      (o.ref = n.ref),
      o
    );
  }
  function da(n, r, o, l, c, f) {
    var m = 2;
    if (((l = n), typeof n == "function")) fc(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else
      e: switch (n) {
        case q:
          return zr(o.children, c, f, r);
        case X:
          ((m = 8), (c |= 8));
          break;
        case z:
          return (
            (n = Qt(12, o, r, c | 2)),
            (n.elementType = z),
            (n.lanes = f),
            n
          );
        case ye:
          return (
            (n = Qt(13, o, r, c)),
            (n.elementType = ye),
            (n.lanes = f),
            n
          );
        case Ie:
          return (
            (n = Qt(19, o, r, c)),
            (n.elementType = Ie),
            (n.lanes = f),
            n
          );
        case ge:
          return fa(o, c, f, r);
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case G:
                m = 10;
                break e;
              case se:
                m = 9;
                break e;
              case ee:
                m = 11;
                break e;
              case Pe:
                m = 14;
                break e;
              case re:
                ((m = 16), (l = null));
                break e;
            }
          throw Error(s(130, n == null ? n : typeof n, ""));
      }
    return (
      (r = Qt(m, o, r, c)),
      (r.elementType = n),
      (r.type = l),
      (r.lanes = f),
      r
    );
  }
  function zr(n, r, o, l) {
    return ((n = Qt(7, n, l, r)), (n.lanes = o), n);
  }
  function fa(n, r, o, l) {
    return (
      (n = Qt(22, n, l, r)),
      (n.elementType = ge),
      (n.lanes = o),
      (n.stateNode = { isHidden: !1 }),
      n
    );
  }
  function pc(n, r, o) {
    return ((n = Qt(6, n, null, r)), (n.lanes = o), n);
  }
  function hc(n, r, o) {
    return (
      (r = Qt(4, n.children !== null ? n.children : [], n.key, r)),
      (r.lanes = o),
      (r.stateNode = {
        containerInfo: n.containerInfo,
        pendingChildren: null,
        implementation: n.implementation,
      }),
      r
    );
  }
  function $_(n, r, o, l, c) {
    ((this.tag = r),
      (this.containerInfo = n),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = $l(0)),
      (this.expirationTimes = $l(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = $l(0)),
      (this.identifierPrefix = l),
      (this.onRecoverableError = c),
      (this.mutableSourceEagerHydrationData = null));
  }
  function mc(n, r, o, l, c, f, m, S, w) {
    return (
      (n = new $_(n, r, o, S, w)),
      r === 1 ? ((r = 1), f === !0 && (r |= 8)) : (r = 0),
      (f = Qt(3, null, null, r)),
      (n.current = f),
      (f.stateNode = n),
      (f.memoizedState = {
        element: l,
        isDehydrated: o,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Nu(f),
      n
    );
  }
  function B_(n, r, o) {
    var l =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: A,
      key: l == null ? null : "" + l,
      children: n,
      containerInfo: r,
      implementation: o,
    };
  }
  function Uh(n) {
    if (!n) return tr;
    n = n._reactInternals;
    e: {
      if (Nr(n) !== n || n.tag !== 1) throw Error(s(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Mt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(s(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (Mt(o)) return pp(n, o, r);
    }
    return r;
  }
  function zh(n, r, o, l, c, f, m, S, w) {
    return (
      (n = mc(o, l, !0, n, c, f, m, S, w)),
      (n.context = Uh(null)),
      (o = n.current),
      (l = Tt()),
      (c = lr(o)),
      (f = On(l, c)),
      (f.callback = r ?? null),
      sr(o, f, c),
      (n.current.lanes = c),
      si(n, c, l),
      At(n, l),
      n
    );
  }
  function pa(n, r, o, l) {
    var c = r.current,
      f = Tt(),
      m = lr(c);
    return (
      (o = Uh(o)),
      r.context === null ? (r.context = o) : (r.pendingContext = o),
      (r = On(f, m)),
      (r.payload = { element: n }),
      (l = l === void 0 ? null : l),
      l !== null && (r.callback = l),
      (n = sr(c, r, m)),
      n !== null && (cn(n, c, m, f), Wo(n, c, m)),
      m
    );
  }
  function ha(n) {
    if (((n = n.current), !n.child)) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function $h(n, r) {
    if (((n = n.memoizedState), n !== null && n.dehydrated !== null)) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function gc(n, r) {
    ($h(n, r), (n = n.alternate) && $h(n, r));
  }
  function H_() {
    return null;
  }
  var Bh =
    typeof reportError == "function"
      ? reportError
      : function (n) {
          console.error(n);
        };
  function yc(n) {
    this._internalRoot = n;
  }
  ((ma.prototype.render = yc.prototype.render =
    function (n) {
      var r = this._internalRoot;
      if (r === null) throw Error(s(409));
      pa(n, r, null, null);
    }),
    (ma.prototype.unmount = yc.prototype.unmount =
      function () {
        var n = this._internalRoot;
        if (n !== null) {
          this._internalRoot = null;
          var r = n.containerInfo;
          (jr(function () {
            pa(null, n, null, null);
          }),
            (r[Cn] = null));
        }
      }));
  function ma(n) {
    this._internalRoot = n;
  }
  ma.prototype.unstable_scheduleHydration = function (n) {
    if (n) {
      var r = Tf();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Xn.length && r !== 0 && r < Xn[o].priority; o++);
      (Xn.splice(o, 0, n), o === 0 && Nf(n));
    }
  };
  function vc(n) {
    return !(!n || (n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11));
  }
  function ga(n) {
    return !(
      !n ||
      (n.nodeType !== 1 &&
        n.nodeType !== 9 &&
        n.nodeType !== 11 &&
        (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Hh() {}
  function W_(n, r, o, l, c) {
    if (c) {
      if (typeof l == "function") {
        var f = l;
        l = function () {
          var O = ha(m);
          f.call(O);
        };
      }
      var m = zh(r, l, n, 0, null, !1, !1, "", Hh);
      return (
        (n._reactRootContainer = m),
        (n[Cn] = m.current),
        vi(n.nodeType === 8 ? n.parentNode : n),
        jr(),
        m
      );
    }
    for (; (c = n.lastChild); ) n.removeChild(c);
    if (typeof l == "function") {
      var S = l;
      l = function () {
        var O = ha(w);
        S.call(O);
      };
    }
    var w = mc(n, 0, !1, null, null, !1, !1, "", Hh);
    return (
      (n._reactRootContainer = w),
      (n[Cn] = w.current),
      vi(n.nodeType === 8 ? n.parentNode : n),
      jr(function () {
        pa(r, w, o, l);
      }),
      w
    );
  }
  function ya(n, r, o, l, c) {
    var f = o._reactRootContainer;
    if (f) {
      var m = f;
      if (typeof c == "function") {
        var S = c;
        c = function () {
          var w = ha(m);
          S.call(w);
        };
      }
      pa(r, m, n, c);
    } else m = W_(o, r, n, c, l);
    return ha(m);
  }
  ((xf = function (n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = ri(r.pendingLanes);
          o !== 0 &&
            (Bl(r, o | 1),
            At(r, Ze()),
            (Me & 6) === 0 && ((ks = Ze() + 500), nr()));
        }
        break;
      case 13:
        (jr(function () {
          var l = Mn(n, 1);
          if (l !== null) {
            var c = Tt();
            cn(l, n, 1, c);
          }
        }),
          gc(n, 1));
    }
  }),
    (Hl = function (n) {
      if (n.tag === 13) {
        var r = Mn(n, 134217728);
        if (r !== null) {
          var o = Tt();
          cn(r, n, 134217728, o);
        }
        gc(n, 134217728);
      }
    }),
    (kf = function (n) {
      if (n.tag === 13) {
        var r = lr(n),
          o = Mn(n, r);
        if (o !== null) {
          var l = Tt();
          cn(o, n, r, l);
        }
        gc(n, r);
      }
    }),
    (Tf = function () {
      return Fe;
    }),
    (If = function (n, r) {
      var o = Fe;
      try {
        return ((Fe = n), r());
      } finally {
        Fe = o;
      }
    }),
    (Pl = function (n, r, o) {
      switch (r) {
        case "input":
          if ((Tn(n, o), (r = o.name), o.type === "radio" && r != null)) {
            for (o = n; o.parentNode; ) o = o.parentNode;
            for (
              o = o.querySelectorAll(
                "input[name=" + JSON.stringify("" + r) + '][type="radio"]',
              ),
                r = 0;
              r < o.length;
              r++
            ) {
              var l = o[r];
              if (l !== n && l.form === n.form) {
                var c = Ao(l);
                if (!c) throw Error(s(90));
                (ts(l), Tn(l, c));
              }
            }
          }
          break;
        case "textarea":
          be(n, o);
          break;
        case "select":
          ((r = o.value), r != null && lt(n, !!o.multiple, r, !1));
      }
    }),
    (cf = uc),
    (df = jr));
  var q_ = { usingClientEntryPoint: !1, Events: [Ei, ds, Ao, lf, uf, uc] },
    Pi = {
      findFiberByHostInstance: br,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    V_ = {
      bundleType: Pi.bundleType,
      version: Pi.version,
      rendererPackageName: Pi.rendererPackageName,
      rendererConfig: Pi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: K.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (n) {
        return ((n = mf(n)), n === null ? null : n.stateNode);
      },
      findFiberByHostInstance: Pi.findFiberByHostInstance || H_,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var va = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!va.isDisabled && va.supportsFiber)
      try {
        ((mo = va.inject(V_)), (gn = va));
      } catch {}
  }
  return (
    (Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q_),
    (Pt.createPortal = function (n, r) {
      var o =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!vc(r)) throw Error(s(200));
      return B_(n, r, null, o);
    }),
    (Pt.createRoot = function (n, r) {
      if (!vc(n)) throw Error(s(299));
      var o = !1,
        l = "",
        c = Bh;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (o = !0),
          r.identifierPrefix !== void 0 && (l = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (c = r.onRecoverableError)),
        (r = mc(n, 1, !1, null, null, o, !1, l, c)),
        (n[Cn] = r.current),
        vi(n.nodeType === 8 ? n.parentNode : n),
        new yc(r)
      );
    }),
    (Pt.findDOMNode = function (n) {
      if (n == null) return null;
      if (n.nodeType === 1) return n;
      var r = n._reactInternals;
      if (r === void 0)
        throw typeof n.render == "function"
          ? Error(s(188))
          : ((n = Object.keys(n).join(",")), Error(s(268, n)));
      return ((n = mf(r)), (n = n === null ? null : n.stateNode), n);
    }),
    (Pt.flushSync = function (n) {
      return jr(n);
    }),
    (Pt.hydrate = function (n, r, o) {
      if (!ga(r)) throw Error(s(200));
      return ya(null, n, r, !0, o);
    }),
    (Pt.hydrateRoot = function (n, r, o) {
      if (!vc(n)) throw Error(s(405));
      var l = (o != null && o.hydratedSources) || null,
        c = !1,
        f = "",
        m = Bh;
      if (
        (o != null &&
          (o.unstable_strictMode === !0 && (c = !0),
          o.identifierPrefix !== void 0 && (f = o.identifierPrefix),
          o.onRecoverableError !== void 0 && (m = o.onRecoverableError)),
        (r = zh(r, null, n, 1, o ?? null, c, !1, f, m)),
        (n[Cn] = r.current),
        vi(n),
        l)
      )
        for (n = 0; n < l.length; n++)
          ((o = l[n]),
            (c = o._getVersion),
            (c = c(o._source)),
            r.mutableSourceEagerHydrationData == null
              ? (r.mutableSourceEagerHydrationData = [o, c])
              : r.mutableSourceEagerHydrationData.push(o, c));
      return new ma(r);
    }),
    (Pt.render = function (n, r, o) {
      if (!ga(r)) throw Error(s(200));
      return ya(null, n, r, !1, o);
    }),
    (Pt.unmountComponentAtNode = function (n) {
      if (!ga(n)) throw Error(s(40));
      return n._reactRootContainer
        ? (jr(function () {
            ya(null, null, n, !1, function () {
              ((n._reactRootContainer = null), (n[Cn] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Pt.unstable_batchedUpdates = uc),
    (Pt.unstable_renderSubtreeIntoContainer = function (n, r, o, l) {
      if (!ga(o)) throw Error(s(200));
      if (n == null || n._reactInternals === void 0) throw Error(s(38));
      return ya(n, r, o, !1, l);
    }),
    (Pt.version = "18.3.1-next-f1338f8080-20240426"),
    Pt
  );
}
var Jh;
function rS() {
  if (Jh) return wc.exports;
  Jh = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return (e(), (wc.exports = nS()), wc.exports);
}
var Qh;
function sS() {
  if (Qh) return _a;
  Qh = 1;
  var e = rS();
  return ((_a.createRoot = e.createRoot), (_a.hydrateRoot = e.hydrateRoot), _a);
}
var iS = sS();
const oS = X_(iS),
  ve = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  Wr = "8.55.0",
  Ne = globalThis;
function cl(e, t, s) {
  const i = s || Ne,
    a = (i.__SENTRY__ = i.__SENTRY__ || {}),
    u = (a[Wr] = a[Wr] || {});
  return u[e] || (u[e] = t());
}
const xr = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  aS = "Sentry Logger ",
  Wc = ["debug", "info", "warn", "error", "log", "assert", "trace"],
  Va = {};
function kr(e) {
  if (!("console" in Ne)) return e();
  const t = Ne.console,
    s = {},
    i = Object.keys(Va);
  i.forEach((a) => {
    const u = Va[a];
    ((s[a] = t[a]), (t[a] = u));
  });
  try {
    return e();
  } finally {
    i.forEach((a) => {
      t[a] = s[a];
    });
  }
}
function lS() {
  let e = !1;
  const t = {
    enable: () => {
      e = !0;
    },
    disable: () => {
      e = !1;
    },
    isEnabled: () => e,
  };
  return (
    xr
      ? Wc.forEach((s) => {
          t[s] = (...i) => {
            e &&
              kr(() => {
                Ne.console[s](`${aS}[${s}]:`, ...i);
              });
          };
        })
      : Wc.forEach((s) => {
          t[s] = () => {};
        }),
    t
  );
}
const W = cl("logger", lS),
  Dg = 50,
  Yr = "?",
  Zh = /\(error: (.*)\)/,
  em = /captureMessage|captureException/;
function Ag(...e) {
  const t = e.sort((s, i) => s[0] - i[0]).map((s) => s[1]);
  return (s, i = 0, a = 0) => {
    const u = [],
      d = s.split(`
`);
    for (let p = i; p < d.length; p++) {
      const h = d[p];
      if (h.length > 1024) continue;
      const g = Zh.test(h) ? h.replace(Zh, "$1") : h;
      if (!g.match(/\S*Error: /)) {
        for (const _ of t) {
          const y = _(g);
          if (y) {
            u.push(y);
            break;
          }
        }
        if (u.length >= Dg + a) break;
      }
    }
    return cS(u.slice(a));
  };
}
function uS(e) {
  return Array.isArray(e) ? Ag(...e) : e;
}
function cS(e) {
  if (!e.length) return [];
  const t = Array.from(e);
  return (
    /sentryWrapped/.test(Sa(t).function || "") && t.pop(),
    t.reverse(),
    em.test(Sa(t).function || "") &&
      (t.pop(), em.test(Sa(t).function || "") && t.pop()),
    t
      .slice(0, Dg)
      .map((s) => ({
        ...s,
        filename: s.filename || Sa(t).filename,
        function: s.function || Yr,
      }))
  );
}
function Sa(e) {
  return e[e.length - 1] || {};
}
const Tc = "<anonymous>";
function zn(e) {
  try {
    return !e || typeof e != "function" ? Tc : e.name || Tc;
  } catch {
    return Tc;
  }
}
function tm(e) {
  const t = e.exception;
  if (t) {
    const s = [];
    try {
      return (
        t.values.forEach((i) => {
          i.stacktrace.frames && s.push(...i.stacktrace.frames);
        }),
        s
      );
    } catch {
      return;
    }
  }
}
const Pa = {},
  nm = {};
function Tr(e, t) {
  ((Pa[e] = Pa[e] || []), Pa[e].push(t));
}
function Ir(e, t) {
  if (!nm[e]) {
    nm[e] = !0;
    try {
      t();
    } catch (s) {
      xr && W.error(`Error while instrumenting ${e}`, s);
    }
  }
}
function en(e, t) {
  const s = e && Pa[e];
  if (s)
    for (const i of s)
      try {
        i(t);
      } catch (a) {
        xr &&
          W.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${zn(i)}
Error:`,
            a,
          );
      }
}
let Ic = null;
function Pg(e) {
  const t = "error";
  (Tr(t, e), Ir(t, dS));
}
function dS() {
  ((Ic = Ne.onerror),
    (Ne.onerror = function (e, t, s, i, a) {
      return (
        en("error", { column: i, error: a, line: s, msg: e, url: t }),
        Ic ? Ic.apply(this, arguments) : !1
      );
    }),
    (Ne.onerror.__SENTRY_INSTRUMENTED__ = !0));
}
let Cc = null;
function Lg(e) {
  const t = "unhandledrejection";
  (Tr(t, e), Ir(t, fS));
}
function fS() {
  ((Cc = Ne.onunhandledrejection),
    (Ne.onunhandledrejection = function (e) {
      return (en("unhandledrejection", e), Cc ? Cc.apply(this, arguments) : !0);
    }),
    (Ne.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0));
}
function Xr() {
  return (Td(Ne), Ne);
}
function Td(e) {
  const t = (e.__SENTRY__ = e.__SENTRY__ || {});
  return ((t.version = t.version || Wr), (t[Wr] = t[Wr] || {}));
}
const jg = Object.prototype.toString;
function dl(e) {
  switch (jg.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return !0;
    default:
      return $n(e, Error);
  }
}
function Ws(e, t) {
  return jg.call(e) === `[object ${t}]`;
}
function Fg(e) {
  return Ws(e, "ErrorEvent");
}
function rm(e) {
  return Ws(e, "DOMError");
}
function pS(e) {
  return Ws(e, "DOMException");
}
function Fn(e) {
  return Ws(e, "String");
}
function Id(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "__sentry_template_string__" in e &&
    "__sentry_template_values__" in e
  );
}
function Cd(e) {
  return (
    e === null || Id(e) || (typeof e != "object" && typeof e != "function")
  );
}
function As(e) {
  return Ws(e, "Object");
}
function fl(e) {
  return typeof Event < "u" && $n(e, Event);
}
function hS(e) {
  return typeof Element < "u" && $n(e, Element);
}
function mS(e) {
  return Ws(e, "RegExp");
}
function pl(e) {
  return !!(e && e.then && typeof e.then == "function");
}
function gS(e) {
  return (
    As(e) &&
    "nativeEvent" in e &&
    "preventDefault" in e &&
    "stopPropagation" in e
  );
}
function $n(e, t) {
  try {
    return e instanceof t;
  } catch {
    return !1;
  }
}
function Ug(e) {
  return !!(typeof e == "object" && e !== null && (e.__isVue || e._isVue));
}
const Os = Ne,
  yS = 80;
function Bn(e, t = {}) {
  if (!e) return "<unknown>";
  try {
    let s = e;
    const i = 5,
      a = [];
    let u = 0,
      d = 0;
    const p = " > ",
      h = p.length;
    let g;
    const _ = Array.isArray(t) ? t : t.keyAttrs,
      y = (!Array.isArray(t) && t.maxStringLength) || yS;
    for (
      ;
      s &&
      u++ < i &&
      ((g = vS(s, _)),
      !(g === "html" || (u > 1 && d + a.length * h + g.length >= y)));
    )
      (a.push(g), (d += g.length), (s = s.parentNode));
    return a.reverse().join(p);
  } catch {
    return "<unknown>";
  }
}
function vS(e, t) {
  const s = e,
    i = [];
  if (!s || !s.tagName) return "";
  if (Os.HTMLElement && s instanceof HTMLElement && s.dataset) {
    if (s.dataset.sentryComponent) return s.dataset.sentryComponent;
    if (s.dataset.sentryElement) return s.dataset.sentryElement;
  }
  i.push(s.tagName.toLowerCase());
  const a =
    t && t.length
      ? t.filter((d) => s.getAttribute(d)).map((d) => [d, s.getAttribute(d)])
      : null;
  if (a && a.length)
    a.forEach((d) => {
      i.push(`[${d[0]}="${d[1]}"]`);
    });
  else {
    s.id && i.push(`#${s.id}`);
    const d = s.className;
    if (d && Fn(d)) {
      const p = d.split(/\s+/);
      for (const h of p) i.push(`.${h}`);
    }
  }
  const u = ["aria-label", "type", "name", "title", "alt"];
  for (const d of u) {
    const p = s.getAttribute(d);
    p && i.push(`[${d}="${p}"]`);
  }
  return i.join("");
}
function zg() {
  try {
    return Os.document.location.href;
  } catch {
    return "";
  }
}
function _S(e) {
  return Os.document && Os.document.querySelector
    ? Os.document.querySelector(e)
    : null;
}
function $g(e) {
  if (!Os.HTMLElement) return null;
  let t = e;
  const s = 5;
  for (let i = 0; i < s; i++) {
    if (!t) return null;
    if (t instanceof HTMLElement) {
      if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
      if (t.dataset.sentryElement) return t.dataset.sentryElement;
    }
    t = t.parentNode;
  }
  return null;
}
function Ds(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t
    ? e
    : `${e.slice(0, t)}...`;
}
function sm(e, t) {
  if (!Array.isArray(e)) return "";
  const s = [];
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    try {
      Ug(a) ? s.push("[VueViewModel]") : s.push(String(a));
    } catch {
      s.push("[value cannot be serialized]");
    }
  }
  return s.join(t);
}
function SS(e, t, s = !1) {
  return Fn(e)
    ? mS(t)
      ? t.test(e)
      : Fn(t)
        ? s
          ? e === t
          : e.includes(t)
        : !1
    : !1;
}
function yr(e, t = [], s = !1) {
  return t.some((i) => SS(e, i, s));
}
function jt(e, t, s) {
  if (!(t in e)) return;
  const i = e[t],
    a = s(i);
  typeof a == "function" && Bg(a, i);
  try {
    e[t] = a;
  } catch {
    xr && W.log(`Failed to replace method "${t}" in object`, e);
  }
}
function tn(e, t, s) {
  try {
    Object.defineProperty(e, t, { value: s, writable: !0, configurable: !0 });
  } catch {
    xr && W.log(`Failed to add non-enumerable property "${t}" to object`, e);
  }
}
function Bg(e, t) {
  try {
    const s = t.prototype || {};
    ((e.prototype = t.prototype = s), tn(e, "__sentry_original__", t));
  } catch {}
}
function Nd(e) {
  return e.__sentry_original__;
}
function Hg(e) {
  if (dl(e))
    return { message: e.message, name: e.name, stack: e.stack, ...om(e) };
  if (fl(e)) {
    const t = {
      type: e.type,
      target: im(e.target),
      currentTarget: im(e.currentTarget),
      ...om(e),
    };
    return (
      typeof CustomEvent < "u" && $n(e, CustomEvent) && (t.detail = e.detail),
      t
    );
  } else return e;
}
function im(e) {
  try {
    return hS(e) ? Bn(e) : Object.prototype.toString.call(e);
  } catch {
    return "<unknown>";
  }
}
function om(e) {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const s in e)
      Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    return t;
  } else return {};
}
function ES(e, t = 40) {
  const s = Object.keys(Hg(e));
  s.sort();
  const i = s[0];
  if (!i) return "[object has no keys]";
  if (i.length >= t) return Ds(i, t);
  for (let a = s.length; a > 0; a--) {
    const u = s.slice(0, a).join(", ");
    if (!(u.length > t)) return a === s.length ? u : Ds(u, t);
  }
  return "";
}
function at(e) {
  return qc(e, new Map());
}
function qc(e, t) {
  if (wS(e)) {
    const s = t.get(e);
    if (s !== void 0) return s;
    const i = {};
    t.set(e, i);
    for (const a of Object.getOwnPropertyNames(e))
      typeof e[a] < "u" && (i[a] = qc(e[a], t));
    return i;
  }
  if (Array.isArray(e)) {
    const s = t.get(e);
    if (s !== void 0) return s;
    const i = [];
    return (
      t.set(e, i),
      e.forEach((a) => {
        i.push(qc(a, t));
      }),
      i
    );
  }
  return e;
}
function wS(e) {
  if (!As(e)) return !1;
  try {
    const t = Object.getPrototypeOf(e).constructor.name;
    return !t || t === "Object";
  } catch {
    return !0;
  }
}
const Wg = 1e3;
function to() {
  return Date.now() / Wg;
}
function xS() {
  const { performance: e } = Ne;
  if (!e || !e.now) return to;
  const t = Date.now() - e.now(),
    s = e.timeOrigin == null ? t : e.timeOrigin;
  return () => (s + e.now()) / Wg;
}
const Nt = xS(),
  bt = (() => {
    const { performance: e } = Ne;
    if (!e || !e.now) return;
    const t = 3600 * 1e3,
      s = e.now(),
      i = Date.now(),
      a = e.timeOrigin ? Math.abs(e.timeOrigin + s - i) : t,
      u = a < t,
      d = e.timing && e.timing.navigationStart,
      h = typeof d == "number" ? Math.abs(d + s - i) : t,
      g = h < t;
    return u || g ? (a <= h ? e.timeOrigin : d) : i;
  })();
function Wt() {
  const e = Ne,
    t = e.crypto || e.msCrypto;
  let s = () => Math.random() * 16;
  try {
    if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
    t &&
      t.getRandomValues &&
      (s = () => {
        const i = new Uint8Array(1);
        return (t.getRandomValues(i), i[0]);
      });
  } catch {}
  return ("10000000100040008000" + 1e11).replace(/[018]/g, (i) =>
    (i ^ ((s() & 15) >> (i / 4))).toString(16),
  );
}
function qg(e) {
  return e.exception && e.exception.values ? e.exception.values[0] : void 0;
}
function fr(e) {
  const { message: t, event_id: s } = e;
  if (t) return t;
  const i = qg(e);
  return i
    ? i.type && i.value
      ? `${i.type}: ${i.value}`
      : i.type || i.value || s || "<unknown>"
    : s || "<unknown>";
}
function Vc(e, t, s) {
  const i = (e.exception = e.exception || {}),
    a = (i.values = i.values || []),
    u = (a[0] = a[0] || {});
  (u.value || (u.value = t || ""), u.type || (u.type = "Error"));
}
function Ps(e, t) {
  const s = qg(e);
  if (!s) return;
  const i = { type: "generic", handled: !0 },
    a = s.mechanism;
  if (((s.mechanism = { ...i, ...a, ...t }), t && "data" in t)) {
    const u = { ...(a && a.data), ...t.data };
    s.mechanism.data = u;
  }
}
function am(e) {
  if (kS(e)) return !0;
  try {
    tn(e, "__sentry_captured__", !0);
  } catch {}
  return !1;
}
function kS(e) {
  try {
    return e.__sentry_captured__;
  } catch {}
}
var Ln;
(function (e) {
  e[(e.PENDING = 0)] = "PENDING";
  const s = 1;
  e[(e.RESOLVED = s)] = "RESOLVED";
  const i = 2;
  e[(e.REJECTED = i)] = "REJECTED";
})(Ln || (Ln = {}));
function Hn(e) {
  return new Zt((t) => {
    t(e);
  });
}
function Ga(e) {
  return new Zt((t, s) => {
    s(e);
  });
}
class Zt {
  constructor(t) {
    (Zt.prototype.__init.call(this),
      Zt.prototype.__init2.call(this),
      Zt.prototype.__init3.call(this),
      Zt.prototype.__init4.call(this),
      (this._state = Ln.PENDING),
      (this._handlers = []));
    try {
      t(this._resolve, this._reject);
    } catch (s) {
      this._reject(s);
    }
  }
  then(t, s) {
    return new Zt((i, a) => {
      (this._handlers.push([
        !1,
        (u) => {
          if (!t) i(u);
          else
            try {
              i(t(u));
            } catch (d) {
              a(d);
            }
        },
        (u) => {
          if (!s) a(u);
          else
            try {
              i(s(u));
            } catch (d) {
              a(d);
            }
        },
      ]),
        this._executeHandlers());
    });
  }
  catch(t) {
    return this.then((s) => s, t);
  }
  finally(t) {
    return new Zt((s, i) => {
      let a, u;
      return this.then(
        (d) => {
          ((u = !1), (a = d), t && t());
        },
        (d) => {
          ((u = !0), (a = d), t && t());
        },
      ).then(() => {
        if (u) {
          i(a);
          return;
        }
        s(a);
      });
    });
  }
  __init() {
    this._resolve = (t) => {
      this._setResult(Ln.RESOLVED, t);
    };
  }
  __init2() {
    this._reject = (t) => {
      this._setResult(Ln.REJECTED, t);
    };
  }
  __init3() {
    this._setResult = (t, s) => {
      if (this._state === Ln.PENDING) {
        if (pl(s)) {
          s.then(this._resolve, this._reject);
          return;
        }
        ((this._state = t), (this._value = s), this._executeHandlers());
      }
    };
  }
  __init4() {
    this._executeHandlers = () => {
      if (this._state === Ln.PENDING) return;
      const t = this._handlers.slice();
      ((this._handlers = []),
        t.forEach((s) => {
          s[0] ||
            (this._state === Ln.RESOLVED && s[1](this._value),
            this._state === Ln.REJECTED && s[2](this._value),
            (s[0] = !0));
        }));
    };
  }
}
function TS(e) {
  const t = Nt(),
    s = {
      sid: Wt(),
      init: !0,
      timestamp: t,
      started: t,
      duration: 0,
      status: "ok",
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => CS(s),
    };
  return (e && Ls(s, e), s);
}
function Ls(e, t = {}) {
  if (
    (t.user &&
      (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
      !e.did &&
        !t.did &&
        (e.did = t.user.id || t.user.email || t.user.username)),
    (e.timestamp = t.timestamp || Nt()),
    t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
    t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
    t.sid && (e.sid = t.sid.length === 32 ? t.sid : Wt()),
    t.init !== void 0 && (e.init = t.init),
    !e.did && t.did && (e.did = `${t.did}`),
    typeof t.started == "number" && (e.started = t.started),
    e.ignoreDuration)
  )
    e.duration = void 0;
  else if (typeof t.duration == "number") e.duration = t.duration;
  else {
    const s = e.timestamp - e.started;
    e.duration = s >= 0 ? s : 0;
  }
  (t.release && (e.release = t.release),
    t.environment && (e.environment = t.environment),
    !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
    !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
    typeof t.errors == "number" && (e.errors = t.errors),
    t.status && (e.status = t.status));
}
function IS(e, t) {
  let s = {};
  (e.status === "ok" && (s = { status: "exited" }), Ls(e, s));
}
function CS(e) {
  return at({
    sid: `${e.sid}`,
    init: e.init,
    started: new Date(e.started * 1e3).toISOString(),
    timestamp: new Date(e.timestamp * 1e3).toISOString(),
    status: e.status,
    errors: e.errors,
    did:
      typeof e.did == "number" || typeof e.did == "string"
        ? `${e.did}`
        : void 0,
    duration: e.duration,
    abnormal_mechanism: e.abnormal_mechanism,
    attrs: {
      release: e.release,
      environment: e.environment,
      ip_address: e.ipAddress,
      user_agent: e.userAgent,
    },
  });
}
function _r() {
  return Wt();
}
function Sr() {
  return Wt().substring(16);
}
function hl(e, t, s = 2) {
  if (!t || typeof t != "object" || s <= 0) return t;
  if (e && t && Object.keys(t).length === 0) return e;
  const i = { ...e };
  for (const a in t)
    Object.prototype.hasOwnProperty.call(t, a) &&
      (i[a] = hl(i[a], t[a], s - 1));
  return i;
}
const Gc = "_sentrySpan";
function Gi(e, t) {
  t ? tn(e, Gc, t) : delete e[Gc];
}
function Ya(e) {
  return e[Gc];
}
const NS = 100;
class bd {
  constructor() {
    ((this._notifyingListeners = !1),
      (this._scopeListeners = []),
      (this._eventProcessors = []),
      (this._breadcrumbs = []),
      (this._attachments = []),
      (this._user = {}),
      (this._tags = {}),
      (this._extra = {}),
      (this._contexts = {}),
      (this._sdkProcessingMetadata = {}),
      (this._propagationContext = { traceId: _r(), spanId: Sr() }));
  }
  clone() {
    const t = new bd();
    return (
      (t._breadcrumbs = [...this._breadcrumbs]),
      (t._tags = { ...this._tags }),
      (t._extra = { ...this._extra }),
      (t._contexts = { ...this._contexts }),
      this._contexts.flags &&
        (t._contexts.flags = { values: [...this._contexts.flags.values] }),
      (t._user = this._user),
      (t._level = this._level),
      (t._session = this._session),
      (t._transactionName = this._transactionName),
      (t._fingerprint = this._fingerprint),
      (t._eventProcessors = [...this._eventProcessors]),
      (t._requestSession = this._requestSession),
      (t._attachments = [...this._attachments]),
      (t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
      (t._propagationContext = { ...this._propagationContext }),
      (t._client = this._client),
      (t._lastEventId = this._lastEventId),
      Gi(t, Ya(this)),
      t
    );
  }
  setClient(t) {
    this._client = t;
  }
  setLastEventId(t) {
    this._lastEventId = t;
  }
  getClient() {
    return this._client;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addScopeListener(t) {
    this._scopeListeners.push(t);
  }
  addEventProcessor(t) {
    return (this._eventProcessors.push(t), this);
  }
  setUser(t) {
    return (
      (this._user = t || {
        email: void 0,
        id: void 0,
        ip_address: void 0,
        username: void 0,
      }),
      this._session && Ls(this._session, { user: t }),
      this._notifyScopeListeners(),
      this
    );
  }
  getUser() {
    return this._user;
  }
  getRequestSession() {
    return this._requestSession;
  }
  setRequestSession(t) {
    return ((this._requestSession = t), this);
  }
  setTags(t) {
    return (
      (this._tags = { ...this._tags, ...t }),
      this._notifyScopeListeners(),
      this
    );
  }
  setTag(t, s) {
    return (
      (this._tags = { ...this._tags, [t]: s }),
      this._notifyScopeListeners(),
      this
    );
  }
  setExtras(t) {
    return (
      (this._extra = { ...this._extra, ...t }),
      this._notifyScopeListeners(),
      this
    );
  }
  setExtra(t, s) {
    return (
      (this._extra = { ...this._extra, [t]: s }),
      this._notifyScopeListeners(),
      this
    );
  }
  setFingerprint(t) {
    return ((this._fingerprint = t), this._notifyScopeListeners(), this);
  }
  setLevel(t) {
    return ((this._level = t), this._notifyScopeListeners(), this);
  }
  setTransactionName(t) {
    return ((this._transactionName = t), this._notifyScopeListeners(), this);
  }
  setContext(t, s) {
    return (
      s === null ? delete this._contexts[t] : (this._contexts[t] = s),
      this._notifyScopeListeners(),
      this
    );
  }
  setSession(t) {
    return (
      t ? (this._session = t) : delete this._session,
      this._notifyScopeListeners(),
      this
    );
  }
  getSession() {
    return this._session;
  }
  update(t) {
    if (!t) return this;
    const s = typeof t == "function" ? t(this) : t,
      [i, a] =
        s instanceof Er
          ? [s.getScopeData(), s.getRequestSession()]
          : As(s)
            ? [t, t.requestSession]
            : [],
      {
        tags: u,
        extra: d,
        user: p,
        contexts: h,
        level: g,
        fingerprint: _ = [],
        propagationContext: y,
      } = i || {};
    return (
      (this._tags = { ...this._tags, ...u }),
      (this._extra = { ...this._extra, ...d }),
      (this._contexts = { ...this._contexts, ...h }),
      p && Object.keys(p).length && (this._user = p),
      g && (this._level = g),
      _.length && (this._fingerprint = _),
      y && (this._propagationContext = y),
      a && (this._requestSession = a),
      this
    );
  }
  clear() {
    return (
      (this._breadcrumbs = []),
      (this._tags = {}),
      (this._extra = {}),
      (this._user = {}),
      (this._contexts = {}),
      (this._level = void 0),
      (this._transactionName = void 0),
      (this._fingerprint = void 0),
      (this._requestSession = void 0),
      (this._session = void 0),
      Gi(this, void 0),
      (this._attachments = []),
      this.setPropagationContext({ traceId: _r() }),
      this._notifyScopeListeners(),
      this
    );
  }
  addBreadcrumb(t, s) {
    const i = typeof s == "number" ? s : NS;
    if (i <= 0) return this;
    const a = { timestamp: to(), ...t };
    return (
      this._breadcrumbs.push(a),
      this._breadcrumbs.length > i &&
        ((this._breadcrumbs = this._breadcrumbs.slice(-i)),
        this._client &&
          this._client.recordDroppedEvent("buffer_overflow", "log_item")),
      this._notifyScopeListeners(),
      this
    );
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    return ((this._breadcrumbs = []), this._notifyScopeListeners(), this);
  }
  addAttachment(t) {
    return (this._attachments.push(t), this);
  }
  clearAttachments() {
    return ((this._attachments = []), this);
  }
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: Ya(this),
    };
  }
  setSDKProcessingMetadata(t) {
    return (
      (this._sdkProcessingMetadata = hl(this._sdkProcessingMetadata, t, 2)),
      this
    );
  }
  setPropagationContext(t) {
    return ((this._propagationContext = { spanId: Sr(), ...t }), this);
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(t, s) {
    const i = s && s.event_id ? s.event_id : Wt();
    if (!this._client)
      return (
        W.warn("No client configured on scope - will not capture exception!"),
        i
      );
    const a = new Error("Sentry syntheticException");
    return (
      this._client.captureException(
        t,
        { originalException: t, syntheticException: a, ...s, event_id: i },
        this,
      ),
      i
    );
  }
  captureMessage(t, s, i) {
    const a = i && i.event_id ? i.event_id : Wt();
    if (!this._client)
      return (
        W.warn("No client configured on scope - will not capture message!"),
        a
      );
    const u = new Error(t);
    return (
      this._client.captureMessage(
        t,
        s,
        { originalException: t, syntheticException: u, ...i, event_id: a },
        this,
      ),
      a
    );
  }
  captureEvent(t, s) {
    const i = s && s.event_id ? s.event_id : Wt();
    return this._client
      ? (this._client.captureEvent(t, { ...s, event_id: i }, this), i)
      : (W.warn("No client configured on scope - will not capture event!"), i);
  }
  _notifyScopeListeners() {
    this._notifyingListeners ||
      ((this._notifyingListeners = !0),
      this._scopeListeners.forEach((t) => {
        t(this);
      }),
      (this._notifyingListeners = !1));
  }
}
const Er = bd;
function bS() {
  return cl("defaultCurrentScope", () => new Er());
}
function RS() {
  return cl("defaultIsolationScope", () => new Er());
}
class MS {
  constructor(t, s) {
    let i;
    t ? (i = t) : (i = new Er());
    let a;
    (s ? (a = s) : (a = new Er()),
      (this._stack = [{ scope: i }]),
      (this._isolationScope = a));
  }
  withScope(t) {
    const s = this._pushScope();
    let i;
    try {
      i = t(s);
    } catch (a) {
      throw (this._popScope(), a);
    }
    return pl(i)
      ? i.then(
          (a) => (this._popScope(), a),
          (a) => {
            throw (this._popScope(), a);
          },
        )
      : (this._popScope(), i);
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  _pushScope() {
    const t = this.getScope().clone();
    return (this._stack.push({ client: this.getClient(), scope: t }), t);
  }
  _popScope() {
    return this._stack.length <= 1 ? !1 : !!this._stack.pop();
  }
}
function js() {
  const e = Xr(),
    t = Td(e);
  return (t.stack = t.stack || new MS(bS(), RS()));
}
function OS(e) {
  return js().withScope(e);
}
function DS(e, t) {
  const s = js();
  return s.withScope(() => ((s.getStackTop().scope = e), t(e)));
}
function lm(e) {
  return js().withScope(() => e(js().getIsolationScope()));
}
function AS() {
  return {
    withIsolationScope: lm,
    withScope: OS,
    withSetScope: DS,
    withSetIsolationScope: (e, t) => lm(t),
    getCurrentScope: () => js().getScope(),
    getIsolationScope: () => js().getIsolationScope(),
  };
}
function qs(e) {
  const t = Td(e);
  return t.acs ? t.acs : AS();
}
function ze() {
  const e = Xr();
  return qs(e).getCurrentScope();
}
function nn() {
  const e = Xr();
  return qs(e).getIsolationScope();
}
function PS() {
  return cl("globalScope", () => new Er());
}
function ml(...e) {
  const t = Xr(),
    s = qs(t);
  if (e.length === 2) {
    const [i, a] = e;
    return i ? s.withSetScope(i, a) : s.withScope(a);
  }
  return s.withScope(e[0]);
}
function Te() {
  return ze().getClient();
}
function LS(e) {
  const t = e.getPropagationContext(),
    { traceId: s, spanId: i, parentSpanId: a } = t;
  return at({ trace_id: s, span_id: i, parent_span_id: a });
}
const jS = "_sentryMetrics";
function Yc(e) {
  const t = e[jS];
  if (!t) return;
  const s = {};
  for (const [, [i, a]] of t) (s[i] || (s[i] = [])).push(at(a));
  return s;
}
const wn = "sentry.source",
  Vg = "sentry.sample_rate",
  Kr = "sentry.op",
  pt = "sentry.origin",
  Kc = "sentry.idle_span_finish_reason",
  gl = "sentry.measurement_unit",
  yl = "sentry.measurement_value",
  um = "sentry.custom_span_name",
  FS = "sentry.profile_id",
  Rd = "sentry.exclusive_time",
  US = 0,
  Gg = 1,
  ft = 2;
function zS(e) {
  if (e < 400 && e >= 100) return { code: Gg };
  if (e >= 400 && e < 500)
    switch (e) {
      case 401:
        return { code: ft, message: "unauthenticated" };
      case 403:
        return { code: ft, message: "permission_denied" };
      case 404:
        return { code: ft, message: "not_found" };
      case 409:
        return { code: ft, message: "already_exists" };
      case 413:
        return { code: ft, message: "failed_precondition" };
      case 429:
        return { code: ft, message: "resource_exhausted" };
      case 499:
        return { code: ft, message: "cancelled" };
      default:
        return { code: ft, message: "invalid_argument" };
    }
  if (e >= 500 && e < 600)
    switch (e) {
      case 501:
        return { code: ft, message: "unimplemented" };
      case 503:
        return { code: ft, message: "unavailable" };
      case 504:
        return { code: ft, message: "deadline_exceeded" };
      default:
        return { code: ft, message: "internal_error" };
    }
  return { code: ft, message: "unknown_error" };
}
function Yg(e, t) {
  e.setAttribute("http.response.status_code", t);
  const s = zS(t);
  s.message !== "unknown_error" && e.setStatus(s);
}
const Md = "sentry-",
  $S = /^sentry-/,
  BS = 8192;
function Kg(e) {
  const t = WS(e);
  if (!t) return;
  const s = Object.entries(t).reduce((i, [a, u]) => {
    if (a.match($S)) {
      const d = a.slice(Md.length);
      i[d] = u;
    }
    return i;
  }, {});
  if (Object.keys(s).length > 0) return s;
}
function HS(e) {
  if (!e) return;
  const t = Object.entries(e).reduce(
    (s, [i, a]) => (a && (s[`${Md}${i}`] = a), s),
    {},
  );
  return qS(t);
}
function WS(e) {
  if (!(!e || (!Fn(e) && !Array.isArray(e))))
    return Array.isArray(e)
      ? e.reduce((t, s) => {
          const i = cm(s);
          return (
            Object.entries(i).forEach(([a, u]) => {
              t[a] = u;
            }),
            t
          );
        }, {})
      : cm(e);
}
function cm(e) {
  return e
    .split(",")
    .map((t) => t.split("=").map((s) => decodeURIComponent(s.trim())))
    .reduce((t, [s, i]) => (s && i && (t[s] = i), t), {});
}
function qS(e) {
  if (Object.keys(e).length !== 0)
    return Object.entries(e).reduce((t, [s, i], a) => {
      const u = `${encodeURIComponent(s)}=${encodeURIComponent(i)}`,
        d = a === 0 ? u : `${t},${u}`;
      return d.length > BS
        ? (xr &&
            W.warn(
              `Not adding key: ${s} with val: ${i} to baggage header due to exceeding baggage size limits.`,
            ),
          t)
        : d;
    }, "");
}
const Xg = new RegExp(
  "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$",
);
function VS(e) {
  if (!e) return;
  const t = e.match(Xg);
  if (!t) return;
  let s;
  return (
    t[3] === "1" ? (s = !0) : t[3] === "0" && (s = !1),
    { traceId: t[1], parentSampled: s, parentSpanId: t[2] }
  );
}
function GS(e, t) {
  const s = VS(e),
    i = Kg(t);
  if (!s || !s.traceId) return { traceId: _r(), spanId: Sr() };
  const { traceId: a, parentSpanId: u, parentSampled: d } = s,
    p = Sr();
  return { traceId: a, parentSpanId: u, spanId: p, sampled: d, dsc: i || {} };
}
function Jg(e = _r(), t = Sr(), s) {
  let i = "";
  return (s !== void 0 && (i = s ? "-1" : "-0"), `${e}-${t}${i}`);
}
const Qg = 0,
  Zg = 1;
let dm = !1;
function YS(e) {
  const { spanId: t, traceId: s } = e.spanContext(),
    { data: i, op: a, parent_span_id: u, status: d, origin: p } = Ae(e);
  return at({
    parent_span_id: u,
    span_id: t,
    trace_id: s,
    data: i,
    op: a,
    status: d,
    origin: p,
  });
}
function KS(e) {
  const { spanId: t, traceId: s, isRemote: i } = e.spanContext(),
    a = i ? t : Ae(e).parent_span_id,
    u = i ? Sr() : t;
  return at({ parent_span_id: a, span_id: u, trace_id: s });
}
function XS(e) {
  const { traceId: t, spanId: s } = e.spanContext(),
    i = Jr(e);
  return Jg(t, s, i);
}
function qr(e) {
  return typeof e == "number"
    ? fm(e)
    : Array.isArray(e)
      ? e[0] + e[1] / 1e9
      : e instanceof Date
        ? fm(e.getTime())
        : Nt();
}
function fm(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function Ae(e) {
  if (QS(e)) return e.getSpanJSON();
  try {
    const { spanId: t, traceId: s } = e.spanContext();
    if (JS(e)) {
      const {
        attributes: i,
        startTime: a,
        name: u,
        endTime: d,
        parentSpanId: p,
        status: h,
      } = e;
      return at({
        span_id: t,
        trace_id: s,
        data: i,
        description: u,
        parent_span_id: p,
        start_timestamp: qr(a),
        timestamp: qr(d) || void 0,
        status: ey(h),
        op: i[Kr],
        origin: i[pt],
        _metrics_summary: Yc(e),
      });
    }
    return { span_id: t, trace_id: s };
  } catch {
    return {};
  }
}
function JS(e) {
  const t = e;
  return (
    !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
  );
}
function QS(e) {
  return typeof e.getSpanJSON == "function";
}
function Jr(e) {
  const { traceFlags: t } = e.spanContext();
  return t === Zg;
}
function ey(e) {
  if (!(!e || e.code === US))
    return e.code === Gg ? "ok" : e.message || "unknown_error";
}
const Vr = "_sentryChildSpans",
  Xc = "_sentryRootSpan";
function ty(e, t) {
  const s = e[Xc] || e;
  (tn(t, Xc, s), e[Vr] ? e[Vr].add(t) : tn(e, Vr, new Set([t])));
}
function ZS(e, t) {
  e[Vr] && e[Vr].delete(t);
}
function La(e) {
  const t = new Set();
  function s(i) {
    if (!t.has(i) && Jr(i)) {
      t.add(i);
      const a = i[Vr] ? Array.from(i[Vr]) : [];
      for (const u of a) s(u);
    }
  }
  return (s(e), Array.from(t));
}
function vt(e) {
  return e[Xc] || e;
}
function ht() {
  const e = Xr(),
    t = qs(e);
  return t.getActiveSpan ? t.getActiveSpan() : Ya(ze());
}
function ny() {
  dm ||
    (kr(() => {
      console.warn(
        "[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.",
      );
    }),
    (dm = !0));
}
let pm = !1;
function eE() {
  pm || ((pm = !0), Pg(Jc), Lg(Jc));
}
function Jc() {
  const e = ht(),
    t = e && vt(e);
  if (t) {
    const s = "internal_error";
    (ve && W.log(`[Tracing] Root span: ${s} -> Global error occurred`),
      t.setStatus({ code: ft, message: s }));
  }
}
Jc.tag = "sentry_tracingErrorCallback";
const ry = "_sentryScope",
  sy = "_sentryIsolationScope";
function tE(e, t, s) {
  e && (tn(e, sy, s), tn(e, ry, t));
}
function hm(e) {
  return { scope: e[ry], isolationScope: e[sy] };
}
function wr(e) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
  const t = Te(),
    s = e || (t && t.getOptions());
  return (
    !!s && (s.enableTracing || "tracesSampleRate" in s || "tracesSampler" in s)
  );
}
class Vs {
  constructor(t = {}) {
    ((this._traceId = t.traceId || _r()), (this._spanId = t.spanId || Sr()));
  }
  spanContext() {
    return { spanId: this._spanId, traceId: this._traceId, traceFlags: Qg };
  }
  end(t) {}
  setAttribute(t, s) {
    return this;
  }
  setAttributes(t) {
    return this;
  }
  setStatus(t) {
    return this;
  }
  updateName(t) {
    return this;
  }
  isRecording() {
    return !1;
  }
  addEvent(t, s, i) {
    return this;
  }
  addLink(t) {
    return this;
  }
  addLinks(t) {
    return this;
  }
  recordException(t, s) {}
}
const Od = "production",
  iy = "_frozenDsc";
function mm(e, t) {
  tn(e, iy, t);
}
function oy(e, t) {
  const s = t.getOptions(),
    { publicKey: i } = t.getDsn() || {},
    a = at({
      environment: s.environment || Od,
      release: s.release,
      public_key: i,
      trace_id: e,
    });
  return (t.emit("createDsc", a), a);
}
function ay(e, t) {
  const s = t.getPropagationContext();
  return s.dsc || oy(s.traceId, e);
}
function Qr(e) {
  const t = Te();
  if (!t) return {};
  const s = vt(e),
    i = s[iy];
  if (i) return i;
  const a = s.spanContext().traceState,
    u = a && a.get("sentry.dsc"),
    d = u && Kg(u);
  if (d) return d;
  const p = oy(e.spanContext().traceId, t),
    h = Ae(s),
    g = h.data || {},
    _ = g[Vg];
  _ != null && (p.sample_rate = `${_}`);
  const y = g[wn],
    E = h.description;
  return (
    y !== "url" && E && (p.transaction = E),
    wr() && (p.sampled = String(Jr(s))),
    t.emit("createDsc", p, s),
    p
  );
}
function nE(e) {
  if (!ve) return;
  const {
      description: t = "< unknown name >",
      op: s = "< unknown op >",
      parent_span_id: i,
    } = Ae(e),
    { spanId: a } = e.spanContext(),
    u = Jr(e),
    d = vt(e),
    p = d === e,
    h = `[Tracing] Starting ${u ? "sampled" : "unsampled"} ${p ? "root " : ""}span`,
    g = [`op: ${s}`, `name: ${t}`, `ID: ${a}`];
  if ((i && g.push(`parent ID: ${i}`), !p)) {
    const { op: _, description: y } = Ae(d);
    (g.push(`root ID: ${d.spanContext().spanId}`),
      _ && g.push(`root op: ${_}`),
      y && g.push(`root description: ${y}`));
  }
  W.log(`${h}
  ${g.join(`
  `)}`);
}
function rE(e) {
  if (!ve) return;
  const { description: t = "< unknown name >", op: s = "< unknown op >" } =
      Ae(e),
    { spanId: i } = e.spanContext(),
    u = vt(e) === e,
    d = `[Tracing] Finishing "${s}" ${u ? "root " : ""}span "${t}" with ID ${i}`;
  W.log(d);
}
function Ka(e) {
  if (typeof e == "boolean") return Number(e);
  const t = typeof e == "string" ? parseFloat(e) : e;
  if (typeof t != "number" || isNaN(t) || t < 0 || t > 1) {
    ve &&
      W.warn(
        `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`,
      );
    return;
  }
  return t;
}
function sE(e, t) {
  if (!wr(e)) return [!1];
  const s = nn().getScopeData().sdkProcessingMetadata.normalizedRequest,
    i = { ...t, normalizedRequest: t.normalizedRequest || s };
  let a;
  typeof e.tracesSampler == "function"
    ? (a = e.tracesSampler(i))
    : i.parentSampled !== void 0
      ? (a = i.parentSampled)
      : typeof e.tracesSampleRate < "u"
        ? (a = e.tracesSampleRate)
        : (a = 1);
  const u = Ka(a);
  return u === void 0
    ? (ve &&
        W.warn(
          "[Tracing] Discarding transaction because of invalid sample rate.",
        ),
      [!1])
    : u
      ? Math.random() < u
        ? [!0, u]
        : (ve &&
            W.log(
              `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(a)})`,
            ),
          [!1, u])
      : (ve &&
          W.log(
            `[Tracing] Discarding transaction because ${typeof e.tracesSampler == "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`,
          ),
        [!1, u]);
}
const iE = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function oE(e) {
  return e === "http" || e === "https";
}
function Gs(e, t = !1) {
  const {
    host: s,
    path: i,
    pass: a,
    port: u,
    projectId: d,
    protocol: p,
    publicKey: h,
  } = e;
  return `${p}://${h}${t && a ? `:${a}` : ""}@${s}${u ? `:${u}` : ""}/${i && `${i}/`}${d}`;
}
function aE(e) {
  const t = iE.exec(e);
  if (!t) {
    kr(() => {
      console.error(`Invalid Sentry Dsn: ${e}`);
    });
    return;
  }
  const [s, i, a = "", u = "", d = "", p = ""] = t.slice(1);
  let h = "",
    g = p;
  const _ = g.split("/");
  if ((_.length > 1 && ((h = _.slice(0, -1).join("/")), (g = _.pop())), g)) {
    const y = g.match(/^\d+/);
    y && (g = y[0]);
  }
  return ly({
    host: u,
    pass: a,
    path: h,
    projectId: g,
    port: d,
    protocol: s,
    publicKey: i,
  });
}
function ly(e) {
  return {
    protocol: e.protocol,
    publicKey: e.publicKey || "",
    pass: e.pass || "",
    host: e.host,
    port: e.port || "",
    path: e.path || "",
    projectId: e.projectId,
  };
}
function lE(e) {
  if (!xr) return !0;
  const { port: t, projectId: s, protocol: i } = e;
  return ["protocol", "publicKey", "host", "projectId"].find((d) =>
    e[d] ? !1 : (W.error(`Invalid Sentry Dsn: ${d} missing`), !0),
  )
    ? !1
    : s.match(/^\d+$/)
      ? oE(i)
        ? t && isNaN(parseInt(t, 10))
          ? (W.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1)
          : !0
        : (W.error(`Invalid Sentry Dsn: Invalid protocol ${i}`), !1)
      : (W.error(`Invalid Sentry Dsn: Invalid projectId ${s}`), !1);
}
function uy(e) {
  const t = typeof e == "string" ? aE(e) : ly(e);
  if (!(!t || !lE(t))) return t;
}
function uE() {
  const e = typeof WeakSet == "function",
    t = e ? new WeakSet() : [];
  function s(a) {
    if (e) return t.has(a) ? !0 : (t.add(a), !1);
    for (let u = 0; u < t.length; u++) if (t[u] === a) return !0;
    return (t.push(a), !1);
  }
  function i(a) {
    if (e) t.delete(a);
    else
      for (let u = 0; u < t.length; u++)
        if (t[u] === a) {
          t.splice(u, 1);
          break;
        }
  }
  return [s, i];
}
function fn(e, t = 100, s = 1 / 0) {
  try {
    return Qc("", e, t, s);
  } catch (i) {
    return { ERROR: `**non-serializable** (${i})` };
  }
}
function cy(e, t = 3, s = 100 * 1024) {
  const i = fn(e, t);
  return pE(i) > s ? cy(e, t - 1, s) : i;
}
function Qc(e, t, s = 1 / 0, i = 1 / 0, a = uE()) {
  const [u, d] = a;
  if (
    t == null ||
    ["boolean", "string"].includes(typeof t) ||
    (typeof t == "number" && Number.isFinite(t))
  )
    return t;
  const p = cE(e, t);
  if (!p.startsWith("[object ")) return p;
  if (t.__sentry_skip_normalization__) return t;
  const h =
    typeof t.__sentry_override_normalization_depth__ == "number"
      ? t.__sentry_override_normalization_depth__
      : s;
  if (h === 0) return p.replace("object ", "");
  if (u(t)) return "[Circular ~]";
  const g = t;
  if (g && typeof g.toJSON == "function")
    try {
      const C = g.toJSON();
      return Qc("", C, h - 1, i, a);
    } catch {}
  const _ = Array.isArray(t) ? [] : {};
  let y = 0;
  const E = Hg(t);
  for (const C in E) {
    if (!Object.prototype.hasOwnProperty.call(E, C)) continue;
    if (y >= i) {
      _[C] = "[MaxProperties ~]";
      break;
    }
    const T = E[C];
    ((_[C] = Qc(C, T, h - 1, i, a)), y++);
  }
  return (d(t), _);
}
function cE(e, t) {
  try {
    if (e === "domain" && t && typeof t == "object" && t._events)
      return "[Domain]";
    if (e === "domainEmitter") return "[DomainEmitter]";
    if (typeof global < "u" && t === global) return "[Global]";
    if (typeof window < "u" && t === window) return "[Window]";
    if (typeof document < "u" && t === document) return "[Document]";
    if (Ug(t)) return "[VueViewModel]";
    if (gS(t)) return "[SyntheticEvent]";
    if (typeof t == "number" && !Number.isFinite(t)) return `[${t}]`;
    if (typeof t == "function") return `[Function: ${zn(t)}]`;
    if (typeof t == "symbol") return `[${String(t)}]`;
    if (typeof t == "bigint") return `[BigInt: ${String(t)}]`;
    const s = dE(t);
    return /^HTML(\w*)Element$/.test(s)
      ? `[HTMLElement: ${s}]`
      : `[object ${s}]`;
  } catch (s) {
    return `**non-serializable** (${s})`;
  }
}
function dE(e) {
  const t = Object.getPrototypeOf(e);
  return t ? t.constructor.name : "null prototype";
}
function fE(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function pE(e) {
  return fE(JSON.stringify(e));
}
function Zr(e, t = []) {
  return [e, t];
}
function hE(e, t) {
  const [s, i] = e;
  return [s, [...i, t]];
}
function gm(e, t) {
  const s = e[1];
  for (const i of s) {
    const a = i[0].type;
    if (t(i, a)) return !0;
  }
  return !1;
}
function Zc(e) {
  return Ne.__SENTRY__ && Ne.__SENTRY__.encodePolyfill
    ? Ne.__SENTRY__.encodePolyfill(e)
    : new TextEncoder().encode(e);
}
function mE(e) {
  const [t, s] = e;
  let i = JSON.stringify(t);
  function a(u) {
    typeof i == "string"
      ? (i = typeof u == "string" ? i + u : [Zc(i), u])
      : i.push(typeof u == "string" ? Zc(u) : u);
  }
  for (const u of s) {
    const [d, p] = u;
    if (
      (a(`
${JSON.stringify(d)}
`),
      typeof p == "string" || p instanceof Uint8Array)
    )
      a(p);
    else {
      let h;
      try {
        h = JSON.stringify(p);
      } catch {
        h = JSON.stringify(fn(p));
      }
      a(h);
    }
  }
  return typeof i == "string" ? i : gE(i);
}
function gE(e) {
  const t = e.reduce((a, u) => a + u.length, 0),
    s = new Uint8Array(t);
  let i = 0;
  for (const a of e) (s.set(a, i), (i += a.length));
  return s;
}
function yE(e) {
  return [{ type: "span" }, e];
}
function vE(e) {
  const t = typeof e.data == "string" ? Zc(e.data) : e.data;
  return [
    at({
      type: "attachment",
      length: t.length,
      filename: e.filename,
      content_type: e.contentType,
      attachment_type: e.attachmentType,
    }),
    t,
  ];
}
const _E = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  profile_chunk: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  feedback: "feedback",
  span: "span",
  statsd: "metric_bucket",
  raw_security: "security",
};
function ym(e) {
  return _E[e];
}
function Dd(e) {
  if (!e || !e.sdk) return;
  const { name: t, version: s } = e.sdk;
  return { name: t, version: s };
}
function dy(e, t, s, i) {
  const a =
    e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date().toISOString(),
    ...(t && { sdk: t }),
    ...(!!s && i && { dsn: Gs(i) }),
    ...(a && { trace: at({ ...a }) }),
  };
}
function SE(e, t) {
  return (
    t &&
      ((e.sdk = e.sdk || {}),
      (e.sdk.name = e.sdk.name || t.name),
      (e.sdk.version = e.sdk.version || t.version),
      (e.sdk.integrations = [
        ...(e.sdk.integrations || []),
        ...(t.integrations || []),
      ]),
      (e.sdk.packages = [...(e.sdk.packages || []), ...(t.packages || [])])),
    e
  );
}
function EE(e, t, s, i) {
  const a = Dd(s),
    u = {
      sent_at: new Date().toISOString(),
      ...(a && { sdk: a }),
      ...(!!i && t && { dsn: Gs(t) }),
    },
    d =
      "aggregates" in e
        ? [{ type: "sessions" }, e]
        : [{ type: "session" }, e.toJSON()];
  return Zr(u, [d]);
}
function wE(e, t, s, i) {
  const a = Dd(s),
    u = e.type && e.type !== "replay_event" ? e.type : "event";
  SE(e, s && s.sdk);
  const d = dy(e, a, i, t);
  return (delete e.sdkProcessingMetadata, Zr(d, [[{ type: u }, e]]));
}
function xE(e, t) {
  function s(_) {
    return !!_.trace_id && !!_.public_key;
  }
  const i = Qr(e[0]),
    a = t && t.getDsn(),
    u = t && t.getOptions().tunnel,
    d = {
      sent_at: new Date().toISOString(),
      ...(s(i) && { trace: i }),
      ...(!!u && a && { dsn: Gs(a) }),
    },
    p = t && t.getOptions().beforeSendSpan,
    h = p
      ? (_) => {
          const y = p(Ae(_));
          return (y || ny(), y);
        }
      : (_) => Ae(_),
    g = [];
  for (const _ of e) {
    const y = h(_);
    y && g.push(yE(y));
  }
  return Zr(d, g);
}
function kE(e, t, s, i = ht()) {
  const a = i && vt(i);
  a &&
    (ve &&
      W.log(`[Measurement] Setting measurement on root span: ${e} = ${t} ${s}`),
    a.addEvent(e, { [yl]: t, [gl]: s }));
}
function vm(e) {
  if (!e || e.length === 0) return;
  const t = {};
  return (
    e.forEach((s) => {
      const i = s.attributes || {},
        a = i[gl],
        u = i[yl];
      typeof a == "string" &&
        typeof u == "number" &&
        (t[s.name] = { value: u, unit: a });
    }),
    t
  );
}
const _m = 1e3;
class Ad {
  constructor(t = {}) {
    ((this._traceId = t.traceId || _r()),
      (this._spanId = t.spanId || Sr()),
      (this._startTime = t.startTimestamp || Nt()),
      (this._attributes = {}),
      this.setAttributes({ [pt]: "manual", [Kr]: t.op, ...t.attributes }),
      (this._name = t.name),
      t.parentSpanId && (this._parentSpanId = t.parentSpanId),
      "sampled" in t && (this._sampled = t.sampled),
      t.endTimestamp && (this._endTime = t.endTimestamp),
      (this._events = []),
      (this._isStandaloneSpan = t.isStandalone),
      this._endTime && this._onSpanEnded());
  }
  addLink(t) {
    return this;
  }
  addLinks(t) {
    return this;
  }
  recordException(t, s) {}
  spanContext() {
    const { _spanId: t, _traceId: s, _sampled: i } = this;
    return { spanId: t, traceId: s, traceFlags: i ? Zg : Qg };
  }
  setAttribute(t, s) {
    return (
      s === void 0 ? delete this._attributes[t] : (this._attributes[t] = s),
      this
    );
  }
  setAttributes(t) {
    return (Object.keys(t).forEach((s) => this.setAttribute(s, t[s])), this);
  }
  updateStartTime(t) {
    this._startTime = qr(t);
  }
  setStatus(t) {
    return ((this._status = t), this);
  }
  updateName(t) {
    return ((this._name = t), this.setAttribute(wn, "custom"), this);
  }
  end(t) {
    this._endTime || ((this._endTime = qr(t)), rE(this), this._onSpanEnded());
  }
  getSpanJSON() {
    return at({
      data: this._attributes,
      description: this._name,
      op: this._attributes[Kr],
      parent_span_id: this._parentSpanId,
      span_id: this._spanId,
      start_timestamp: this._startTime,
      status: ey(this._status),
      timestamp: this._endTime,
      trace_id: this._traceId,
      origin: this._attributes[pt],
      _metrics_summary: Yc(this),
      profile_id: this._attributes[FS],
      exclusive_time: this._attributes[Rd],
      measurements: vm(this._events),
      is_segment: (this._isStandaloneSpan && vt(this) === this) || void 0,
      segment_id: this._isStandaloneSpan
        ? vt(this).spanContext().spanId
        : void 0,
    });
  }
  isRecording() {
    return !this._endTime && !!this._sampled;
  }
  addEvent(t, s, i) {
    ve && W.log("[Tracing] Adding an event to span:", t);
    const a = Sm(s) ? s : i || Nt(),
      u = Sm(s) ? {} : s || {},
      d = { name: t, time: qr(a), attributes: u };
    return (this._events.push(d), this);
  }
  isStandaloneSpan() {
    return !!this._isStandaloneSpan;
  }
  _onSpanEnded() {
    const t = Te();
    if (
      (t && t.emit("spanEnd", this),
      !(this._isStandaloneSpan || this === vt(this)))
    )
      return;
    if (this._isStandaloneSpan) {
      this._sampled
        ? IE(xE([this], t))
        : (ve &&
            W.log(
              "[Tracing] Discarding standalone span because its trace was not chosen to be sampled.",
            ),
          t && t.recordDroppedEvent("sample_rate", "span"));
      return;
    }
    const i = this._convertSpanToTransaction();
    i && (hm(this).scope || ze()).captureEvent(i);
  }
  _convertSpanToTransaction() {
    if (!Em(Ae(this))) return;
    this._name ||
      (ve &&
        W.warn(
          "Transaction has no name, falling back to `<unlabeled transaction>`.",
        ),
      (this._name = "<unlabeled transaction>"));
    const { scope: t, isolationScope: s } = hm(this),
      a = (t || ze()).getClient() || Te();
    if (this._sampled !== !0) {
      (ve &&
        W.log(
          "[Tracing] Discarding transaction because its trace was not chosen to be sampled.",
        ),
        a && a.recordDroppedEvent("sample_rate", "transaction"));
      return;
    }
    const d = La(this)
        .filter((y) => y !== this && !TE(y))
        .map((y) => Ae(y))
        .filter(Em),
      p = this._attributes[wn];
    (delete this._attributes[um],
      d.forEach((y) => {
        y.data && delete y.data[um];
      }));
    const h = {
        contexts: { trace: YS(this) },
        spans:
          d.length > _m
            ? d
                .sort((y, E) => y.start_timestamp - E.start_timestamp)
                .slice(0, _m)
            : d,
        start_timestamp: this._startTime,
        timestamp: this._endTime,
        transaction: this._name,
        type: "transaction",
        sdkProcessingMetadata: {
          capturedSpanScope: t,
          capturedSpanIsolationScope: s,
          ...at({ dynamicSamplingContext: Qr(this) }),
        },
        _metrics_summary: Yc(this),
        ...(p && { transaction_info: { source: p } }),
      },
      g = vm(this._events);
    return (
      g &&
        Object.keys(g).length &&
        (ve &&
          W.log(
            "[Measurements] Adding measurements to transaction event",
            JSON.stringify(g, void 0, 2),
          ),
        (h.measurements = g)),
      h
    );
  }
}
function Sm(e) {
  return (e && typeof e == "number") || e instanceof Date || Array.isArray(e);
}
function Em(e) {
  return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id;
}
function TE(e) {
  return e instanceof Ad && e.isStandaloneSpan();
}
function IE(e) {
  const t = Te();
  if (!t) return;
  const s = e[1];
  if (!s || s.length === 0) {
    t.recordDroppedEvent("before_send", "span");
    return;
  }
  t.sendEnvelope(e);
}
const fy = "__SENTRY_SUPPRESS_TRACING__";
function no(e) {
  const t = hy();
  if (t.startInactiveSpan) return t.startInactiveSpan(e);
  const s = NE(e),
    { forceTransaction: i, parentSpan: a } = e;
  return (
    e.scope
      ? (d) => ml(e.scope, d)
      : a !== void 0
        ? (d) => py(a, d)
        : (d) => d()
  )(() => {
    const d = ze(),
      p = RE(d);
    return e.onlyIfParent && !p
      ? new Vs()
      : CE({ parentSpan: p, spanArguments: s, forceTransaction: i, scope: d });
  });
}
function py(e, t) {
  const s = hy();
  return s.withActiveSpan
    ? s.withActiveSpan(e, t)
    : ml((i) => (Gi(i, e || void 0), t(i)));
}
function CE({
  parentSpan: e,
  spanArguments: t,
  forceTransaction: s,
  scope: i,
}) {
  if (!wr()) return new Vs();
  const a = nn();
  let u;
  if (e && !s) ((u = bE(e, i, t)), ty(e, u));
  else if (e) {
    const d = Qr(e),
      { traceId: p, spanId: h } = e.spanContext(),
      g = Jr(e);
    ((u = wm({ traceId: p, parentSpanId: h, ...t }, i, g)), mm(u, d));
  } else {
    const {
      traceId: d,
      dsc: p,
      parentSpanId: h,
      sampled: g,
    } = { ...a.getPropagationContext(), ...i.getPropagationContext() };
    ((u = wm({ traceId: d, parentSpanId: h, ...t }, i, g)), p && mm(u, p));
  }
  return (nE(u), tE(u, i, a), u);
}
function NE(e) {
  const s = { isStandalone: (e.experimental || {}).standalone, ...e };
  if (e.startTime) {
    const i = { ...s };
    return ((i.startTimestamp = qr(e.startTime)), delete i.startTime, i);
  }
  return s;
}
function hy() {
  const e = Xr();
  return qs(e);
}
function wm(e, t, s) {
  const i = Te(),
    a = (i && i.getOptions()) || {},
    { name: u = "", attributes: d } = e,
    [p, h] = t.getScopeData().sdkProcessingMetadata[fy]
      ? [!1]
      : sE(a, {
          name: u,
          parentSampled: s,
          attributes: d,
          transactionContext: { name: u, parentSampled: s },
        }),
    g = new Ad({
      ...e,
      attributes: { [wn]: "custom", ...e.attributes },
      sampled: p,
    });
  return (
    h !== void 0 && g.setAttribute(Vg, h),
    i && i.emit("spanStart", g),
    g
  );
}
function bE(e, t, s) {
  const { spanId: i, traceId: a } = e.spanContext(),
    u = t.getScopeData().sdkProcessingMetadata[fy] ? !1 : Jr(e),
    d = u
      ? new Ad({ ...s, parentSpanId: i, traceId: a, sampled: u })
      : new Vs({ traceId: a });
  ty(e, d);
  const p = Te();
  return (
    p && (p.emit("spanStart", d), s.endTimestamp && p.emit("spanEnd", d)),
    d
  );
}
function RE(e) {
  const t = Ya(e);
  if (!t) return;
  const s = Te();
  return (s ? s.getOptions() : {}).parentSpanIsAlwaysRootSpan ? vt(t) : t;
}
const ja = { idleTimeout: 1e3, finalTimeout: 3e4, childSpanTimeout: 15e3 },
  ME = "heartbeatFailed",
  OE = "idleTimeout",
  DE = "finalTimeout",
  AE = "externalFinish";
function my(e, t = {}) {
  const s = new Map();
  let i = !1,
    a,
    u = AE,
    d = !t.disableAutoFinish;
  const p = [],
    {
      idleTimeout: h = ja.idleTimeout,
      finalTimeout: g = ja.finalTimeout,
      childSpanTimeout: _ = ja.childSpanTimeout,
      beforeSpanEnd: y,
    } = t,
    E = Te();
  if (!E || !wr()) return new Vs();
  const C = ze(),
    T = ht(),
    N = PE(e);
  N.end = new Proxy(N.end, {
    apply(A, q, X) {
      y && y(N);
      const [z, ...G] = X,
        se = z || Nt(),
        ee = qr(se),
        ye = La(N).filter((P) => P !== N);
      if (!ye.length) return (R(ee), Reflect.apply(A, q, [ee, ...G]));
      const Ie = ye.map((P) => Ae(P).timestamp).filter((P) => !!P),
        Pe = Ie.length ? Math.max(...Ie) : void 0,
        re = Ae(N).start_timestamp,
        ge = Math.min(
          re ? re + g / 1e3 : 1 / 0,
          Math.max(re || -1 / 0, Math.min(ee, Pe || 1 / 0)),
        );
      return (R(ge), Reflect.apply(A, q, [ge, ...G]));
    },
  });
  function x() {
    a && (clearTimeout(a), (a = void 0));
  }
  function D(A) {
    (x(),
      (a = setTimeout(() => {
        !i && s.size === 0 && d && ((u = OE), N.end(A));
      }, h)));
  }
  function B(A) {
    a = setTimeout(() => {
      !i && d && ((u = ME), N.end(A));
    }, _);
  }
  function V(A) {
    (x(), s.set(A, !0));
    const q = Nt();
    B(q + _ / 1e3);
  }
  function K(A) {
    if ((s.has(A) && s.delete(A), s.size === 0)) {
      const q = Nt();
      D(q + h / 1e3);
    }
  }
  function R(A) {
    ((i = !0), s.clear(), p.forEach((ee) => ee()), Gi(C, T));
    const q = Ae(N),
      { start_timestamp: X } = q;
    if (!X) return;
    ((q.data || {})[Kc] || N.setAttribute(Kc, u),
      W.log(`[Tracing] Idle span "${q.op}" finished`));
    const G = La(N).filter((ee) => ee !== N);
    let se = 0;
    (G.forEach((ee) => {
      ee.isRecording() &&
        (ee.setStatus({ code: ft, message: "cancelled" }),
        ee.end(A),
        ve &&
          W.log(
            "[Tracing] Cancelling span since span ended early",
            JSON.stringify(ee, void 0, 2),
          ));
      const ye = Ae(ee),
        { timestamp: Ie = 0, start_timestamp: Pe = 0 } = ye,
        re = Pe <= A,
        ge = (g + h) / 1e3,
        P = Ie - Pe <= ge;
      if (ve) {
        const J = JSON.stringify(ee, void 0, 2);
        re
          ? P ||
            W.log(
              "[Tracing] Discarding span since it finished after idle span final timeout",
              J,
            )
          : W.log(
              "[Tracing] Discarding span since it happened after idle span was finished",
              J,
            );
      }
      (!P || !re) && (ZS(N, ee), se++);
    }),
      se > 0 && N.setAttribute("sentry.idle_span_discarded_spans", se));
  }
  return (
    p.push(
      E.on("spanStart", (A) => {
        if (i || A === N || Ae(A).timestamp) return;
        La(N).includes(A) && V(A.spanContext().spanId);
      }),
    ),
    p.push(
      E.on("spanEnd", (A) => {
        i || K(A.spanContext().spanId);
      }),
    ),
    p.push(
      E.on("idleSpanEnableAutoFinish", (A) => {
        A === N && ((d = !0), D(), s.size && B());
      }),
    ),
    t.disableAutoFinish || D(),
    setTimeout(() => {
      i ||
        (N.setStatus({ code: ft, message: "deadline_exceeded" }),
        (u = DE),
        N.end());
    }, g),
    N
  );
}
function PE(e) {
  const t = no(e);
  return (
    Gi(ze(), t),
    ve && W.log("[Tracing] Started span is an idle span"),
    t
  );
}
function ed(e, t, s, i = 0) {
  return new Zt((a, u) => {
    const d = e[i];
    if (t === null || typeof d != "function") a(t);
    else {
      const p = d({ ...t }, s);
      (ve &&
        d.id &&
        p === null &&
        W.log(`Event processor "${d.id}" dropped event`),
        pl(p)
          ? p.then((h) => ed(e, h, s, i + 1).then(a)).then(null, u)
          : ed(e, p, s, i + 1)
              .then(a)
              .then(null, u));
    }
  });
}
let Ea, xm, wa;
function LE(e) {
  const t = Ne._sentryDebugIds;
  if (!t) return {};
  const s = Object.keys(t);
  return (
    (wa && s.length === xm) ||
      ((xm = s.length),
      (wa = s.reduce((i, a) => {
        Ea || (Ea = {});
        const u = Ea[a];
        if (u) i[u[0]] = u[1];
        else {
          const d = e(a);
          for (let p = d.length - 1; p >= 0; p--) {
            const h = d[p],
              g = h && h.filename,
              _ = t[a];
            if (g && _) {
              ((i[g] = _), (Ea[a] = [g, _]));
              break;
            }
          }
        }
        return i;
      }, {}))),
    wa
  );
}
function jE(e, t) {
  const {
    fingerprint: s,
    span: i,
    breadcrumbs: a,
    sdkProcessingMetadata: u,
  } = t;
  (FE(e, t), i && $E(e, i), BE(e, s), UE(e, a), zE(e, u));
}
function km(e, t) {
  const {
    extra: s,
    tags: i,
    user: a,
    contexts: u,
    level: d,
    sdkProcessingMetadata: p,
    breadcrumbs: h,
    fingerprint: g,
    eventProcessors: _,
    attachments: y,
    propagationContext: E,
    transactionName: C,
    span: T,
  } = t;
  (xa(e, "extra", s),
    xa(e, "tags", i),
    xa(e, "user", a),
    xa(e, "contexts", u),
    (e.sdkProcessingMetadata = hl(e.sdkProcessingMetadata, p, 2)),
    d && (e.level = d),
    C && (e.transactionName = C),
    T && (e.span = T),
    h.length && (e.breadcrumbs = [...e.breadcrumbs, ...h]),
    g.length && (e.fingerprint = [...e.fingerprint, ...g]),
    _.length && (e.eventProcessors = [...e.eventProcessors, ..._]),
    y.length && (e.attachments = [...e.attachments, ...y]),
    (e.propagationContext = { ...e.propagationContext, ...E }));
}
function xa(e, t, s) {
  e[t] = hl(e[t], s, 1);
}
function FE(e, t) {
  const {
      extra: s,
      tags: i,
      user: a,
      contexts: u,
      level: d,
      transactionName: p,
    } = t,
    h = at(s);
  h && Object.keys(h).length && (e.extra = { ...h, ...e.extra });
  const g = at(i);
  g && Object.keys(g).length && (e.tags = { ...g, ...e.tags });
  const _ = at(a);
  _ && Object.keys(_).length && (e.user = { ..._, ...e.user });
  const y = at(u);
  (y && Object.keys(y).length && (e.contexts = { ...y, ...e.contexts }),
    d && (e.level = d),
    p && e.type !== "transaction" && (e.transaction = p));
}
function UE(e, t) {
  const s = [...(e.breadcrumbs || []), ...t];
  e.breadcrumbs = s.length ? s : void 0;
}
function zE(e, t) {
  e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
}
function $E(e, t) {
  ((e.contexts = { trace: KS(t), ...e.contexts }),
    (e.sdkProcessingMetadata = {
      dynamicSamplingContext: Qr(t),
      ...e.sdkProcessingMetadata,
    }));
  const s = vt(t),
    i = Ae(s).description;
  i && !e.transaction && e.type === "transaction" && (e.transaction = i);
}
function BE(e, t) {
  ((e.fingerprint = e.fingerprint
    ? Array.isArray(e.fingerprint)
      ? e.fingerprint
      : [e.fingerprint]
    : []),
    t && (e.fingerprint = e.fingerprint.concat(t)),
    e.fingerprint && !e.fingerprint.length && delete e.fingerprint);
}
function gy(e, t, s, i, a, u) {
  const { normalizeDepth: d = 3, normalizeMaxBreadth: p = 1e3 } = e,
    h = {
      ...t,
      event_id: t.event_id || s.event_id || Wt(),
      timestamp: t.timestamp || to(),
    },
    g = s.integrations || e.integrations.map((x) => x.name);
  (HE(h, e),
    VE(h, g),
    a && a.emit("applyFrameMetadata", t),
    t.type === void 0 && WE(h, e.stackParser));
  const _ = YE(i, s.captureContext);
  s.mechanism && Ps(h, s.mechanism);
  const y = a ? a.getEventProcessors() : [],
    E = PS().getScopeData();
  if (u) {
    const x = u.getScopeData();
    km(E, x);
  }
  if (_) {
    const x = _.getScopeData();
    km(E, x);
  }
  const C = [...(s.attachments || []), ...E.attachments];
  (C.length && (s.attachments = C), jE(h, E));
  const T = [...y, ...E.eventProcessors];
  return ed(T, h, s).then(
    (x) => (x && qE(x), typeof d == "number" && d > 0 ? GE(x, d, p) : x),
  );
}
function HE(e, t) {
  const { environment: s, release: i, dist: a, maxValueLength: u = 250 } = t;
  ((e.environment = e.environment || s || Od),
    !e.release && i && (e.release = i),
    !e.dist && a && (e.dist = a),
    e.message && (e.message = Ds(e.message, u)));
  const d = e.exception && e.exception.values && e.exception.values[0];
  d && d.value && (d.value = Ds(d.value, u));
  const p = e.request;
  p && p.url && (p.url = Ds(p.url, u));
}
function WE(e, t) {
  const s = LE(t);
  try {
    e.exception.values.forEach((i) => {
      i.stacktrace.frames.forEach((a) => {
        s && a.filename && (a.debug_id = s[a.filename]);
      });
    });
  } catch {}
}
function qE(e) {
  const t = {};
  try {
    e.exception.values.forEach((i) => {
      i.stacktrace.frames.forEach((a) => {
        a.debug_id &&
          (a.abs_path
            ? (t[a.abs_path] = a.debug_id)
            : a.filename && (t[a.filename] = a.debug_id),
          delete a.debug_id);
      });
    });
  } catch {}
  if (Object.keys(t).length === 0) return;
  ((e.debug_meta = e.debug_meta || {}),
    (e.debug_meta.images = e.debug_meta.images || []));
  const s = e.debug_meta.images;
  Object.entries(t).forEach(([i, a]) => {
    s.push({ type: "sourcemap", code_file: i, debug_id: a });
  });
}
function VE(e, t) {
  t.length > 0 &&
    ((e.sdk = e.sdk || {}),
    (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
}
function GE(e, t, s) {
  if (!e) return null;
  const i = {
    ...e,
    ...(e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map((a) => ({
        ...a,
        ...(a.data && { data: fn(a.data, t, s) }),
      })),
    }),
    ...(e.user && { user: fn(e.user, t, s) }),
    ...(e.contexts && { contexts: fn(e.contexts, t, s) }),
    ...(e.extra && { extra: fn(e.extra, t, s) }),
  };
  return (
    e.contexts &&
      e.contexts.trace &&
      i.contexts &&
      ((i.contexts.trace = e.contexts.trace),
      e.contexts.trace.data &&
        (i.contexts.trace.data = fn(e.contexts.trace.data, t, s))),
    e.spans &&
      (i.spans = e.spans.map((a) => ({
        ...a,
        ...(a.data && { data: fn(a.data, t, s) }),
      }))),
    e.contexts &&
      e.contexts.flags &&
      i.contexts &&
      (i.contexts.flags = fn(e.contexts.flags, 3, s)),
    i
  );
}
function YE(e, t) {
  if (!t) return e;
  const s = e ? e.clone() : new Er();
  return (s.update(t), s);
}
function KE(e) {
  if (e)
    return XE(e) ? { captureContext: e } : QE(e) ? { captureContext: e } : e;
}
function XE(e) {
  return e instanceof Er || typeof e == "function";
}
const JE = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "requestSession",
  "propagationContext",
];
function QE(e) {
  return Object.keys(e).some((t) => JE.includes(t));
}
function vl(e, t) {
  return ze().captureException(e, KE(t));
}
function yy(e, t) {
  return ze().captureEvent(e, t);
}
function vy(e, t) {
  nn().setContext(e, t);
}
function ZE() {
  return nn().lastEventId();
}
function ew() {
  const e = Te();
  return !!e && e.getOptions().enabled !== !1 && !!e.getTransport();
}
function tw(e) {
  nn().addEventProcessor(e);
}
function Tm(e) {
  const t = Te(),
    s = nn(),
    i = ze(),
    { release: a, environment: u = Od } = (t && t.getOptions()) || {},
    { userAgent: d } = Ne.navigator || {},
    p = TS({
      release: a,
      environment: u,
      user: i.getUser() || s.getUser(),
      ...(d && { userAgent: d }),
      ...e,
    }),
    h = s.getSession();
  return (
    h && h.status === "ok" && Ls(h, { status: "exited" }),
    _y(),
    s.setSession(p),
    i.setSession(p),
    p
  );
}
function _y() {
  const e = nn(),
    t = ze(),
    s = t.getSession() || e.getSession();
  (s && IS(s), Sy(), e.setSession(), t.setSession());
}
function Sy() {
  const e = nn(),
    t = ze(),
    s = Te(),
    i = t.getSession() || e.getSession();
  i && s && s.captureSession(i);
}
function Im(e = !1) {
  if (e) {
    _y();
    return;
  }
  Sy();
}
const nw = "7";
function Ey(e) {
  const t = e.protocol ? `${e.protocol}:` : "",
    s = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${s}${e.path ? `/${e.path}` : ""}/api/`;
}
function rw(e) {
  return `${Ey(e)}${e.projectId}/envelope/`;
}
function sw(e, t) {
  const s = { sentry_version: nw };
  return (
    e.publicKey && (s.sentry_key = e.publicKey),
    t && (s.sentry_client = `${t.name}/${t.version}`),
    new URLSearchParams(s).toString()
  );
}
function iw(e, t, s) {
  return t || `${rw(e)}?${sw(e, s)}`;
}
function ow(e, t) {
  const s = uy(e);
  if (!s) return "";
  const i = `${Ey(s)}embed/error-page/`;
  let a = `dsn=${Gs(s)}`;
  for (const u in t)
    if (u !== "dsn" && u !== "onClose")
      if (u === "user") {
        const d = t.user;
        if (!d) continue;
        (d.name && (a += `&name=${encodeURIComponent(d.name)}`),
          d.email && (a += `&email=${encodeURIComponent(d.email)}`));
      } else a += `&${encodeURIComponent(u)}=${encodeURIComponent(t[u])}`;
  return `${i}?${a}`;
}
const Cm = [];
function aw(e) {
  const t = {};
  return (
    e.forEach((s) => {
      const { name: i } = s,
        a = t[i];
      (a && !a.isDefaultInstance && s.isDefaultInstance) || (t[i] = s);
    }),
    Object.values(t)
  );
}
function lw(e) {
  const t = e.defaultIntegrations || [],
    s = e.integrations;
  t.forEach((d) => {
    d.isDefaultInstance = !0;
  });
  let i;
  if (Array.isArray(s)) i = [...t, ...s];
  else if (typeof s == "function") {
    const d = s(t);
    i = Array.isArray(d) ? d : [d];
  } else i = t;
  const a = aw(i),
    u = a.findIndex((d) => d.name === "Debug");
  if (u > -1) {
    const [d] = a.splice(u, 1);
    a.push(d);
  }
  return a;
}
function uw(e, t) {
  const s = {};
  return (
    t.forEach((i) => {
      i && wy(e, i, s);
    }),
    s
  );
}
function Nm(e, t) {
  for (const s of t) s && s.afterAllSetup && s.afterAllSetup(e);
}
function wy(e, t, s) {
  if (s[t.name]) {
    ve &&
      W.log(`Integration skipped because it was already installed: ${t.name}`);
    return;
  }
  if (
    ((s[t.name] = t),
    Cm.indexOf(t.name) === -1 &&
      typeof t.setupOnce == "function" &&
      (t.setupOnce(), Cm.push(t.name)),
    t.setup && typeof t.setup == "function" && t.setup(e),
    typeof t.preprocessEvent == "function")
  ) {
    const i = t.preprocessEvent.bind(t);
    e.on("preprocessEvent", (a, u) => i(a, u, e));
  }
  if (typeof t.processEvent == "function") {
    const i = t.processEvent.bind(t),
      a = Object.assign((u, d) => i(u, d, e), { id: t.name });
    e.addEventProcessor(a);
  }
  ve && W.log(`Integration installed: ${t.name}`);
}
function cw(e, t, s) {
  const i = [
    { type: "client_report" },
    { timestamp: to(), discarded_events: e },
  ];
  return Zr(t ? { dsn: t } : {}, [i]);
}
class pn extends Error {
  constructor(t, s = "warn") {
    (super(t), (this.message = t), (this.logLevel = s));
  }
}
const bm = "Not capturing exception because it's already been captured.";
class dw {
  constructor(t) {
    if (
      ((this._options = t),
      (this._integrations = {}),
      (this._numProcessing = 0),
      (this._outcomes = {}),
      (this._hooks = {}),
      (this._eventProcessors = []),
      t.dsn
        ? (this._dsn = uy(t.dsn))
        : ve && W.warn("No DSN provided, client will not send events."),
      this._dsn)
    ) {
      const a = iw(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : void 0);
      this._transport = t.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...t.transportOptions,
        url: a,
      });
    }
    const i = ["enableTracing", "tracesSampleRate", "tracesSampler"].find(
      (a) => a in t && t[a] == null,
    );
    i &&
      kr(() => {
        console.warn(
          `[Sentry] Deprecation warning: \`${i}\` is set to undefined, which leads to tracing being enabled. In v9, a value of \`undefined\` will result in tracing being disabled.`,
        );
      });
  }
  captureException(t, s, i) {
    const a = Wt();
    if (am(t)) return (ve && W.log(bm), a);
    const u = { event_id: a, ...s };
    return (
      this._process(
        this.eventFromException(t, u).then((d) => this._captureEvent(d, u, i)),
      ),
      u.event_id
    );
  }
  captureMessage(t, s, i, a) {
    const u = { event_id: Wt(), ...i },
      d = Id(t) ? t : String(t),
      p = Cd(t)
        ? this.eventFromMessage(d, s, u)
        : this.eventFromException(t, u);
    return (
      this._process(p.then((h) => this._captureEvent(h, u, a))),
      u.event_id
    );
  }
  captureEvent(t, s, i) {
    const a = Wt();
    if (s && s.originalException && am(s.originalException))
      return (ve && W.log(bm), a);
    const u = { event_id: a, ...s },
      p = (t.sdkProcessingMetadata || {}).capturedSpanScope;
    return (this._process(this._captureEvent(t, u, p || i)), u.event_id);
  }
  captureSession(t) {
    typeof t.release != "string"
      ? ve &&
        W.warn("Discarded session because of missing or non-string release")
      : (this.sendSession(t), Ls(t, { init: !1 }));
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  flush(t) {
    const s = this._transport;
    return s
      ? (this.emit("flush"),
        this._isClientDoneProcessing(t).then((i) =>
          s.flush(t).then((a) => i && a),
        ))
      : Hn(!0);
  }
  close(t) {
    return this.flush(t).then(
      (s) => ((this.getOptions().enabled = !1), this.emit("close"), s),
    );
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(t) {
    this._eventProcessors.push(t);
  }
  init() {
    (this._isEnabled() ||
      this._options.integrations.some(({ name: t }) =>
        t.startsWith("Spotlight"),
      )) &&
      this._setupIntegrations();
  }
  getIntegrationByName(t) {
    return this._integrations[t];
  }
  addIntegration(t) {
    const s = this._integrations[t.name];
    (wy(this, t, this._integrations), s || Nm(this, [t]));
  }
  sendEvent(t, s = {}) {
    this.emit("beforeSendEvent", t, s);
    let i = wE(t, this._dsn, this._options._metadata, this._options.tunnel);
    for (const u of s.attachments || []) i = hE(i, vE(u));
    const a = this.sendEnvelope(i);
    a && a.then((u) => this.emit("afterSendEvent", t, u), null);
  }
  sendSession(t) {
    const s = EE(t, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(s);
  }
  recordDroppedEvent(t, s, i) {
    if (this._options.sendClientReports) {
      const a = typeof i == "number" ? i : 1,
        u = `${t}:${s}`;
      (ve && W.log(`Recording outcome: "${u}"${a > 1 ? ` (${a} times)` : ""}`),
        (this._outcomes[u] = (this._outcomes[u] || 0) + a));
    }
  }
  on(t, s) {
    const i = (this._hooks[t] = this._hooks[t] || []);
    return (
      i.push(s),
      () => {
        const a = i.indexOf(s);
        a > -1 && i.splice(a, 1);
      }
    );
  }
  emit(t, ...s) {
    const i = this._hooks[t];
    i && i.forEach((a) => a(...s));
  }
  sendEnvelope(t) {
    return (
      this.emit("beforeEnvelope", t),
      this._isEnabled() && this._transport
        ? this._transport
            .send(t)
            .then(
              null,
              (s) => (ve && W.error("Error while sending envelope:", s), s),
            )
        : (ve && W.error("Transport disabled"), Hn({}))
    );
  }
  _setupIntegrations() {
    const { integrations: t } = this._options;
    ((this._integrations = uw(this, t)), Nm(this, t));
  }
  _updateSessionFromEvent(t, s) {
    let i = s.level === "fatal",
      a = !1;
    const u = s.exception && s.exception.values;
    if (u) {
      a = !0;
      for (const h of u) {
        const g = h.mechanism;
        if (g && g.handled === !1) {
          i = !0;
          break;
        }
      }
    }
    const d = t.status === "ok";
    ((d && t.errors === 0) || (d && i)) &&
      (Ls(t, {
        ...(i && { status: "crashed" }),
        errors: t.errors || Number(a || i),
      }),
      this.captureSession(t));
  }
  _isClientDoneProcessing(t) {
    return new Zt((s) => {
      let i = 0;
      const a = 1,
        u = setInterval(() => {
          this._numProcessing == 0
            ? (clearInterval(u), s(!0))
            : ((i += a), t && i >= t && (clearInterval(u), s(!1)));
        }, a);
    });
  }
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._transport !== void 0;
  }
  _prepareEvent(t, s, i = ze(), a = nn()) {
    const u = this.getOptions(),
      d = Object.keys(this._integrations);
    return (
      !s.integrations && d.length > 0 && (s.integrations = d),
      this.emit("preprocessEvent", t, s),
      t.type || a.setLastEventId(t.event_id || s.event_id),
      gy(u, t, s, i, this, a).then((p) => {
        if (p === null) return p;
        p.contexts = { trace: LS(i), ...p.contexts };
        const h = ay(this, i);
        return (
          (p.sdkProcessingMetadata = {
            dynamicSamplingContext: h,
            ...p.sdkProcessingMetadata,
          }),
          p
        );
      })
    );
  }
  _captureEvent(t, s = {}, i) {
    return this._processEvent(t, s, i).then(
      (a) => a.event_id,
      (a) => {
        ve &&
          (a instanceof pn && a.logLevel === "log"
            ? W.log(a.message)
            : W.warn(a));
      },
    );
  }
  _processEvent(t, s, i) {
    const a = this.getOptions(),
      { sampleRate: u } = a,
      d = ky(t),
      p = xy(t),
      h = t.type || "error",
      g = `before send for type \`${h}\``,
      _ = typeof u > "u" ? void 0 : Ka(u);
    if (p && typeof _ == "number" && Math.random() > _)
      return (
        this.recordDroppedEvent("sample_rate", "error", t),
        Ga(
          new pn(
            `Discarding event because it's not included in the random sample (sampling rate = ${u})`,
            "log",
          ),
        )
      );
    const y = h === "replay_event" ? "replay" : h,
      C = (t.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
    return this._prepareEvent(t, s, i, C)
      .then((T) => {
        if (T === null)
          throw (
            this.recordDroppedEvent("event_processor", y, t),
            new pn(
              "An event processor returned `null`, will not send event.",
              "log",
            )
          );
        if (s.data && s.data.__sentry__ === !0) return T;
        const x = pw(this, a, T, s);
        return fw(x, g);
      })
      .then((T) => {
        if (T === null) {
          if ((this.recordDroppedEvent("before_send", y, t), d)) {
            const B = 1 + (t.spans || []).length;
            this.recordDroppedEvent("before_send", "span", B);
          }
          throw new pn(`${g} returned \`null\`, will not send event.`, "log");
        }
        const N = i && i.getSession();
        if ((!d && N && this._updateSessionFromEvent(N, T), d)) {
          const D =
              (T.sdkProcessingMetadata &&
                T.sdkProcessingMetadata.spanCountBeforeProcessing) ||
              0,
            B = T.spans ? T.spans.length : 0,
            V = D - B;
          V > 0 && this.recordDroppedEvent("before_send", "span", V);
        }
        const x = T.transaction_info;
        if (d && x && T.transaction !== t.transaction) {
          const D = "custom";
          T.transaction_info = { ...x, source: D };
        }
        return (this.sendEvent(T, s), T);
      })
      .then(null, (T) => {
        throw T instanceof pn
          ? T
          : (this.captureException(T, {
              data: { __sentry__: !0 },
              originalException: T,
            }),
            new pn(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${T}`));
      });
  }
  _process(t) {
    (this._numProcessing++,
      t.then(
        (s) => (this._numProcessing--, s),
        (s) => (this._numProcessing--, s),
      ));
  }
  _clearOutcomes() {
    const t = this._outcomes;
    return (
      (this._outcomes = {}),
      Object.entries(t).map(([s, i]) => {
        const [a, u] = s.split(":");
        return { reason: a, category: u, quantity: i };
      })
    );
  }
  _flushOutcomes() {
    ve && W.log("Flushing outcomes...");
    const t = this._clearOutcomes();
    if (t.length === 0) {
      ve && W.log("No outcomes to send");
      return;
    }
    if (!this._dsn) {
      ve && W.log("No dsn provided, will not send outcomes");
      return;
    }
    ve && W.log("Sending outcomes:", t);
    const s = cw(t, this._options.tunnel && Gs(this._dsn));
    this.sendEnvelope(s);
  }
}
function fw(e, t) {
  const s = `${t} must return \`null\` or a valid event.`;
  if (pl(e))
    return e.then(
      (i) => {
        if (!As(i) && i !== null) throw new pn(s);
        return i;
      },
      (i) => {
        throw new pn(`${t} rejected with ${i}`);
      },
    );
  if (!As(e) && e !== null) throw new pn(s);
  return e;
}
function pw(e, t, s, i) {
  const { beforeSend: a, beforeSendTransaction: u, beforeSendSpan: d } = t;
  if (xy(s) && a) return a(s, i);
  if (ky(s)) {
    if (s.spans && d) {
      const p = [];
      for (const h of s.spans) {
        const g = d(h);
        g ? p.push(g) : (ny(), e.recordDroppedEvent("before_send", "span"));
      }
      s.spans = p;
    }
    if (u) {
      if (s.spans) {
        const p = s.spans.length;
        s.sdkProcessingMetadata = {
          ...s.sdkProcessingMetadata,
          spanCountBeforeProcessing: p,
        };
      }
      return u(s, i);
    }
  }
  return s;
}
function xy(e) {
  return e.type === void 0;
}
function ky(e) {
  return e.type === "transaction";
}
function hw(e, t) {
  (t.debug === !0 &&
    (ve
      ? W.enable()
      : kr(() => {
          console.warn(
            "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.",
          );
        })),
    ze().update(t.initialScope));
  const i = new e(t);
  return (mw(i), i.init(), i);
}
function mw(e) {
  ze().setClient(e);
}
function gw(e) {
  const t = [];
  function s() {
    return e === void 0 || t.length < e;
  }
  function i(d) {
    return t.splice(t.indexOf(d), 1)[0] || Promise.resolve(void 0);
  }
  function a(d) {
    if (!s())
      return Ga(new pn("Not adding Promise because buffer limit was reached."));
    const p = d();
    return (
      t.indexOf(p) === -1 && t.push(p),
      p.then(() => i(p)).then(null, () => i(p).then(null, () => {})),
      p
    );
  }
  function u(d) {
    return new Zt((p, h) => {
      let g = t.length;
      if (!g) return p(!0);
      const _ = setTimeout(() => {
        d && d > 0 && p(!1);
      }, d);
      t.forEach((y) => {
        Hn(y).then(() => {
          --g || (clearTimeout(_), p(!0));
        }, h);
      });
    });
  }
  return { $: t, add: a, drain: u };
}
const yw = 60 * 1e3;
function vw(e, t = Date.now()) {
  const s = parseInt(`${e}`, 10);
  if (!isNaN(s)) return s * 1e3;
  const i = Date.parse(`${e}`);
  return isNaN(i) ? yw : i - t;
}
function _w(e, t) {
  return e[t] || e.all || 0;
}
function Ty(e, t, s = Date.now()) {
  return _w(e, t) > s;
}
function Iy(e, { statusCode: t, headers: s }, i = Date.now()) {
  const a = { ...e },
    u = s && s["x-sentry-rate-limits"],
    d = s && s["retry-after"];
  if (u)
    for (const p of u.trim().split(",")) {
      const [h, g, , , _] = p.split(":", 5),
        y = parseInt(h, 10),
        E = (isNaN(y) ? 60 : y) * 1e3;
      if (!g) a.all = i + E;
      else
        for (const C of g.split(";"))
          C === "metric_bucket"
            ? (!_ || _.split(";").includes("custom")) && (a[C] = i + E)
            : (a[C] = i + E);
    }
  else d ? (a.all = i + vw(d, i)) : t === 429 && (a.all = i + 60 * 1e3);
  return a;
}
const Sw = 64;
function Ew(e, t, s = gw(e.bufferSize || Sw)) {
  let i = {};
  const a = (d) => s.drain(d);
  function u(d) {
    const p = [];
    if (
      (gm(d, (y, E) => {
        const C = ym(E);
        if (Ty(i, C)) {
          const T = Rm(y, E);
          e.recordDroppedEvent("ratelimit_backoff", C, T);
        } else p.push(y);
      }),
      p.length === 0)
    )
      return Hn({});
    const h = Zr(d[0], p),
      g = (y) => {
        gm(h, (E, C) => {
          const T = Rm(E, C);
          e.recordDroppedEvent(y, ym(C), T);
        });
      },
      _ = () =>
        t({ body: mE(h) }).then(
          (y) => (
            y.statusCode !== void 0 &&
              (y.statusCode < 200 || y.statusCode >= 300) &&
              ve &&
              W.warn(
                `Sentry responded with status code ${y.statusCode} to sent event.`,
              ),
            (i = Iy(i, y)),
            y
          ),
          (y) => {
            throw (g("network_error"), y);
          },
        );
    return s.add(_).then(
      (y) => y,
      (y) => {
        if (y instanceof pn)
          return (
            ve && W.error("Skipped sending event because buffer is full."),
            g("queue_overflow"),
            Hn({})
          );
        throw y;
      },
    );
  }
  return { send: u, flush: a };
}
function Rm(e, t) {
  if (!(t !== "event" && t !== "transaction"))
    return Array.isArray(e) ? e[1] : void 0;
}
function ww(e, t) {
  const s = t && t.getDsn(),
    i = t && t.getOptions().tunnel;
  return kw(e, s) || xw(e, i);
}
function xw(e, t) {
  return t ? Mm(e) === Mm(t) : !1;
}
function kw(e, t) {
  return t ? e.includes(t.host) : !1;
}
function Mm(e) {
  return e[e.length - 1] === "/" ? e.slice(0, -1) : e;
}
function Cy(e, t, s = [t], i = "npm") {
  const a = e._metadata || {};
  (a.sdk ||
    (a.sdk = {
      name: `sentry.javascript.${t}`,
      packages: s.map((u) => ({ name: `${i}:@sentry/${u}`, version: Wr })),
      version: Wr,
    }),
    (e._metadata = a));
}
function Ny(e = {}) {
  const t = Te();
  if (!ew() || !t) return {};
  const s = Xr(),
    i = qs(s);
  if (i.getTraceData) return i.getTraceData(e);
  const a = ze(),
    u = e.span || ht(),
    d = u ? XS(u) : Tw(a),
    p = u ? Qr(u) : ay(t, a),
    h = HS(p);
  return Xg.test(d)
    ? { "sentry-trace": d, baggage: h }
    : (W.warn("Invalid sentry-trace data. Cannot generate trace data"), {});
}
function Tw(e) {
  const { traceId: t, sampled: s, spanId: i } = e.getPropagationContext();
  return Jg(t, i, s);
}
const Iw = 100;
function Wn(e, t) {
  const s = Te(),
    i = nn();
  if (!s) return;
  const { beforeBreadcrumb: a = null, maxBreadcrumbs: u = Iw } = s.getOptions();
  if (u <= 0) return;
  const p = { timestamp: to(), ...e },
    h = a ? kr(() => a(p, t)) : p;
  h !== null &&
    (s.emit && s.emit("beforeAddBreadcrumb", h, t), i.addBreadcrumb(h, u));
}
let Om;
const Cw = "FunctionToString",
  Dm = new WeakMap(),
  Nw = () => ({
    name: Cw,
    setupOnce() {
      Om = Function.prototype.toString;
      try {
        Function.prototype.toString = function (...e) {
          const t = Nd(this),
            s = Dm.has(Te()) && t !== void 0 ? t : this;
          return Om.apply(s, e);
        };
      } catch {}
    },
    setup(e) {
      Dm.set(e, !0);
    },
  }),
  bw = Nw,
  Rw = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/,
    /^ResizeObserver loop completed with undelivered notifications.$/,
    /^Cannot redefine property: googletag$/,
    "undefined is not an object (evaluating 'a.L')",
    `can't redefine non-configurable property "solana"`,
    "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
    "Can't find variable: _AutofillCallbackHandler",
    /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/,
  ],
  Mw = "InboundFilters",
  Ow = (e = {}) => ({
    name: Mw,
    processEvent(t, s, i) {
      const a = i.getOptions(),
        u = Aw(e, a);
      return Pw(t, u) ? null : t;
    },
  }),
  Dw = Ow;
function Aw(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : Rw),
    ],
    ignoreTransactions: [
      ...(e.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
    ],
    ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0,
  };
}
function Pw(e, t) {
  return t.ignoreInternal && $w(e)
    ? (ve &&
        W.warn(`Event dropped due to being internal Sentry Error.
Event: ${fr(e)}`),
      !0)
    : Lw(e, t.ignoreErrors)
      ? (ve &&
          W.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${fr(e)}`),
        !0)
      : Hw(e)
        ? (ve &&
            W.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${fr(e)}`),
          !0)
        : jw(e, t.ignoreTransactions)
          ? (ve &&
              W.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${fr(e)}`),
            !0)
          : Fw(e, t.denyUrls)
            ? (ve &&
                W.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${fr(e)}.
Url: ${Xa(e)}`),
              !0)
            : Uw(e, t.allowUrls)
              ? !1
              : (ve &&
                  W.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${fr(e)}.
Url: ${Xa(e)}`),
                !0);
}
function Lw(e, t) {
  return e.type || !t || !t.length ? !1 : zw(e).some((s) => yr(s, t));
}
function jw(e, t) {
  if (e.type !== "transaction" || !t || !t.length) return !1;
  const s = e.transaction;
  return s ? yr(s, t) : !1;
}
function Fw(e, t) {
  if (!t || !t.length) return !1;
  const s = Xa(e);
  return s ? yr(s, t) : !1;
}
function Uw(e, t) {
  if (!t || !t.length) return !0;
  const s = Xa(e);
  return s ? yr(s, t) : !0;
}
function zw(e) {
  const t = [];
  e.message && t.push(e.message);
  let s;
  try {
    s = e.exception.values[e.exception.values.length - 1];
  } catch {}
  return (
    s &&
      s.value &&
      (t.push(s.value), s.type && t.push(`${s.type}: ${s.value}`)),
    t
  );
}
function $w(e) {
  try {
    return e.exception.values[0].type === "SentryError";
  } catch {}
  return !1;
}
function Bw(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const s = e[t];
    if (s && s.filename !== "<anonymous>" && s.filename !== "[native code]")
      return s.filename || null;
  }
  return null;
}
function Xa(e) {
  try {
    let t;
    try {
      t = e.exception.values[0].stacktrace.frames;
    } catch {}
    return t ? Bw(t) : null;
  } catch {
    return (ve && W.error(`Cannot extract url for event ${fr(e)}`), null);
  }
}
function Hw(e) {
  return e.type ||
    !e.exception ||
    !e.exception.values ||
    e.exception.values.length === 0
    ? !1
    : !e.message &&
        !e.exception.values.some(
          (t) => t.stacktrace || (t.type && t.type !== "Error") || t.value,
        );
}
function Ww(e, t, s = 250, i, a, u, d) {
  if (
    !u.exception ||
    !u.exception.values ||
    !d ||
    !$n(d.originalException, Error)
  )
    return;
  const p =
    u.exception.values.length > 0
      ? u.exception.values[u.exception.values.length - 1]
      : void 0;
  p &&
    (u.exception.values = qw(
      td(e, t, a, d.originalException, i, u.exception.values, p, 0),
      s,
    ));
}
function td(e, t, s, i, a, u, d, p) {
  if (u.length >= s + 1) return u;
  let h = [...u];
  if ($n(i[a], Error)) {
    Am(d, p);
    const g = e(t, i[a]),
      _ = h.length;
    (Pm(g, a, _, p), (h = td(e, t, s, i[a], a, [g, ...h], g, _)));
  }
  return (
    Array.isArray(i.errors) &&
      i.errors.forEach((g, _) => {
        if ($n(g, Error)) {
          Am(d, p);
          const y = e(t, g),
            E = h.length;
          (Pm(y, `errors[${_}]`, E, p),
            (h = td(e, t, s, g, a, [y, ...h], y, E)));
        }
      }),
    h
  );
}
function Am(e, t) {
  ((e.mechanism = e.mechanism || { type: "generic", handled: !0 }),
    (e.mechanism = {
      ...e.mechanism,
      ...(e.type === "AggregateError" && { is_exception_group: !0 }),
      exception_id: t,
    }));
}
function Pm(e, t, s, i) {
  ((e.mechanism = e.mechanism || { type: "generic", handled: !0 }),
    (e.mechanism = {
      ...e.mechanism,
      type: "chained",
      source: t,
      exception_id: s,
      parent_id: i,
    }));
}
function qw(e, t) {
  return e.map((s) => (s.value && (s.value = Ds(s.value, t)), s));
}
function Gr(e) {
  if (!e) return {};
  const t = e.match(
    /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,
  );
  if (!t) return {};
  const s = t[6] || "",
    i = t[8] || "";
  return {
    host: t[4],
    path: t[5],
    protocol: t[2],
    search: s,
    hash: i,
    relative: t[5] + s + i,
  };
}
function Vw(e) {
  const t = "console";
  (Tr(t, e), Ir(t, Gw));
}
function Gw() {
  "console" in Ne &&
    Wc.forEach(function (e) {
      e in Ne.console &&
        jt(Ne.console, e, function (t) {
          return (
            (Va[e] = t),
            function (...s) {
              en("console", { args: s, level: e });
              const a = Va[e];
              a && a.apply(Ne.console, s);
            }
          );
        });
    });
}
function by(e) {
  return e === "warn"
    ? "warning"
    : ["fatal", "error", "warning", "log", "info", "debug"].includes(e)
      ? e
      : "log";
}
const Yw = "Dedupe",
  Kw = () => {
    let e;
    return {
      name: Yw,
      processEvent(t) {
        if (t.type) return t;
        try {
          if (Jw(t, e))
            return (
              ve &&
                W.warn(
                  "Event dropped due to being a duplicate of previously captured event.",
                ),
              null
            );
        } catch {}
        return (e = t);
      },
    };
  },
  Xw = Kw;
function Jw(e, t) {
  return t ? !!(Qw(e, t) || Zw(e, t)) : !1;
}
function Qw(e, t) {
  const s = e.message,
    i = t.message;
  return !(
    (!s && !i) ||
    (s && !i) ||
    (!s && i) ||
    s !== i ||
    !My(e, t) ||
    !Ry(e, t)
  );
}
function Zw(e, t) {
  const s = Lm(t),
    i = Lm(e);
  return !(
    !s ||
    !i ||
    s.type !== i.type ||
    s.value !== i.value ||
    !My(e, t) ||
    !Ry(e, t)
  );
}
function Ry(e, t) {
  let s = tm(e),
    i = tm(t);
  if (!s && !i) return !0;
  if ((s && !i) || (!s && i) || ((s = s), (i = i), i.length !== s.length))
    return !1;
  for (let a = 0; a < i.length; a++) {
    const u = i[a],
      d = s[a];
    if (
      u.filename !== d.filename ||
      u.lineno !== d.lineno ||
      u.colno !== d.colno ||
      u.function !== d.function
    )
      return !1;
  }
  return !0;
}
function My(e, t) {
  let s = e.fingerprint,
    i = t.fingerprint;
  if (!s && !i) return !0;
  if ((s && !i) || (!s && i)) return !1;
  ((s = s), (i = i));
  try {
    return s.join("") === i.join("");
  } catch {
    return !1;
  }
}
function Lm(e) {
  return e.exception && e.exception.values && e.exception.values[0];
}
function e1(e, t, s, i, a = "auto.http.browser") {
  if (!e.fetchData) return;
  const u = wr() && t(e.fetchData.url);
  if (e.endTimestamp && u) {
    const E = e.fetchData.__span;
    if (!E) return;
    const C = i[E];
    C && (r1(C, e), delete i[E]);
    return;
  }
  const { method: d, url: p } = e.fetchData,
    h = n1(p),
    g = h ? Gr(h).host : void 0,
    _ = !!ht(),
    y =
      u && _
        ? no({
            name: `${d} ${p}`,
            attributes: {
              url: p,
              type: "fetch",
              "http.method": d,
              "http.url": h,
              "server.address": g,
              [pt]: a,
              [Kr]: "http.client",
            },
          })
        : new Vs();
  if (
    ((e.fetchData.__span = y.spanContext().spanId),
    (i[y.spanContext().spanId] = y),
    s(e.fetchData.url))
  ) {
    const E = e.args[0],
      C = e.args[1] || {},
      T = t1(E, C, wr() && _ ? y : void 0);
    T && ((e.args[1] = C), (C.headers = T));
  }
  return y;
}
function t1(e, t, s) {
  const i = Ny({ span: s }),
    a = i["sentry-trace"],
    u = i.baggage;
  if (!a) return;
  const d = t.headers || (s1(e) ? e.headers : void 0);
  if (d)
    if (i1(d)) {
      const p = new Headers(d);
      if ((p.set("sentry-trace", a), u)) {
        const h = p.get("baggage");
        if (h) {
          const g = ka(h);
          p.set("baggage", g ? `${g},${u}` : u);
        } else p.set("baggage", u);
      }
      return p;
    } else if (Array.isArray(d)) {
      const p = [
        ...d
          .filter((h) => !(Array.isArray(h) && h[0] === "sentry-trace"))
          .map((h) => {
            if (
              Array.isArray(h) &&
              h[0] === "baggage" &&
              typeof h[1] == "string"
            ) {
              const [g, _, ...y] = h;
              return [g, ka(_), ...y];
            } else return h;
          }),
        ["sentry-trace", a],
      ];
      return (u && p.push(["baggage", u]), p);
    } else {
      const p = "baggage" in d ? d.baggage : void 0;
      let h = [];
      return (
        Array.isArray(p)
          ? (h = p
              .map((g) => (typeof g == "string" ? ka(g) : g))
              .filter((g) => g === ""))
          : p && h.push(ka(p)),
        u && h.push(u),
        {
          ...d,
          "sentry-trace": a,
          baggage: h.length > 0 ? h.join(",") : void 0,
        }
      );
    }
  else return { ...i };
}
function n1(e) {
  try {
    return new URL(e).href;
  } catch {
    return;
  }
}
function r1(e, t) {
  if (t.response) {
    Yg(e, t.response.status);
    const s =
      t.response &&
      t.response.headers &&
      t.response.headers.get("content-length");
    if (s) {
      const i = parseInt(s);
      i > 0 && e.setAttribute("http.response_content_length", i);
    }
  } else t.error && e.setStatus({ code: ft, message: "internal_error" });
  e.end();
}
function ka(e) {
  return e
    .split(",")
    .filter((t) => !t.split("=")[0].startsWith(Md))
    .join(",");
}
function s1(e) {
  return typeof Request < "u" && $n(e, Request);
}
function i1(e) {
  return typeof Headers < "u" && $n(e, Headers);
}
function Oy(e) {
  if (e !== void 0)
    return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0;
}
const nd = Ne;
function Dy() {
  if (!("fetch" in nd)) return !1;
  try {
    return (
      new Headers(),
      new Request("http://www.example.com"),
      new Response(),
      !0
    );
  } catch {
    return !1;
  }
}
function rd(e) {
  return (
    e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
  );
}
function o1() {
  if (typeof EdgeRuntime == "string") return !0;
  if (!Dy()) return !1;
  if (rd(nd.fetch)) return !0;
  let e = !1;
  const t = nd.document;
  if (t && typeof t.createElement == "function")
    try {
      const s = t.createElement("iframe");
      ((s.hidden = !0),
        t.head.appendChild(s),
        s.contentWindow &&
          s.contentWindow.fetch &&
          (e = rd(s.contentWindow.fetch)),
        t.head.removeChild(s));
    } catch (s) {
      xr &&
        W.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          s,
        );
    }
  return e;
}
function Ay(e, t) {
  const s = "fetch";
  (Tr(s, e), Ir(s, () => Py(void 0, t)));
}
function a1(e) {
  const t = "fetch-body-resolved";
  (Tr(t, e), Ir(t, () => Py(u1)));
}
function Py(e, t = !1) {
  (t && !o1()) ||
    jt(Ne, "fetch", function (s) {
      return function (...i) {
        const a = new Error(),
          { method: u, url: d } = c1(i),
          p = {
            args: i,
            fetchData: { method: u, url: d },
            startTimestamp: Nt() * 1e3,
            virtualError: a,
          };
        return (
          e || en("fetch", { ...p }),
          s.apply(Ne, i).then(
            async (h) => (
              e
                ? e(h)
                : en("fetch", { ...p, endTimestamp: Nt() * 1e3, response: h }),
              h
            ),
            (h) => {
              throw (
                en("fetch", { ...p, endTimestamp: Nt() * 1e3, error: h }),
                dl(h) &&
                  h.stack === void 0 &&
                  ((h.stack = a.stack), tn(h, "framesToPop", 1)),
                h
              );
            },
          )
        );
      };
    });
}
async function l1(e, t) {
  if (e && e.body) {
    const s = e.body,
      i = s.getReader(),
      a = setTimeout(() => {
        s.cancel().then(null, () => {});
      }, 90 * 1e3);
    let u = !0;
    for (; u; ) {
      let d;
      try {
        d = setTimeout(() => {
          s.cancel().then(null, () => {});
        }, 5e3);
        const { done: p } = await i.read();
        (clearTimeout(d), p && (t(), (u = !1)));
      } catch {
        u = !1;
      } finally {
        clearTimeout(d);
      }
    }
    (clearTimeout(a), i.releaseLock(), s.cancel().then(null, () => {}));
  }
}
function u1(e) {
  let t;
  try {
    t = e.clone();
  } catch {
    return;
  }
  l1(t, () => {
    en("fetch-body-resolved", { endTimestamp: Nt() * 1e3, response: e });
  });
}
function sd(e, t) {
  return !!e && typeof e == "object" && !!e[t];
}
function jm(e) {
  return typeof e == "string"
    ? e
    : e
      ? sd(e, "url")
        ? e.url
        : e.toString
          ? e.toString()
          : ""
      : "";
}
function c1(e) {
  if (e.length === 0) return { method: "GET", url: "" };
  if (e.length === 2) {
    const [s, i] = e;
    return {
      url: jm(s),
      method: sd(i, "method") ? String(i.method).toUpperCase() : "GET",
    };
  }
  const t = e[0];
  return {
    url: jm(t),
    method: sd(t, "method") ? String(t.method).toUpperCase() : "GET",
  };
}
function d1() {
  return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__;
}
function f1() {
  return "npm";
}
function p1() {
  return (
    !d1() &&
    Object.prototype.toString.call(typeof process < "u" ? process : 0) ===
      "[object process]"
  );
}
function Fm() {
  return typeof window < "u" && (!p1() || h1());
}
function h1() {
  const e = Ne.process;
  return !!e && e.type === "renderer";
}
const Ta = Ne;
function m1() {
  const e = Ta.chrome,
    t = e && e.app && e.app.runtime,
    s = "history" in Ta && !!Ta.history.pushState && !!Ta.history.replaceState;
  return !t && s;
}
function g1(e, t) {
  return e ?? t();
}
function Fa(e) {
  let t,
    s = e[0],
    i = 1;
  for (; i < e.length; ) {
    const a = e[i],
      u = e[i + 1];
    if (
      ((i += 2), (a === "optionalAccess" || a === "optionalCall") && s == null)
    )
      return;
    a === "access" || a === "optionalAccess"
      ? ((t = s), (s = u(s)))
      : (a === "call" || a === "optionalCall") &&
        ((s = u((...d) => s.call(t, ...d))), (t = void 0));
  }
  return s;
}
const ue = Ne;
let id = 0;
function Ly() {
  return id > 0;
}
function y1() {
  (id++,
    setTimeout(() => {
      id--;
    }));
}
function Fs(e, t = {}) {
  function s(a) {
    return typeof a == "function";
  }
  if (!s(e)) return e;
  try {
    const a = e.__sentry_wrapped__;
    if (a) return typeof a == "function" ? a : e;
    if (Nd(e)) return e;
  } catch {
    return e;
  }
  const i = function (...a) {
    try {
      const u = a.map((d) => Fs(d, t));
      return e.apply(this, u);
    } catch (u) {
      throw (
        y1(),
        ml((d) => {
          (d.addEventProcessor(
            (p) => (
              t.mechanism && (Vc(p, void 0), Ps(p, t.mechanism)),
              (p.extra = { ...p.extra, arguments: a }),
              p
            ),
          ),
            vl(u));
        }),
        u
      );
    }
  };
  try {
    for (const a in e)
      Object.prototype.hasOwnProperty.call(e, a) && (i[a] = e[a]);
  } catch {}
  (Bg(i, e), tn(e, "__sentry_wrapped__", i));
  try {
    Object.getOwnPropertyDescriptor(i, "name").configurable &&
      Object.defineProperty(i, "name", {
        get() {
          return e.name;
        },
      });
  } catch {}
  return i;
}
const qt = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function Pd(e, t) {
  const s = Ld(e, t),
    i = { type: w1(t), value: x1(t) };
  return (
    s.length && (i.stacktrace = { frames: s }),
    i.type === void 0 &&
      i.value === "" &&
      (i.value = "Unrecoverable error caught"),
    i
  );
}
function v1(e, t, s, i) {
  const a = Te(),
    u = a && a.getOptions().normalizeDepth,
    d = N1(t),
    p = { __serialized__: cy(t, u) };
  if (d) return { exception: { values: [Pd(e, d)] }, extra: p };
  const h = {
    exception: {
      values: [
        {
          type: fl(t) ? t.constructor.name : i ? "UnhandledRejection" : "Error",
          value: I1(t, { isUnhandledRejection: i }),
        },
      ],
    },
    extra: p,
  };
  if (s) {
    const g = Ld(e, s);
    g.length && (h.exception.values[0].stacktrace = { frames: g });
  }
  return h;
}
function Nc(e, t) {
  return { exception: { values: [Pd(e, t)] } };
}
function Ld(e, t) {
  const s = t.stacktrace || t.stack || "",
    i = S1(t),
    a = E1(t);
  try {
    return e(s, i, a);
  } catch {}
  return [];
}
const _1 = /Minified React error #\d+;/i;
function S1(e) {
  return e && _1.test(e.message) ? 1 : 0;
}
function E1(e) {
  return typeof e.framesToPop == "number" ? e.framesToPop : 0;
}
function jy(e) {
  return typeof WebAssembly < "u" && typeof WebAssembly.Exception < "u"
    ? e instanceof WebAssembly.Exception
    : !1;
}
function w1(e) {
  const t = e && e.name;
  return !t && jy(e)
    ? e.message && Array.isArray(e.message) && e.message.length == 2
      ? e.message[0]
      : "WebAssembly.Exception"
    : t;
}
function x1(e) {
  const t = e && e.message;
  return t
    ? t.error && typeof t.error.message == "string"
      ? t.error.message
      : jy(e) && Array.isArray(e.message) && e.message.length == 2
        ? e.message[1]
        : t
    : "No error message";
}
function k1(e, t, s, i) {
  const a = (s && s.syntheticException) || void 0,
    u = jd(e, t, a, i);
  return (
    Ps(u),
    (u.level = "error"),
    s && s.event_id && (u.event_id = s.event_id),
    Hn(u)
  );
}
function T1(e, t, s = "info", i, a) {
  const u = (i && i.syntheticException) || void 0,
    d = od(e, t, u, a);
  return ((d.level = s), i && i.event_id && (d.event_id = i.event_id), Hn(d));
}
function jd(e, t, s, i, a) {
  let u;
  if (Fg(t) && t.error) return Nc(e, t.error);
  if (rm(t) || pS(t)) {
    const d = t;
    if ("stack" in t) u = Nc(e, t);
    else {
      const p = d.name || (rm(d) ? "DOMError" : "DOMException"),
        h = d.message ? `${p}: ${d.message}` : p;
      ((u = od(e, h, s, i)), Vc(u, h));
    }
    return (
      "code" in d && (u.tags = { ...u.tags, "DOMException.code": `${d.code}` }),
      u
    );
  }
  return dl(t)
    ? Nc(e, t)
    : As(t) || fl(t)
      ? ((u = v1(e, t, s, a)), Ps(u, { synthetic: !0 }), u)
      : ((u = od(e, t, s, i)), Vc(u, `${t}`), Ps(u, { synthetic: !0 }), u);
}
function od(e, t, s, i) {
  const a = {};
  if (i && s) {
    const u = Ld(e, s);
    (u.length &&
      (a.exception = { values: [{ value: t, stacktrace: { frames: u } }] }),
      Ps(a, { synthetic: !0 }));
  }
  if (Id(t)) {
    const { __sentry_template_string__: u, __sentry_template_values__: d } = t;
    return ((a.logentry = { message: u, params: d }), a);
  }
  return ((a.message = t), a);
}
function I1(e, { isUnhandledRejection: t }) {
  const s = ES(e),
    i = t ? "promise rejection" : "exception";
  return Fg(e)
    ? `Event \`ErrorEvent\` captured as ${i} with message \`${e.message}\``
    : fl(e)
      ? `Event \`${C1(e)}\` (type=${e.type}) captured as ${i}`
      : `Object captured as ${i} with keys: ${s}`;
}
function C1(e) {
  try {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : void 0;
  } catch {}
}
function N1(e) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t)) {
      const s = e[t];
      if (s instanceof Error) return s;
    }
}
function b1(e, { metadata: t, tunnel: s, dsn: i }) {
  const a = {
      event_id: e.event_id,
      sent_at: new Date().toISOString(),
      ...(t && t.sdk && { sdk: { name: t.sdk.name, version: t.sdk.version } }),
      ...(!!s && !!i && { dsn: Gs(i) }),
    },
    u = R1(e);
  return Zr(a, [u]);
}
function R1(e) {
  return [{ type: "user_report" }, e];
}
class M1 extends dw {
  constructor(t) {
    const s = { parentSpanIsAlwaysRootSpan: !0, ...t },
      i = ue.SENTRY_SDK_SOURCE || f1();
    (Cy(s, "browser", ["browser"], i),
      super(s),
      s.sendClientReports &&
        ue.document &&
        ue.document.addEventListener("visibilitychange", () => {
          ue.document.visibilityState === "hidden" && this._flushOutcomes();
        }));
  }
  eventFromException(t, s) {
    return k1(this._options.stackParser, t, s, this._options.attachStacktrace);
  }
  eventFromMessage(t, s = "info", i) {
    return T1(
      this._options.stackParser,
      t,
      s,
      i,
      this._options.attachStacktrace,
    );
  }
  captureUserFeedback(t) {
    if (!this._isEnabled()) {
      qt && W.warn("SDK not enabled, will not capture user feedback.");
      return;
    }
    const s = b1(t, {
      metadata: this.getSdkMetadata(),
      dsn: this.getDsn(),
      tunnel: this.getOptions().tunnel,
    });
    this.sendEnvelope(s);
  }
  _prepareEvent(t, s, i) {
    return (
      (t.platform = t.platform || "javascript"),
      super._prepareEvent(t, s, i)
    );
  }
}
const Fd = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  O1 = (e, t) => (e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good"),
  Ys = (e, t, s, i) => {
    let a, u;
    return (d) => {
      t.value >= 0 &&
        (d || i) &&
        ((u = t.value - (a || 0)),
        (u || a === void 0) &&
          ((a = t.value), (t.delta = u), (t.rating = O1(t.value, s)), e(t)));
    };
  },
  ae = Ne,
  D1 = () =>
    `v4-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`,
  ro = (e = !0) => {
    const t =
      ae.performance &&
      ae.performance.getEntriesByType &&
      ae.performance.getEntriesByType("navigation")[0];
    if (!e || (t && t.responseStart > 0 && t.responseStart < performance.now()))
      return t;
  },
  so = () => {
    const e = ro();
    return (e && e.activationStart) || 0;
  },
  Ks = (e, t) => {
    const s = ro();
    let i = "navigate";
    return (
      s &&
        ((ae.document && ae.document.prerendering) || so() > 0
          ? (i = "prerender")
          : ae.document && ae.document.wasDiscarded
            ? (i = "restore")
            : s.type && (i = s.type.replace(/_/g, "-"))),
      {
        name: e,
        value: typeof t > "u" ? -1 : t,
        rating: "good",
        delta: 0,
        entries: [],
        id: D1(),
        navigationType: i,
      }
    );
  },
  es = (e, t, s) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        const i = new PerformanceObserver((a) => {
          Promise.resolve().then(() => {
            t(a.getEntries());
          });
        });
        return (
          i.observe(Object.assign({ type: e, buffered: !0 }, s || {})),
          i
        );
      }
    } catch {}
  },
  Xs = (e) => {
    const t = (s) => {
      (s.type === "pagehide" ||
        (ae.document && ae.document.visibilityState === "hidden")) &&
        e(s);
    };
    ae.document &&
      (addEventListener("visibilitychange", t, !0),
      addEventListener("pagehide", t, !0));
  },
  _l = (e) => {
    let t = !1;
    return () => {
      t || (e(), (t = !0));
    };
  };
let Fi = -1;
const A1 = () =>
    ae.document.visibilityState === "hidden" && !ae.document.prerendering
      ? 0
      : 1 / 0,
  Ja = (e) => {
    ae.document.visibilityState === "hidden" &&
      Fi > -1 &&
      ((Fi = e.type === "visibilitychange" ? e.timeStamp : 0), L1());
  },
  P1 = () => {
    (addEventListener("visibilitychange", Ja, !0),
      addEventListener("prerenderingchange", Ja, !0));
  },
  L1 = () => {
    (removeEventListener("visibilitychange", Ja, !0),
      removeEventListener("prerenderingchange", Ja, !0));
  },
  Sl = () => (
    ae.document && Fi < 0 && ((Fi = A1()), P1()),
    {
      get firstHiddenTime() {
        return Fi;
      },
    }
  ),
  io = (e) => {
    ae.document && ae.document.prerendering
      ? addEventListener("prerenderingchange", () => e(), !0)
      : e();
  },
  j1 = [1800, 3e3],
  F1 = (e, t = {}) => {
    io(() => {
      const s = Sl(),
        i = Ks("FCP");
      let a;
      const d = es("paint", (p) => {
        p.forEach((h) => {
          h.name === "first-contentful-paint" &&
            (d.disconnect(),
            h.startTime < s.firstHiddenTime &&
              ((i.value = Math.max(h.startTime - so(), 0)),
              i.entries.push(h),
              a(!0)));
        });
      });
      d && (a = Ys(e, i, j1, t.reportAllChanges));
    });
  },
  U1 = [0.1, 0.25],
  z1 = (e, t = {}) => {
    F1(
      _l(() => {
        const s = Ks("CLS", 0);
        let i,
          a = 0,
          u = [];
        const d = (h) => {
            (h.forEach((g) => {
              if (!g.hadRecentInput) {
                const _ = u[0],
                  y = u[u.length - 1];
                a &&
                _ &&
                y &&
                g.startTime - y.startTime < 1e3 &&
                g.startTime - _.startTime < 5e3
                  ? ((a += g.value), u.push(g))
                  : ((a = g.value), (u = [g]));
              }
            }),
              a > s.value && ((s.value = a), (s.entries = u), i()));
          },
          p = es("layout-shift", d);
        p &&
          ((i = Ys(e, s, U1, t.reportAllChanges)),
          Xs(() => {
            (d(p.takeRecords()), i(!0));
          }),
          setTimeout(i, 0));
      }),
    );
  },
  $1 = [100, 300],
  B1 = (e, t = {}) => {
    io(() => {
      const s = Sl(),
        i = Ks("FID");
      let a;
      const u = (h) => {
          h.startTime < s.firstHiddenTime &&
            ((i.value = h.processingStart - h.startTime),
            i.entries.push(h),
            a(!0));
        },
        d = (h) => {
          h.forEach(u);
        },
        p = es("first-input", d);
      ((a = Ys(e, i, $1, t.reportAllChanges)),
        p &&
          Xs(
            _l(() => {
              (d(p.takeRecords()), p.disconnect());
            }),
          ));
    });
  };
let Fy = 0,
  bc = 1 / 0,
  Ia = 0;
const H1 = (e) => {
  e.forEach((t) => {
    t.interactionId &&
      ((bc = Math.min(bc, t.interactionId)),
      (Ia = Math.max(Ia, t.interactionId)),
      (Fy = Ia ? (Ia - bc) / 7 + 1 : 0));
  });
};
let ad;
const W1 = () => (ad ? Fy : performance.interactionCount || 0),
  q1 = () => {
    "interactionCount" in performance ||
      ad ||
      (ad = es("event", H1, {
        type: "event",
        buffered: !0,
        durationThreshold: 0,
      }));
  },
  jn = [],
  Rc = new Map(),
  V1 = 40;
let G1 = 0;
const Y1 = () => W1() - G1,
  K1 = () => {
    const e = Math.min(jn.length - 1, Math.floor(Y1() / 50));
    return jn[e];
  },
  Mc = 10,
  X1 = [],
  J1 = (e) => {
    if (
      (X1.forEach((i) => i(e)),
      !(e.interactionId || e.entryType === "first-input"))
    )
      return;
    const t = jn[jn.length - 1],
      s = Rc.get(e.interactionId);
    if (s || jn.length < Mc || (t && e.duration > t.latency)) {
      if (s)
        e.duration > s.latency
          ? ((s.entries = [e]), (s.latency = e.duration))
          : e.duration === s.latency &&
            e.startTime === (s.entries[0] && s.entries[0].startTime) &&
            s.entries.push(e);
      else {
        const i = { id: e.interactionId, latency: e.duration, entries: [e] };
        (Rc.set(i.id, i), jn.push(i));
      }
      (jn.sort((i, a) => a.latency - i.latency),
        jn.length > Mc && jn.splice(Mc).forEach((i) => Rc.delete(i.id)));
    }
  },
  Uy = (e) => {
    const t = ae.requestIdleCallback || ae.setTimeout;
    let s = -1;
    return (
      (e = _l(e)),
      ae.document && ae.document.visibilityState === "hidden"
        ? e()
        : ((s = t(e)), Xs(e)),
      s
    );
  },
  Q1 = [200, 500],
  Z1 = (e, t = {}) => {
    "PerformanceEventTiming" in ae &&
      "interactionId" in PerformanceEventTiming.prototype &&
      io(() => {
        q1();
        const s = Ks("INP");
        let i;
        const a = (d) => {
            Uy(() => {
              d.forEach(J1);
              const p = K1();
              p &&
                p.latency !== s.value &&
                ((s.value = p.latency), (s.entries = p.entries), i());
            });
          },
          u = es("event", a, {
            durationThreshold:
              t.durationThreshold != null ? t.durationThreshold : V1,
          });
        ((i = Ys(e, s, Q1, t.reportAllChanges)),
          u &&
            (u.observe({ type: "first-input", buffered: !0 }),
            Xs(() => {
              (a(u.takeRecords()), i(!0));
            })));
      });
  },
  ex = [2500, 4e3],
  Um = {},
  tx = (e, t = {}) => {
    io(() => {
      const s = Sl(),
        i = Ks("LCP");
      let a;
      const u = (p) => {
          (t.reportAllChanges || (p = p.slice(-1)),
            p.forEach((h) => {
              h.startTime < s.firstHiddenTime &&
                ((i.value = Math.max(h.startTime - so(), 0)),
                (i.entries = [h]),
                a());
            }));
        },
        d = es("largest-contentful-paint", u);
      if (d) {
        a = Ys(e, i, ex, t.reportAllChanges);
        const p = _l(() => {
          Um[i.id] ||
            (u(d.takeRecords()), d.disconnect(), (Um[i.id] = !0), a(!0));
        });
        (["keydown", "click"].forEach((h) => {
          ae.document &&
            addEventListener(h, () => Uy(p), { once: !0, capture: !0 });
        }),
          Xs(p));
      }
    });
  },
  nx = [800, 1800],
  ld = (e) => {
    ae.document && ae.document.prerendering
      ? io(() => ld(e))
      : ae.document && ae.document.readyState !== "complete"
        ? addEventListener("load", () => ld(e), !0)
        : setTimeout(e, 0);
  },
  rx = (e, t = {}) => {
    const s = Ks("TTFB"),
      i = Ys(e, s, nx, t.reportAllChanges);
    ld(() => {
      const a = ro();
      a &&
        ((s.value = Math.max(a.responseStart - so(), 0)),
        (s.entries = [a]),
        i(!0));
    });
  },
  Ui = {},
  Qa = {};
let zy, $y, By, Hy, Wy;
function Ud(e, t = !1) {
  return oo("cls", e, ix, zy, t);
}
function qy(e, t = !1) {
  return oo("lcp", e, ax, By, t);
}
function Vy(e) {
  return oo("fid", e, ox, $y);
}
function sx(e) {
  return oo("ttfb", e, lx, Hy);
}
function Gy(e) {
  return oo("inp", e, ux, Wy);
}
function Us(e, t) {
  return (Yy(e, t), Qa[e] || (cx(e), (Qa[e] = !0)), Ky(e, t));
}
function Js(e, t) {
  const s = Ui[e];
  if (!(!s || !s.length))
    for (const i of s)
      try {
        i(t);
      } catch (a) {
        Fd &&
          W.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${zn(i)}
Error:`,
            a,
          );
      }
}
function ix() {
  return z1(
    (e) => {
      (Js("cls", { metric: e }), (zy = e));
    },
    { reportAllChanges: !0 },
  );
}
function ox() {
  return B1((e) => {
    (Js("fid", { metric: e }), ($y = e));
  });
}
function ax() {
  return tx(
    (e) => {
      (Js("lcp", { metric: e }), (By = e));
    },
    { reportAllChanges: !0 },
  );
}
function lx() {
  return rx((e) => {
    (Js("ttfb", { metric: e }), (Hy = e));
  });
}
function ux() {
  return Z1((e) => {
    (Js("inp", { metric: e }), (Wy = e));
  });
}
function oo(e, t, s, i, a = !1) {
  Yy(e, t);
  let u;
  return (
    Qa[e] || ((u = s()), (Qa[e] = !0)),
    i && t({ metric: i }),
    Ky(e, t, a ? u : void 0)
  );
}
function cx(e) {
  const t = {};
  (e === "event" && (t.durationThreshold = 0),
    es(
      e,
      (s) => {
        Js(e, { entries: s });
      },
      t,
    ));
}
function Yy(e, t) {
  ((Ui[e] = Ui[e] || []), Ui[e].push(t));
}
function Ky(e, t, s) {
  return () => {
    s && s();
    const i = Ui[e];
    if (!i) return;
    const a = i.indexOf(t);
    a !== -1 && i.splice(a, 1);
  };
}
function dx(e) {
  return "duration" in e;
}
function Oc(e) {
  return typeof e == "number" && isFinite(e);
}
function qn(e, t, s, { ...i }) {
  const a = Ae(e).start_timestamp;
  return (
    a &&
      a > t &&
      typeof e.updateStartTime == "function" &&
      e.updateStartTime(t),
    py(e, () => {
      const u = no({ startTime: t, ...i });
      return (u && u.end(s), u);
    })
  );
}
function Xy(e) {
  const t = Te();
  if (!t) return;
  const { name: s, transaction: i, attributes: a, startTime: u } = e,
    { release: d, environment: p } = t.getOptions(),
    h = t.getIntegrationByName("Replay"),
    g = h && h.getReplayId(),
    _ = ze(),
    y = _.getUser(),
    E = y !== void 0 ? y.email || y.id || y.ip_address : void 0;
  let C;
  try {
    C = _.getScopeData().contexts.profile.profile_id;
  } catch {}
  const T = {
    release: d,
    environment: p,
    user: E || void 0,
    profile_id: C || void 0,
    replay_id: g || void 0,
    transaction: i,
    "user_agent.original": ae.navigator && ae.navigator.userAgent,
    ...a,
  };
  return no({
    name: s,
    attributes: T,
    startTime: u,
    experimental: { standalone: !0 },
  });
}
function zd() {
  return ae && ae.addEventListener && ae.performance;
}
function tt(e) {
  return e / 1e3;
}
function Jy(e) {
  let t = "unknown",
    s = "unknown",
    i = "";
  for (const a of e) {
    if (a === "/") {
      [t, s] = e.split("/");
      break;
    }
    if (!isNaN(Number(a))) {
      ((t = i === "h" ? "http" : i), (s = e.split(i)[1]));
      break;
    }
    i += a;
  }
  return (i === e && (t = i), { name: t, version: s });
}
function fx() {
  let e = 0,
    t,
    s;
  if (!hx()) return;
  let i = !1;
  function a() {
    i || ((i = !0), s && px(e, t, s), u());
  }
  const u = Ud(({ metric: d }) => {
    const p = d.entries[d.entries.length - 1];
    p && ((e = d.value), (t = p));
  }, !0);
  (Xs(() => {
    a();
  }),
    setTimeout(() => {
      const d = Te();
      if (!d) return;
      const p = d.on("startNavigationSpan", () => {
          (a(), p && p());
        }),
        h = ht(),
        g = h && vt(h),
        _ = g && Ae(g);
      _ && _.op === "pageload" && (s = g.spanContext().spanId);
    }, 0));
}
function px(e, t, s) {
  Fd && W.log(`Sending CLS span (${e})`);
  const i = tt((bt || 0) + ((t && t.startTime) || 0)),
    a = ze().getScopeData().transactionName,
    u = t ? Bn(t.sources[0] && t.sources[0].node) : "Layout shift",
    d = at({
      [pt]: "auto.http.browser.cls",
      [Kr]: "ui.webvital.cls",
      [Rd]: (t && t.duration) || 0,
      "sentry.pageload.span_id": s,
    }),
    p = Xy({ name: u, transaction: a, attributes: d, startTime: i });
  p && (p.addEvent("cls", { [gl]: "", [yl]: e }), p.end(i));
}
function hx() {
  try {
    return PerformanceObserver.supportedEntryTypes.includes("layout-shift");
  } catch {
    return !1;
  }
}
const mx = 2147483647;
let zm = 0,
  yt = {},
  Lt,
  zi;
function gx({ recordClsStandaloneSpans: e }) {
  const t = zd();
  if (t && bt) {
    t.mark && ae.performance.mark("sentry-tracing-init");
    const s = wx(),
      i = Ex(),
      a = xx(),
      u = e ? fx() : Sx();
    return () => {
      (s(), i(), a(), u && u());
    };
  }
  return () => {};
}
function yx() {
  Us("longtask", ({ entries: e }) => {
    const t = ht();
    if (!t) return;
    const { op: s, start_timestamp: i } = Ae(t);
    for (const a of e) {
      const u = tt(bt + a.startTime),
        d = tt(a.duration);
      (s === "navigation" && i && u < i) ||
        qn(t, u, u + d, {
          name: "Main UI thread blocked",
          op: "ui.long-task",
          attributes: { [pt]: "auto.ui.browser.metrics" },
        });
    }
  });
}
function vx() {
  new PerformanceObserver((t) => {
    const s = ht();
    if (s)
      for (const i of t.getEntries()) {
        if (!i.scripts[0]) continue;
        const a = tt(bt + i.startTime),
          { start_timestamp: u, op: d } = Ae(s);
        if (d === "navigation" && u && a < u) continue;
        const p = tt(i.duration),
          h = { [pt]: "auto.ui.browser.metrics" },
          g = i.scripts[0],
          {
            invoker: _,
            invokerType: y,
            sourceURL: E,
            sourceFunctionName: C,
            sourceCharPosition: T,
          } = g;
        ((h["browser.script.invoker"] = _),
          (h["browser.script.invoker_type"] = y),
          E && (h["code.filepath"] = E),
          C && (h["code.function"] = C),
          T !== -1 && (h["browser.script.source_char_position"] = T),
          qn(s, a, a + p, {
            name: "Main UI thread blocked",
            op: "ui.long-animation-frame",
            attributes: h,
          }));
      }
  }).observe({ type: "long-animation-frame", buffered: !0 });
}
function _x() {
  Us("event", ({ entries: e }) => {
    const t = ht();
    if (t) {
      for (const s of e)
        if (s.name === "click") {
          const i = tt(bt + s.startTime),
            a = tt(s.duration),
            u = {
              name: Bn(s.target),
              op: `ui.interaction.${s.name}`,
              startTime: i,
              attributes: { [pt]: "auto.ui.browser.metrics" },
            },
            d = $g(s.target);
          (d && (u.attributes["ui.component_name"] = d), qn(t, i, i + a, u));
        }
    }
  });
}
function Sx() {
  return Ud(({ metric: e }) => {
    const t = e.entries[e.entries.length - 1];
    t && ((yt.cls = { value: e.value, unit: "" }), (zi = t));
  }, !0);
}
function Ex() {
  return qy(({ metric: e }) => {
    const t = e.entries[e.entries.length - 1];
    t && ((yt.lcp = { value: e.value, unit: "millisecond" }), (Lt = t));
  }, !0);
}
function wx() {
  return Vy(({ metric: e }) => {
    const t = e.entries[e.entries.length - 1];
    if (!t) return;
    const s = tt(bt),
      i = tt(t.startTime);
    ((yt.fid = { value: e.value, unit: "millisecond" }),
      (yt["mark.fid"] = { value: s + i, unit: "second" }));
  });
}
function xx() {
  return sx(({ metric: e }) => {
    e.entries[e.entries.length - 1] &&
      (yt.ttfb = { value: e.value, unit: "millisecond" });
  });
}
function kx(e, t) {
  const s = zd();
  if (!s || !s.getEntries || !bt) return;
  const i = tt(bt),
    a = s.getEntries(),
    { op: u, start_timestamp: d } = Ae(e);
  if (
    (a.slice(zm).forEach((p) => {
      const h = tt(p.startTime),
        g = tt(Math.max(0, p.duration));
      if (!(u === "navigation" && d && i + h < d))
        switch (p.entryType) {
          case "navigation": {
            Ix(e, p, i);
            break;
          }
          case "mark":
          case "paint":
          case "measure": {
            Tx(e, p, h, g, i);
            const _ = Sl(),
              y = p.startTime < _.firstHiddenTime;
            (p.name === "first-paint" &&
              y &&
              (yt.fp = { value: p.startTime, unit: "millisecond" }),
              p.name === "first-contentful-paint" &&
                y &&
                (yt.fcp = { value: p.startTime, unit: "millisecond" }));
            break;
          }
          case "resource": {
            bx(e, p, p.name, h, g, i);
            break;
          }
        }
    }),
    (zm = Math.max(a.length - 1, 0)),
    Rx(e),
    u === "pageload")
  ) {
    Ox(yt);
    const p = yt["mark.fid"];
    (p &&
      yt.fid &&
      (qn(e, p.value, p.value + tt(yt.fid.value), {
        name: "first input delay",
        op: "ui.action",
        attributes: { [pt]: "auto.ui.browser.metrics" },
      }),
      delete yt["mark.fid"]),
      (!("fcp" in yt) || !t.recordClsOnPageloadSpan) && delete yt.cls,
      Object.entries(yt).forEach(([h, g]) => {
        kE(h, g.value, g.unit);
      }),
      e.setAttribute("performance.timeOrigin", i),
      e.setAttribute("performance.activationStart", so()),
      Mx(e));
  }
  ((Lt = void 0), (zi = void 0), (yt = {}));
}
function Tx(e, t, s, i, a) {
  const u = ro(!1),
    d = tt(u ? u.requestStart : 0),
    p = a + Math.max(s, d),
    h = a + s,
    g = h + i,
    _ = { [pt]: "auto.resource.browser.metrics" };
  return (
    p !== h &&
      ((_["sentry.browser.measure_happened_before_request"] = !0),
      (_["sentry.browser.measure_start_time"] = p)),
    qn(e, p, g, { name: t.name, op: t.entryType, attributes: _ }),
    p
  );
}
function Ix(e, t, s) {
  ([
    "unloadEvent",
    "redirect",
    "domContentLoadedEvent",
    "loadEvent",
    "connect",
  ].forEach((i) => {
    Ca(e, t, i, s);
  }),
    Ca(e, t, "secureConnection", s, "TLS/SSL"),
    Ca(e, t, "fetch", s, "cache"),
    Ca(e, t, "domainLookup", s, "DNS"),
    Nx(e, t, s));
}
function Ca(e, t, s, i, a = s) {
  const u = Cx(s),
    d = t[u],
    p = t[`${s}Start`];
  !p ||
    !d ||
    qn(e, i + tt(p), i + tt(d), {
      op: `browser.${a}`,
      name: t.name,
      attributes: { [pt]: "auto.ui.browser.metrics" },
    });
}
function Cx(e) {
  return e === "secureConnection"
    ? "connectEnd"
    : e === "fetch"
      ? "domainLookupStart"
      : `${e}End`;
}
function Nx(e, t, s) {
  const i = s + tt(t.requestStart),
    a = s + tt(t.responseEnd),
    u = s + tt(t.responseStart);
  t.responseEnd &&
    (qn(e, i, a, {
      op: "browser.request",
      name: t.name,
      attributes: { [pt]: "auto.ui.browser.metrics" },
    }),
    qn(e, u, a, {
      op: "browser.response",
      name: t.name,
      attributes: { [pt]: "auto.ui.browser.metrics" },
    }));
}
function bx(e, t, s, i, a, u) {
  if (t.initiatorType === "xmlhttprequest" || t.initiatorType === "fetch")
    return;
  const d = Gr(s),
    p = { [pt]: "auto.resource.browser.metrics" };
  (Dc(p, t, "transferSize", "http.response_transfer_size"),
    Dc(p, t, "encodedBodySize", "http.response_content_length"),
    Dc(p, t, "decodedBodySize", "http.decoded_response_content_length"));
  const h = t.deliveryType;
  h != null && (p["http.response_delivery_type"] = h);
  const g = t.renderBlockingStatus;
  (g && (p["resource.render_blocking_status"] = g),
    d.protocol && (p["url.scheme"] = d.protocol.split(":").pop()),
    d.host && (p["server.address"] = d.host),
    (p["url.same_origin"] = s.includes(ae.location.origin)));
  const { name: _, version: y } = Jy(t.nextHopProtocol);
  ((p["network.protocol.name"] = _), (p["network.protocol.version"] = y));
  const E = u + i,
    C = E + a;
  qn(e, E, C, {
    name: s.replace(ae.location.origin, ""),
    op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
    attributes: p,
  });
}
function Rx(e) {
  const t = ae.navigator;
  if (!t) return;
  const s = t.connection;
  (s &&
    (s.effectiveType &&
      e.setAttribute("effectiveConnectionType", s.effectiveType),
    s.type && e.setAttribute("connectionType", s.type),
    Oc(s.rtt) &&
      (yt["connection.rtt"] = { value: s.rtt, unit: "millisecond" })),
    Oc(t.deviceMemory) &&
      e.setAttribute("deviceMemory", `${t.deviceMemory} GB`),
    Oc(t.hardwareConcurrency) &&
      e.setAttribute("hardwareConcurrency", String(t.hardwareConcurrency)));
}
function Mx(e) {
  (Lt &&
    (Lt.element && e.setAttribute("lcp.element", Bn(Lt.element)),
    Lt.id && e.setAttribute("lcp.id", Lt.id),
    Lt.url && e.setAttribute("lcp.url", Lt.url.trim().slice(0, 200)),
    Lt.loadTime != null && e.setAttribute("lcp.loadTime", Lt.loadTime),
    Lt.renderTime != null && e.setAttribute("lcp.renderTime", Lt.renderTime),
    e.setAttribute("lcp.size", Lt.size)),
    zi &&
      zi.sources &&
      zi.sources.forEach((t, s) =>
        e.setAttribute(`cls.source.${s + 1}`, Bn(t.node)),
      ));
}
function Dc(e, t, s, i) {
  const a = t[s];
  a != null && a < mx && (e[i] = a);
}
function Ox(e) {
  const t = ro(!1);
  if (!t) return;
  const { responseStart: s, requestStart: i } = t;
  i <= s && (e["ttfb.requestTime"] = { value: s - i, unit: "millisecond" });
}
const Dx = 1e3;
let $m, ud, cd;
function Qy(e) {
  (Tr("dom", e), Ir("dom", Ax));
}
function Ax() {
  if (!ae.document) return;
  const e = en.bind(null, "dom"),
    t = Bm(e, !0);
  (ae.document.addEventListener("click", t, !1),
    ae.document.addEventListener("keypress", t, !1),
    ["EventTarget", "Node"].forEach((s) => {
      const a = ae[s],
        u = a && a.prototype;
      !u ||
        !u.hasOwnProperty ||
        !u.hasOwnProperty("addEventListener") ||
        (jt(u, "addEventListener", function (d) {
          return function (p, h, g) {
            if (p === "click" || p == "keypress")
              try {
                const _ = (this.__sentry_instrumentation_handlers__ =
                    this.__sentry_instrumentation_handlers__ || {}),
                  y = (_[p] = _[p] || { refCount: 0 });
                if (!y.handler) {
                  const E = Bm(e);
                  ((y.handler = E), d.call(this, p, E, g));
                }
                y.refCount++;
              } catch {}
            return d.call(this, p, h, g);
          };
        }),
        jt(u, "removeEventListener", function (d) {
          return function (p, h, g) {
            if (p === "click" || p == "keypress")
              try {
                const _ = this.__sentry_instrumentation_handlers__ || {},
                  y = _[p];
                y &&
                  (y.refCount--,
                  y.refCount <= 0 &&
                    (d.call(this, p, y.handler, g),
                    (y.handler = void 0),
                    delete _[p]),
                  Object.keys(_).length === 0 &&
                    delete this.__sentry_instrumentation_handlers__);
              } catch {}
            return d.call(this, p, h, g);
          };
        }));
    }));
}
function Px(e) {
  if (e.type !== ud) return !1;
  try {
    if (!e.target || e.target._sentryId !== cd) return !1;
  } catch {}
  return !0;
}
function Lx(e, t) {
  return e !== "keypress"
    ? !1
    : !t || !t.tagName
      ? !0
      : !(
          t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          t.isContentEditable
        );
}
function Bm(e, t = !1) {
  return (s) => {
    if (!s || s._sentryCaptured) return;
    const i = jx(s);
    if (Lx(s.type, i)) return;
    (tn(s, "_sentryCaptured", !0),
      i && !i._sentryId && tn(i, "_sentryId", Wt()));
    const a = s.type === "keypress" ? "input" : s.type;
    (Px(s) ||
      (e({ event: s, name: a, global: t }),
      (ud = s.type),
      (cd = i ? i._sentryId : void 0)),
      clearTimeout($m),
      ($m = ae.setTimeout(() => {
        ((cd = void 0), (ud = void 0));
      }, Dx)));
  };
}
function jx(e) {
  try {
    return e.target;
  } catch {
    return null;
  }
}
let Na;
function El(e) {
  const t = "history";
  (Tr(t, e), Ir(t, Fx));
}
function Fx() {
  if (!m1()) return;
  const e = ae.onpopstate;
  ae.onpopstate = function (...s) {
    const i = ae.location.href,
      a = Na;
    if (((Na = i), en("history", { from: a, to: i }), e))
      try {
        return e.apply(this, s);
      } catch {}
  };
  function t(s) {
    return function (...i) {
      const a = i.length > 2 ? i[2] : void 0;
      if (a) {
        const u = Na,
          d = String(a);
        ((Na = d), en("history", { from: u, to: d }));
      }
      return s.apply(this, i);
    };
  }
  (jt(ae.history, "pushState", t), jt(ae.history, "replaceState", t));
}
const Ua = {};
function Zy(e) {
  const t = Ua[e];
  if (t) return t;
  let s = ae[e];
  if (rd(s)) return (Ua[e] = s.bind(ae));
  const i = ae.document;
  if (i && typeof i.createElement == "function")
    try {
      const a = i.createElement("iframe");
      ((a.hidden = !0), i.head.appendChild(a));
      const u = a.contentWindow;
      (u && u[e] && (s = u[e]), i.head.removeChild(a));
    } catch (a) {
      Fd &&
        W.warn(
          `Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
          a,
        );
    }
  return s && (Ua[e] = s.bind(ae));
}
function Hm(e) {
  Ua[e] = void 0;
}
function zs(...e) {
  return Zy("setTimeout")(...e);
}
const Br = "__sentry_xhr_v3__";
function e0(e) {
  (Tr("xhr", e), Ir("xhr", Ux));
}
function Ux() {
  if (!ae.XMLHttpRequest) return;
  const e = XMLHttpRequest.prototype;
  ((e.open = new Proxy(e.open, {
    apply(t, s, i) {
      const a = new Error(),
        u = Nt() * 1e3,
        d = Fn(i[0]) ? i[0].toUpperCase() : void 0,
        p = zx(i[1]);
      if (!d || !p) return t.apply(s, i);
      ((s[Br] = { method: d, url: p, request_headers: {} }),
        d === "POST" &&
          p.match(/sentry_key/) &&
          (s.__sentry_own_request__ = !0));
      const h = () => {
        const g = s[Br];
        if (g && s.readyState === 4) {
          try {
            g.status_code = s.status;
          } catch {}
          const _ = {
            endTimestamp: Nt() * 1e3,
            startTimestamp: u,
            xhr: s,
            virtualError: a,
          };
          en("xhr", _);
        }
      };
      return (
        "onreadystatechange" in s && typeof s.onreadystatechange == "function"
          ? (s.onreadystatechange = new Proxy(s.onreadystatechange, {
              apply(g, _, y) {
                return (h(), g.apply(_, y));
              },
            }))
          : s.addEventListener("readystatechange", h),
        (s.setRequestHeader = new Proxy(s.setRequestHeader, {
          apply(g, _, y) {
            const [E, C] = y,
              T = _[Br];
            return (
              T && Fn(E) && Fn(C) && (T.request_headers[E.toLowerCase()] = C),
              g.apply(_, y)
            );
          },
        })),
        t.apply(s, i)
      );
    },
  })),
    (e.send = new Proxy(e.send, {
      apply(t, s, i) {
        const a = s[Br];
        if (!a) return t.apply(s, i);
        i[0] !== void 0 && (a.body = i[0]);
        const u = { startTimestamp: Nt() * 1e3, xhr: s };
        return (en("xhr", u), t.apply(s, i));
      },
    })));
}
function zx(e) {
  if (Fn(e)) return e;
  try {
    return e.toString();
  } catch {}
}
const Ac = [],
  za = new Map();
function $x() {
  if (zd() && bt) {
    const t = Bx();
    return () => {
      t();
    };
  }
  return () => {};
}
const Wm = {
  click: "click",
  pointerdown: "click",
  pointerup: "click",
  mousedown: "click",
  mouseup: "click",
  touchstart: "click",
  touchend: "click",
  mouseover: "hover",
  mouseout: "hover",
  mouseenter: "hover",
  mouseleave: "hover",
  pointerover: "hover",
  pointerout: "hover",
  pointerenter: "hover",
  pointerleave: "hover",
  dragstart: "drag",
  dragend: "drag",
  drag: "drag",
  dragenter: "drag",
  dragleave: "drag",
  dragover: "drag",
  drop: "drag",
  keydown: "press",
  keyup: "press",
  keypress: "press",
  input: "press",
};
function Bx() {
  return Gy(({ metric: e }) => {
    if (e.value == null) return;
    const t = e.entries.find((T) => T.duration === e.value && Wm[T.name]);
    if (!t) return;
    const { interactionId: s } = t,
      i = Wm[t.name],
      a = tt(bt + t.startTime),
      u = tt(e.value),
      d = ht(),
      p = d ? vt(d) : void 0,
      g = (s != null ? za.get(s) : void 0) || p,
      _ = g ? Ae(g).description : ze().getScopeData().transactionName,
      y = Bn(t.target),
      E = at({
        [pt]: "auto.http.browser.inp",
        [Kr]: `ui.interaction.${i}`,
        [Rd]: t.duration,
      }),
      C = Xy({ name: y, transaction: _, attributes: E, startTime: a });
    C &&
      (C.addEvent("inp", { [gl]: "millisecond", [yl]: e.value }), C.end(a + u));
  });
}
function Hx(e) {
  const t = ({ entries: s }) => {
    const i = ht(),
      a = i && vt(i);
    s.forEach((u) => {
      if (!dx(u) || !a) return;
      const d = u.interactionId;
      if (d != null && !za.has(d)) {
        if (Ac.length > 10) {
          const p = Ac.shift();
          za.delete(p);
        }
        (Ac.push(d), za.set(d, a));
      }
    });
  };
  (Us("event", t), Us("first-input", t));
}
function Wx(e, t = Zy("fetch")) {
  let s = 0,
    i = 0;
  function a(u) {
    const d = u.body.length;
    ((s += d), i++);
    const p = {
      body: u.body,
      method: "POST",
      referrerPolicy: "origin",
      headers: e.headers,
      keepalive: s <= 6e4 && i < 15,
      ...e.fetchOptions,
    };
    if (!t) return (Hm("fetch"), Ga("No fetch implementation available"));
    try {
      return t(e.url, p).then(
        (h) => (
          (s -= d),
          i--,
          {
            statusCode: h.status,
            headers: {
              "x-sentry-rate-limits": h.headers.get("X-Sentry-Rate-Limits"),
              "retry-after": h.headers.get("Retry-After"),
            },
          }
        ),
      );
    } catch (h) {
      return (Hm("fetch"), (s -= d), i--, Ga(h));
    }
  }
  return Ew(e, a);
}
const qx = 30,
  Vx = 50;
function dd(e, t, s, i) {
  const a = { filename: e, function: t === "<anonymous>" ? Yr : t, in_app: !0 };
  return (s !== void 0 && (a.lineno = s), i !== void 0 && (a.colno = i), a);
}
const Gx = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
  Yx =
    /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  Kx = /\((\S*)(?::(\d+))(?::(\d+))\)/,
  Xx = (e) => {
    const t = Gx.exec(e);
    if (t) {
      const [, i, a, u] = t;
      return dd(i, Yr, +a, +u);
    }
    const s = Yx.exec(e);
    if (s) {
      if (s[2] && s[2].indexOf("eval") === 0) {
        const d = Kx.exec(s[2]);
        d && ((s[2] = d[1]), (s[3] = d[2]), (s[4] = d[3]));
      }
      const [a, u] = t0(s[1] || Yr, s[2]);
      return dd(u, a, s[3] ? +s[3] : void 0, s[4] ? +s[4] : void 0);
    }
  },
  Jx = [qx, Xx],
  Qx =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
  Zx = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
  ek = (e) => {
    const t = Qx.exec(e);
    if (t) {
      if (t[3] && t[3].indexOf(" > eval") > -1) {
        const u = Zx.exec(t[3]);
        u &&
          ((t[1] = t[1] || "eval"), (t[3] = u[1]), (t[4] = u[2]), (t[5] = ""));
      }
      let i = t[3],
        a = t[1] || Yr;
      return (
        ([a, i] = t0(a, i)),
        dd(i, a, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
      );
    }
  },
  tk = [Vx, ek],
  nk = [Jx, tk],
  rk = Ag(...nk),
  t0 = (e, t) => {
    const s = e.indexOf("safari-extension") !== -1,
      i = e.indexOf("safari-web-extension") !== -1;
    return s || i
      ? [
          e.indexOf("@") !== -1 ? e.split("@")[0] : Yr,
          s ? `safari-extension:${t}` : `safari-web-extension:${t}`,
        ]
      : [e, t];
  },
  ba = 1024,
  sk = "Breadcrumbs",
  ik = (e = {}) => {
    const t = {
      console: !0,
      dom: !0,
      fetch: !0,
      history: !0,
      sentry: !0,
      xhr: !0,
      ...e,
    };
    return {
      name: sk,
      setup(s) {
        (t.console && Vw(uk(s)),
          t.dom && Qy(lk(s, t.dom)),
          t.xhr && e0(ck(s)),
          t.fetch && Ay(dk(s)),
          t.history && El(fk(s)),
          t.sentry && s.on("beforeSendEvent", ak(s)));
      },
    };
  },
  ok = ik;
function ak(e) {
  return function (s) {
    Te() === e &&
      Wn(
        {
          category: `sentry.${s.type === "transaction" ? "transaction" : "event"}`,
          event_id: s.event_id,
          level: s.level,
          message: fr(s),
        },
        { event: s },
      );
  };
}
function lk(e, t) {
  return function (i) {
    if (Te() !== e) return;
    let a,
      u,
      d = typeof t == "object" ? t.serializeAttribute : void 0,
      p =
        typeof t == "object" && typeof t.maxStringLength == "number"
          ? t.maxStringLength
          : void 0;
    (p &&
      p > ba &&
      (qt &&
        W.warn(
          `\`dom.maxStringLength\` cannot exceed ${ba}, but a value of ${p} was configured. Sentry will use ${ba} instead.`,
        ),
      (p = ba)),
      typeof d == "string" && (d = [d]));
    try {
      const g = i.event,
        _ = pk(g) ? g.target : g;
      ((a = Bn(_, { keyAttrs: d, maxStringLength: p })), (u = $g(_)));
    } catch {
      a = "<unknown>";
    }
    if (a.length === 0) return;
    const h = { category: `ui.${i.name}`, message: a };
    (u && (h.data = { "ui.component_name": u }),
      Wn(h, { event: i.event, name: i.name, global: i.global }));
  };
}
function uk(e) {
  return function (s) {
    if (Te() !== e) return;
    const i = {
      category: "console",
      data: { arguments: s.args, logger: "console" },
      level: by(s.level),
      message: sm(s.args, " "),
    };
    if (s.level === "assert")
      if (s.args[0] === !1)
        ((i.message = `Assertion failed: ${sm(s.args.slice(1), " ") || "console.assert"}`),
          (i.data.arguments = s.args.slice(1)));
      else return;
    Wn(i, { input: s.args, level: s.level });
  };
}
function ck(e) {
  return function (s) {
    if (Te() !== e) return;
    const { startTimestamp: i, endTimestamp: a } = s,
      u = s.xhr[Br];
    if (!i || !a || !u) return;
    const { method: d, url: p, status_code: h, body: g } = u,
      _ = { method: d, url: p, status_code: h },
      y = { xhr: s.xhr, input: g, startTimestamp: i, endTimestamp: a },
      E = Oy(h);
    Wn({ category: "xhr", data: _, type: "http", level: E }, y);
  };
}
function dk(e) {
  return function (s) {
    if (Te() !== e) return;
    const { startTimestamp: i, endTimestamp: a } = s;
    if (
      a &&
      !(s.fetchData.url.match(/sentry_key/) && s.fetchData.method === "POST")
    )
      if (s.error) {
        const u = s.fetchData,
          d = {
            data: s.error,
            input: s.args,
            startTimestamp: i,
            endTimestamp: a,
          };
        Wn({ category: "fetch", data: u, level: "error", type: "http" }, d);
      } else {
        const u = s.response,
          d = { ...s.fetchData, status_code: u && u.status },
          p = {
            input: s.args,
            response: u,
            startTimestamp: i,
            endTimestamp: a,
          },
          h = Oy(d.status_code);
        Wn({ category: "fetch", data: d, type: "http", level: h }, p);
      }
  };
}
function fk(e) {
  return function (s) {
    if (Te() !== e) return;
    let i = s.from,
      a = s.to;
    const u = Gr(ue.location.href);
    let d = i ? Gr(i) : void 0;
    const p = Gr(a);
    ((!d || !d.path) && (d = u),
      u.protocol === p.protocol && u.host === p.host && (a = p.relative),
      u.protocol === d.protocol && u.host === d.host && (i = d.relative),
      Wn({ category: "navigation", data: { from: i, to: a } }));
  };
}
function pk(e) {
  return !!e && !!e.target;
}
const hk = [
    "EventTarget",
    "Window",
    "Node",
    "ApplicationCache",
    "AudioTrackList",
    "BroadcastChannel",
    "ChannelMergerNode",
    "CryptoOperation",
    "EventSource",
    "FileReader",
    "HTMLUnknownElement",
    "IDBDatabase",
    "IDBRequest",
    "IDBTransaction",
    "KeyOperation",
    "MediaController",
    "MessagePort",
    "ModalWindow",
    "Notification",
    "SVGElementInstance",
    "Screen",
    "SharedWorker",
    "TextTrack",
    "TextTrackCue",
    "TextTrackList",
    "WebSocket",
    "WebSocketWorker",
    "Worker",
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequestUpload",
  ],
  mk = "BrowserApiErrors",
  gk = (e = {}) => {
    const t = {
      XMLHttpRequest: !0,
      eventTarget: !0,
      requestAnimationFrame: !0,
      setInterval: !0,
      setTimeout: !0,
      ...e,
    };
    return {
      name: mk,
      setupOnce() {
        (t.setTimeout && jt(ue, "setTimeout", qm),
          t.setInterval && jt(ue, "setInterval", qm),
          t.requestAnimationFrame && jt(ue, "requestAnimationFrame", vk),
          t.XMLHttpRequest &&
            "XMLHttpRequest" in ue &&
            jt(XMLHttpRequest.prototype, "send", _k));
        const s = t.eventTarget;
        s && (Array.isArray(s) ? s : hk).forEach(Sk);
      },
    };
  },
  yk = gk;
function qm(e) {
  return function (...t) {
    const s = t[0];
    return (
      (t[0] = Fs(s, {
        mechanism: {
          data: { function: zn(e) },
          handled: !1,
          type: "instrument",
        },
      })),
      e.apply(this, t)
    );
  };
}
function vk(e) {
  return function (t) {
    return e.apply(this, [
      Fs(t, {
        mechanism: {
          data: { function: "requestAnimationFrame", handler: zn(e) },
          handled: !1,
          type: "instrument",
        },
      }),
    ]);
  };
}
function _k(e) {
  return function (...t) {
    const s = this;
    return (
      ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((a) => {
        a in s &&
          typeof s[a] == "function" &&
          jt(s, a, function (u) {
            const d = {
                mechanism: {
                  data: { function: a, handler: zn(u) },
                  handled: !1,
                  type: "instrument",
                },
              },
              p = Nd(u);
            return (p && (d.mechanism.data.handler = zn(p)), Fs(u, d));
          });
      }),
      e.apply(this, t)
    );
  };
}
function Sk(e) {
  const s = ue[e],
    i = s && s.prototype;
  !i ||
    !i.hasOwnProperty ||
    !i.hasOwnProperty("addEventListener") ||
    (jt(i, "addEventListener", function (a) {
      return function (u, d, p) {
        try {
          Ek(d) &&
            (d.handleEvent = Fs(d.handleEvent, {
              mechanism: {
                data: { function: "handleEvent", handler: zn(d), target: e },
                handled: !1,
                type: "instrument",
              },
            }));
        } catch {}
        return a.apply(this, [
          u,
          Fs(d, {
            mechanism: {
              data: { function: "addEventListener", handler: zn(d), target: e },
              handled: !1,
              type: "instrument",
            },
          }),
          p,
        ]);
      };
    }),
    jt(i, "removeEventListener", function (a) {
      return function (u, d, p) {
        try {
          const h = d.__sentry_wrapped__;
          h && a.call(this, u, h, p);
        } catch {}
        return a.call(this, u, d, p);
      };
    }));
}
function Ek(e) {
  return typeof e.handleEvent == "function";
}
const wk = () => ({
    name: "BrowserSession",
    setupOnce() {
      if (typeof ue.document > "u") {
        qt &&
          W.warn(
            "Using the `browserSessionIntegration` in non-browser environments is not supported.",
          );
        return;
      }
      (Tm({ ignoreDuration: !0 }),
        Im(),
        El(({ from: e, to: t }) => {
          e !== void 0 && e !== t && (Tm({ ignoreDuration: !0 }), Im());
        }));
    },
  }),
  xk = "GlobalHandlers",
  kk = (e = {}) => {
    const t = { onerror: !0, onunhandledrejection: !0, ...e };
    return {
      name: xk,
      setupOnce() {
        Error.stackTraceLimit = 50;
      },
      setup(s) {
        (t.onerror && (Ik(s), Vm("onerror")),
          t.onunhandledrejection && (Ck(s), Vm("onunhandledrejection")));
      },
    };
  },
  Tk = kk;
function Ik(e) {
  Pg((t) => {
    const { stackParser: s, attachStacktrace: i } = n0();
    if (Te() !== e || Ly()) return;
    const { msg: a, url: u, line: d, column: p, error: h } = t,
      g = Rk(jd(s, h || a, void 0, i, !1), u, d, p);
    ((g.level = "error"),
      yy(g, {
        originalException: h,
        mechanism: { handled: !1, type: "onerror" },
      }));
  });
}
function Ck(e) {
  Lg((t) => {
    const { stackParser: s, attachStacktrace: i } = n0();
    if (Te() !== e || Ly()) return;
    const a = Nk(t),
      u = Cd(a) ? bk(a) : jd(s, a, void 0, i, !0);
    ((u.level = "error"),
      yy(u, {
        originalException: a,
        mechanism: { handled: !1, type: "onunhandledrejection" },
      }));
  });
}
function Nk(e) {
  if (Cd(e)) return e;
  try {
    if ("reason" in e) return e.reason;
    if ("detail" in e && "reason" in e.detail) return e.detail.reason;
  } catch {}
  return e;
}
function bk(e) {
  return {
    exception: {
      values: [
        {
          type: "UnhandledRejection",
          value: `Non-Error promise rejection captured with value: ${String(e)}`,
        },
      ],
    },
  };
}
function Rk(e, t, s, i) {
  const a = (e.exception = e.exception || {}),
    u = (a.values = a.values || []),
    d = (u[0] = u[0] || {}),
    p = (d.stacktrace = d.stacktrace || {}),
    h = (p.frames = p.frames || []),
    g = i,
    _ = s,
    y = Fn(t) && t.length > 0 ? t : zg();
  return (
    h.length === 0 &&
      h.push({ colno: g, filename: y, function: Yr, in_app: !0, lineno: _ }),
    e
  );
}
function Vm(e) {
  qt && W.log(`Global Handler attached: ${e}`);
}
function n0() {
  const e = Te();
  return (
    (e && e.getOptions()) || { stackParser: () => [], attachStacktrace: !1 }
  );
}
const Mk = () => ({
    name: "HttpContext",
    preprocessEvent(e) {
      if (!ue.navigator && !ue.location && !ue.document) return;
      const t =
          (e.request && e.request.url) || (ue.location && ue.location.href),
        { referrer: s } = ue.document || {},
        { userAgent: i } = ue.navigator || {},
        a = {
          ...(e.request && e.request.headers),
          ...(s && { Referer: s }),
          ...(i && { "User-Agent": i }),
        },
        u = { ...e.request, ...(t && { url: t }), headers: a };
      e.request = u;
    },
  }),
  Ok = "cause",
  Dk = 5,
  Ak = "LinkedErrors",
  Pk = (e = {}) => {
    const t = e.limit || Dk,
      s = e.key || Ok;
    return {
      name: Ak,
      preprocessEvent(i, a, u) {
        const d = u.getOptions();
        Ww(Pd, d.stackParser, d.maxValueLength, s, t, i, a);
      },
    };
  },
  Lk = Pk;
function jk(e) {
  const t = [Dw(), bw(), yk(), ok(), Tk(), Lk(), Xw(), Mk()];
  return (e.autoSessionTracking !== !1 && t.push(wk()), t);
}
function Fk(e = {}) {
  const t = {
    defaultIntegrations: jk(e),
    release:
      typeof __SENTRY_RELEASE__ == "string"
        ? __SENTRY_RELEASE__
        : ue.SENTRY_RELEASE && ue.SENTRY_RELEASE.id
          ? ue.SENTRY_RELEASE.id
          : void 0,
    autoSessionTracking: !0,
    sendClientReports: !0,
  };
  return (
    e.defaultIntegrations == null && delete e.defaultIntegrations,
    { ...t, ...e }
  );
}
function Uk() {
  const e = typeof ue.window < "u" && ue;
  if (!e) return !1;
  const t = e.chrome ? "chrome" : "browser",
    s = e[t],
    i = s && s.runtime && s.runtime.id,
    a = (ue.location && ue.location.href) || "",
    u = [
      "chrome-extension:",
      "moz-extension:",
      "ms-browser-extension:",
      "safari-web-extension:",
    ],
    d = !!i && ue === ue.top && u.some((h) => a.startsWith(`${h}//`)),
    p = typeof e.nw < "u";
  return !!i && !d && !p;
}
function zk(e = {}) {
  const t = Fk(e);
  if (!t.skipBrowserExtensionCheck && Uk()) {
    kr(() => {
      console.error(
        "[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/",
      );
    });
    return;
  }
  qt &&
    (Dy() ||
      W.warn(
        "No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.",
      ));
  const s = {
    ...t,
    stackParser: uS(t.stackParser || rk),
    integrations: lw(t),
    transport: t.transport || Wx,
  };
  return hw(M1, s);
}
function Gm(e = {}) {
  if (!ue.document) {
    qt && W.error("Global document not defined in showReportDialog call");
    return;
  }
  const t = ze(),
    s = t.getClient(),
    i = s && s.getDsn();
  if (!i) {
    qt && W.error("DSN not configured for showReportDialog call");
    return;
  }
  if ((t && (e.user = { ...t.getUser(), ...e.user }), !e.eventId)) {
    const p = ZE();
    p && (e.eventId = p);
  }
  const a = ue.document.createElement("script");
  ((a.async = !0),
    (a.crossOrigin = "anonymous"),
    (a.src = ow(i, e)),
    e.onLoad && (a.onload = e.onLoad));
  const { onClose: u } = e;
  if (u) {
    const p = (h) => {
      if (h.data === "__sentry_reportdialog_closed__")
        try {
          u();
        } finally {
          ue.removeEventListener("message", p);
        }
    };
    ue.addEventListener("message", p);
  }
  const d = ue.document.head || ue.document.body;
  d
    ? d.appendChild(a)
    : qt &&
      W.error("Not injecting report dialog. No injection point found in HTML");
}
const We = Ne,
  $d = "sentryReplaySession",
  $k = "replay_event",
  Bd = "Unable to send Replay",
  Bk = 3e5,
  Hk = 9e5,
  Wk = 5e3,
  qk = 5500,
  Vk = 6e4,
  Gk = 5e3,
  Yk = 3,
  Ym = 15e4,
  Ra = 5e3,
  Kk = 3e3,
  Xk = 300,
  Hd = 2e7,
  Jk = 4999,
  Qk = 15e3,
  Km = 36e5;
function fd(e, t) {
  return e ?? t();
}
function Yi(e) {
  let t,
    s = e[0],
    i = 1;
  for (; i < e.length; ) {
    const a = e[i],
      u = e[i + 1];
    if (
      ((i += 2), (a === "optionalAccess" || a === "optionalCall") && s == null)
    )
      return;
    a === "access" || a === "optionalAccess"
      ? ((t = s), (s = u(s)))
      : (a === "call" || a === "optionalCall") &&
        ((s = u((...d) => s.call(t, ...d))), (t = void 0));
  }
  return s;
}
var ot;
(function (e) {
  ((e[(e.Document = 0)] = "Document"),
    (e[(e.DocumentType = 1)] = "DocumentType"),
    (e[(e.Element = 2)] = "Element"),
    (e[(e.Text = 3)] = "Text"),
    (e[(e.CDATA = 4)] = "CDATA"),
    (e[(e.Comment = 5)] = "Comment"));
})(ot || (ot = {}));
function Zk(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function $i(e) {
  const t = Yi([e, "optionalAccess", (s) => s.host]);
  return Yi([t, "optionalAccess", (s) => s.shadowRoot]) === e;
}
function Bi(e) {
  return Object.prototype.toString.call(e) === "[object ShadowRoot]";
}
function eT(e) {
  return (
    e.includes(" background-clip: text;") &&
      !e.includes(" -webkit-background-clip: text;") &&
      (e = e.replace(
        /\sbackground-clip:\s*text;/g,
        " -webkit-background-clip: text; background-clip: text;",
      )),
    e
  );
}
function tT(e) {
  const { cssText: t } = e;
  if (t.split('"').length < 3) return t;
  const s = ["@import", `url(${JSON.stringify(e.href)})`];
  return (
    e.layerName === ""
      ? s.push("layer")
      : e.layerName && s.push(`layer(${e.layerName})`),
    e.supportsText && s.push(`supports(${e.supportsText})`),
    e.media.length && s.push(e.media.mediaText),
    s.join(" ") + ";"
  );
}
function Za(e) {
  try {
    const t = e.rules || e.cssRules;
    return t ? eT(Array.from(t, r0).join("")) : null;
  } catch {
    return null;
  }
}
function nT(e) {
  let t = "";
  for (let s = 0; s < e.style.length; s++) {
    const i = e.style,
      a = i[s],
      u = i.getPropertyPriority(a);
    t += `${a}:${i.getPropertyValue(a)}${u ? " !important" : ""};`;
  }
  return `${e.selectorText} { ${t} }`;
}
function r0(e) {
  let t;
  if (sT(e))
    try {
      t = Za(e.styleSheet) || tT(e);
    } catch {}
  else if (iT(e)) {
    let s = e.cssText;
    const i = e.selectorText.includes(":"),
      a = typeof e.style.all == "string" && e.style.all;
    if ((a && (s = nT(e)), i && (s = rT(s)), i || a)) return s;
  }
  return t || e.cssText;
}
function rT(e) {
  const t = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
  return e.replace(t, "$1\\$2");
}
function sT(e) {
  return "styleSheet" in e;
}
function iT(e) {
  return "selectorText" in e;
}
class s0 {
  constructor() {
    ((this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap()));
  }
  getId(t) {
    if (!t) return -1;
    const s = Yi([
      this,
      "access",
      (i) => i.getMeta,
      "call",
      (i) => i(t),
      "optionalAccess",
      (i) => i.id,
    ]);
    return fd(s, () => -1);
  }
  getNode(t) {
    return this.idNodeMap.get(t) || null;
  }
  getIds() {
    return Array.from(this.idNodeMap.keys());
  }
  getMeta(t) {
    return this.nodeMetaMap.get(t) || null;
  }
  removeNodeFromMap(t) {
    const s = this.getId(t);
    (this.idNodeMap.delete(s),
      t.childNodes && t.childNodes.forEach((i) => this.removeNodeFromMap(i)));
  }
  has(t) {
    return this.idNodeMap.has(t);
  }
  hasNode(t) {
    return this.nodeMetaMap.has(t);
  }
  add(t, s) {
    const i = s.id;
    (this.idNodeMap.set(i, t), this.nodeMetaMap.set(t, s));
  }
  replace(t, s) {
    const i = this.getNode(t);
    if (i) {
      const a = this.nodeMetaMap.get(i);
      a && this.nodeMetaMap.set(s, a);
    }
    this.idNodeMap.set(t, s);
  }
  reset() {
    ((this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap()));
  }
}
function oT() {
  return new s0();
}
function wl({ maskInputOptions: e, tagName: t, type: s }) {
  return (
    t === "OPTION" && (t = "SELECT"),
    !!(
      e[t.toLowerCase()] ||
      (s && e[s]) ||
      s === "password" ||
      (t === "INPUT" && !s && e.text)
    )
  );
}
function Ki({ isMasked: e, element: t, value: s, maskInputFn: i }) {
  let a = s || "";
  return e ? (i && (a = i(a, t)), "*".repeat(a.length)) : a;
}
function $s(e) {
  return e.toLowerCase();
}
function pd(e) {
  return e.toUpperCase();
}
const Xm = "__rrweb_original__";
function aT(e) {
  const t = e.getContext("2d");
  if (!t) return !0;
  const s = 50;
  for (let i = 0; i < e.width; i += s)
    for (let a = 0; a < e.height; a += s) {
      const u = t.getImageData,
        d = Xm in u ? u[Xm] : u;
      if (
        new Uint32Array(
          d.call(t, i, a, Math.min(s, e.width - i), Math.min(s, e.height - a))
            .data.buffer,
        ).some((h) => h !== 0)
      )
        return !1;
    }
  return !0;
}
function Wd(e) {
  const t = e.type;
  return e.hasAttribute("data-rr-is-password") ? "password" : t ? $s(t) : null;
}
function el(e, t, s) {
  return t === "INPUT" && (s === "radio" || s === "checkbox")
    ? e.getAttribute("value") || ""
    : e.value;
}
function i0(e, t) {
  let s;
  try {
    s = new URL(
      e,
      fd(t, () => window.location.href),
    );
  } catch {
    return null;
  }
  const i = /\.([0-9a-z]+)(?:$)/i,
    a = s.pathname.match(i);
  return fd(Yi([a, "optionalAccess", (u) => u[1]]), () => null);
}
const Jm = {};
function o0(e) {
  const t = Jm[e];
  if (t) return t;
  const s = window.document;
  let i = window[e];
  if (s && typeof s.createElement == "function")
    try {
      const a = s.createElement("iframe");
      ((a.hidden = !0), s.head.appendChild(a));
      const u = a.contentWindow;
      (u && u[e] && (i = u[e]), s.head.removeChild(a));
    } catch {}
  return (Jm[e] = i.bind(window));
}
function hd(...e) {
  return o0("setTimeout")(...e);
}
function a0(...e) {
  return o0("clearTimeout")(...e);
}
function l0(e) {
  try {
    return e.contentDocument;
  } catch {}
}
let lT = 1;
const uT = new RegExp("[^a-z0-9-_:]"),
  Xi = -2;
function qd() {
  return lT++;
}
function cT(e) {
  if (e instanceof HTMLFormElement) return "form";
  const t = $s(e.tagName);
  return uT.test(t) ? "div" : t;
}
function dT(e) {
  let t = "";
  return (
    e.indexOf("//") > -1
      ? (t = e.split("/").slice(0, 3).join("/"))
      : (t = e.split("/")[0]),
    (t = t.split("?")[0]),
    t
  );
}
let Is, Qm;
const fT = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
  pT = /^(?:[a-z+]+:)?\/\//i,
  hT = /^www\..*/i,
  mT = /^(data:)([^,]*),(.*)/i;
function tl(e, t) {
  return (e || "").replace(fT, (s, i, a, u, d, p) => {
    const h = a || d || p,
      g = i || u || "";
    if (!h) return s;
    if (pT.test(h) || hT.test(h)) return `url(${g}${h}${g})`;
    if (mT.test(h)) return `url(${g}${h}${g})`;
    if (h[0] === "/") return `url(${g}${dT(t) + h}${g})`;
    const _ = t.split("/"),
      y = h.split("/");
    _.pop();
    for (const E of y) E !== "." && (E === ".." ? _.pop() : _.push(E));
    return `url(${g}${_.join("/")}${g})`;
  });
}
const gT = /^[^ \t\n\r\u000c]+/,
  yT = /^[, \t\n\r\u000c]+/;
function vT(e, t) {
  if (t.trim() === "") return t;
  let s = 0;
  function i(u) {
    let d;
    const p = u.exec(t.substring(s));
    return p ? ((d = p[0]), (s += d.length), d) : "";
  }
  const a = [];
  for (; i(yT), !(s >= t.length); ) {
    let u = i(gT);
    if (u.slice(-1) === ",")
      ((u = Ns(e, u.substring(0, u.length - 1))), a.push(u));
    else {
      let d = "";
      u = Ns(e, u);
      let p = !1;
      for (;;) {
        const h = t.charAt(s);
        if (h === "") {
          a.push((u + d).trim());
          break;
        } else if (p) h === ")" && (p = !1);
        else if (h === ",") {
          ((s += 1), a.push((u + d).trim()));
          break;
        } else h === "(" && (p = !0);
        ((d += h), (s += 1));
      }
    }
  }
  return a.join(", ");
}
const Zm = new WeakMap();
function Ns(e, t) {
  return !t || t.trim() === "" ? t : xl(e, t);
}
function _T(e) {
  return !!(e.tagName === "svg" || e.ownerSVGElement);
}
function xl(e, t) {
  let s = Zm.get(e);
  if ((s || ((s = e.createElement("a")), Zm.set(e, s)), !t)) t = "";
  else if (t.startsWith("blob:") || t.startsWith("data:")) return t;
  return (s.setAttribute("href", t), s.href);
}
function u0(e, t, s, i, a, u) {
  return (
    i &&
    (s === "src" ||
    (s === "href" && !(t === "use" && i[0] === "#")) ||
    (s === "xlink:href" && i[0] !== "#") ||
    (s === "background" && (t === "table" || t === "td" || t === "th"))
      ? Ns(e, i)
      : s === "srcset"
        ? vT(e, i)
        : s === "style"
          ? tl(i, xl(e))
          : t === "object" && s === "data"
            ? Ns(e, i)
            : typeof u == "function"
              ? u(s, i, a)
              : i)
  );
}
function c0(e, t, s) {
  return (e === "video" || e === "audio") && t === "autoplay";
}
function ST(e, t, s, i) {
  try {
    if (i && e.matches(i)) return !1;
    if (typeof t == "string") {
      if (e.classList.contains(t)) return !0;
    } else
      for (let a = e.classList.length; a--; ) {
        const u = e.classList[a];
        if (t.test(u)) return !0;
      }
    if (s) return e.matches(s);
  } catch {}
  return !1;
}
function ET(e, t) {
  for (let s = e.classList.length; s--; ) {
    const i = e.classList[s];
    if (t.test(i)) return !0;
  }
  return !1;
}
function Hr(e, t, s = 1 / 0, i = 0) {
  return !e || e.nodeType !== e.ELEMENT_NODE || i > s
    ? -1
    : t(e)
      ? i
      : Hr(e.parentNode, t, s, i + 1);
}
function bs(e, t) {
  return (s) => {
    const i = s;
    if (i === null) return !1;
    try {
      if (e) {
        if (typeof e == "string") {
          if (i.matches(`.${e}`)) return !0;
        } else if (ET(i, e)) return !0;
      }
      return !!(t && i.matches(t));
    } catch {
      return !1;
    }
  };
}
function Bs(e, t, s, i, a, u) {
  try {
    const d = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
    if (d === null) return !1;
    if (d.tagName === "INPUT") {
      const g = d.getAttribute("autocomplete");
      if (
        [
          "current-password",
          "new-password",
          "cc-number",
          "cc-exp",
          "cc-exp-month",
          "cc-exp-year",
          "cc-csc",
        ].includes(g)
      )
        return !0;
    }
    let p = -1,
      h = -1;
    if (u) {
      if (((h = Hr(d, bs(i, a))), h < 0)) return !0;
      p = Hr(d, bs(t, s), h >= 0 ? h : 1 / 0);
    } else {
      if (((p = Hr(d, bs(t, s))), p < 0)) return !1;
      h = Hr(d, bs(i, a), p >= 0 ? p : 1 / 0);
    }
    return p >= 0 ? (h >= 0 ? p <= h : !0) : h >= 0 ? !1 : !!u;
  } catch {}
  return !!u;
}
function wT(e, t, s) {
  const i = e.contentWindow;
  if (!i) return;
  let a = !1,
    u;
  try {
    u = i.document.readyState;
  } catch {
    return;
  }
  if (u !== "complete") {
    const p = hd(() => {
      a || (t(), (a = !0));
    }, s);
    e.addEventListener("load", () => {
      (a0(p), (a = !0), t());
    });
    return;
  }
  const d = "about:blank";
  if (i.location.href !== d || e.src === d || e.src === "")
    return (hd(t, 0), e.addEventListener("load", t));
  e.addEventListener("load", t);
}
function xT(e, t, s) {
  let i = !1,
    a;
  try {
    a = e.sheet;
  } catch {
    return;
  }
  if (a) return;
  const u = hd(() => {
    i || (t(), (i = !0));
  }, s);
  e.addEventListener("load", () => {
    (a0(u), (i = !0), t());
  });
}
function kT(e, t) {
  const {
      doc: s,
      mirror: i,
      blockClass: a,
      blockSelector: u,
      unblockSelector: d,
      maskAllText: p,
      maskAttributeFn: h,
      maskTextClass: g,
      unmaskTextClass: _,
      maskTextSelector: y,
      unmaskTextSelector: E,
      inlineStylesheet: C,
      maskInputOptions: T = {},
      maskTextFn: N,
      maskInputFn: x,
      dataURLOptions: D = {},
      inlineImages: B,
      recordCanvas: V,
      keepIframeSrcFn: K,
      newlyAddedElement: R = !1,
    } = t,
    A = TT(s, i);
  switch (e.nodeType) {
    case e.DOCUMENT_NODE:
      return e.compatMode !== "CSS1Compat"
        ? { type: ot.Document, childNodes: [], compatMode: e.compatMode }
        : { type: ot.Document, childNodes: [] };
    case e.DOCUMENT_TYPE_NODE:
      return {
        type: ot.DocumentType,
        name: e.name,
        publicId: e.publicId,
        systemId: e.systemId,
        rootId: A,
      };
    case e.ELEMENT_NODE:
      return CT(e, {
        doc: s,
        blockClass: a,
        blockSelector: u,
        unblockSelector: d,
        inlineStylesheet: C,
        maskAttributeFn: h,
        maskInputOptions: T,
        maskInputFn: x,
        dataURLOptions: D,
        inlineImages: B,
        recordCanvas: V,
        keepIframeSrcFn: K,
        newlyAddedElement: R,
        rootId: A,
        maskTextClass: g,
        unmaskTextClass: _,
        maskTextSelector: y,
        unmaskTextSelector: E,
      });
    case e.TEXT_NODE:
      return IT(e, {
        doc: s,
        maskAllText: p,
        maskTextClass: g,
        unmaskTextClass: _,
        maskTextSelector: y,
        unmaskTextSelector: E,
        maskTextFn: N,
        maskInputOptions: T,
        maskInputFn: x,
        rootId: A,
      });
    case e.CDATA_SECTION_NODE:
      return { type: ot.CDATA, textContent: "", rootId: A };
    case e.COMMENT_NODE:
      return { type: ot.Comment, textContent: e.textContent || "", rootId: A };
    default:
      return !1;
  }
}
function TT(e, t) {
  if (!t.hasNode(e)) return;
  const s = t.getId(e);
  return s === 1 ? void 0 : s;
}
function IT(e, t) {
  const {
      maskAllText: s,
      maskTextClass: i,
      unmaskTextClass: a,
      maskTextSelector: u,
      unmaskTextSelector: d,
      maskTextFn: p,
      maskInputOptions: h,
      maskInputFn: g,
      rootId: _,
    } = t,
    y = e.parentNode && e.parentNode.tagName;
  let E = e.textContent;
  const C = y === "STYLE" ? !0 : void 0,
    T = y === "SCRIPT" ? !0 : void 0,
    N = y === "TEXTAREA" ? !0 : void 0;
  if (C && E) {
    try {
      e.nextSibling ||
        e.previousSibling ||
        (Yi([
          e,
          "access",
          (D) => D.parentNode,
          "access",
          (D) => D.sheet,
          "optionalAccess",
          (D) => D.cssRules,
        ]) &&
          (E = Za(e.parentNode.sheet)));
    } catch (D) {
      console.warn(
        `Cannot get CSS styles from text's parentNode. Error: ${D}`,
        e,
      );
    }
    E = tl(E, xl(t.doc));
  }
  T && (E = "SCRIPT_PLACEHOLDER");
  const x = Bs(e, i, u, a, d, s);
  if (
    (!C &&
      !T &&
      !N &&
      E &&
      x &&
      (E = p ? p(E, e.parentElement) : E.replace(/[\S]/g, "*")),
    N &&
      E &&
      (h.textarea || x) &&
      (E = g ? g(E, e.parentNode) : E.replace(/[\S]/g, "*")),
    y === "OPTION" && E)
  ) {
    const D = wl({ type: null, tagName: y, maskInputOptions: h });
    E = Ki({
      isMasked: Bs(e, i, u, a, d, D),
      element: e,
      value: E,
      maskInputFn: g,
    });
  }
  return { type: ot.Text, textContent: E || "", isStyle: C, rootId: _ };
}
function CT(e, t) {
  const {
      doc: s,
      blockClass: i,
      blockSelector: a,
      unblockSelector: u,
      inlineStylesheet: d,
      maskInputOptions: p = {},
      maskAttributeFn: h,
      maskInputFn: g,
      dataURLOptions: _ = {},
      inlineImages: y,
      recordCanvas: E,
      keepIframeSrcFn: C,
      newlyAddedElement: T = !1,
      rootId: N,
      maskTextClass: x,
      unmaskTextClass: D,
      maskTextSelector: B,
      unmaskTextSelector: V,
    } = t,
    K = ST(e, i, a, u),
    R = cT(e);
  let A = {};
  const q = e.attributes.length;
  for (let z = 0; z < q; z++) {
    const G = e.attributes[z];
    G.name &&
      !c0(R, G.name, G.value) &&
      (A[G.name] = u0(s, R, $s(G.name), G.value, e, h));
  }
  if (R === "link" && d) {
    const z = Array.from(s.styleSheets).find((se) => se.href === e.href);
    let G = null;
    (z && (G = Za(z)),
      G &&
        ((A.rel = null),
        (A.href = null),
        (A.crossorigin = null),
        (A._cssText = tl(G, z.href))));
  }
  if (
    R === "style" &&
    e.sheet &&
    !(e.innerText || e.textContent || "").trim().length
  ) {
    const z = Za(e.sheet);
    z && (A._cssText = tl(z, xl(s)));
  }
  if (R === "input" || R === "textarea" || R === "select" || R === "option") {
    const z = e,
      G = Wd(z),
      se = el(z, pd(R), G),
      ee = z.checked;
    if (G !== "submit" && G !== "button" && se) {
      const ye = Bs(
        z,
        x,
        B,
        D,
        V,
        wl({ type: G, tagName: pd(R), maskInputOptions: p }),
      );
      A.value = Ki({ isMasked: ye, element: z, value: se, maskInputFn: g });
    }
    ee && (A.checked = ee);
  }
  if (
    (R === "option" &&
      (e.selected && !p.select ? (A.selected = !0) : delete A.selected),
    R === "canvas" && E)
  ) {
    if (e.__context === "2d")
      aT(e) || (A.rr_dataURL = e.toDataURL(_.type, _.quality));
    else if (!("__context" in e)) {
      const z = e.toDataURL(_.type, _.quality),
        G = s.createElement("canvas");
      ((G.width = e.width), (G.height = e.height));
      const se = G.toDataURL(_.type, _.quality);
      z !== se && (A.rr_dataURL = z);
    }
  }
  if (R === "img" && y) {
    Is || ((Is = s.createElement("canvas")), (Qm = Is.getContext("2d")));
    const z = e,
      G = z.currentSrc || z.getAttribute("src") || "<unknown-src>",
      se = z.crossOrigin,
      ee = () => {
        z.removeEventListener("load", ee);
        try {
          ((Is.width = z.naturalWidth),
            (Is.height = z.naturalHeight),
            Qm.drawImage(z, 0, 0),
            (A.rr_dataURL = Is.toDataURL(_.type, _.quality)));
        } catch (ye) {
          if (z.crossOrigin !== "anonymous") {
            ((z.crossOrigin = "anonymous"),
              z.complete && z.naturalWidth !== 0
                ? ee()
                : z.addEventListener("load", ee));
            return;
          } else console.warn(`Cannot inline img src=${G}! Error: ${ye}`);
        }
        z.crossOrigin === "anonymous" &&
          (se ? (A.crossOrigin = se) : z.removeAttribute("crossorigin"));
      };
    z.complete && z.naturalWidth !== 0 ? ee() : z.addEventListener("load", ee);
  }
  if (
    ((R === "audio" || R === "video") &&
      ((A.rr_mediaState = e.paused ? "paused" : "played"),
      (A.rr_mediaCurrentTime = e.currentTime)),
    T ||
      (e.scrollLeft && (A.rr_scrollLeft = e.scrollLeft),
      e.scrollTop && (A.rr_scrollTop = e.scrollTop)),
    K)
  ) {
    const { width: z, height: G } = e.getBoundingClientRect();
    A = { class: A.class, rr_width: `${z}px`, rr_height: `${G}px` };
  }
  R === "iframe" &&
    !C(A.src) &&
    (!K && !l0(e) && (A.rr_src = A.src), delete A.src);
  let X;
  try {
    customElements.get(R) && (X = !0);
  } catch {}
  return {
    type: ot.Element,
    tagName: R,
    attributes: A,
    childNodes: [],
    isSVG: _T(e) || void 0,
    needBlock: K,
    rootId: N,
    isCustom: X,
  };
}
function He(e) {
  return e == null ? "" : e.toLowerCase();
}
function NT(e, t) {
  if (t.comment && e.type === ot.Comment) return !0;
  if (e.type === ot.Element) {
    if (
      t.script &&
      (e.tagName === "script" ||
        (e.tagName === "link" &&
          (e.attributes.rel === "preload" ||
            e.attributes.rel === "modulepreload")) ||
        (e.tagName === "link" &&
          e.attributes.rel === "prefetch" &&
          typeof e.attributes.href == "string" &&
          i0(e.attributes.href) === "js"))
    )
      return !0;
    if (
      t.headFavicon &&
      ((e.tagName === "link" && e.attributes.rel === "shortcut icon") ||
        (e.tagName === "meta" &&
          (He(e.attributes.name).match(/^msapplication-tile(image|color)$/) ||
            He(e.attributes.name) === "application-name" ||
            He(e.attributes.rel) === "icon" ||
            He(e.attributes.rel) === "apple-touch-icon" ||
            He(e.attributes.rel) === "shortcut icon")))
    )
      return !0;
    if (e.tagName === "meta") {
      if (
        t.headMetaDescKeywords &&
        He(e.attributes.name).match(/^description|keywords$/)
      )
        return !0;
      if (
        t.headMetaSocial &&
        (He(e.attributes.property).match(/^(og|twitter|fb):/) ||
          He(e.attributes.name).match(/^(og|twitter):/) ||
          He(e.attributes.name) === "pinterest")
      )
        return !0;
      if (
        t.headMetaRobots &&
        (He(e.attributes.name) === "robots" ||
          He(e.attributes.name) === "googlebot" ||
          He(e.attributes.name) === "bingbot")
      )
        return !0;
      if (t.headMetaHttpEquiv && e.attributes["http-equiv"] !== void 0)
        return !0;
      if (
        t.headMetaAuthorship &&
        (He(e.attributes.name) === "author" ||
          He(e.attributes.name) === "generator" ||
          He(e.attributes.name) === "framework" ||
          He(e.attributes.name) === "publisher" ||
          He(e.attributes.name) === "progid" ||
          He(e.attributes.property).match(/^article:/) ||
          He(e.attributes.property).match(/^product:/))
      )
        return !0;
      if (
        t.headMetaVerification &&
        (He(e.attributes.name) === "google-site-verification" ||
          He(e.attributes.name) === "yandex-verification" ||
          He(e.attributes.name) === "csrf-token" ||
          He(e.attributes.name) === "p:domain_verify" ||
          He(e.attributes.name) === "verify-v1" ||
          He(e.attributes.name) === "verification" ||
          He(e.attributes.name) === "shopify-checkout-api-token")
      )
        return !0;
    }
  }
  return !1;
}
function Rs(e, t) {
  const {
    doc: s,
    mirror: i,
    blockClass: a,
    blockSelector: u,
    unblockSelector: d,
    maskAllText: p,
    maskTextClass: h,
    unmaskTextClass: g,
    maskTextSelector: _,
    unmaskTextSelector: y,
    skipChild: E = !1,
    inlineStylesheet: C = !0,
    maskInputOptions: T = {},
    maskAttributeFn: N,
    maskTextFn: x,
    maskInputFn: D,
    slimDOMOptions: B,
    dataURLOptions: V = {},
    inlineImages: K = !1,
    recordCanvas: R = !1,
    onSerialize: A,
    onIframeLoad: q,
    iframeLoadTimeout: X = 5e3,
    onStylesheetLoad: z,
    stylesheetLoadTimeout: G = 5e3,
    keepIframeSrcFn: se = () => !1,
    newlyAddedElement: ee = !1,
  } = t;
  let { preserveWhiteSpace: ye = !0 } = t;
  const Ie = kT(e, {
    doc: s,
    mirror: i,
    blockClass: a,
    blockSelector: u,
    maskAllText: p,
    unblockSelector: d,
    maskTextClass: h,
    unmaskTextClass: g,
    maskTextSelector: _,
    unmaskTextSelector: y,
    inlineStylesheet: C,
    maskInputOptions: T,
    maskAttributeFn: N,
    maskTextFn: x,
    maskInputFn: D,
    dataURLOptions: V,
    inlineImages: K,
    recordCanvas: R,
    keepIframeSrcFn: se,
    newlyAddedElement: ee,
  });
  if (!Ie) return (console.warn(e, "not serialized"), null);
  let Pe;
  i.hasNode(e)
    ? (Pe = i.getId(e))
    : NT(Ie, B) ||
        (!ye &&
          Ie.type === ot.Text &&
          !Ie.isStyle &&
          !Ie.textContent.replace(/^\s+|\s+$/gm, "").length)
      ? (Pe = Xi)
      : (Pe = qd());
  const re = Object.assign(Ie, { id: Pe });
  if ((i.add(e, re), Pe === Xi)) return null;
  A && A(e);
  let ge = !E;
  if (re.type === ot.Element) {
    ((ge = ge && !re.needBlock), delete re.needBlock);
    const P = e.shadowRoot;
    P && Bi(P) && (re.isShadowHost = !0);
  }
  if ((re.type === ot.Document || re.type === ot.Element) && ge) {
    B.headWhitespace &&
      re.type === ot.Element &&
      re.tagName === "head" &&
      (ye = !1);
    const P = {
      doc: s,
      mirror: i,
      blockClass: a,
      blockSelector: u,
      maskAllText: p,
      unblockSelector: d,
      maskTextClass: h,
      unmaskTextClass: g,
      maskTextSelector: _,
      unmaskTextSelector: y,
      skipChild: E,
      inlineStylesheet: C,
      maskInputOptions: T,
      maskAttributeFn: N,
      maskTextFn: x,
      maskInputFn: D,
      slimDOMOptions: B,
      dataURLOptions: V,
      inlineImages: K,
      recordCanvas: R,
      preserveWhiteSpace: ye,
      onSerialize: A,
      onIframeLoad: q,
      iframeLoadTimeout: X,
      onStylesheetLoad: z,
      stylesheetLoadTimeout: G,
      keepIframeSrcFn: se,
    };
    for (const J of Array.from(e.childNodes)) {
      const H = Rs(J, P);
      H && re.childNodes.push(H);
    }
    if (Zk(e) && e.shadowRoot)
      for (const J of Array.from(e.shadowRoot.childNodes)) {
        const H = Rs(J, P);
        H && (Bi(e.shadowRoot) && (H.isShadow = !0), re.childNodes.push(H));
      }
  }
  return (
    e.parentNode && $i(e.parentNode) && Bi(e.parentNode) && (re.isShadow = !0),
    re.type === ot.Element &&
      re.tagName === "iframe" &&
      wT(
        e,
        () => {
          const P = l0(e);
          if (P && q) {
            const J = Rs(P, {
              doc: P,
              mirror: i,
              blockClass: a,
              blockSelector: u,
              unblockSelector: d,
              maskAllText: p,
              maskTextClass: h,
              unmaskTextClass: g,
              maskTextSelector: _,
              unmaskTextSelector: y,
              skipChild: !1,
              inlineStylesheet: C,
              maskInputOptions: T,
              maskAttributeFn: N,
              maskTextFn: x,
              maskInputFn: D,
              slimDOMOptions: B,
              dataURLOptions: V,
              inlineImages: K,
              recordCanvas: R,
              preserveWhiteSpace: ye,
              onSerialize: A,
              onIframeLoad: q,
              iframeLoadTimeout: X,
              onStylesheetLoad: z,
              stylesheetLoadTimeout: G,
              keepIframeSrcFn: se,
            });
            J && q(e, J);
          }
        },
        X,
      ),
    re.type === ot.Element &&
      re.tagName === "link" &&
      typeof re.attributes.rel == "string" &&
      (re.attributes.rel === "stylesheet" ||
        (re.attributes.rel === "preload" &&
          typeof re.attributes.href == "string" &&
          i0(re.attributes.href) === "css")) &&
      xT(
        e,
        () => {
          if (z) {
            const P = Rs(e, {
              doc: s,
              mirror: i,
              blockClass: a,
              blockSelector: u,
              unblockSelector: d,
              maskAllText: p,
              maskTextClass: h,
              unmaskTextClass: g,
              maskTextSelector: _,
              unmaskTextSelector: y,
              skipChild: !1,
              inlineStylesheet: C,
              maskInputOptions: T,
              maskAttributeFn: N,
              maskTextFn: x,
              maskInputFn: D,
              slimDOMOptions: B,
              dataURLOptions: V,
              inlineImages: K,
              recordCanvas: R,
              preserveWhiteSpace: ye,
              onSerialize: A,
              onIframeLoad: q,
              iframeLoadTimeout: X,
              onStylesheetLoad: z,
              stylesheetLoadTimeout: G,
              keepIframeSrcFn: se,
            });
            P && z(e, P);
          }
        },
        G,
      ),
    re
  );
}
function bT(e, t) {
  const {
    mirror: s = new s0(),
    blockClass: i = "rr-block",
    blockSelector: a = null,
    unblockSelector: u = null,
    maskAllText: d = !1,
    maskTextClass: p = "rr-mask",
    unmaskTextClass: h = null,
    maskTextSelector: g = null,
    unmaskTextSelector: _ = null,
    inlineStylesheet: y = !0,
    inlineImages: E = !1,
    recordCanvas: C = !1,
    maskAllInputs: T = !1,
    maskAttributeFn: N,
    maskTextFn: x,
    maskInputFn: D,
    slimDOM: B = !1,
    dataURLOptions: V,
    preserveWhiteSpace: K,
    onSerialize: R,
    onIframeLoad: A,
    iframeLoadTimeout: q,
    onStylesheetLoad: X,
    stylesheetLoadTimeout: z,
    keepIframeSrcFn: G = () => !1,
  } = t || {};
  return Rs(e, {
    doc: e,
    mirror: s,
    blockClass: i,
    blockSelector: a,
    unblockSelector: u,
    maskAllText: d,
    maskTextClass: p,
    unmaskTextClass: h,
    maskTextSelector: g,
    unmaskTextSelector: _,
    skipChild: !1,
    inlineStylesheet: y,
    maskInputOptions:
      T === !0
        ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
          }
        : T === !1
          ? {}
          : T,
    maskAttributeFn: N,
    maskTextFn: x,
    maskInputFn: D,
    slimDOMOptions:
      B === !0 || B === "all"
        ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaDescKeywords: B === "all",
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaAuthorship: !0,
            headMetaVerification: !0,
          }
        : B === !1
          ? {}
          : B,
    dataURLOptions: V,
    inlineImages: E,
    recordCanvas: C,
    preserveWhiteSpace: K,
    onSerialize: R,
    onIframeLoad: A,
    iframeLoadTimeout: q,
    onStylesheetLoad: X,
    stylesheetLoadTimeout: z,
    keepIframeSrcFn: G,
    newlyAddedElement: !1,
  });
}
function pr(e) {
  let t,
    s = e[0],
    i = 1;
  for (; i < e.length; ) {
    const a = e[i],
      u = e[i + 1];
    if (
      ((i += 2), (a === "optionalAccess" || a === "optionalCall") && s == null)
    )
      return;
    a === "access" || a === "optionalAccess"
      ? ((t = s), (s = u(s)))
      : (a === "call" || a === "optionalCall") &&
        ((s = u((...d) => s.call(t, ...d))), (t = void 0));
  }
  return s;
}
function Ct(e, t, s = document) {
  const i = { capture: !0, passive: !0 };
  return (s.addEventListener(e, t, i), () => s.removeEventListener(e, t, i));
}
const Cs = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
let eg = {
  map: {},
  getId() {
    return (console.error(Cs), -1);
  },
  getNode() {
    return (console.error(Cs), null);
  },
  removeNodeFromMap() {
    console.error(Cs);
  },
  has() {
    return (console.error(Cs), !1);
  },
  reset() {
    console.error(Cs);
  },
};
typeof window < "u" &&
  window.Proxy &&
  window.Reflect &&
  (eg = new Proxy(eg, {
    get(e, t, s) {
      return (t === "map" && console.error(Cs), Reflect.get(e, t, s));
    },
  }));
function Ji(e, t, s = {}) {
  let i = null,
    a = 0;
  return function (...u) {
    const d = Date.now();
    !a && s.leading === !1 && (a = d);
    const p = t - (d - a),
      h = this;
    p <= 0 || p > t
      ? (i && (LT(i), (i = null)), (a = d), e.apply(h, u))
      : !i &&
        s.trailing !== !1 &&
        (i = kl(() => {
          ((a = s.leading === !1 ? 0 : Date.now()), (i = null), e.apply(h, u));
        }, p));
  };
}
function d0(e, t, s, i, a = window) {
  const u = a.Object.getOwnPropertyDescriptor(e, t);
  return (
    a.Object.defineProperty(
      e,
      t,
      i
        ? s
        : {
            set(d) {
              (kl(() => {
                s.set.call(this, d);
              }, 0),
                u && u.set && u.set.call(this, d));
            },
          },
    ),
    () => d0(e, t, u || {}, !0)
  );
}
function Vd(e, t, s) {
  try {
    if (!(t in e)) return () => {};
    const i = e[t],
      a = s(i);
    return (
      typeof a == "function" &&
        ((a.prototype = a.prototype || {}),
        Object.defineProperties(a, {
          __rrweb_original__: { enumerable: !1, value: i },
        })),
      (e[t] = a),
      () => {
        e[t] = i;
      }
    );
  } catch {
    return () => {};
  }
}
let nl = Date.now;
/[1-9][0-9]{12}/.test(Date.now().toString()) ||
  (nl = () => new Date().getTime());
function f0(e) {
  const t = e.document;
  return {
    left: t.scrollingElement
      ? t.scrollingElement.scrollLeft
      : e.pageXOffset !== void 0
        ? e.pageXOffset
        : pr([
            t,
            "optionalAccess",
            (s) => s.documentElement,
            "access",
            (s) => s.scrollLeft,
          ]) ||
          pr([
            t,
            "optionalAccess",
            (s) => s.body,
            "optionalAccess",
            (s) => s.parentElement,
            "optionalAccess",
            (s) => s.scrollLeft,
          ]) ||
          pr([
            t,
            "optionalAccess",
            (s) => s.body,
            "optionalAccess",
            (s) => s.scrollLeft,
          ]) ||
          0,
    top: t.scrollingElement
      ? t.scrollingElement.scrollTop
      : e.pageYOffset !== void 0
        ? e.pageYOffset
        : pr([
            t,
            "optionalAccess",
            (s) => s.documentElement,
            "access",
            (s) => s.scrollTop,
          ]) ||
          pr([
            t,
            "optionalAccess",
            (s) => s.body,
            "optionalAccess",
            (s) => s.parentElement,
            "optionalAccess",
            (s) => s.scrollTop,
          ]) ||
          pr([
            t,
            "optionalAccess",
            (s) => s.body,
            "optionalAccess",
            (s) => s.scrollTop,
          ]) ||
          0,
  };
}
function p0() {
  return (
    window.innerHeight ||
    (document.documentElement && document.documentElement.clientHeight) ||
    (document.body && document.body.clientHeight)
  );
}
function h0() {
  return (
    window.innerWidth ||
    (document.documentElement && document.documentElement.clientWidth) ||
    (document.body && document.body.clientWidth)
  );
}
function m0(e) {
  return e ? (e.nodeType === e.ELEMENT_NODE ? e : e.parentElement) : null;
}
function Ht(e, t, s, i, a) {
  if (!e) return !1;
  const u = m0(e);
  if (!u) return !1;
  const d = bs(t, s);
  if (!a) {
    const g = i && u.matches(i);
    return d(u) && !g;
  }
  const p = Hr(u, d);
  let h = -1;
  return p < 0
    ? !1
    : (i && (h = Hr(u, bs(null, i))), p > -1 && h < 0 ? !0 : p < h);
}
function RT(e, t) {
  return t.getId(e) !== -1;
}
function Pc(e, t) {
  return t.getId(e) === Xi;
}
function g0(e, t) {
  if ($i(e)) return !1;
  const s = t.getId(e);
  return t.has(s)
    ? e.parentNode && e.parentNode.nodeType === e.DOCUMENT_NODE
      ? !1
      : e.parentNode
        ? g0(e.parentNode, t)
        : !0
    : !0;
}
function md(e) {
  return !!e.changedTouches;
}
function MT(e = window) {
  ("NodeList" in e &&
    !e.NodeList.prototype.forEach &&
    (e.NodeList.prototype.forEach = Array.prototype.forEach),
    "DOMTokenList" in e &&
      !e.DOMTokenList.prototype.forEach &&
      (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
    Node.prototype.contains ||
      (Node.prototype.contains = (...t) => {
        let s = t[0];
        if (!(0 in t)) throw new TypeError("1 argument is required");
        do if (this === s) return !0;
        while ((s = s && s.parentNode));
        return !1;
      }));
}
function y0(e, t) {
  return !!(e.nodeName === "IFRAME" && t.getMeta(e));
}
function v0(e, t) {
  return !!(
    e.nodeName === "LINK" &&
    e.nodeType === e.ELEMENT_NODE &&
    e.getAttribute &&
    e.getAttribute("rel") === "stylesheet" &&
    t.getMeta(e)
  );
}
function gd(e) {
  return !!pr([e, "optionalAccess", (t) => t.shadowRoot]);
}
class OT {
  constructor() {
    ((this.id = 1),
      (this.styleIDMap = new WeakMap()),
      (this.idStyleMap = new Map()));
  }
  getId(t) {
    return g1(this.styleIDMap.get(t), () => -1);
  }
  has(t) {
    return this.styleIDMap.has(t);
  }
  add(t, s) {
    if (this.has(t)) return this.getId(t);
    let i;
    return (
      s === void 0 ? (i = this.id++) : (i = s),
      this.styleIDMap.set(t, i),
      this.idStyleMap.set(i, t),
      i
    );
  }
  getStyle(t) {
    return this.idStyleMap.get(t) || null;
  }
  reset() {
    ((this.styleIDMap = new WeakMap()),
      (this.idStyleMap = new Map()),
      (this.id = 1));
  }
  generateId() {
    return this.id++;
  }
}
function _0(e) {
  let t = null;
  return (
    pr([
      e,
      "access",
      (s) => s.getRootNode,
      "optionalCall",
      (s) => s(),
      "optionalAccess",
      (s) => s.nodeType,
    ]) === Node.DOCUMENT_FRAGMENT_NODE &&
      e.getRootNode().host &&
      (t = e.getRootNode().host),
    t
  );
}
function DT(e) {
  let t = e,
    s;
  for (; (s = _0(t)); ) t = s;
  return t;
}
function AT(e) {
  const t = e.ownerDocument;
  if (!t) return !1;
  const s = DT(e);
  return t.contains(s);
}
function S0(e) {
  const t = e.ownerDocument;
  return t ? t.contains(e) || AT(e) : !1;
}
const tg = {};
function Gd(e) {
  const t = tg[e];
  if (t) return t;
  const s = window.document;
  let i = window[e];
  if (s && typeof s.createElement == "function")
    try {
      const a = s.createElement("iframe");
      ((a.hidden = !0), s.head.appendChild(a));
      const u = a.contentWindow;
      (u && u[e] && (i = u[e]), s.head.removeChild(a));
    } catch {}
  return (tg[e] = i.bind(window));
}
function PT(...e) {
  return Gd("requestAnimationFrame")(...e);
}
function kl(...e) {
  return Gd("setTimeout")(...e);
}
function LT(...e) {
  return Gd("clearTimeout")(...e);
}
var Ee = ((e) => (
    (e[(e.DomContentLoaded = 0)] = "DomContentLoaded"),
    (e[(e.Load = 1)] = "Load"),
    (e[(e.FullSnapshot = 2)] = "FullSnapshot"),
    (e[(e.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
    (e[(e.Meta = 4)] = "Meta"),
    (e[(e.Custom = 5)] = "Custom"),
    (e[(e.Plugin = 6)] = "Plugin"),
    e
  ))(Ee || {}),
  me = ((e) => (
    (e[(e.Mutation = 0)] = "Mutation"),
    (e[(e.MouseMove = 1)] = "MouseMove"),
    (e[(e.MouseInteraction = 2)] = "MouseInteraction"),
    (e[(e.Scroll = 3)] = "Scroll"),
    (e[(e.ViewportResize = 4)] = "ViewportResize"),
    (e[(e.Input = 5)] = "Input"),
    (e[(e.TouchMove = 6)] = "TouchMove"),
    (e[(e.MediaInteraction = 7)] = "MediaInteraction"),
    (e[(e.StyleSheetRule = 8)] = "StyleSheetRule"),
    (e[(e.CanvasMutation = 9)] = "CanvasMutation"),
    (e[(e.Font = 10)] = "Font"),
    (e[(e.Log = 11)] = "Log"),
    (e[(e.Drag = 12)] = "Drag"),
    (e[(e.StyleDeclaration = 13)] = "StyleDeclaration"),
    (e[(e.Selection = 14)] = "Selection"),
    (e[(e.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
    (e[(e.CustomElement = 16)] = "CustomElement"),
    e
  ))(me || {}),
  It = ((e) => (
    (e[(e.MouseUp = 0)] = "MouseUp"),
    (e[(e.MouseDown = 1)] = "MouseDown"),
    (e[(e.Click = 2)] = "Click"),
    (e[(e.ContextMenu = 3)] = "ContextMenu"),
    (e[(e.DblClick = 4)] = "DblClick"),
    (e[(e.Focus = 5)] = "Focus"),
    (e[(e.Blur = 6)] = "Blur"),
    (e[(e.TouchStart = 7)] = "TouchStart"),
    (e[(e.TouchMove_Departed = 8)] = "TouchMove_Departed"),
    (e[(e.TouchEnd = 9)] = "TouchEnd"),
    (e[(e.TouchCancel = 10)] = "TouchCancel"),
    e
  ))(It || {}),
  Pn = ((e) => (
    (e[(e.Mouse = 0)] = "Mouse"),
    (e[(e.Pen = 1)] = "Pen"),
    (e[(e.Touch = 2)] = "Touch"),
    e
  ))(Pn || {}),
  ng;
(function (e) {
  ((e[(e.Document = 0)] = "Document"),
    (e[(e.DocumentType = 1)] = "DocumentType"),
    (e[(e.Element = 2)] = "Element"),
    (e[(e.Text = 3)] = "Text"),
    (e[(e.CDATA = 4)] = "CDATA"),
    (e[(e.Comment = 5)] = "Comment"));
})(ng || (ng = {}));
var rg;
(function (e) {
  ((e[(e.PLACEHOLDER = 0)] = "PLACEHOLDER"),
    (e[(e.ELEMENT_NODE = 1)] = "ELEMENT_NODE"),
    (e[(e.ATTRIBUTE_NODE = 2)] = "ATTRIBUTE_NODE"),
    (e[(e.TEXT_NODE = 3)] = "TEXT_NODE"),
    (e[(e.CDATA_SECTION_NODE = 4)] = "CDATA_SECTION_NODE"),
    (e[(e.ENTITY_REFERENCE_NODE = 5)] = "ENTITY_REFERENCE_NODE"),
    (e[(e.ENTITY_NODE = 6)] = "ENTITY_NODE"),
    (e[(e.PROCESSING_INSTRUCTION_NODE = 7)] = "PROCESSING_INSTRUCTION_NODE"),
    (e[(e.COMMENT_NODE = 8)] = "COMMENT_NODE"),
    (e[(e.DOCUMENT_NODE = 9)] = "DOCUMENT_NODE"),
    (e[(e.DOCUMENT_TYPE_NODE = 10)] = "DOCUMENT_TYPE_NODE"),
    (e[(e.DOCUMENT_FRAGMENT_NODE = 11)] = "DOCUMENT_FRAGMENT_NODE"));
})(rg || (rg = {}));
function Yd(e) {
  try {
    return e.contentDocument;
  } catch {}
}
function jT(e) {
  try {
    return e.contentWindow;
  } catch {}
}
function FT(e) {
  let t,
    s = e[0],
    i = 1;
  for (; i < e.length; ) {
    const a = e[i],
      u = e[i + 1];
    if (
      ((i += 2), (a === "optionalAccess" || a === "optionalCall") && s == null)
    )
      return;
    a === "access" || a === "optionalAccess"
      ? ((t = s), (s = u(s)))
      : (a === "call" || a === "optionalCall") &&
        ((s = u((...d) => s.call(t, ...d))), (t = void 0));
  }
  return s;
}
function sg(e) {
  return "__ln" in e;
}
class UT {
  constructor() {
    ((this.length = 0), (this.head = null), (this.tail = null));
  }
  get(t) {
    if (t >= this.length) throw new Error("Position outside of list range");
    let s = this.head;
    for (let i = 0; i < t; i++)
      s = FT([s, "optionalAccess", (a) => a.next]) || null;
    return s;
  }
  addNode(t) {
    const s = { value: t, previous: null, next: null };
    if (((t.__ln = s), t.previousSibling && sg(t.previousSibling))) {
      const i = t.previousSibling.__ln.next;
      ((s.next = i),
        (s.previous = t.previousSibling.__ln),
        (t.previousSibling.__ln.next = s),
        i && (i.previous = s));
    } else if (
      t.nextSibling &&
      sg(t.nextSibling) &&
      t.nextSibling.__ln.previous
    ) {
      const i = t.nextSibling.__ln.previous;
      ((s.previous = i),
        (s.next = t.nextSibling.__ln),
        (t.nextSibling.__ln.previous = s),
        i && (i.next = s));
    } else
      (this.head && (this.head.previous = s),
        (s.next = this.head),
        (this.head = s));
    (s.next === null && (this.tail = s), this.length++);
  }
  removeNode(t) {
    const s = t.__ln;
    this.head &&
      (s.previous
        ? ((s.previous.next = s.next),
          s.next ? (s.next.previous = s.previous) : (this.tail = s.previous))
        : ((this.head = s.next),
          this.head ? (this.head.previous = null) : (this.tail = null)),
      t.__ln && delete t.__ln,
      this.length--);
  }
}
const ig = (e, t) => `${e}@${t}`;
class zT {
  constructor() {
    ((this.frozen = !1),
      (this.locked = !1),
      (this.texts = []),
      (this.attributes = []),
      (this.attributeMap = new WeakMap()),
      (this.removes = []),
      (this.mapRemoves = []),
      (this.movedMap = {}),
      (this.addedSet = new Set()),
      (this.movedSet = new Set()),
      (this.droppedSet = new Set()),
      (this.processMutations = (t) => {
        (t.forEach(this.processMutation), this.emit());
      }),
      (this.emit = () => {
        if (this.frozen || this.locked) return;
        const t = [],
          s = new Set(),
          i = new UT(),
          a = (h) => {
            let g = h,
              _ = Xi;
            for (; _ === Xi; )
              ((g = g && g.nextSibling), (_ = g && this.mirror.getId(g)));
            return _;
          },
          u = (h) => {
            if (!h.parentNode || !S0(h)) return;
            const g = $i(h.parentNode)
                ? this.mirror.getId(_0(h))
                : this.mirror.getId(h.parentNode),
              _ = a(h);
            if (g === -1 || _ === -1) return i.addNode(h);
            const y = Rs(h, {
              doc: this.doc,
              mirror: this.mirror,
              blockClass: this.blockClass,
              blockSelector: this.blockSelector,
              maskAllText: this.maskAllText,
              unblockSelector: this.unblockSelector,
              maskTextClass: this.maskTextClass,
              unmaskTextClass: this.unmaskTextClass,
              maskTextSelector: this.maskTextSelector,
              unmaskTextSelector: this.unmaskTextSelector,
              skipChild: !0,
              newlyAddedElement: !0,
              inlineStylesheet: this.inlineStylesheet,
              maskInputOptions: this.maskInputOptions,
              maskAttributeFn: this.maskAttributeFn,
              maskTextFn: this.maskTextFn,
              maskInputFn: this.maskInputFn,
              slimDOMOptions: this.slimDOMOptions,
              dataURLOptions: this.dataURLOptions,
              recordCanvas: this.recordCanvas,
              inlineImages: this.inlineImages,
              onSerialize: (E) => {
                (y0(E, this.mirror) &&
                  !Ht(
                    E,
                    this.blockClass,
                    this.blockSelector,
                    this.unblockSelector,
                    !1,
                  ) &&
                  this.iframeManager.addIframe(E),
                  v0(E, this.mirror) &&
                    this.stylesheetManager.trackLinkElement(E),
                  gd(h) &&
                    this.shadowDomManager.addShadowRoot(
                      h.shadowRoot,
                      this.doc,
                    ));
              },
              onIframeLoad: (E, C) => {
                Ht(
                  E,
                  this.blockClass,
                  this.blockSelector,
                  this.unblockSelector,
                  !1,
                ) ||
                  (this.iframeManager.attachIframe(E, C),
                  E.contentWindow &&
                    this.canvasManager.addWindow(E.contentWindow),
                  this.shadowDomManager.observeAttachShadow(E));
              },
              onStylesheetLoad: (E, C) => {
                this.stylesheetManager.attachLinkElement(E, C);
              },
            });
            y && (t.push({ parentId: g, nextId: _, node: y }), s.add(y.id));
          };
        for (; this.mapRemoves.length; )
          this.mirror.removeNodeFromMap(this.mapRemoves.shift());
        for (const h of this.movedSet)
          (og(this.removes, h, this.mirror) &&
            !this.movedSet.has(h.parentNode)) ||
            u(h);
        for (const h of this.addedSet)
          (!ag(this.droppedSet, h) && !og(this.removes, h, this.mirror)) ||
          ag(this.movedSet, h)
            ? u(h)
            : this.droppedSet.add(h);
        let d = null;
        for (; i.length; ) {
          let h = null;
          if (d) {
            const g = this.mirror.getId(d.value.parentNode),
              _ = a(d.value);
            g !== -1 && _ !== -1 && (h = d);
          }
          if (!h) {
            let g = i.tail;
            for (; g; ) {
              const _ = g;
              if (((g = g.previous), _)) {
                const y = this.mirror.getId(_.value.parentNode);
                if (a(_.value) === -1) continue;
                if (y !== -1) {
                  h = _;
                  break;
                } else {
                  const C = _.value;
                  if (
                    C.parentNode &&
                    C.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                  ) {
                    const T = C.parentNode.host;
                    if (this.mirror.getId(T) !== -1) {
                      h = _;
                      break;
                    }
                  }
                }
              }
            }
          }
          if (!h) {
            for (; i.head; ) i.removeNode(i.head.value);
            break;
          }
          ((d = h.previous), i.removeNode(h.value), u(h.value));
        }
        const p = {
          texts: this.texts
            .map((h) => ({ id: this.mirror.getId(h.node), value: h.value }))
            .filter((h) => !s.has(h.id))
            .filter((h) => this.mirror.has(h.id)),
          attributes: this.attributes
            .map((h) => {
              const { attributes: g } = h;
              if (typeof g.style == "string") {
                const _ = JSON.stringify(h.styleDiff),
                  y = JSON.stringify(h._unchangedStyles);
                _.length < g.style.length &&
                  (_ + y).split("var(").length ===
                    g.style.split("var(").length &&
                  (g.style = h.styleDiff);
              }
              return { id: this.mirror.getId(h.node), attributes: g };
            })
            .filter((h) => !s.has(h.id))
            .filter((h) => this.mirror.has(h.id)),
          removes: this.removes,
          adds: t,
        };
        (!p.texts.length &&
          !p.attributes.length &&
          !p.removes.length &&
          !p.adds.length) ||
          ((this.texts = []),
          (this.attributes = []),
          (this.attributeMap = new WeakMap()),
          (this.removes = []),
          (this.addedSet = new Set()),
          (this.movedSet = new Set()),
          (this.droppedSet = new Set()),
          (this.movedMap = {}),
          this.mutationCb(p));
      }),
      (this.processMutation = (t) => {
        if (!Pc(t.target, this.mirror))
          switch (t.type) {
            case "characterData": {
              const s = t.target.textContent;
              !Ht(
                t.target,
                this.blockClass,
                this.blockSelector,
                this.unblockSelector,
                !1,
              ) &&
                s !== t.oldValue &&
                this.texts.push({
                  value:
                    Bs(
                      t.target,
                      this.maskTextClass,
                      this.maskTextSelector,
                      this.unmaskTextClass,
                      this.unmaskTextSelector,
                      this.maskAllText,
                    ) && s
                      ? this.maskTextFn
                        ? this.maskTextFn(s, m0(t.target))
                        : s.replace(/[\S]/g, "*")
                      : s,
                  node: t.target,
                });
              break;
            }
            case "attributes": {
              const s = t.target;
              let i = t.attributeName,
                a = t.target.getAttribute(i);
              if (i === "value") {
                const d = Wd(s),
                  p = s.tagName;
                a = el(s, p, d);
                const h = wl({
                    maskInputOptions: this.maskInputOptions,
                    tagName: p,
                    type: d,
                  }),
                  g = Bs(
                    t.target,
                    this.maskTextClass,
                    this.maskTextSelector,
                    this.unmaskTextClass,
                    this.unmaskTextSelector,
                    h,
                  );
                a = Ki({
                  isMasked: g,
                  element: s,
                  value: a,
                  maskInputFn: this.maskInputFn,
                });
              }
              if (
                Ht(
                  t.target,
                  this.blockClass,
                  this.blockSelector,
                  this.unblockSelector,
                  !1,
                ) ||
                a === t.oldValue
              )
                return;
              let u = this.attributeMap.get(t.target);
              if (
                s.tagName === "IFRAME" &&
                i === "src" &&
                !this.keepIframeSrcFn(a)
              )
                if (!Yd(s)) i = "rr_src";
                else return;
              if (
                (u ||
                  ((u = {
                    node: t.target,
                    attributes: {},
                    styleDiff: {},
                    _unchangedStyles: {},
                  }),
                  this.attributes.push(u),
                  this.attributeMap.set(t.target, u)),
                i === "type" &&
                  s.tagName === "INPUT" &&
                  (t.oldValue || "").toLowerCase() === "password" &&
                  s.setAttribute("data-rr-is-password", "true"),
                !c0(s.tagName, i) &&
                  ((u.attributes[i] = u0(
                    this.doc,
                    $s(s.tagName),
                    $s(i),
                    a,
                    s,
                    this.maskAttributeFn,
                  )),
                  i === "style"))
              ) {
                if (!this.unattachedDoc)
                  try {
                    this.unattachedDoc =
                      document.implementation.createHTMLDocument();
                  } catch {
                    this.unattachedDoc = this.doc;
                  }
                const d = this.unattachedDoc.createElement("span");
                t.oldValue && d.setAttribute("style", t.oldValue);
                for (const p of Array.from(s.style)) {
                  const h = s.style.getPropertyValue(p),
                    g = s.style.getPropertyPriority(p);
                  h !== d.style.getPropertyValue(p) ||
                  g !== d.style.getPropertyPriority(p)
                    ? g === ""
                      ? (u.styleDiff[p] = h)
                      : (u.styleDiff[p] = [h, g])
                    : (u._unchangedStyles[p] = [h, g]);
                }
                for (const p of Array.from(d.style))
                  s.style.getPropertyValue(p) === "" && (u.styleDiff[p] = !1);
              }
              break;
            }
            case "childList": {
              if (
                Ht(
                  t.target,
                  this.blockClass,
                  this.blockSelector,
                  this.unblockSelector,
                  !0,
                )
              )
                return;
              (t.addedNodes.forEach((s) => this.genAdds(s, t.target)),
                t.removedNodes.forEach((s) => {
                  const i = this.mirror.getId(s),
                    a = $i(t.target)
                      ? this.mirror.getId(t.target.host)
                      : this.mirror.getId(t.target);
                  Ht(
                    t.target,
                    this.blockClass,
                    this.blockSelector,
                    this.unblockSelector,
                    !1,
                  ) ||
                    Pc(s, this.mirror) ||
                    !RT(s, this.mirror) ||
                    (this.addedSet.has(s)
                      ? (yd(this.addedSet, s), this.droppedSet.add(s))
                      : (this.addedSet.has(t.target) && i === -1) ||
                        g0(t.target, this.mirror) ||
                        (this.movedSet.has(s) && this.movedMap[ig(i, a)]
                          ? yd(this.movedSet, s)
                          : this.removes.push({
                              parentId: a,
                              id: i,
                              isShadow:
                                $i(t.target) && Bi(t.target) ? !0 : void 0,
                            })),
                    this.mapRemoves.push(s));
                }));
              break;
            }
          }
      }),
      (this.genAdds = (t, s) => {
        if (
          !this.processedNodeManager.inOtherBuffer(t, this) &&
          !(this.addedSet.has(t) || this.movedSet.has(t))
        ) {
          if (this.mirror.hasNode(t)) {
            if (Pc(t, this.mirror)) return;
            this.movedSet.add(t);
            let i = null;
            (s && this.mirror.hasNode(s) && (i = this.mirror.getId(s)),
              i &&
                i !== -1 &&
                (this.movedMap[ig(this.mirror.getId(t), i)] = !0));
          } else (this.addedSet.add(t), this.droppedSet.delete(t));
          Ht(
            t,
            this.blockClass,
            this.blockSelector,
            this.unblockSelector,
            !1,
          ) ||
            (t.childNodes.forEach((i) => this.genAdds(i)),
            gd(t) &&
              t.shadowRoot.childNodes.forEach((i) => {
                (this.processedNodeManager.add(i, this), this.genAdds(i, t));
              }));
        }
      }));
  }
  init(t) {
    [
      "mutationCb",
      "blockClass",
      "blockSelector",
      "unblockSelector",
      "maskAllText",
      "maskTextClass",
      "unmaskTextClass",
      "maskTextSelector",
      "unmaskTextSelector",
      "inlineStylesheet",
      "maskInputOptions",
      "maskAttributeFn",
      "maskTextFn",
      "maskInputFn",
      "keepIframeSrcFn",
      "recordCanvas",
      "inlineImages",
      "slimDOMOptions",
      "dataURLOptions",
      "doc",
      "mirror",
      "iframeManager",
      "stylesheetManager",
      "shadowDomManager",
      "canvasManager",
      "processedNodeManager",
    ].forEach((s) => {
      this[s] = t[s];
    });
  }
  freeze() {
    ((this.frozen = !0), this.canvasManager.freeze());
  }
  unfreeze() {
    ((this.frozen = !1), this.canvasManager.unfreeze(), this.emit());
  }
  isFrozen() {
    return this.frozen;
  }
  lock() {
    ((this.locked = !0), this.canvasManager.lock());
  }
  unlock() {
    ((this.locked = !1), this.canvasManager.unlock(), this.emit());
  }
  reset() {
    (this.shadowDomManager.reset(), this.canvasManager.reset());
  }
}
function yd(e, t) {
  (e.delete(t), t.childNodes.forEach((s) => yd(e, s)));
}
function og(e, t, s) {
  return e.length === 0 ? !1 : $T(e, t, s);
}
function $T(e, t, s) {
  let i = t.parentNode;
  for (; i; ) {
    const a = s.getId(i);
    if (e.some((u) => u.id === a)) return !0;
    i = i.parentNode;
  }
  return !1;
}
function ag(e, t) {
  return e.size === 0 ? !1 : E0(e, t);
}
function E0(e, t) {
  const { parentNode: s } = t;
  return s ? (e.has(s) ? !0 : E0(e, s)) : !1;
}
let Hi;
function BT(e) {
  Hi = e;
}
function HT() {
  Hi = void 0;
}
const Re = (e) =>
  Hi
    ? (...s) => {
        try {
          return e(...s);
        } catch (i) {
          if (Hi && Hi(i) === !0) return () => {};
          throw i;
        }
      }
    : e;
function hn(e) {
  let t,
    s = e[0],
    i = 1;
  for (; i < e.length; ) {
    const a = e[i],
      u = e[i + 1];
    if (
      ((i += 2), (a === "optionalAccess" || a === "optionalCall") && s == null)
    )
      return;
    a === "access" || a === "optionalAccess"
      ? ((t = s), (s = u(s)))
      : (a === "call" || a === "optionalCall") &&
        ((s = u((...d) => s.call(t, ...d))), (t = void 0));
  }
  return s;
}
const Ms = [];
function ao(e) {
  try {
    if ("composedPath" in e) {
      const t = e.composedPath();
      if (t.length) return t[0];
    } else if ("path" in e && e.path.length) return e.path[0];
  } catch {}
  return e && e.target;
}
function w0(e, t) {
  const s = new zT();
  (Ms.push(s), s.init(e));
  let i = window.MutationObserver || window.__rrMutationObserver;
  const a = hn([
    window,
    "optionalAccess",
    (d) => d.Zone,
    "optionalAccess",
    (d) => d.__symbol__,
    "optionalCall",
    (d) => d("MutationObserver"),
  ]);
  a && window[a] && (i = window[a]);
  const u = new i(
    Re((d) => {
      (e.onMutation && e.onMutation(d) === !1) || s.processMutations.bind(s)(d);
    }),
  );
  return (
    u.observe(t, {
      attributes: !0,
      attributeOldValue: !0,
      characterData: !0,
      characterDataOldValue: !0,
      childList: !0,
      subtree: !0,
    }),
    u
  );
}
function WT({ mousemoveCb: e, sampling: t, doc: s, mirror: i }) {
  if (t.mousemove === !1) return () => {};
  const a = typeof t.mousemove == "number" ? t.mousemove : 50,
    u = typeof t.mousemoveCallback == "number" ? t.mousemoveCallback : 500;
  let d = [],
    p;
  const h = Ji(
      Re((y) => {
        const E = Date.now() - p;
        (e(
          d.map((C) => ((C.timeOffset -= E), C)),
          y,
        ),
          (d = []),
          (p = null));
      }),
      u,
    ),
    g = Re(
      Ji(
        Re((y) => {
          const E = ao(y),
            { clientX: C, clientY: T } = md(y) ? y.changedTouches[0] : y;
          (p || (p = nl()),
            d.push({ x: C, y: T, id: i.getId(E), timeOffset: nl() - p }),
            h(
              typeof DragEvent < "u" && y instanceof DragEvent
                ? me.Drag
                : y instanceof MouseEvent
                  ? me.MouseMove
                  : me.TouchMove,
            ));
        }),
        a,
        { trailing: !1 },
      ),
    ),
    _ = [Ct("mousemove", g, s), Ct("touchmove", g, s), Ct("drag", g, s)];
  return Re(() => {
    _.forEach((y) => y());
  });
}
function qT({
  mouseInteractionCb: e,
  doc: t,
  mirror: s,
  blockClass: i,
  blockSelector: a,
  unblockSelector: u,
  sampling: d,
}) {
  if (d.mouseInteraction === !1) return () => {};
  const p =
      d.mouseInteraction === !0 || d.mouseInteraction === void 0
        ? {}
        : d.mouseInteraction,
    h = [];
  let g = null;
  const _ = (y) => (E) => {
    const C = ao(E);
    if (Ht(C, i, a, u, !0)) return;
    let T = null,
      N = y;
    if ("pointerType" in E) {
      switch (E.pointerType) {
        case "mouse":
          T = Pn.Mouse;
          break;
        case "touch":
          T = Pn.Touch;
          break;
        case "pen":
          T = Pn.Pen;
          break;
      }
      T === Pn.Touch
        ? It[y] === It.MouseDown
          ? (N = "TouchStart")
          : It[y] === It.MouseUp && (N = "TouchEnd")
        : Pn.Pen;
    } else md(E) && (T = Pn.Touch);
    T !== null
      ? ((g = T),
        ((N.startsWith("Touch") && T === Pn.Touch) ||
          (N.startsWith("Mouse") && T === Pn.Mouse)) &&
          (T = null))
      : It[y] === It.Click && ((T = g), (g = null));
    const x = md(E) ? E.changedTouches[0] : E;
    if (!x) return;
    const D = s.getId(C),
      { clientX: B, clientY: V } = x;
    Re(e)({
      type: It[N],
      id: D,
      x: B,
      y: V,
      ...(T !== null && { pointerType: T }),
    });
  };
  return (
    Object.keys(It)
      .filter(
        (y) =>
          Number.isNaN(Number(y)) && !y.endsWith("_Departed") && p[y] !== !1,
      )
      .forEach((y) => {
        let E = $s(y);
        const C = _(y);
        if (window.PointerEvent)
          switch (It[y]) {
            case It.MouseDown:
            case It.MouseUp:
              E = E.replace("mouse", "pointer");
              break;
            case It.TouchStart:
            case It.TouchEnd:
              return;
          }
        h.push(Ct(E, C, t));
      }),
    Re(() => {
      h.forEach((y) => y());
    })
  );
}
function x0({
  scrollCb: e,
  doc: t,
  mirror: s,
  blockClass: i,
  blockSelector: a,
  unblockSelector: u,
  sampling: d,
}) {
  const p = Re(
    Ji(
      Re((h) => {
        const g = ao(h);
        if (!g || Ht(g, i, a, u, !0)) return;
        const _ = s.getId(g);
        if (g === t && t.defaultView) {
          const y = f0(t.defaultView);
          e({ id: _, x: y.left, y: y.top });
        } else e({ id: _, x: g.scrollLeft, y: g.scrollTop });
      }),
      d.scroll || 100,
    ),
  );
  return Ct("scroll", p, t);
}
function VT({ viewportResizeCb: e }, { win: t }) {
  let s = -1,
    i = -1;
  const a = Re(
    Ji(
      Re(() => {
        const u = p0(),
          d = h0();
        (s !== u || i !== d) &&
          (e({ width: Number(d), height: Number(u) }), (s = u), (i = d));
      }),
      200,
    ),
  );
  return Ct("resize", a, t);
}
const GT = ["INPUT", "TEXTAREA", "SELECT"],
  lg = new WeakMap();
function YT({
  inputCb: e,
  doc: t,
  mirror: s,
  blockClass: i,
  blockSelector: a,
  unblockSelector: u,
  ignoreClass: d,
  ignoreSelector: p,
  maskInputOptions: h,
  maskInputFn: g,
  sampling: _,
  userTriggeredOnInput: y,
  maskTextClass: E,
  unmaskTextClass: C,
  maskTextSelector: T,
  unmaskTextSelector: N,
}) {
  function x(q) {
    let X = ao(q);
    const z = q.isTrusted,
      G = X && pd(X.tagName);
    if (
      (G === "OPTION" && (X = X.parentElement),
      !X || !G || GT.indexOf(G) < 0 || Ht(X, i, a, u, !0))
    )
      return;
    const se = X;
    if (se.classList.contains(d) || (p && se.matches(p))) return;
    const ee = Wd(X);
    let ye = el(se, G, ee),
      Ie = !1;
    const Pe = wl({ maskInputOptions: h, tagName: G, type: ee }),
      re = Bs(X, E, T, C, N, Pe);
    ((ee === "radio" || ee === "checkbox") && (Ie = X.checked),
      (ye = Ki({ isMasked: re, element: X, value: ye, maskInputFn: g })),
      D(
        X,
        y
          ? { text: ye, isChecked: Ie, userTriggered: z }
          : { text: ye, isChecked: Ie },
      ));
    const ge = X.name;
    ee === "radio" &&
      ge &&
      Ie &&
      t.querySelectorAll(`input[type="radio"][name="${ge}"]`).forEach((P) => {
        if (P !== X) {
          const J = Ki({
            isMasked: re,
            element: P,
            value: el(P, G, ee),
            maskInputFn: g,
          });
          D(
            P,
            y
              ? { text: J, isChecked: !Ie, userTriggered: !1 }
              : { text: J, isChecked: !Ie },
          );
        }
      });
  }
  function D(q, X) {
    const z = lg.get(q);
    if (!z || z.text !== X.text || z.isChecked !== X.isChecked) {
      lg.set(q, X);
      const G = s.getId(q);
      Re(e)({ ...X, id: G });
    }
  }
  const V = (_.input === "last" ? ["change"] : ["input", "change"]).map((q) =>
      Ct(q, Re(x), t),
    ),
    K = t.defaultView;
  if (!K)
    return () => {
      V.forEach((q) => q());
    };
  const R = K.Object.getOwnPropertyDescriptor(
      K.HTMLInputElement.prototype,
      "value",
    ),
    A = [
      [K.HTMLInputElement.prototype, "value"],
      [K.HTMLInputElement.prototype, "checked"],
      [K.HTMLSelectElement.prototype, "value"],
      [K.HTMLTextAreaElement.prototype, "value"],
      [K.HTMLSelectElement.prototype, "selectedIndex"],
      [K.HTMLOptionElement.prototype, "selected"],
    ];
  return (
    R &&
      R.set &&
      V.push(
        ...A.map((q) =>
          d0(
            q[0],
            q[1],
            {
              set() {
                Re(x)({ target: this, isTrusted: !1 });
              },
            },
            !1,
            K,
          ),
        ),
      ),
    Re(() => {
      V.forEach((q) => q());
    })
  );
}
function rl(e) {
  const t = [];
  function s(i, a) {
    if (
      (Ma("CSSGroupingRule") && i.parentRule instanceof CSSGroupingRule) ||
      (Ma("CSSMediaRule") && i.parentRule instanceof CSSMediaRule) ||
      (Ma("CSSSupportsRule") && i.parentRule instanceof CSSSupportsRule) ||
      (Ma("CSSConditionRule") && i.parentRule instanceof CSSConditionRule)
    ) {
      const d = Array.from(i.parentRule.cssRules).indexOf(i);
      a.unshift(d);
    } else if (i.parentStyleSheet) {
      const d = Array.from(i.parentStyleSheet.cssRules).indexOf(i);
      a.unshift(d);
    }
    return a;
  }
  return s(e, t);
}
function hr(e, t, s) {
  let i, a;
  return e
    ? (e.ownerNode ? (i = t.getId(e.ownerNode)) : (a = s.getId(e)),
      { styleId: a, id: i })
    : {};
}
function KT(
  { styleSheetRuleCb: e, mirror: t, stylesheetManager: s },
  { win: i },
) {
  if (!i.CSSStyleSheet || !i.CSSStyleSheet.prototype) return () => {};
  const a = i.CSSStyleSheet.prototype.insertRule;
  i.CSSStyleSheet.prototype.insertRule = new Proxy(a, {
    apply: Re((_, y, E) => {
      const [C, T] = E,
        { id: N, styleId: x } = hr(y, t, s.styleMirror);
      return (
        ((N && N !== -1) || (x && x !== -1)) &&
          e({ id: N, styleId: x, adds: [{ rule: C, index: T }] }),
        _.apply(y, E)
      );
    }),
  });
  const u = i.CSSStyleSheet.prototype.deleteRule;
  i.CSSStyleSheet.prototype.deleteRule = new Proxy(u, {
    apply: Re((_, y, E) => {
      const [C] = E,
        { id: T, styleId: N } = hr(y, t, s.styleMirror);
      return (
        ((T && T !== -1) || (N && N !== -1)) &&
          e({ id: T, styleId: N, removes: [{ index: C }] }),
        _.apply(y, E)
      );
    }),
  });
  let d;
  i.CSSStyleSheet.prototype.replace &&
    ((d = i.CSSStyleSheet.prototype.replace),
    (i.CSSStyleSheet.prototype.replace = new Proxy(d, {
      apply: Re((_, y, E) => {
        const [C] = E,
          { id: T, styleId: N } = hr(y, t, s.styleMirror);
        return (
          ((T && T !== -1) || (N && N !== -1)) &&
            e({ id: T, styleId: N, replace: C }),
          _.apply(y, E)
        );
      }),
    })));
  let p;
  i.CSSStyleSheet.prototype.replaceSync &&
    ((p = i.CSSStyleSheet.prototype.replaceSync),
    (i.CSSStyleSheet.prototype.replaceSync = new Proxy(p, {
      apply: Re((_, y, E) => {
        const [C] = E,
          { id: T, styleId: N } = hr(y, t, s.styleMirror);
        return (
          ((T && T !== -1) || (N && N !== -1)) &&
            e({ id: T, styleId: N, replaceSync: C }),
          _.apply(y, E)
        );
      }),
    })));
  const h = {};
  Oa("CSSGroupingRule")
    ? (h.CSSGroupingRule = i.CSSGroupingRule)
    : (Oa("CSSMediaRule") && (h.CSSMediaRule = i.CSSMediaRule),
      Oa("CSSConditionRule") && (h.CSSConditionRule = i.CSSConditionRule),
      Oa("CSSSupportsRule") && (h.CSSSupportsRule = i.CSSSupportsRule));
  const g = {};
  return (
    Object.entries(h).forEach(([_, y]) => {
      ((g[_] = {
        insertRule: y.prototype.insertRule,
        deleteRule: y.prototype.deleteRule,
      }),
        (y.prototype.insertRule = new Proxy(g[_].insertRule, {
          apply: Re((E, C, T) => {
            const [N, x] = T,
              { id: D, styleId: B } = hr(C.parentStyleSheet, t, s.styleMirror);
            return (
              ((D && D !== -1) || (B && B !== -1)) &&
                e({
                  id: D,
                  styleId: B,
                  adds: [{ rule: N, index: [...rl(C), x || 0] }],
                }),
              E.apply(C, T)
            );
          }),
        })),
        (y.prototype.deleteRule = new Proxy(g[_].deleteRule, {
          apply: Re((E, C, T) => {
            const [N] = T,
              { id: x, styleId: D } = hr(C.parentStyleSheet, t, s.styleMirror);
            return (
              ((x && x !== -1) || (D && D !== -1)) &&
                e({ id: x, styleId: D, removes: [{ index: [...rl(C), N] }] }),
              E.apply(C, T)
            );
          }),
        })));
    }),
    Re(() => {
      ((i.CSSStyleSheet.prototype.insertRule = a),
        (i.CSSStyleSheet.prototype.deleteRule = u),
        d && (i.CSSStyleSheet.prototype.replace = d),
        p && (i.CSSStyleSheet.prototype.replaceSync = p),
        Object.entries(h).forEach(([_, y]) => {
          ((y.prototype.insertRule = g[_].insertRule),
            (y.prototype.deleteRule = g[_].deleteRule));
        }));
    })
  );
}
function k0({ mirror: e, stylesheetManager: t }, s) {
  let i = null;
  s.nodeName === "#document" ? (i = e.getId(s)) : (i = e.getId(s.host));
  const a =
      s.nodeName === "#document"
        ? hn([
            s,
            "access",
            (d) => d.defaultView,
            "optionalAccess",
            (d) => d.Document,
          ])
        : hn([
            s,
            "access",
            (d) => d.ownerDocument,
            "optionalAccess",
            (d) => d.defaultView,
            "optionalAccess",
            (d) => d.ShadowRoot,
          ]),
    u = hn([a, "optionalAccess", (d) => d.prototype])
      ? Object.getOwnPropertyDescriptor(
          hn([a, "optionalAccess", (d) => d.prototype]),
          "adoptedStyleSheets",
        )
      : void 0;
  return i === null || i === -1 || !a || !u
    ? () => {}
    : (Object.defineProperty(s, "adoptedStyleSheets", {
        configurable: u.configurable,
        enumerable: u.enumerable,
        get() {
          return hn([
            u,
            "access",
            (d) => d.get,
            "optionalAccess",
            (d) => d.call,
            "call",
            (d) => d(this),
          ]);
        },
        set(d) {
          const p = hn([
            u,
            "access",
            (h) => h.set,
            "optionalAccess",
            (h) => h.call,
            "call",
            (h) => h(this, d),
          ]);
          if (i !== null && i !== -1)
            try {
              t.adoptStyleSheets(d, i);
            } catch {}
          return p;
        },
      }),
      Re(() => {
        Object.defineProperty(s, "adoptedStyleSheets", {
          configurable: u.configurable,
          enumerable: u.enumerable,
          get: u.get,
          set: u.set,
        });
      }));
}
function XT(
  {
    styleDeclarationCb: e,
    mirror: t,
    ignoreCSSAttributes: s,
    stylesheetManager: i,
  },
  { win: a },
) {
  const u = a.CSSStyleDeclaration.prototype.setProperty;
  a.CSSStyleDeclaration.prototype.setProperty = new Proxy(u, {
    apply: Re((p, h, g) => {
      const [_, y, E] = g;
      if (s.has(_)) return u.apply(h, [_, y, E]);
      const { id: C, styleId: T } = hr(
        hn([
          h,
          "access",
          (N) => N.parentRule,
          "optionalAccess",
          (N) => N.parentStyleSheet,
        ]),
        t,
        i.styleMirror,
      );
      return (
        ((C && C !== -1) || (T && T !== -1)) &&
          e({
            id: C,
            styleId: T,
            set: { property: _, value: y, priority: E },
            index: rl(h.parentRule),
          }),
        p.apply(h, g)
      );
    }),
  });
  const d = a.CSSStyleDeclaration.prototype.removeProperty;
  return (
    (a.CSSStyleDeclaration.prototype.removeProperty = new Proxy(d, {
      apply: Re((p, h, g) => {
        const [_] = g;
        if (s.has(_)) return d.apply(h, [_]);
        const { id: y, styleId: E } = hr(
          hn([
            h,
            "access",
            (C) => C.parentRule,
            "optionalAccess",
            (C) => C.parentStyleSheet,
          ]),
          t,
          i.styleMirror,
        );
        return (
          ((y && y !== -1) || (E && E !== -1)) &&
            e({
              id: y,
              styleId: E,
              remove: { property: _ },
              index: rl(h.parentRule),
            }),
          p.apply(h, g)
        );
      }),
    })),
    Re(() => {
      ((a.CSSStyleDeclaration.prototype.setProperty = u),
        (a.CSSStyleDeclaration.prototype.removeProperty = d));
    })
  );
}
function JT({
  mediaInteractionCb: e,
  blockClass: t,
  blockSelector: s,
  unblockSelector: i,
  mirror: a,
  sampling: u,
  doc: d,
}) {
  const p = Re((g) =>
      Ji(
        Re((_) => {
          const y = ao(_);
          if (!y || Ht(y, t, s, i, !0)) return;
          const { currentTime: E, volume: C, muted: T, playbackRate: N } = y;
          e({
            type: g,
            id: a.getId(y),
            currentTime: E,
            volume: C,
            muted: T,
            playbackRate: N,
          });
        }),
        u.media || 500,
      ),
    ),
    h = [
      Ct("play", p(0), d),
      Ct("pause", p(1), d),
      Ct("seeked", p(2), d),
      Ct("volumechange", p(3), d),
      Ct("ratechange", p(4), d),
    ];
  return Re(() => {
    h.forEach((g) => g());
  });
}
function QT({ fontCb: e, doc: t }) {
  const s = t.defaultView;
  if (!s) return () => {};
  const i = [],
    a = new WeakMap(),
    u = s.FontFace;
  s.FontFace = function (h, g, _) {
    const y = new u(h, g, _);
    return (
      a.set(y, {
        family: h,
        buffer: typeof g != "string",
        descriptors: _,
        fontSource:
          typeof g == "string"
            ? g
            : JSON.stringify(Array.from(new Uint8Array(g))),
      }),
      y
    );
  };
  const d = Vd(t.fonts, "add", function (p) {
    return function (h) {
      return (
        kl(
          Re(() => {
            const g = a.get(h);
            g && (e(g), a.delete(h));
          }),
          0,
        ),
        p.apply(this, [h])
      );
    };
  });
  return (
    i.push(() => {
      s.FontFace = u;
    }),
    i.push(d),
    Re(() => {
      i.forEach((p) => p());
    })
  );
}
function ZT(e) {
  const {
    doc: t,
    mirror: s,
    blockClass: i,
    blockSelector: a,
    unblockSelector: u,
    selectionCb: d,
  } = e;
  let p = !0;
  const h = Re(() => {
    const g = t.getSelection();
    if (!g || (p && hn([g, "optionalAccess", (E) => E.isCollapsed]))) return;
    p = g.isCollapsed || !1;
    const _ = [],
      y = g.rangeCount || 0;
    for (let E = 0; E < y; E++) {
      const C = g.getRangeAt(E),
        {
          startContainer: T,
          startOffset: N,
          endContainer: x,
          endOffset: D,
        } = C;
      Ht(T, i, a, u, !0) ||
        Ht(x, i, a, u, !0) ||
        _.push({
          start: s.getId(T),
          startOffset: N,
          end: s.getId(x),
          endOffset: D,
        });
    }
    d({ ranges: _ });
  });
  return (h(), Ct("selectionchange", h));
}
function eI({ doc: e, customElementCb: t }) {
  const s = e.defaultView;
  return !s || !s.customElements
    ? () => {}
    : Vd(s.customElements, "define", function (a) {
        return function (u, d, p) {
          try {
            t({ define: { name: u } });
          } catch {}
          return a.apply(this, [u, d, p]);
        };
      });
}
function tI(e, t = {}) {
  const s = e.doc.defaultView;
  if (!s) return () => {};
  let i;
  e.recordDOM && (i = w0(e, e.doc));
  const a = WT(e),
    u = qT(e),
    d = x0(e),
    p = VT(e, { win: s }),
    h = YT(e),
    g = JT(e);
  let _ = () => {},
    y = () => {},
    E = () => {},
    C = () => {};
  e.recordDOM &&
    ((_ = KT(e, { win: s })),
    (y = k0(e, e.doc)),
    (E = XT(e, { win: s })),
    e.collectFonts && (C = QT(e)));
  const T = ZT(e),
    N = eI(e),
    x = [];
  for (const D of e.plugins) x.push(D.observer(D.callback, s, D.options));
  return Re(() => {
    (Ms.forEach((D) => D.reset()),
      hn([i, "optionalAccess", (D) => D.disconnect, "call", (D) => D()]),
      a(),
      u(),
      d(),
      p(),
      h(),
      g(),
      _(),
      y(),
      E(),
      C(),
      T(),
      N(),
      x.forEach((D) => D()));
  });
}
function Ma(e) {
  return typeof window[e] < "u";
}
function Oa(e) {
  return !!(
    typeof window[e] < "u" &&
    window[e].prototype &&
    "insertRule" in window[e].prototype &&
    "deleteRule" in window[e].prototype
  );
}
class vd {
  constructor(t) {
    ((this.generateIdFn = t),
      (this.iframeIdToRemoteIdMap = new WeakMap()),
      (this.iframeRemoteIdToIdMap = new WeakMap()));
  }
  getId(t, s, i, a) {
    const u = i || this.getIdToRemoteIdMap(t),
      d = a || this.getRemoteIdToIdMap(t);
    let p = u.get(s);
    return (p || ((p = this.generateIdFn()), u.set(s, p), d.set(p, s)), p);
  }
  getIds(t, s) {
    const i = this.getIdToRemoteIdMap(t),
      a = this.getRemoteIdToIdMap(t);
    return s.map((u) => this.getId(t, u, i, a));
  }
  getRemoteId(t, s, i) {
    const a = i || this.getRemoteIdToIdMap(t);
    if (typeof s != "number") return s;
    const u = a.get(s);
    return u || -1;
  }
  getRemoteIds(t, s) {
    const i = this.getRemoteIdToIdMap(t);
    return s.map((a) => this.getRemoteId(t, a, i));
  }
  reset(t) {
    if (!t) {
      ((this.iframeIdToRemoteIdMap = new WeakMap()),
        (this.iframeRemoteIdToIdMap = new WeakMap()));
      return;
    }
    (this.iframeIdToRemoteIdMap.delete(t),
      this.iframeRemoteIdToIdMap.delete(t));
  }
  getIdToRemoteIdMap(t) {
    let s = this.iframeIdToRemoteIdMap.get(t);
    return (s || ((s = new Map()), this.iframeIdToRemoteIdMap.set(t, s)), s);
  }
  getRemoteIdToIdMap(t) {
    let s = this.iframeRemoteIdToIdMap.get(t);
    return (s || ((s = new Map()), this.iframeRemoteIdToIdMap.set(t, s)), s);
  }
}
function ug(e) {
  let t,
    s = e[0],
    i = 1;
  for (; i < e.length; ) {
    const a = e[i],
      u = e[i + 1];
    if (
      ((i += 2), (a === "optionalAccess" || a === "optionalCall") && s == null)
    )
      return;
    a === "access" || a === "optionalAccess"
      ? ((t = s), (s = u(s)))
      : (a === "call" || a === "optionalCall") &&
        ((s = u((...d) => s.call(t, ...d))), (t = void 0));
  }
  return s;
}
class nI {
  constructor() {
    ((this.crossOriginIframeMirror = new vd(qd)),
      (this.crossOriginIframeRootIdMap = new WeakMap()));
  }
  addIframe() {}
  addLoadListener() {}
  attachIframe() {}
}
class rI {
  constructor(t) {
    ((this.iframes = new WeakMap()),
      (this.crossOriginIframeMap = new WeakMap()),
      (this.crossOriginIframeMirror = new vd(qd)),
      (this.crossOriginIframeRootIdMap = new WeakMap()),
      (this.mutationCb = t.mutationCb),
      (this.wrappedEmit = t.wrappedEmit),
      (this.stylesheetManager = t.stylesheetManager),
      (this.recordCrossOriginIframes = t.recordCrossOriginIframes),
      (this.crossOriginIframeStyleMirror = new vd(
        this.stylesheetManager.styleMirror.generateId.bind(
          this.stylesheetManager.styleMirror,
        ),
      )),
      (this.mirror = t.mirror),
      this.recordCrossOriginIframes &&
        window.addEventListener("message", this.handleMessage.bind(this)));
  }
  addIframe(t) {
    (this.iframes.set(t, !0),
      t.contentWindow && this.crossOriginIframeMap.set(t.contentWindow, t));
  }
  addLoadListener(t) {
    this.loadListener = t;
  }
  attachIframe(t, s) {
    (this.mutationCb({
      adds: [{ parentId: this.mirror.getId(t), nextId: null, node: s }],
      removes: [],
      texts: [],
      attributes: [],
      isAttachIframe: !0,
    }),
      ug([this, "access", (a) => a.loadListener, "optionalCall", (a) => a(t)]));
    const i = Yd(t);
    i &&
      i.adoptedStyleSheets &&
      i.adoptedStyleSheets.length > 0 &&
      this.stylesheetManager.adoptStyleSheets(
        i.adoptedStyleSheets,
        this.mirror.getId(i),
      );
  }
  handleMessage(t) {
    const s = t;
    if (s.data.type !== "rrweb" || s.origin !== s.data.origin || !t.source)
      return;
    const a = this.crossOriginIframeMap.get(t.source);
    if (!a) return;
    const u = this.transformCrossOriginEvent(a, s.data.event);
    u && this.wrappedEmit(u, s.data.isCheckout);
  }
  transformCrossOriginEvent(t, s) {
    switch (s.type) {
      case Ee.FullSnapshot: {
        (this.crossOriginIframeMirror.reset(t),
          this.crossOriginIframeStyleMirror.reset(t),
          this.replaceIdOnNode(s.data.node, t));
        const i = s.data.node.id;
        return (
          this.crossOriginIframeRootIdMap.set(t, i),
          this.patchRootIdOnNode(s.data.node, i),
          {
            timestamp: s.timestamp,
            type: Ee.IncrementalSnapshot,
            data: {
              source: me.Mutation,
              adds: [
                {
                  parentId: this.mirror.getId(t),
                  nextId: null,
                  node: s.data.node,
                },
              ],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: !0,
            },
          }
        );
      }
      case Ee.Meta:
      case Ee.Load:
      case Ee.DomContentLoaded:
        return !1;
      case Ee.Plugin:
        return s;
      case Ee.Custom:
        return (
          this.replaceIds(s.data.payload, t, [
            "id",
            "parentId",
            "previousId",
            "nextId",
          ]),
          s
        );
      case Ee.IncrementalSnapshot:
        switch (s.data.source) {
          case me.Mutation:
            return (
              s.data.adds.forEach((i) => {
                (this.replaceIds(i, t, ["parentId", "nextId", "previousId"]),
                  this.replaceIdOnNode(i.node, t));
                const a = this.crossOriginIframeRootIdMap.get(t);
                a && this.patchRootIdOnNode(i.node, a);
              }),
              s.data.removes.forEach((i) => {
                this.replaceIds(i, t, ["parentId", "id"]);
              }),
              s.data.attributes.forEach((i) => {
                this.replaceIds(i, t, ["id"]);
              }),
              s.data.texts.forEach((i) => {
                this.replaceIds(i, t, ["id"]);
              }),
              s
            );
          case me.Drag:
          case me.TouchMove:
          case me.MouseMove:
            return (
              s.data.positions.forEach((i) => {
                this.replaceIds(i, t, ["id"]);
              }),
              s
            );
          case me.ViewportResize:
            return !1;
          case me.MediaInteraction:
          case me.MouseInteraction:
          case me.Scroll:
          case me.CanvasMutation:
          case me.Input:
            return (this.replaceIds(s.data, t, ["id"]), s);
          case me.StyleSheetRule:
          case me.StyleDeclaration:
            return (
              this.replaceIds(s.data, t, ["id"]),
              this.replaceStyleIds(s.data, t, ["styleId"]),
              s
            );
          case me.Font:
            return s;
          case me.Selection:
            return (
              s.data.ranges.forEach((i) => {
                this.replaceIds(i, t, ["start", "end"]);
              }),
              s
            );
          case me.AdoptedStyleSheet:
            return (
              this.replaceIds(s.data, t, ["id"]),
              this.replaceStyleIds(s.data, t, ["styleIds"]),
              ug([
                s,
                "access",
                (i) => i.data,
                "access",
                (i) => i.styles,
                "optionalAccess",
                (i) => i.forEach,
                "call",
                (i) =>
                  i((a) => {
                    this.replaceStyleIds(a, t, ["styleId"]);
                  }),
              ]),
              s
            );
        }
    }
    return !1;
  }
  replace(t, s, i, a) {
    for (const u of a)
      (!Array.isArray(s[u]) && typeof s[u] != "number") ||
        (Array.isArray(s[u])
          ? (s[u] = t.getIds(i, s[u]))
          : (s[u] = t.getId(i, s[u])));
    return s;
  }
  replaceIds(t, s, i) {
    return this.replace(this.crossOriginIframeMirror, t, s, i);
  }
  replaceStyleIds(t, s, i) {
    return this.replace(this.crossOriginIframeStyleMirror, t, s, i);
  }
  replaceIdOnNode(t, s) {
    (this.replaceIds(t, s, ["id", "rootId"]),
      "childNodes" in t &&
        t.childNodes.forEach((i) => {
          this.replaceIdOnNode(i, s);
        }));
  }
  patchRootIdOnNode(t, s) {
    (t.type !== ot.Document && !t.rootId && (t.rootId = s),
      "childNodes" in t &&
        t.childNodes.forEach((i) => {
          this.patchRootIdOnNode(i, s);
        }));
  }
}
class sI {
  init() {}
  addShadowRoot() {}
  observeAttachShadow() {}
  reset() {}
}
class iI {
  constructor(t) {
    ((this.shadowDoms = new WeakSet()),
      (this.restoreHandlers = []),
      (this.mutationCb = t.mutationCb),
      (this.scrollCb = t.scrollCb),
      (this.bypassOptions = t.bypassOptions),
      (this.mirror = t.mirror),
      this.init());
  }
  init() {
    (this.reset(), this.patchAttachShadow(Element, document));
  }
  addShadowRoot(t, s) {
    if (!Bi(t) || this.shadowDoms.has(t)) return;
    (this.shadowDoms.add(t), this.bypassOptions.canvasManager.addShadowRoot(t));
    const i = w0(
      {
        ...this.bypassOptions,
        doc: s,
        mutationCb: this.mutationCb,
        mirror: this.mirror,
        shadowDomManager: this,
      },
      t,
    );
    (this.restoreHandlers.push(() => i.disconnect()),
      this.restoreHandlers.push(
        x0({
          ...this.bypassOptions,
          scrollCb: this.scrollCb,
          doc: t,
          mirror: this.mirror,
        }),
      ),
      kl(() => {
        (t.adoptedStyleSheets &&
          t.adoptedStyleSheets.length > 0 &&
          this.bypassOptions.stylesheetManager.adoptStyleSheets(
            t.adoptedStyleSheets,
            this.mirror.getId(t.host),
          ),
          this.restoreHandlers.push(
            k0(
              {
                mirror: this.mirror,
                stylesheetManager: this.bypassOptions.stylesheetManager,
              },
              t,
            ),
          ));
      }, 0));
  }
  observeAttachShadow(t) {
    const s = Yd(t),
      i = jT(t);
    !s || !i || this.patchAttachShadow(i.Element, s);
  }
  patchAttachShadow(t, s) {
    const i = this;
    this.restoreHandlers.push(
      Vd(t.prototype, "attachShadow", function (a) {
        return function (u) {
          const d = a.call(this, u);
          return (
            this.shadowRoot && S0(this) && i.addShadowRoot(this.shadowRoot, s),
            d
          );
        };
      }),
    );
  }
  reset() {
    (this.restoreHandlers.forEach((t) => {
      try {
        t();
      } catch {}
    }),
      (this.restoreHandlers = []),
      (this.shadowDoms = new WeakSet()),
      this.bypassOptions.canvasManager.resetShadowRoots());
  }
}
class cg {
  reset() {}
  freeze() {}
  unfreeze() {}
  lock() {}
  unlock() {}
  snapshot() {}
  addWindow() {}
  addShadowRoot() {}
  resetShadowRoots() {}
}
class oI {
  constructor(t) {
    ((this.trackedLinkElements = new WeakSet()),
      (this.styleMirror = new OT()),
      (this.mutationCb = t.mutationCb),
      (this.adoptedStyleSheetCb = t.adoptedStyleSheetCb));
  }
  attachLinkElement(t, s) {
    ("_cssText" in s.attributes &&
      this.mutationCb({
        adds: [],
        removes: [],
        texts: [],
        attributes: [{ id: s.id, attributes: s.attributes }],
      }),
      this.trackLinkElement(t));
  }
  trackLinkElement(t) {
    this.trackedLinkElements.has(t) ||
      (this.trackedLinkElements.add(t), this.trackStylesheetInLinkElement(t));
  }
  adoptStyleSheets(t, s) {
    if (t.length === 0) return;
    const i = { id: s, styleIds: [] },
      a = [];
    for (const u of t) {
      let d;
      (this.styleMirror.has(u)
        ? (d = this.styleMirror.getId(u))
        : ((d = this.styleMirror.add(u)),
          a.push({
            styleId: d,
            rules: Array.from(u.rules || CSSRule, (p, h) => ({
              rule: r0(p),
              index: h,
            })),
          })),
        i.styleIds.push(d));
    }
    (a.length > 0 && (i.styles = a), this.adoptedStyleSheetCb(i));
  }
  reset() {
    (this.styleMirror.reset(), (this.trackedLinkElements = new WeakSet()));
  }
  trackStylesheetInLinkElement(t) {}
}
class aI {
  constructor() {
    ((this.nodeMap = new WeakMap()), (this.active = !1));
  }
  inOtherBuffer(t, s) {
    const i = this.nodeMap.get(t);
    return i && Array.from(i).some((a) => a !== s);
  }
  add(t, s) {
    (this.active ||
      ((this.active = !0),
      PT(() => {
        ((this.nodeMap = new WeakMap()), (this.active = !1));
      })),
      this.nodeMap.set(t, (this.nodeMap.get(t) || new Set()).add(s)));
  }
  destroy() {}
}
let Qe, sl;
try {
  if (Array.from([1], (e) => e * 2)[0] !== 2) {
    const e = document.createElement("iframe");
    (document.body.appendChild(e),
      (Array.from =
        Fa([
          e,
          "access",
          (t) => t.contentWindow,
          "optionalAccess",
          (t) => t.Array,
          "access",
          (t) => t.from,
        ]) || Array.from),
      document.body.removeChild(e));
  }
} catch (e) {
  console.debug("Unable to override Array.from", e);
}
const dn = oT();
function Un(e = {}) {
  const {
    emit: t,
    checkoutEveryNms: s,
    checkoutEveryNth: i,
    blockClass: a = "rr-block",
    blockSelector: u = null,
    unblockSelector: d = null,
    ignoreClass: p = "rr-ignore",
    ignoreSelector: h = null,
    maskAllText: g = !1,
    maskTextClass: _ = "rr-mask",
    unmaskTextClass: y = null,
    maskTextSelector: E = null,
    unmaskTextSelector: C = null,
    inlineStylesheet: T = !0,
    maskAllInputs: N,
    maskInputOptions: x,
    slimDOMOptions: D,
    maskAttributeFn: B,
    maskInputFn: V,
    maskTextFn: K,
    maxCanvasSize: R = null,
    packFn: A,
    sampling: q = {},
    dataURLOptions: X = {},
    mousemoveWait: z,
    recordDOM: G = !0,
    recordCanvas: se = !1,
    recordCrossOriginIframes: ee = !1,
    recordAfter: ye = e.recordAfter === "DOMContentLoaded"
      ? e.recordAfter
      : "load",
    userTriggeredOnInput: Ie = !1,
    collectFonts: Pe = !1,
    inlineImages: re = !1,
    plugins: ge,
    keepIframeSrcFn: P = () => !1,
    ignoreCSSAttributes: J = new Set([]),
    errorHandler: H,
    onMutation: I,
    getCanvasManager: L,
  } = e;
  BT(H);
  const he = ee ? window.parent === window : !0;
  let ce = !1;
  if (!he)
    try {
      window.parent.document && (ce = !1);
    } catch {
      ce = !0;
    }
  if (he && !t) throw new Error("emit function is required");
  if (!he && !ce) return () => {};
  (z !== void 0 && q.mousemove === void 0 && (q.mousemove = z), dn.reset());
  const _e =
      N === !0
        ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            radio: !0,
            checkbox: !0,
          }
        : x !== void 0
          ? x
          : {},
    Se =
      D === !0 || D === "all"
        ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaVerification: !0,
            headMetaAuthorship: D === "all",
            headMetaDescKeywords: D === "all",
          }
        : D || {};
  MT();
  let Oe,
    Ce = 0;
  const Le = (ke) => {
    for (const lt of ge || [])
      lt.eventProcessor && (ke = lt.eventProcessor(ke));
    return (A && !ce && (ke = A(ke)), ke);
  };
  Qe = (ke, lt) => {
    const we = ke;
    if (
      ((we.timestamp = nl()),
      Fa([
        Ms,
        "access",
        ($e) => $e[0],
        "optionalAccess",
        ($e) => $e.isFrozen,
        "call",
        ($e) => $e(),
      ]) &&
        we.type !== Ee.FullSnapshot &&
        !(
          we.type === Ee.IncrementalSnapshot && we.data.source === me.Mutation
        ) &&
        Ms.forEach(($e) => $e.unfreeze()),
      he)
    )
      Fa([t, "optionalCall", ($e) => $e(Le(we), lt)]);
    else if (ce) {
      const $e = {
        type: "rrweb",
        event: Le(we),
        origin: window.location.origin,
        isCheckout: lt,
      };
      window.parent.postMessage($e, "*");
    }
    if (we.type === Ee.FullSnapshot) ((Oe = we), (Ce = 0));
    else if (we.type === Ee.IncrementalSnapshot) {
      if (we.data.source === me.Mutation && we.data.isAttachIframe) return;
      Ce++;
      const $e = i && Ce >= i,
        be = s && Oe && we.timestamp - Oe.timestamp > s;
      ($e || be) && In(!0);
    }
  };
  const nt = (ke) => {
      Qe({
        type: Ee.IncrementalSnapshot,
        data: { source: me.Mutation, ...ke },
      });
    },
    kn = (ke) =>
      Qe({ type: Ee.IncrementalSnapshot, data: { source: me.Scroll, ...ke } }),
    ts = (ke) =>
      Qe({
        type: Ee.IncrementalSnapshot,
        data: { source: me.CanvasMutation, ...ke },
      }),
    Vn = (ke) =>
      Qe({
        type: Ee.IncrementalSnapshot,
        data: { source: me.AdoptedStyleSheet, ...ke },
      }),
    Ft = new oI({ mutationCb: nt, adoptedStyleSheetCb: Vn }),
    Vt =
      typeof __RRWEB_EXCLUDE_IFRAME__ == "boolean" && __RRWEB_EXCLUDE_IFRAME__
        ? new nI()
        : new rI({
            mirror: dn,
            mutationCb: nt,
            stylesheetManager: Ft,
            recordCrossOriginIframes: ee,
            wrappedEmit: Qe,
          });
  for (const ke of ge || [])
    ke.getMirror &&
      ke.getMirror({
        nodeMirror: dn,
        crossOriginIframeMirror: Vt.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: Vt.crossOriginIframeStyleMirror,
      });
  const Cr = new aI(),
    Tn = uI(L, {
      mirror: dn,
      win: window,
      mutationCb: (ke) =>
        Qe({
          type: Ee.IncrementalSnapshot,
          data: { source: me.CanvasMutation, ...ke },
        }),
      recordCanvas: se,
      blockClass: a,
      blockSelector: u,
      unblockSelector: d,
      maxCanvasSize: R,
      sampling: q.canvas,
      dataURLOptions: X,
      errorHandler: H,
    }),
    Ye =
      typeof __RRWEB_EXCLUDE_SHADOW_DOM__ == "boolean" &&
      __RRWEB_EXCLUDE_SHADOW_DOM__
        ? new sI()
        : new iI({
            mutationCb: nt,
            scrollCb: kn,
            bypassOptions: {
              onMutation: I,
              blockClass: a,
              blockSelector: u,
              unblockSelector: d,
              maskAllText: g,
              maskTextClass: _,
              unmaskTextClass: y,
              maskTextSelector: E,
              unmaskTextSelector: C,
              inlineStylesheet: T,
              maskInputOptions: _e,
              dataURLOptions: X,
              maskAttributeFn: B,
              maskTextFn: K,
              maskInputFn: V,
              recordCanvas: se,
              inlineImages: re,
              sampling: q,
              slimDOMOptions: Se,
              iframeManager: Vt,
              stylesheetManager: Ft,
              canvasManager: Tn,
              keepIframeSrcFn: P,
              processedNodeManager: Cr,
            },
            mirror: dn,
          }),
    In = (ke = !1) => {
      if (!G) return;
      (Qe(
        {
          type: Ee.Meta,
          data: { href: window.location.href, width: h0(), height: p0() },
        },
        ke,
      ),
        Ft.reset(),
        Ye.init(),
        Ms.forEach((we) => we.lock()));
      const lt = bT(document, {
        mirror: dn,
        blockClass: a,
        blockSelector: u,
        unblockSelector: d,
        maskAllText: g,
        maskTextClass: _,
        unmaskTextClass: y,
        maskTextSelector: E,
        unmaskTextSelector: C,
        inlineStylesheet: T,
        maskAllInputs: _e,
        maskAttributeFn: B,
        maskInputFn: V,
        maskTextFn: K,
        slimDOM: Se,
        dataURLOptions: X,
        recordCanvas: se,
        inlineImages: re,
        onSerialize: (we) => {
          (y0(we, dn) && Vt.addIframe(we),
            v0(we, dn) && Ft.trackLinkElement(we),
            gd(we) && Ye.addShadowRoot(we.shadowRoot, document));
        },
        onIframeLoad: (we, $e) => {
          (Vt.attachIframe(we, $e),
            we.contentWindow && Tn.addWindow(we.contentWindow),
            Ye.observeAttachShadow(we));
        },
        onStylesheetLoad: (we, $e) => {
          Ft.attachLinkElement(we, $e);
        },
        keepIframeSrcFn: P,
      });
      if (!lt) return console.warn("Failed to snapshot the document");
      (Qe({
        type: Ee.FullSnapshot,
        data: { node: lt, initialOffset: f0(window) },
      }),
        Ms.forEach((we) => we.unlock()),
        document.adoptedStyleSheets &&
          document.adoptedStyleSheets.length > 0 &&
          Ft.adoptStyleSheets(document.adoptedStyleSheets, dn.getId(document)));
    };
  sl = In;
  try {
    const ke = [],
      lt = ($e) =>
        Re(tI)(
          {
            onMutation: I,
            mutationCb: nt,
            mousemoveCb: (be, mn) =>
              Qe({
                type: Ee.IncrementalSnapshot,
                data: { source: mn, positions: be },
              }),
            mouseInteractionCb: (be) =>
              Qe({
                type: Ee.IncrementalSnapshot,
                data: { source: me.MouseInteraction, ...be },
              }),
            scrollCb: kn,
            viewportResizeCb: (be) =>
              Qe({
                type: Ee.IncrementalSnapshot,
                data: { source: me.ViewportResize, ...be },
              }),
            inputCb: (be) =>
              Qe({
                type: Ee.IncrementalSnapshot,
                data: { source: me.Input, ...be },
              }),
            mediaInteractionCb: (be) =>
              Qe({
                type: Ee.IncrementalSnapshot,
                data: { source: me.MediaInteraction, ...be },
              }),
            styleSheetRuleCb: (be) =>
              Qe({
                type: Ee.IncrementalSnapshot,
                data: { source: me.StyleSheetRule, ...be },
              }),
            styleDeclarationCb: (be) =>
              Qe({
                type: Ee.IncrementalSnapshot,
                data: { source: me.StyleDeclaration, ...be },
              }),
            canvasMutationCb: ts,
            fontCb: (be) =>
              Qe({
                type: Ee.IncrementalSnapshot,
                data: { source: me.Font, ...be },
              }),
            selectionCb: (be) => {
              Qe({
                type: Ee.IncrementalSnapshot,
                data: { source: me.Selection, ...be },
              });
            },
            customElementCb: (be) => {
              Qe({
                type: Ee.IncrementalSnapshot,
                data: { source: me.CustomElement, ...be },
              });
            },
            blockClass: a,
            ignoreClass: p,
            ignoreSelector: h,
            maskAllText: g,
            maskTextClass: _,
            unmaskTextClass: y,
            maskTextSelector: E,
            unmaskTextSelector: C,
            maskInputOptions: _e,
            inlineStylesheet: T,
            sampling: q,
            recordDOM: G,
            recordCanvas: se,
            inlineImages: re,
            userTriggeredOnInput: Ie,
            collectFonts: Pe,
            doc: $e,
            maskAttributeFn: B,
            maskInputFn: V,
            maskTextFn: K,
            keepIframeSrcFn: P,
            blockSelector: u,
            unblockSelector: d,
            slimDOMOptions: Se,
            dataURLOptions: X,
            mirror: dn,
            iframeManager: Vt,
            stylesheetManager: Ft,
            shadowDomManager: Ye,
            processedNodeManager: Cr,
            canvasManager: Tn,
            ignoreCSSAttributes: J,
            plugins:
              Fa([
                ge,
                "optionalAccess",
                (be) => be.filter,
                "call",
                (be) => be((mn) => mn.observer),
                "optionalAccess",
                (be) => be.map,
                "call",
                (be) =>
                  be((mn) => ({
                    observer: mn.observer,
                    options: mn.options,
                    callback: (uo) =>
                      Qe({
                        type: Ee.Plugin,
                        data: { plugin: mn.name, payload: uo },
                      }),
                  })),
              ]) || [],
          },
          {},
        );
    Vt.addLoadListener(($e) => {
      try {
        ke.push(lt($e.contentDocument));
      } catch (be) {
        console.warn(be);
      }
    });
    const we = () => {
      (In(), ke.push(lt(document)));
    };
    return (
      document.readyState === "interactive" ||
      document.readyState === "complete"
        ? we()
        : (ke.push(
            Ct("DOMContentLoaded", () => {
              (Qe({ type: Ee.DomContentLoaded, data: {} }),
                ye === "DOMContentLoaded" && we());
            }),
          ),
          ke.push(
            Ct(
              "load",
              () => {
                (Qe({ type: Ee.Load, data: {} }), ye === "load" && we());
              },
              window,
            ),
          )),
      () => {
        (ke.forEach(($e) => $e()), Cr.destroy(), (sl = void 0), HT());
      }
    );
  } catch (ke) {
    console.warn(ke);
  }
}
function lI(e) {
  if (!sl) throw new Error("please take full snapshot after start recording");
  sl(e);
}
Un.mirror = dn;
Un.takeFullSnapshot = lI;
function uI(e, t) {
  try {
    return e ? e(t) : new cg();
  } catch {
    return (console.warn("Unable to initialize CanvasManager"), new cg());
  }
}
const cI = 3,
  dI = 5;
function Kd(e) {
  return e > 9999999999 ? e : e * 1e3;
}
function Lc(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function lo(e, t) {
  t.category !== "sentry.transaction" &&
    (["ui.click", "ui.input"].includes(t.category)
      ? e.triggerUserActivity()
      : e.checkAndHandleExpiredSession(),
    e.addUpdate(
      () => (
        e.throttledAddEvent({
          type: Ee.Custom,
          timestamp: (t.timestamp || 0) * 1e3,
          data: { tag: "breadcrumb", payload: fn(t, 10, 1e3) },
        }),
        t.category === "console"
      ),
    ));
}
const fI = "button,a";
function T0(e) {
  return e.closest(fI) || e;
}
function I0(e) {
  const t = C0(e);
  return !t || !(t instanceof Element) ? t : T0(t);
}
function C0(e) {
  return pI(e) ? e.target : e;
}
function pI(e) {
  return typeof e == "object" && !!e && "target" in e;
}
let mr;
function hI(e) {
  return (
    mr || ((mr = []), mI()),
    mr.push(e),
    () => {
      const t = mr ? mr.indexOf(e) : -1;
      t > -1 && mr.splice(t, 1);
    }
  );
}
function mI() {
  jt(We, "open", function (e) {
    return function (...t) {
      if (mr)
        try {
          mr.forEach((s) => s());
        } catch {}
      return e.apply(We, t);
    };
  });
}
const gI = new Set([
  me.Mutation,
  me.StyleSheetRule,
  me.StyleDeclaration,
  me.AdoptedStyleSheet,
  me.CanvasMutation,
  me.Selection,
  me.MediaInteraction,
]);
function yI(e, t, s) {
  e.handleClick(t, s);
}
class vI {
  constructor(t, s, i = lo) {
    ((this._lastMutation = 0),
      (this._lastScroll = 0),
      (this._clicks = []),
      (this._timeout = s.timeout / 1e3),
      (this._threshold = s.threshold / 1e3),
      (this._scrollTimeout = s.scrollTimeout / 1e3),
      (this._replay = t),
      (this._ignoreSelector = s.ignoreSelector),
      (this._addBreadcrumbEvent = i));
  }
  addListeners() {
    const t = hI(() => {
      this._lastMutation = dg();
    });
    this._teardown = () => {
      (t(),
        (this._clicks = []),
        (this._lastMutation = 0),
        (this._lastScroll = 0));
    };
  }
  removeListeners() {
    (this._teardown && this._teardown(),
      this._checkClickTimeout && clearTimeout(this._checkClickTimeout));
  }
  handleClick(t, s) {
    if (SI(s, this._ignoreSelector) || !EI(t)) return;
    const i = {
      timestamp: Lc(t.timestamp),
      clickBreadcrumb: t,
      clickCount: 0,
      node: s,
    };
    this._clicks.some(
      (a) => a.node === i.node && Math.abs(a.timestamp - i.timestamp) < 1,
    ) ||
      (this._clicks.push(i),
      this._clicks.length === 1 && this._scheduleCheckClicks());
  }
  registerMutation(t = Date.now()) {
    this._lastMutation = Lc(t);
  }
  registerScroll(t = Date.now()) {
    this._lastScroll = Lc(t);
  }
  registerClick(t) {
    const s = T0(t);
    this._handleMultiClick(s);
  }
  _handleMultiClick(t) {
    this._getClicks(t).forEach((s) => {
      s.clickCount++;
    });
  }
  _getClicks(t) {
    return this._clicks.filter((s) => s.node === t);
  }
  _checkClicks() {
    const t = [],
      s = dg();
    this._clicks.forEach((i) => {
      (!i.mutationAfter &&
        this._lastMutation &&
        (i.mutationAfter =
          i.timestamp <= this._lastMutation
            ? this._lastMutation - i.timestamp
            : void 0),
        !i.scrollAfter &&
          this._lastScroll &&
          (i.scrollAfter =
            i.timestamp <= this._lastScroll
              ? this._lastScroll - i.timestamp
              : void 0),
        i.timestamp + this._timeout <= s && t.push(i));
    });
    for (const i of t) {
      const a = this._clicks.indexOf(i);
      a > -1 && (this._generateBreadcrumbs(i), this._clicks.splice(a, 1));
    }
    this._clicks.length && this._scheduleCheckClicks();
  }
  _generateBreadcrumbs(t) {
    const s = this._replay,
      i = t.scrollAfter && t.scrollAfter <= this._scrollTimeout,
      a = t.mutationAfter && t.mutationAfter <= this._threshold,
      u = !i && !a,
      { clickCount: d, clickBreadcrumb: p } = t;
    if (u) {
      const h = Math.min(t.mutationAfter || this._timeout, this._timeout) * 1e3,
        g = h < this._timeout * 1e3 ? "mutation" : "timeout",
        _ = {
          type: "default",
          message: p.message,
          timestamp: p.timestamp,
          category: "ui.slowClickDetected",
          data: {
            ...p.data,
            url: We.location.href,
            route: s.getCurrentRoute(),
            timeAfterClickMs: h,
            endReason: g,
            clickCount: d || 1,
          },
        };
      this._addBreadcrumbEvent(s, _);
      return;
    }
    if (d > 1) {
      const h = {
        type: "default",
        message: p.message,
        timestamp: p.timestamp,
        category: "ui.multiClick",
        data: {
          ...p.data,
          url: We.location.href,
          route: s.getCurrentRoute(),
          clickCount: d,
          metric: !0,
        },
      };
      this._addBreadcrumbEvent(s, h);
    }
  }
  _scheduleCheckClicks() {
    (this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
      (this._checkClickTimeout = zs(() => this._checkClicks(), 1e3)));
  }
}
const _I = ["A", "BUTTON", "INPUT"];
function SI(e, t) {
  return !!(
    !_I.includes(e.tagName) ||
    (e.tagName === "INPUT" &&
      !["submit", "button"].includes(e.getAttribute("type") || "")) ||
    (e.tagName === "A" &&
      (e.hasAttribute("download") ||
        (e.hasAttribute("target") && e.getAttribute("target") !== "_self"))) ||
    (t && e.matches(t))
  );
}
function EI(e) {
  return !!(e.data && typeof e.data.nodeId == "number" && e.timestamp);
}
function dg() {
  return Date.now() / 1e3;
}
function wI(e, t) {
  try {
    if (!xI(t)) return;
    const { source: s } = t.data;
    if (
      (gI.has(s) && e.registerMutation(t.timestamp),
      s === me.Scroll && e.registerScroll(t.timestamp),
      kI(t))
    ) {
      const { type: i, id: a } = t.data,
        u = Un.mirror.getNode(a);
      u instanceof HTMLElement && i === It.Click && e.registerClick(u);
    }
  } catch {}
}
function xI(e) {
  return e.type === cI;
}
function kI(e) {
  return e.data.source === me.MouseInteraction;
}
function xn(e) {
  return { timestamp: Date.now() / 1e3, type: "default", ...e };
}
var il;
(function (e) {
  ((e[(e.Document = 0)] = "Document"),
    (e[(e.DocumentType = 1)] = "DocumentType"),
    (e[(e.Element = 2)] = "Element"),
    (e[(e.Text = 3)] = "Text"),
    (e[(e.CDATA = 4)] = "CDATA"),
    (e[(e.Comment = 5)] = "Comment"));
})(il || (il = {}));
const TI = new Set([
  "id",
  "class",
  "aria-label",
  "role",
  "name",
  "alt",
  "title",
  "data-test-id",
  "data-testid",
  "disabled",
  "aria-disabled",
  "data-sentry-component",
]);
function II(e) {
  const t = {};
  !e["data-sentry-component"] &&
    e["data-sentry-element"] &&
    (e["data-sentry-component"] = e["data-sentry-element"]);
  for (const s in e)
    if (TI.has(s)) {
      let i = s;
      ((s === "data-testid" || s === "data-test-id") && (i = "testId"),
        (t[i] = e[s]));
    }
  return t;
}
const CI = (e) => (t) => {
  if (!e.isEnabled()) return;
  const s = NI(t);
  if (!s) return;
  const i = t.name === "click",
    a = i ? t.event : void 0;
  (i &&
    e.clickDetector &&
    a &&
    a.target &&
    !a.altKey &&
    !a.metaKey &&
    !a.ctrlKey &&
    !a.shiftKey &&
    yI(e.clickDetector, s, I0(t.event)),
    lo(e, s));
};
function N0(e, t) {
  const s = Un.mirror.getId(e),
    i = s && Un.mirror.getNode(s),
    a = i && Un.mirror.getMeta(i),
    u = a && RI(a) ? a : null;
  return {
    message: t,
    data: u
      ? {
          nodeId: s,
          node: {
            id: s,
            tagName: u.tagName,
            textContent: Array.from(u.childNodes)
              .map((d) => d.type === il.Text && d.textContent)
              .filter(Boolean)
              .map((d) => d.trim())
              .join(""),
            attributes: II(u.attributes),
          },
        }
      : {},
  };
}
function NI(e) {
  const { target: t, message: s } = bI(e);
  return xn({ category: `ui.${e.name}`, ...N0(t, s) });
}
function bI(e) {
  const t = e.name === "click";
  let s,
    i = null;
  try {
    ((i = t ? I0(e.event) : C0(e.event)),
      (s = Bn(i, { maxStringLength: 200 }) || "<unknown>"));
  } catch {
    s = "<unknown>";
  }
  return { target: i, message: s };
}
function RI(e) {
  return e.type === il.Element;
}
function MI(e, t) {
  if (!e.isEnabled()) return;
  e.updateUserActivity();
  const s = OI(t);
  s && lo(e, s);
}
function OI(e) {
  const {
    metaKey: t,
    shiftKey: s,
    ctrlKey: i,
    altKey: a,
    key: u,
    target: d,
  } = e;
  if (!d || DI(d) || !u) return null;
  const p = t || i || a,
    h = u.length === 1;
  if (!p && h) return null;
  const g = Bn(d, { maxStringLength: 200 }) || "<unknown>",
    _ = N0(d, g);
  return xn({
    category: "ui.keyDown",
    message: g,
    data: { ..._.data, metaKey: t, shiftKey: s, ctrlKey: i, altKey: a, key: u },
  });
}
function DI(e) {
  return (
    e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable
  );
}
const AI = { resource: UI, paint: jI, navigation: FI };
function Da(e, t) {
  return ({ metric: s }) => void t.replayPerformanceEntries.push(e(s));
}
function PI(e) {
  return e.map(LI).filter(Boolean);
}
function LI(e) {
  const t = AI[e.entryType];
  return t ? t(e) : null;
}
function Hs(e) {
  return ((bt || We.performance.timeOrigin) + e) / 1e3;
}
function jI(e) {
  const { duration: t, entryType: s, name: i, startTime: a } = e,
    u = Hs(a);
  return { type: s, name: i, start: u, end: u + t, data: void 0 };
}
function FI(e) {
  const {
    entryType: t,
    name: s,
    decodedBodySize: i,
    duration: a,
    domComplete: u,
    encodedBodySize: d,
    domContentLoadedEventStart: p,
    domContentLoadedEventEnd: h,
    domInteractive: g,
    loadEventStart: _,
    loadEventEnd: y,
    redirectCount: E,
    startTime: C,
    transferSize: T,
    type: N,
  } = e;
  return a === 0
    ? null
    : {
        type: `${t}.${N}`,
        start: Hs(C),
        end: Hs(u),
        name: s,
        data: {
          size: T,
          decodedBodySize: i,
          encodedBodySize: d,
          duration: a,
          domInteractive: g,
          domContentLoadedEventStart: p,
          domContentLoadedEventEnd: h,
          loadEventStart: _,
          loadEventEnd: y,
          domComplete: u,
          redirectCount: E,
        },
      };
}
function UI(e) {
  const {
    entryType: t,
    initiatorType: s,
    name: i,
    responseEnd: a,
    startTime: u,
    decodedBodySize: d,
    encodedBodySize: p,
    responseStatus: h,
    transferSize: g,
  } = e;
  return ["fetch", "xmlhttprequest"].includes(s)
    ? null
    : {
        type: `${t}.${s}`,
        start: Hs(u),
        end: Hs(a),
        name: i,
        data: {
          size: g,
          statusCode: h,
          decodedBodySize: d,
          encodedBodySize: p,
        },
      };
}
function zI(e) {
  const t = e.entries[e.entries.length - 1],
    s = t && t.element ? [t.element] : void 0;
  return Tl(e, "largest-contentful-paint", s);
}
function $I(e) {
  return e.sources !== void 0;
}
function BI(e) {
  const t = [],
    s = [];
  for (const i of e.entries)
    if ($I(i)) {
      const a = [];
      for (const u of i.sources)
        if (u.node) {
          s.push(u.node);
          const d = Un.mirror.getId(u.node);
          d && a.push(d);
        }
      t.push({ value: i.value, nodeIds: a.length ? a : void 0 });
    }
  return Tl(e, "cumulative-layout-shift", s, t);
}
function HI(e) {
  const t = e.entries[e.entries.length - 1],
    s = t && t.target ? [t.target] : void 0;
  return Tl(e, "first-input-delay", s);
}
function WI(e) {
  const t = e.entries[e.entries.length - 1],
    s = t && t.target ? [t.target] : void 0;
  return Tl(e, "interaction-to-next-paint", s);
}
function Tl(e, t, s, i) {
  const a = e.value,
    u = e.rating,
    d = Hs(a);
  return {
    type: "web-vital",
    name: t,
    start: d,
    end: d,
    data: {
      value: a,
      size: a,
      rating: u,
      nodeIds: s ? s.map((p) => Un.mirror.getId(p)) : void 0,
      attributions: i,
    },
  };
}
function qI(e) {
  function t(a) {
    e.performanceEntries.includes(a) || e.performanceEntries.push(a);
  }
  function s({ entries: a }) {
    a.forEach(t);
  }
  const i = [];
  return (
    ["navigation", "paint", "resource"].forEach((a) => {
      i.push(Us(a, s));
    }),
    i.push(qy(Da(zI, e)), Ud(Da(BI, e)), Vy(Da(HI, e)), Gy(Da(WI, e))),
    () => {
      i.forEach((a) => a());
    }
  );
}
const le = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  VI =
    'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},_=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},x=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=A(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},A=function(t,n,r){return-1==t.s?Math.max(A(t.l,n,r+1),A(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},U=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=x(f,15),M=b.t,E=b.l,A=x(h,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){_(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;_(r,m,Q[et]),m+=R[et],et>3&&(_(r,m,rt>>5&8191),m+=i[et])}else _(r,m,N[rt]),m+=P[rt]}return _(r,m,N[256]),m+P[256]},C=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=C[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new n(32768),x=c.h||new n(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(a[t]^a[t+1]<<A^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=U(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-_[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=U(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(J)return J.encode(n);for(var e=n.length,i=new t(n.length+(n.length>>1)),a=0,s=function(t){i[a++]=t},o=0;o<e;++o){if(a+5>i.length){var f=new t(a+8+(e-o<<1));f.set(i),i=f}var h=n.charCodeAt(o);h<128||r?s(h):h<2048?(s(192|h>>6),s(128|63&h)):h>55295&&h<57344?(s(240|(h=65536+(1047552&h)|1023&n.charCodeAt(++o))>>18),s(128|h>>12&63),s(128|h>>6&63),s(128|63&h)):(s(224|h>>12),s(128|h>>6&63),s(128|63&h))}return b(i,0,a)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),a=i.length;return q(i,n),j(i,a-8,r.d()),j(i,a-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});';
function GI() {
  const e = new Blob([VI]);
  return URL.createObjectURL(e);
}
const fg = ["info", "warn", "error", "log"],
  $a = "[Replay] ";
function jc(e, t = "info") {
  Wn(
    {
      category: "console",
      data: { logger: "replay" },
      level: t,
      message: `${$a}${e}`,
    },
    { level: t },
  );
}
function YI() {
  let e = !1,
    t = !1;
  const s = {
    exception: () => {},
    infoTick: () => {},
    setConfig: (i) => {
      ((e = i.captureExceptions), (t = i.traceInternals));
    },
  };
  return (
    le
      ? (fg.forEach((i) => {
          s[i] = (...a) => {
            (W[i]($a, ...a), t && jc(a.join(""), by(i)));
          };
        }),
        (s.exception = (i, ...a) => {
          (a.length && s.error && s.error(...a),
            W.error($a, i),
            e ? vl(i) : t && jc(i, "error"));
        }),
        (s.infoTick = (...i) => {
          (W.info($a, ...i), t && setTimeout(() => jc(i[0]), 0));
        }))
      : fg.forEach((i) => {
          s[i] = () => {};
        }),
    s
  );
}
const fe = YI();
class Xd extends Error {
  constructor() {
    super(`Event buffer exceeded maximum size of ${Hd}.`);
  }
}
class b0 {
  constructor() {
    ((this.events = []),
      (this._totalSize = 0),
      (this.hasCheckout = !1),
      (this.waitForCheckout = !1));
  }
  get hasEvents() {
    return this.events.length > 0;
  }
  get type() {
    return "sync";
  }
  destroy() {
    this.events = [];
  }
  async addEvent(t) {
    const s = JSON.stringify(t).length;
    if (((this._totalSize += s), this._totalSize > Hd)) throw new Xd();
    this.events.push(t);
  }
  finish() {
    return new Promise((t) => {
      const s = this.events;
      (this.clear(), t(JSON.stringify(s)));
    });
  }
  clear() {
    ((this.events = []), (this._totalSize = 0), (this.hasCheckout = !1));
  }
  getEarliestTimestamp() {
    const t = this.events.map((s) => s.timestamp).sort()[0];
    return t ? Kd(t) : null;
  }
}
class KI {
  constructor(t) {
    ((this._worker = t), (this._id = 0));
  }
  ensureReady() {
    return this._ensureReadyPromise
      ? this._ensureReadyPromise
      : ((this._ensureReadyPromise = new Promise((t, s) => {
          (this._worker.addEventListener(
            "message",
            ({ data: i }) => {
              i.success ? t() : s();
            },
            { once: !0 },
          ),
            this._worker.addEventListener(
              "error",
              (i) => {
                s(i);
              },
              { once: !0 },
            ));
        })),
        this._ensureReadyPromise);
  }
  destroy() {
    (le && fe.info("Destroying compression worker"), this._worker.terminate());
  }
  postMessage(t, s) {
    const i = this._getAndIncrementId();
    return new Promise((a, u) => {
      const d = ({ data: p }) => {
        const h = p;
        if (h.method === t && h.id === i) {
          if ((this._worker.removeEventListener("message", d), !h.success)) {
            (le && fe.error("Error in compression worker: ", h.response),
              u(new Error("Error in compression worker")));
            return;
          }
          a(h.response);
        }
      };
      (this._worker.addEventListener("message", d),
        this._worker.postMessage({ id: i, method: t, arg: s }));
    });
  }
  _getAndIncrementId() {
    return this._id++;
  }
}
class XI {
  constructor(t) {
    ((this._worker = new KI(t)),
      (this._earliestTimestamp = null),
      (this._totalSize = 0),
      (this.hasCheckout = !1),
      (this.waitForCheckout = !1));
  }
  get hasEvents() {
    return !!this._earliestTimestamp;
  }
  get type() {
    return "worker";
  }
  ensureReady() {
    return this._worker.ensureReady();
  }
  destroy() {
    this._worker.destroy();
  }
  addEvent(t) {
    const s = Kd(t.timestamp);
    (!this._earliestTimestamp || s < this._earliestTimestamp) &&
      (this._earliestTimestamp = s);
    const i = JSON.stringify(t);
    return (
      (this._totalSize += i.length),
      this._totalSize > Hd
        ? Promise.reject(new Xd())
        : this._sendEventToWorker(i)
    );
  }
  finish() {
    return this._finishRequest();
  }
  clear() {
    ((this._earliestTimestamp = null),
      (this._totalSize = 0),
      (this.hasCheckout = !1),
      this._worker.postMessage("clear").then(null, (t) => {
        le && fe.exception(t, 'Sending "clear" message to worker failed', t);
      }));
  }
  getEarliestTimestamp() {
    return this._earliestTimestamp;
  }
  _sendEventToWorker(t) {
    return this._worker.postMessage("addEvent", t);
  }
  async _finishRequest() {
    const t = await this._worker.postMessage("finish");
    return ((this._earliestTimestamp = null), (this._totalSize = 0), t);
  }
}
class JI {
  constructor(t) {
    ((this._fallback = new b0()),
      (this._compression = new XI(t)),
      (this._used = this._fallback),
      (this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()));
  }
  get waitForCheckout() {
    return this._used.waitForCheckout;
  }
  get type() {
    return this._used.type;
  }
  get hasEvents() {
    return this._used.hasEvents;
  }
  get hasCheckout() {
    return this._used.hasCheckout;
  }
  set hasCheckout(t) {
    this._used.hasCheckout = t;
  }
  set waitForCheckout(t) {
    this._used.waitForCheckout = t;
  }
  destroy() {
    (this._fallback.destroy(), this._compression.destroy());
  }
  clear() {
    return this._used.clear();
  }
  getEarliestTimestamp() {
    return this._used.getEarliestTimestamp();
  }
  addEvent(t) {
    return this._used.addEvent(t);
  }
  async finish() {
    return (await this.ensureWorkerIsLoaded(), this._used.finish());
  }
  ensureWorkerIsLoaded() {
    return this._ensureWorkerIsLoadedPromise;
  }
  async _ensureWorkerIsLoaded() {
    try {
      await this._compression.ensureReady();
    } catch (t) {
      le &&
        fe.exception(
          t,
          "Failed to load the compression worker, falling back to simple buffer",
        );
      return;
    }
    await this._switchToCompressionWorker();
  }
  async _switchToCompressionWorker() {
    const { events: t, hasCheckout: s, waitForCheckout: i } = this._fallback,
      a = [];
    for (const u of t) a.push(this._compression.addEvent(u));
    ((this._compression.hasCheckout = s),
      (this._compression.waitForCheckout = i),
      (this._used = this._compression));
    try {
      (await Promise.all(a), this._fallback.clear());
    } catch (u) {
      le && fe.exception(u, "Failed to add events when switching buffers.");
    }
  }
}
function QI({ useCompression: e, workerUrl: t }) {
  if (e && window.Worker) {
    const s = ZI(t);
    if (s) return s;
  }
  return (le && fe.info("Using simple buffer"), new b0());
}
function ZI(e) {
  try {
    const t = e || eC();
    if (!t) return;
    le && fe.info(`Using compression worker${e ? ` from ${e}` : ""}`);
    const s = new Worker(t);
    return new JI(s);
  } catch (t) {
    le && fe.exception(t, "Failed to create compression worker");
  }
}
function eC() {
  return typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ > "u" ||
    !__SENTRY_EXCLUDE_REPLAY_WORKER__
    ? GI()
    : "";
}
function Jd() {
  try {
    return "sessionStorage" in We && !!We.sessionStorage;
  } catch {
    return !1;
  }
}
function tC(e) {
  (nC(), (e.session = void 0));
}
function nC() {
  if (Jd())
    try {
      We.sessionStorage.removeItem($d);
    } catch {}
}
function R0(e) {
  return e === void 0 ? !1 : Math.random() < e;
}
function M0(e) {
  const t = Date.now(),
    s = e.id || Wt(),
    i = e.started || t,
    a = e.lastActivity || t,
    u = e.segmentId || 0,
    d = e.sampled,
    p = e.previousSessionId;
  return {
    id: s,
    started: i,
    lastActivity: a,
    segmentId: u,
    sampled: d,
    previousSessionId: p,
  };
}
function Qd(e) {
  if (Jd())
    try {
      We.sessionStorage.setItem($d, JSON.stringify(e));
    } catch {}
}
function rC(e, t) {
  return R0(e) ? "session" : t ? "buffer" : !1;
}
function pg(
  { sessionSampleRate: e, allowBuffering: t, stickySession: s = !1 },
  { previousSessionId: i } = {},
) {
  const a = rC(e, t),
    u = M0({ sampled: a, previousSessionId: i });
  return (s && Qd(u), u);
}
function sC() {
  if (!Jd()) return null;
  try {
    const e = We.sessionStorage.getItem($d);
    if (!e) return null;
    const t = JSON.parse(e);
    return (le && fe.infoTick("Loading existing session"), M0(t));
  } catch {
    return null;
  }
}
function _d(e, t, s = +new Date()) {
  return e === null || t === void 0 || t < 0 ? !0 : t === 0 ? !1 : e + t <= s;
}
function O0(
  e,
  { maxReplayDuration: t, sessionIdleExpire: s, targetTime: i = Date.now() },
) {
  return _d(e.started, t, i) || _d(e.lastActivity, s, i);
}
function D0(e, { sessionIdleExpire: t, maxReplayDuration: s }) {
  return !(
    !O0(e, { sessionIdleExpire: t, maxReplayDuration: s }) ||
    (e.sampled === "buffer" && e.segmentId === 0)
  );
}
function Fc(
  { sessionIdleExpire: e, maxReplayDuration: t, previousSessionId: s },
  i,
) {
  const a = i.stickySession && sC();
  return a
    ? D0(a, { sessionIdleExpire: e, maxReplayDuration: t })
      ? (le &&
          fe.infoTick(
            "Session in sessionStorage is expired, creating new one...",
          ),
        pg(i, { previousSessionId: a.id }))
      : a
    : (le && fe.infoTick("Creating new session"),
      pg(i, { previousSessionId: s }));
}
function iC(e) {
  return e.type === Ee.Custom;
}
function Zd(e, t, s) {
  return P0(e, t) ? (A0(e, t, s), !0) : !1;
}
function oC(e, t, s) {
  return P0(e, t) ? A0(e, t, s) : Promise.resolve(null);
}
async function A0(e, t, s) {
  const { eventBuffer: i } = e;
  if (!i || (i.waitForCheckout && !s)) return null;
  const a = e.recordingMode === "buffer";
  try {
    (s && a && i.clear(),
      s && ((i.hasCheckout = !0), (i.waitForCheckout = !1)));
    const u = e.getOptions(),
      d = aC(t, u.beforeAddRecordingEvent);
    return d ? await i.addEvent(d) : void 0;
  } catch (u) {
    const d = u && u instanceof Xd,
      p = d ? "addEventSizeExceeded" : "addEvent";
    if (d && a) return (i.clear(), (i.waitForCheckout = !0), null);
    (e.handleException(u), await e.stop({ reason: p }));
    const h = Te();
    h && h.recordDroppedEvent("internal_sdk_error", "replay");
  }
}
function P0(e, t) {
  if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
  const s = Kd(t.timestamp);
  return s + e.timeouts.sessionIdlePause < Date.now()
    ? !1
    : s > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration
      ? (le &&
          fe.infoTick(
            `Skipping event with timestamp ${s} because it is after maxReplayDuration`,
          ),
        !1)
      : !0;
}
function aC(e, t) {
  try {
    if (typeof t == "function" && iC(e)) return t(e);
  } catch (s) {
    return (
      le &&
        fe.exception(
          s,
          "An error occurred in the `beforeAddRecordingEvent` callback, skipping the event...",
        ),
      null
    );
  }
  return e;
}
function ef(e) {
  return !e.type;
}
function Sd(e) {
  return e.type === "transaction";
}
function lC(e) {
  return e.type === "replay_event";
}
function hg(e) {
  return e.type === "feedback";
}
function uC(e) {
  return (t, s) => {
    if (!e.isEnabled() || (!ef(t) && !Sd(t))) return;
    const i = s && s.statusCode;
    if (!(!i || i < 200 || i >= 300)) {
      if (Sd(t)) {
        cC(e, t);
        return;
      }
      dC(e, t);
    }
  };
}
function cC(e, t) {
  const s = e.getContext();
  t.contexts &&
    t.contexts.trace &&
    t.contexts.trace.trace_id &&
    s.traceIds.size < 100 &&
    s.traceIds.add(t.contexts.trace.trace_id);
}
function dC(e, t) {
  const s = e.getContext();
  if (
    (t.event_id && s.errorIds.size < 100 && s.errorIds.add(t.event_id),
    e.recordingMode !== "buffer" || !t.tags || !t.tags.replayId)
  )
    return;
  const { beforeErrorSampling: i } = e.getOptions();
  (typeof i == "function" && !i(t)) ||
    zs(async () => {
      try {
        await e.sendBufferedReplayOrFlush();
      } catch (a) {
        e.handleException(a);
      }
    });
}
function fC(e) {
  return (t) => {
    !e.isEnabled() || !ef(t) || pC(e, t);
  };
}
function pC(e, t) {
  const s =
    t.exception &&
    t.exception.values &&
    t.exception.values[0] &&
    t.exception.values[0].value;
  if (
    typeof s == "string" &&
    (s.match(
      /(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/,
    ) ||
      s.match(
        /(does not match server-rendered HTML|Hydration failed because)/i,
      ))
  ) {
    const i = xn({ category: "replay.hydrate-error", data: { url: zg() } });
    lo(e, i);
  }
}
function hC(e) {
  const t = Te();
  t && t.on("beforeAddBreadcrumb", (s) => mC(e, s));
}
function mC(e, t) {
  if (!e.isEnabled() || !L0(t)) return;
  const s = gC(t);
  s && lo(e, s);
}
function gC(e) {
  return !L0(e) ||
    ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(
      e.category,
    ) ||
    e.category.startsWith("ui.")
    ? null
    : e.category === "console"
      ? yC(e)
      : xn(e);
}
function yC(e) {
  const t = e.data && e.data.arguments;
  if (!Array.isArray(t) || t.length === 0) return xn(e);
  let s = !1;
  const i = t.map((a) => {
    if (!a) return a;
    if (typeof a == "string")
      return a.length > Ra ? ((s = !0), `${a.slice(0, Ra)}…`) : a;
    if (typeof a == "object")
      try {
        const u = fn(a, 7);
        return JSON.stringify(u).length > Ra
          ? ((s = !0), `${JSON.stringify(u, null, 2).slice(0, Ra)}…`)
          : u;
      } catch {}
    return a;
  });
  return xn({
    ...e,
    data: {
      ...e.data,
      arguments: i,
      ...(s ? { _meta: { warnings: ["CONSOLE_ARG_TRUNCATED"] } } : {}),
    },
  });
}
function L0(e) {
  return !!e.category;
}
function vC(e, t) {
  return e.type ||
    !e.exception ||
    !e.exception.values ||
    !e.exception.values.length
    ? !1
    : !!(t.originalException && t.originalException.__rrweb__);
}
function j0() {
  const e = ze().getPropagationContext().dsc;
  e && delete e.replay_id;
  const t = ht();
  if (t) {
    const s = Qr(t);
    delete s.replay_id;
  }
}
function _C(e, t) {
  (e.triggerUserActivity(),
    e.addUpdate(() =>
      t.timestamp
        ? (e.throttledAddEvent({
            type: Ee.Custom,
            timestamp: t.timestamp * 1e3,
            data: {
              tag: "breadcrumb",
              payload: {
                timestamp: t.timestamp,
                type: "default",
                category: "sentry.feedback",
                data: { feedbackId: t.event_id },
              },
            },
          }),
          !1)
        : !0,
    ));
}
function SC(e, t) {
  return e.recordingMode !== "buffer" ||
    t.message === Bd ||
    !t.exception ||
    t.type
    ? !1
    : R0(e.getOptions().errorSampleRate);
}
function EC(e) {
  return Object.assign(
    (t, s) =>
      !e.isEnabled() || e.isPaused()
        ? t
        : lC(t)
          ? (delete t.breadcrumbs, t)
          : !ef(t) && !Sd(t) && !hg(t)
            ? t
            : e.checkAndHandleExpiredSession()
              ? hg(t)
                ? (e.flush(),
                  (t.contexts.feedback.replay_id = e.getSessionId()),
                  _C(e, t),
                  t)
                : vC(t, s) && !e.getOptions()._experiments.captureExceptions
                  ? (le && fe.log("Ignoring error from rrweb internals", t),
                    null)
                  : ((SC(e, t) || e.recordingMode === "session") &&
                      (t.tags = { ...t.tags, replayId: e.getSessionId() }),
                    t)
              : (j0(), t),
    { id: "Replay" },
  );
}
function Il(e, t) {
  return t.map(({ type: s, start: i, end: a, name: u, data: d }) => {
    const p = e.throttledAddEvent({
      type: Ee.Custom,
      timestamp: i,
      data: {
        tag: "performanceSpan",
        payload: {
          op: s,
          description: u,
          startTimestamp: i,
          endTimestamp: a,
          data: d,
        },
      },
    });
    return typeof p == "string" ? Promise.resolve(null) : p;
  });
}
function wC(e) {
  const { from: t, to: s } = e,
    i = Date.now() / 1e3;
  return {
    type: "navigation.push",
    start: i,
    end: i,
    name: s,
    data: { previous: t },
  };
}
function xC(e) {
  return (t) => {
    if (!e.isEnabled()) return;
    const s = wC(t);
    s !== null &&
      (e.getContext().urls.push(s.name),
      e.triggerUserActivity(),
      e.addUpdate(() => (Il(e, [s]), !1)));
  };
}
function kC(e, t) {
  return le && e.getOptions()._experiments.traceInternals ? !1 : ww(t, Te());
}
function F0(e, t) {
  e.isEnabled() &&
    t !== null &&
    (kC(e, t.name) || e.addUpdate(() => (Il(e, [t]), !0)));
}
function Cl(e) {
  if (!e) return;
  const t = new TextEncoder();
  try {
    if (typeof e == "string") return t.encode(e).length;
    if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
    if (e instanceof FormData) {
      const s = B0(e);
      return t.encode(s).length;
    }
    if (e instanceof Blob) return e.size;
    if (e instanceof ArrayBuffer) return e.byteLength;
  } catch {}
}
function U0(e) {
  if (!e) return;
  const t = parseInt(e, 10);
  return isNaN(t) ? void 0 : t;
}
function z0(e) {
  try {
    if (typeof e == "string") return [e];
    if (e instanceof URLSearchParams) return [e.toString()];
    if (e instanceof FormData) return [B0(e)];
    if (!e) return [void 0];
  } catch (t) {
    return (
      le && fe.exception(t, "Failed to serialize body", e),
      [void 0, "BODY_PARSE_ERROR"]
    );
  }
  return (
    le && fe.info("Skipping network body because of body type", e),
    [void 0, "UNPARSEABLE_BODY_TYPE"]
  );
}
function ol(e, t) {
  if (!e) return { headers: {}, size: void 0, _meta: { warnings: [t] } };
  const s = { ...e._meta },
    i = s.warnings || [];
  return ((s.warnings = [...i, t]), (e._meta = s), e);
}
function $0(e, t) {
  if (!t) return null;
  const {
    startTimestamp: s,
    endTimestamp: i,
    url: a,
    method: u,
    statusCode: d,
    request: p,
    response: h,
  } = t;
  return {
    type: e,
    start: s / 1e3,
    end: i / 1e3,
    name: a,
    data: at({ method: u, statusCode: d, request: p, response: h }),
  };
}
function Qi(e) {
  return { headers: {}, size: e, _meta: { warnings: ["URL_SKIPPED"] } };
}
function vr(e, t, s) {
  if (!t && Object.keys(e).length === 0) return;
  if (!t) return { headers: e };
  if (!s) return { headers: e, size: t };
  const i = { headers: e, size: t },
    { body: a, warnings: u } = TC(s);
  return ((i.body = a), u && u.length > 0 && (i._meta = { warnings: u }), i);
}
function Ed(e, t) {
  return Object.entries(e).reduce((s, [i, a]) => {
    const u = i.toLowerCase();
    return (t.includes(u) && e[i] && (s[u] = a), s);
  }, {});
}
function B0(e) {
  return new URLSearchParams(e).toString();
}
function TC(e) {
  if (!e || typeof e != "string") return { body: e };
  const t = e.length > Ym,
    s = IC(e);
  if (t) {
    const i = e.slice(0, Ym);
    return s
      ? { body: i, warnings: ["MAYBE_JSON_TRUNCATED"] }
      : { body: `${i}…`, warnings: ["TEXT_TRUNCATED"] };
  }
  if (s)
    try {
      return { body: JSON.parse(e) };
    } catch {}
  return { body: e };
}
function IC(e) {
  const t = e[0],
    s = e[e.length - 1];
  return (t === "[" && s === "]") || (t === "{" && s === "}");
}
function al(e, t) {
  const s = CC(e);
  return yr(s, t);
}
function CC(e, t = We.document.baseURI) {
  if (
    e.startsWith("http://") ||
    e.startsWith("https://") ||
    e.startsWith(We.location.origin)
  )
    return e;
  const s = new URL(e, t);
  if (s.origin !== new URL(t).origin) return e;
  const i = s.href;
  return !e.endsWith("/") && i.endsWith("/") ? i.slice(0, -1) : i;
}
async function NC(e, t, s) {
  try {
    const i = await RC(e, t, s),
      a = $0("resource.fetch", i);
    F0(s.replay, a);
  } catch (i) {
    le && fe.exception(i, "Failed to capture fetch breadcrumb");
  }
}
function bC(e, t) {
  const { input: s, response: i } = t,
    a = s ? H0(s) : void 0,
    u = Cl(a),
    d = i ? U0(i.headers.get("content-length")) : void 0;
  (u !== void 0 && (e.data.request_body_size = u),
    d !== void 0 && (e.data.response_body_size = d));
}
async function RC(e, t, s) {
  const i = Date.now(),
    { startTimestamp: a = i, endTimestamp: u = i } = t,
    {
      url: d,
      method: p,
      status_code: h = 0,
      request_body_size: g,
      response_body_size: _,
    } = e.data,
    y = al(d, s.networkDetailAllowUrls) && !al(d, s.networkDetailDenyUrls),
    E = y ? MC(s, t.input, g) : Qi(g),
    C = await OC(y, s, t.response, _);
  return {
    startTimestamp: a,
    endTimestamp: u,
    url: d,
    method: p,
    statusCode: h,
    request: E,
    response: C,
  };
}
function MC({ networkCaptureBodies: e, networkRequestHeaders: t }, s, i) {
  const a = s ? PC(s, t) : {};
  if (!e) return vr(a, i, void 0);
  const u = H0(s),
    [d, p] = z0(u),
    h = vr(a, i, d);
  return p ? ol(h, p) : h;
}
async function OC(
  e,
  { networkCaptureBodies: t, networkResponseHeaders: s },
  i,
  a,
) {
  if (!e && a !== void 0) return Qi(a);
  const u = i ? W0(i.headers, s) : {};
  if (!i || (!t && a !== void 0)) return vr(u, a, void 0);
  const [d, p] = await AC(i),
    h = DC(d, {
      networkCaptureBodies: t,
      responseBodySize: a,
      captureDetails: e,
      headers: u,
    });
  return p ? ol(h, p) : h;
}
function DC(
  e,
  {
    networkCaptureBodies: t,
    responseBodySize: s,
    captureDetails: i,
    headers: a,
  },
) {
  try {
    const u = e && e.length && s === void 0 ? Cl(e) : s;
    return i ? (t ? vr(a, u, e) : vr(a, u, void 0)) : Qi(u);
  } catch (u) {
    return (
      le && fe.exception(u, "Failed to serialize response body"),
      vr(a, s, void 0)
    );
  }
}
async function AC(e) {
  const t = LC(e);
  if (!t) return [void 0, "BODY_PARSE_ERROR"];
  try {
    return [await jC(t)];
  } catch (s) {
    return s instanceof Error && s.message.indexOf("Timeout") > -1
      ? (le && fe.warn("Parsing text body from response timed out"),
        [void 0, "BODY_PARSE_TIMEOUT"])
      : (le && fe.exception(s, "Failed to get text body from response"),
        [void 0, "BODY_PARSE_ERROR"]);
  }
}
function H0(e = []) {
  if (!(e.length !== 2 || typeof e[1] != "object")) return e[1].body;
}
function W0(e, t) {
  const s = {};
  return (
    t.forEach((i) => {
      e.get(i) && (s[i] = e.get(i));
    }),
    s
  );
}
function PC(e, t) {
  return e.length === 1 && typeof e[0] != "string"
    ? mg(e[0], t)
    : e.length === 2
      ? mg(e[1], t)
      : {};
}
function mg(e, t) {
  if (!e) return {};
  const s = e.headers;
  return s
    ? s instanceof Headers
      ? W0(s, t)
      : Array.isArray(s)
        ? {}
        : Ed(s, t)
    : {};
}
function LC(e) {
  try {
    return e.clone();
  } catch (t) {
    le && fe.exception(t, "Failed to clone response body");
  }
}
function jC(e) {
  return new Promise((t, s) => {
    const i = zs(
      () => s(new Error("Timeout while trying to read response body")),
      500,
    );
    FC(e)
      .then(
        (a) => t(a),
        (a) => s(a),
      )
      .finally(() => clearTimeout(i));
  });
}
async function FC(e) {
  return await e.text();
}
async function UC(e, t, s) {
  try {
    const i = $C(e, t, s),
      a = $0("resource.xhr", i);
    F0(s.replay, a);
  } catch (i) {
    le && fe.exception(i, "Failed to capture xhr breadcrumb");
  }
}
function zC(e, t) {
  const { xhr: s, input: i } = t;
  if (!s) return;
  const a = Cl(i),
    u = s.getResponseHeader("content-length")
      ? U0(s.getResponseHeader("content-length"))
      : qC(s.response, s.responseType);
  (a !== void 0 && (e.data.request_body_size = a),
    u !== void 0 && (e.data.response_body_size = u));
}
function $C(e, t, s) {
  const i = Date.now(),
    { startTimestamp: a = i, endTimestamp: u = i, input: d, xhr: p } = t,
    {
      url: h,
      method: g,
      status_code: _ = 0,
      request_body_size: y,
      response_body_size: E,
    } = e.data;
  if (!h) return null;
  if (
    !p ||
    !al(h, s.networkDetailAllowUrls) ||
    al(h, s.networkDetailDenyUrls)
  ) {
    const A = Qi(y),
      q = Qi(E);
    return {
      startTimestamp: a,
      endTimestamp: u,
      url: h,
      method: g,
      statusCode: _,
      request: A,
      response: q,
    };
  }
  const C = p[Br],
    T = C ? Ed(C.request_headers, s.networkRequestHeaders) : {},
    N = Ed(BC(p), s.networkResponseHeaders),
    [x, D] = s.networkCaptureBodies ? z0(d) : [void 0],
    [B, V] = s.networkCaptureBodies ? HC(p) : [void 0],
    K = vr(T, y, x),
    R = vr(N, E, B);
  return {
    startTimestamp: a,
    endTimestamp: u,
    url: h,
    method: g,
    statusCode: _,
    request: D ? ol(K, D) : K,
    response: V ? ol(R, V) : R,
  };
}
function BC(e) {
  const t = e.getAllResponseHeaders();
  return t
    ? t
        .split(
          `\r
`,
        )
        .reduce((s, i) => {
          const [a, u] = i.split(": ");
          return (u && (s[a.toLowerCase()] = u), s);
        }, {})
    : {};
}
function HC(e) {
  const t = [];
  try {
    return [e.responseText];
  } catch (s) {
    t.push(s);
  }
  try {
    return WC(e.response, e.responseType);
  } catch (s) {
    t.push(s);
  }
  return (le && fe.warn("Failed to get xhr response body", ...t), [void 0]);
}
function WC(e, t) {
  try {
    if (typeof e == "string") return [e];
    if (e instanceof Document) return [e.body.outerHTML];
    if (t === "json" && e && typeof e == "object") return [JSON.stringify(e)];
    if (!e) return [void 0];
  } catch (s) {
    return (
      le && fe.exception(s, "Failed to serialize body", e),
      [void 0, "BODY_PARSE_ERROR"]
    );
  }
  return (
    le && fe.info("Skipping network body because of body type", e),
    [void 0, "UNPARSEABLE_BODY_TYPE"]
  );
}
function qC(e, t) {
  try {
    const s = t === "json" && e && typeof e == "object" ? JSON.stringify(e) : e;
    return Cl(s);
  } catch {
    return;
  }
}
function VC(e) {
  const t = Te();
  try {
    const {
        networkDetailAllowUrls: s,
        networkDetailDenyUrls: i,
        networkCaptureBodies: a,
        networkRequestHeaders: u,
        networkResponseHeaders: d,
      } = e.getOptions(),
      p = {
        replay: e,
        networkDetailAllowUrls: s,
        networkDetailDenyUrls: i,
        networkCaptureBodies: a,
        networkRequestHeaders: u,
        networkResponseHeaders: d,
      };
    t && t.on("beforeAddBreadcrumb", (h, g) => GC(p, h, g));
  } catch {}
}
function GC(e, t, s) {
  if (t.data)
    try {
      (YC(t) && XC(s) && (zC(t, s), UC(t, s, e)),
        KC(t) && JC(s) && (bC(t, s), NC(t, s, e)));
    } catch (i) {
      le && fe.exception(i, "Error when enriching network breadcrumb");
    }
}
function YC(e) {
  return e.category === "xhr";
}
function KC(e) {
  return e.category === "fetch";
}
function XC(e) {
  return e && e.xhr;
}
function JC(e) {
  return e && e.response;
}
function QC(e) {
  const t = Te();
  (Qy(CI(e)), El(xC(e)), hC(e), VC(e));
  const s = EC(e);
  (tw(s),
    t &&
      (t.on("beforeSendEvent", fC(e)),
      t.on("afterSendEvent", uC(e)),
      t.on("createDsc", (i) => {
        const a = e.getSessionId();
        a &&
          e.isEnabled() &&
          e.recordingMode === "session" &&
          e.checkAndHandleExpiredSession() &&
          (i.replay_id = a);
      }),
      t.on("spanStart", (i) => {
        e.lastActiveSpan = i;
      }),
      t.on("spanEnd", (i) => {
        e.lastActiveSpan = i;
      }),
      t.on("beforeSendFeedback", (i, a) => {
        const u = e.getSessionId();
        a &&
          a.includeReplay &&
          e.isEnabled() &&
          u &&
          i.contexts &&
          i.contexts.feedback &&
          (i.contexts.feedback.replay_id = u);
      })));
}
async function ZC(e) {
  try {
    return Promise.all(Il(e, [eN(We.performance.memory)]));
  } catch {
    return [];
  }
}
function eN(e) {
  const { jsHeapSizeLimit: t, totalJSHeapSize: s, usedJSHeapSize: i } = e,
    a = Date.now() / 1e3;
  return {
    type: "memory",
    name: "memory",
    start: a,
    end: a,
    data: {
      memory: { jsHeapSizeLimit: t, totalJSHeapSize: s, usedJSHeapSize: i },
    },
  };
}
function tN(e, t, s) {
  let i, a, u;
  const d = s && s.maxWait ? Math.max(s.maxWait, t) : 0;
  function p() {
    return (h(), (i = e()), i);
  }
  function h() {
    (a !== void 0 && clearTimeout(a),
      u !== void 0 && clearTimeout(u),
      (a = u = void 0));
  }
  function g() {
    return a !== void 0 || u !== void 0 ? p() : i;
  }
  function _() {
    return (
      a && clearTimeout(a),
      (a = zs(p, t)),
      d && u === void 0 && (u = zs(p, d)),
      i
    );
  }
  return ((_.cancel = h), (_.flush = g), _);
}
const $r = Ne.navigator;
function nN() {
  return /iPhone|iPad|iPod/i.test(($r && $r.userAgent) || "") ||
    (/Macintosh/i.test(($r && $r.userAgent) || "") &&
      $r &&
      $r.maxTouchPoints &&
      $r.maxTouchPoints > 1)
    ? { sampling: { mousemove: !1 } }
    : {};
}
function rN(e) {
  let t = !1;
  return (s, i) => {
    if (!e.checkAndHandleExpiredSession()) {
      le && fe.warn("Received replay event after session expired.");
      return;
    }
    const a = i || !t;
    ((t = !0),
      e.clickDetector && wI(e.clickDetector, s),
      e.addUpdate(() => {
        if (
          (e.recordingMode === "buffer" && a && e.setInitialState(),
          !Zd(e, s, a))
        )
          return !0;
        if (!a) return !1;
        const u = e.session;
        if ((iN(e, a), e.recordingMode === "buffer" && u && e.eventBuffer)) {
          const d = e.eventBuffer.getEarliestTimestamp();
          d &&
            (le &&
              fe.info(
                `Updating session start time to earliest event in buffer to ${new Date(d)}`,
              ),
            (u.started = d),
            e.getOptions().stickySession && Qd(u));
        }
        return (
          (u && u.previousSessionId) ||
            (e.recordingMode === "session" && e.flush()),
          !0
        );
      }));
  };
}
function sN(e) {
  const t = e.getOptions();
  return {
    type: Ee.Custom,
    timestamp: Date.now(),
    data: {
      tag: "options",
      payload: {
        shouldRecordCanvas: e.isRecordingCanvas(),
        sessionSampleRate: t.sessionSampleRate,
        errorSampleRate: t.errorSampleRate,
        useCompressionOption: t.useCompression,
        blockAllMedia: t.blockAllMedia,
        maskAllText: t.maskAllText,
        maskAllInputs: t.maskAllInputs,
        useCompression: e.eventBuffer ? e.eventBuffer.type === "worker" : !1,
        networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
        networkCaptureBodies: t.networkCaptureBodies,
        networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
        networkResponseHasHeaders: t.networkResponseHeaders.length > 0,
      },
    },
  };
}
function iN(e, t) {
  !t || !e.session || e.session.segmentId !== 0 || Zd(e, sN(e), !1);
}
function oN(e, t, s, i) {
  return Zr(dy(e, Dd(e), i, s), [
    [{ type: "replay_event" }, e],
    [
      {
        type: "replay_recording",
        length:
          typeof t == "string" ? new TextEncoder().encode(t).length : t.length,
      },
      t,
    ],
  ]);
}
function aN({ recordingData: e, headers: t }) {
  let s;
  const i = `${JSON.stringify(t)}
`;
  if (typeof e == "string") s = `${i}${e}`;
  else {
    const u = new TextEncoder().encode(i);
    ((s = new Uint8Array(u.length + e.length)), s.set(u), s.set(e, u.length));
  }
  return s;
}
async function lN({ client: e, scope: t, replayId: s, event: i }) {
  const a =
      typeof e._integrations == "object" &&
      e._integrations !== null &&
      !Array.isArray(e._integrations)
        ? Object.keys(e._integrations)
        : void 0,
    u = { event_id: s, integrations: a };
  e.emit("preprocessEvent", i, u);
  const d = await gy(e.getOptions(), i, u, t, e, nn());
  if (!d) return null;
  d.platform = d.platform || "javascript";
  const p = e.getSdkMetadata(),
    { name: h, version: g } = (p && p.sdk) || {};
  return (
    (d.sdk = {
      ...d.sdk,
      name: h || "sentry.javascript.unknown",
      version: g || "0.0.0",
    }),
    d
  );
}
async function uN({
  recordingData: e,
  replayId: t,
  segmentId: s,
  eventContext: i,
  timestamp: a,
  session: u,
}) {
  const d = aN({ recordingData: e, headers: { segment_id: s } }),
    { urls: p, errorIds: h, traceIds: g, initialTimestamp: _ } = i,
    y = Te(),
    E = ze(),
    C = y && y.getTransport(),
    T = y && y.getDsn();
  if (!y || !C || !T || !u.sampled) return Hn({});
  const N = {
      type: $k,
      replay_start_timestamp: _ / 1e3,
      timestamp: a / 1e3,
      error_ids: h,
      trace_ids: g,
      urls: p,
      replay_id: t,
      segment_id: s,
      replay_type: u.sampled,
    },
    x = await lN({ scope: E, client: y, replayId: t, event: N });
  if (!x)
    return (
      y.recordDroppedEvent("event_processor", "replay", N),
      le && fe.info("An event processor returned `null`, will not send event."),
      Hn({})
    );
  delete x.sdkProcessingMetadata;
  const D = oN(x, d, T, y.getOptions().tunnel);
  let B;
  try {
    B = await C.send(D);
  } catch (K) {
    const R = new Error(Bd);
    try {
      R.cause = K;
    } catch {}
    throw R;
  }
  if (
    typeof B.statusCode == "number" &&
    (B.statusCode < 200 || B.statusCode >= 300)
  )
    throw new q0(B.statusCode);
  const V = Iy({}, B);
  if (Ty(V, "replay")) throw new tf(V);
  return B;
}
class q0 extends Error {
  constructor(t) {
    super(`Transport returned status code ${t}`);
  }
}
class tf extends Error {
  constructor(t) {
    (super("Rate limit hit"), (this.rateLimits = t));
  }
}
async function V0(e, t = { count: 0, interval: Gk }) {
  const { recordingData: s, onError: i } = e;
  if (s.length)
    try {
      return (await uN(e), !0);
    } catch (a) {
      if (a instanceof q0 || a instanceof tf) throw a;
      if ((vy("Replays", { _retryCount: t.count }), i && i(a), t.count >= Yk)) {
        const u = new Error(`${Bd} - max retries exceeded`);
        try {
          u.cause = a;
        } catch {}
        throw u;
      }
      return (
        (t.interval *= ++t.count),
        new Promise((u, d) => {
          zs(async () => {
            try {
              (await V0(e, t), u(!0));
            } catch (p) {
              d(p);
            }
          }, t.interval);
        })
      );
    }
}
const G0 = "__THROTTLED",
  cN = "__SKIPPED";
function dN(e, t, s) {
  const i = new Map(),
    a = (p) => {
      const h = p - s;
      i.forEach((g, _) => {
        _ < h && i.delete(_);
      });
    },
    u = () => [...i.values()].reduce((p, h) => p + h, 0);
  let d = !1;
  return (...p) => {
    const h = Math.floor(Date.now() / 1e3);
    if ((a(h), u() >= t)) {
      const _ = d;
      return ((d = !0), _ ? cN : G0);
    }
    d = !1;
    const g = i.get(h) || 0;
    return (i.set(h, g + 1), e(...p));
  };
}
class gr {
  constructor({ options: t, recordingOptions: s }) {
    (gr.prototype.__init.call(this),
      gr.prototype.__init2.call(this),
      gr.prototype.__init3.call(this),
      gr.prototype.__init4.call(this),
      gr.prototype.__init5.call(this),
      gr.prototype.__init6.call(this),
      (this.eventBuffer = null),
      (this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      (this.recordingMode = "session"),
      (this.timeouts = { sessionIdlePause: Bk, sessionIdleExpire: Hk }),
      (this._lastActivity = Date.now()),
      (this._isEnabled = !1),
      (this._isPaused = !1),
      (this._requiresManualStart = !1),
      (this._hasInitializedCoreListeners = !1),
      (this._context = {
        errorIds: new Set(),
        traceIds: new Set(),
        urls: [],
        initialTimestamp: Date.now(),
        initialUrl: "",
      }),
      (this._recordingOptions = s),
      (this._options = t),
      (this._debouncedFlush = tN(
        () => this._flush(),
        this._options.flushMinDelay,
        { maxWait: this._options.flushMaxDelay },
      )),
      (this._throttledAddEvent = dN((d, p) => oC(this, d, p), 300, 5)));
    const { slowClickTimeout: i, slowClickIgnoreSelectors: a } =
        this.getOptions(),
      u = i
        ? {
            threshold: Math.min(Kk, i),
            timeout: i,
            scrollTimeout: Xk,
            ignoreSelector: a ? a.join(",") : "",
          }
        : void 0;
    if ((u && (this.clickDetector = new vI(this, u)), le)) {
      const d = t._experiments;
      fe.setConfig({
        captureExceptions: !!d.captureExceptions,
        traceInternals: !!d.traceInternals,
      });
    }
  }
  getContext() {
    return this._context;
  }
  isEnabled() {
    return this._isEnabled;
  }
  isPaused() {
    return this._isPaused;
  }
  isRecordingCanvas() {
    return !!this._canvas;
  }
  getOptions() {
    return this._options;
  }
  handleException(t) {
    (le && fe.exception(t), this._options.onError && this._options.onError(t));
  }
  initializeSampling(t) {
    const { errorSampleRate: s, sessionSampleRate: i } = this._options,
      a = s <= 0 && i <= 0;
    if (((this._requiresManualStart = a), !a)) {
      if ((this._initializeSessionForSampling(t), !this.session)) {
        le &&
          fe.exception(new Error("Unable to initialize and create session"));
        return;
      }
      this.session.sampled !== !1 &&
        ((this.recordingMode =
          this.session.sampled === "buffer" && this.session.segmentId === 0
            ? "buffer"
            : "session"),
        le && fe.infoTick(`Starting replay in ${this.recordingMode} mode`),
        this._initializeRecording());
    }
  }
  start() {
    if (this._isEnabled && this.recordingMode === "session") {
      le && fe.info("Recording is already in progress");
      return;
    }
    if (this._isEnabled && this.recordingMode === "buffer") {
      le &&
        fe.info("Buffering is in progress, call `flush()` to save the replay");
      return;
    }
    (le && fe.infoTick("Starting replay in session mode"),
      this._updateUserActivity());
    const t = Fc(
      {
        maxReplayDuration: this._options.maxReplayDuration,
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
      },
      {
        stickySession: this._options.stickySession,
        sessionSampleRate: 1,
        allowBuffering: !1,
      },
    );
    ((this.session = t), this._initializeRecording());
  }
  startBuffering() {
    if (this._isEnabled) {
      le &&
        fe.info("Buffering is in progress, call `flush()` to save the replay");
      return;
    }
    le && fe.infoTick("Starting replay in buffer mode");
    const t = Fc(
      {
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
        maxReplayDuration: this._options.maxReplayDuration,
      },
      {
        stickySession: this._options.stickySession,
        sessionSampleRate: 0,
        allowBuffering: !0,
      },
    );
    ((this.session = t),
      (this.recordingMode = "buffer"),
      this._initializeRecording());
  }
  startRecording() {
    try {
      const t = this._canvas;
      this._stopRecording = Un({
        ...this._recordingOptions,
        ...(this.recordingMode === "buffer"
          ? { checkoutEveryNms: Vk }
          : this._options._experiments.continuousCheckout && {
              checkoutEveryNms: Math.max(
                36e4,
                this._options._experiments.continuousCheckout,
              ),
            }),
        emit: rN(this),
        ...nN(),
        onMutation: this._onMutationHandler,
        ...(t
          ? {
              recordCanvas: t.recordCanvas,
              getCanvasManager: t.getCanvasManager,
              sampling: t.sampling,
              dataURLOptions: t.dataURLOptions,
            }
          : {}),
      });
    } catch (t) {
      this.handleException(t);
    }
  }
  stopRecording() {
    try {
      return (
        this._stopRecording &&
          (this._stopRecording(), (this._stopRecording = void 0)),
        !0
      );
    } catch (t) {
      return (this.handleException(t), !1);
    }
  }
  async stop({ forceFlush: t = !1, reason: s } = {}) {
    if (this._isEnabled) {
      this._isEnabled = !1;
      try {
        (le && fe.info(`Stopping Replay${s ? ` triggered by ${s}` : ""}`),
          j0(),
          this._removeListeners(),
          this.stopRecording(),
          this._debouncedFlush.cancel(),
          t && (await this._flush({ force: !0 })),
          this.eventBuffer && this.eventBuffer.destroy(),
          (this.eventBuffer = null),
          tC(this));
      } catch (i) {
        this.handleException(i);
      }
    }
  }
  pause() {
    this._isPaused ||
      ((this._isPaused = !0),
      this.stopRecording(),
      le && fe.info("Pausing replay"));
  }
  resume() {
    !this._isPaused ||
      !this._checkSession() ||
      ((this._isPaused = !1),
      this.startRecording(),
      le && fe.info("Resuming replay"));
  }
  async sendBufferedReplayOrFlush({ continueRecording: t = !0 } = {}) {
    if (this.recordingMode === "session") return this.flushImmediate();
    const s = Date.now();
    (le && fe.info("Converting buffer to session"),
      await this.flushImmediate());
    const i = this.stopRecording();
    !t ||
      !i ||
      (this.recordingMode !== "session" &&
        ((this.recordingMode = "session"),
        this.session &&
          (this._updateUserActivity(s),
          this._updateSessionActivity(s),
          this._maybeSaveSession()),
        this.startRecording()));
  }
  addUpdate(t) {
    const s = t();
    this.recordingMode !== "buffer" && s !== !0 && this._debouncedFlush();
  }
  triggerUserActivity() {
    if ((this._updateUserActivity(), !this._stopRecording)) {
      if (!this._checkSession()) return;
      this.resume();
      return;
    }
    (this.checkAndHandleExpiredSession(), this._updateSessionActivity());
  }
  updateUserActivity() {
    (this._updateUserActivity(), this._updateSessionActivity());
  }
  conditionalFlush() {
    return this.recordingMode === "buffer"
      ? Promise.resolve()
      : this.flushImmediate();
  }
  flush() {
    return this._debouncedFlush();
  }
  flushImmediate() {
    return (this._debouncedFlush(), this._debouncedFlush.flush());
  }
  cancelFlush() {
    this._debouncedFlush.cancel();
  }
  getSessionId() {
    return this.session && this.session.id;
  }
  checkAndHandleExpiredSession() {
    if (
      this._lastActivity &&
      _d(this._lastActivity, this.timeouts.sessionIdlePause) &&
      this.session &&
      this.session.sampled === "session"
    ) {
      this.pause();
      return;
    }
    return !!this._checkSession();
  }
  setInitialState() {
    const t = `${We.location.pathname}${We.location.hash}${We.location.search}`,
      s = `${We.location.origin}${t}`;
    ((this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      this._clearContext(),
      (this._context.initialUrl = s),
      (this._context.initialTimestamp = Date.now()),
      this._context.urls.push(s));
  }
  throttledAddEvent(t, s) {
    const i = this._throttledAddEvent(t, s);
    if (i === G0) {
      const a = xn({ category: "replay.throttled" });
      this.addUpdate(
        () =>
          !Zd(this, {
            type: dI,
            timestamp: a.timestamp || 0,
            data: { tag: "breadcrumb", payload: a, metric: !0 },
          }),
      );
    }
    return i;
  }
  getCurrentRoute() {
    const t = this.lastActiveSpan || ht(),
      s = t && vt(t),
      a = ((s && Ae(s).data) || {})[wn];
    if (!(!s || !a || !["route", "custom"].includes(a)))
      return Ae(s).description;
  }
  _initializeRecording() {
    (this.setInitialState(),
      this._updateSessionActivity(),
      (this.eventBuffer = QI({
        useCompression: this._options.useCompression,
        workerUrl: this._options.workerUrl,
      })),
      this._removeListeners(),
      this._addListeners(),
      (this._isEnabled = !0),
      (this._isPaused = !1),
      this.startRecording());
  }
  _initializeSessionForSampling(t) {
    const s = this._options.errorSampleRate > 0,
      i = Fc(
        {
          sessionIdleExpire: this.timeouts.sessionIdleExpire,
          maxReplayDuration: this._options.maxReplayDuration,
          previousSessionId: t,
        },
        {
          stickySession: this._options.stickySession,
          sessionSampleRate: this._options.sessionSampleRate,
          allowBuffering: s,
        },
      );
    this.session = i;
  }
  _checkSession() {
    if (!this.session) return !1;
    const t = this.session;
    return D0(t, {
      sessionIdleExpire: this.timeouts.sessionIdleExpire,
      maxReplayDuration: this._options.maxReplayDuration,
    })
      ? (this._refreshSession(t), !1)
      : !0;
  }
  async _refreshSession(t) {
    this._isEnabled &&
      (await this.stop({ reason: "refresh session" }),
      this.initializeSampling(t.id));
  }
  _addListeners() {
    try {
      (We.document.addEventListener(
        "visibilitychange",
        this._handleVisibilityChange,
      ),
        We.addEventListener("blur", this._handleWindowBlur),
        We.addEventListener("focus", this._handleWindowFocus),
        We.addEventListener("keydown", this._handleKeyboardEvent),
        this.clickDetector && this.clickDetector.addListeners(),
        this._hasInitializedCoreListeners ||
          (QC(this), (this._hasInitializedCoreListeners = !0)));
    } catch (t) {
      this.handleException(t);
    }
    this._performanceCleanupCallback = qI(this);
  }
  _removeListeners() {
    try {
      (We.document.removeEventListener(
        "visibilitychange",
        this._handleVisibilityChange,
      ),
        We.removeEventListener("blur", this._handleWindowBlur),
        We.removeEventListener("focus", this._handleWindowFocus),
        We.removeEventListener("keydown", this._handleKeyboardEvent),
        this.clickDetector && this.clickDetector.removeListeners(),
        this._performanceCleanupCallback && this._performanceCleanupCallback());
    } catch (t) {
      this.handleException(t);
    }
  }
  __init() {
    this._handleVisibilityChange = () => {
      We.document.visibilityState === "visible"
        ? this._doChangeToForegroundTasks()
        : this._doChangeToBackgroundTasks();
    };
  }
  __init2() {
    this._handleWindowBlur = () => {
      const t = xn({ category: "ui.blur" });
      this._doChangeToBackgroundTasks(t);
    };
  }
  __init3() {
    this._handleWindowFocus = () => {
      const t = xn({ category: "ui.focus" });
      this._doChangeToForegroundTasks(t);
    };
  }
  __init4() {
    this._handleKeyboardEvent = (t) => {
      MI(this, t);
    };
  }
  _doChangeToBackgroundTasks(t) {
    !this.session ||
      O0(this.session, {
        maxReplayDuration: this._options.maxReplayDuration,
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
      }) ||
      (t && this._createCustomBreadcrumb(t), this.conditionalFlush());
  }
  _doChangeToForegroundTasks(t) {
    if (!this.session) return;
    if (!this.checkAndHandleExpiredSession()) {
      le && fe.info("Document has become active, but session has expired");
      return;
    }
    t && this._createCustomBreadcrumb(t);
  }
  _updateUserActivity(t = Date.now()) {
    this._lastActivity = t;
  }
  _updateSessionActivity(t = Date.now()) {
    this.session && ((this.session.lastActivity = t), this._maybeSaveSession());
  }
  _createCustomBreadcrumb(t) {
    this.addUpdate(() => {
      this.throttledAddEvent({
        type: Ee.Custom,
        timestamp: t.timestamp || 0,
        data: { tag: "breadcrumb", payload: t },
      });
    });
  }
  _addPerformanceEntries() {
    let t = PI(this.performanceEntries).concat(this.replayPerformanceEntries);
    if (
      ((this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      this._requiresManualStart)
    ) {
      const s = this._context.initialTimestamp / 1e3;
      t = t.filter((i) => i.start >= s);
    }
    return Promise.all(Il(this, t));
  }
  _clearContext() {
    (this._context.errorIds.clear(),
      this._context.traceIds.clear(),
      (this._context.urls = []));
  }
  _updateInitialTimestampFromEventBuffer() {
    const { session: t, eventBuffer: s } = this;
    if (!t || !s || this._requiresManualStart || t.segmentId) return;
    const i = s.getEarliestTimestamp();
    i &&
      i < this._context.initialTimestamp &&
      (this._context.initialTimestamp = i);
  }
  _popEventContext() {
    const t = {
      initialTimestamp: this._context.initialTimestamp,
      initialUrl: this._context.initialUrl,
      errorIds: Array.from(this._context.errorIds),
      traceIds: Array.from(this._context.traceIds),
      urls: this._context.urls,
    };
    return (this._clearContext(), t);
  }
  async _runFlush() {
    const t = this.getSessionId();
    if (!this.session || !this.eventBuffer || !t) {
      le && fe.error("No session or eventBuffer found to flush.");
      return;
    }
    if (
      (await this._addPerformanceEntries(),
      !(!this.eventBuffer || !this.eventBuffer.hasEvents) &&
        (await ZC(this), !!this.eventBuffer && t === this.getSessionId()))
    )
      try {
        this._updateInitialTimestampFromEventBuffer();
        const s = Date.now();
        if (
          s - this._context.initialTimestamp >
          this._options.maxReplayDuration + 3e4
        )
          throw new Error("Session is too long, not sending replay");
        const i = this._popEventContext(),
          a = this.session.segmentId++;
        this._maybeSaveSession();
        const u = await this.eventBuffer.finish();
        await V0({
          replayId: t,
          recordingData: u,
          segmentId: a,
          eventContext: i,
          session: this.session,
          timestamp: s,
          onError: (d) => this.handleException(d),
        });
      } catch (s) {
        (this.handleException(s), this.stop({ reason: "sendReplay" }));
        const i = Te();
        if (i) {
          const a = s instanceof tf ? "ratelimit_backoff" : "send_error";
          i.recordDroppedEvent(a, "replay");
        }
      }
  }
  __init5() {
    this._flush = async ({ force: t = !1 } = {}) => {
      if (!this._isEnabled && !t) return;
      if (!this.checkAndHandleExpiredSession()) {
        le &&
          fe.error("Attempting to finish replay event after session expired.");
        return;
      }
      if (!this.session) return;
      const s = this.session.started,
        a = Date.now() - s;
      this._debouncedFlush.cancel();
      const u = a < this._options.minReplayDuration,
        d = a > this._options.maxReplayDuration + 5e3;
      if (u || d) {
        (le &&
          fe.info(
            `Session duration (${Math.floor(a / 1e3)}s) is too ${u ? "short" : "long"}, not sending replay.`,
          ),
          u && this._debouncedFlush());
        return;
      }
      const p = this.eventBuffer;
      p &&
        this.session.segmentId === 0 &&
        !p.hasCheckout &&
        le &&
        fe.info("Flushing initial segment without checkout.");
      const h = !!this._flushLock;
      this._flushLock || (this._flushLock = this._runFlush());
      try {
        await this._flushLock;
      } catch (g) {
        this.handleException(g);
      } finally {
        ((this._flushLock = void 0), h && this._debouncedFlush());
      }
    };
  }
  _maybeSaveSession() {
    this.session && this._options.stickySession && Qd(this.session);
  }
  __init6() {
    this._onMutationHandler = (t) => {
      const s = t.length,
        i = this._options.mutationLimit,
        a = this._options.mutationBreadcrumbLimit,
        u = i && s > i;
      if (s > a || u) {
        const d = xn({
          category: "replay.mutations",
          data: { count: s, limit: u },
        });
        this._createCustomBreadcrumb(d);
      }
      return u
        ? (this.stop({
            reason: "mutationLimit",
            forceFlush: this.recordingMode === "session",
          }),
          !1)
        : !0;
    };
  }
}
function ji(e, t) {
  return [...e, ...t].join(",");
}
function fN({ mask: e, unmask: t, block: s, unblock: i, ignore: a }) {
  const u = ["base", "iframe[srcdoc]:not([src])"],
    d = ji(e, [".sentry-mask", "[data-sentry-mask]"]),
    p = ji(t, []);
  return {
    maskTextSelector: d,
    unmaskTextSelector: p,
    blockSelector: ji(s, [".sentry-block", "[data-sentry-block]", ...u]),
    unblockSelector: ji(i, []),
    ignoreSelector: ji(a, [
      ".sentry-ignore",
      "[data-sentry-ignore]",
      'input[type="file"]',
    ]),
  };
}
function pN({
  el: e,
  key: t,
  maskAttributes: s,
  maskAllText: i,
  privacyOptions: a,
  value: u,
}) {
  return !i || (a.unmaskTextSelector && e.matches(a.unmaskTextSelector))
    ? u
    : s.includes(t) ||
        (t === "value" &&
          e.tagName === "INPUT" &&
          ["submit", "button"].includes(e.getAttribute("type") || ""))
      ? u.replace(/[\S]/g, "*")
      : u;
}
const gg =
    'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
  hN = ["content-length", "content-type", "accept"];
let yg = !1;
const mN = (e) => new Nl(e);
class Nl {
  static __initStatic() {
    this.id = "Replay";
  }
  constructor({
    flushMinDelay: t = Wk,
    flushMaxDelay: s = qk,
    minReplayDuration: i = Jk,
    maxReplayDuration: a = Km,
    stickySession: u = !0,
    useCompression: d = !0,
    workerUrl: p,
    _experiments: h = {},
    maskAllText: g = !0,
    maskAllInputs: _ = !0,
    blockAllMedia: y = !0,
    mutationBreadcrumbLimit: E = 750,
    mutationLimit: C = 1e4,
    slowClickTimeout: T = 7e3,
    slowClickIgnoreSelectors: N = [],
    networkDetailAllowUrls: x = [],
    networkDetailDenyUrls: D = [],
    networkCaptureBodies: B = !0,
    networkRequestHeaders: V = [],
    networkResponseHeaders: K = [],
    mask: R = [],
    maskAttributes: A = ["title", "placeholder"],
    unmask: q = [],
    block: X = [],
    unblock: z = [],
    ignore: G = [],
    maskFn: se,
    beforeAddRecordingEvent: ee,
    beforeErrorSampling: ye,
    onError: Ie,
  } = {}) {
    this.name = Nl.id;
    const Pe = fN({ mask: R, unmask: q, block: X, unblock: z, ignore: G });
    if (
      ((this._recordingOptions = {
        maskAllInputs: _,
        maskAllText: g,
        maskInputOptions: { password: !0 },
        maskTextFn: se,
        maskInputFn: se,
        maskAttributeFn: (re, ge, P) =>
          pN({
            maskAttributes: A,
            maskAllText: g,
            privacyOptions: Pe,
            key: re,
            value: ge,
            el: P,
          }),
        ...Pe,
        slimDOMOptions: "all",
        inlineStylesheet: !0,
        inlineImages: !1,
        collectFonts: !0,
        errorHandler: (re) => {
          try {
            re.__rrweb__ = !0;
          } catch {}
        },
      }),
      (this._initialOptions = {
        flushMinDelay: t,
        flushMaxDelay: s,
        minReplayDuration: Math.min(i, Qk),
        maxReplayDuration: Math.min(a, Km),
        stickySession: u,
        useCompression: d,
        workerUrl: p,
        blockAllMedia: y,
        maskAllInputs: _,
        maskAllText: g,
        mutationBreadcrumbLimit: E,
        mutationLimit: C,
        slowClickTimeout: T,
        slowClickIgnoreSelectors: N,
        networkDetailAllowUrls: x,
        networkDetailDenyUrls: D,
        networkCaptureBodies: B,
        networkRequestHeaders: vg(V),
        networkResponseHeaders: vg(K),
        beforeAddRecordingEvent: ee,
        beforeErrorSampling: ye,
        onError: Ie,
        _experiments: h,
      }),
      this._initialOptions.blockAllMedia &&
        (this._recordingOptions.blockSelector = this._recordingOptions
          .blockSelector
          ? `${this._recordingOptions.blockSelector},${gg}`
          : gg),
      this._isInitialized && Fm())
    )
      throw new Error(
        "Multiple Sentry Session Replay instances are not supported",
      );
    this._isInitialized = !0;
  }
  get _isInitialized() {
    return yg;
  }
  set _isInitialized(t) {
    yg = t;
  }
  afterAllSetup(t) {
    !Fm() || this._replay || (this._setup(t), this._initialize(t));
  }
  start() {
    this._replay && this._replay.start();
  }
  startBuffering() {
    this._replay && this._replay.startBuffering();
  }
  stop() {
    return this._replay
      ? this._replay.stop({
          forceFlush: this._replay.recordingMode === "session",
        })
      : Promise.resolve();
  }
  flush(t) {
    return this._replay
      ? this._replay.isEnabled()
        ? this._replay.sendBufferedReplayOrFlush(t)
        : (this._replay.start(), Promise.resolve())
      : Promise.resolve();
  }
  getReplayId() {
    if (!(!this._replay || !this._replay.isEnabled()))
      return this._replay.getSessionId();
  }
  getRecordingMode() {
    if (!(!this._replay || !this._replay.isEnabled()))
      return this._replay.recordingMode;
  }
  _initialize(t) {
    this._replay &&
      (this._maybeLoadFromReplayCanvasIntegration(t),
      this._replay.initializeSampling());
  }
  _setup(t) {
    const s = gN(this._initialOptions, t);
    this._replay = new gr({
      options: s,
      recordingOptions: this._recordingOptions,
    });
  }
  _maybeLoadFromReplayCanvasIntegration(t) {
    try {
      const s = t.getIntegrationByName("ReplayCanvas");
      if (!s) return;
      this._replay._canvas = s.getOptions();
    } catch {}
  }
}
Nl.__initStatic();
function gN(e, t) {
  const s = t.getOptions(),
    i = { sessionSampleRate: 0, errorSampleRate: 0, ...at(e) },
    a = Ka(s.replaysSessionSampleRate),
    u = Ka(s.replaysOnErrorSampleRate);
  return (
    a == null &&
      u == null &&
      kr(() => {
        console.warn(
          "Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.",
        );
      }),
    a != null && (i.sessionSampleRate = a),
    u != null && (i.errorSampleRate = u),
    i
  );
}
function vg(e) {
  return [...hN, ...e.map((t) => t.toLowerCase())];
}
const _g = new WeakMap(),
  Uc = new Map(),
  Ba = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0,
    trackFetchStreamPerformance: !1,
  };
function yN(e, t) {
  const {
      traceFetch: s,
      traceXHR: i,
      trackFetchStreamPerformance: a,
      shouldCreateSpanForRequest: u,
      enableHTTPTimings: d,
      tracePropagationTargets: p,
    } = {
      traceFetch: Ba.traceFetch,
      traceXHR: Ba.traceXHR,
      trackFetchStreamPerformance: Ba.trackFetchStreamPerformance,
      ...t,
    },
    h = typeof u == "function" ? u : (y) => !0,
    g = (y) => SN(y, p),
    _ = {};
  (s &&
    (e.addEventProcessor(
      (y) => (
        y.type === "transaction" &&
          y.spans &&
          y.spans.forEach((E) => {
            if (E.op === "http.client") {
              const C = Uc.get(E.span_id);
              C && ((E.timestamp = C / 1e3), Uc.delete(E.span_id));
            }
          }),
        y
      ),
    ),
    a &&
      a1((y) => {
        if (y.response) {
          const E = _g.get(y.response);
          E && y.endTimestamp && Uc.set(E, y.endTimestamp);
        }
      }),
    Ay((y) => {
      const E = e1(y, h, g, _);
      if (
        (y.response &&
          y.fetchData.__span &&
          _g.set(y.response, y.fetchData.__span),
        E)
      ) {
        const C = Y0(y.fetchData.url),
          T = C ? Gr(C).host : void 0;
        E.setAttributes({ "http.url": C, "server.address": T });
      }
      d && E && Sg(E);
    })),
    i &&
      e0((y) => {
        const E = EN(y, h, g, _);
        d && E && Sg(E);
      }));
}
function vN(e) {
  return (
    e.entryType === "resource" &&
    "initiatorType" in e &&
    typeof e.nextHopProtocol == "string" &&
    (e.initiatorType === "fetch" || e.initiatorType === "xmlhttprequest")
  );
}
function Sg(e) {
  const { url: t } = Ae(e).data || {};
  if (!t || typeof t != "string") return;
  const s = Us("resource", ({ entries: i }) => {
    i.forEach((a) => {
      vN(a) &&
        a.name.endsWith(t) &&
        (_N(a).forEach((d) => e.setAttribute(...d)), setTimeout(s));
    });
  });
}
function En(e = 0) {
  return ((bt || performance.timeOrigin) + e) / 1e3;
}
function _N(e) {
  const { name: t, version: s } = Jy(e.nextHopProtocol),
    i = [];
  return (
    i.push(["network.protocol.version", s], ["network.protocol.name", t]),
    bt
      ? [
          ...i,
          ["http.request.redirect_start", En(e.redirectStart)],
          ["http.request.fetch_start", En(e.fetchStart)],
          ["http.request.domain_lookup_start", En(e.domainLookupStart)],
          ["http.request.domain_lookup_end", En(e.domainLookupEnd)],
          ["http.request.connect_start", En(e.connectStart)],
          ["http.request.secure_connection_start", En(e.secureConnectionStart)],
          ["http.request.connection_end", En(e.connectEnd)],
          ["http.request.request_start", En(e.requestStart)],
          ["http.request.response_start", En(e.responseStart)],
          ["http.request.response_end", En(e.responseEnd)],
        ]
      : i
  );
}
function SN(e, t) {
  const s = ue.location && ue.location.href;
  if (s) {
    let i, a;
    try {
      ((i = new URL(e, s)), (a = new URL(s).origin));
    } catch {
      return !1;
    }
    const u = i.origin === a;
    return t ? yr(i.toString(), t) || (u && yr(i.pathname, t)) : u;
  } else {
    const i = !!e.match(/^\/(?!\/)/);
    return t ? yr(e, t) : i;
  }
}
function EN(e, t, s, i) {
  const a = e.xhr,
    u = a && a[Br];
  if (!a || a.__sentry_own_request__ || !u) return;
  const d = wr() && t(u.url);
  if (e.endTimestamp && d) {
    const y = a.__sentry_xhr_span_id__;
    if (!y) return;
    const E = i[y];
    E &&
      u.status_code !== void 0 &&
      (Yg(E, u.status_code), E.end(), delete i[y]);
    return;
  }
  const p = Y0(u.url),
    h = p ? Gr(p).host : void 0,
    g = !!ht(),
    _ =
      d && g
        ? no({
            name: `${u.method} ${u.url}`,
            attributes: {
              type: "xhr",
              "http.method": u.method,
              "http.url": p,
              url: u.url,
              "server.address": h,
              [pt]: "auto.http.browser",
              [Kr]: "http.client",
            },
          })
        : new Vs();
  return (
    (a.__sentry_xhr_span_id__ = _.spanContext().spanId),
    (i[a.__sentry_xhr_span_id__] = _),
    s(u.url) && wN(a, wr() && g ? _ : void 0),
    _
  );
}
function wN(e, t) {
  const { "sentry-trace": s, baggage: i } = Ny({ span: t });
  s && xN(e, s, i);
}
function xN(e, t, s) {
  try {
    (e.setRequestHeader("sentry-trace", t),
      s && e.setRequestHeader("baggage", s));
  } catch {}
}
function Y0(e) {
  try {
    return new URL(e, ue.location.origin).href;
  } catch {
    return;
  }
}
function kN() {
  ue && ue.document
    ? ue.document.addEventListener("visibilitychange", () => {
        const e = ht();
        if (!e) return;
        const t = vt(e);
        if (ue.document.hidden && t) {
          const s = "cancelled",
            { op: i, status: a } = Ae(t);
          (qt &&
            W.log(
              `[Tracing] Transaction: ${s} -> since tab moved to the background, op: ${i}`,
            ),
            a || t.setStatus({ code: ft, message: s }),
            t.setAttribute("sentry.cancellation_reason", "document.hidden"),
            t.end());
        }
      })
    : qt &&
      W.warn(
        "[Tracing] Could not set up background tab detection due to lack of global document",
      );
}
const TN = "BrowserTracing",
  IN = {
    ...ja,
    instrumentNavigation: !0,
    instrumentPageLoad: !0,
    markBackgroundSpan: !0,
    enableLongTask: !0,
    enableLongAnimationFrame: !0,
    enableInp: !0,
    _experiments: {},
    ...Ba,
  },
  CN = (e = {}) => {
    eE();
    const {
        enableInp: t,
        enableLongTask: s,
        enableLongAnimationFrame: i,
        _experiments: { enableInteractions: a, enableStandaloneClsSpans: u },
        beforeStartSpan: d,
        idleTimeout: p,
        finalTimeout: h,
        childSpanTimeout: g,
        markBackgroundSpan: _,
        traceFetch: y,
        traceXHR: E,
        trackFetchStreamPerformance: C,
        shouldCreateSpanForRequest: T,
        enableHTTPTimings: N,
        instrumentPageLoad: x,
        instrumentNavigation: D,
      } = { ...IN, ...e },
      B = gx({ recordClsStandaloneSpans: u || !1 });
    (t && $x(),
      i &&
      Ne.PerformanceObserver &&
      PerformanceObserver.supportedEntryTypes &&
      PerformanceObserver.supportedEntryTypes.includes("long-animation-frame")
        ? vx()
        : s && yx(),
      a && _x());
    const V = { name: void 0, source: void 0 };
    function K(R, A) {
      const q = A.op === "pageload",
        X = d ? d(A) : A,
        z = X.attributes || {};
      (A.name !== X.name && ((z[wn] = "custom"), (X.attributes = z)),
        (V.name = X.name),
        (V.source = z[wn]));
      const G = my(X, {
        idleTimeout: p,
        finalTimeout: h,
        childSpanTimeout: g,
        disableAutoFinish: q,
        beforeSpanEnd: (ee) => {
          (B(), kx(ee, { recordClsOnPageloadSpan: !u }));
        },
      });
      function se() {
        ["interactive", "complete"].includes(ue.document.readyState) &&
          R.emit("idleSpanEnableAutoFinish", G);
      }
      return (
        q &&
          ue.document &&
          (ue.document.addEventListener("readystatechange", () => {
            se();
          }),
          se()),
        G
      );
    }
    return {
      name: TN,
      afterAllSetup(R) {
        let A,
          q = ue.location && ue.location.href;
        function X() {
          A &&
            !Ae(A).timestamp &&
            (qt &&
              W.log(
                `[Tracing] Finishing current active span with op: ${Ae(A).op}`,
              ),
            A.end());
        }
        (R.on("startNavigationSpan", (z) => {
          Te() === R && (X(), (A = K(R, { op: "navigation", ...z })));
        }),
          R.on("startPageLoadSpan", (z, G = {}) => {
            if (Te() !== R) return;
            X();
            const se = G.sentryTrace || Eg("sentry-trace"),
              ee = G.baggage || Eg("baggage"),
              ye = GS(se, ee);
            (ze().setPropagationContext(ye),
              (A = K(R, { op: "pageload", ...z })));
          }),
          R.on("spanEnd", (z) => {
            const G = Ae(z).op;
            if (z !== vt(z) || (G !== "navigation" && G !== "pageload")) return;
            const se = ze(),
              ee = se.getPropagationContext();
            se.setPropagationContext({
              ...ee,
              sampled: ee.sampled !== void 0 ? ee.sampled : Jr(z),
              dsc: ee.dsc || Qr(z),
            });
          }),
          ue.location &&
            (x &&
              NN(R, {
                name: ue.location.pathname,
                startTime: bt ? bt / 1e3 : void 0,
                attributes: { [wn]: "url", [pt]: "auto.pageload.browser" },
              }),
            D &&
              El(({ to: z, from: G }) => {
                if (G === void 0 && q && q.indexOf(z) !== -1) {
                  q = void 0;
                  return;
                }
                G !== z &&
                  ((q = void 0),
                  bN(R, {
                    name: ue.location.pathname,
                    attributes: {
                      [wn]: "url",
                      [pt]: "auto.navigation.browser",
                    },
                  }));
              })),
          _ && kN(),
          a && RN(p, h, g, V),
          t && Hx(),
          yN(R, {
            traceFetch: y,
            traceXHR: E,
            trackFetchStreamPerformance: C,
            tracePropagationTargets: R.getOptions().tracePropagationTargets,
            shouldCreateSpanForRequest: T,
            enableHTTPTimings: N,
          }));
      },
    };
  };
function NN(e, t, s) {
  (e.emit("startPageLoadSpan", t, s), ze().setTransactionName(t.name));
  const i = ht();
  return (i && Ae(i).op) === "pageload" ? i : void 0;
}
function bN(e, t) {
  (nn().setPropagationContext({ traceId: _r() }),
    ze().setPropagationContext({ traceId: _r() }),
    e.emit("startNavigationSpan", t),
    ze().setTransactionName(t.name));
  const s = ht();
  return (s && Ae(s).op) === "navigation" ? s : void 0;
}
function Eg(e) {
  const t = _S(`meta[name=${e}]`);
  return t ? t.getAttribute("content") : void 0;
}
function RN(e, t, s, i) {
  let a;
  const u = () => {
    const d = "ui.action.click",
      p = ht(),
      h = p && vt(p);
    if (h) {
      const g = Ae(h).op;
      if (["navigation", "pageload"].includes(g)) {
        qt &&
          W.warn(
            `[Tracing] Did not create ${d} span because a pageload or navigation span is in progress.`,
          );
        return;
      }
    }
    if (
      (a &&
        (a.setAttribute(Kc, "interactionInterrupted"), a.end(), (a = void 0)),
      !i.name)
    ) {
      qt &&
        W.warn(
          `[Tracing] Did not create ${d} transaction because _latestRouteName is missing.`,
        );
      return;
    }
    a = my(
      { name: i.name, op: d, attributes: { [wn]: i.source || "url" } },
      { idleTimeout: e, finalTimeout: t, childSpanTimeout: s },
    );
  };
  ue.document && addEventListener("click", u, { once: !1, capture: !0 });
}
function MN(e) {
  const t = { ...e };
  return (Cy(t, "react"), vy("react", { version: pe.version }), zk(t));
}
function ON(e) {
  const t = e.match(/^([^.]+)/);
  return t !== null && parseInt(t[0]) >= 17;
}
function DN(e, t) {
  const s = new WeakSet();
  function i(a, u) {
    if (!s.has(a)) {
      if (a.cause) return (s.add(a), i(a.cause, u));
      a.cause = u;
    }
  }
  i(e, t);
}
function AN(e, { componentStack: t }, s) {
  if (ON(pe.version) && dl(e) && t) {
    const i = new Error(e.message);
    ((i.name = `React ErrorBoundary ${e.name}`), (i.stack = t), DN(e, i));
  }
  return vl(e, {
    ...s,
    captureContext: { contexts: { react: { componentStack: t } } },
  });
}
var zc = { exports: {} },
  je = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wg;
function PN() {
  if (wg) return je;
  wg = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    t = e ? Symbol.for("react.element") : 60103,
    s = e ? Symbol.for("react.portal") : 60106,
    i = e ? Symbol.for("react.fragment") : 60107,
    a = e ? Symbol.for("react.strict_mode") : 60108,
    u = e ? Symbol.for("react.profiler") : 60114,
    d = e ? Symbol.for("react.provider") : 60109,
    p = e ? Symbol.for("react.context") : 60110,
    h = e ? Symbol.for("react.async_mode") : 60111,
    g = e ? Symbol.for("react.concurrent_mode") : 60111,
    _ = e ? Symbol.for("react.forward_ref") : 60112,
    y = e ? Symbol.for("react.suspense") : 60113,
    E = e ? Symbol.for("react.suspense_list") : 60120,
    C = e ? Symbol.for("react.memo") : 60115,
    T = e ? Symbol.for("react.lazy") : 60116,
    N = e ? Symbol.for("react.block") : 60121,
    x = e ? Symbol.for("react.fundamental") : 60117,
    D = e ? Symbol.for("react.responder") : 60118,
    B = e ? Symbol.for("react.scope") : 60119;
  function V(R) {
    if (typeof R == "object" && R !== null) {
      var A = R.$$typeof;
      switch (A) {
        case t:
          switch (((R = R.type), R)) {
            case h:
            case g:
            case i:
            case u:
            case a:
            case y:
              return R;
            default:
              switch (((R = R && R.$$typeof), R)) {
                case p:
                case _:
                case T:
                case C:
                case d:
                  return R;
                default:
                  return A;
              }
          }
        case s:
          return A;
      }
    }
  }
  function K(R) {
    return V(R) === g;
  }
  return (
    (je.AsyncMode = h),
    (je.ConcurrentMode = g),
    (je.ContextConsumer = p),
    (je.ContextProvider = d),
    (je.Element = t),
    (je.ForwardRef = _),
    (je.Fragment = i),
    (je.Lazy = T),
    (je.Memo = C),
    (je.Portal = s),
    (je.Profiler = u),
    (je.StrictMode = a),
    (je.Suspense = y),
    (je.isAsyncMode = function (R) {
      return K(R) || V(R) === h;
    }),
    (je.isConcurrentMode = K),
    (je.isContextConsumer = function (R) {
      return V(R) === p;
    }),
    (je.isContextProvider = function (R) {
      return V(R) === d;
    }),
    (je.isElement = function (R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }),
    (je.isForwardRef = function (R) {
      return V(R) === _;
    }),
    (je.isFragment = function (R) {
      return V(R) === i;
    }),
    (je.isLazy = function (R) {
      return V(R) === T;
    }),
    (je.isMemo = function (R) {
      return V(R) === C;
    }),
    (je.isPortal = function (R) {
      return V(R) === s;
    }),
    (je.isProfiler = function (R) {
      return V(R) === u;
    }),
    (je.isStrictMode = function (R) {
      return V(R) === a;
    }),
    (je.isSuspense = function (R) {
      return V(R) === y;
    }),
    (je.isValidElementType = function (R) {
      return (
        typeof R == "string" ||
        typeof R == "function" ||
        R === i ||
        R === g ||
        R === u ||
        R === a ||
        R === y ||
        R === E ||
        (typeof R == "object" &&
          R !== null &&
          (R.$$typeof === T ||
            R.$$typeof === C ||
            R.$$typeof === d ||
            R.$$typeof === p ||
            R.$$typeof === _ ||
            R.$$typeof === x ||
            R.$$typeof === D ||
            R.$$typeof === B ||
            R.$$typeof === N))
      );
    }),
    (je.typeOf = V),
    je
  );
}
var xg;
function LN() {
  return (xg || ((xg = 1), (zc.exports = PN())), zc.exports);
}
var $c, kg;
function jN() {
  if (kg) return $c;
  kg = 1;
  var e = LN(),
    t = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    s = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    i = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    a = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    u = {};
  ((u[e.ForwardRef] = i), (u[e.Memo] = a));
  function d(T) {
    return e.isMemo(T) ? a : u[T.$$typeof] || t;
  }
  var p = Object.defineProperty,
    h = Object.getOwnPropertyNames,
    g = Object.getOwnPropertySymbols,
    _ = Object.getOwnPropertyDescriptor,
    y = Object.getPrototypeOf,
    E = Object.prototype;
  function C(T, N, x) {
    if (typeof N != "string") {
      if (E) {
        var D = y(N);
        D && D !== E && C(T, D, x);
      }
      var B = h(N);
      g && (B = B.concat(g(N)));
      for (var V = d(T), K = d(N), R = 0; R < B.length; ++R) {
        var A = B[R];
        if (!s[A] && !(x && x[A]) && !(K && K[A]) && !(V && V[A])) {
          var q = _(N, A);
          try {
            p(T, A, q);
          } catch {}
        }
      }
    }
    return T;
  }
  return (($c = C), $c);
}
jN();
const FN = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  Tg = { componentStack: null, error: null, eventId: null };
class nf extends pe.Component {
  constructor(t) {
    (super(t),
      nf.prototype.__init.call(this),
      (this.state = Tg),
      (this._openFallbackReportDialog = !0));
    const s = Te();
    s &&
      t.showDialog &&
      ((this._openFallbackReportDialog = !1),
      (this._cleanupHook = s.on("afterSendEvent", (i) => {
        !i.type &&
          this._lastEventId &&
          i.event_id === this._lastEventId &&
          Gm({ ...t.dialogOptions, eventId: this._lastEventId });
      })));
  }
  componentDidCatch(t, s) {
    const { componentStack: i } = s,
      a = i ?? void 0,
      {
        beforeCapture: u,
        onError: d,
        showDialog: p,
        dialogOptions: h,
      } = this.props;
    ml((g) => {
      u && u(g, t, a);
      const _ =
          this.props.handled != null
            ? this.props.handled
            : !!this.props.fallback,
        y = AN(t, s, { mechanism: { handled: _ } });
      (d && d(t, a, y),
        p &&
          ((this._lastEventId = y),
          this._openFallbackReportDialog && Gm({ ...h, eventId: y })),
        this.setState({ error: t, componentStack: i, eventId: y }));
    });
  }
  componentDidMount() {
    const { onMount: t } = this.props;
    t && t();
  }
  componentWillUnmount() {
    const { error: t, componentStack: s, eventId: i } = this.state,
      { onUnmount: a } = this.props;
    (a && a(t, s, i),
      this._cleanupHook && (this._cleanupHook(), (this._cleanupHook = void 0)));
  }
  __init() {
    this.resetErrorBoundary = () => {
      const { onReset: t } = this.props,
        { error: s, componentStack: i, eventId: a } = this.state;
      (t && t(s, i, a), this.setState(Tg));
    };
  }
  render() {
    const { fallback: t, children: s } = this.props,
      i = this.state;
    if (i.error) {
      let a;
      return (
        typeof t == "function"
          ? (a = pe.createElement(t, {
              error: i.error,
              componentStack: i.componentStack,
              resetError: this.resetErrorBoundary,
              eventId: i.eventId,
            }))
          : (a = t),
        pe.isValidElement(a)
          ? a
          : (t && FN && W.warn("fallback did not produce a valid ReactElement"),
            null)
      );
    }
    return typeof s == "function" ? s() : s;
  }
}
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const UN = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  K0 = (...e) =>
    e
      .filter((t, s, i) => !!t && t.trim() !== "" && i.indexOf(t) === s)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var zN = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $N = pe.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: i,
      className: a = "",
      children: u,
      iconNode: d,
      ...p
    },
    h,
  ) =>
    pe.createElement(
      "svg",
      {
        ref: h,
        ...zN,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: i ? (Number(s) * 24) / Number(t) : s,
        className: K0("lucide", a),
        ...p,
      },
      [
        ...d.map(([g, _]) => pe.createElement(g, _)),
        ...(Array.isArray(u) ? u : [u]),
      ],
    ),
);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ue = (e, t) => {
  const s = pe.forwardRef(({ className: i, ...a }, u) =>
    pe.createElement($N, {
      ref: u,
      iconNode: t,
      className: K0(`lucide-${UN(e)}`, i),
      ...a,
    }),
  );
  return ((s.displayName = `${e}`), s);
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zi = Ue("Activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse",
    },
  ],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const BN = Ue("Bug", [
  ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
  ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
  ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1", key: "d7y7pr" }],
  [
    "path",
    {
      d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",
      key: "xs1cw7",
    },
  ],
  ["path", { d: "M12 20v-9", key: "1qisl0" }],
  ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5", key: "32zzws" }],
  ["path", { d: "M6 13H2", key: "82j7cp" }],
  ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }],
  ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
  ["path", { d: "M22 13h-4", key: "1jl80f" }],
  ["path", { d: "M17.2 17c2.1.1 3.8 1.9 3.8 4", key: "k3fwyw" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const HN = Ue("ChartColumn", [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const WN = Ue("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qN = Ue("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wi = Ue("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const VN = Ue("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wd = Ue("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ll = Ue("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bl = Ue("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ig = Ue("Cpu", [
  [
    "rect",
    { width: "16", height: "16", x: "4", y: "4", rx: "2", key: "14l7u7" },
  ],
  ["rect", { width: "6", height: "6", x: "9", y: "9", rx: "1", key: "5aljv4" }],
  ["path", { d: "M15 2v2", key: "13l42r" }],
  ["path", { d: "M15 20v2", key: "15mkzm" }],
  ["path", { d: "M2 15h2", key: "1gxd5l" }],
  ["path", { d: "M2 9h2", key: "1bbxkp" }],
  ["path", { d: "M20 15h2", key: "19e6y8" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M9 2v2", key: "165o2o" }],
  ["path", { d: "M9 20v2", key: "i2bqo8" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ha = Ue("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X0 = Ue("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eo = Ue("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cg = Ue("FileDown", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M12 18v-6", key: "17g6i2" }],
  ["path", { d: "m9 15 3 3 3-3", key: "1npd3o" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ng = Ue("Gauge", [
  ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
  ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const GN = Ue("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const YN = Ue("HardDrive", [
  ["line", { x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr",
    },
  ],
  ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278" }],
  ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bc = Ue("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hc = Ue("Monitor", [
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" },
  ],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const KN = Ue("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ul = Ue("RefreshCw", [
  [
    "path",
    { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" },
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  [
    "path",
    { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" },
  ],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xd = Ue("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qi = Ue("Server", [
  [
    "rect",
    {
      width: "20",
      height: "8",
      x: "2",
      y: "2",
      rx: "2",
      ry: "2",
      key: "ngkwjq",
    },
  ],
  [
    "rect",
    {
      width: "20",
      height: "8",
      x: "2",
      y: "14",
      rx: "2",
      ry: "2",
      key: "iecqi9",
    },
  ],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const XN = Ue("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const JN = Ue("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J0 = Ue("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq",
    },
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const QN = Ue("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db",
    },
  ],
]);
function ZN({ health: e, loading: t, error: s, lastUpdated: i }) {
  var d, p, h;
  const a = (g) =>
      g === "healthy" || g === "ok"
        ? "text-green-400"
        : g === "unhealthy" || g === "error"
          ? "text-red-400"
          : "text-yellow-400",
    u = (g) =>
      g === "healthy" || g === "ok"
        ? v.jsx(wd, { className: "w-5 h-5" })
        : g === "unhealthy" || g === "error"
          ? v.jsx(ll, { className: "w-5 h-5" })
          : v.jsx(Wi, { className: "w-5 h-5" });
  return t && !e
    ? v.jsxs("div", {
        className: "bg-slate-800 rounded-lg p-6 border border-slate-700",
        children: [
          v.jsxs("div", {
            className: "flex items-center gap-2 mb-4",
            children: [
              v.jsx(Zi, { className: "w-5 h-5 text-blue-400 animate-pulse" }),
              v.jsx("h2", {
                className: "text-lg font-semibold",
                children: "System Health",
              }),
            ],
          }),
          v.jsxs("div", {
            className: "animate-pulse space-y-3",
            children: [
              v.jsx("div", { className: "h-4 bg-slate-700 rounded w-3/4" }),
              v.jsx("div", { className: "h-4 bg-slate-700 rounded w-1/2" }),
            ],
          }),
        ],
      })
    : s
      ? v.jsxs("div", {
          className: "bg-slate-800 rounded-lg p-6 border border-red-500/50",
          children: [
            v.jsxs("div", {
              className: "flex items-center gap-2 mb-4",
              children: [
                v.jsx(Wi, { className: "w-5 h-5 text-red-400" }),
                v.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "System Health",
                }),
              ],
            }),
            v.jsxs("p", {
              className: "text-red-400",
              children: ["Failed to fetch health status: ", s.message],
            }),
          ],
        })
      : v.jsxs("div", {
          className: "bg-slate-800 rounded-lg p-6 border border-slate-700",
          children: [
            v.jsxs("div", {
              className: "flex items-center justify-between mb-4",
              children: [
                v.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    v.jsx(Zi, { className: "w-5 h-5 text-blue-400" }),
                    v.jsx("h2", {
                      className: "text-lg font-semibold",
                      children: "System Health",
                    }),
                  ],
                }),
                i &&
                  v.jsxs("div", {
                    className: "flex items-center gap-1 text-xs text-slate-400",
                    children: [
                      v.jsx(bl, { className: "w-3 h-3" }),
                      i.toLocaleTimeString(),
                    ],
                  }),
              ],
            }),
            v.jsxs("div", {
              className: "grid grid-cols-2 gap-4",
              children: [
                v.jsxs("div", {
                  className: "bg-slate-900/50 rounded-lg p-4",
                  children: [
                    v.jsxs("div", {
                      className: "flex items-center gap-2 mb-2",
                      children: [
                        v.jsx(qi, { className: "w-4 h-4 text-slate-400" }),
                        v.jsx("span", {
                          className: "text-sm text-slate-400",
                          children: "API Status",
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className: `flex items-center gap-2 ${a(e == null ? void 0 : e.status)}`,
                      children: [
                        u(e == null ? void 0 : e.status),
                        v.jsx("span", {
                          className: "font-medium capitalize",
                          children:
                            (e == null ? void 0 : e.status) || "Unknown",
                        }),
                      ],
                    }),
                  ],
                }),
                v.jsxs("div", {
                  className: "bg-slate-900/50 rounded-lg p-4",
                  children: [
                    v.jsxs("div", {
                      className: "flex items-center gap-2 mb-2",
                      children: [
                        v.jsx(Ha, { className: "w-4 h-4 text-slate-400" }),
                        v.jsx("span", {
                          className: "text-sm text-slate-400",
                          children: "Storage (S3)",
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className: `flex items-center gap-2 ${a((d = e == null ? void 0 : e.checks) == null ? void 0 : d.storage)}`,
                      children: [
                        u(
                          (p = e == null ? void 0 : e.checks) == null
                            ? void 0
                            : p.storage,
                        ),
                        v.jsx("span", {
                          className: "font-medium capitalize",
                          children:
                            ((h = e == null ? void 0 : e.checks) == null
                              ? void 0
                              : h.storage) || "Unknown",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
}
const eb = "http://localhost:4318",
  bg = { OK: 0, ERROR: 2 };
function tb() {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)))
    .map((e) => e.toString(16).padStart(2, "0"))
    .join("");
}
function nb() {
  return Array.from(crypto.getRandomValues(new Uint8Array(8)))
    .map((e) => e.toString(16).padStart(2, "0"))
    .join("");
}
let Rg = null;
function rb(e) {
  (nb(), (Rg = Rg || tb()));
  const s = { name: e };
  return {
    setAttribute(i, a) {
      s[i] = a;
    },
    setStatus(i) {
      ((s["status.code"] = i.code),
        i.message && (s["status.message"] = i.message));
    },
    end() {},
  };
}
const sb = {
  startActiveSpan(e, t) {
    const s = rb(e);
    try {
      const i = t(s);
      return i instanceof Promise
        ? i
            .then((a) => (s.end(), a))
            .catch((a) => {
              throw (s.end(), a);
            })
        : (s.end(), i);
    } catch (i) {
      throw (s.end(), i);
    }
  },
};
function Aa(e, t) {
  return sb.startActiveSpan(e, async (s) => {
    try {
      const i = await t(s);
      return (s.setStatus({ code: bg.OK }), i);
    } catch (i) {
      throw (
        s.setStatus({
          code: bg.ERROR,
          message: i instanceof Error ? i.message : "Unknown error",
        }),
        i
      );
    }
  });
}
console.log("[Tracing] Initialized lightweight tracing module");
console.log(`[Tracing] OTLP endpoint configured: ${eb}`);
const ib = "http://localhost:3000";
class ob {
  constructor(t) {
    _c(this, "baseUrl");
    this.baseUrl = t;
  }
  async fetch(t, s) {
    const i = `${this.baseUrl}${t}`,
      a = await fetch(i, {
        ...s,
        headers: {
          "Content-Type": "application/json",
          ...(s == null ? void 0 : s.headers),
        },
      });
    if (!a.ok) throw new Error(`API Error: ${a.status} ${a.statusText}`);
    return a.json();
  }
  async getHealth() {
    return Aa("api.health", async () => this.fetch("/health"));
  }
  async initiateDownload(t) {
    return Aa(
      "api.download.initiate",
      async (s) => (
        s.setAttribute("fileIds.count", t.length),
        this.fetch("/v1/download/initiate", {
          method: "POST",
          body: JSON.stringify({ file_ids: t }),
        })
      ),
    );
  }
  async checkDownload(t) {
    return Aa(
      "api.download.check",
      async (s) => (
        s.setAttribute("fileId", t),
        this.fetch("/v1/download/check", {
          method: "POST",
          body: JSON.stringify({ file_id: t }),
        })
      ),
    );
  }
  async startDownload(t) {
    return Aa(
      "api.download.start",
      async (s) => (
        s.setAttribute("fileId", t),
        this.fetch("/v1/download/start", {
          method: "POST",
          body: JSON.stringify({ file_id: t }),
        })
      ),
    );
  }
}
class ab {
  constructor(t) {
    _c(this, "baseUrl");
    this.baseUrl = t;
  }
  async getServices() {
    try {
      return (
        (await (await fetch(`${this.baseUrl}/api/services`)).json()).data || []
      );
    } catch (t) {
      return (console.error("Failed to fetch Jaeger services:", t), []);
    }
  }
  async getTraces(t, s = 20) {
    try {
      const i = new URLSearchParams({
        service: t,
        limit: s.toString(),
        lookback: "1h",
      });
      return (
        (await (await fetch(`${this.baseUrl}/api/traces?${i}`)).json()).data ||
        []
      );
    } catch (i) {
      return (console.error("Failed to fetch Jaeger traces:", i), []);
    }
  }
  async getTrace(t) {
    var s;
    try {
      return (
        ((s = (await (await fetch(`${this.baseUrl}/api/traces/${t}`)).json())
          .data) == null
          ? void 0
          : s[0]) || null
      );
    } catch (i) {
      return (console.error("Failed to fetch trace:", i), null);
    }
  }
}
const Wa = new ob(ib),
  Mg = new ab("http://localhost:16686"),
  lb =
    "https://1a79012b399f0c3c824ec32b7e167218@o4510520362795008.ingest.us.sentry.io/4510520364826624";
function ub() {
  MN({
    dsn: lb,
    integrations: [CN(), mN()],
    tracesSampleRate: 1,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1,
    environment: "production",
  });
}
function qa(e, t) {
  (console.error("Captured error:", e), vl(e, { extra: t }));
}
function Vi(e, t, s) {
  Wn({ message: e, category: t, data: s, level: "info" });
}
function cb({ jobs: e, onJobCreated: t }) {
  const [s, i] = pe.useState(""),
    [a, u] = pe.useState(""),
    [d, p] = pe.useState(!1),
    [h, g] = pe.useState(null),
    [_, y] = pe.useState(null),
    [E, C] = pe.useState(!1),
    T = async () => {
      if (s.trim()) {
        p(!0);
        try {
          const D = s
            .split(",")
            .map((V) => parseInt(V.trim(), 10))
            .filter((V) => !isNaN(V));
          if (D.length === 0) throw new Error("Please enter valid file IDs");
          Vi("Initiating download", "user", { fileIds: D });
          const B = await Wa.initiateDownload(D);
          (t(B), i(""));
        } catch (D) {
          (qa(D, { fileIds: s }), alert(`Error: ${D.message}`));
        } finally {
          p(!1);
        }
      }
    },
    N = async () => {
      if (!a.trim()) return;
      const D = parseInt(a.trim(), 10);
      if (isNaN(D)) {
        alert("Please enter a valid file ID");
        return;
      }
      (p(!0), g(null));
      try {
        Vi("Checking file availability", "user", { fileId: D });
        const B = await Wa.checkDownload(D);
        g(B);
      } catch (B) {
        (qa(B, { fileId: D }), alert(`Error: ${B.message}`));
      } finally {
        p(!1);
      }
    },
    x = async (D) => {
      (C(!0), y(null));
      try {
        Vi("Starting download", "user", { fileId: D });
        const B = await Wa.startDownload(D);
        y(B);
      } catch (B) {
        (qa(B, { fileId: D }), alert(`Error: ${B.message}`));
      } finally {
        C(!1);
      }
    };
  return v.jsxs("div", {
    className: "space-y-6",
    children: [
      v.jsxs("div", {
        className: "bg-slate-800 rounded-lg p-6 border border-slate-700",
        children: [
          v.jsxs("div", {
            className: "flex items-center gap-2 mb-4",
            children: [
              v.jsx(X0, { className: "w-5 h-5 text-blue-400" }),
              v.jsx("h2", {
                className: "text-lg font-semibold",
                children: "Initiate Bulk Download",
              }),
            ],
          }),
          v.jsxs("div", {
            className: "flex gap-2",
            children: [
              v.jsx("input", {
                type: "text",
                value: s,
                onChange: (D) => i(D.target.value),
                placeholder:
                  "Enter file IDs (comma-separated, e.g., 10000, 20000, 30000)",
                className:
                  "flex-1 bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500",
              }),
              v.jsxs("button", {
                onClick: T,
                disabled: d || !s.trim(),
                className:
                  "bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed px-4 py-2 rounded-lg flex items-center gap-2 transition-colors",
                children: [
                  d
                    ? v.jsx(Bc, { className: "w-4 h-4 animate-spin" })
                    : v.jsx(KN, { className: "w-4 h-4" }),
                  "Initiate",
                ],
              }),
            ],
          }),
        ],
      }),
      v.jsxs("div", {
        className: "bg-slate-800 rounded-lg p-6 border border-slate-700",
        children: [
          v.jsxs("div", {
            className: "flex items-center gap-2 mb-4",
            children: [
              v.jsx(xd, { className: "w-5 h-5 text-green-400" }),
              v.jsx("h2", {
                className: "text-lg font-semibold",
                children: "Check File Availability",
              }),
            ],
          }),
          v.jsxs("div", {
            className: "flex gap-2 mb-4",
            children: [
              v.jsx("input", {
                type: "text",
                value: a,
                onChange: (D) => u(D.target.value),
                placeholder: "Enter file ID (e.g., 70000)",
                className:
                  "flex-1 bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-green-500",
              }),
              v.jsxs("button", {
                onClick: N,
                disabled: d || !a.trim(),
                className:
                  "bg-green-600 hover:bg-green-700 disabled:bg-slate-600 disabled:cursor-not-allowed px-4 py-2 rounded-lg flex items-center gap-2 transition-colors",
                children: [
                  d
                    ? v.jsx(Bc, { className: "w-4 h-4 animate-spin" })
                    : v.jsx(xd, { className: "w-4 h-4" }),
                  "Check",
                ],
              }),
            ],
          }),
          h &&
            v.jsxs("div", {
              className: "bg-slate-900/50 rounded-lg p-4 space-y-2",
              children: [
                v.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    h.available
                      ? v.jsx(wd, { className: "w-5 h-5 text-green-400" })
                      : v.jsx(ll, { className: "w-5 h-5 text-red-400" }),
                    v.jsxs("span", {
                      className: h.available
                        ? "text-green-400"
                        : "text-red-400",
                      children: [
                        "File ",
                        h.file_id,
                        " is",
                        " ",
                        h.available ? "available" : "not available",
                      ],
                    }),
                  ],
                }),
                h.available &&
                  v.jsxs(v.Fragment, {
                    children: [
                      v.jsxs("div", {
                        className: "text-sm text-slate-400",
                        children: [
                          "S3 Key:",
                          " ",
                          v.jsx("code", {
                            className: "text-blue-400",
                            children: h.s3Key,
                          }),
                        ],
                      }),
                      v.jsxs("div", {
                        className: "text-sm text-slate-400",
                        children: [
                          "Size:",
                          " ",
                          h.size
                            ? `${(h.size / 1024 / 1024).toFixed(2)} MB`
                            : "Unknown",
                        ],
                      }),
                      v.jsxs("button", {
                        onClick: () => x(h.file_id),
                        disabled: E,
                        className:
                          "mt-2 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-600 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm",
                        children: [
                          E
                            ? v.jsx(Bc, { className: "w-4 h-4 animate-spin" })
                            : v.jsx(Cg, { className: "w-4 h-4" }),
                          "Start Download (Long-running)",
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          _ &&
            v.jsxs("div", {
              className: "mt-4 bg-slate-900/50 rounded-lg p-4 space-y-2",
              children: [
                v.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    _.status === "completed"
                      ? v.jsx(wd, { className: "w-5 h-5 text-green-400" })
                      : v.jsx(ll, { className: "w-5 h-5 text-red-400" }),
                    v.jsx("span", {
                      className:
                        _.status === "completed"
                          ? "text-green-400"
                          : "text-red-400",
                      children: _.message,
                    }),
                  ],
                }),
                v.jsxs("div", {
                  className: "flex items-center gap-2 text-sm text-slate-400",
                  children: [
                    v.jsx(bl, { className: "w-4 h-4" }),
                    "Processing time:",
                    " ",
                    (_.processingTimeMs / 1e3).toFixed(1),
                    "s",
                  ],
                }),
                _.downloadUrl &&
                  v.jsxs("div", {
                    className: "text-sm text-slate-400 truncate",
                    children: [
                      "Download URL:",
                      " ",
                      v.jsx("code", {
                        className: "text-blue-400",
                        children: _.downloadUrl,
                      }),
                    ],
                  }),
              ],
            }),
        ],
      }),
      v.jsxs("div", {
        className: "bg-slate-800 rounded-lg p-6 border border-slate-700",
        children: [
          v.jsxs("div", {
            className: "flex items-center gap-2 mb-4",
            children: [
              v.jsx(Cg, { className: "w-5 h-5 text-purple-400" }),
              v.jsx("h2", {
                className: "text-lg font-semibold",
                children: "Recent Jobs",
              }),
            ],
          }),
          e.length === 0
            ? v.jsx("p", {
                className: "text-slate-400 text-sm",
                children: "No jobs yet. Initiate a download to see jobs here.",
              })
            : v.jsx("div", {
                className: "space-y-2",
                children: e.map((D) =>
                  v.jsxs(
                    "div",
                    {
                      className:
                        "bg-slate-900/50 rounded-lg p-3 flex items-center justify-between",
                      children: [
                        v.jsxs("div", {
                          children: [
                            v.jsx("code", {
                              className: "text-sm text-blue-400",
                              children: D.jobId,
                            }),
                            v.jsxs("div", {
                              className: "text-xs text-slate-400 mt-1",
                              children: [
                                D.totalFileIds,
                                " file(s) • Status: ",
                                D.status,
                              ],
                            }),
                          ],
                        }),
                        v.jsx("span", {
                          className: `px-2 py-1 rounded text-xs font-medium ${D.status === "completed" ? "bg-green-500/20 text-green-400" : D.status === "failed" ? "bg-red-500/20 text-red-400" : "bg-yellow-500/20 text-yellow-400"}`,
                          children: D.status,
                        }),
                      ],
                    },
                    D.jobId,
                  ),
                ),
              }),
        ],
      }),
    ],
  });
}
function db({ jaegerUrl: e }) {
  const [t, s] = pe.useState([]),
    [i, a] = pe.useState(""),
    [u, d] = pe.useState([]),
    [p, h] = pe.useState(!1),
    [g, _] = pe.useState(null);
  (pe.useEffect(() => {
    y();
  }, []),
    pe.useEffect(() => {
      i && E();
    }, [i]));
  const y = async () => {
      const x = await Mg.getServices();
      (s(x), x.length > 0 && !i && a(x[0]));
    },
    E = async () => {
      if (i) {
        h(!0);
        try {
          const x = await Mg.getTraces(i, 20);
          d(x);
        } finally {
          h(!1);
        }
      }
    },
    C = (x) =>
      x < 1e3
        ? `${x}μs`
        : x < 1e6
          ? `${(x / 1e3).toFixed(2)}ms`
          : `${(x / 1e6).toFixed(2)}s`,
    T = (x) => new Date(x / 1e3).toLocaleTimeString(),
    N = (x) => {
      const D = x.tags.find(
        (B) => B.key === "error" || B.key === "otel.status_code",
      );
      return D && (D.value === !0 || D.value === "ERROR")
        ? "border-red-500 bg-red-500/10"
        : "border-slate-600 bg-slate-900/50";
    };
  return v.jsxs("div", {
    className: "bg-slate-800 rounded-lg p-6 border border-slate-700",
    children: [
      v.jsxs("div", {
        className: "flex items-center justify-between mb-4",
        children: [
          v.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              v.jsx(xd, { className: "w-5 h-5 text-orange-400" }),
              v.jsx("h2", {
                className: "text-lg font-semibold",
                children: "Trace Viewer",
              }),
            ],
          }),
          v.jsxs("a", {
            href: e,
            target: "_blank",
            rel: "noopener noreferrer",
            className:
              "flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300",
            children: ["Open Jaeger UI ", v.jsx(eo, { className: "w-3 h-3" })],
          }),
        ],
      }),
      v.jsxs("div", {
        className: "flex gap-2 mb-4",
        children: [
          v.jsxs("select", {
            value: i,
            onChange: (x) => a(x.target.value),
            className:
              "flex-1 bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-orange-500",
            children: [
              v.jsx("option", { value: "", children: "Select a service..." }),
              t.map((x) => v.jsx("option", { value: x, children: x }, x)),
            ],
          }),
          v.jsx("button", {
            onClick: E,
            disabled: p || !i,
            className:
              "bg-orange-600 hover:bg-orange-700 disabled:bg-slate-600 px-4 py-2 rounded-lg text-sm transition-colors",
            children: p ? "Loading..." : "Refresh",
          }),
        ],
      }),
      u.length === 0
        ? v.jsx("p", {
            className: "text-slate-400 text-sm",
            children: i
              ? "No traces found. Make some API requests to generate traces."
              : "Select a service to view traces.",
          })
        : v.jsx("div", {
            className: "space-y-2 max-h-96 overflow-y-auto",
            children: u.map((x) => {
              const D = x.spans.reduce((R, A) =>
                  A.startTime < R.startTime ? A : R,
                ),
                B = x.spans.reduce((R, A) => Math.max(R, A.duration), 0),
                V = x.spans.some((R) =>
                  R.tags.some(
                    (A) =>
                      (A.key === "error" && A.value === !0) ||
                      (A.key === "otel.status_code" && A.value === "ERROR"),
                  ),
                ),
                K = g === x.traceID;
              return v.jsxs(
                "div",
                {
                  className:
                    "border border-slate-600 rounded-lg overflow-hidden",
                  children: [
                    v.jsxs("div", {
                      className: `p-3 cursor-pointer hover:bg-slate-700/50 transition-colors ${V ? "bg-red-500/10" : ""}`,
                      onClick: () => _(K ? null : x.traceID),
                      children: [
                        v.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            v.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                K
                                  ? v.jsx(WN, {
                                      className: "w-4 h-4 text-slate-400",
                                    })
                                  : v.jsx(qN, {
                                      className: "w-4 h-4 text-slate-400",
                                    }),
                                v.jsx("span", {
                                  className: "font-medium",
                                  children: D.operationName,
                                }),
                                V &&
                                  v.jsx(J0, {
                                    className: "w-4 h-4 text-red-400",
                                  }),
                              ],
                            }),
                            v.jsxs("div", {
                              className:
                                "flex items-center gap-4 text-sm text-slate-400",
                              children: [
                                v.jsxs("span", {
                                  children: [x.spans.length, " spans"],
                                }),
                                v.jsxs("span", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    v.jsx(bl, { className: "w-3 h-3" }),
                                    C(B),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        v.jsxs("div", {
                          className: "text-xs text-slate-500 mt-1",
                          children: [
                            v.jsx("code", { children: x.traceID }),
                            " •",
                            " ",
                            T(D.startTime),
                          ],
                        }),
                      ],
                    }),
                    K &&
                      v.jsx("div", {
                        className:
                          "border-t border-slate-600 p-3 space-y-2 bg-slate-900/30",
                        children: x.spans
                          .sort((R, A) => R.startTime - A.startTime)
                          .map((R) => {
                            var A;
                            return v.jsxs(
                              "div",
                              {
                                className: `border-l-2 pl-3 py-1 ${N(R)}`,
                                children: [
                                  v.jsxs("div", {
                                    className:
                                      "flex items-center justify-between",
                                    children: [
                                      v.jsx("span", {
                                        className: "text-sm font-medium",
                                        children: R.operationName,
                                      }),
                                      v.jsx("span", {
                                        className: "text-xs text-slate-400",
                                        children: C(R.duration),
                                      }),
                                    ],
                                  }),
                                  v.jsx("div", {
                                    className: "text-xs text-slate-500",
                                    children:
                                      ((A = x.processes[R.processID]) == null
                                        ? void 0
                                        : A.serviceName) || "unknown",
                                  }),
                                  R.tags.length > 0 &&
                                    v.jsxs("div", {
                                      className: "mt-1 flex flex-wrap gap-1",
                                      children: [
                                        R.tags
                                          .slice(0, 5)
                                          .map((q, X) =>
                                            v.jsxs(
                                              "span",
                                              {
                                                className:
                                                  "text-xs bg-slate-700 px-1.5 py-0.5 rounded",
                                                children: [
                                                  q.key,
                                                  "=",
                                                  String(q.value),
                                                ],
                                              },
                                              X,
                                            ),
                                          ),
                                        R.tags.length > 5 &&
                                          v.jsxs("span", {
                                            className: "text-xs text-slate-500",
                                            children: [
                                              "+",
                                              R.tags.length - 5,
                                              " more",
                                            ],
                                          }),
                                      ],
                                    }),
                                ],
                              },
                              R.spanID,
                            );
                          }),
                      }),
                  ],
                },
                x.traceID,
              );
            }),
          }),
    ],
  });
}
const Og = "http://localhost:3000";
function fb() {
  const [e, t] = pe.useState([]),
    [s, i] = pe.useState([]),
    [a, u] = pe.useState(""),
    [d, p] = pe.useState(!1),
    [h, g] = pe.useState("all"),
    _ = pe.useCallback(async () => {
      try {
        p(!0);
        const x = await fetch(`${Og}/errors`);
        if (x.ok) {
          const D = await x.json();
          i(D.errors || []);
        }
      } catch (x) {
        console.error("Failed to fetch API errors:", x);
      } finally {
        p(!1);
      }
    }, []);
  pe.useEffect(() => {
    _();
    const x = setInterval(_, 1e4);
    return () => clearInterval(x);
  }, [_]);
  const y = () => {
      const x = a || "Test error triggered from dashboard",
        D = new Error(x);
      (Vi("User triggered test error", "user", { message: x }),
        qa(D, { source: "dashboard", userTriggered: !0 }),
        t((B) => [
          {
            id: crypto.randomUUID(),
            message: x,
            timestamp: new Date(),
            source: "frontend",
            context: { userTriggered: !0 },
          },
          ...B,
        ]),
        u(""));
    },
    E = async () => {
      try {
        (Vi("Triggering API test error", "api"),
          await fetch(`${Og}/errors/test`, { method: "POST" }),
          await _());
      } catch (x) {
        console.error("Failed to trigger API error:", x);
      }
    },
    C = () => t([]),
    T = [
      ...e.map((x) => ({
        ...x,
        source: "frontend",
        timestamp: x.timestamp.toISOString(),
      })),
      ...s.map((x) => ({ ...x, source: "api" })),
    ].sort(
      (x, D) =>
        new Date(D.timestamp).getTime() - new Date(x.timestamp).getTime(),
    ),
    N = h === "all" ? T : T.filter((x) => x.source === h);
  return v.jsxs("div", {
    className: "bg-slate-800 rounded-lg p-6 border border-slate-700",
    children: [
      v.jsxs("div", {
        className: "flex items-center justify-between mb-4",
        children: [
          v.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              v.jsx(Wi, { className: "w-5 h-5 text-red-400" }),
              v.jsx("h2", {
                className: "text-lg font-semibold",
                children: "Error Tracking",
              }),
              d &&
                v.jsx(ul, { className: "w-4 h-4 text-slate-400 animate-spin" }),
            ],
          }),
          v.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              v.jsx("button", {
                onClick: _,
                className: "text-slate-400 hover:text-white p-1",
                title: "Refresh errors",
                children: v.jsx(ul, { className: "w-4 h-4" }),
              }),
              e.length > 0 &&
                v.jsx("button", {
                  onClick: C,
                  className:
                    "text-slate-400 hover:text-white flex items-center gap-1 text-sm",
                  children: v.jsx(XN, { className: "w-4 h-4" }),
                }),
            ],
          }),
        ],
      }),
      v.jsx("div", {
        className: "flex gap-2 mb-4",
        children: ["all", "api", "frontend"].map((x) =>
          v.jsxs(
            "button",
            {
              onClick: () => g(x),
              className: `px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${h === x ? "bg-red-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"}`,
              children: [
                x === "api" && v.jsx(qi, { className: "w-3.5 h-3.5" }),
                x === "frontend" && v.jsx(Hc, { className: "w-3.5 h-3.5" }),
                x === "all" && v.jsx(Wi, { className: "w-3.5 h-3.5" }),
                x.charAt(0).toUpperCase() + x.slice(1),
                v.jsx("span", {
                  className: "ml-1 bg-slate-900/50 px-1.5 rounded text-xs",
                  children:
                    x === "all"
                      ? T.length
                      : T.filter((D) => D.source === x).length,
                }),
              ],
            },
            x,
          ),
        ),
      }),
      v.jsx("div", {
        className: "mb-4 space-y-2",
        children: v.jsxs("div", {
          className: "flex gap-2",
          children: [
            v.jsx("input", {
              type: "text",
              value: a,
              onChange: (x) => u(x.target.value),
              placeholder: "Custom error message (optional)",
              className:
                "flex-1 bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-red-500",
            }),
            v.jsxs("button", {
              onClick: y,
              className:
                "bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg flex items-center gap-1.5 text-sm transition-colors",
              title: "Trigger frontend error",
              children: [v.jsx(Hc, { className: "w-4 h-4" }), "Frontend"],
            }),
            v.jsxs("button", {
              onClick: E,
              className:
                "bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded-lg flex items-center gap-1.5 text-sm transition-colors",
              title: "Trigger API error",
              children: [v.jsx(qi, { className: "w-4 h-4" }), "API"],
            }),
          ],
        }),
      }),
      N.length === 0
        ? v.jsxs("div", {
            className: "text-center py-8",
            children: [
              v.jsx(BN, { className: "w-12 h-12 text-slate-600 mx-auto mb-3" }),
              v.jsx("p", {
                className: "text-slate-400 text-sm",
                children: "No errors captured yet.",
              }),
              v.jsx("p", {
                className: "text-slate-500 text-xs mt-1",
                children: "Use the buttons above to test error tracking.",
              }),
            ],
          })
        : v.jsx("div", {
            className: "space-y-2 max-h-80 overflow-y-auto",
            children: N.map((x) =>
              v.jsx(
                "div",
                {
                  className: `border rounded-lg p-3 ${x.source === "api" ? "bg-purple-500/10 border-purple-500/30" : "bg-red-500/10 border-red-500/30"}`,
                  children: v.jsx("div", {
                    className: "flex items-start justify-between gap-2",
                    children: v.jsxs("div", {
                      className: "flex-1 min-w-0",
                      children: [
                        v.jsxs("div", {
                          className: "flex items-center gap-2 mb-1",
                          children: [
                            x.source === "api"
                              ? v.jsx(qi, {
                                  className:
                                    "w-3.5 h-3.5 text-purple-400 flex-shrink-0",
                                })
                              : v.jsx(Hc, {
                                  className:
                                    "w-3.5 h-3.5 text-red-400 flex-shrink-0",
                                }),
                            v.jsx("span", {
                              className: `text-xs font-medium px-1.5 py-0.5 rounded ${x.source === "api" ? "bg-purple-600/30 text-purple-300" : "bg-red-600/30 text-red-300"}`,
                              children: x.source.toUpperCase(),
                            }),
                            "endpoint" in x &&
                              x.endpoint &&
                              v.jsxs("span", {
                                className: "text-xs text-slate-400 font-mono",
                                children: [
                                  "method" in x && x.method,
                                  " ",
                                  x.endpoint,
                                ],
                              }),
                          ],
                        }),
                        v.jsx("p", {
                          className: `text-sm font-medium truncate ${x.source === "api" ? "text-purple-300" : "text-red-300"}`,
                          children: x.message,
                        }),
                        v.jsxs("div", {
                          className: "flex items-center gap-2 mt-1",
                          children: [
                            v.jsx("span", {
                              className: "text-xs text-slate-500",
                              children: new Date(x.timestamp).toLocaleString(),
                            }),
                            "requestId" in x &&
                              x.requestId &&
                              v.jsxs("span", {
                                className:
                                  "text-xs text-slate-500 font-mono truncate",
                                children: [
                                  "ID: ",
                                  x.requestId.slice(0, 8),
                                  "...",
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                },
                x.id,
              ),
            ),
          }),
      v.jsx("div", {
        className: "mt-4 p-3 bg-slate-900/50 rounded-lg",
        children: v.jsxs("div", {
          className: "flex items-start gap-2",
          children: [
            v.jsx(Wi, {
              className: "w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0",
            }),
            v.jsxs("div", {
              className: "text-xs text-slate-400",
              children: [
                v.jsx("p", {
                  className: "font-medium text-slate-300 mb-1",
                  children: "Sentry Integration",
                }),
                v.jsxs("a", {
                  href: "https://sentry.io",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "inline-flex items-center gap-1 text-blue-400 hover:text-blue-300",
                  children: [
                    "Open Sentry Dashboard ",
                    v.jsx(eo, { className: "w-3 h-3" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
async function xt(e, t) {
  var s;
  try {
    return (
      ((s = (
        await (
          await fetch(`${e}/api/v1/query?query=${encodeURIComponent(t)}`)
        ).json()
      ).data) == null
        ? void 0
        : s.result) || []
    );
  } catch (i) {
    return (console.error("Prometheus query failed:", t, i), []);
  }
}
function pb({ prometheusUrl: e, grafanaUrl: t }) {
  const [s, i] = pe.useState([]),
    [a, u] = pe.useState([]),
    [d, p] = pe.useState([]),
    [h, g] = pe.useState([]),
    [_, y] = pe.useState(!1),
    [E, C] = pe.useState(null),
    T = pe.useCallback(async () => {
      var N, x, D, B, V, K, R, A, q, X, z, G, se;
      y(!0);
      try {
        const [ee, ye, Ie, Pe, re, ge, P, J] = await Promise.all([
            xt(e, "sum(http_requests_total)"),
            xt(e, "sum(rate(http_requests_total[5m]))"),
            xt(
              e,
              "sum(rate(http_request_duration_seconds_sum[5m])) / sum(rate(http_request_duration_seconds_count[5m]))",
            ),
            xt(e, 'sum(http_requests_total{status=~"4..|5.."}) or vector(0)'),
            xt(e, "active_downloads"),
            xt(e, "sum(s3_operations_total)"),
            xt(
              e,
              "histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket[5m])) by (le))",
            ),
            xt(
              e,
              "histogram_quantile(0.99, sum(rate(http_request_duration_seconds_bucket[5m])) by (le))",
            ),
          ]),
          H = parseFloat(((N = ee[0]) == null ? void 0 : N.value[1]) || "0"),
          I = parseFloat(((x = ye[0]) == null ? void 0 : x.value[1]) || "0"),
          L = parseFloat(((D = Ie[0]) == null ? void 0 : D.value[1]) || "0"),
          he = parseFloat(((B = Pe[0]) == null ? void 0 : B.value[1]) || "0"),
          ce = H > 0 ? (he / H) * 100 : 0,
          _e = parseFloat(((V = P[0]) == null ? void 0 : V.value[1]) || "0"),
          Se = parseFloat(((K = J[0]) == null ? void 0 : K.value[1]) || "0");
        i([
          {
            name: "Total Requests",
            value: H.toLocaleString(),
            unit: "",
            icon: JN,
            color: "text-blue-400",
            bgColor: "bg-blue-500/10",
          },
          {
            name: "Request Rate",
            value: I.toFixed(2),
            unit: "req/s",
            icon: QN,
            color: "text-green-400",
            bgColor: "bg-green-500/10",
          },
          {
            name: "Avg Latency",
            value: isNaN(L) ? "0" : (L * 1e3).toFixed(1),
            unit: "ms",
            icon: bl,
            color: "text-yellow-400",
            bgColor: "bg-yellow-500/10",
          },
          {
            name: "P95 Latency",
            value: isNaN(_e) ? "0" : (_e * 1e3).toFixed(1),
            unit: "ms",
            icon: Ng,
            color: "text-orange-400",
            bgColor: "bg-orange-500/10",
          },
          {
            name: "P99 Latency",
            value: isNaN(Se) ? "0" : (Se * 1e3).toFixed(1),
            unit: "ms",
            icon: Ng,
            color: "text-red-400",
            bgColor: "bg-red-500/10",
          },
          {
            name: "Error Rate",
            value: ce.toFixed(2),
            unit: "%",
            icon: J0,
            color: ce > 5 ? "text-red-400" : "text-green-400",
            bgColor: ce > 5 ? "bg-red-500/10" : "bg-green-500/10",
          },
          {
            name: "Active Downloads",
            value: ((R = re[0]) == null ? void 0 : R.value[1]) || "0",
            unit: "",
            icon: X0,
            color: "text-purple-400",
            bgColor: "bg-purple-500/10",
          },
          {
            name: "S3 Operations",
            value: parseInt(
              ((A = ge[0]) == null ? void 0 : A.value[1]) || "0",
            ).toLocaleString(),
            unit: "",
            icon: Ha,
            color: "text-cyan-400",
            bgColor: "bg-cyan-500/10",
          },
        ]);
        const Oe = await xt(e, "sum by (path, method) (http_requests_total)"),
          Ce = await xt(
            e,
            "sum by (path) (rate(http_request_duration_seconds_sum[5m])) / sum by (path) (rate(http_request_duration_seconds_count[5m]))",
          ),
          Le = {};
        Ce.forEach((Ye) => {
          Le[Ye.metric.path] = parseFloat(Ye.value[1]) * 1e3;
        });
        const nt = Oe.filter(
          (Ye) => Ye.metric.path && !Ye.metric.path.includes("metrics"),
        )
          .map((Ye) => ({
            path: Ye.metric.path,
            method: Ye.metric.method || "GET",
            requests: parseInt(Ye.value[1]),
            avgLatency: Le[Ye.metric.path] || 0,
            errorRate: 0,
          }))
          .sort((Ye, In) => In.requests - Ye.requests)
          .slice(0, 8);
        u(nt);
        const [kn, ts, Vn, Ft, Vt] = await Promise.all([
          xt(e, "rate(process_cpu_seconds_total[5m]) * 100"),
          xt(e, "process_resident_memory_bytes / 1024 / 1024"),
          xt(e, "nodejs_heap_size_used_bytes / 1024 / 1024"),
          xt(e, "nodejs_heap_size_total_bytes / 1024 / 1024"),
          xt(e, "nodejs_eventloop_lag_seconds * 1000"),
        ]);
        g([
          {
            name: "CPU Usage",
            value: parseFloat(
              ((q = kn[0]) == null ? void 0 : q.value[1]) || "0",
            ).toFixed(1),
            unit: "%",
            icon: Ig,
            color: "text-blue-400",
            bgColor: "bg-blue-500/10",
          },
          {
            name: "Memory",
            value: parseFloat(
              ((X = ts[0]) == null ? void 0 : X.value[1]) || "0",
            ).toFixed(0),
            unit: "MB",
            icon: YN,
            color: "text-purple-400",
            bgColor: "bg-purple-500/10",
          },
          {
            name: "Heap Used",
            value: parseFloat(
              ((z = Vn[0]) == null ? void 0 : z.value[1]) || "0",
            ).toFixed(0),
            unit: "MB",
            icon: Ha,
            color: "text-cyan-400",
            bgColor: "bg-cyan-500/10",
          },
          {
            name: "Heap Total",
            value: parseFloat(
              ((G = Ft[0]) == null ? void 0 : G.value[1]) || "0",
            ).toFixed(0),
            unit: "MB",
            icon: Ha,
            color: "text-slate-400",
            bgColor: "bg-slate-500/10",
          },
          {
            name: "Event Loop Lag",
            value: parseFloat(
              ((se = Vt[0]) == null ? void 0 : se.value[1]) || "0",
            ).toFixed(2),
            unit: "ms",
            icon: Zi,
            color: "text-yellow-400",
            bgColor: "bg-yellow-500/10",
          },
        ]);
        const Tn = (await xt(e, "up")).map((Ye) => ({
          name: Ye.metric.job || "unknown",
          status: Ye.value[1] === "1" ? "up" : "down",
          lastCheck: new Date().toLocaleTimeString(),
        }));
        (p(Tn), C(new Date()));
      } catch (ee) {
        console.error("Failed to fetch metrics:", ee);
      } finally {
        y(!1);
      }
    }, [e]);
  return (
    pe.useEffect(() => {
      T();
      const N = setInterval(T, 5e3);
      return () => clearInterval(N);
    }, [T]),
    v.jsxs("div", {
      className: "bg-slate-800 rounded-lg p-6 border border-slate-700",
      children: [
        v.jsxs("div", {
          className: "flex items-center justify-between mb-6",
          children: [
            v.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                v.jsx(HN, { className: "w-5 h-5 text-cyan-400" }),
                v.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Performance Metrics",
                }),
                _ &&
                  v.jsx(ul, {
                    className: "w-4 h-4 text-slate-400 animate-spin",
                  }),
              ],
            }),
            v.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                E &&
                  v.jsxs("span", {
                    className: "text-xs text-slate-500",
                    children: ["Updated: ", E.toLocaleTimeString()],
                  }),
                v.jsx("button", {
                  onClick: T,
                  className: "text-slate-400 hover:text-white p-1",
                  title: "Refresh",
                  children: v.jsx(ul, { className: "w-4 h-4" }),
                }),
                v.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    v.jsxs("a", {
                      href: e,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300",
                      children: [
                        "Prometheus ",
                        v.jsx(eo, { className: "w-3 h-3" }),
                      ],
                    }),
                    v.jsx("span", {
                      className: "text-slate-600",
                      children: "|",
                    }),
                    v.jsxs("a", {
                      href: t,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300",
                      children: [
                        "Grafana ",
                        v.jsx(eo, { className: "w-3 h-3" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        v.jsx("div", {
          className:
            "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-6",
          children: s.map((N) =>
            v.jsxs(
              "div",
              {
                className: `${N.bgColor} rounded-lg p-3 border border-slate-700/50`,
                children: [
                  v.jsxs("div", {
                    className: "flex items-center gap-1.5 mb-1",
                    children: [
                      v.jsx(N.icon, { className: `w-3.5 h-3.5 ${N.color}` }),
                      v.jsx("span", {
                        className: "text-xs text-slate-400 truncate",
                        children: N.name,
                      }),
                    ],
                  }),
                  v.jsxs("div", {
                    className: `text-lg font-bold ${N.color}`,
                    children: [
                      N.value,
                      N.unit &&
                        v.jsx("span", {
                          className: "text-xs font-normal text-slate-500 ml-1",
                          children: N.unit,
                        }),
                    ],
                  }),
                ],
              },
              N.name,
            ),
          ),
        }),
        v.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
          children: [
            v.jsxs("div", {
              className:
                "bg-slate-900/50 rounded-lg p-4 border border-slate-700/50",
              children: [
                v.jsxs("h3", {
                  className:
                    "text-sm font-semibold mb-3 flex items-center gap-2",
                  children: [
                    v.jsx(qi, { className: "w-4 h-4 text-blue-400" }),
                    "Endpoint Breakdown",
                  ],
                }),
                a.length === 0
                  ? v.jsx("p", {
                      className: "text-slate-500 text-sm",
                      children: "No endpoint data yet",
                    })
                  : v.jsx("div", {
                      className: "space-y-2",
                      children: a.map((N, x) =>
                        v.jsxs(
                          "div",
                          {
                            className:
                              "flex items-center justify-between py-2 border-b border-slate-700/50 last:border-0",
                            children: [
                              v.jsxs("div", {
                                className: "flex items-center gap-2 min-w-0",
                                children: [
                                  v.jsx("span", {
                                    className: `text-xs font-mono px-1.5 py-0.5 rounded ${N.method === "POST" ? "bg-green-600/30 text-green-400" : N.method === "GET" ? "bg-blue-600/30 text-blue-400" : "bg-slate-600/30 text-slate-400"}`,
                                    children: N.method,
                                  }),
                                  v.jsx("span", {
                                    className:
                                      "text-sm text-slate-300 truncate font-mono",
                                    children: N.path,
                                  }),
                                ],
                              }),
                              v.jsxs("div", {
                                className: "flex items-center gap-4 text-xs",
                                children: [
                                  v.jsxs("span", {
                                    className: "text-slate-400",
                                    children: [
                                      N.requests.toLocaleString(),
                                      " req",
                                    ],
                                  }),
                                  v.jsxs("span", {
                                    className: "text-yellow-400",
                                    children: [N.avgLatency.toFixed(1), "ms"],
                                  }),
                                ],
                              }),
                            ],
                          },
                          x,
                        ),
                      ),
                    }),
              ],
            }),
            v.jsxs("div", {
              className: "space-y-4",
              children: [
                v.jsxs("div", {
                  className:
                    "bg-slate-900/50 rounded-lg p-4 border border-slate-700/50",
                  children: [
                    v.jsxs("h3", {
                      className:
                        "text-sm font-semibold mb-3 flex items-center gap-2",
                      children: [
                        v.jsx(Zi, { className: "w-4 h-4 text-green-400" }),
                        "Service Status",
                      ],
                    }),
                    v.jsx("div", {
                      className: "grid grid-cols-2 gap-2",
                      children: d.map((N, x) =>
                        v.jsxs(
                          "div",
                          {
                            className:
                              "flex items-center justify-between bg-slate-800/50 rounded px-3 py-2",
                            children: [
                              v.jsx("span", {
                                className: "text-sm text-slate-300",
                                children: N.name,
                              }),
                              N.status === "up"
                                ? v.jsx(VN, {
                                    className: "w-4 h-4 text-green-400",
                                  })
                                : v.jsx(ll, {
                                    className: "w-4 h-4 text-red-400",
                                  }),
                            ],
                          },
                          x,
                        ),
                      ),
                    }),
                  ],
                }),
                v.jsxs("div", {
                  className:
                    "bg-slate-900/50 rounded-lg p-4 border border-slate-700/50",
                  children: [
                    v.jsxs("h3", {
                      className:
                        "text-sm font-semibold mb-3 flex items-center gap-2",
                      children: [
                        v.jsx(Ig, { className: "w-4 h-4 text-purple-400" }),
                        "System Resources",
                      ],
                    }),
                    v.jsx("div", {
                      className: "grid grid-cols-2 sm:grid-cols-3 gap-2",
                      children: h.map((N, x) =>
                        v.jsxs(
                          "div",
                          {
                            className: `${N.bgColor} rounded px-3 py-2`,
                            children: [
                              v.jsxs("div", {
                                className: "flex items-center gap-1 mb-0.5",
                                children: [
                                  v.jsx(N.icon, {
                                    className: `w-3 h-3 ${N.color}`,
                                  }),
                                  v.jsx("span", {
                                    className: "text-xs text-slate-500",
                                    children: N.name,
                                  }),
                                ],
                              }),
                              v.jsxs("span", {
                                className: `text-sm font-semibold ${N.color}`,
                                children: [
                                  N.value,
                                  " ",
                                  v.jsx("span", {
                                    className:
                                      "text-xs font-normal text-slate-500",
                                    children: N.unit,
                                  }),
                                ],
                              }),
                            ],
                          },
                          x,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        v.jsxs("div", {
          className: "mt-4 grid grid-cols-2 md:grid-cols-4 gap-2",
          children: [
            v.jsxs("a", {
              href: `${e}/graph?g0.expr=up&g0.tab=0`,
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "bg-slate-900/50 hover:bg-slate-700/50 rounded-lg p-3 flex items-center gap-2 text-sm transition-colors",
              children: [
                v.jsx("span", {
                  className: "w-2 h-2 rounded-full bg-green-400",
                }),
                "Service Health",
              ],
            }),
            v.jsxs("a", {
              href: `${e}/graph?g0.expr=rate(http_requests_total[5m])&g0.tab=0`,
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "bg-slate-900/50 hover:bg-slate-700/50 rounded-lg p-3 flex items-center gap-2 text-sm transition-colors",
              children: [
                v.jsx("span", {
                  className: "w-2 h-2 rounded-full bg-blue-400",
                }),
                "Request Rate",
              ],
            }),
            v.jsxs("a", {
              href: `${e}/graph?g0.expr=histogram_quantile(0.95,%20sum(rate(http_request_duration_seconds_bucket[5m]))%20by%20(le))&g0.tab=0`,
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "bg-slate-900/50 hover:bg-slate-700/50 rounded-lg p-3 flex items-center gap-2 text-sm transition-colors",
              children: [
                v.jsx("span", {
                  className: "w-2 h-2 rounded-full bg-yellow-400",
                }),
                "P95 Latency",
              ],
            }),
            v.jsxs("a", {
              href: `${t}/d/delineate/delineate-dashboard`,
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "bg-slate-900/50 hover:bg-slate-700/50 rounded-lg p-3 flex items-center gap-2 text-sm transition-colors",
              children: [
                v.jsx("span", {
                  className: "w-2 h-2 rounded-full bg-purple-400",
                }),
                "Full Dashboard",
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function hb(e, t = 5e3, s = !0) {
  const [i, a] = pe.useState(null),
    [u, d] = pe.useState(null),
    [p, h] = pe.useState(!0),
    [g, _] = pe.useState(null),
    y = pe.useCallback(async () => {
      try {
        const E = await e();
        (a(E), d(null), _(new Date()));
      } catch (E) {
        d(E instanceof Error ? E : new Error("Unknown error"));
      } finally {
        h(!1);
      }
    }, [e]);
  return (
    pe.useEffect(() => {
      if (!s) return;
      y();
      const E = setInterval(y, t);
      return () => clearInterval(E);
    }, [y, t, s]),
    { data: i, error: u, loading: p, lastUpdated: g, refetch: y }
  );
}
const mb = "http://localhost:16686",
  gb = "http://localhost:9090",
  yb = "http://localhost:3001";
function vb() {
  const [e, t] = pe.useState([]),
    s = pe.useCallback(() => Wa.getHealth(), []),
    { data: i, error: a, loading: u, lastUpdated: d } = hb(s, 5e3),
    p = (h) => {
      t((g) => [h, ...g]);
    };
  return v.jsxs("div", {
    className: "min-h-screen bg-slate-900",
    children: [
      v.jsx("header", {
        className: "bg-slate-800 border-b border-slate-700 sticky top-0 z-50",
        children: v.jsxs("div", {
          className:
            "max-w-7xl mx-auto px-4 py-4 flex items-center justify-between",
          children: [
            v.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                v.jsx(Zi, { className: "w-8 h-8 text-blue-400" }),
                v.jsxs("div", {
                  children: [
                    v.jsx("h1", {
                      className: "text-xl font-bold",
                      children: "Delineate Dashboard",
                    }),
                    v.jsx("p", {
                      className: "text-xs text-slate-400",
                      children: "Observability & Monitoring",
                    }),
                  ],
                }),
              ],
            }),
            v.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                v.jsxs("a", {
                  href: "http://localhost:3000/docs",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "flex items-center gap-1 text-sm text-slate-400 hover:text-white",
                  children: ["API Docs ", v.jsx(eo, { className: "w-3 h-3" })],
                }),
                v.jsxs("a", {
                  href: "https://github.com/Seyamalam/cuet-hackathon-1",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "flex items-center gap-1 text-sm text-slate-400 hover:text-white",
                  children: [v.jsx(GN, { className: "w-4 h-4" }), "GitHub"],
                }),
              ],
            }),
          ],
        }),
      }),
      v.jsxs("main", {
        className: "max-w-7xl mx-auto px-4 py-6",
        children: [
          v.jsx("div", {
            className:
              "mb-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-4",
            children: v.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                v.jsxs("div", {
                  children: [
                    v.jsx("h2", {
                      className: "font-semibold",
                      children: "CUET Hackathon 2025 - Challenge 4",
                    }),
                    v.jsx("p", {
                      className: "text-sm text-slate-400",
                      children:
                        "Observability Dashboard with Sentry, OpenTelemetry, and Jaeger integration",
                    }),
                  ],
                }),
                v.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    v.jsx("span", {
                      className: `w-2 h-2 rounded-full ${(i == null ? void 0 : i.status) === "healthy" ? "bg-green-400 animate-pulse" : "bg-red-400"}`,
                    }),
                    v.jsx("span", {
                      className: "text-sm",
                      children:
                        (i == null ? void 0 : i.status) === "healthy"
                          ? "All Systems Operational"
                          : "Issues Detected",
                    }),
                  ],
                }),
              ],
            }),
          }),
          v.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
            children: [
              v.jsx(ZN, { health: i, loading: u, error: a, lastUpdated: d }),
              v.jsx(fb, {}),
              v.jsx("div", {
                className: "lg:col-span-2",
                children: v.jsx(cb, { jobs: e, onJobCreated: p }),
              }),
              v.jsx("div", {
                className: "lg:col-span-2",
                children: v.jsx(db, { jaegerUrl: mb }),
              }),
              v.jsx("div", {
                className: "lg:col-span-2",
                children: v.jsx(pb, { prometheusUrl: gb, grafanaUrl: yb }),
              }),
            ],
          }),
          v.jsxs("div", {
            className:
              "mt-6 bg-slate-800 rounded-lg p-6 border border-slate-700",
            children: [
              v.jsx("h3", {
                className: "text-lg font-semibold mb-3",
                children: "Trace Correlation",
              }),
              v.jsx("p", {
                className: "text-sm text-slate-400 mb-4",
                children:
                  "This dashboard automatically correlates traces between frontend and backend:",
              }),
              v.jsxs("div", {
                className:
                  "bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-x-auto",
                children: [
                  v.jsx("div", {
                    className: "text-green-400",
                    children: "// Frontend span creates trace",
                  }),
                  v.jsxs("div", {
                    className: "text-slate-300",
                    children: [
                      "Frontend span → trace-id:",
                      " ",
                      v.jsx("span", {
                        className: "text-blue-400",
                        children: "abc123",
                      }),
                    ],
                  }),
                  v.jsx("div", {
                    className: "text-slate-300 mt-2",
                    children: "// Backend receives propagated context",
                  }),
                  v.jsxs("div", {
                    className: "text-slate-300",
                    children: [
                      "Backend header: traceparent=00-",
                      v.jsx("span", {
                        className: "text-blue-400",
                        children: "abc123",
                      }),
                      "-...",
                    ],
                  }),
                  v.jsx("div", {
                    className: "text-slate-300 mt-2",
                    children: "// Sentry errors tagged with trace",
                  }),
                  v.jsxs("div", {
                    className: "text-slate-300",
                    children: [
                      "Sentry error → trace_id=",
                      v.jsx("span", {
                        className: "text-blue-400",
                        children: "abc123",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      v.jsx("footer", {
        className: "bg-slate-800 border-t border-slate-700 mt-12",
        children: v.jsxs("div", {
          className:
            "max-w-7xl mx-auto px-4 py-4 text-center text-sm text-slate-400",
          children: [
            v.jsx("p", {
              children: "Delineate Hackathon Challenge — CUET Fest 2025",
            }),
            v.jsx("p", {
              className: "mt-1",
              children:
                "Built with React, Vite, OpenTelemetry, Sentry, Jaeger, Prometheus & Grafana",
            }),
          ],
        }),
      }),
    ],
  });
}
ub();
oS.createRoot(document.getElementById("root")).render(
  v.jsx(pe.StrictMode, {
    children: v.jsx(nf, {
      fallback: ({ error: e }) =>
        v.jsx("div", {
          className:
            "min-h-screen bg-slate-900 flex items-center justify-center",
          children: v.jsxs("div", {
            className:
              "bg-red-500/10 border border-red-500 rounded-lg p-8 max-w-md text-center",
            children: [
              v.jsx("h1", {
                className: "text-xl font-bold text-red-400 mb-2",
                children: "Something went wrong",
              }),
              v.jsx("p", {
                className: "text-slate-400 mb-4",
                children: e instanceof Error ? e.message : "Unknown error",
              }),
              v.jsx("button", {
                onClick: () => window.location.reload(),
                className: "bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg",
                children: "Reload Page",
              }),
            ],
          }),
        }),
      children: v.jsx(vb, {}),
    }),
  }),
);
