function Bp(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r)
                if (l !== "default" && !(l in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, l);
                    i && Object.defineProperty(e, l, i.get ? i : {
                        enumerable: !0,
                        get: () => r[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver(l => {
        for (const i of l)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(l) {
        const i = {};
        return l.integrity && (i.integrity = l.integrity),
        l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
        l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(l) {
        if (l.ep)
            return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i)
    }
}
)();
function bc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Oc = {
    exports: {}
}
  , ei = {}
  , Ic = {
    exports: {}
}
  , A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar = Symbol.for("react.element")
  , Vp = Symbol.for("react.portal")
  , Hp = Symbol.for("react.fragment")
  , Qp = Symbol.for("react.strict_mode")
  , Yp = Symbol.for("react.profiler")
  , Gp = Symbol.for("react.provider")
  , Xp = Symbol.for("react.context")
  , Kp = Symbol.for("react.forward_ref")
  , Zp = Symbol.for("react.suspense")
  , Jp = Symbol.for("react.memo")
  , qp = Symbol.for("react.lazy")
  , zs = Symbol.iterator;
function em(e) {
    return e === null || typeof e != "object" ? null : (e = zs && e[zs] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Tc = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , zc = Object.assign
  , Lc = {};
function An(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Lc,
    this.updater = n || Tc
}
An.prototype.isReactComponent = {};
An.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
An.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Ac() {}
Ac.prototype = An.prototype;
function Sa(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Lc,
    this.updater = n || Tc
}
var Na = Sa.prototype = new Ac;
Na.constructor = Sa;
zc(Na, An.prototype);
Na.isPureReactComponent = !0;
var Ls = Array.isArray
  , Rc = Object.prototype.hasOwnProperty
  , Ea = {
    current: null
}
  , Mc = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Fc(e, t, n) {
    var r, l = {}, i = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            Rc.call(t, r) && !Mc.hasOwnProperty(r) && (l[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        l.children = n;
    else if (1 < a) {
        for (var s = Array(a), u = 0; u < a; u++)
            s[u] = arguments[u + 2];
        l.children = s
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            l[r] === void 0 && (l[r] = a[r]);
    return {
        $$typeof: Ar,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Ea.current
    }
}
function tm(e, t) {
    return {
        $$typeof: Ar,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Ca(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ar
}
function nm(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var As = /\/+/g;
function Pi(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? nm("" + e.key) : t.toString(36)
}
function cl(e, t, n, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Ar:
            case Vp:
                o = !0
            }
        }
    if (o)
        return o = e,
        l = l(o),
        e = r === "" ? "." + Pi(o, 0) : r,
        Ls(l) ? (n = "",
        e != null && (n = e.replace(As, "$&/") + "/"),
        cl(l, t, n, "", function(u) {
            return u
        })) : l != null && (Ca(l) && (l = tm(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(As, "$&/") + "/") + e)),
        t.push(l)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    Ls(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var s = r + Pi(i, a);
            o += cl(i, t, n, s, l)
        }
    else if (s = em(e),
    typeof s == "function")
        for (e = s.call(e),
        a = 0; !(i = e.next()).done; )
            i = i.value,
            s = r + Pi(i, a++),
            o += cl(i, t, n, s, l);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function Hr(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , l = 0;
    return cl(e, r, "", "", function(i) {
        return t.call(n, i, l++)
    }),
    r
}
function rm(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var he = {
    current: null
}
  , fl = {
    transition: null
}
  , lm = {
    ReactCurrentDispatcher: he,
    ReactCurrentBatchConfig: fl,
    ReactCurrentOwner: Ea
};
function Dc() {
    throw Error("act(...) is not supported in production builds of React.")
}
A.Children = {
    map: Hr,
    forEach: function(e, t, n) {
        Hr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Hr(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Hr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Ca(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
A.Component = An;
A.Fragment = Hp;
A.Profiler = Yp;
A.PureComponent = Sa;
A.StrictMode = Qp;
A.Suspense = Zp;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lm;
A.act = Dc;
A.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = zc({}, e.props)
      , l = e.key
      , i = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        o = Ea.current),
        t.key !== void 0 && (l = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (s in t)
            Rc.call(t, s) && !Mc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1)
        r.children = n;
    else if (1 < s) {
        a = Array(s);
        for (var u = 0; u < s; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: Ar,
        type: e.type,
        key: l,
        ref: i,
        props: r,
        _owner: o
    }
}
;
A.createContext = function(e) {
    return e = {
        $$typeof: Xp,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Gp,
        _context: e
    },
    e.Consumer = e
}
;
A.createElement = Fc;
A.createFactory = function(e) {
    var t = Fc.bind(null, e);
    return t.type = e,
    t
}
;
A.createRef = function() {
    return {
        current: null
    }
}
;
A.forwardRef = function(e) {
    return {
        $$typeof: Kp,
        render: e
    }
}
;
A.isValidElement = Ca;
A.lazy = function(e) {
    return {
        $$typeof: qp,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: rm
    }
}
;
A.memo = function(e, t) {
    return {
        $$typeof: Jp,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
A.startTransition = function(e) {
    var t = fl.transition;
    fl.transition = {};
    try {
        e()
    } finally {
        fl.transition = t
    }
}
;
A.unstable_act = Dc;
A.useCallback = function(e, t) {
    return he.current.useCallback(e, t)
}
;
A.useContext = function(e) {
    return he.current.useContext(e)
}
;
A.useDebugValue = function() {}
;
A.useDeferredValue = function(e) {
    return he.current.useDeferredValue(e)
}
;
A.useEffect = function(e, t) {
    return he.current.useEffect(e, t)
}
;
A.useId = function() {
    return he.current.useId()
}
;
A.useImperativeHandle = function(e, t, n) {
    return he.current.useImperativeHandle(e, t, n)
}
;
A.useInsertionEffect = function(e, t) {
    return he.current.useInsertionEffect(e, t)
}
;
A.useLayoutEffect = function(e, t) {
    return he.current.useLayoutEffect(e, t)
}
;
A.useMemo = function(e, t) {
    return he.current.useMemo(e, t)
}
;
A.useReducer = function(e, t, n) {
    return he.current.useReducer(e, t, n)
}
;
A.useRef = function(e) {
    return he.current.useRef(e)
}
;
A.useState = function(e) {
    return he.current.useState(e)
}
;
A.useSyncExternalStore = function(e, t, n) {
    return he.current.useSyncExternalStore(e, t, n)
}
;
A.useTransition = function() {
    return he.current.useTransition()
}
;
A.version = "18.3.1";
Ic.exports = A;
var S = Ic.exports;
const ti = bc(S)
  , im = Bp({
    __proto__: null,
    default: ti
}, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var om = S
  , am = Symbol.for("react.element")
  , sm = Symbol.for("react.fragment")
  , um = Object.prototype.hasOwnProperty
  , cm = om.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , fm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Uc(e, t, n) {
    var r, l = {}, i = null, o = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        um.call(t, r) && !fm.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: am,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: cm.current
    }
}
ei.Fragment = sm;
ei.jsx = Uc;
ei.jsxs = Uc;
Oc.exports = ei;
var c = Oc.exports
  , $c = {
    exports: {}
}
  , je = {}
  , Wc = {
    exports: {}
}
  , Bc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(P, T) {
        var z = P.length;
        P.push(T);
        e: for (; 0 < z; ) {
            var X = z - 1 >>> 1
              , te = P[X];
            if (0 < l(te, T))
                P[X] = T,
                P[z] = te,
                z = X;
            else
                break e
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0]
    }
    function r(P) {
        if (P.length === 0)
            return null;
        var T = P[0]
          , z = P.pop();
        if (z !== T) {
            P[0] = z;
            e: for (var X = 0, te = P.length, Br = te >>> 1; X < Br; ) {
                var Ft = 2 * (X + 1) - 1
                  , ji = P[Ft]
                  , Dt = Ft + 1
                  , Vr = P[Dt];
                if (0 > l(ji, z))
                    Dt < te && 0 > l(Vr, ji) ? (P[X] = Vr,
                    P[Dt] = z,
                    X = Dt) : (P[X] = ji,
                    P[Ft] = z,
                    X = Ft);
                else if (Dt < te && 0 > l(Vr, z))
                    P[X] = Vr,
                    P[Dt] = z,
                    X = Dt;
                else
                    break e
            }
        }
        return T
    }
    function l(P, T) {
        var z = P.sortIndex - T.sortIndex;
        return z !== 0 ? z : P.id - T.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date
          , a = o.now();
        e.unstable_now = function() {
            return o.now() - a
        }
    }
    var s = []
      , u = []
      , p = 1
      , d = null
      , h = 3
      , v = !1
      , x = !1
      , w = !1
      , C = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , f = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function g(P) {
        for (var T = n(u); T !== null; ) {
            if (T.callback === null)
                r(u);
            else if (T.startTime <= P)
                r(u),
                T.sortIndex = T.expirationTime,
                t(s, T);
            else
                break;
            T = n(u)
        }
    }
    function y(P) {
        if (w = !1,
        g(P),
        !x)
            if (n(s) !== null)
                x = !0,
                Ei(E);
            else {
                var T = n(u);
                T !== null && Ci(y, T.startTime - P)
            }
    }
    function E(P, T) {
        x = !1,
        w && (w = !1,
        m(I),
        I = -1),
        v = !0;
        var z = h;
        try {
            for (g(T),
            d = n(s); d !== null && (!(d.expirationTime > T) || P && !Ae()); ) {
                var X = d.callback;
                if (typeof X == "function") {
                    d.callback = null,
                    h = d.priorityLevel;
                    var te = X(d.expirationTime <= T);
                    T = e.unstable_now(),
                    typeof te == "function" ? d.callback = te : d === n(s) && r(s),
                    g(T)
                } else
                    r(s);
                d = n(s)
            }
            if (d !== null)
                var Br = !0;
            else {
                var Ft = n(u);
                Ft !== null && Ci(y, Ft.startTime - T),
                Br = !1
            }
            return Br
        } finally {
            d = null,
            h = z,
            v = !1
        }
    }
    var b = !1
      , _ = null
      , I = -1
      , G = 5
      , R = -1;
    function Ae() {
        return !(e.unstable_now() - R < G)
    }
    function $n() {
        if (_ !== null) {
            var P = e.unstable_now();
            R = P;
            var T = !0;
            try {
                T = _(!0, P)
            } finally {
                T ? Wn() : (b = !1,
                _ = null)
            }
        } else
            b = !1
    }
    var Wn;
    if (typeof f == "function")
        Wn = function() {
            f($n)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Ts = new MessageChannel
          , Wp = Ts.port2;
        Ts.port1.onmessage = $n,
        Wn = function() {
            Wp.postMessage(null)
        }
    } else
        Wn = function() {
            C($n, 0)
        }
        ;
    function Ei(P) {
        _ = P,
        b || (b = !0,
        Wn())
    }
    function Ci(P, T) {
        I = C(function() {
            P(e.unstable_now())
        }, T)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(P) {
        P.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        x || v || (x = !0,
        Ei(E))
    }
    ,
    e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < P ? Math.floor(1e3 / P) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return h
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }
    ,
    e.unstable_next = function(P) {
        switch (h) {
        case 1:
        case 2:
        case 3:
            var T = 3;
            break;
        default:
            T = h
        }
        var z = h;
        h = T;
        try {
            return P()
        } finally {
            h = z
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(P, T) {
        switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            P = 3
        }
        var z = h;
        h = P;
        try {
            return T()
        } finally {
            h = z
        }
    }
    ,
    e.unstable_scheduleCallback = function(P, T, z) {
        var X = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay,
        z = typeof z == "number" && 0 < z ? X + z : X) : z = X,
        P) {
        case 1:
            var te = -1;
            break;
        case 2:
            te = 250;
            break;
        case 5:
            te = 1073741823;
            break;
        case 4:
            te = 1e4;
            break;
        default:
            te = 5e3
        }
        return te = z + te,
        P = {
            id: p++,
            callback: T,
            priorityLevel: P,
            startTime: z,
            expirationTime: te,
            sortIndex: -1
        },
        z > X ? (P.sortIndex = z,
        t(u, P),
        n(s) === null && P === n(u) && (w ? (m(I),
        I = -1) : w = !0,
        Ci(y, z - X))) : (P.sortIndex = te,
        t(s, P),
        x || v || (x = !0,
        Ei(E))),
        P
    }
    ,
    e.unstable_shouldYield = Ae,
    e.unstable_wrapCallback = function(P) {
        var T = h;
        return function() {
            var z = h;
            h = T;
            try {
                return P.apply(this, arguments)
            } finally {
                h = z
            }
        }
    }
}
)(Bc);
Wc.exports = Bc;
var dm = Wc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pm = S
  , Ce = dm;
function N(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Vc = new Set
  , pr = {};
function tn(e, t) {
    Pn(e, t),
    Pn(e + "Capture", t)
}
function Pn(e, t) {
    for (pr[e] = t,
    e = 0; e < t.length; e++)
        Vc.add(t[e])
}
var rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , oo = Object.prototype.hasOwnProperty
  , mm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Rs = {}
  , Ms = {};
function hm(e) {
    return oo.call(Ms, e) ? !0 : oo.call(Rs, e) ? !1 : mm.test(e) ? Ms[e] = !0 : (Rs[e] = !0,
    !1)
}
function gm(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function vm(e, t, n, r) {
    if (t === null || typeof t > "u" || gm(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function ge(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = l,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = o
}
var oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    oe[e] = new ge(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    oe[t] = new ge(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    oe[e] = new ge(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    oe[e] = new ge(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    oe[e] = new ge(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    oe[e] = new ge(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    oe[e] = new ge(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    oe[e] = new ge(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    oe[e] = new ge(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var ja = /[\-:]([a-z])/g;
function Pa(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ja, Pa);
    oe[t] = new ge(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ja, Pa);
    oe[t] = new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ja, Pa);
    oe[t] = new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    oe[e] = new ge(e,1,!1,e.toLowerCase(),null,!1,!1)
});
oe.xlinkHref = new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    oe[e] = new ge(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function _a(e, t, n, r) {
    var l = oe.hasOwnProperty(t) ? oe[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (vm(t, n, l, r) && (n = null),
    r || l === null ? hm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName,
    r = l.attributeNamespace,
    n === null ? e.removeAttribute(t) : (l = l.type,
    n = l === 3 || l === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var ut = pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Qr = Symbol.for("react.element")
  , on = Symbol.for("react.portal")
  , an = Symbol.for("react.fragment")
  , ba = Symbol.for("react.strict_mode")
  , ao = Symbol.for("react.profiler")
  , Hc = Symbol.for("react.provider")
  , Qc = Symbol.for("react.context")
  , Oa = Symbol.for("react.forward_ref")
  , so = Symbol.for("react.suspense")
  , uo = Symbol.for("react.suspense_list")
  , Ia = Symbol.for("react.memo")
  , pt = Symbol.for("react.lazy")
  , Yc = Symbol.for("react.offscreen")
  , Fs = Symbol.iterator;
function Bn(e) {
    return e === null || typeof e != "object" ? null : (e = Fs && e[Fs] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Q = Object.assign, _i;
function Zn(e) {
    if (_i === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            _i = t && t[1] || ""
        }
    return `
` + _i + e
}
var bi = !1;
function Oi(e, t) {
    if (!e || bi)
        return "";
    bi = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var l = u.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, a = i.length - 1; 1 <= o && 0 <= a && l[o] !== i[a]; )
                a--;
            for (; 1 <= o && 0 <= a; o--,
            a--)
                if (l[o] !== i[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--,
                            a--,
                            0 > a || l[o] !== i[a]) {
                                var s = `
` + l[o].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                s
                            }
                        while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        bi = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Zn(e) : ""
}
function ym(e) {
    switch (e.tag) {
    case 5:
        return Zn(e.type);
    case 16:
        return Zn("Lazy");
    case 13:
        return Zn("Suspense");
    case 19:
        return Zn("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Oi(e.type, !1),
        e;
    case 11:
        return e = Oi(e.type.render, !1),
        e;
    case 1:
        return e = Oi(e.type, !0),
        e;
    default:
        return ""
    }
}
function co(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case an:
        return "Fragment";
    case on:
        return "Portal";
    case ao:
        return "Profiler";
    case ba:
        return "StrictMode";
    case so:
        return "Suspense";
    case uo:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Qc:
            return (e.displayName || "Context") + ".Consumer";
        case Hc:
            return (e._context.displayName || "Context") + ".Provider";
        case Oa:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Ia:
            return t = e.displayName || null,
            t !== null ? t : co(e.type) || "Memo";
        case pt:
            t = e._payload,
            e = e._init;
            try {
                return co(e(t))
            } catch {}
        }
    return null
}
function xm(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return co(t);
    case 8:
        return t === ba ? "StrictMode" : "Mode";
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
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function bt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Gc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function wm(e) {
    var t = Gc(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(o) {
                r = "" + o,
                i.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Yr(e) {
    e._valueTracker || (e._valueTracker = wm(e))
}
function Xc(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Gc(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Cl(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function fo(e, t) {
    var n = t.checked;
    return Q({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Ds(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = bt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Kc(e, t) {
    t = t.checked,
    t != null && _a(e, "checked", t, !1)
}
function po(e, t) {
    Kc(e, t);
    var n = bt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? mo(e, t.type, n) : t.hasOwnProperty("defaultValue") && mo(e, t.type, bt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Us(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function mo(e, t, n) {
    (t !== "number" || Cl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Jn = Array.isArray;
function wn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var l = 0; l < n.length; l++)
            t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            l = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== l && (e[n].selected = l),
            l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + bt(n),
        t = null,
        l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0,
                r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}
function ho(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(N(91));
    return Q({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function $s(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(N(92));
            if (Jn(n)) {
                if (1 < n.length)
                    throw Error(N(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: bt(n)
    }
}
function Zc(e, t) {
    var n = bt(t.value)
      , r = bt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Ws(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Jc(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function go(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Jc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Gr, qc = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Gr = Gr || document.createElement("div"),
        Gr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Gr.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function mr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var nr = {
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
    strokeWidth: !0
}
  , km = ["Webkit", "ms", "Moz", "O"];
Object.keys(nr).forEach(function(e) {
    km.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        nr[t] = nr[e]
    })
});
function ef(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || nr.hasOwnProperty(e) && nr[e] ? ("" + t).trim() : t + "px"
}
function tf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , l = ef(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, l) : e[n] = l
        }
}
var Sm = Q({
    menuitem: !0
}, {
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
    wbr: !0
});
function vo(e, t) {
    if (t) {
        if (Sm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(N(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(N(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(N(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(N(62))
    }
}
function yo(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
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
        return !0
    }
}
var xo = null;
function Ta(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var wo = null
  , kn = null
  , Sn = null;
function Bs(e) {
    if (e = Fr(e)) {
        if (typeof wo != "function")
            throw Error(N(280));
        var t = e.stateNode;
        t && (t = oi(t),
        wo(e.stateNode, e.type, t))
    }
}
function nf(e) {
    kn ? Sn ? Sn.push(e) : Sn = [e] : kn = e
}
function rf() {
    if (kn) {
        var e = kn
          , t = Sn;
        if (Sn = kn = null,
        Bs(e),
        t)
            for (e = 0; e < t.length; e++)
                Bs(t[e])
    }
}
function lf(e, t) {
    return e(t)
}
function of() {}
var Ii = !1;
function af(e, t, n) {
    if (Ii)
        return e(t, n);
    Ii = !0;
    try {
        return lf(e, t, n)
    } finally {
        Ii = !1,
        (kn !== null || Sn !== null) && (of(),
        rf())
    }
}
function hr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = oi(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(N(231, t, typeof n));
    return n
}
var ko = !1;
if (rt)
    try {
        var Vn = {};
        Object.defineProperty(Vn, "passive", {
            get: function() {
                ko = !0
            }
        }),
        window.addEventListener("test", Vn, Vn),
        window.removeEventListener("test", Vn, Vn)
    } catch {
        ko = !1
    }
function Nm(e, t, n, r, l, i, o, a, s) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (p) {
        this.onError(p)
    }
}
var rr = !1
  , jl = null
  , Pl = !1
  , So = null
  , Em = {
    onError: function(e) {
        rr = !0,
        jl = e
    }
};
function Cm(e, t, n, r, l, i, o, a, s) {
    rr = !1,
    jl = null,
    Nm.apply(Em, arguments)
}
function jm(e, t, n, r, l, i, o, a, s) {
    if (Cm.apply(this, arguments),
    rr) {
        if (rr) {
            var u = jl;
            rr = !1,
            jl = null
        } else
            throw Error(N(198));
        Pl || (Pl = !0,
        So = u)
    }
}
function nn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function sf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Vs(e) {
    if (nn(e) !== e)
        throw Error(N(188))
}
function Pm(e) {
    var t = e.alternate;
    if (!t) {
        if (t = nn(e),
        t === null)
            throw Error(N(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null)
            break;
        var i = l.alternate;
        if (i === null) {
            if (r = l.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === i.child) {
            for (i = l.child; i; ) {
                if (i === n)
                    return Vs(l),
                    e;
                if (i === r)
                    return Vs(l),
                    t;
                i = i.sibling
            }
            throw Error(N(188))
        }
        if (n.return !== r.return)
            n = l,
            r = i;
        else {
            for (var o = !1, a = l.child; a; ) {
                if (a === n) {
                    o = !0,
                    n = l,
                    r = i;
                    break
                }
                if (a === r) {
                    o = !0,
                    r = l,
                    n = i;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        o = !0,
                        n = i,
                        r = l;
                        break
                    }
                    if (a === r) {
                        o = !0,
                        r = i,
                        n = l;
                        break
                    }
                    a = a.sibling
                }
                if (!o)
                    throw Error(N(189))
            }
        }
        if (n.alternate !== r)
            throw Error(N(190))
    }
    if (n.tag !== 3)
        throw Error(N(188));
    return n.stateNode.current === n ? e : t
}
function uf(e) {
    return e = Pm(e),
    e !== null ? cf(e) : null
}
function cf(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = cf(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var ff = Ce.unstable_scheduleCallback
  , Hs = Ce.unstable_cancelCallback
  , _m = Ce.unstable_shouldYield
  , bm = Ce.unstable_requestPaint
  , K = Ce.unstable_now
  , Om = Ce.unstable_getCurrentPriorityLevel
  , za = Ce.unstable_ImmediatePriority
  , df = Ce.unstable_UserBlockingPriority
  , _l = Ce.unstable_NormalPriority
  , Im = Ce.unstable_LowPriority
  , pf = Ce.unstable_IdlePriority
  , ni = null
  , Xe = null;
function Tm(e) {
    if (Xe && typeof Xe.onCommitFiberRoot == "function")
        try {
            Xe.onCommitFiberRoot(ni, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Ue = Math.clz32 ? Math.clz32 : Am
  , zm = Math.log
  , Lm = Math.LN2;
function Am(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (zm(e) / Lm | 0) | 0
}
var Xr = 64
  , Kr = 4194304;
function qn(e) {
    switch (e & -e) {
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
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function bl(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , l = e.suspendedLanes
      , i = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var a = o & ~l;
        a !== 0 ? r = qn(a) : (i &= o,
        i !== 0 && (r = qn(i)))
    } else
        o = n & ~l,
        o !== 0 ? r = qn(o) : i !== 0 && (r = qn(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r,
    i = t & -t,
    l >= i || l === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Ue(t),
            l = 1 << n,
            r |= e[n],
            t &= ~l;
    return r
}
function Rm(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
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
        return t + 5e3;
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
        return -1
    }
}
function Mm(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var o = 31 - Ue(i)
          , a = 1 << o
          , s = l[o];
        s === -1 ? (!(a & n) || a & r) && (l[o] = Rm(a, t)) : s <= t && (e.expiredLanes |= a),
        i &= ~a
    }
}
function No(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function mf() {
    var e = Xr;
    return Xr <<= 1,
    !(Xr & 4194240) && (Xr = 64),
    e
}
function Ti(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Rr(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Ue(t),
    e[t] = n
}
function Fm(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - Ue(n)
          , i = 1 << l;
        t[l] = 0,
        r[l] = -1,
        e[l] = -1,
        n &= ~i
    }
}
function La(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Ue(n)
          , l = 1 << r;
        l & t | e[r] & t && (e[r] |= t),
        n &= ~l
    }
}
var F = 0;
function hf(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var gf, Aa, vf, yf, xf, Eo = !1, Zr = [], wt = null, kt = null, St = null, gr = new Map, vr = new Map, ht = [], Dm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Qs(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        wt = null;
        break;
    case "dragenter":
    case "dragleave":
        kt = null;
        break;
    case "mouseover":
    case "mouseout":
        St = null;
        break;
    case "pointerover":
    case "pointerout":
        gr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        vr.delete(t.pointerId)
    }
}
function Hn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l]
    },
    t !== null && (t = Fr(t),
    t !== null && Aa(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    l !== null && t.indexOf(l) === -1 && t.push(l),
    e)
}
function Um(e, t, n, r, l) {
    switch (t) {
    case "focusin":
        return wt = Hn(wt, e, t, n, r, l),
        !0;
    case "dragenter":
        return kt = Hn(kt, e, t, n, r, l),
        !0;
    case "mouseover":
        return St = Hn(St, e, t, n, r, l),
        !0;
    case "pointerover":
        var i = l.pointerId;
        return gr.set(i, Hn(gr.get(i) || null, e, t, n, r, l)),
        !0;
    case "gotpointercapture":
        return i = l.pointerId,
        vr.set(i, Hn(vr.get(i) || null, e, t, n, r, l)),
        !0
    }
    return !1
}
function wf(e) {
    var t = Wt(e.target);
    if (t !== null) {
        var n = nn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = sf(n),
                t !== null) {
                    e.blockedOn = t,
                    xf(e.priority, function() {
                        vf(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function dl(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Co(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            xo = r,
            n.target.dispatchEvent(r),
            xo = null
        } else
            return t = Fr(n),
            t !== null && Aa(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Ys(e, t, n) {
    dl(e) && n.delete(t)
}
function $m() {
    Eo = !1,
    wt !== null && dl(wt) && (wt = null),
    kt !== null && dl(kt) && (kt = null),
    St !== null && dl(St) && (St = null),
    gr.forEach(Ys),
    vr.forEach(Ys)
}
function Qn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Eo || (Eo = !0,
    Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, $m)))
}
function yr(e) {
    function t(l) {
        return Qn(l, e)
    }
    if (0 < Zr.length) {
        Qn(Zr[0], e);
        for (var n = 1; n < Zr.length; n++) {
            var r = Zr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (wt !== null && Qn(wt, e),
    kt !== null && Qn(kt, e),
    St !== null && Qn(St, e),
    gr.forEach(t),
    vr.forEach(t),
    n = 0; n < ht.length; n++)
        r = ht[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < ht.length && (n = ht[0],
    n.blockedOn === null); )
        wf(n),
        n.blockedOn === null && ht.shift()
}
var Nn = ut.ReactCurrentBatchConfig
  , Ol = !0;
function Wm(e, t, n, r) {
    var l = F
      , i = Nn.transition;
    Nn.transition = null;
    try {
        F = 1,
        Ra(e, t, n, r)
    } finally {
        F = l,
        Nn.transition = i
    }
}
function Bm(e, t, n, r) {
    var l = F
      , i = Nn.transition;
    Nn.transition = null;
    try {
        F = 4,
        Ra(e, t, n, r)
    } finally {
        F = l,
        Nn.transition = i
    }
}
function Ra(e, t, n, r) {
    if (Ol) {
        var l = Co(e, t, n, r);
        if (l === null)
            Wi(e, t, r, Il, n),
            Qs(e, r);
        else if (Um(l, e, t, n, r))
            r.stopPropagation();
        else if (Qs(e, r),
        t & 4 && -1 < Dm.indexOf(e)) {
            for (; l !== null; ) {
                var i = Fr(l);
                if (i !== null && gf(i),
                i = Co(e, t, n, r),
                i === null && Wi(e, t, r, Il, n),
                i === l)
                    break;
                l = i
            }
            l !== null && r.stopPropagation()
        } else
            Wi(e, t, r, null, n)
    }
}
var Il = null;
function Co(e, t, n, r) {
    if (Il = null,
    e = Ta(r),
    e = Wt(e),
    e !== null)
        if (t = nn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = sf(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Il = e,
    null
}
function kf(e) {
    switch (e) {
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
        switch (Om()) {
        case za:
            return 1;
        case df:
            return 4;
        case _l:
        case Im:
            return 16;
        case pf:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var vt = null
  , Ma = null
  , pl = null;
function Sf() {
    if (pl)
        return pl;
    var e, t = Ma, n = t.length, r, l = "value"in vt ? vt.value : vt.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++)
        ;
    return pl = l.slice(e, 1 < r ? 1 - r : void 0)
}
function ml(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Jr() {
    return !0
}
function Gs() {
    return !1
}
function Pe(e) {
    function t(n, r, l, i, o) {
        this._reactName = n,
        this._targetInst = l,
        this.type = r,
        this.nativeEvent = i,
        this.target = o,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Jr : Gs,
        this.isPropagationStopped = Gs,
        this
    }
    return Q(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Jr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Jr)
        },
        persist: function() {},
        isPersistent: Jr
    }),
    t
}
var Rn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Fa = Pe(Rn), Mr = Q({}, Rn, {
    view: 0,
    detail: 0
}), Vm = Pe(Mr), zi, Li, Yn, ri = Q({}, Mr, {
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
    getModifierState: Da,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Yn && (Yn && e.type === "mousemove" ? (zi = e.screenX - Yn.screenX,
        Li = e.screenY - Yn.screenY) : Li = zi = 0,
        Yn = e),
        zi)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Li
    }
}), Xs = Pe(ri), Hm = Q({}, ri, {
    dataTransfer: 0
}), Qm = Pe(Hm), Ym = Q({}, Mr, {
    relatedTarget: 0
}), Ai = Pe(Ym), Gm = Q({}, Rn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Xm = Pe(Gm), Km = Q({}, Rn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Zm = Pe(Km), Jm = Q({}, Rn, {
    data: 0
}), Ks = Pe(Jm), qm = {
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
    MozPrintableKey: "Unidentified"
}, eh = {
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
    224: "Meta"
}, th = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function nh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = th[e]) ? !!t[e] : !1
}
function Da() {
    return nh
}
var rh = Q({}, Mr, {
    key: function(e) {
        if (e.key) {
            var t = qm[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = ml(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? eh[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Da,
    charCode: function(e) {
        return e.type === "keypress" ? ml(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? ml(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , lh = Pe(rh)
  , ih = Q({}, ri, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Zs = Pe(ih)
  , oh = Q({}, Mr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Da
})
  , ah = Pe(oh)
  , sh = Q({}, Rn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , uh = Pe(sh)
  , ch = Q({}, ri, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , fh = Pe(ch)
  , dh = [9, 13, 27, 32]
  , Ua = rt && "CompositionEvent"in window
  , lr = null;
rt && "documentMode"in document && (lr = document.documentMode);
var ph = rt && "TextEvent"in window && !lr
  , Nf = rt && (!Ua || lr && 8 < lr && 11 >= lr)
  , Js = " "
  , qs = !1;
function Ef(e, t) {
    switch (e) {
    case "keyup":
        return dh.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Cf(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var sn = !1;
function mh(e, t) {
    switch (e) {
    case "compositionend":
        return Cf(t);
    case "keypress":
        return t.which !== 32 ? null : (qs = !0,
        Js);
    case "textInput":
        return e = t.data,
        e === Js && qs ? null : e;
    default:
        return null
    }
}
function hh(e, t) {
    if (sn)
        return e === "compositionend" || !Ua && Ef(e, t) ? (e = Sf(),
        pl = Ma = vt = null,
        sn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Nf && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var gh = {
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
    week: !0
};
function eu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!gh[e.type] : t === "textarea"
}
function jf(e, t, n, r) {
    nf(r),
    t = Tl(t, "onChange"),
    0 < t.length && (n = new Fa("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var ir = null
  , xr = null;
function vh(e) {
    Mf(e, 0)
}
function li(e) {
    var t = fn(e);
    if (Xc(t))
        return e
}
function yh(e, t) {
    if (e === "change")
        return t
}
var Pf = !1;
if (rt) {
    var Ri;
    if (rt) {
        var Mi = "oninput"in document;
        if (!Mi) {
            var tu = document.createElement("div");
            tu.setAttribute("oninput", "return;"),
            Mi = typeof tu.oninput == "function"
        }
        Ri = Mi
    } else
        Ri = !1;
    Pf = Ri && (!document.documentMode || 9 < document.documentMode)
}
function nu() {
    ir && (ir.detachEvent("onpropertychange", _f),
    xr = ir = null)
}
function _f(e) {
    if (e.propertyName === "value" && li(xr)) {
        var t = [];
        jf(t, xr, e, Ta(e)),
        af(vh, t)
    }
}
function xh(e, t, n) {
    e === "focusin" ? (nu(),
    ir = t,
    xr = n,
    ir.attachEvent("onpropertychange", _f)) : e === "focusout" && nu()
}
function wh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return li(xr)
}
function kh(e, t) {
    if (e === "click")
        return li(t)
}
function Sh(e, t) {
    if (e === "input" || e === "change")
        return li(t)
}
function Nh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var We = typeof Object.is == "function" ? Object.is : Nh;
function wr(e, t) {
    if (We(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!oo.call(t, l) || !We(e[l], t[l]))
            return !1
    }
    return !0
}
function ru(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function lu(e, t) {
    var n = ru(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = ru(n)
    }
}
function bf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? bf(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Of() {
    for (var e = window, t = Cl(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Cl(e.document)
    }
    return t
}
function $a(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Eh(e) {
    var t = Of()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && bf(n.ownerDocument.documentElement, n)) {
        if (r !== null && $a(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length
                  , i = Math.min(r.start, l);
                r = r.end === void 0 ? i : Math.min(r.end, l),
                !e.extend && i > r && (l = r,
                r = i,
                i = l),
                l = lu(n, i);
                var o = lu(n, r);
                l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(l.node, l.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Ch = rt && "documentMode"in document && 11 >= document.documentMode
  , un = null
  , jo = null
  , or = null
  , Po = !1;
function iu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Po || un == null || un !== Cl(r) || (r = un,
    "selectionStart"in r && $a(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    or && wr(or, r) || (or = r,
    r = Tl(jo, "onSelect"),
    0 < r.length && (t = new Fa("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = un)))
}
function qr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var cn = {
    animationend: qr("Animation", "AnimationEnd"),
    animationiteration: qr("Animation", "AnimationIteration"),
    animationstart: qr("Animation", "AnimationStart"),
    transitionend: qr("Transition", "TransitionEnd")
}
  , Fi = {}
  , If = {};
rt && (If = document.createElement("div").style,
"AnimationEvent"in window || (delete cn.animationend.animation,
delete cn.animationiteration.animation,
delete cn.animationstart.animation),
"TransitionEvent"in window || delete cn.transitionend.transition);
function ii(e) {
    if (Fi[e])
        return Fi[e];
    if (!cn[e])
        return e;
    var t = cn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in If)
            return Fi[e] = t[n];
    return e
}
var Tf = ii("animationend")
  , zf = ii("animationiteration")
  , Lf = ii("animationstart")
  , Af = ii("transitionend")
  , Rf = new Map
  , ou = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Lt(e, t) {
    Rf.set(e, t),
    tn(t, [e])
}
for (var Di = 0; Di < ou.length; Di++) {
    var Ui = ou[Di]
      , jh = Ui.toLowerCase()
      , Ph = Ui[0].toUpperCase() + Ui.slice(1);
    Lt(jh, "on" + Ph)
}
Lt(Tf, "onAnimationEnd");
Lt(zf, "onAnimationIteration");
Lt(Lf, "onAnimationStart");
Lt("dblclick", "onDoubleClick");
Lt("focusin", "onFocus");
Lt("focusout", "onBlur");
Lt(Af, "onTransitionEnd");
Pn("onMouseEnter", ["mouseout", "mouseover"]);
Pn("onMouseLeave", ["mouseout", "mouseover"]);
Pn("onPointerEnter", ["pointerout", "pointerover"]);
Pn("onPointerLeave", ["pointerout", "pointerover"]);
tn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
tn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
tn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
tn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
tn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , _h = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
function au(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    jm(r, t, void 0, e),
    e.currentTarget = null
}
function Mf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o]
                      , s = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    s !== i && l.isPropagationStopped())
                        break e;
                    au(l, a, u),
                    i = s
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (a = r[o],
                    s = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    s !== i && l.isPropagationStopped())
                        break e;
                    au(l, a, u),
                    i = s
                }
        }
    }
    if (Pl)
        throw e = So,
        Pl = !1,
        So = null,
        e
}
function U(e, t) {
    var n = t[To];
    n === void 0 && (n = t[To] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Ff(t, e, 2, !1),
    n.add(r))
}
function $i(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Ff(n, e, r, t)
}
var el = "_reactListening" + Math.random().toString(36).slice(2);
function kr(e) {
    if (!e[el]) {
        e[el] = !0,
        Vc.forEach(function(n) {
            n !== "selectionchange" && (_h.has(n) || $i(n, !1, e),
            $i(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[el] || (t[el] = !0,
        $i("selectionchange", !1, t))
    }
}
function Ff(e, t, n, r) {
    switch (kf(t)) {
    case 1:
        var l = Wm;
        break;
    case 4:
        l = Bm;
        break;
    default:
        l = Ra
    }
    n = l.bind(null, t, n, e),
    l = void 0,
    !ko || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
    r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}
function Wi(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var a = r.stateNode.containerInfo;
                if (a === l || a.nodeType === 8 && a.parentNode === l)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var s = o.tag;
                        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo,
                        s === l || s.nodeType === 8 && s.parentNode === l))
                            return;
                        o = o.return
                    }
                for (; a !== null; ) {
                    if (o = Wt(a),
                    o === null)
                        return;
                    if (s = o.tag,
                    s === 5 || s === 6) {
                        r = i = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    af(function() {
        var u = i
          , p = Ta(n)
          , d = [];
        e: {
            var h = Rf.get(e);
            if (h !== void 0) {
                var v = Fa
                  , x = e;
                switch (e) {
                case "keypress":
                    if (ml(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    v = lh;
                    break;
                case "focusin":
                    x = "focus",
                    v = Ai;
                    break;
                case "focusout":
                    x = "blur",
                    v = Ai;
                    break;
                case "beforeblur":
                case "afterblur":
                    v = Ai;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    v = Xs;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    v = Qm;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    v = ah;
                    break;
                case Tf:
                case zf:
                case Lf:
                    v = Xm;
                    break;
                case Af:
                    v = uh;
                    break;
                case "scroll":
                    v = Vm;
                    break;
                case "wheel":
                    v = fh;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    v = Zm;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    v = Zs
                }
                var w = (t & 4) !== 0
                  , C = !w && e === "scroll"
                  , m = w ? h !== null ? h + "Capture" : null : h;
                w = [];
                for (var f = u, g; f !== null; ) {
                    g = f;
                    var y = g.stateNode;
                    if (g.tag === 5 && y !== null && (g = y,
                    m !== null && (y = hr(f, m),
                    y != null && w.push(Sr(f, y, g)))),
                    C)
                        break;
                    f = f.return
                }
                0 < w.length && (h = new v(h,x,null,n,p),
                d.push({
                    event: h,
                    listeners: w
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover",
                v = e === "mouseout" || e === "pointerout",
                h && n !== xo && (x = n.relatedTarget || n.fromElement) && (Wt(x) || x[lt]))
                    break e;
                if ((v || h) && (h = p.window === p ? p : (h = p.ownerDocument) ? h.defaultView || h.parentWindow : window,
                v ? (x = n.relatedTarget || n.toElement,
                v = u,
                x = x ? Wt(x) : null,
                x !== null && (C = nn(x),
                x !== C || x.tag !== 5 && x.tag !== 6) && (x = null)) : (v = null,
                x = u),
                v !== x)) {
                    if (w = Xs,
                    y = "onMouseLeave",
                    m = "onMouseEnter",
                    f = "mouse",
                    (e === "pointerout" || e === "pointerover") && (w = Zs,
                    y = "onPointerLeave",
                    m = "onPointerEnter",
                    f = "pointer"),
                    C = v == null ? h : fn(v),
                    g = x == null ? h : fn(x),
                    h = new w(y,f + "leave",v,n,p),
                    h.target = C,
                    h.relatedTarget = g,
                    y = null,
                    Wt(p) === u && (w = new w(m,f + "enter",x,n,p),
                    w.target = g,
                    w.relatedTarget = C,
                    y = w),
                    C = y,
                    v && x)
                        t: {
                            for (w = v,
                            m = x,
                            f = 0,
                            g = w; g; g = ln(g))
                                f++;
                            for (g = 0,
                            y = m; y; y = ln(y))
                                g++;
                            for (; 0 < f - g; )
                                w = ln(w),
                                f--;
                            for (; 0 < g - f; )
                                m = ln(m),
                                g--;
                            for (; f--; ) {
                                if (w === m || m !== null && w === m.alternate)
                                    break t;
                                w = ln(w),
                                m = ln(m)
                            }
                            w = null
                        }
                    else
                        w = null;
                    v !== null && su(d, h, v, w, !1),
                    x !== null && C !== null && su(d, C, x, w, !0)
                }
            }
            e: {
                if (h = u ? fn(u) : window,
                v = h.nodeName && h.nodeName.toLowerCase(),
                v === "select" || v === "input" && h.type === "file")
                    var E = yh;
                else if (eu(h))
                    if (Pf)
                        E = Sh;
                    else {
                        E = wh;
                        var b = xh
                    }
                else
                    (v = h.nodeName) && v.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (E = kh);
                if (E && (E = E(e, u))) {
                    jf(d, E, n, p);
                    break e
                }
                b && b(e, h, u),
                e === "focusout" && (b = h._wrapperState) && b.controlled && h.type === "number" && mo(h, "number", h.value)
            }
            switch (b = u ? fn(u) : window,
            e) {
            case "focusin":
                (eu(b) || b.contentEditable === "true") && (un = b,
                jo = u,
                or = null);
                break;
            case "focusout":
                or = jo = un = null;
                break;
            case "mousedown":
                Po = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Po = !1,
                iu(d, n, p);
                break;
            case "selectionchange":
                if (Ch)
                    break;
            case "keydown":
            case "keyup":
                iu(d, n, p)
            }
            var _;
            if (Ua)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var I = "onCompositionStart";
                        break e;
                    case "compositionend":
                        I = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        I = "onCompositionUpdate";
                        break e
                    }
                    I = void 0
                }
            else
                sn ? Ef(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
            I && (Nf && n.locale !== "ko" && (sn || I !== "onCompositionStart" ? I === "onCompositionEnd" && sn && (_ = Sf()) : (vt = p,
            Ma = "value"in vt ? vt.value : vt.textContent,
            sn = !0)),
            b = Tl(u, I),
            0 < b.length && (I = new Ks(I,e,null,n,p),
            d.push({
                event: I,
                listeners: b
            }),
            _ ? I.data = _ : (_ = Cf(n),
            _ !== null && (I.data = _)))),
            (_ = ph ? mh(e, n) : hh(e, n)) && (u = Tl(u, "onBeforeInput"),
            0 < u.length && (p = new Ks("onBeforeInput","beforeinput",null,n,p),
            d.push({
                event: p,
                listeners: u
            }),
            p.data = _))
        }
        Mf(d, t)
    })
}
function Sr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Tl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e
          , i = l.stateNode;
        l.tag === 5 && i !== null && (l = i,
        i = hr(e, n),
        i != null && r.unshift(Sr(e, i, l)),
        i = hr(e, t),
        i != null && r.push(Sr(e, i, l))),
        e = e.return
    }
    return r
}
function ln(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function su(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
        var a = n
          , s = a.alternate
          , u = a.stateNode;
        if (s !== null && s === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        l ? (s = hr(n, i),
        s != null && o.unshift(Sr(n, s, a))) : l || (s = hr(n, i),
        s != null && o.push(Sr(n, s, a)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var bh = /\r\n?/g
  , Oh = /\u0000|\uFFFD/g;
function uu(e) {
    return (typeof e == "string" ? e : "" + e).replace(bh, `
`).replace(Oh, "")
}
function tl(e, t, n) {
    if (t = uu(t),
    uu(e) !== t && n)
        throw Error(N(425))
}
function zl() {}
var _o = null
  , bo = null;
function Oo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Io = typeof setTimeout == "function" ? setTimeout : void 0
  , Ih = typeof clearTimeout == "function" ? clearTimeout : void 0
  , cu = typeof Promise == "function" ? Promise : void 0
  , Th = typeof queueMicrotask == "function" ? queueMicrotask : typeof cu < "u" ? function(e) {
    return cu.resolve(null).then(e).catch(zh)
}
: Io;
function zh(e) {
    setTimeout(function() {
        throw e
    })
}
function Bi(e, t) {
    var n = t
      , r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n),
        l && l.nodeType === 8)
            if (n = l.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(l),
                    yr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    yr(t)
}
function Nt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function fu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Mn = Math.random().toString(36).slice(2)
  , Qe = "__reactFiber$" + Mn
  , Nr = "__reactProps$" + Mn
  , lt = "__reactContainer$" + Mn
  , To = "__reactEvents$" + Mn
  , Lh = "__reactListeners$" + Mn
  , Ah = "__reactHandles$" + Mn;
function Wt(e) {
    var t = e[Qe];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[lt] || n[Qe]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = fu(e); e !== null; ) {
                    if (n = e[Qe])
                        return n;
                    e = fu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Fr(e) {
    return e = e[Qe] || e[lt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function fn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(N(33))
}
function oi(e) {
    return e[Nr] || null
}
var zo = []
  , dn = -1;
function At(e) {
    return {
        current: e
    }
}
function $(e) {
    0 > dn || (e.current = zo[dn],
    zo[dn] = null,
    dn--)
}
function D(e, t) {
    dn++,
    zo[dn] = e.current,
    e.current = t
}
var Ot = {}
  , ce = At(Ot)
  , xe = At(!1)
  , Gt = Ot;
function _n(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Ot;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n)
        l[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = l),
    l
}
function we(e) {
    return e = e.childContextTypes,
    e != null
}
function Ll() {
    $(xe),
    $(ce)
}
function du(e, t, n) {
    if (ce.current !== Ot)
        throw Error(N(168));
    D(ce, t),
    D(xe, n)
}
function Df(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t))
            throw Error(N(108, xm(e) || "Unknown", l));
    return Q({}, n, r)
}
function Al(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ot,
    Gt = ce.current,
    D(ce, e),
    D(xe, xe.current),
    !0
}
function pu(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(N(169));
    n ? (e = Df(e, t, Gt),
    r.__reactInternalMemoizedMergedChildContext = e,
    $(xe),
    $(ce),
    D(ce, e)) : $(xe),
    D(xe, n)
}
var qe = null
  , ai = !1
  , Vi = !1;
function Uf(e) {
    qe === null ? qe = [e] : qe.push(e)
}
function Rh(e) {
    ai = !0,
    Uf(e)
}
function Rt() {
    if (!Vi && qe !== null) {
        Vi = !0;
        var e = 0
          , t = F;
        try {
            var n = qe;
            for (F = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            qe = null,
            ai = !1
        } catch (l) {
            throw qe !== null && (qe = qe.slice(e + 1)),
            ff(za, Rt),
            l
        } finally {
            F = t,
            Vi = !1
        }
    }
    return null
}
var pn = []
  , mn = 0
  , Rl = null
  , Ml = 0
  , be = []
  , Oe = 0
  , Xt = null
  , et = 1
  , tt = "";
function Ut(e, t) {
    pn[mn++] = Ml,
    pn[mn++] = Rl,
    Rl = e,
    Ml = t
}
function $f(e, t, n) {
    be[Oe++] = et,
    be[Oe++] = tt,
    be[Oe++] = Xt,
    Xt = e;
    var r = et;
    e = tt;
    var l = 32 - Ue(r) - 1;
    r &= ~(1 << l),
    n += 1;
    var i = 32 - Ue(t) + l;
    if (30 < i) {
        var o = l - l % 5;
        i = (r & (1 << o) - 1).toString(32),
        r >>= o,
        l -= o,
        et = 1 << 32 - Ue(t) + l | n << l | r,
        tt = i + e
    } else
        et = 1 << i | n << l | r,
        tt = e
}
function Wa(e) {
    e.return !== null && (Ut(e, 1),
    $f(e, 1, 0))
}
function Ba(e) {
    for (; e === Rl; )
        Rl = pn[--mn],
        pn[mn] = null,
        Ml = pn[--mn],
        pn[mn] = null;
    for (; e === Xt; )
        Xt = be[--Oe],
        be[Oe] = null,
        tt = be[--Oe],
        be[Oe] = null,
        et = be[--Oe],
        be[Oe] = null
}
var Ee = null
  , Ne = null
  , B = !1
  , De = null;
function Wf(e, t) {
    var n = Ie(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function mu(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ee = e,
        Ne = Nt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ee = e,
        Ne = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Xt !== null ? {
            id: et,
            overflow: tt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Ie(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ee = e,
        Ne = null,
        !0) : !1;
    default:
        return !1
    }
}
function Lo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ao(e) {
    if (B) {
        var t = Ne;
        if (t) {
            var n = t;
            if (!mu(e, t)) {
                if (Lo(e))
                    throw Error(N(418));
                t = Nt(n.nextSibling);
                var r = Ee;
                t && mu(e, t) ? Wf(r, n) : (e.flags = e.flags & -4097 | 2,
                B = !1,
                Ee = e)
            }
        } else {
            if (Lo(e))
                throw Error(N(418));
            e.flags = e.flags & -4097 | 2,
            B = !1,
            Ee = e
        }
    }
}
function hu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ee = e
}
function nl(e) {
    if (e !== Ee)
        return !1;
    if (!B)
        return hu(e),
        B = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Oo(e.type, e.memoizedProps)),
    t && (t = Ne)) {
        if (Lo(e))
            throw Bf(),
            Error(N(418));
        for (; t; )
            Wf(e, t),
            t = Nt(t.nextSibling)
    }
    if (hu(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(N(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ne = Nt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ne = null
        }
    } else
        Ne = Ee ? Nt(e.stateNode.nextSibling) : null;
    return !0
}
function Bf() {
    for (var e = Ne; e; )
        e = Nt(e.nextSibling)
}
function bn() {
    Ne = Ee = null,
    B = !1
}
function Va(e) {
    De === null ? De = [e] : De.push(e)
}
var Mh = ut.ReactCurrentBatchConfig;
function Gn(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(N(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(N(147, e));
            var l = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var a = l.refs;
                o === null ? delete a[i] : a[i] = o
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(N(284));
        if (!n._owner)
            throw Error(N(290, e))
    }
    return e
}
function rl(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function gu(e) {
    var t = e._init;
    return t(e._payload)
}
function Vf(e) {
    function t(m, f) {
        if (e) {
            var g = m.deletions;
            g === null ? (m.deletions = [f],
            m.flags |= 16) : g.push(f)
        }
    }
    function n(m, f) {
        if (!e)
            return null;
        for (; f !== null; )
            t(m, f),
            f = f.sibling;
        return null
    }
    function r(m, f) {
        for (m = new Map; f !== null; )
            f.key !== null ? m.set(f.key, f) : m.set(f.index, f),
            f = f.sibling;
        return m
    }
    function l(m, f) {
        return m = Pt(m, f),
        m.index = 0,
        m.sibling = null,
        m
    }
    function i(m, f, g) {
        return m.index = g,
        e ? (g = m.alternate,
        g !== null ? (g = g.index,
        g < f ? (m.flags |= 2,
        f) : g) : (m.flags |= 2,
        f)) : (m.flags |= 1048576,
        f)
    }
    function o(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function a(m, f, g, y) {
        return f === null || f.tag !== 6 ? (f = Zi(g, m.mode, y),
        f.return = m,
        f) : (f = l(f, g),
        f.return = m,
        f)
    }
    function s(m, f, g, y) {
        var E = g.type;
        return E === an ? p(m, f, g.props.children, y, g.key) : f !== null && (f.elementType === E || typeof E == "object" && E !== null && E.$$typeof === pt && gu(E) === f.type) ? (y = l(f, g.props),
        y.ref = Gn(m, f, g),
        y.return = m,
        y) : (y = kl(g.type, g.key, g.props, null, m.mode, y),
        y.ref = Gn(m, f, g),
        y.return = m,
        y)
    }
    function u(m, f, g, y) {
        return f === null || f.tag !== 4 || f.stateNode.containerInfo !== g.containerInfo || f.stateNode.implementation !== g.implementation ? (f = Ji(g, m.mode, y),
        f.return = m,
        f) : (f = l(f, g.children || []),
        f.return = m,
        f)
    }
    function p(m, f, g, y, E) {
        return f === null || f.tag !== 7 ? (f = Yt(g, m.mode, y, E),
        f.return = m,
        f) : (f = l(f, g),
        f.return = m,
        f)
    }
    function d(m, f, g) {
        if (typeof f == "string" && f !== "" || typeof f == "number")
            return f = Zi("" + f, m.mode, g),
            f.return = m,
            f;
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
            case Qr:
                return g = kl(f.type, f.key, f.props, null, m.mode, g),
                g.ref = Gn(m, null, f),
                g.return = m,
                g;
            case on:
                return f = Ji(f, m.mode, g),
                f.return = m,
                f;
            case pt:
                var y = f._init;
                return d(m, y(f._payload), g)
            }
            if (Jn(f) || Bn(f))
                return f = Yt(f, m.mode, g, null),
                f.return = m,
                f;
            rl(m, f)
        }
        return null
    }
    function h(m, f, g, y) {
        var E = f !== null ? f.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return E !== null ? null : a(m, f, "" + g, y);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case Qr:
                return g.key === E ? s(m, f, g, y) : null;
            case on:
                return g.key === E ? u(m, f, g, y) : null;
            case pt:
                return E = g._init,
                h(m, f, E(g._payload), y)
            }
            if (Jn(g) || Bn(g))
                return E !== null ? null : p(m, f, g, y, null);
            rl(m, g)
        }
        return null
    }
    function v(m, f, g, y, E) {
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return m = m.get(g) || null,
            a(f, m, "" + y, E);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Qr:
                return m = m.get(y.key === null ? g : y.key) || null,
                s(f, m, y, E);
            case on:
                return m = m.get(y.key === null ? g : y.key) || null,
                u(f, m, y, E);
            case pt:
                var b = y._init;
                return v(m, f, g, b(y._payload), E)
            }
            if (Jn(y) || Bn(y))
                return m = m.get(g) || null,
                p(f, m, y, E, null);
            rl(f, y)
        }
        return null
    }
    function x(m, f, g, y) {
        for (var E = null, b = null, _ = f, I = f = 0, G = null; _ !== null && I < g.length; I++) {
            _.index > I ? (G = _,
            _ = null) : G = _.sibling;
            var R = h(m, _, g[I], y);
            if (R === null) {
                _ === null && (_ = G);
                break
            }
            e && _ && R.alternate === null && t(m, _),
            f = i(R, f, I),
            b === null ? E = R : b.sibling = R,
            b = R,
            _ = G
        }
        if (I === g.length)
            return n(m, _),
            B && Ut(m, I),
            E;
        if (_ === null) {
            for (; I < g.length; I++)
                _ = d(m, g[I], y),
                _ !== null && (f = i(_, f, I),
                b === null ? E = _ : b.sibling = _,
                b = _);
            return B && Ut(m, I),
            E
        }
        for (_ = r(m, _); I < g.length; I++)
            G = v(_, m, I, g[I], y),
            G !== null && (e && G.alternate !== null && _.delete(G.key === null ? I : G.key),
            f = i(G, f, I),
            b === null ? E = G : b.sibling = G,
            b = G);
        return e && _.forEach(function(Ae) {
            return t(m, Ae)
        }),
        B && Ut(m, I),
        E
    }
    function w(m, f, g, y) {
        var E = Bn(g);
        if (typeof E != "function")
            throw Error(N(150));
        if (g = E.call(g),
        g == null)
            throw Error(N(151));
        for (var b = E = null, _ = f, I = f = 0, G = null, R = g.next(); _ !== null && !R.done; I++,
        R = g.next()) {
            _.index > I ? (G = _,
            _ = null) : G = _.sibling;
            var Ae = h(m, _, R.value, y);
            if (Ae === null) {
                _ === null && (_ = G);
                break
            }
            e && _ && Ae.alternate === null && t(m, _),
            f = i(Ae, f, I),
            b === null ? E = Ae : b.sibling = Ae,
            b = Ae,
            _ = G
        }
        if (R.done)
            return n(m, _),
            B && Ut(m, I),
            E;
        if (_ === null) {
            for (; !R.done; I++,
            R = g.next())
                R = d(m, R.value, y),
                R !== null && (f = i(R, f, I),
                b === null ? E = R : b.sibling = R,
                b = R);
            return B && Ut(m, I),
            E
        }
        for (_ = r(m, _); !R.done; I++,
        R = g.next())
            R = v(_, m, I, R.value, y),
            R !== null && (e && R.alternate !== null && _.delete(R.key === null ? I : R.key),
            f = i(R, f, I),
            b === null ? E = R : b.sibling = R,
            b = R);
        return e && _.forEach(function($n) {
            return t(m, $n)
        }),
        B && Ut(m, I),
        E
    }
    function C(m, f, g, y) {
        if (typeof g == "object" && g !== null && g.type === an && g.key === null && (g = g.props.children),
        typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case Qr:
                e: {
                    for (var E = g.key, b = f; b !== null; ) {
                        if (b.key === E) {
                            if (E = g.type,
                            E === an) {
                                if (b.tag === 7) {
                                    n(m, b.sibling),
                                    f = l(b, g.props.children),
                                    f.return = m,
                                    m = f;
                                    break e
                                }
                            } else if (b.elementType === E || typeof E == "object" && E !== null && E.$$typeof === pt && gu(E) === b.type) {
                                n(m, b.sibling),
                                f = l(b, g.props),
                                f.ref = Gn(m, b, g),
                                f.return = m,
                                m = f;
                                break e
                            }
                            n(m, b);
                            break
                        } else
                            t(m, b);
                        b = b.sibling
                    }
                    g.type === an ? (f = Yt(g.props.children, m.mode, y, g.key),
                    f.return = m,
                    m = f) : (y = kl(g.type, g.key, g.props, null, m.mode, y),
                    y.ref = Gn(m, f, g),
                    y.return = m,
                    m = y)
                }
                return o(m);
            case on:
                e: {
                    for (b = g.key; f !== null; ) {
                        if (f.key === b)
                            if (f.tag === 4 && f.stateNode.containerInfo === g.containerInfo && f.stateNode.implementation === g.implementation) {
                                n(m, f.sibling),
                                f = l(f, g.children || []),
                                f.return = m,
                                m = f;
                                break e
                            } else {
                                n(m, f);
                                break
                            }
                        else
                            t(m, f);
                        f = f.sibling
                    }
                    f = Ji(g, m.mode, y),
                    f.return = m,
                    m = f
                }
                return o(m);
            case pt:
                return b = g._init,
                C(m, f, b(g._payload), y)
            }
            if (Jn(g))
                return x(m, f, g, y);
            if (Bn(g))
                return w(m, f, g, y);
            rl(m, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g,
        f !== null && f.tag === 6 ? (n(m, f.sibling),
        f = l(f, g),
        f.return = m,
        m = f) : (n(m, f),
        f = Zi(g, m.mode, y),
        f.return = m,
        m = f),
        o(m)) : n(m, f)
    }
    return C
}
var On = Vf(!0)
  , Hf = Vf(!1)
  , Fl = At(null)
  , Dl = null
  , hn = null
  , Ha = null;
function Qa() {
    Ha = hn = Dl = null
}
function Ya(e) {
    var t = Fl.current;
    $(Fl),
    e._currentValue = t
}
function Ro(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function En(e, t) {
    Dl = e,
    Ha = hn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (ye = !0),
    e.firstContext = null)
}
function ze(e) {
    var t = e._currentValue;
    if (Ha !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        hn === null) {
            if (Dl === null)
                throw Error(N(308));
            hn = e,
            Dl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            hn = hn.next = e;
    return t
}
var Bt = null;
function Ga(e) {
    Bt === null ? Bt = [e] : Bt.push(e)
}
function Qf(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n,
    Ga(t)) : (n.next = l.next,
    l.next = n),
    t.interleaved = n,
    it(e, r)
}
function it(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var mt = !1;
function Xa(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Yf(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function nt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Et(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    M & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        r.pending = t,
        it(e, n)
    }
    return l = r.interleaved,
    l === null ? (t.next = t,
    Ga(r)) : (t.next = l.next,
    l.next = t),
    r.interleaved = t,
    it(e, n)
}
function hl(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        La(e, n)
    }
}
function vu(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var l = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? l = i = o : i = i.next = o,
                n = n.next
            } while (n !== null);
            i === null ? l = i = t : i = i.next = t
        } else
            l = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Ul(e, t, n, r) {
    var l = e.updateQueue;
    mt = !1;
    var i = l.firstBaseUpdate
      , o = l.lastBaseUpdate
      , a = l.shared.pending;
    if (a !== null) {
        l.shared.pending = null;
        var s = a
          , u = s.next;
        s.next = null,
        o === null ? i = u : o.next = u,
        o = s;
        var p = e.alternate;
        p !== null && (p = p.updateQueue,
        a = p.lastBaseUpdate,
        a !== o && (a === null ? p.firstBaseUpdate = u : a.next = u,
        p.lastBaseUpdate = s))
    }
    if (i !== null) {
        var d = l.baseState;
        o = 0,
        p = u = s = null,
        a = i;
        do {
            var h = a.lane
              , v = a.eventTime;
            if ((r & h) === h) {
                p !== null && (p = p.next = {
                    eventTime: v,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var x = e
                      , w = a;
                    switch (h = t,
                    v = n,
                    w.tag) {
                    case 1:
                        if (x = w.payload,
                        typeof x == "function") {
                            d = x.call(v, d, h);
                            break e
                        }
                        d = x;
                        break e;
                    case 3:
                        x.flags = x.flags & -65537 | 128;
                    case 0:
                        if (x = w.payload,
                        h = typeof x == "function" ? x.call(v, d, h) : x,
                        h == null)
                            break e;
                        d = Q({}, d, h);
                        break e;
                    case 2:
                        mt = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                h = l.effects,
                h === null ? l.effects = [a] : h.push(a))
            } else
                v = {
                    eventTime: v,
                    lane: h,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                p === null ? (u = p = v,
                s = d) : p = p.next = v,
                o |= h;
            if (a = a.next,
            a === null) {
                if (a = l.shared.pending,
                a === null)
                    break;
                h = a,
                a = h.next,
                h.next = null,
                l.lastBaseUpdate = h,
                l.shared.pending = null
            }
        } while (!0);
        if (p === null && (s = d),
        l.baseState = s,
        l.firstBaseUpdate = u,
        l.lastBaseUpdate = p,
        t = l.shared.interleaved,
        t !== null) {
            l = t;
            do
                o |= l.lane,
                l = l.next;
            while (l !== t)
        } else
            i === null && (l.shared.lanes = 0);
        Zt |= o,
        e.lanes = o,
        e.memoizedState = d
    }
}
function yu(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , l = r.callback;
            if (l !== null) {
                if (r.callback = null,
                r = n,
                typeof l != "function")
                    throw Error(N(191, l));
                l.call(r)
            }
        }
}
var Dr = {}
  , Ke = At(Dr)
  , Er = At(Dr)
  , Cr = At(Dr);
function Vt(e) {
    if (e === Dr)
        throw Error(N(174));
    return e
}
function Ka(e, t) {
    switch (D(Cr, t),
    D(Er, e),
    D(Ke, Dr),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : go(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = go(t, e)
    }
    $(Ke),
    D(Ke, t)
}
function In() {
    $(Ke),
    $(Er),
    $(Cr)
}
function Gf(e) {
    Vt(Cr.current);
    var t = Vt(Ke.current)
      , n = go(t, e.type);
    t !== n && (D(Er, e),
    D(Ke, n))
}
function Za(e) {
    Er.current === e && ($(Ke),
    $(Er))
}
var V = At(0);
function $l(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Hi = [];
function Ja() {
    for (var e = 0; e < Hi.length; e++)
        Hi[e]._workInProgressVersionPrimary = null;
    Hi.length = 0
}
var gl = ut.ReactCurrentDispatcher
  , Qi = ut.ReactCurrentBatchConfig
  , Kt = 0
  , H = null
  , q = null
  , ne = null
  , Wl = !1
  , ar = !1
  , jr = 0
  , Fh = 0;
function ae() {
    throw Error(N(321))
}
function qa(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!We(e[n], t[n]))
            return !1;
    return !0
}
function es(e, t, n, r, l, i) {
    if (Kt = i,
    H = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    gl.current = e === null || e.memoizedState === null ? Wh : Bh,
    e = n(r, l),
    ar) {
        i = 0;
        do {
            if (ar = !1,
            jr = 0,
            25 <= i)
                throw Error(N(301));
            i += 1,
            ne = q = null,
            t.updateQueue = null,
            gl.current = Vh,
            e = n(r, l)
        } while (ar)
    }
    if (gl.current = Bl,
    t = q !== null && q.next !== null,
    Kt = 0,
    ne = q = H = null,
    Wl = !1,
    t)
        throw Error(N(300));
    return e
}
function ts() {
    var e = jr !== 0;
    return jr = 0,
    e
}
function Ve() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ne === null ? H.memoizedState = ne = e : ne = ne.next = e,
    ne
}
function Le() {
    if (q === null) {
        var e = H.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = q.next;
    var t = ne === null ? H.memoizedState : ne.next;
    if (t !== null)
        ne = t,
        q = e;
    else {
        if (e === null)
            throw Error(N(310));
        q = e,
        e = {
            memoizedState: q.memoizedState,
            baseState: q.baseState,
            baseQueue: q.baseQueue,
            queue: q.queue,
            next: null
        },
        ne === null ? H.memoizedState = ne = e : ne = ne.next = e
    }
    return ne
}
function Pr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Yi(e) {
    var t = Le()
      , n = t.queue;
    if (n === null)
        throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = q
      , l = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            l.next = i.next,
            i.next = o
        }
        r.baseQueue = l = i,
        n.pending = null
    }
    if (l !== null) {
        i = l.next,
        r = r.baseState;
        var a = o = null
          , s = null
          , u = i;
        do {
            var p = u.lane;
            if ((Kt & p) === p)
                s !== null && (s = s.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: p,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                s === null ? (a = s = d,
                o = r) : s = s.next = d,
                H.lanes |= p,
                Zt |= p
            }
            u = u.next
        } while (u !== null && u !== i);
        s === null ? o = r : s.next = a,
        We(r, t.memoizedState) || (ye = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = s,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        l = e;
        do
            i = l.lane,
            H.lanes |= i,
            Zt |= i,
            l = l.next;
        while (l !== e)
    } else
        l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Gi(e) {
    var t = Le()
      , n = t.queue;
    if (n === null)
        throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , l = n.pending
      , i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = l = l.next;
        do
            i = e(i, o.action),
            o = o.next;
        while (o !== l);
        We(i, t.memoizedState) || (ye = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Xf() {}
function Kf(e, t) {
    var n = H
      , r = Le()
      , l = t()
      , i = !We(r.memoizedState, l);
    if (i && (r.memoizedState = l,
    ye = !0),
    r = r.queue,
    ns(qf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || ne !== null && ne.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        _r(9, Jf.bind(null, n, r, l, t), void 0, null),
        re === null)
            throw Error(N(349));
        Kt & 30 || Zf(n, t, l)
    }
    return l
}
function Zf(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = H.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    H.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Jf(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    ed(t) && td(e)
}
function qf(e, t, n) {
    return n(function() {
        ed(t) && td(e)
    })
}
function ed(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !We(e, n)
    } catch {
        return !0
    }
}
function td(e) {
    var t = it(e, 1);
    t !== null && $e(t, e, 1, -1)
}
function xu(e) {
    var t = Ve();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Pr,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = $h.bind(null, H, e),
    [t.memoizedState, e]
}
function _r(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = H.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    H.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function nd() {
    return Le().memoizedState
}
function vl(e, t, n, r) {
    var l = Ve();
    H.flags |= e,
    l.memoizedState = _r(1 | t, n, void 0, r === void 0 ? null : r)
}
function si(e, t, n, r) {
    var l = Le();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (q !== null) {
        var o = q.memoizedState;
        if (i = o.destroy,
        r !== null && qa(r, o.deps)) {
            l.memoizedState = _r(t, n, i, r);
            return
        }
    }
    H.flags |= e,
    l.memoizedState = _r(1 | t, n, i, r)
}
function wu(e, t) {
    return vl(8390656, 8, e, t)
}
function ns(e, t) {
    return si(2048, 8, e, t)
}
function rd(e, t) {
    return si(4, 2, e, t)
}
function ld(e, t) {
    return si(4, 4, e, t)
}
function id(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function od(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    si(4, 4, id.bind(null, t, e), n)
}
function rs() {}
function ad(e, t) {
    var n = Le();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && qa(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function sd(e, t) {
    var n = Le();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && qa(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function ud(e, t, n) {
    return Kt & 21 ? (We(n, t) || (n = mf(),
    H.lanes |= n,
    Zt |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    ye = !0),
    e.memoizedState = n)
}
function Dh(e, t) {
    var n = F;
    F = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Qi.transition;
    Qi.transition = {};
    try {
        e(!1),
        t()
    } finally {
        F = n,
        Qi.transition = r
    }
}
function cd() {
    return Le().memoizedState
}
function Uh(e, t, n) {
    var r = jt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    fd(e))
        dd(t, n);
    else if (n = Qf(e, t, n, r),
    n !== null) {
        var l = me();
        $e(n, e, r, l),
        pd(n, t, r)
    }
}
function $h(e, t, n) {
    var r = jt(e)
      , l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (fd(e))
        dd(t, l);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var o = t.lastRenderedState
                  , a = i(o, n);
                if (l.hasEagerState = !0,
                l.eagerState = a,
                We(a, o)) {
                    var s = t.interleaved;
                    s === null ? (l.next = l,
                    Ga(t)) : (l.next = s.next,
                    s.next = l),
                    t.interleaved = l;
                    return
                }
            } catch {} finally {}
        n = Qf(e, t, l, r),
        n !== null && (l = me(),
        $e(n, e, r, l),
        pd(n, t, r))
    }
}
function fd(e) {
    var t = e.alternate;
    return e === H || t !== null && t === H
}
function dd(e, t) {
    ar = Wl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function pd(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        La(e, n)
    }
}
var Bl = {
    readContext: ze,
    useCallback: ae,
    useContext: ae,
    useEffect: ae,
    useImperativeHandle: ae,
    useInsertionEffect: ae,
    useLayoutEffect: ae,
    useMemo: ae,
    useReducer: ae,
    useRef: ae,
    useState: ae,
    useDebugValue: ae,
    useDeferredValue: ae,
    useTransition: ae,
    useMutableSource: ae,
    useSyncExternalStore: ae,
    useId: ae,
    unstable_isNewReconciler: !1
}
  , Wh = {
    readContext: ze,
    useCallback: function(e, t) {
        return Ve().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: ze,
    useEffect: wu,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        vl(4194308, 4, id.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return vl(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return vl(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Ve();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Ve();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Uh.bind(null, H, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Ve();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: xu,
    useDebugValue: rs,
    useDeferredValue: function(e) {
        return Ve().memoizedState = e
    },
    useTransition: function() {
        var e = xu(!1)
          , t = e[0];
        return e = Dh.bind(null, e[1]),
        Ve().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = H
          , l = Ve();
        if (B) {
            if (n === void 0)
                throw Error(N(407));
            n = n()
        } else {
            if (n = t(),
            re === null)
                throw Error(N(349));
            Kt & 30 || Zf(r, t, n)
        }
        l.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return l.queue = i,
        wu(qf.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        _r(9, Jf.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Ve()
          , t = re.identifierPrefix;
        if (B) {
            var n = tt
              , r = et;
            n = (r & ~(1 << 32 - Ue(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = jr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Fh++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Bh = {
    readContext: ze,
    useCallback: ad,
    useContext: ze,
    useEffect: ns,
    useImperativeHandle: od,
    useInsertionEffect: rd,
    useLayoutEffect: ld,
    useMemo: sd,
    useReducer: Yi,
    useRef: nd,
    useState: function() {
        return Yi(Pr)
    },
    useDebugValue: rs,
    useDeferredValue: function(e) {
        var t = Le();
        return ud(t, q.memoizedState, e)
    },
    useTransition: function() {
        var e = Yi(Pr)[0]
          , t = Le().memoizedState;
        return [e, t]
    },
    useMutableSource: Xf,
    useSyncExternalStore: Kf,
    useId: cd,
    unstable_isNewReconciler: !1
}
  , Vh = {
    readContext: ze,
    useCallback: ad,
    useContext: ze,
    useEffect: ns,
    useImperativeHandle: od,
    useInsertionEffect: rd,
    useLayoutEffect: ld,
    useMemo: sd,
    useReducer: Gi,
    useRef: nd,
    useState: function() {
        return Gi(Pr)
    },
    useDebugValue: rs,
    useDeferredValue: function(e) {
        var t = Le();
        return q === null ? t.memoizedState = e : ud(t, q.memoizedState, e)
    },
    useTransition: function() {
        var e = Gi(Pr)[0]
          , t = Le().memoizedState;
        return [e, t]
    },
    useMutableSource: Xf,
    useSyncExternalStore: Kf,
    useId: cd,
    unstable_isNewReconciler: !1
};
function Me(e, t) {
    if (e && e.defaultProps) {
        t = Q({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Mo(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Q({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ui = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? nn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = me()
          , l = jt(e)
          , i = nt(r, l);
        i.payload = t,
        n != null && (i.callback = n),
        t = Et(e, i, l),
        t !== null && ($e(t, e, l, r),
        hl(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = me()
          , l = jt(e)
          , i = nt(r, l);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = Et(e, i, l),
        t !== null && ($e(t, e, l, r),
        hl(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = me()
          , r = jt(e)
          , l = nt(n, r);
        l.tag = 2,
        t != null && (l.callback = t),
        t = Et(e, l, r),
        t !== null && ($e(t, e, r, n),
        hl(t, e, r))
    }
};
function ku(e, t, n, r, l, i, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !wr(n, r) || !wr(l, i) : !0
}
function md(e, t, n) {
    var r = !1
      , l = Ot
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = ze(i) : (l = we(t) ? Gt : ce.current,
    r = t.contextTypes,
    i = (r = r != null) ? _n(e, l) : Ot),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = ui,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = l,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Su(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ui.enqueueReplaceState(t, t.state, null)
}
function Fo(e, t, n, r) {
    var l = e.stateNode;
    l.props = n,
    l.state = e.memoizedState,
    l.refs = {},
    Xa(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = ze(i) : (i = we(t) ? Gt : ce.current,
    l.context = _n(e, i)),
    l.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Mo(e, t, i, n),
    l.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state,
    typeof l.componentWillMount == "function" && l.componentWillMount(),
    typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
    t !== l.state && ui.enqueueReplaceState(l, l.state, null),
    Ul(e, n, l, r),
    l.state = e.memoizedState),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}
function Tn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += ym(r),
            r = r.return;
        while (r);
        var l = n
    } catch (i) {
        l = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}
function Xi(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Do(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Hh = typeof WeakMap == "function" ? WeakMap : Map;
function hd(e, t, n) {
    n = nt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Hl || (Hl = !0,
        Xo = r),
        Do(e, t)
    }
    ,
    n
}
function gd(e, t, n) {
    n = nt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }
        ,
        n.callback = function() {
            Do(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Do(e, t),
        typeof r != "function" && (Ct === null ? Ct = new Set([this]) : Ct.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function Nu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Hh;
        var l = new Set;
        r.set(t, l)
    } else
        l = r.get(t),
        l === void 0 && (l = new Set,
        r.set(t, l));
    l.has(n) || (l.add(n),
    e = i0.bind(null, e, t, n),
    t.then(e, e))
}
function Eu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Cu(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = l,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = nt(-1, 1),
    t.tag = 2,
    Et(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Qh = ut.ReactCurrentOwner
  , ye = !1;
function de(e, t, n, r) {
    t.child = e === null ? Hf(t, null, n, r) : On(t, e.child, n, r)
}
function ju(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return En(t, l),
    r = es(e, t, n, r, i, l),
    n = ts(),
    e !== null && !ye ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    ot(e, t, l)) : (B && n && Wa(t),
    t.flags |= 1,
    de(e, t, r, l),
    t.child)
}
function Pu(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !fs(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        vd(e, t, i, r, l)) : (e = kl(n.type, null, r, t, t.mode, l),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & l)) {
        var o = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : wr,
        n(o, r) && e.ref === t.ref)
            return ot(e, t, l)
    }
    return t.flags |= 1,
    e = Pt(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function vd(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (wr(i, r) && e.ref === t.ref)
            if (ye = !1,
            t.pendingProps = r = i,
            (e.lanes & l) !== 0)
                e.flags & 131072 && (ye = !0);
            else
                return t.lanes = e.lanes,
                ot(e, t, l)
    }
    return Uo(e, t, n, r, l)
}
function yd(e, t, n) {
    var r = t.pendingProps
      , l = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            D(vn, Se),
            Se |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                D(vn, Se),
                Se |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            D(vn, Se),
            Se |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        D(vn, Se),
        Se |= r;
    return de(e, t, l, n),
    t.child
}
function xd(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Uo(e, t, n, r, l) {
    var i = we(n) ? Gt : ce.current;
    return i = _n(t, i),
    En(t, l),
    n = es(e, t, n, r, i, l),
    r = ts(),
    e !== null && !ye ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    ot(e, t, l)) : (B && r && Wa(t),
    t.flags |= 1,
    de(e, t, n, l),
    t.child)
}
function _u(e, t, n, r, l) {
    if (we(n)) {
        var i = !0;
        Al(t)
    } else
        i = !1;
    if (En(t, l),
    t.stateNode === null)
        yl(e, t),
        md(t, n, r),
        Fo(t, n, r, l),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , a = t.memoizedProps;
        o.props = a;
        var s = o.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = ze(u) : (u = we(n) ? Gt : ce.current,
        u = _n(t, u));
        var p = n.getDerivedStateFromProps
          , d = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || s !== u) && Su(t, o, r, u),
        mt = !1;
        var h = t.memoizedState;
        o.state = h,
        Ul(t, r, o, l),
        s = t.memoizedState,
        a !== r || h !== s || xe.current || mt ? (typeof p == "function" && (Mo(t, n, p, r),
        s = t.memoizedState),
        (a = mt || ku(t, n, a, r, h, s, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = s),
        o.props = r,
        o.state = s,
        o.context = u,
        r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        Yf(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : Me(t.type, a),
        o.props = u,
        d = t.pendingProps,
        h = o.context,
        s = n.contextType,
        typeof s == "object" && s !== null ? s = ze(s) : (s = we(n) ? Gt : ce.current,
        s = _n(t, s));
        var v = n.getDerivedStateFromProps;
        (p = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== d || h !== s) && Su(t, o, r, s),
        mt = !1,
        h = t.memoizedState,
        o.state = h,
        Ul(t, r, o, l);
        var x = t.memoizedState;
        a !== d || h !== x || xe.current || mt ? (typeof v == "function" && (Mo(t, n, v, r),
        x = t.memoizedState),
        (u = mt || ku(t, n, u, r, h, x, s) || !1) ? (p || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, x, s),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, x, s)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = x),
        o.props = r,
        o.state = x,
        o.context = s,
        r = u) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return $o(e, t, n, r, i, l)
}
function $o(e, t, n, r, l, i) {
    xd(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return l && pu(t, n, !1),
        ot(e, t, i);
    r = t.stateNode,
    Qh.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = On(t, e.child, null, i),
    t.child = On(t, null, a, i)) : de(e, t, a, i),
    t.memoizedState = r.state,
    l && pu(t, n, !0),
    t.child
}
function wd(e) {
    var t = e.stateNode;
    t.pendingContext ? du(e, t.pendingContext, t.pendingContext !== t.context) : t.context && du(e, t.context, !1),
    Ka(e, t.containerInfo)
}
function bu(e, t, n, r, l) {
    return bn(),
    Va(l),
    t.flags |= 256,
    de(e, t, n, r),
    t.child
}
var Wo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Bo(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function kd(e, t, n) {
    var r = t.pendingProps, l = V.current, i = !1, o = (t.flags & 128) !== 0, a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1),
    D(V, l & 1),
    e === null)
        return Ao(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = o) : i = di(o, r, 0, null),
        e = Yt(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Bo(n),
        t.memoizedState = Wo,
        e) : ls(t, o));
    if (l = e.memoizedState,
    l !== null && (a = l.dehydrated,
    a !== null))
        return Yh(e, t, o, r, a, l, n);
    if (i) {
        i = r.fallback,
        o = t.mode,
        l = e.child,
        a = l.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== l ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = s,
        t.deletions = null) : (r = Pt(l, s),
        r.subtreeFlags = l.subtreeFlags & 14680064),
        a !== null ? i = Pt(a, i) : (i = Yt(i, o, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        o = e.child.memoizedState,
        o = o === null ? Bo(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        i.memoizedState = o,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = Wo,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = Pt(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function ls(e, t) {
    return t = di({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function ll(e, t, n, r) {
    return r !== null && Va(r),
    On(t, e.child, null, n),
    e = ls(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Yh(e, t, n, r, l, i, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Xi(Error(N(422))),
        ll(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        l = t.mode,
        r = di({
            mode: "visible",
            children: r.children
        }, l, 0, null),
        i = Yt(i, l, o, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && On(t, e.child, null, o),
        t.child.memoizedState = Bo(o),
        t.memoizedState = Wo,
        i);
    if (!(t.mode & 1))
        return ll(e, t, o, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        i = Error(N(419)),
        r = Xi(i, r, void 0),
        ll(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0,
    ye || a) {
        if (r = re,
        r !== null) {
            switch (o & -o) {
            case 4:
                l = 2;
                break;
            case 16:
                l = 8;
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
                l = 32;
                break;
            case 536870912:
                l = 268435456;
                break;
            default:
                l = 0
            }
            l = l & (r.suspendedLanes | o) ? 0 : l,
            l !== 0 && l !== i.retryLane && (i.retryLane = l,
            it(e, l),
            $e(r, e, l, -1))
        }
        return cs(),
        r = Xi(Error(N(421))),
        ll(e, t, o, r)
    }
    return l.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = o0.bind(null, e),
    l._reactRetry = t,
    null) : (e = i.treeContext,
    Ne = Nt(l.nextSibling),
    Ee = t,
    B = !0,
    De = null,
    e !== null && (be[Oe++] = et,
    be[Oe++] = tt,
    be[Oe++] = Xt,
    et = e.id,
    tt = e.overflow,
    Xt = t),
    t = ls(t, r.children),
    t.flags |= 4096,
    t)
}
function Ou(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Ro(e.return, t, n)
}
function Ki(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = l)
}
function Sd(e, t, n) {
    var r = t.pendingProps
      , l = r.revealOrder
      , i = r.tail;
    if (de(e, t, r.children, n),
    r = V.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Ou(e, n, t);
                else if (e.tag === 19)
                    Ou(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (D(V, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (l) {
        case "forwards":
            for (n = t.child,
            l = null; n !== null; )
                e = n.alternate,
                e !== null && $l(e) === null && (l = n),
                n = n.sibling;
            n = l,
            n === null ? (l = t.child,
            t.child = null) : (l = n.sibling,
            n.sibling = null),
            Ki(t, !1, l, n, i);
            break;
        case "backwards":
            for (n = null,
            l = t.child,
            t.child = null; l !== null; ) {
                if (e = l.alternate,
                e !== null && $l(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling,
                l.sibling = n,
                n = l,
                l = e
            }
            Ki(t, !0, n, null, i);
            break;
        case "together":
            Ki(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function yl(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function ot(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Zt |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(N(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Pt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Pt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Gh(e, t, n) {
    switch (t.tag) {
    case 3:
        wd(t),
        bn();
        break;
    case 5:
        Gf(t);
        break;
    case 1:
        we(t.type) && Al(t);
        break;
    case 4:
        Ka(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , l = t.memoizedProps.value;
        D(Fl, r._currentValue),
        r._currentValue = l;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (D(V, V.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? kd(e, t, n) : (D(V, V.current & 1),
            e = ot(e, t, n),
            e !== null ? e.sibling : null);
        D(V, V.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Sd(e, t, n);
            t.flags |= 128
        }
        if (l = t.memoizedState,
        l !== null && (l.rendering = null,
        l.tail = null,
        l.lastEffect = null),
        D(V, V.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        yd(e, t, n)
    }
    return ot(e, t, n)
}
var Nd, Vo, Ed, Cd;
Nd = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Vo = function() {}
;
Ed = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode,
        Vt(Ke.current);
        var i = null;
        switch (n) {
        case "input":
            l = fo(e, l),
            r = fo(e, r),
            i = [];
            break;
        case "select":
            l = Q({}, l, {
                value: void 0
            }),
            r = Q({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            l = ho(e, l),
            r = ho(e, r),
            i = [];
            break;
        default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = zl)
        }
        vo(n, r);
        var o;
        n = null;
        for (u in l)
            if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
                if (u === "style") {
                    var a = l[u];
                    for (o in a)
                        a.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (pr.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var s = r[u];
            if (a = l != null ? l[u] : void 0,
            r.hasOwnProperty(u) && s !== a && (s != null || a != null))
                if (u === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in s)
                            s.hasOwnProperty(o) && a[o] !== s[o] && (n || (n = {}),
                            n[o] = s[o])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = s;
                else
                    u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                    a = a ? a.__html : void 0,
                    s != null && a !== s && (i = i || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (pr.hasOwnProperty(u) ? (s != null && u === "onScroll" && U("scroll", e),
                    i || a === s || (i = [])) : (i = i || []).push(u, s))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Cd = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Xn(e, t) {
    if (!B)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function se(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags & 14680064,
            r |= l.flags & 14680064,
            l.return = e,
            l = l.sibling;
    else
        for (l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags,
            r |= l.flags,
            l.return = e,
            l = l.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Xh(e, t, n) {
    var r = t.pendingProps;
    switch (Ba(t),
    t.tag) {
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
        return se(t),
        null;
    case 1:
        return we(t.type) && Ll(),
        se(t),
        null;
    case 3:
        return r = t.stateNode,
        In(),
        $(xe),
        $(ce),
        Ja(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (nl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        De !== null && (Jo(De),
        De = null))),
        Vo(e, t),
        se(t),
        null;
    case 5:
        Za(t);
        var l = Vt(Cr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Ed(e, t, n, r, l),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(N(166));
                return se(t),
                null
            }
            if (e = Vt(Ke.current),
            nl(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[Qe] = t,
                r[Nr] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    U("cancel", r),
                    U("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    U("load", r);
                    break;
                case "video":
                case "audio":
                    for (l = 0; l < er.length; l++)
                        U(er[l], r);
                    break;
                case "source":
                    U("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    U("error", r),
                    U("load", r);
                    break;
                case "details":
                    U("toggle", r);
                    break;
                case "input":
                    Ds(r, i),
                    U("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    U("invalid", r);
                    break;
                case "textarea":
                    $s(r, i),
                    U("invalid", r)
                }
                vo(n, i),
                l = null;
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var a = i[o];
                        o === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && tl(r.textContent, a, e),
                        l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && tl(r.textContent, a, e),
                        l = ["children", "" + a]) : pr.hasOwnProperty(o) && a != null && o === "onScroll" && U("scroll", r)
                    }
                switch (n) {
                case "input":
                    Yr(r),
                    Us(r, i, !0);
                    break;
                case "textarea":
                    Yr(r),
                    Ws(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = zl)
                }
                r = l,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = l.nodeType === 9 ? l : l.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Jc(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[Qe] = t,
                e[Nr] = r,
                Nd(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = yo(n, r),
                    n) {
                    case "dialog":
                        U("cancel", e),
                        U("close", e),
                        l = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        U("load", e),
                        l = r;
                        break;
                    case "video":
                    case "audio":
                        for (l = 0; l < er.length; l++)
                            U(er[l], e);
                        l = r;
                        break;
                    case "source":
                        U("error", e),
                        l = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        U("error", e),
                        U("load", e),
                        l = r;
                        break;
                    case "details":
                        U("toggle", e),
                        l = r;
                        break;
                    case "input":
                        Ds(e, r),
                        l = fo(e, r),
                        U("invalid", e);
                        break;
                    case "option":
                        l = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        l = Q({}, r, {
                            value: void 0
                        }),
                        U("invalid", e);
                        break;
                    case "textarea":
                        $s(e, r),
                        l = ho(e, r),
                        U("invalid", e);
                        break;
                    default:
                        l = r
                    }
                    vo(n, l),
                    a = l;
                    for (i in a)
                        if (a.hasOwnProperty(i)) {
                            var s = a[i];
                            i === "style" ? tf(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                            s != null && qc(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && mr(e, s) : typeof s == "number" && mr(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (pr.hasOwnProperty(i) ? s != null && i === "onScroll" && U("scroll", e) : s != null && _a(e, i, s, o))
                        }
                    switch (n) {
                    case "input":
                        Yr(e),
                        Us(e, r, !1);
                        break;
                    case "textarea":
                        Yr(e),
                        Ws(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + bt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? wn(e, !!r.multiple, i, !1) : r.defaultValue != null && wn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof l.onClick == "function" && (e.onclick = zl)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return se(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Cd(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(N(166));
            if (n = Vt(Cr.current),
            Vt(Ke.current),
            nl(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Qe] = t,
                (i = r.nodeValue !== n) && (e = Ee,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        tl(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && tl(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Qe] = t,
                t.stateNode = r
        }
        return se(t),
        null;
    case 13:
        if ($(V),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (B && Ne !== null && t.mode & 1 && !(t.flags & 128))
                Bf(),
                bn(),
                t.flags |= 98560,
                i = !1;
            else if (i = nl(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(N(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(N(317));
                    i[Qe] = t
                } else
                    bn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                se(t),
                i = !1
            } else
                De !== null && (Jo(De),
                De = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || V.current & 1 ? ee === 0 && (ee = 3) : cs())),
        t.updateQueue !== null && (t.flags |= 4),
        se(t),
        null);
    case 4:
        return In(),
        Vo(e, t),
        e === null && kr(t.stateNode.containerInfo),
        se(t),
        null;
    case 10:
        return Ya(t.type._context),
        se(t),
        null;
    case 17:
        return we(t.type) && Ll(),
        se(t),
        null;
    case 19:
        if ($(V),
        i = t.memoizedState,
        i === null)
            return se(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = i.rendering,
        o === null)
            if (r)
                Xn(i, !1);
            else {
                if (ee !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = $l(e),
                        o !== null) {
                            for (t.flags |= 128,
                            Xn(i, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                o = i.alternate,
                                o === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = o.childLanes,
                                i.lanes = o.lanes,
                                i.child = o.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = o.memoizedProps,
                                i.memoizedState = o.memoizedState,
                                i.updateQueue = o.updateQueue,
                                i.type = o.type,
                                e = o.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return D(V, V.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && K() > zn && (t.flags |= 128,
                r = !0,
                Xn(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = $l(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Xn(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !o.alternate && !B)
                        return se(t),
                        null
                } else
                    2 * K() - i.renderingStartTime > zn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Xn(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = i.last,
            n !== null ? n.sibling = o : t.child = o,
            i.last = o)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = K(),
        t.sibling = null,
        n = V.current,
        D(V, r ? n & 1 | 2 : n & 1),
        t) : (se(t),
        null);
    case 22:
    case 23:
        return us(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Se & 1073741824 && (se(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : se(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(N(156, t.tag))
}
function Kh(e, t) {
    switch (Ba(t),
    t.tag) {
    case 1:
        return we(t.type) && Ll(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return In(),
        $(xe),
        $(ce),
        Ja(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Za(t),
        null;
    case 13:
        if ($(V),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(N(340));
            bn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return $(V),
        null;
    case 4:
        return In(),
        null;
    case 10:
        return Ya(t.type._context),
        null;
    case 22:
    case 23:
        return us(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var il = !1
  , ue = !1
  , Zh = typeof WeakSet == "function" ? WeakSet : Set
  , j = null;
function gn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Y(e, t, r)
            }
        else
            n.current = null
}
function Ho(e, t, n) {
    try {
        n()
    } catch (r) {
        Y(e, t, r)
    }
}
var Iu = !1;
function Jh(e, t) {
    if (_o = Ol,
    e = Of(),
    $a(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , a = -1
                      , s = -1
                      , u = 0
                      , p = 0
                      , d = e
                      , h = null;
                    t: for (; ; ) {
                        for (var v; d !== n || l !== 0 && d.nodeType !== 3 || (a = o + l),
                        d !== i || r !== 0 && d.nodeType !== 3 || (s = o + r),
                        d.nodeType === 3 && (o += d.nodeValue.length),
                        (v = d.firstChild) !== null; )
                            h = d,
                            d = v;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (h === n && ++u === l && (a = o),
                            h === i && ++p === r && (s = o),
                            (v = d.nextSibling) !== null)
                                break;
                            d = h,
                            h = d.parentNode
                        }
                        d = v
                    }
                    n = a === -1 || s === -1 ? null : {
                        start: a,
                        end: s
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (bo = {
        focusedElem: e,
        selectionRange: n
    },
    Ol = !1,
    j = t; j !== null; )
        if (t = j,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            j = e;
        else
            for (; j !== null; ) {
                t = j;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var w = x.memoizedProps
                                  , C = x.memoizedState
                                  , m = t.stateNode
                                  , f = m.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Me(t.type, w), C);
                                m.__reactInternalSnapshotBeforeUpdate = f
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(N(163))
                        }
                } catch (y) {
                    Y(t, t.return, y)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    j = e;
                    break
                }
                j = t.return
            }
    return x = Iu,
    Iu = !1,
    x
}
function sr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                l.destroy = void 0,
                i !== void 0 && Ho(t, n, i)
            }
            l = l.next
        } while (l !== r)
    }
}
function ci(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Qo(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function jd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    jd(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Qe],
    delete t[Nr],
    delete t[To],
    delete t[Lh],
    delete t[Ah])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Pd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Tu(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Pd(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Yo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = zl));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Yo(e, t, n),
        e = e.sibling; e !== null; )
            Yo(e, t, n),
            e = e.sibling
}
function Go(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Go(e, t, n),
        e = e.sibling; e !== null; )
            Go(e, t, n),
            e = e.sibling
}
var le = null
  , Fe = !1;
function ft(e, t, n) {
    for (n = n.child; n !== null; )
        _d(e, t, n),
        n = n.sibling
}
function _d(e, t, n) {
    if (Xe && typeof Xe.onCommitFiberUnmount == "function")
        try {
            Xe.onCommitFiberUnmount(ni, n)
        } catch {}
    switch (n.tag) {
    case 5:
        ue || gn(n, t);
    case 6:
        var r = le
          , l = Fe;
        le = null,
        ft(e, t, n),
        le = r,
        Fe = l,
        le !== null && (Fe ? (e = le,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : le.removeChild(n.stateNode));
        break;
    case 18:
        le !== null && (Fe ? (e = le,
        n = n.stateNode,
        e.nodeType === 8 ? Bi(e.parentNode, n) : e.nodeType === 1 && Bi(e, n),
        yr(e)) : Bi(le, n.stateNode));
        break;
    case 4:
        r = le,
        l = Fe,
        le = n.stateNode.containerInfo,
        Fe = !0,
        ft(e, t, n),
        le = r,
        Fe = l;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!ue && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            l = r = r.next;
            do {
                var i = l
                  , o = i.destroy;
                i = i.tag,
                o !== void 0 && (i & 2 || i & 4) && Ho(n, t, o),
                l = l.next
            } while (l !== r)
        }
        ft(e, t, n);
        break;
    case 1:
        if (!ue && (gn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                Y(n, t, a)
            }
        ft(e, t, n);
        break;
    case 21:
        ft(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (ue = (r = ue) || n.memoizedState !== null,
        ft(e, t, n),
        ue = r) : ft(e, t, n);
        break;
    default:
        ft(e, t, n)
    }
}
function zu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Zh),
        t.forEach(function(r) {
            var l = a0.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(l, l))
        })
    }
}
function Re(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e
                  , o = t
                  , a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        le = a.stateNode,
                        Fe = !1;
                        break e;
                    case 3:
                        le = a.stateNode.containerInfo,
                        Fe = !0;
                        break e;
                    case 4:
                        le = a.stateNode.containerInfo,
                        Fe = !0;
                        break e
                    }
                    a = a.return
                }
                if (le === null)
                    throw Error(N(160));
                _d(i, o, l),
                le = null,
                Fe = !1;
                var s = l.alternate;
                s !== null && (s.return = null),
                l.return = null
            } catch (u) {
                Y(l, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            bd(t, e),
            t = t.sibling
}
function bd(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Re(t, e),
        Be(e),
        r & 4) {
            try {
                sr(3, e, e.return),
                ci(3, e)
            } catch (w) {
                Y(e, e.return, w)
            }
            try {
                sr(5, e, e.return)
            } catch (w) {
                Y(e, e.return, w)
            }
        }
        break;
    case 1:
        Re(t, e),
        Be(e),
        r & 512 && n !== null && gn(n, n.return);
        break;
    case 5:
        if (Re(t, e),
        Be(e),
        r & 512 && n !== null && gn(n, n.return),
        e.flags & 32) {
            var l = e.stateNode;
            try {
                mr(l, "")
            } catch (w) {
                Y(e, e.return, w)
            }
        }
        if (r & 4 && (l = e.stateNode,
        l != null)) {
            var i = e.memoizedProps
              , o = n !== null ? n.memoizedProps : i
              , a = e.type
              , s = e.updateQueue;
            if (e.updateQueue = null,
            s !== null)
                try {
                    a === "input" && i.type === "radio" && i.name != null && Kc(l, i),
                    yo(a, o);
                    var u = yo(a, i);
                    for (o = 0; o < s.length; o += 2) {
                        var p = s[o]
                          , d = s[o + 1];
                        p === "style" ? tf(l, d) : p === "dangerouslySetInnerHTML" ? qc(l, d) : p === "children" ? mr(l, d) : _a(l, p, d, u)
                    }
                    switch (a) {
                    case "input":
                        po(l, i);
                        break;
                    case "textarea":
                        Zc(l, i);
                        break;
                    case "select":
                        var h = l._wrapperState.wasMultiple;
                        l._wrapperState.wasMultiple = !!i.multiple;
                        var v = i.value;
                        v != null ? wn(l, !!i.multiple, v, !1) : h !== !!i.multiple && (i.defaultValue != null ? wn(l, !!i.multiple, i.defaultValue, !0) : wn(l, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    l[Nr] = i
                } catch (w) {
                    Y(e, e.return, w)
                }
        }
        break;
    case 6:
        if (Re(t, e),
        Be(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(N(162));
            l = e.stateNode,
            i = e.memoizedProps;
            try {
                l.nodeValue = i
            } catch (w) {
                Y(e, e.return, w)
            }
        }
        break;
    case 3:
        if (Re(t, e),
        Be(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                yr(t.containerInfo)
            } catch (w) {
                Y(e, e.return, w)
            }
        break;
    case 4:
        Re(t, e),
        Be(e);
        break;
    case 13:
        Re(t, e),
        Be(e),
        l = e.child,
        l.flags & 8192 && (i = l.memoizedState !== null,
        l.stateNode.isHidden = i,
        !i || l.alternate !== null && l.alternate.memoizedState !== null || (as = K())),
        r & 4 && zu(e);
        break;
    case 22:
        if (p = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (ue = (u = ue) || p,
        Re(t, e),
        ue = u) : Re(t, e),
        Be(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !p && e.mode & 1)
                for (j = e,
                p = e.child; p !== null; ) {
                    for (d = j = p; j !== null; ) {
                        switch (h = j,
                        v = h.child,
                        h.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            sr(4, h, h.return);
                            break;
                        case 1:
                            gn(h, h.return);
                            var x = h.stateNode;
                            if (typeof x.componentWillUnmount == "function") {
                                r = h,
                                n = h.return;
                                try {
                                    t = r,
                                    x.props = t.memoizedProps,
                                    x.state = t.memoizedState,
                                    x.componentWillUnmount()
                                } catch (w) {
                                    Y(r, n, w)
                                }
                            }
                            break;
                        case 5:
                            gn(h, h.return);
                            break;
                        case 22:
                            if (h.memoizedState !== null) {
                                Au(d);
                                continue
                            }
                        }
                        v !== null ? (v.return = h,
                        j = v) : Au(d)
                    }
                    p = p.sibling
                }
            e: for (p = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (p === null) {
                        p = d;
                        try {
                            l = d.stateNode,
                            u ? (i = l.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = d.stateNode,
                            s = d.memoizedProps.style,
                            o = s != null && s.hasOwnProperty("display") ? s.display : null,
                            a.style.display = ef("display", o))
                        } catch (w) {
                            Y(e, e.return, w)
                        }
                    }
                } else if (d.tag === 6) {
                    if (p === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (w) {
                            Y(e, e.return, w)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    p === d && (p = null),
                    d = d.return
                }
                p === d && (p = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        Re(t, e),
        Be(e),
        r & 4 && zu(e);
        break;
    case 21:
        break;
    default:
        Re(t, e),
        Be(e)
    }
}
function Be(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Pd(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(N(160))
            }
            switch (r.tag) {
            case 5:
                var l = r.stateNode;
                r.flags & 32 && (mr(l, ""),
                r.flags &= -33);
                var i = Tu(e);
                Go(e, i, l);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , a = Tu(e);
                Yo(e, a, o);
                break;
            default:
                throw Error(N(161))
            }
        } catch (s) {
            Y(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function qh(e, t, n) {
    j = e,
    Od(e)
}
function Od(e, t, n) {
    for (var r = (e.mode & 1) !== 0; j !== null; ) {
        var l = j
          , i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || il;
            if (!o) {
                var a = l.alternate
                  , s = a !== null && a.memoizedState !== null || ue;
                a = il;
                var u = ue;
                if (il = o,
                (ue = s) && !u)
                    for (j = l; j !== null; )
                        o = j,
                        s = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Ru(l) : s !== null ? (s.return = o,
                        j = s) : Ru(l);
                for (; i !== null; )
                    j = i,
                    Od(i),
                    i = i.sibling;
                j = l,
                il = a,
                ue = u
            }
            Lu(e)
        } else
            l.subtreeFlags & 8772 && i !== null ? (i.return = l,
            j = i) : Lu(e)
    }
}
function Lu(e) {
    for (; j !== null; ) {
        var t = j;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ue || ci(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ue)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Me(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && yu(t, i, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            yu(t, o, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var s = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                s.autoFocus && n.focus();
                                break;
                            case "img":
                                s.src && (n.src = s.src)
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
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var p = u.memoizedState;
                                if (p !== null) {
                                    var d = p.dehydrated;
                                    d !== null && yr(d)
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
                        throw Error(N(163))
                    }
                ue || t.flags & 512 && Qo(t)
            } catch (h) {
                Y(t, t.return, h)
            }
        }
        if (t === e) {
            j = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            j = n;
            break
        }
        j = t.return
    }
}
function Au(e) {
    for (; j !== null; ) {
        var t = j;
        if (t === e) {
            j = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            j = n;
            break
        }
        j = t.return
    }
}
function Ru(e) {
    for (; j !== null; ) {
        var t = j;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    ci(4, t)
                } catch (s) {
                    Y(t, n, s)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var l = t.return;
                    try {
                        r.componentDidMount()
                    } catch (s) {
                        Y(t, l, s)
                    }
                }
                var i = t.return;
                try {
                    Qo(t)
                } catch (s) {
                    Y(t, i, s)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    Qo(t)
                } catch (s) {
                    Y(t, o, s)
                }
            }
        } catch (s) {
            Y(t, t.return, s)
        }
        if (t === e) {
            j = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            j = a;
            break
        }
        j = t.return
    }
}
var e0 = Math.ceil
  , Vl = ut.ReactCurrentDispatcher
  , is = ut.ReactCurrentOwner
  , Te = ut.ReactCurrentBatchConfig
  , M = 0
  , re = null
  , Z = null
  , ie = 0
  , Se = 0
  , vn = At(0)
  , ee = 0
  , br = null
  , Zt = 0
  , fi = 0
  , os = 0
  , ur = null
  , ve = null
  , as = 0
  , zn = 1 / 0
  , Je = null
  , Hl = !1
  , Xo = null
  , Ct = null
  , ol = !1
  , yt = null
  , Ql = 0
  , cr = 0
  , Ko = null
  , xl = -1
  , wl = 0;
function me() {
    return M & 6 ? K() : xl !== -1 ? xl : xl = K()
}
function jt(e) {
    return e.mode & 1 ? M & 2 && ie !== 0 ? ie & -ie : Mh.transition !== null ? (wl === 0 && (wl = mf()),
    wl) : (e = F,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : kf(e.type)),
    e) : 1
}
function $e(e, t, n, r) {
    if (50 < cr)
        throw cr = 0,
        Ko = null,
        Error(N(185));
    Rr(e, n, r),
    (!(M & 2) || e !== re) && (e === re && (!(M & 2) && (fi |= n),
    ee === 4 && gt(e, ie)),
    ke(e, r),
    n === 1 && M === 0 && !(t.mode & 1) && (zn = K() + 500,
    ai && Rt()))
}
function ke(e, t) {
    var n = e.callbackNode;
    Mm(e, t);
    var r = bl(e, e === re ? ie : 0);
    if (r === 0)
        n !== null && Hs(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Hs(n),
        t === 1)
            e.tag === 0 ? Rh(Mu.bind(null, e)) : Uf(Mu.bind(null, e)),
            Th(function() {
                !(M & 6) && Rt()
            }),
            n = null;
        else {
            switch (hf(r)) {
            case 1:
                n = za;
                break;
            case 4:
                n = df;
                break;
            case 16:
                n = _l;
                break;
            case 536870912:
                n = pf;
                break;
            default:
                n = _l
            }
            n = Fd(n, Id.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Id(e, t) {
    if (xl = -1,
    wl = 0,
    M & 6)
        throw Error(N(327));
    var n = e.callbackNode;
    if (Cn() && e.callbackNode !== n)
        return null;
    var r = bl(e, e === re ? ie : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Yl(e, r);
    else {
        t = r;
        var l = M;
        M |= 2;
        var i = zd();
        (re !== e || ie !== t) && (Je = null,
        zn = K() + 500,
        Qt(e, t));
        do
            try {
                r0();
                break
            } catch (a) {
                Td(e, a)
            }
        while (!0);
        Qa(),
        Vl.current = i,
        M = l,
        Z !== null ? t = 0 : (re = null,
        ie = 0,
        t = ee)
    }
    if (t !== 0) {
        if (t === 2 && (l = No(e),
        l !== 0 && (r = l,
        t = Zo(e, l))),
        t === 1)
            throw n = br,
            Qt(e, 0),
            gt(e, r),
            ke(e, K()),
            n;
        if (t === 6)
            gt(e, r);
        else {
            if (l = e.current.alternate,
            !(r & 30) && !t0(l) && (t = Yl(e, r),
            t === 2 && (i = No(e),
            i !== 0 && (r = i,
            t = Zo(e, i))),
            t === 1))
                throw n = br,
                Qt(e, 0),
                gt(e, r),
                ke(e, K()),
                n;
            switch (e.finishedWork = l,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(N(345));
            case 2:
                $t(e, ve, Je);
                break;
            case 3:
                if (gt(e, r),
                (r & 130023424) === r && (t = as + 500 - K(),
                10 < t)) {
                    if (bl(e, 0) !== 0)
                        break;
                    if (l = e.suspendedLanes,
                    (l & r) !== r) {
                        me(),
                        e.pingedLanes |= e.suspendedLanes & l;
                        break
                    }
                    e.timeoutHandle = Io($t.bind(null, e, ve, Je), t);
                    break
                }
                $t(e, ve, Je);
                break;
            case 4:
                if (gt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                l = -1; 0 < r; ) {
                    var o = 31 - Ue(r);
                    i = 1 << o,
                    o = t[o],
                    o > l && (l = o),
                    r &= ~i
                }
                if (r = l,
                r = K() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * e0(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Io($t.bind(null, e, ve, Je), r);
                    break
                }
                $t(e, ve, Je);
                break;
            case 5:
                $t(e, ve, Je);
                break;
            default:
                throw Error(N(329))
            }
        }
    }
    return ke(e, K()),
    e.callbackNode === n ? Id.bind(null, e) : null
}
function Zo(e, t) {
    var n = ur;
    return e.current.memoizedState.isDehydrated && (Qt(e, t).flags |= 256),
    e = Yl(e, t),
    e !== 2 && (t = ve,
    ve = n,
    t !== null && Jo(t)),
    e
}
function Jo(e) {
    ve === null ? ve = e : ve.push.apply(ve, e)
}
function t0(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r]
                      , i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!We(i(), l))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function gt(e, t) {
    for (t &= ~os,
    t &= ~fi,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Ue(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Mu(e) {
    if (M & 6)
        throw Error(N(327));
    Cn();
    var t = bl(e, 0);
    if (!(t & 1))
        return ke(e, K()),
        null;
    var n = Yl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = No(e);
        r !== 0 && (t = r,
        n = Zo(e, r))
    }
    if (n === 1)
        throw n = br,
        Qt(e, 0),
        gt(e, t),
        ke(e, K()),
        n;
    if (n === 6)
        throw Error(N(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    $t(e, ve, Je),
    ke(e, K()),
    null
}
function ss(e, t) {
    var n = M;
    M |= 1;
    try {
        return e(t)
    } finally {
        M = n,
        M === 0 && (zn = K() + 500,
        ai && Rt())
    }
}
function Jt(e) {
    yt !== null && yt.tag === 0 && !(M & 6) && Cn();
    var t = M;
    M |= 1;
    var n = Te.transition
      , r = F;
    try {
        if (Te.transition = null,
        F = 1,
        e)
            return e()
    } finally {
        F = r,
        Te.transition = n,
        M = t,
        !(M & 6) && Rt()
    }
}
function us() {
    Se = vn.current,
    $(vn)
}
function Qt(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Ih(n)),
    Z !== null)
        for (n = Z.return; n !== null; ) {
            var r = n;
            switch (Ba(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Ll();
                break;
            case 3:
                In(),
                $(xe),
                $(ce),
                Ja();
                break;
            case 5:
                Za(r);
                break;
            case 4:
                In();
                break;
            case 13:
                $(V);
                break;
            case 19:
                $(V);
                break;
            case 10:
                Ya(r.type._context);
                break;
            case 22:
            case 23:
                us()
            }
            n = n.return
        }
    if (re = e,
    Z = e = Pt(e.current, null),
    ie = Se = t,
    ee = 0,
    br = null,
    os = fi = Zt = 0,
    ve = ur = null,
    Bt !== null) {
        for (t = 0; t < Bt.length; t++)
            if (n = Bt[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var l = r.next
                  , i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = l,
                    r.next = o
                }
                n.pending = r
            }
        Bt = null
    }
    return e
}
function Td(e, t) {
    do {
        var n = Z;
        try {
            if (Qa(),
            gl.current = Bl,
            Wl) {
                for (var r = H.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null),
                    r = r.next
                }
                Wl = !1
            }
            if (Kt = 0,
            ne = q = H = null,
            ar = !1,
            jr = 0,
            is.current = null,
            n === null || n.return === null) {
                ee = 1,
                br = t,
                Z = null;
                break
            }
            e: {
                var i = e
                  , o = n.return
                  , a = n
                  , s = t;
                if (t = ie,
                a.flags |= 32768,
                s !== null && typeof s == "object" && typeof s.then == "function") {
                    var u = s
                      , p = a
                      , d = p.tag;
                    if (!(p.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var h = p.alternate;
                        h ? (p.updateQueue = h.updateQueue,
                        p.memoizedState = h.memoizedState,
                        p.lanes = h.lanes) : (p.updateQueue = null,
                        p.memoizedState = null)
                    }
                    var v = Eu(o);
                    if (v !== null) {
                        v.flags &= -257,
                        Cu(v, o, a, i, t),
                        v.mode & 1 && Nu(i, u, t),
                        t = v,
                        s = u;
                        var x = t.updateQueue;
                        if (x === null) {
                            var w = new Set;
                            w.add(s),
                            t.updateQueue = w
                        } else
                            x.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Nu(i, u, t),
                            cs();
                            break e
                        }
                        s = Error(N(426))
                    }
                } else if (B && a.mode & 1) {
                    var C = Eu(o);
                    if (C !== null) {
                        !(C.flags & 65536) && (C.flags |= 256),
                        Cu(C, o, a, i, t),
                        Va(Tn(s, a));
                        break e
                    }
                }
                i = s = Tn(s, a),
                ee !== 4 && (ee = 2),
                ur === null ? ur = [i] : ur.push(i),
                i = o;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var m = hd(i, s, t);
                        vu(i, m);
                        break e;
                    case 1:
                        a = s;
                        var f = i.type
                          , g = i.stateNode;
                        if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Ct === null || !Ct.has(g)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var y = gd(i, a, t);
                            vu(i, y);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            Ad(n)
        } catch (E) {
            t = E,
            Z === n && n !== null && (Z = n = n.return);
            continue
        }
        break
    } while (!0)
}
function zd() {
    var e = Vl.current;
    return Vl.current = Bl,
    e === null ? Bl : e
}
function cs() {
    (ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    re === null || !(Zt & 268435455) && !(fi & 268435455) || gt(re, ie)
}
function Yl(e, t) {
    var n = M;
    M |= 2;
    var r = zd();
    (re !== e || ie !== t) && (Je = null,
    Qt(e, t));
    do
        try {
            n0();
            break
        } catch (l) {
            Td(e, l)
        }
    while (!0);
    if (Qa(),
    M = n,
    Vl.current = r,
    Z !== null)
        throw Error(N(261));
    return re = null,
    ie = 0,
    ee
}
function n0() {
    for (; Z !== null; )
        Ld(Z)
}
function r0() {
    for (; Z !== null && !_m(); )
        Ld(Z)
}
function Ld(e) {
    var t = Md(e.alternate, e, Se);
    e.memoizedProps = e.pendingProps,
    t === null ? Ad(e) : Z = t,
    is.current = null
}
function Ad(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Kh(n, t),
            n !== null) {
                n.flags &= 32767,
                Z = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ee = 6,
                Z = null;
                return
            }
        } else if (n = Xh(n, t, Se),
        n !== null) {
            Z = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Z = t;
            return
        }
        Z = t = e
    } while (t !== null);
    ee === 0 && (ee = 5)
}
function $t(e, t, n) {
    var r = F
      , l = Te.transition;
    try {
        Te.transition = null,
        F = 1,
        l0(e, t, n, r)
    } finally {
        Te.transition = l,
        F = r
    }
    return null
}
function l0(e, t, n, r) {
    do
        Cn();
    while (yt !== null);
    if (M & 6)
        throw Error(N(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(N(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Fm(e, i),
    e === re && (Z = re = null,
    ie = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ol || (ol = !0,
    Fd(_l, function() {
        return Cn(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = Te.transition,
        Te.transition = null;
        var o = F;
        F = 1;
        var a = M;
        M |= 4,
        is.current = null,
        Jh(e, n),
        bd(n, e),
        Eh(bo),
        Ol = !!_o,
        bo = _o = null,
        e.current = n,
        qh(n),
        bm(),
        M = a,
        F = o,
        Te.transition = i
    } else
        e.current = n;
    if (ol && (ol = !1,
    yt = e,
    Ql = l),
    i = e.pendingLanes,
    i === 0 && (Ct = null),
    Tm(n.stateNode),
    ke(e, K()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            l = t[n],
            r(l.value, {
                componentStack: l.stack,
                digest: l.digest
            });
    if (Hl)
        throw Hl = !1,
        e = Xo,
        Xo = null,
        e;
    return Ql & 1 && e.tag !== 0 && Cn(),
    i = e.pendingLanes,
    i & 1 ? e === Ko ? cr++ : (cr = 0,
    Ko = e) : cr = 0,
    Rt(),
    null
}
function Cn() {
    if (yt !== null) {
        var e = hf(Ql)
          , t = Te.transition
          , n = F;
        try {
            if (Te.transition = null,
            F = 16 > e ? 16 : e,
            yt === null)
                var r = !1;
            else {
                if (e = yt,
                yt = null,
                Ql = 0,
                M & 6)
                    throw Error(N(331));
                var l = M;
                for (M |= 4,
                j = e.current; j !== null; ) {
                    var i = j
                      , o = i.child;
                    if (j.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var s = 0; s < a.length; s++) {
                                var u = a[s];
                                for (j = u; j !== null; ) {
                                    var p = j;
                                    switch (p.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        sr(8, p, i)
                                    }
                                    var d = p.child;
                                    if (d !== null)
                                        d.return = p,
                                        j = d;
                                    else
                                        for (; j !== null; ) {
                                            p = j;
                                            var h = p.sibling
                                              , v = p.return;
                                            if (jd(p),
                                            p === u) {
                                                j = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = v,
                                                j = h;
                                                break
                                            }
                                            j = v
                                        }
                                }
                            }
                            var x = i.alternate;
                            if (x !== null) {
                                var w = x.child;
                                if (w !== null) {
                                    x.child = null;
                                    do {
                                        var C = w.sibling;
                                        w.sibling = null,
                                        w = C
                                    } while (w !== null)
                                }
                            }
                            j = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        o.return = i,
                        j = o;
                    else
                        e: for (; j !== null; ) {
                            if (i = j,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    sr(9, i, i.return)
                                }
                            var m = i.sibling;
                            if (m !== null) {
                                m.return = i.return,
                                j = m;
                                break e
                            }
                            j = i.return
                        }
                }
                var f = e.current;
                for (j = f; j !== null; ) {
                    o = j;
                    var g = o.child;
                    if (o.subtreeFlags & 2064 && g !== null)
                        g.return = o,
                        j = g;
                    else
                        e: for (o = f; j !== null; ) {
                            if (a = j,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ci(9, a)
                                    }
                                } catch (E) {
                                    Y(a, a.return, E)
                                }
                            if (a === o) {
                                j = null;
                                break e
                            }
                            var y = a.sibling;
                            if (y !== null) {
                                y.return = a.return,
                                j = y;
                                break e
                            }
                            j = a.return
                        }
                }
                if (M = l,
                Rt(),
                Xe && typeof Xe.onPostCommitFiberRoot == "function")
                    try {
                        Xe.onPostCommitFiberRoot(ni, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            F = n,
            Te.transition = t
        }
    }
    return !1
}
function Fu(e, t, n) {
    t = Tn(n, t),
    t = hd(e, t, 1),
    e = Et(e, t, 1),
    t = me(),
    e !== null && (Rr(e, 1, t),
    ke(e, t))
}
function Y(e, t, n) {
    if (e.tag === 3)
        Fu(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Fu(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ct === null || !Ct.has(r))) {
                    e = Tn(n, e),
                    e = gd(t, e, 1),
                    t = Et(t, e, 1),
                    e = me(),
                    t !== null && (Rr(t, 1, e),
                    ke(t, e));
                    break
                }
            }
            t = t.return
        }
}
function i0(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = me(),
    e.pingedLanes |= e.suspendedLanes & n,
    re === e && (ie & n) === n && (ee === 4 || ee === 3 && (ie & 130023424) === ie && 500 > K() - as ? Qt(e, 0) : os |= n),
    ke(e, t)
}
function Rd(e, t) {
    t === 0 && (e.mode & 1 ? (t = Kr,
    Kr <<= 1,
    !(Kr & 130023424) && (Kr = 4194304)) : t = 1);
    var n = me();
    e = it(e, t),
    e !== null && (Rr(e, t, n),
    ke(e, n))
}
function o0(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Rd(e, n)
}
function a0(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(N(314))
    }
    r !== null && r.delete(t),
    Rd(e, n)
}
var Md;
Md = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || xe.current)
            ye = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return ye = !1,
                Gh(e, t, n);
            ye = !!(e.flags & 131072)
        }
    else
        ye = !1,
        B && t.flags & 1048576 && $f(t, Ml, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        yl(e, t),
        e = t.pendingProps;
        var l = _n(t, ce.current);
        En(t, n),
        l = es(null, t, r, e, l, n);
        var i = ts();
        return t.flags |= 1,
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        we(r) ? (i = !0,
        Al(t)) : i = !1,
        t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
        Xa(t),
        l.updater = ui,
        t.stateNode = l,
        l._reactInternals = t,
        Fo(t, r, e, n),
        t = $o(null, t, r, !0, i, n)) : (t.tag = 0,
        B && i && Wa(t),
        de(null, t, l, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (yl(e, t),
            e = t.pendingProps,
            l = r._init,
            r = l(r._payload),
            t.type = r,
            l = t.tag = u0(r),
            e = Me(r, e),
            l) {
            case 0:
                t = Uo(null, t, r, e, n);
                break e;
            case 1:
                t = _u(null, t, r, e, n);
                break e;
            case 11:
                t = ju(null, t, r, e, n);
                break e;
            case 14:
                t = Pu(null, t, r, Me(r.type, e), n);
                break e
            }
            throw Error(N(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Me(r, l),
        Uo(e, t, r, l, n);
    case 1:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Me(r, l),
        _u(e, t, r, l, n);
    case 3:
        e: {
            if (wd(t),
            e === null)
                throw Error(N(387));
            r = t.pendingProps,
            i = t.memoizedState,
            l = i.element,
            Yf(e, t),
            Ul(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    l = Tn(Error(N(423)), t),
                    t = bu(e, t, r, n, l);
                    break e
                } else if (r !== l) {
                    l = Tn(Error(N(424)), t),
                    t = bu(e, t, r, n, l);
                    break e
                } else
                    for (Ne = Nt(t.stateNode.containerInfo.firstChild),
                    Ee = t,
                    B = !0,
                    De = null,
                    n = Hf(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (bn(),
                r === l) {
                    t = ot(e, t, n);
                    break e
                }
                de(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Gf(t),
        e === null && Ao(t),
        r = t.type,
        l = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        o = l.children,
        Oo(r, l) ? o = null : i !== null && Oo(r, i) && (t.flags |= 32),
        xd(e, t),
        de(e, t, o, n),
        t.child;
    case 6:
        return e === null && Ao(t),
        null;
    case 13:
        return kd(e, t, n);
    case 4:
        return Ka(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = On(t, null, r, n) : de(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Me(r, l),
        ju(e, t, r, l, n);
    case 7:
        return de(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return de(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return de(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            l = t.pendingProps,
            i = t.memoizedProps,
            o = l.value,
            D(Fl, r._currentValue),
            r._currentValue = o,
            i !== null)
                if (We(i.value, o)) {
                    if (i.children === l.children && !xe.current) {
                        t = ot(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var a = i.dependencies;
                        if (a !== null) {
                            o = i.child;
                            for (var s = a.firstContext; s !== null; ) {
                                if (s.context === r) {
                                    if (i.tag === 1) {
                                        s = nt(-1, n & -n),
                                        s.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var p = u.pending;
                                            p === null ? s.next = s : (s.next = p.next,
                                            p.next = s),
                                            u.pending = s
                                        }
                                    }
                                    i.lanes |= n,
                                    s = i.alternate,
                                    s !== null && (s.lanes |= n),
                                    Ro(i.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                s = s.next
                            }
                        } else if (i.tag === 10)
                            o = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (o = i.return,
                            o === null)
                                throw Error(N(341));
                            o.lanes |= n,
                            a = o.alternate,
                            a !== null && (a.lanes |= n),
                            Ro(o, n, t),
                            o = i.sibling
                        } else
                            o = i.child;
                        if (o !== null)
                            o.return = i;
                        else
                            for (o = i; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (i = o.sibling,
                                i !== null) {
                                    i.return = o.return,
                                    o = i;
                                    break
                                }
                                o = o.return
                            }
                        i = o
                    }
            de(e, t, l.children, n),
            t = t.child
        }
        return t;
    case 9:
        return l = t.type,
        r = t.pendingProps.children,
        En(t, n),
        l = ze(l),
        r = r(l),
        t.flags |= 1,
        de(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        l = Me(r, t.pendingProps),
        l = Me(r.type, l),
        Pu(e, t, r, l, n);
    case 15:
        return vd(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Me(r, l),
        yl(e, t),
        t.tag = 1,
        we(r) ? (e = !0,
        Al(t)) : e = !1,
        En(t, n),
        md(t, r, l),
        Fo(t, r, l, n),
        $o(null, t, r, !0, e, n);
    case 19:
        return Sd(e, t, n);
    case 22:
        return yd(e, t, n)
    }
    throw Error(N(156, t.tag))
}
;
function Fd(e, t) {
    return ff(e, t)
}
function s0(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ie(e, t, n, r) {
    return new s0(e,t,n,r)
}
function fs(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function u0(e) {
    if (typeof e == "function")
        return fs(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Oa)
            return 11;
        if (e === Ia)
            return 14
    }
    return 2
}
function Pt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ie(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function kl(e, t, n, r, l, i) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        fs(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case an:
            return Yt(n.children, l, i, t);
        case ba:
            o = 8,
            l |= 8;
            break;
        case ao:
            return e = Ie(12, n, t, l | 2),
            e.elementType = ao,
            e.lanes = i,
            e;
        case so:
            return e = Ie(13, n, t, l),
            e.elementType = so,
            e.lanes = i,
            e;
        case uo:
            return e = Ie(19, n, t, l),
            e.elementType = uo,
            e.lanes = i,
            e;
        case Yc:
            return di(n, l, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Hc:
                    o = 10;
                    break e;
                case Qc:
                    o = 9;
                    break e;
                case Oa:
                    o = 11;
                    break e;
                case Ia:
                    o = 14;
                    break e;
                case pt:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(N(130, e == null ? e : typeof e, ""))
        }
    return t = Ie(o, n, t, l),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function Yt(e, t, n, r) {
    return e = Ie(7, e, r, t),
    e.lanes = n,
    e
}
function di(e, t, n, r) {
    return e = Ie(22, e, r, t),
    e.elementType = Yc,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Zi(e, t, n) {
    return e = Ie(6, e, null, t),
    e.lanes = n,
    e
}
function Ji(e, t, n) {
    return t = Ie(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function c0(e, t, n, r, l) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Ti(0),
    this.expirationTimes = Ti(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Ti(0),
    this.identifierPrefix = r,
    this.onRecoverableError = l,
    this.mutableSourceEagerHydrationData = null
}
function ds(e, t, n, r, l, i, o, a, s) {
    return e = new c0(e,t,n,a,s),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = Ie(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Xa(i),
    e
}
function f0(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: on,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Dd(e) {
    if (!e)
        return Ot;
    e = e._reactInternals;
    e: {
        if (nn(e) !== e || e.tag !== 1)
            throw Error(N(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (we(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(N(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (we(n))
            return Df(e, n, t)
    }
    return t
}
function Ud(e, t, n, r, l, i, o, a, s) {
    return e = ds(n, r, !0, e, l, i, o, a, s),
    e.context = Dd(null),
    n = e.current,
    r = me(),
    l = jt(n),
    i = nt(r, l),
    i.callback = t ?? null,
    Et(n, i, l),
    e.current.lanes = l,
    Rr(e, l, r),
    ke(e, r),
    e
}
function pi(e, t, n, r) {
    var l = t.current
      , i = me()
      , o = jt(l);
    return n = Dd(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = nt(i, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Et(l, t, o),
    e !== null && ($e(e, l, o, i),
    hl(e, l, o)),
    o
}
function Gl(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Du(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function ps(e, t) {
    Du(e, t),
    (e = e.alternate) && Du(e, t)
}
function d0() {
    return null
}
var $d = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function ms(e) {
    this._internalRoot = e
}
mi.prototype.render = ms.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(N(409));
    pi(e, t, null, null)
}
;
mi.prototype.unmount = ms.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Jt(function() {
            pi(null, e, null, null)
        }),
        t[lt] = null
    }
}
;
function mi(e) {
    this._internalRoot = e
}
mi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = yf();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < ht.length && t !== 0 && t < ht[n].priority; n++)
            ;
        ht.splice(n, 0, e),
        n === 0 && wf(e)
    }
}
;
function hs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function hi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Uu() {}
function p0(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = Gl(o);
                i.call(u)
            }
        }
        var o = Ud(t, r, e, 0, null, !1, !1, "", Uu);
        return e._reactRootContainer = o,
        e[lt] = o.current,
        kr(e.nodeType === 8 ? e.parentNode : e),
        Jt(),
        o
    }
    for (; l = e.lastChild; )
        e.removeChild(l);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Gl(s);
            a.call(u)
        }
    }
    var s = ds(e, 0, !1, null, null, !1, !1, "", Uu);
    return e._reactRootContainer = s,
    e[lt] = s.current,
    kr(e.nodeType === 8 ? e.parentNode : e),
    Jt(function() {
        pi(t, s, n, r)
    }),
    s
}
function gi(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var a = l;
            l = function() {
                var s = Gl(o);
                a.call(s)
            }
        }
        pi(t, o, e, l)
    } else
        o = p0(n, t, e, l, r);
    return Gl(o)
}
gf = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = qn(t.pendingLanes);
            n !== 0 && (La(t, n | 1),
            ke(t, K()),
            !(M & 6) && (zn = K() + 500,
            Rt()))
        }
        break;
    case 13:
        Jt(function() {
            var r = it(e, 1);
            if (r !== null) {
                var l = me();
                $e(r, e, 1, l)
            }
        }),
        ps(e, 1)
    }
}
;
Aa = function(e) {
    if (e.tag === 13) {
        var t = it(e, 134217728);
        if (t !== null) {
            var n = me();
            $e(t, e, 134217728, n)
        }
        ps(e, 134217728)
    }
}
;
vf = function(e) {
    if (e.tag === 13) {
        var t = jt(e)
          , n = it(e, t);
        if (n !== null) {
            var r = me();
            $e(n, e, t, r)
        }
        ps(e, t)
    }
}
;
yf = function() {
    return F
}
;
xf = function(e, t) {
    var n = F;
    try {
        return F = e,
        t()
    } finally {
        F = n
    }
}
;
wo = function(e, t, n) {
    switch (t) {
    case "input":
        if (po(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var l = oi(r);
                    if (!l)
                        throw Error(N(90));
                    Xc(r),
                    po(r, l)
                }
            }
        }
        break;
    case "textarea":
        Zc(e, n);
        break;
    case "select":
        t = n.value,
        t != null && wn(e, !!n.multiple, t, !1)
    }
}
;
lf = ss;
of = Jt;
var m0 = {
    usingClientEntryPoint: !1,
    Events: [Fr, fn, oi, nf, rf, ss]
}
  , Kn = {
    findFiberByHostInstance: Wt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , h0 = {
    bundleType: Kn.bundleType,
    version: Kn.version,
    rendererPackageName: Kn.rendererPackageName,
    rendererConfig: Kn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ut.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = uf(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Kn.findFiberByHostInstance || d0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!al.isDisabled && al.supportsFiber)
        try {
            ni = al.inject(h0),
            Xe = al
        } catch {}
}
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = m0;
je.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!hs(t))
        throw Error(N(200));
    return f0(e, t, null, n)
}
;
je.createRoot = function(e, t) {
    if (!hs(e))
        throw Error(N(299));
    var n = !1
      , r = ""
      , l = $d;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    t = ds(e, 1, !1, null, null, n, !1, r, l),
    e[lt] = t.current,
    kr(e.nodeType === 8 ? e.parentNode : e),
    new ms(t)
}
;
je.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","),
        Error(N(268, e)));
    return e = uf(t),
    e = e === null ? null : e.stateNode,
    e
}
;
je.flushSync = function(e) {
    return Jt(e)
}
;
je.hydrate = function(e, t, n) {
    if (!hi(t))
        throw Error(N(200));
    return gi(null, e, t, !0, n)
}
;
je.hydrateRoot = function(e, t, n) {
    if (!hs(e))
        throw Error(N(405));
    var r = n != null && n.hydratedSources || null
      , l = !1
      , i = ""
      , o = $d;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = Ud(t, null, e, 1, n ?? null, l, !1, i, o),
    e[lt] = t.current,
    kr(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            l = n._getVersion,
            l = l(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new mi(t)
}
;
je.render = function(e, t, n) {
    if (!hi(t))
        throw Error(N(200));
    return gi(null, e, t, !1, n)
}
;
je.unmountComponentAtNode = function(e) {
    if (!hi(e))
        throw Error(N(40));
    return e._reactRootContainer ? (Jt(function() {
        gi(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[lt] = null
        })
    }),
    !0) : !1
}
;
je.unstable_batchedUpdates = ss;
je.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!hi(n))
        throw Error(N(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(N(38));
    return gi(e, t, n, !1, r)
}
;
je.version = "18.3.1-next-f1338f8080-20240426";
function Wd() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wd)
        } catch (e) {
            console.error(e)
        }
}
Wd(),
$c.exports = je;
var g0 = $c.exports, Bd, $u = g0;
Bd = $u.createRoot,
$u.hydrateRoot;
/**
 * @remix-run/router v1.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Or() {
    return Or = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Or.apply(this, arguments)
}
var xt;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(xt || (xt = {}));
const Wu = "popstate";
function v0(e) {
    e === void 0 && (e = {});
    function t(r, l) {
        let {pathname: i, search: o, hash: a} = r.location;
        return qo("", {
            pathname: i,
            search: o,
            hash: a
        }, l.state && l.state.usr || null, l.state && l.state.key || "default")
    }
    function n(r, l) {
        return typeof l == "string" ? l : Xl(l)
    }
    return x0(t, n, null, e)
}
function J(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Vd(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function y0() {
    return Math.random().toString(36).substr(2, 8)
}
function Bu(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function qo(e, t, n, r) {
    return n === void 0 && (n = null),
    Or({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Fn(t) : t, {
        state: n,
        key: t && t.key || r || y0()
    })
}
function Xl(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Fn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function x0(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: l=document.defaultView, v5Compat: i=!1} = r
      , o = l.history
      , a = xt.Pop
      , s = null
      , u = p();
    u == null && (u = 0,
    o.replaceState(Or({}, o.state, {
        idx: u
    }), ""));
    function p() {
        return (o.state || {
            idx: null
        }).idx
    }
    function d() {
        a = xt.Pop;
        let C = p()
          , m = C == null ? null : C - u;
        u = C,
        s && s({
            action: a,
            location: w.location,
            delta: m
        })
    }
    function h(C, m) {
        a = xt.Push;
        let f = qo(w.location, C, m);
        u = p() + 1;
        let g = Bu(f, u)
          , y = w.createHref(f);
        try {
            o.pushState(g, "", y)
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError")
                throw E;
            l.location.assign(y)
        }
        i && s && s({
            action: a,
            location: w.location,
            delta: 1
        })
    }
    function v(C, m) {
        a = xt.Replace;
        let f = qo(w.location, C, m);
        u = p();
        let g = Bu(f, u)
          , y = w.createHref(f);
        o.replaceState(g, "", y),
        i && s && s({
            action: a,
            location: w.location,
            delta: 0
        })
    }
    function x(C) {
        let m = l.location.origin !== "null" ? l.location.origin : l.location.href
          , f = typeof C == "string" ? C : Xl(C);
        return f = f.replace(/ $/, "%20"),
        J(m, "No window.location.(origin|href) available to create URL for href: " + f),
        new URL(f,m)
    }
    let w = {
        get action() {
            return a
        },
        get location() {
            return e(l, o)
        },
        listen(C) {
            if (s)
                throw new Error("A history only accepts one active listener");
            return l.addEventListener(Wu, d),
            s = C,
            () => {
                l.removeEventListener(Wu, d),
                s = null
            }
        },
        createHref(C) {
            return t(l, C)
        },
        createURL: x,
        encodeLocation(C) {
            let m = x(C);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: h,
        replace: v,
        go(C) {
            return o.go(C)
        }
    };
    return w
}
var Vu;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Vu || (Vu = {}));
function w0(e, t, n) {
    return n === void 0 && (n = "/"),
    k0(e, t, n, !1)
}
function k0(e, t, n, r) {
    let l = typeof t == "string" ? Fn(t) : t
      , i = gs(l.pathname || "/", n);
    if (i == null)
        return null;
    let o = Hd(e);
    S0(o);
    let a = null;
    for (let s = 0; a == null && s < o.length; ++s) {
        let u = z0(i);
        a = I0(o[s], u, r)
    }
    return a
}
function Hd(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let l = (i, o, a) => {
        let s = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: o,
            route: i
        };
        s.relativePath.startsWith("/") && (J(s.relativePath.startsWith(r), 'Absolute route path "' + s.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        s.relativePath = s.relativePath.slice(r.length));
        let u = _t([r, s.relativePath])
          , p = n.concat(s);
        i.children && i.children.length > 0 && (J(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Hd(i.children, t, p, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: b0(u, i.index),
            routesMeta: p
        })
    }
    ;
    return e.forEach( (i, o) => {
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?")))
            l(i, o);
        else
            for (let s of Qd(i.path))
                l(i, o, s)
    }
    ),
    t
}
function Qd(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , l = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return l ? [i, ""] : [i];
    let o = Qd(r.join("/"))
      , a = [];
    return a.push(...o.map(s => s === "" ? i : [i, s].join("/"))),
    l && a.push(...o),
    a.map(s => e.startsWith("/") && s === "" ? "/" : s)
}
function S0(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : O0(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const N0 = /^:[\w-]+$/
  , E0 = 3
  , C0 = 2
  , j0 = 1
  , P0 = 10
  , _0 = -2
  , Hu = e => e === "*";
function b0(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Hu) && (r += _0),
    t && (r += C0),
    n.filter(l => !Hu(l)).reduce( (l, i) => l + (N0.test(i) ? E0 : i === "" ? j0 : P0), r)
}
function O0(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function I0(e, t, n) {
    let {routesMeta: r} = e
      , l = {}
      , i = "/"
      , o = [];
    for (let a = 0; a < r.length; ++a) {
        let s = r[a]
          , u = a === r.length - 1
          , p = i === "/" ? t : t.slice(i.length) || "/"
          , d = Qu({
            path: s.relativePath,
            caseSensitive: s.caseSensitive,
            end: u
        }, p)
          , h = s.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = Qu({
            path: s.relativePath,
            caseSensitive: s.caseSensitive,
            end: !1
        }, p)),
        !d)
            return null;
        Object.assign(l, d.params),
        o.push({
            params: l,
            pathname: _t([i, d.pathname]),
            pathnameBase: M0(_t([i, d.pathnameBase])),
            route: h
        }),
        d.pathnameBase !== "/" && (i = _t([i, d.pathnameBase]))
    }
    return o
}
function Qu(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = T0(e.path, e.caseSensitive, e.end)
      , l = t.match(n);
    if (!l)
        return null;
    let i = l[0]
      , o = i.replace(/(.)\/+$/, "$1")
      , a = l.slice(1);
    return {
        params: r.reduce( (u, p, d) => {
            let {paramName: h, isOptional: v} = p;
            if (h === "*") {
                let w = a[d] || "";
                o = i.slice(0, i.length - w.length).replace(/(.)\/+$/, "$1")
            }
            const x = a[d];
            return v && !x ? u[h] = void 0 : u[h] = (x || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: o,
        pattern: e
    }
}
function T0(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Vd(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, s) => (r.push({
        paramName: a,
        isOptional: s != null
    }),
    s ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l,t ? void 0 : "i"), r]
}
function z0(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Vd(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function gs(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function L0(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: l=""} = typeof e == "string" ? Fn(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : A0(n, t) : t,
        search: F0(r),
        hash: D0(l)
    }
}
function A0(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(l => {
        l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function qi(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function R0(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function Yd(e, t) {
    let n = R0(e);
    return t ? n.map( (r, l) => l === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function Gd(e, t, n, r) {
    r === void 0 && (r = !1);
    let l;
    typeof e == "string" ? l = Fn(e) : (l = Or({}, e),
    J(!l.pathname || !l.pathname.includes("?"), qi("?", "pathname", "search", l)),
    J(!l.pathname || !l.pathname.includes("#"), qi("#", "pathname", "hash", l)),
    J(!l.search || !l.search.includes("#"), qi("#", "search", "hash", l)));
    let i = e === "" || l.pathname === "", o = i ? "/" : l.pathname, a;
    if (o == null)
        a = n;
    else {
        let d = t.length - 1;
        if (!r && o.startsWith("..")) {
            let h = o.split("/");
            for (; h[0] === ".."; )
                h.shift(),
                d -= 1;
            l.pathname = h.join("/")
        }
        a = d >= 0 ? t[d] : "/"
    }
    let s = L0(l, a)
      , u = o && o !== "/" && o.endsWith("/")
      , p = (i || o === ".") && n.endsWith("/");
    return !s.pathname.endsWith("/") && (u || p) && (s.pathname += "/"),
    s
}
const _t = e => e.join("/").replace(/\/\/+/g, "/")
  , M0 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , F0 = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , D0 = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function U0(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Xd = ["post", "put", "patch", "delete"];
new Set(Xd);
const $0 = ["get", ...Xd];
new Set($0);
/**
 * React Router v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ir() {
    return Ir = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ir.apply(this, arguments)
}
const vs = S.createContext(null)
  , W0 = S.createContext(null)
  , rn = S.createContext(null)
  , vi = S.createContext(null)
  , Mt = S.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Kd = S.createContext(null);
function B0(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    Ur() || J(!1);
    let {basename: r, navigator: l} = S.useContext(rn)
      , {hash: i, pathname: o, search: a} = Jd(e, {
        relative: n
    })
      , s = o;
    return r !== "/" && (s = o === "/" ? r : _t([r, o])),
    l.createHref({
        pathname: s,
        search: a,
        hash: i
    })
}
function Ur() {
    return S.useContext(vi) != null
}
function Dn() {
    return Ur() || J(!1),
    S.useContext(vi).location
}
function Zd(e) {
    S.useContext(rn).static || S.useLayoutEffect(e)
}
function ys() {
    let {isDataRoute: e} = S.useContext(Mt);
    return e ? r1() : V0()
}
function V0() {
    Ur() || J(!1);
    let e = S.useContext(vs)
      , {basename: t, future: n, navigator: r} = S.useContext(rn)
      , {matches: l} = S.useContext(Mt)
      , {pathname: i} = Dn()
      , o = JSON.stringify(Yd(l, n.v7_relativeSplatPath))
      , a = S.useRef(!1);
    return Zd( () => {
        a.current = !0
    }
    ),
    S.useCallback(function(u, p) {
        if (p === void 0 && (p = {}),
        !a.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let d = Gd(u, JSON.parse(o), i, p.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : _t([t, d.pathname])),
        (p.replace ? r.replace : r.push)(d, p.state, p)
    }, [t, r, o, i, e])
}
function H0() {
    let {matches: e} = S.useContext(Mt)
      , t = e[e.length - 1];
    return t ? t.params : {}
}
function Jd(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = S.useContext(rn)
      , {matches: l} = S.useContext(Mt)
      , {pathname: i} = Dn()
      , o = JSON.stringify(Yd(l, r.v7_relativeSplatPath));
    return S.useMemo( () => Gd(e, JSON.parse(o), i, n === "path"), [e, o, i, n])
}
function Q0(e, t) {
    return Y0(e, t)
}
function Y0(e, t, n, r) {
    Ur() || J(!1);
    let {navigator: l, static: i} = S.useContext(rn)
      , {matches: o} = S.useContext(Mt)
      , a = o[o.length - 1]
      , s = a ? a.params : {};
    a && a.pathname;
    let u = a ? a.pathnameBase : "/";
    a && a.route;
    let p = Dn(), d;
    if (t) {
        var h;
        let m = typeof t == "string" ? Fn(t) : t;
        u === "/" || (h = m.pathname) != null && h.startsWith(u) || J(!1),
        d = m
    } else
        d = p;
    let v = d.pathname || "/"
      , x = v;
    if (u !== "/") {
        let m = u.replace(/^\//, "").split("/");
        x = "/" + v.replace(/^\//, "").split("/").slice(m.length).join("/")
    }
    let w = !i && n && n.matches && n.matches.length > 0 ? n.matches : w0(e, {
        pathname: x
    })
      , C = J0(w && w.map(m => Object.assign({}, m, {
        params: Object.assign({}, s, m.params),
        pathname: _t([u, l.encodeLocation ? l.encodeLocation(m.pathname).pathname : m.pathname]),
        pathnameBase: m.pathnameBase === "/" ? u : _t([u, l.encodeLocation ? l.encodeLocation(m.pathnameBase).pathname : m.pathnameBase])
    })), o, n, r);
    return t && C ? S.createElement(vi.Provider, {
        value: {
            location: Ir({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: xt.Pop
        }
    }, C) : C
}
function G0() {
    let e = n1()
      , t = U0(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , l = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return S.createElement(S.Fragment, null, S.createElement("h2", null, "Unexpected Application Error!"), S.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? S.createElement("pre", {
        style: l
    }, n) : null, null)
}
const X0 = S.createElement(G0, null);
class K0 extends S.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? S.createElement(Mt.Provider, {
            value: this.props.routeContext
        }, S.createElement(Kd.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Z0(e) {
    let {routeContext: t, match: n, children: r} = e
      , l = S.useContext(vs);
    return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(Mt.Provider, {
        value: t
    }, r)
}
function J0(e, t, n, r) {
    var l;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let o = e
      , a = (l = n) == null ? void 0 : l.errors;
    if (a != null) {
        let p = o.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
        p >= 0 || J(!1),
        o = o.slice(0, Math.min(o.length, p + 1))
    }
    let s = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let p = 0; p < o.length; p++) {
            let d = o[p];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = p),
            d.route.id) {
                let {loaderData: h, errors: v} = n
                  , x = d.route.loader && h[d.route.id] === void 0 && (!v || v[d.route.id] === void 0);
                if (d.route.lazy || x) {
                    s = !0,
                    u >= 0 ? o = o.slice(0, u + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight( (p, d, h) => {
        let v, x = !1, w = null, C = null;
        n && (v = a && d.route.id ? a[d.route.id] : void 0,
        w = d.route.errorElement || X0,
        s && (u < 0 && h === 0 ? (x = !0,
        C = null) : u === h && (x = !0,
        C = d.route.hydrateFallbackElement || null)));
        let m = t.concat(o.slice(0, h + 1))
          , f = () => {
            let g;
            return v ? g = w : x ? g = C : d.route.Component ? g = S.createElement(d.route.Component, null) : d.route.element ? g = d.route.element : g = p,
            S.createElement(Z0, {
                match: d,
                routeContext: {
                    outlet: p,
                    matches: m,
                    isDataRoute: n != null
                },
                children: g
            })
        }
        ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0) ? S.createElement(K0, {
            location: n.location,
            revalidation: n.revalidation,
            component: w,
            error: v,
            children: f(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : f()
    }
    , null)
}
var qd = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(qd || {})
  , Kl = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Kl || {});
function q0(e) {
    let t = S.useContext(vs);
    return t || J(!1),
    t
}
function e1(e) {
    let t = S.useContext(W0);
    return t || J(!1),
    t
}
function t1(e) {
    let t = S.useContext(Mt);
    return t || J(!1),
    t
}
function ep(e) {
    let t = t1()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || J(!1),
    n.route.id
}
function n1() {
    var e;
    let t = S.useContext(Kd)
      , n = e1(Kl.UseRouteError)
      , r = ep(Kl.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function r1() {
    let {router: e} = q0(qd.UseNavigateStable)
      , t = ep(Kl.UseNavigateStable)
      , n = S.useRef(!1);
    return Zd( () => {
        n.current = !0
    }
    ),
    S.useCallback(function(l, i) {
        i === void 0 && (i = {}),
        n.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, Ir({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
function l1(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function Sl(e) {
    J(!1)
}
function i1(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: l=xt.Pop, navigator: i, static: o=!1, future: a} = e;
    Ur() && J(!1);
    let s = t.replace(/^\/*/, "/")
      , u = S.useMemo( () => ({
        basename: s,
        navigator: i,
        static: o,
        future: Ir({
            v7_relativeSplatPath: !1
        }, a)
    }), [s, a, i, o]);
    typeof r == "string" && (r = Fn(r));
    let {pathname: p="/", search: d="", hash: h="", state: v=null, key: x="default"} = r
      , w = S.useMemo( () => {
        let C = gs(p, s);
        return C == null ? null : {
            location: {
                pathname: C,
                search: d,
                hash: h,
                state: v,
                key: x
            },
            navigationType: l
        }
    }
    , [s, p, d, h, v, x, l]);
    return w == null ? null : S.createElement(rn.Provider, {
        value: u
    }, S.createElement(vi.Provider, {
        children: n,
        value: w
    }))
}
function o1(e) {
    let {children: t, location: n} = e;
    return Q0(ea(t), n)
}
new Promise( () => {}
);
function ea(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return S.Children.forEach(e, (r, l) => {
        if (!S.isValidElement(r))
            return;
        let i = [...t, l];
        if (r.type === S.Fragment) {
            n.push.apply(n, ea(r.props.children, i));
            return
        }
        r.type !== Sl && J(!1),
        !r.props.index || !r.props.children || J(!1);
        let o = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (o.children = ea(r.props.children, i)),
        n.push(o)
    }
    ),
    n
}
/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ta() {
    return ta = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ta.apply(this, arguments)
}
function a1(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), l, i;
    for (i = 0; i < r.length; i++)
        l = r[i],
        !(t.indexOf(l) >= 0) && (n[l] = e[l]);
    return n
}
function s1(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function u1(e, t) {
    return e.button === 0 && (!t || t === "_self") && !s1(e)
}
const c1 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , f1 = "6";
try {
    window.__reactRouterVersion = f1
} catch {}
const d1 = "startTransition"
  , Yu = im[d1];
function p1(e) {
    let {basename: t, children: n, future: r, window: l} = e
      , i = S.useRef();
    i.current == null && (i.current = v0({
        window: l,
        v5Compat: !0
    }));
    let o = i.current
      , [a,s] = S.useState({
        action: o.action,
        location: o.location
    })
      , {v7_startTransition: u} = r || {}
      , p = S.useCallback(d => {
        u && Yu ? Yu( () => s(d)) : s(d)
    }
    , [s, u]);
    return S.useLayoutEffect( () => o.listen(p), [o, p]),
    S.useEffect( () => l1(r), [r]),
    S.createElement(i1, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: o,
        future: r
    })
}
const m1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , h1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , pe = S.forwardRef(function(t, n) {
    let {onClick: r, relative: l, reloadDocument: i, replace: o, state: a, target: s, to: u, preventScrollReset: p, viewTransition: d} = t, h = a1(t, c1), {basename: v} = S.useContext(rn), x, w = !1;
    if (typeof u == "string" && h1.test(u) && (x = u,
    m1))
        try {
            let g = new URL(window.location.href)
              , y = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u)
              , E = gs(y.pathname, v);
            y.origin === g.origin && E != null ? u = E + y.search + y.hash : w = !0
        } catch {}
    let C = B0(u, {
        relative: l
    })
      , m = g1(u, {
        replace: o,
        state: a,
        target: s,
        preventScrollReset: p,
        relative: l,
        viewTransition: d
    });
    function f(g) {
        r && r(g),
        g.defaultPrevented || m(g)
    }
    return S.createElement("a", ta({}, h, {
        href: x || C,
        onClick: w || i ? r : f,
        ref: n,
        target: s
    }))
});
var Gu;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Gu || (Gu = {}));
var Xu;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Xu || (Xu = {}));
function g1(e, t) {
    let {target: n, replace: r, state: l, preventScrollReset: i, relative: o, viewTransition: a} = t === void 0 ? {} : t
      , s = ys()
      , u = Dn()
      , p = Jd(e, {
        relative: o
    });
    return S.useCallback(d => {
        if (u1(d, n)) {
            d.preventDefault();
            let h = r !== void 0 ? r : Xl(u) === Xl(p);
            s(e, {
                replace: h,
                state: l,
                preventScrollReset: i,
                relative: o,
                viewTransition: a
            })
        }
    }
    , [u, s, p, r, l, n, e, i, o, a])
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var v1 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y1 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , Ze = (e, t) => {
    const n = S.forwardRef( ({color: r="currentColor", size: l=24, strokeWidth: i=2, absoluteStrokeWidth: o, className: a="", children: s, ...u}, p) => S.createElement("svg", {
        ref: p,
        ...v1,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${y1(e)}`, a].join(" "),
        ...u
    }, [...t.map( ([d,h]) => S.createElement(d, h)), ...Array.isArray(s) ? s : [s]]));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tp = Ze("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x1 = Ze("Bot", [["path", {
    d: "M12 8V4H8",
    key: "hb8ula"
}], ["rect", {
    width: "16",
    height: "12",
    x: "4",
    y: "8",
    rx: "2",
    key: "enze0r"
}], ["path", {
    d: "M2 14h2",
    key: "vft8re"
}], ["path", {
    d: "M20 14h2",
    key: "4cs60a"
}], ["path", {
    d: "M15 13v2",
    key: "1xurst"
}], ["path", {
    d: "M9 13v2",
    key: "rq6x2g"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w1 = Ze("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k1 = Ze("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S1 = Ze("Home", [["path", {
    d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "y5dka4"
}], ["polyline", {
    points: "9 22 9 12 15 12 15 22",
    key: "e2us08"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N1 = Ze("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const na = Ze("Play", [["polygon", {
    points: "5 3 19 12 5 21 5 3",
    key: "191637"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E1 = Ze("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C1 = Ze("ShoppingCart", [["circle", {
    cx: "8",
    cy: "21",
    r: "1",
    key: "jimo8o"
}], ["circle", {
    cx: "19",
    cy: "21",
    r: "1",
    key: "13723u"
}], ["path", {
    d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
    key: "9zh506"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yi = Ze("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , j1 = () => {
    const [e,t] = S.useState(!1)
      , n = r => {
        r.preventDefault();
        const l = document.querySelector("#products");
        l && l.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return c.jsxs("nav", {
        className: "fixed w-full z-40 top-0 transition-[top] duration-300",
        style: {
            top: "var(--announcement-height, 0px)"
        },
        children: [c.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-transparent"
        }), c.jsxs("div", {
            className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [c.jsxs("div", {
                className: "flex items-center justify-between h-20",
                children: [c.jsxs("div", {
                    className: "flex items-center",
                    children: [c.jsx(pe, {
                        to: "/",
                        children: c.jsx("img", {
                            src: "https://i.imgur.com/W6WOnwB.png",
                            alt: "KXZ Project™",
                            className: "h-16 w-12 object-cover rounded-lg"
                        })
                    }), c.jsx(pe, {
                        to: "/",
                        className: "ml-3 text-xl font-bold tracking-tight",
                        children: "KXZ Project"
                    })]
                }), c.jsx("div", {
                    className: "hidden lg:flex items-center space-x-8",
                    children: c.jsxs("div", {
                        className: "flex items-center space-x-8",
                        children: [c.jsx(pe, {
                            to: "/",
                            className: "text-white/90 hover:text-white transition-colors",
                            children: "Home"
                        }), c.jsx("button", {
                            onClick: n,
                            className: "text-white/90 hover:text-white transition-colors",
                            children: "Products"
                        }), c.jsx(pe, {
                            to: "/status",
                            className: "text-white/90 hover:text-white transition-colors",
                            children: "Status"
                        }), c.jsx(pe, {
                            to: "/",
                            className: "text-white/90 hover:text-white transition-colors",
                            children: "Support"
                        })]
                    })
                }), c.jsx("button", {
                    onClick: () => t(!e),
                    className: "lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors",
                    children: c.jsx(N1, {
                        className: "h-6 w-6"
                    })
                })]
            }), e && c.jsx("div", {
                className: "lg:hidden absolute top-full left-0 right-0 bg-zinc-900/95 backdrop-blur-sm border-t border-b border-white/10",
                children: c.jsxs("div", {
                    className: "px-4 py-6 space-y-4",
                    children: [c.jsx(pe, {
                        to: "/",
                        className: "block py-2 text-white/90 hover:text-white transition-colors",
                        children: "Home"
                    }), c.jsx("button", {
                        onClick: n,
                        className: "block py-2 text-white/90 hover:text-white transition-colors w-full text-left",
                        children: "Products"
                    }), c.jsx(pe, {
                        to: "/status",
                        className: "block py-2 text-white/90 hover:text-white transition-colors",
                        children: "Status"
                    }), c.jsx(pe, {
                        to: "/",
                        className: "block py-2 text-white/90 hover:text-white transition-colors",
                        children: "Support"
                    })]
                })
            })]
        })]
    })
}
  , P1 = () => c.jsxs("footer", {
    className: "relative bg-[#18181B] py-12",
    children: [c.jsx("div", {
        className: "absolute inset-0 overflow-hidden",
        children: c.jsx("div", {
            className: "absolute inset-0 opacity-[0.15]",
            style: {
                backgroundImage: `
              radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, white 1px, transparent 1px)
            `,
                backgroundSize: "50px 50px",
                animation: "twinkle 4s infinite"
            }
        })
    }), c.jsx("div", {
        className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
    }), c.jsx("div", {
        className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: c.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
            children: [c.jsxs("div", {
                className: "flex flex-col items-center space-y-4",
                children: [c.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [c.jsx("img", {
                        src: "https://i.imgur.com/W6WOnwB.png",
                        alt: "KXZ Project™",
                        className: "h-8 w-6 object-cover rounded"
                    }), c.jsx("span", {
                        className: "text-lg font-bold tracking-tight",
                        children: "KXZ Project"
                    })]
                }), c.jsx("p", {
                    className: "text-sm text-gray-400",
                    children: "© 2025 KXZ Project. All rights reserved."
                }), c.jsx("p", {
                    className: "text-xs text-gray-500",
                    children: "Powered by Kxz"
                })]
            }), c.jsxs("div", {
                className: "text-center",
                children: [c.jsx("h3", {
                    className: "text-lg font-semibold mb-4",
                    children: "Navigation"
                }), c.jsxs("ul", {
                    className: "space-y-2",
                    children: [c.jsx("li", {
                        children: c.jsx(pe, {
                            to: "/",
                            className: "text-gray-400 hover:text-white transition-colors",
                            children: "Home"
                        })
                    }), c.jsx("li", {
                        children: c.jsx(pe, {
                            to: "/",
                            className: "text-gray-400 hover:text-white transition-colors",
                            children: "Products"
                        })
                    }), c.jsx("li", {
                        children: c.jsx(pe, {
                            to: "/status",
                            className: "text-gray-400 hover:text-white transition-colors",
                            children: "Status"
                        })
                    }), c.jsx("li", {
                        children: c.jsx(pe, {
                            to: "/",
                            className: "text-gray-400 hover:text-white transition-colors",
                            children: "Terms"
                        })
                    })]
                })]
            }), c.jsxs("div", {
                className: "text-center",
                children: [c.jsx("h3", {
                    className: "text-lg font-semibold mb-4",
                    children: "Socials"
                }), c.jsxs("ul", {
                    className: "space-y-2",
                    children: [c.jsx("li", {
                        children: c.jsx("a", {
                            href: "#",
                            className: "text-gray-400 hover:text-white transition-colors",
                            children: "Discord"
                        })
                    }), c.jsx("li", {
                        children: c.jsx("a", {
                            href: "#",
                            className: "text-gray-400 hover:text-white transition-colors",
                            children: "YouTube"
                        })
                    }), c.jsx("li", {
                        children: c.jsx("a", {
                            href: "#",
                            className: "text-gray-400 hover:text-white transition-colors",
                            children: "TikTok"
                        })
                    })]
                })]
            })]
        })
    })]
})
  , _1 = ({onClose: e}) => c.jsxs("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center",
    children: [c.jsx("div", {
        className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
        onClick: e
    }), c.jsx("div", {
        className: "relative z-10 w-full max-w-5xl mx-4",
        children: c.jsx("div", {
            className: "bg-zinc-900 rounded-lg shadow-2xl overflow-hidden",
            children: c.jsxs("div", {
                className: "relative aspect-video",
                children: [c.jsx("button", {
                    onClick: e,
                    className: "absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/75 text-white/75 hover:text-white transition-colors",
                    children: c.jsx(yi, {
                        className: "h-6 w-6"
                    })
                }), c.jsx("iframe", {
                    src: "https://player.vimeo.com/video/1052679714?h=a46da87f58&autoplay=1&byline=0&title=0",
                    className: "w-full h-full",
                    frameBorder: "0",
                    allow: "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media",
                    allowFullScreen: !0
                })]
            })
        })
    })]
})
  , b1 = () => {
    const [e,t] = S.useState(!1);
    return c.jsxs(c.Fragment, {
        children: [c.jsxs("div", {
            className: "relative h-[85vh] overflow-hidden",
            children: [c.jsx("div", {
                className: "absolute inset-0 w-full h-full",
                children: c.jsx("iframe", {
                    src: "https://player.vimeo.com/video/1052679714?h=a46da87f58&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1",
                    className: "w-full h-full scale-150 object-cover opacity-60",
                    frameBorder: "0",
                    allow: "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media",
                    allowFullScreen: !0
                })
            }), c.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"
            }), c.jsx("div", {
                className: "relative z-20 h-full",
                children: c.jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center",
                    children: [c.jsxs("div", {
                        className: "w-full lg:w-3/5 pt-20 space-y-8",
                        children: [c.jsxs("div", {
                            className: "inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-400/30 bg-blue-400/10",
                            children: [c.jsx("span", {
                                className: "text-blue-400 text-sm font-medium",
                                children: "New Release"
                            }), c.jsx("span", {
                                className: "w-2 h-2 rounded-full bg-blue-400 animate-pulse"
                            })]
                        }), c.jsxs("h1", {
                            className: "text-6xl lg:text-7xl font-bold leading-tight tracking-tight",
                            children: ["We ", c.jsx("span", {
                                className: "text-blue-400",
                                children: "provide"
                            }), c.jsx("br", {}), "what people ", c.jsx("span", {
                                className: "text-blue-400",
                                children: "need."
                            })]
                        }), c.jsx("p", {
                            className: "text-xl text-gray-300 max-w-lg",
                            children: "Our products guarantee to change the way you play for the better. Experience the next level of gaming enhancement."
                        }), c.jsxs("div", {
                            className: "flex flex-col sm:flex-row gap-4",
                            children: [c.jsxs("button", {
                                className: "group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-md font-medium flex items-center justify-center space-x-2 transition-all",
                                children: [c.jsx("span", {
                                    children: "Explore Our Offer"
                                }), c.jsx(tp, {
                                    className: "h-5 w-5 group-hover:translate-x-1 transition-transform"
                                })]
                            }), c.jsxs("button", {
                                onClick: () => t(!0),
                                className: "group text-blue-400 hover:text-blue-300 px-8 py-4 rounded-md flex items-center justify-center space-x-2 transition-colors border border-blue-400/20 hover:border-blue-400/40",
                                children: [c.jsx(na, {
                                    className: "h-5 w-5"
                                }), c.jsx("span", {
                                    children: "How BlueWing Works"
                                })]
                            })]
                        }), c.jsxs("div", {
                            className: "flex items-center space-x-4 text-sm text-gray-400",
                            children: [c.jsx("div", {
                                className: "flex -space-x-2",
                                children: [1, 2, 3, 4].map(n => c.jsx("div", {
                                    className: "w-8 h-8 rounded-full border-2 border-zinc-900 bg-zinc-800"
                                }, n))
                            }), c.jsxs("p", {
                                children: ["Join ", c.jsx("span", {
                                    className: "text-blue-400 font-medium",
                                    children: "2,000+"
                                }), " satisfied customers"]
                            })]
                        })]
                    }), c.jsx("div", {
                        className: "absolute right-0 bottom-0 w-[45%] h-[90%] hidden lg:block",
                        children: c.jsx("img", {
                            src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6174cd1a-f614-4c1e-9d75-4997060b6156/ddrsqbl-eb74072b-24d1-4fcf-8981-8526538e676b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYxNzRjZDFhLWY2MTQtNGMxZS05ZDc1LTQ5OTcwNjBiNjE1NlwvZGRyc3FibC1lYjc0MDcyYi0yNGQxLTRmY2YtODk4MS04NTI2NTM4ZTY3NmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XE0tgzITQOCQo38R05ZFj_RGaVYSEmx5hXh2_l4BJmY",
                            alt: "Character",
                            className: "h-full w-full object-contain object-right-bottom drop-shadow-[0_0_25px_rgba(59,130,246,0.5)] filter brightness-110"
                        })
                    })]
                })
            }), c.jsx("div", {
                className: "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            })]
        }), e && c.jsx(_1, {
            onClose: () => t(!1)
        })]
    })
}
;
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function O1(e, t, n) {
    return (t = T1(t))in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function Ku(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(l) {
            return Object.getOwnPropertyDescriptor(e, l).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Ku(Object(n), !0).forEach(function(r) {
            O1(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ku(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function I1(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function T1(e) {
    var t = I1(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
const Zu = () => {}
;
let xs = {}
  , np = {}
  , rp = null
  , lp = {
    mark: Zu,
    measure: Zu
};
try {
    typeof window < "u" && (xs = window),
    typeof document < "u" && (np = document),
    typeof MutationObserver < "u" && (rp = MutationObserver),
    typeof performance < "u" && (lp = performance)
} catch {}
const {userAgent: Ju=""} = xs.navigator || {}
  , It = xs
  , W = np
  , qu = rp
  , sl = lp;
It.document;
const ct = !!W.documentElement && !!W.head && typeof W.addEventListener == "function" && typeof W.createElement == "function"
  , ip = ~Ju.indexOf("MSIE") || ~Ju.indexOf("Trident/");
var z1 = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/
  , L1 = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i
  , op = {
    classic: {
        fa: "solid",
        fas: "solid",
        "fa-solid": "solid",
        far: "regular",
        "fa-regular": "regular",
        fal: "light",
        "fa-light": "light",
        fat: "thin",
        "fa-thin": "thin",
        fab: "brands",
        "fa-brands": "brands"
    },
    duotone: {
        fa: "solid",
        fad: "solid",
        "fa-solid": "solid",
        "fa-duotone": "solid",
        fadr: "regular",
        "fa-regular": "regular",
        fadl: "light",
        "fa-light": "light",
        fadt: "thin",
        "fa-thin": "thin"
    },
    sharp: {
        fa: "solid",
        fass: "solid",
        "fa-solid": "solid",
        fasr: "regular",
        "fa-regular": "regular",
        fasl: "light",
        "fa-light": "light",
        fast: "thin",
        "fa-thin": "thin"
    },
    "sharp-duotone": {
        fa: "solid",
        fasds: "solid",
        "fa-solid": "solid",
        fasdr: "regular",
        "fa-regular": "regular",
        fasdl: "light",
        "fa-light": "light",
        fasdt: "thin",
        "fa-thin": "thin"
    }
}
  , A1 = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
}
  , ap = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"]
  , fe = "classic"
  , xi = "duotone"
  , R1 = "sharp"
  , M1 = "sharp-duotone"
  , sp = [fe, xi, R1, M1]
  , F1 = {
    classic: {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat"
    },
    duotone: {
        900: "fad",
        400: "fadr",
        300: "fadl",
        100: "fadt"
    },
    sharp: {
        900: "fass",
        400: "fasr",
        300: "fasl",
        100: "fast"
    },
    "sharp-duotone": {
        900: "fasds",
        400: "fasdr",
        300: "fasdl",
        100: "fasdt"
    }
}
  , D1 = {
    "Font Awesome 6 Free": {
        900: "fas",
        400: "far"
    },
    "Font Awesome 6 Pro": {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat"
    },
    "Font Awesome 6 Brands": {
        400: "fab",
        normal: "fab"
    },
    "Font Awesome 6 Duotone": {
        900: "fad",
        400: "fadr",
        normal: "fadr",
        300: "fadl",
        100: "fadt"
    },
    "Font Awesome 6 Sharp": {
        900: "fass",
        400: "fasr",
        normal: "fasr",
        300: "fasl",
        100: "fast"
    },
    "Font Awesome 6 Sharp Duotone": {
        900: "fasds",
        400: "fasdr",
        normal: "fasdr",
        300: "fasdl",
        100: "fasdt"
    }
}
  , U1 = new Map([["classic", {
    defaultShortPrefixId: "fas",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin", "brands"],
    futureStyleIds: [],
    defaultFontWeight: 900
}], ["sharp", {
    defaultShortPrefixId: "fass",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
}], ["duotone", {
    defaultShortPrefixId: "fad",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
}], ["sharp-duotone", {
    defaultShortPrefixId: "fasds",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
}]])
  , $1 = {
    classic: {
        solid: "fas",
        regular: "far",
        light: "fal",
        thin: "fat",
        brands: "fab"
    },
    duotone: {
        solid: "fad",
        regular: "fadr",
        light: "fadl",
        thin: "fadt"
    },
    sharp: {
        solid: "fass",
        regular: "fasr",
        light: "fasl",
        thin: "fast"
    },
    "sharp-duotone": {
        solid: "fasds",
        regular: "fasdr",
        light: "fasdl",
        thin: "fasdt"
    }
}
  , W1 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"]
  , ec = {
    kit: {
        fak: "kit",
        "fa-kit": "kit"
    },
    "kit-duotone": {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
    }
}
  , B1 = ["kit"]
  , V1 = {
    kit: {
        "fa-kit": "fak"
    },
    "kit-duotone": {
        "fa-kit-duotone": "fakd"
    }
}
  , H1 = ["fak", "fakd"]
  , Q1 = {
    kit: {
        fak: "fa-kit"
    },
    "kit-duotone": {
        fakd: "fa-kit-duotone"
    }
}
  , tc = {
    kit: {
        kit: "fak"
    },
    "kit-duotone": {
        "kit-duotone": "fakd"
    }
}
  , ul = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
}
  , Y1 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"]
  , G1 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"]
  , X1 = {
    "Font Awesome Kit": {
        400: "fak",
        normal: "fak"
    },
    "Font Awesome Kit Duotone": {
        400: "fakd",
        normal: "fakd"
    }
}
  , K1 = {
    classic: {
        "fa-brands": "fab",
        "fa-duotone": "fad",
        "fa-light": "fal",
        "fa-regular": "far",
        "fa-solid": "fas",
        "fa-thin": "fat"
    },
    duotone: {
        "fa-regular": "fadr",
        "fa-light": "fadl",
        "fa-thin": "fadt"
    },
    sharp: {
        "fa-solid": "fass",
        "fa-regular": "fasr",
        "fa-light": "fasl",
        "fa-thin": "fast"
    },
    "sharp-duotone": {
        "fa-solid": "fasds",
        "fa-regular": "fasdr",
        "fa-light": "fasdl",
        "fa-thin": "fasdt"
    }
}
  , Z1 = {
    classic: ["fas", "far", "fal", "fat", "fad"],
    duotone: ["fadr", "fadl", "fadt"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}
  , ra = {
    classic: {
        fab: "fa-brands",
        fad: "fa-duotone",
        fal: "fa-light",
        far: "fa-regular",
        fas: "fa-solid",
        fat: "fa-thin"
    },
    duotone: {
        fadr: "fa-regular",
        fadl: "fa-light",
        fadt: "fa-thin"
    },
    sharp: {
        fass: "fa-solid",
        fasr: "fa-regular",
        fasl: "fa-light",
        fast: "fa-thin"
    },
    "sharp-duotone": {
        fasds: "fa-solid",
        fasdr: "fa-regular",
        fasdl: "fa-light",
        fasdt: "fa-thin"
    }
}
  , J1 = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"]
  , la = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Y1, ...J1]
  , q1 = ["solid", "regular", "light", "thin", "duotone", "brands"]
  , up = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  , eg = up.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
  , tg = [...Object.keys(Z1), ...q1, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", ul.GROUP, ul.SWAP_OPACITY, ul.PRIMARY, ul.SECONDARY].concat(up.map(e => "".concat(e, "x"))).concat(eg.map(e => "w-".concat(e)))
  , ng = {
    "Font Awesome 5 Free": {
        900: "fas",
        400: "far"
    },
    "Font Awesome 5 Pro": {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal"
    },
    "Font Awesome 5 Brands": {
        400: "fab",
        normal: "fab"
    },
    "Font Awesome 5 Duotone": {
        900: "fad"
    }
};
const at = "___FONT_AWESOME___"
  , ia = 16
  , cp = "fa"
  , fp = "svg-inline--fa"
  , qt = "data-fa-i2svg"
  , oa = "data-fa-pseudo-element"
  , rg = "data-fa-pseudo-element-pending"
  , ws = "data-prefix"
  , ks = "data-icon"
  , nc = "fontawesome-i2svg"
  , lg = "async"
  , ig = ["HTML", "HEAD", "STYLE", "SCRIPT"]
  , dp = ( () => {
    try {
        return !0
    } catch {
        return !1
    }
}
)();
function $r(e) {
    return new Proxy(e,{
        get(t, n) {
            return n in t ? t[n] : t[fe]
        }
    })
}
const pp = k({}, op);
pp[fe] = k(k(k(k({}, {
    "fa-duotone": "duotone"
}), op[fe]), ec.kit), ec["kit-duotone"]);
const og = $r(pp)
  , aa = k({}, $1);
aa[fe] = k(k(k(k({}, {
    duotone: "fad"
}), aa[fe]), tc.kit), tc["kit-duotone"]);
const rc = $r(aa)
  , sa = k({}, ra);
sa[fe] = k(k({}, sa[fe]), Q1.kit);
const Ss = $r(sa)
  , ua = k({}, K1);
ua[fe] = k(k({}, ua[fe]), V1.kit);
$r(ua);
const ag = z1
  , mp = "fa-layers-text"
  , sg = L1
  , ug = k({}, F1);
$r(ug);
const cg = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"]
  , eo = A1
  , fg = [...B1, ...tg]
  , fr = It.FontAwesomeConfig || {};
function dg(e) {
    var t = W.querySelector("script[" + e + "]");
    if (t)
        return t.getAttribute(e)
}
function pg(e) {
    return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e
}
W && typeof W.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach(t => {
    let[n,r] = t;
    const l = pg(dg(n));
    l != null && (fr[r] = l)
}
);
const hp = {
    styleDefault: "solid",
    familyDefault: fe,
    cssPrefix: cp,
    replacementClass: fp,
    autoReplaceSvg: !0,
    autoAddCss: !0,
    autoA11y: !0,
    searchPseudoElements: !1,
    observeMutations: !0,
    mutateApproach: "async",
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0
};
fr.familyPrefix && (fr.cssPrefix = fr.familyPrefix);
const Ln = k(k({}, hp), fr);
Ln.autoReplaceSvg || (Ln.observeMutations = !1);
const O = {};
Object.keys(hp).forEach(e => {
    Object.defineProperty(O, e, {
        enumerable: !0,
        set: function(t) {
            Ln[e] = t,
            dr.forEach(n => n(O))
        },
        get: function() {
            return Ln[e]
        }
    })
}
);
Object.defineProperty(O, "familyPrefix", {
    enumerable: !0,
    set: function(e) {
        Ln.cssPrefix = e,
        dr.forEach(t => t(O))
    },
    get: function() {
        return Ln.cssPrefix
    }
});
It.FontAwesomeConfig = O;
const dr = [];
function mg(e) {
    return dr.push(e),
    () => {
        dr.splice(dr.indexOf(e), 1)
    }
}
const dt = ia
  , Ye = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: !1,
    flipY: !1
};
function hg(e) {
    if (!e || !ct)
        return;
    const t = W.createElement("style");
    t.setAttribute("type", "text/css"),
    t.innerHTML = e;
    const n = W.head.childNodes;
    let r = null;
    for (let l = n.length - 1; l > -1; l--) {
        const i = n[l]
          , o = (i.tagName || "").toUpperCase();
        ["STYLE", "LINK"].indexOf(o) > -1 && (r = i)
    }
    return W.head.insertBefore(t, r),
    e
}
const gg = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Tr() {
    let e = 12
      , t = "";
    for (; e-- > 0; )
        t += gg[Math.random() * 62 | 0];
    return t
}
function Un(e) {
    const t = [];
    for (let n = (e || []).length >>> 0; n--; )
        t[n] = e[n];
    return t
}
function Ns(e) {
    return e.classList ? Un(e.classList) : (e.getAttribute("class") || "").split(" ").filter(t => t)
}
function gp(e) {
    return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
function vg(e) {
    return Object.keys(e || {}).reduce( (t, n) => t + "".concat(n, '="').concat(gp(e[n]), '" '), "").trim()
}
function wi(e) {
    return Object.keys(e || {}).reduce( (t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "")
}
function Es(e) {
    return e.size !== Ye.size || e.x !== Ye.x || e.y !== Ye.y || e.rotate !== Ye.rotate || e.flipX || e.flipY
}
function yg(e) {
    let {transform: t, containerWidth: n, iconWidth: r} = e;
    const l = {
        transform: "translate(".concat(n / 2, " 256)")
    }
      , i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") ")
      , o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") ")
      , a = "rotate(".concat(t.rotate, " 0 0)")
      , s = {
        transform: "".concat(i, " ").concat(o, " ").concat(a)
    }
      , u = {
        transform: "translate(".concat(r / 2 * -1, " -256)")
    };
    return {
        outer: l,
        inner: s,
        path: u
    }
}
function xg(e) {
    let {transform: t, width: n=ia, height: r=ia, startCentered: l=!1} = e
      , i = "";
    return l && ip ? i += "translate(".concat(t.x / dt - n / 2, "em, ").concat(t.y / dt - r / 2, "em) ") : l ? i += "translate(calc(-50% + ".concat(t.x / dt, "em), calc(-50% + ").concat(t.y / dt, "em)) ") : i += "translate(".concat(t.x / dt, "em, ").concat(t.y / dt, "em) "),
    i += "scale(".concat(t.size / dt * (t.flipX ? -1 : 1), ", ").concat(t.size / dt * (t.flipY ? -1 : 1), ") "),
    i += "rotate(".concat(t.rotate, "deg) "),
    i
}
var wg = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function vp() {
    const e = cp
      , t = fp
      , n = O.cssPrefix
      , r = O.replacementClass;
    let l = wg;
    if (n !== e || r !== t) {
        const i = new RegExp("\\.".concat(e, "\\-"),"g")
          , o = new RegExp("\\--".concat(e, "\\-"),"g")
          , a = new RegExp("\\.".concat(t),"g");
        l = l.replace(i, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(a, ".".concat(r))
    }
    return l
}
let lc = !1;
function to() {
    O.autoAddCss && !lc && (hg(vp()),
    lc = !0)
}
var kg = {
    mixout() {
        return {
            dom: {
                css: vp,
                insertCss: to
            }
        }
    },
    hooks() {
        return {
            beforeDOMElementCreation() {
                to()
            },
            beforeI2svg() {
                to()
            }
        }
    }
};
const st = It || {};
st[at] || (st[at] = {});
st[at].styles || (st[at].styles = {});
st[at].hooks || (st[at].hooks = {});
st[at].shims || (st[at].shims = []);
var Ge = st[at];
const yp = []
  , xp = function() {
    W.removeEventListener("DOMContentLoaded", xp),
    Zl = 1,
    yp.map(e => e())
};
let Zl = !1;
ct && (Zl = (W.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(W.readyState),
Zl || W.addEventListener("DOMContentLoaded", xp));
function Sg(e) {
    ct && (Zl ? setTimeout(e, 0) : yp.push(e))
}
function Wr(e) {
    const {tag: t, attributes: n={}, children: r=[]} = e;
    return typeof e == "string" ? gp(e) : "<".concat(t, " ").concat(vg(n), ">").concat(r.map(Wr).join(""), "</").concat(t, ">")
}
function ic(e, t, n) {
    if (e && e[t] && e[t][n])
        return {
            prefix: t,
            iconName: n,
            icon: e[t][n]
        }
}
var no = function(t, n, r, l) {
    var i = Object.keys(t), o = i.length, a = n, s, u, p;
    for (r === void 0 ? (s = 1,
    p = t[i[0]]) : (s = 0,
    p = r); s < o; s++)
        u = i[s],
        p = a(p, t[u], u, t);
    return p
};
function Ng(e) {
    const t = [];
    let n = 0;
    const r = e.length;
    for (; n < r; ) {
        const l = e.charCodeAt(n++);
        if (l >= 55296 && l <= 56319 && n < r) {
            const i = e.charCodeAt(n++);
            (i & 64512) == 56320 ? t.push(((l & 1023) << 10) + (i & 1023) + 65536) : (t.push(l),
            n--)
        } else
            t.push(l)
    }
    return t
}
function ca(e) {
    const t = Ng(e);
    return t.length === 1 ? t[0].toString(16) : null
}
function Eg(e, t) {
    const n = e.length;
    let r = e.charCodeAt(t), l;
    return r >= 55296 && r <= 56319 && n > t + 1 && (l = e.charCodeAt(t + 1),
    l >= 56320 && l <= 57343) ? (r - 55296) * 1024 + l - 56320 + 65536 : r
}
function oc(e) {
    return Object.keys(e).reduce( (t, n) => {
        const r = e[n];
        return !!r.icon ? t[r.iconName] = r.icon : t[n] = r,
        t
    }
    , {})
}
function fa(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const {skipHooks: r=!1} = n
      , l = oc(t);
    typeof Ge.hooks.addPack == "function" && !r ? Ge.hooks.addPack(e, oc(t)) : Ge.styles[e] = k(k({}, Ge.styles[e] || {}), l),
    e === "fas" && fa("fa", t)
}
const {styles: zr, shims: Cg} = Ge
  , wp = Object.keys(Ss)
  , jg = wp.reduce( (e, t) => (e[t] = Object.keys(Ss[t]),
e), {});
let Cs = null
  , kp = {}
  , Sp = {}
  , Np = {}
  , Ep = {}
  , Cp = {};
function Pg(e) {
    return ~fg.indexOf(e)
}
function _g(e, t) {
    const n = t.split("-")
      , r = n[0]
      , l = n.slice(1).join("-");
    return r === e && l !== "" && !Pg(l) ? l : null
}
const jp = () => {
    const e = r => no(zr, (l, i, o) => (l[o] = no(i, r, {}),
    l), {});
    kp = e( (r, l, i) => (l[3] && (r[l[3]] = i),
    l[2] && l[2].filter(a => typeof a == "number").forEach(a => {
        r[a.toString(16)] = i
    }
    ),
    r)),
    Sp = e( (r, l, i) => (r[i] = i,
    l[2] && l[2].filter(a => typeof a == "string").forEach(a => {
        r[a] = i
    }
    ),
    r)),
    Cp = e( (r, l, i) => {
        const o = l[2];
        return r[i] = i,
        o.forEach(a => {
            r[a] = i
        }
        ),
        r
    }
    );
    const t = "far"in zr || O.autoFetchSvg
      , n = no(Cg, (r, l) => {
        const i = l[0];
        let o = l[1];
        const a = l[2];
        return o === "far" && !t && (o = "fas"),
        typeof i == "string" && (r.names[i] = {
            prefix: o,
            iconName: a
        }),
        typeof i == "number" && (r.unicodes[i.toString(16)] = {
            prefix: o,
            iconName: a
        }),
        r
    }
    , {
        names: {},
        unicodes: {}
    });
    Np = n.names,
    Ep = n.unicodes,
    Cs = ki(O.styleDefault, {
        family: O.familyDefault
    })
}
;
mg(e => {
    Cs = ki(e.styleDefault, {
        family: O.familyDefault
    })
}
);
jp();
function js(e, t) {
    return (kp[e] || {})[t]
}
function bg(e, t) {
    return (Sp[e] || {})[t]
}
function Ht(e, t) {
    return (Cp[e] || {})[t]
}
function Pp(e) {
    return Np[e] || {
        prefix: null,
        iconName: null
    }
}
function Og(e) {
    const t = Ep[e]
      , n = js("fas", e);
    return t || (n ? {
        prefix: "fas",
        iconName: n
    } : null) || {
        prefix: null,
        iconName: null
    }
}
function Tt() {
    return Cs
}
const _p = () => ({
    prefix: null,
    iconName: null,
    rest: []
});
function Ig(e) {
    let t = fe;
    const n = wp.reduce( (r, l) => (r[l] = "".concat(O.cssPrefix, "-").concat(l),
    r), {});
    return sp.forEach(r => {
        (e.includes(n[r]) || e.some(l => jg[r].includes(l))) && (t = r)
    }
    ),
    t
}
function ki(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {family: n=fe} = t
      , r = og[n][e];
    if (n === xi && !e)
        return "fad";
    const l = rc[n][e] || rc[n][r]
      , i = e in Ge.styles ? e : null;
    return l || i || null
}
function Tg(e) {
    let t = []
      , n = null;
    return e.forEach(r => {
        const l = _g(O.cssPrefix, r);
        l ? n = l : r && t.push(r)
    }
    ),
    {
        iconName: n,
        rest: t
    }
}
function ac(e) {
    return e.sort().filter( (t, n, r) => r.indexOf(t) === n)
}
function Si(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {skipLookups: n=!1} = t;
    let r = null;
    const l = la.concat(G1)
      , i = ac(e.filter(d => l.includes(d)))
      , o = ac(e.filter(d => !la.includes(d)))
      , a = i.filter(d => (r = d,
    !ap.includes(d)))
      , [s=null] = a
      , u = Ig(i)
      , p = k(k({}, Tg(o)), {}, {
        prefix: ki(s, {
            family: u
        })
    });
    return k(k(k({}, p), Rg({
        values: e,
        family: u,
        styles: zr,
        config: O,
        canonical: p,
        givenPrefix: r
    })), zg(n, r, p))
}
function zg(e, t, n) {
    let {prefix: r, iconName: l} = n;
    if (e || !r || !l)
        return {
            prefix: r,
            iconName: l
        };
    const i = t === "fa" ? Pp(l) : {}
      , o = Ht(r, l);
    return l = i.iconName || o || l,
    r = i.prefix || r,
    r === "far" && !zr.far && zr.fas && !O.autoFetchSvg && (r = "fas"),
    {
        prefix: r,
        iconName: l
    }
}
const Lg = sp.filter(e => e !== fe || e !== xi)
  , Ag = Object.keys(ra).filter(e => e !== fe).map(e => Object.keys(ra[e])).flat();
function Rg(e) {
    const {values: t, family: n, canonical: r, givenPrefix: l="", styles: i={}, config: o={}} = e
      , a = n === xi
      , s = t.includes("fa-duotone") || t.includes("fad")
      , u = o.familyDefault === "duotone"
      , p = r.prefix === "fad" || r.prefix === "fa-duotone";
    if (!a && (s || u || p) && (r.prefix = "fad"),
    (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"),
    !r.prefix && Lg.includes(n) && (Object.keys(i).find(h => Ag.includes(h)) || o.autoFetchSvg)) {
        const h = U1.get(n).defaultShortPrefixId;
        r.prefix = h,
        r.iconName = Ht(r.prefix, r.iconName) || r.iconName
    }
    return (r.prefix === "fa" || l === "fa") && (r.prefix = Tt() || "fas"),
    r
}
class Mg {
    constructor() {
        this.definitions = {}
    }
    add() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        const l = n.reduce(this._pullDefinitions, {});
        Object.keys(l).forEach(i => {
            this.definitions[i] = k(k({}, this.definitions[i] || {}), l[i]),
            fa(i, l[i]);
            const o = Ss[fe][i];
            o && fa(o, l[i]),
            jp()
        }
        )
    }
    reset() {
        this.definitions = {}
    }
    _pullDefinitions(t, n) {
        const r = n.prefix && n.iconName && n.icon ? {
            0: n
        } : n;
        return Object.keys(r).map(l => {
            const {prefix: i, iconName: o, icon: a} = r[l]
              , s = a[2];
            t[i] || (t[i] = {}),
            s.length > 0 && s.forEach(u => {
                typeof u == "string" && (t[i][u] = a)
            }
            ),
            t[i][o] = a
        }
        ),
        t
    }
}
let sc = []
  , yn = {};
const jn = {}
  , Fg = Object.keys(jn);
function Dg(e, t) {
    let {mixoutsTo: n} = t;
    return sc = e,
    yn = {},
    Object.keys(jn).forEach(r => {
        Fg.indexOf(r) === -1 && delete jn[r]
    }
    ),
    sc.forEach(r => {
        const l = r.mixout ? r.mixout() : {};
        if (Object.keys(l).forEach(i => {
            typeof l[i] == "function" && (n[i] = l[i]),
            typeof l[i] == "object" && Object.keys(l[i]).forEach(o => {
                n[i] || (n[i] = {}),
                n[i][o] = l[i][o]
            }
            )
        }
        ),
        r.hooks) {
            const i = r.hooks();
            Object.keys(i).forEach(o => {
                yn[o] || (yn[o] = []),
                yn[o].push(i[o])
            }
            )
        }
        r.provides && r.provides(jn)
    }
    ),
    n
}
function da(e, t) {
    for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), l = 2; l < n; l++)
        r[l - 2] = arguments[l];
    return (yn[e] || []).forEach(o => {
        t = o.apply(null, [t, ...r])
    }
    ),
    t
}
function en(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
    (yn[e] || []).forEach(i => {
        i.apply(null, n)
    }
    )
}
function zt() {
    const e = arguments[0]
      , t = Array.prototype.slice.call(arguments, 1);
    return jn[e] ? jn[e].apply(null, t) : void 0
}
function pa(e) {
    e.prefix === "fa" && (e.prefix = "fas");
    let {iconName: t} = e;
    const n = e.prefix || Tt();
    if (t)
        return t = Ht(n, t) || t,
        ic(bp.definitions, n, t) || ic(Ge.styles, n, t)
}
const bp = new Mg
  , Ug = () => {
    O.autoReplaceSvg = !1,
    O.observeMutations = !1,
    en("noAuto")
}
  , $g = {
    i2svg: function() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return ct ? (en("beforeI2svg", e),
        zt("pseudoElements2svg", e),
        zt("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
    },
    watch: function() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const {autoReplaceSvgRoot: t} = e;
        O.autoReplaceSvg === !1 && (O.autoReplaceSvg = !0),
        O.observeMutations = !0,
        Sg( () => {
            Bg({
                autoReplaceSvgRoot: t
            }),
            en("watch", e)
        }
        )
    }
}
  , Wg = {
    icon: e => {
        if (e === null)
            return null;
        if (typeof e == "object" && e.prefix && e.iconName)
            return {
                prefix: e.prefix,
                iconName: Ht(e.prefix, e.iconName) || e.iconName
            };
        if (Array.isArray(e) && e.length === 2) {
            const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1]
              , n = ki(e[0]);
            return {
                prefix: n,
                iconName: Ht(n, t) || t
            }
        }
        if (typeof e == "string" && (e.indexOf("".concat(O.cssPrefix, "-")) > -1 || e.match(ag))) {
            const t = Si(e.split(" "), {
                skipLookups: !0
            });
            return {
                prefix: t.prefix || Tt(),
                iconName: Ht(t.prefix, t.iconName) || t.iconName
            }
        }
        if (typeof e == "string") {
            const t = Tt();
            return {
                prefix: t,
                iconName: Ht(t, e) || e
            }
        }
    }
}
  , _e = {
    noAuto: Ug,
    config: O,
    dom: $g,
    parse: Wg,
    library: bp,
    findIconDefinition: pa,
    toHtml: Wr
}
  , Bg = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {autoReplaceSvgRoot: t=W} = e;
    (Object.keys(Ge.styles).length > 0 || O.autoFetchSvg) && ct && O.autoReplaceSvg && _e.dom.i2svg({
        node: t
    })
};
function Ni(e, t) {
    return Object.defineProperty(e, "abstract", {
        get: t
    }),
    Object.defineProperty(e, "html", {
        get: function() {
            return e.abstract.map(n => Wr(n))
        }
    }),
    Object.defineProperty(e, "node", {
        get: function() {
            if (!ct)
                return;
            const n = W.createElement("div");
            return n.innerHTML = e.html,
            n.children
        }
    }),
    e
}
function Vg(e) {
    let {children: t, main: n, mask: r, attributes: l, styles: i, transform: o} = e;
    if (Es(o) && n.found && !r.found) {
        const {width: a, height: s} = n
          , u = {
            x: a / s / 2,
            y: .5
        };
        l.style = wi(k(k({}, i), {}, {
            "transform-origin": "".concat(u.x + o.x / 16, "em ").concat(u.y + o.y / 16, "em")
        }))
    }
    return [{
        tag: "svg",
        attributes: l,
        children: t
    }]
}
function Hg(e) {
    let {prefix: t, iconName: n, children: r, attributes: l, symbol: i} = e;
    const o = i === !0 ? "".concat(t, "-").concat(O.cssPrefix, "-").concat(n) : i;
    return [{
        tag: "svg",
        attributes: {
            style: "display: none;"
        },
        children: [{
            tag: "symbol",
            attributes: k(k({}, l), {}, {
                id: o
            }),
            children: r
        }]
    }]
}
function Ps(e) {
    const {icons: {main: t, mask: n}, prefix: r, iconName: l, transform: i, symbol: o, title: a, maskId: s, titleId: u, extra: p, watchable: d=!1} = e
      , {width: h, height: v} = n.found ? n : t
      , x = H1.includes(r)
      , w = [O.replacementClass, l ? "".concat(O.cssPrefix, "-").concat(l) : ""].filter(E => p.classes.indexOf(E) === -1).filter(E => E !== "" || !!E).concat(p.classes).join(" ");
    let C = {
        children: [],
        attributes: k(k({}, p.attributes), {}, {
            "data-prefix": r,
            "data-icon": l,
            class: w,
            role: p.attributes.role || "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 ".concat(h, " ").concat(v)
        })
    };
    const m = x && !~p.classes.indexOf("fa-fw") ? {
        width: "".concat(h / v * 16 * .0625, "em")
    } : {};
    d && (C.attributes[qt] = ""),
    a && (C.children.push({
        tag: "title",
        attributes: {
            id: C.attributes["aria-labelledby"] || "title-".concat(u || Tr())
        },
        children: [a]
    }),
    delete C.attributes.title);
    const f = k(k({}, C), {}, {
        prefix: r,
        iconName: l,
        main: t,
        mask: n,
        maskId: s,
        transform: i,
        symbol: o,
        styles: k(k({}, m), p.styles)
    })
      , {children: g, attributes: y} = n.found && t.found ? zt("generateAbstractMask", f) || {
        children: [],
        attributes: {}
    } : zt("generateAbstractIcon", f) || {
        children: [],
        attributes: {}
    };
    return f.children = g,
    f.attributes = y,
    o ? Hg(f) : Vg(f)
}
function uc(e) {
    const {content: t, width: n, height: r, transform: l, title: i, extra: o, watchable: a=!1} = e
      , s = k(k(k({}, o.attributes), i ? {
        title: i
    } : {}), {}, {
        class: o.classes.join(" ")
    });
    a && (s[qt] = "");
    const u = k({}, o.styles);
    Es(l) && (u.transform = xg({
        transform: l,
        startCentered: !0,
        width: n,
        height: r
    }),
    u["-webkit-transform"] = u.transform);
    const p = wi(u);
    p.length > 0 && (s.style = p);
    const d = [];
    return d.push({
        tag: "span",
        attributes: s,
        children: [t]
    }),
    i && d.push({
        tag: "span",
        attributes: {
            class: "sr-only"
        },
        children: [i]
    }),
    d
}
function Qg(e) {
    const {content: t, title: n, extra: r} = e
      , l = k(k(k({}, r.attributes), n ? {
        title: n
    } : {}), {}, {
        class: r.classes.join(" ")
    })
      , i = wi(r.styles);
    i.length > 0 && (l.style = i);
    const o = [];
    return o.push({
        tag: "span",
        attributes: l,
        children: [t]
    }),
    n && o.push({
        tag: "span",
        attributes: {
            class: "sr-only"
        },
        children: [n]
    }),
    o
}
const {styles: ro} = Ge;
function ma(e) {
    const t = e[0]
      , n = e[1]
      , [r] = e.slice(4);
    let l = null;
    return Array.isArray(r) ? l = {
        tag: "g",
        attributes: {
            class: "".concat(O.cssPrefix, "-").concat(eo.GROUP)
        },
        children: [{
            tag: "path",
            attributes: {
                class: "".concat(O.cssPrefix, "-").concat(eo.SECONDARY),
                fill: "currentColor",
                d: r[0]
            }
        }, {
            tag: "path",
            attributes: {
                class: "".concat(O.cssPrefix, "-").concat(eo.PRIMARY),
                fill: "currentColor",
                d: r[1]
            }
        }]
    } : l = {
        tag: "path",
        attributes: {
            fill: "currentColor",
            d: r
        }
    },
    {
        found: !0,
        width: t,
        height: n,
        icon: l
    }
}
const Yg = {
    found: !1,
    width: 512,
    height: 512
};
function Gg(e, t) {
    !dp && !O.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'))
}
function ha(e, t) {
    let n = t;
    return t === "fa" && O.styleDefault !== null && (t = Tt()),
    new Promise( (r, l) => {
        if (n === "fa") {
            const i = Pp(e) || {};
            e = i.iconName || e,
            t = i.prefix || t
        }
        if (e && t && ro[t] && ro[t][e]) {
            const i = ro[t][e];
            return r(ma(i))
        }
        Gg(e, t),
        r(k(k({}, Yg), {}, {
            icon: O.showMissingIcons && e ? zt("missingIconAbstract") || {} : {}
        }))
    }
    )
}
const cc = () => {}
  , ga = O.measurePerformance && sl && sl.mark && sl.measure ? sl : {
    mark: cc,
    measure: cc
}
  , tr = 'FA "6.7.2"'
  , Xg = e => (ga.mark("".concat(tr, " ").concat(e, " begins")),
() => Op(e))
  , Op = e => {
    ga.mark("".concat(tr, " ").concat(e, " ends")),
    ga.measure("".concat(tr, " ").concat(e), "".concat(tr, " ").concat(e, " begins"), "".concat(tr, " ").concat(e, " ends"))
}
;
var _s = {
    begin: Xg,
    end: Op
};
const Nl = () => {}
;
function fc(e) {
    return typeof (e.getAttribute ? e.getAttribute(qt) : null) == "string"
}
function Kg(e) {
    const t = e.getAttribute ? e.getAttribute(ws) : null
      , n = e.getAttribute ? e.getAttribute(ks) : null;
    return t && n
}
function Zg(e) {
    return e && e.classList && e.classList.contains && e.classList.contains(O.replacementClass)
}
function Jg() {
    return O.autoReplaceSvg === !0 ? El.replace : El[O.autoReplaceSvg] || El.replace
}
function qg(e) {
    return W.createElementNS("http://www.w3.org/2000/svg", e)
}
function ev(e) {
    return W.createElement(e)
}
function Ip(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {ceFn: n=e.tag === "svg" ? qg : ev} = t;
    if (typeof e == "string")
        return W.createTextNode(e);
    const r = n(e.tag);
    return Object.keys(e.attributes || []).forEach(function(i) {
        r.setAttribute(i, e.attributes[i])
    }),
    (e.children || []).forEach(function(i) {
        r.appendChild(Ip(i, {
            ceFn: n
        }))
    }),
    r
}
function tv(e) {
    let t = " ".concat(e.outerHTML, " ");
    return t = "".concat(t, "Font Awesome fontawesome.com "),
    t
}
const El = {
    replace: function(e) {
        const t = e[0];
        if (t.parentNode)
            if (e[1].forEach(n => {
                t.parentNode.insertBefore(Ip(n), t)
            }
            ),
            t.getAttribute(qt) === null && O.keepOriginalSource) {
                let n = W.createComment(tv(t));
                t.parentNode.replaceChild(n, t)
            } else
                t.remove()
    },
    nest: function(e) {
        const t = e[0]
          , n = e[1];
        if (~Ns(t).indexOf(O.replacementClass))
            return El.replace(e);
        const r = new RegExp("".concat(O.cssPrefix, "-.*"));
        if (delete n[0].attributes.id,
        n[0].attributes.class) {
            const i = n[0].attributes.class.split(" ").reduce( (o, a) => (a === O.replacementClass || a.match(r) ? o.toSvg.push(a) : o.toNode.push(a),
            o), {
                toNode: [],
                toSvg: []
            });
            n[0].attributes.class = i.toSvg.join(" "),
            i.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "))
        }
        const l = n.map(i => Wr(i)).join(`
`);
        t.setAttribute(qt, ""),
        t.innerHTML = l
    }
};
function dc(e) {
    e()
}
function Tp(e, t) {
    const n = typeof t == "function" ? t : Nl;
    if (e.length === 0)
        n();
    else {
        let r = dc;
        O.mutateApproach === lg && (r = It.requestAnimationFrame || dc),
        r( () => {
            const l = Jg()
              , i = _s.begin("mutate");
            e.map(l),
            i(),
            n()
        }
        )
    }
}
let bs = !1;
function zp() {
    bs = !0
}
function va() {
    bs = !1
}
let Jl = null;
function pc(e) {
    if (!qu || !O.observeMutations)
        return;
    const {treeCallback: t=Nl, nodeCallback: n=Nl, pseudoElementsCallback: r=Nl, observeMutationsRoot: l=W} = e;
    Jl = new qu(i => {
        if (bs)
            return;
        const o = Tt();
        Un(i).forEach(a => {
            if (a.type === "childList" && a.addedNodes.length > 0 && !fc(a.addedNodes[0]) && (O.searchPseudoElements && r(a.target),
            t(a.target)),
            a.type === "attributes" && a.target.parentNode && O.searchPseudoElements && r(a.target.parentNode),
            a.type === "attributes" && fc(a.target) && ~cg.indexOf(a.attributeName))
                if (a.attributeName === "class" && Kg(a.target)) {
                    const {prefix: s, iconName: u} = Si(Ns(a.target));
                    a.target.setAttribute(ws, s || o),
                    u && a.target.setAttribute(ks, u)
                } else
                    Zg(a.target) && n(a.target)
        }
        )
    }
    ),
    ct && Jl.observe(l, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0
    })
}
function nv() {
    Jl && Jl.disconnect()
}
function rv(e) {
    const t = e.getAttribute("style");
    let n = [];
    return t && (n = t.split(";").reduce( (r, l) => {
        const i = l.split(":")
          , o = i[0]
          , a = i.slice(1);
        return o && a.length > 0 && (r[o] = a.join(":").trim()),
        r
    }
    , {})),
    n
}
function lv(e) {
    const t = e.getAttribute("data-prefix")
      , n = e.getAttribute("data-icon")
      , r = e.innerText !== void 0 ? e.innerText.trim() : "";
    let l = Si(Ns(e));
    return l.prefix || (l.prefix = Tt()),
    t && n && (l.prefix = t,
    l.iconName = n),
    l.iconName && l.prefix || (l.prefix && r.length > 0 && (l.iconName = bg(l.prefix, e.innerText) || js(l.prefix, ca(e.innerText))),
    !l.iconName && O.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (l.iconName = e.firstChild.data)),
    l
}
function iv(e) {
    const t = Un(e.attributes).reduce( (l, i) => (l.name !== "class" && l.name !== "style" && (l[i.name] = i.value),
    l), {})
      , n = e.getAttribute("title")
      , r = e.getAttribute("data-fa-title-id");
    return O.autoA11y && (n ? t["aria-labelledby"] = "".concat(O.replacementClass, "-title-").concat(r || Tr()) : (t["aria-hidden"] = "true",
    t.focusable = "false")),
    t
}
function ov() {
    return {
        iconName: null,
        title: null,
        titleId: null,
        prefix: null,
        transform: Ye,
        symbol: !1,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        extra: {
            classes: [],
            styles: {},
            attributes: {}
        }
    }
}
function mc(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        styleParser: !0
    };
    const {iconName: n, prefix: r, rest: l} = lv(e)
      , i = iv(e)
      , o = da("parseNodeAttributes", {}, e);
    let a = t.styleParser ? rv(e) : [];
    return k({
        iconName: n,
        title: e.getAttribute("title"),
        titleId: e.getAttribute("data-fa-title-id"),
        prefix: r,
        transform: Ye,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
            classes: l,
            styles: a,
            attributes: i
        }
    }, o)
}
const {styles: av} = Ge;
function Lp(e) {
    const t = O.autoReplaceSvg === "nest" ? mc(e, {
        styleParser: !1
    }) : mc(e);
    return ~t.extra.classes.indexOf(mp) ? zt("generateLayersText", e, t) : zt("generateSvgReplacementMutation", e, t)
}
function sv() {
    return [...W1, ...la]
}
function hc(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!ct)
        return Promise.resolve();
    const n = W.documentElement.classList
      , r = p => n.add("".concat(nc, "-").concat(p))
      , l = p => n.remove("".concat(nc, "-").concat(p))
      , i = O.autoFetchSvg ? sv() : ap.concat(Object.keys(av));
    i.includes("fa") || i.push("fa");
    const o = [".".concat(mp, ":not([").concat(qt, "])")].concat(i.map(p => ".".concat(p, ":not([").concat(qt, "])"))).join(", ");
    if (o.length === 0)
        return Promise.resolve();
    let a = [];
    try {
        a = Un(e.querySelectorAll(o))
    } catch {}
    if (a.length > 0)
        r("pending"),
        l("complete");
    else
        return Promise.resolve();
    const s = _s.begin("onTree")
      , u = a.reduce( (p, d) => {
        try {
            const h = Lp(d);
            h && p.push(h)
        } catch (h) {
            dp || h.name === "MissingIcon" && console.error(h)
        }
        return p
    }
    , []);
    return new Promise( (p, d) => {
        Promise.all(u).then(h => {
            Tp(h, () => {
                r("active"),
                r("complete"),
                l("pending"),
                typeof t == "function" && t(),
                s(),
                p()
            }
            )
        }
        ).catch(h => {
            s(),
            d(h)
        }
        )
    }
    )
}
function uv(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    Lp(e).then(n => {
        n && Tp([n], t)
    }
    )
}
function cv(e) {
    return function(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const r = (t || {}).icon ? t : pa(t || {});
        let {mask: l} = n;
        return l && (l = (l || {}).icon ? l : pa(l || {})),
        e(r, k(k({}, n), {}, {
            mask: l
        }))
    }
}
const fv = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {transform: n=Ye, symbol: r=!1, mask: l=null, maskId: i=null, title: o=null, titleId: a=null, classes: s=[], attributes: u={}, styles: p={}} = t;
    if (!e)
        return;
    const {prefix: d, iconName: h, icon: v} = e;
    return Ni(k({
        type: "icon"
    }, e), () => (en("beforeDOMElementCreation", {
        iconDefinition: e,
        params: t
    }),
    O.autoA11y && (o ? u["aria-labelledby"] = "".concat(O.replacementClass, "-title-").concat(a || Tr()) : (u["aria-hidden"] = "true",
    u.focusable = "false")),
    Ps({
        icons: {
            main: ma(v),
            mask: l ? ma(l.icon) : {
                found: !1,
                width: null,
                height: null,
                icon: {}
            }
        },
        prefix: d,
        iconName: h,
        transform: k(k({}, Ye), n),
        symbol: r,
        title: o,
        maskId: i,
        titleId: a,
        extra: {
            attributes: u,
            styles: p,
            classes: s
        }
    })))
};
var dv = {
    mixout() {
        return {
            icon: cv(fv)
        }
    },
    hooks() {
        return {
            mutationObserverCallbacks(e) {
                return e.treeCallback = hc,
                e.nodeCallback = uv,
                e
            }
        }
    },
    provides(e) {
        e.i2svg = function(t) {
            const {node: n=W, callback: r= () => {}
            } = t;
            return hc(n, r)
        }
        ,
        e.generateSvgReplacementMutation = function(t, n) {
            const {iconName: r, title: l, titleId: i, prefix: o, transform: a, symbol: s, mask: u, maskId: p, extra: d} = n;
            return new Promise( (h, v) => {
                Promise.all([ha(r, o), u.iconName ? ha(u.iconName, u.prefix) : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {}
                })]).then(x => {
                    let[w,C] = x;
                    h([t, Ps({
                        icons: {
                            main: w,
                            mask: C
                        },
                        prefix: o,
                        iconName: r,
                        transform: a,
                        symbol: s,
                        maskId: p,
                        title: l,
                        titleId: i,
                        extra: d,
                        watchable: !0
                    })])
                }
                ).catch(v)
            }
            )
        }
        ,
        e.generateAbstractIcon = function(t) {
            let {children: n, attributes: r, main: l, transform: i, styles: o} = t;
            const a = wi(o);
            a.length > 0 && (r.style = a);
            let s;
            return Es(i) && (s = zt("generateAbstractTransformGrouping", {
                main: l,
                transform: i,
                containerWidth: l.width,
                iconWidth: l.width
            })),
            n.push(s || l.icon),
            {
                children: n,
                attributes: r
            }
        }
    }
}
  , pv = {
    mixout() {
        return {
            layer(e) {
                let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                const {classes: n=[]} = t;
                return Ni({
                    type: "layer"
                }, () => {
                    en("beforeDOMElementCreation", {
                        assembler: e,
                        params: t
                    });
                    let r = [];
                    return e(l => {
                        Array.isArray(l) ? l.map(i => {
                            r = r.concat(i.abstract)
                        }
                        ) : r = r.concat(l.abstract)
                    }
                    ),
                    [{
                        tag: "span",
                        attributes: {
                            class: ["".concat(O.cssPrefix, "-layers"), ...n].join(" ")
                        },
                        children: r
                    }]
                }
                )
            }
        }
    }
}
  , mv = {
    mixout() {
        return {
            counter(e) {
                let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                const {title: n=null, classes: r=[], attributes: l={}, styles: i={}} = t;
                return Ni({
                    type: "counter",
                    content: e
                }, () => (en("beforeDOMElementCreation", {
                    content: e,
                    params: t
                }),
                Qg({
                    content: e.toString(),
                    title: n,
                    extra: {
                        attributes: l,
                        styles: i,
                        classes: ["".concat(O.cssPrefix, "-layers-counter"), ...r]
                    }
                })))
            }
        }
    }
}
  , hv = {
    mixout() {
        return {
            text(e) {
                let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                const {transform: n=Ye, title: r=null, classes: l=[], attributes: i={}, styles: o={}} = t;
                return Ni({
                    type: "text",
                    content: e
                }, () => (en("beforeDOMElementCreation", {
                    content: e,
                    params: t
                }),
                uc({
                    content: e,
                    transform: k(k({}, Ye), n),
                    title: r,
                    extra: {
                        attributes: i,
                        styles: o,
                        classes: ["".concat(O.cssPrefix, "-layers-text"), ...l]
                    }
                })))
            }
        }
    },
    provides(e) {
        e.generateLayersText = function(t, n) {
            const {title: r, transform: l, extra: i} = n;
            let o = null
              , a = null;
            if (ip) {
                const s = parseInt(getComputedStyle(t).fontSize, 10)
                  , u = t.getBoundingClientRect();
                o = u.width / s,
                a = u.height / s
            }
            return O.autoA11y && !r && (i.attributes["aria-hidden"] = "true"),
            Promise.resolve([t, uc({
                content: t.innerHTML,
                width: o,
                height: a,
                transform: l,
                title: r,
                extra: i,
                watchable: !0
            })])
        }
    }
};
const gv = new RegExp('"',"ug")
  , gc = [1105920, 1112319]
  , vc = k(k(k(k({}, {
    FontAwesome: {
        normal: "fas",
        400: "fas"
    }
}), D1), ng), X1)
  , ya = Object.keys(vc).reduce( (e, t) => (e[t.toLowerCase()] = vc[t],
e), {})
  , vv = Object.keys(ya).reduce( (e, t) => {
    const n = ya[t];
    return e[t] = n[900] || [...Object.entries(n)][0][1],
    e
}
, {});
function yv(e) {
    const t = e.replace(gv, "")
      , n = Eg(t, 0)
      , r = n >= gc[0] && n <= gc[1]
      , l = t.length === 2 ? t[0] === t[1] : !1;
    return {
        value: ca(l ? t[0] : t),
        isSecondary: r || l
    }
}
function xv(e, t) {
    const n = e.replace(/^['"]|['"]$/g, "").toLowerCase()
      , r = parseInt(t)
      , l = isNaN(r) ? "normal" : r;
    return (ya[n] || {})[l] || vv[n]
}
function yc(e, t) {
    const n = "".concat(rg).concat(t.replace(":", "-"));
    return new Promise( (r, l) => {
        if (e.getAttribute(n) !== null)
            return r();
        const o = Un(e.children).filter(h => h.getAttribute(oa) === t)[0]
          , a = It.getComputedStyle(e, t)
          , s = a.getPropertyValue("font-family")
          , u = s.match(sg)
          , p = a.getPropertyValue("font-weight")
          , d = a.getPropertyValue("content");
        if (o && !u)
            return e.removeChild(o),
            r();
        if (u && d !== "none" && d !== "") {
            const h = a.getPropertyValue("content");
            let v = xv(s, p);
            const {value: x, isSecondary: w} = yv(h)
              , C = u[0].startsWith("FontAwesome");
            let m = js(v, x)
              , f = m;
            if (C) {
                const g = Og(x);
                g.iconName && g.prefix && (m = g.iconName,
                v = g.prefix)
            }
            if (m && !w && (!o || o.getAttribute(ws) !== v || o.getAttribute(ks) !== f)) {
                e.setAttribute(n, f),
                o && e.removeChild(o);
                const g = ov()
                  , {extra: y} = g;
                y.attributes[oa] = t,
                ha(m, v).then(E => {
                    const b = Ps(k(k({}, g), {}, {
                        icons: {
                            main: E,
                            mask: _p()
                        },
                        prefix: v,
                        iconName: f,
                        extra: y,
                        watchable: !0
                    }))
                      , _ = W.createElementNS("http://www.w3.org/2000/svg", "svg");
                    t === "::before" ? e.insertBefore(_, e.firstChild) : e.appendChild(_),
                    _.outerHTML = b.map(I => Wr(I)).join(`
`),
                    e.removeAttribute(n),
                    r()
                }
                ).catch(l)
            } else
                r()
        } else
            r()
    }
    )
}
function wv(e) {
    return Promise.all([yc(e, "::before"), yc(e, "::after")])
}
function kv(e) {
    return e.parentNode !== document.head && !~ig.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(oa) && (!e.parentNode || e.parentNode.tagName !== "svg")
}
function xc(e) {
    if (ct)
        return new Promise( (t, n) => {
            const r = Un(e.querySelectorAll("*")).filter(kv).map(wv)
              , l = _s.begin("searchPseudoElements");
            zp(),
            Promise.all(r).then( () => {
                l(),
                va(),
                t()
            }
            ).catch( () => {
                l(),
                va(),
                n()
            }
            )
        }
        )
}
var Sv = {
    hooks() {
        return {
            mutationObserverCallbacks(e) {
                return e.pseudoElementsCallback = xc,
                e
            }
        }
    },
    provides(e) {
        e.pseudoElements2svg = function(t) {
            const {node: n=W} = t;
            O.searchPseudoElements && xc(n)
        }
    }
};
let wc = !1;
var Nv = {
    mixout() {
        return {
            dom: {
                unwatch() {
                    zp(),
                    wc = !0
                }
            }
        }
    },
    hooks() {
        return {
            bootstrap() {
                pc(da("mutationObserverCallbacks", {}))
            },
            noAuto() {
                nv()
            },
            watch(e) {
                const {observeMutationsRoot: t} = e;
                wc ? va() : pc(da("mutationObserverCallbacks", {
                    observeMutationsRoot: t
                }))
            }
        }
    }
};
const kc = e => {
    let t = {
        size: 16,
        x: 0,
        y: 0,
        flipX: !1,
        flipY: !1,
        rotate: 0
    };
    return e.toLowerCase().split(" ").reduce( (n, r) => {
        const l = r.toLowerCase().split("-")
          , i = l[0];
        let o = l.slice(1).join("-");
        if (i && o === "h")
            return n.flipX = !0,
            n;
        if (i && o === "v")
            return n.flipY = !0,
            n;
        if (o = parseFloat(o),
        isNaN(o))
            return n;
        switch (i) {
        case "grow":
            n.size = n.size + o;
            break;
        case "shrink":
            n.size = n.size - o;
            break;
        case "left":
            n.x = n.x - o;
            break;
        case "right":
            n.x = n.x + o;
            break;
        case "up":
            n.y = n.y - o;
            break;
        case "down":
            n.y = n.y + o;
            break;
        case "rotate":
            n.rotate = n.rotate + o;
            break
        }
        return n
    }
    , t)
}
;
var Ev = {
    mixout() {
        return {
            parse: {
                transform: e => kc(e)
            }
        }
    },
    hooks() {
        return {
            parseNodeAttributes(e, t) {
                const n = t.getAttribute("data-fa-transform");
                return n && (e.transform = kc(n)),
                e
            }
        }
    },
    provides(e) {
        e.generateAbstractTransformGrouping = function(t) {
            let {main: n, transform: r, containerWidth: l, iconWidth: i} = t;
            const o = {
                transform: "translate(".concat(l / 2, " 256)")
            }
              , a = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") ")
              , s = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") ")
              , u = "rotate(".concat(r.rotate, " 0 0)")
              , p = {
                transform: "".concat(a, " ").concat(s, " ").concat(u)
            }
              , d = {
                transform: "translate(".concat(i / 2 * -1, " -256)")
            }
              , h = {
                outer: o,
                inner: p,
                path: d
            };
            return {
                tag: "g",
                attributes: k({}, h.outer),
                children: [{
                    tag: "g",
                    attributes: k({}, h.inner),
                    children: [{
                        tag: n.icon.tag,
                        children: n.icon.children,
                        attributes: k(k({}, n.icon.attributes), h.path)
                    }]
                }]
            }
        }
    }
};
const lo = {
    x: 0,
    y: 0,
    width: "100%",
    height: "100%"
};
function Sc(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"),
    e
}
function Cv(e) {
    return e.tag === "g" ? e.children : [e]
}
var jv = {
    hooks() {
        return {
            parseNodeAttributes(e, t) {
                const n = t.getAttribute("data-fa-mask")
                  , r = n ? Si(n.split(" ").map(l => l.trim())) : _p();
                return r.prefix || (r.prefix = Tt()),
                e.mask = r,
                e.maskId = t.getAttribute("data-fa-mask-id"),
                e
            }
        }
    },
    provides(e) {
        e.generateAbstractMask = function(t) {
            let {children: n, attributes: r, main: l, mask: i, maskId: o, transform: a} = t;
            const {width: s, icon: u} = l
              , {width: p, icon: d} = i
              , h = yg({
                transform: a,
                containerWidth: p,
                iconWidth: s
            })
              , v = {
                tag: "rect",
                attributes: k(k({}, lo), {}, {
                    fill: "white"
                })
            }
              , x = u.children ? {
                children: u.children.map(Sc)
            } : {}
              , w = {
                tag: "g",
                attributes: k({}, h.inner),
                children: [Sc(k({
                    tag: u.tag,
                    attributes: k(k({}, u.attributes), h.path)
                }, x))]
            }
              , C = {
                tag: "g",
                attributes: k({}, h.outer),
                children: [w]
            }
              , m = "mask-".concat(o || Tr())
              , f = "clip-".concat(o || Tr())
              , g = {
                tag: "mask",
                attributes: k(k({}, lo), {}, {
                    id: m,
                    maskUnits: "userSpaceOnUse",
                    maskContentUnits: "userSpaceOnUse"
                }),
                children: [v, C]
            }
              , y = {
                tag: "defs",
                children: [{
                    tag: "clipPath",
                    attributes: {
                        id: f
                    },
                    children: Cv(d)
                }, g]
            };
            return n.push(y, {
                tag: "rect",
                attributes: k({
                    fill: "currentColor",
                    "clip-path": "url(#".concat(f, ")"),
                    mask: "url(#".concat(m, ")")
                }, lo)
            }),
            {
                children: n,
                attributes: r
            }
        }
    }
}
  , Pv = {
    provides(e) {
        let t = !1;
        It.matchMedia && (t = It.matchMedia("(prefers-reduced-motion: reduce)").matches),
        e.missingIconAbstract = function() {
            const n = []
              , r = {
                fill: "currentColor"
            }
              , l = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
            };
            n.push({
                tag: "path",
                attributes: k(k({}, r), {}, {
                    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                })
            });
            const i = k(k({}, l), {}, {
                attributeName: "opacity"
            })
              , o = {
                tag: "circle",
                attributes: k(k({}, r), {}, {
                    cx: "256",
                    cy: "364",
                    r: "28"
                }),
                children: []
            };
            return t || o.children.push({
                tag: "animate",
                attributes: k(k({}, l), {}, {
                    attributeName: "r",
                    values: "28;14;28;28;14;28;"
                })
            }, {
                tag: "animate",
                attributes: k(k({}, i), {}, {
                    values: "1;0;1;1;0;1;"
                })
            }),
            n.push(o),
            n.push({
                tag: "path",
                attributes: k(k({}, r), {}, {
                    opacity: "1",
                    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                }),
                children: t ? [] : [{
                    tag: "animate",
                    attributes: k(k({}, i), {}, {
                        values: "1;0;0;0;0;1;"
                    })
                }]
            }),
            t || n.push({
                tag: "path",
                attributes: k(k({}, r), {}, {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                }),
                children: [{
                    tag: "animate",
                    attributes: k(k({}, i), {}, {
                        values: "0;0;1;1;0;0;"
                    })
                }]
            }),
            {
                tag: "g",
                attributes: {
                    class: "missing"
                },
                children: n
            }
        }
    }
}
  , _v = {
    hooks() {
        return {
            parseNodeAttributes(e, t) {
                const n = t.getAttribute("data-fa-symbol")
                  , r = n === null ? !1 : n === "" ? !0 : n;
                return e.symbol = r,
                e
            }
        }
    }
}
  , bv = [kg, dv, pv, mv, hv, Sv, Nv, Ev, jv, Pv, _v];
Dg(bv, {
    mixoutsTo: _e
});
_e.noAuto;
_e.config;
_e.library;
_e.dom;
const xa = _e.parse;
_e.findIconDefinition;
_e.toHtml;
const Ov = _e.icon;
_e.layer;
_e.text;
_e.counter;
var Ap = {
    exports: {}
}
  , Iv = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  , Tv = Iv
  , zv = Tv;
function Rp() {}
function Mp() {}
Mp.resetWarningCache = Rp;
var Lv = function() {
    function e(r, l, i, o, a, s) {
        if (s !== zv) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation",
            u
        }
    }
    e.isRequired = e;
    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: Mp,
        resetWarningCache: Rp
    };
    return n.PropTypes = n,
    n
};
Ap.exports = Lv();
var Av = Ap.exports;
const L = bc(Av);
function Nc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(l) {
            return Object.getOwnPropertyDescriptor(e, l).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function He(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Nc(Object(n), !0).forEach(function(r) {
            xn(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nc(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function ql(e) {
    "@babel/helpers - typeof";
    return ql = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    ql(e)
}
function xn(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function Rv(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), l, i;
    for (i = 0; i < r.length; i++)
        l = r[i],
        !(t.indexOf(l) >= 0) && (n[l] = e[l]);
    return n
}
function Mv(e, t) {
    if (e == null)
        return {};
    var n = Rv(e, t), r, l;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (l = 0; l < i.length; l++)
            r = i[l],
            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function wa(e) {
    return Fv(e) || Dv(e) || Uv(e) || $v()
}
function Fv(e) {
    if (Array.isArray(e))
        return ka(e)
}
function Dv(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e)
}
function Uv(e, t) {
    if (e) {
        if (typeof e == "string")
            return ka(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
            return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return ka(e, t)
    }
}
function ka(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function $v() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Wv(e) {
    var t, n = e.beat, r = e.fade, l = e.beatFade, i = e.bounce, o = e.shake, a = e.flash, s = e.spin, u = e.spinPulse, p = e.spinReverse, d = e.pulse, h = e.fixedWidth, v = e.inverse, x = e.border, w = e.listItem, C = e.flip, m = e.size, f = e.rotation, g = e.pull, y = (t = {
        "fa-beat": n,
        "fa-fade": r,
        "fa-beat-fade": l,
        "fa-bounce": i,
        "fa-shake": o,
        "fa-flash": a,
        "fa-spin": s,
        "fa-spin-reverse": p,
        "fa-spin-pulse": u,
        "fa-pulse": d,
        "fa-fw": h,
        "fa-inverse": v,
        "fa-border": x,
        "fa-li": w,
        "fa-flip": C === !0,
        "fa-flip-horizontal": C === "horizontal" || C === "both",
        "fa-flip-vertical": C === "vertical" || C === "both"
    },
    xn(t, "fa-".concat(m), typeof m < "u" && m !== null),
    xn(t, "fa-rotate-".concat(f), typeof f < "u" && f !== null && f !== 0),
    xn(t, "fa-pull-".concat(g), typeof g < "u" && g !== null),
    xn(t, "fa-swap-opacity", e.swapOpacity),
    t);
    return Object.keys(y).map(function(E) {
        return y[E] ? E : null
    }).filter(function(E) {
        return E
    })
}
function Bv(e) {
    return e = e - 0,
    e === e
}
function Fp(e) {
    return Bv(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
        return n ? n.toUpperCase() : ""
    }),
    e.substr(0, 1).toLowerCase() + e.substr(1))
}
var Vv = ["style"];
function Hv(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}
function Qv(e) {
    return e.split(";").map(function(t) {
        return t.trim()
    }).filter(function(t) {
        return t
    }).reduce(function(t, n) {
        var r = n.indexOf(":")
          , l = Fp(n.slice(0, r))
          , i = n.slice(r + 1).trim();
        return l.startsWith("webkit") ? t[Hv(l)] = i : t[l] = i,
        t
    }, {})
}
function Dp(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (typeof t == "string")
        return t;
    var r = (t.children || []).map(function(s) {
        return Dp(e, s)
    })
      , l = Object.keys(t.attributes || {}).reduce(function(s, u) {
        var p = t.attributes[u];
        switch (u) {
        case "class":
            s.attrs.className = p,
            delete t.attributes.class;
            break;
        case "style":
            s.attrs.style = Qv(p);
            break;
        default:
            u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? s.attrs[u.toLowerCase()] = p : s.attrs[Fp(u)] = p
        }
        return s
    }, {
        attrs: {}
    })
      , i = n.style
      , o = i === void 0 ? {} : i
      , a = Mv(n, Vv);
    return l.attrs.style = He(He({}, l.attrs.style), o),
    e.apply(void 0, [t.tag, He(He({}, l.attrs), a)].concat(wa(r)))
}
var Up = !1;
try {
    Up = !0
} catch {}
function Yv() {
    if (!Up && console && typeof console.error == "function") {
        var e;
        (e = console).error.apply(e, arguments)
    }
}
function Ec(e) {
    if (e && ql(e) === "object" && e.prefix && e.iconName && e.icon)
        return e;
    if (xa.icon)
        return xa.icon(e);
    if (e === null)
        return null;
    if (e && ql(e) === "object" && e.prefix && e.iconName)
        return e;
    if (Array.isArray(e) && e.length === 2)
        return {
            prefix: e[0],
            iconName: e[1]
        };
    if (typeof e == "string")
        return {
            prefix: "fas",
            iconName: e
        }
}
function io(e, t) {
    return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? xn({}, e, t) : {}
}
var Cc = {
    border: !1,
    className: "",
    mask: null,
    maskId: null,
    fixedWidth: !1,
    inverse: !1,
    flip: !1,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    spinPulse: !1,
    spinReverse: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: "",
    titleId: null,
    transform: null,
    swapOpacity: !1
}
  , Lr = ti.forwardRef(function(e, t) {
    var n = He(He({}, Cc), e)
      , r = n.icon
      , l = n.mask
      , i = n.symbol
      , o = n.className
      , a = n.title
      , s = n.titleId
      , u = n.maskId
      , p = Ec(r)
      , d = io("classes", [].concat(wa(Wv(n)), wa((o || "").split(" "))))
      , h = io("transform", typeof n.transform == "string" ? xa.transform(n.transform) : n.transform)
      , v = io("mask", Ec(l))
      , x = Ov(p, He(He(He(He({}, d), h), v), {}, {
        symbol: i,
        title: a,
        titleId: s,
        maskId: u
    }));
    if (!x)
        return Yv("Could not find icon", p),
        null;
    var w = x.abstract
      , C = {
        ref: t
    };
    return Object.keys(n).forEach(function(m) {
        Cc.hasOwnProperty(m) || (C[m] = n[m])
    }),
    Gv(w[0], C)
});
Lr.displayName = "FontAwesomeIcon";
Lr.propTypes = {
    beat: L.bool,
    border: L.bool,
    beatFade: L.bool,
    bounce: L.bool,
    className: L.string,
    fade: L.bool,
    flash: L.bool,
    mask: L.oneOfType([L.object, L.array, L.string]),
    maskId: L.string,
    fixedWidth: L.bool,
    inverse: L.bool,
    flip: L.oneOf([!0, !1, "horizontal", "vertical", "both"]),
    icon: L.oneOfType([L.object, L.array, L.string]),
    listItem: L.bool,
    pull: L.oneOf(["right", "left"]),
    pulse: L.bool,
    rotation: L.oneOf([0, 90, 180, 270]),
    shake: L.bool,
    size: L.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
    spin: L.bool,
    spinPulse: L.bool,
    spinReverse: L.bool,
    symbol: L.oneOfType([L.bool, L.string]),
    title: L.string,
    titleId: L.string,
    transform: L.oneOfType([L.string, L.object]),
    swapOpacity: L.bool
};
var Gv = Dp.bind(null, ti.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Xv = {
    prefix: "fas",
    iconName: "gauge",
    icon: [512, 512, ["dashboard", "gauge-med", "tachometer-alt-average"], "f624", "M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3L280 88c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 204.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}
  , Kv = {
    prefix: "fas",
    iconName: "headset",
    icon: [512, 512, [], "f590", "M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z"]
}
  , Zv = {
    prefix: "fas",
    iconName: "shield-halved",
    icon: [512, 512, ["shield-alt"], "f3ed", "M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"]
}
  , Jv = {
    prefix: "fas",
    iconName: "code",
    icon: [640, 512, [], "f121", "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]
}
  , qv = {
    prefix: "fas",
    iconName: "eye",
    icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}
  , ey = {
    prefix: "fas",
    iconName: "crosshairs",
    icon: [512, 512, [], "f05b", "M256 0c17.7 0 32 14.3 32 32l0 10.4c93.7 13.9 167.7 88 181.6 181.6l10.4 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-10.4 0c-13.9 93.7-88 167.7-181.6 181.6l0 10.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-10.4C130.3 455.7 56.3 381.7 42.4 288L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l10.4 0C56.3 130.3 130.3 56.3 224 42.4L224 32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6l0-20.6c0-17.7 14.3-32 32-32s32 14.3 32 32l0 20.6c58.3-12.5 104.1-58.4 116.6-116.6L384 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l20.6 0C392.1 165.7 346.3 119.9 288 107.4l0 20.6c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-20.6C165.7 119.9 119.9 165.7 107.4 224l20.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-20.6 0zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}
  , ty = {
    prefix: "fas",
    iconName: "bolt",
    icon: [448, 512, [9889, "zap"], "f0e7", "M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z"]
}
  , ny = {
    prefix: "fas",
    iconName: "credit-card",
    icon: [576, 512, [128179, 62083, "credit-card-alt"], "f09d", "M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"]
}
  , ry = {
    prefix: "fas",
    iconName: "desktop",
    icon: [576, 512, [128421, 61704, "desktop-alt"], "f390", "M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"]
}
  , jc = [{
    icon: Zv,
    title: "Guaranteed Safety"
}, {
    icon: ty,
    title: "Easy to Use"
}, {
    icon: Kv,
    title: "Exceptional Support"
}, {
    icon: ny,
    title: "Secure Payments"
}, {
    icon: Xv,
    title: "Customer Dashboard"
}]
  , ly = () => c.jsxs("div", {
    className: "relative py-12 bg-zinc-900 overflow-hidden",
    children: [c.jsx("div", {
        className: "absolute top-0 left-0 h-full w-[100px] slider-gradient-left z-10"
    }), c.jsx("div", {
        className: "absolute top-0 right-0 h-full w-[100px] slider-gradient-right z-10"
    }), c.jsx("div", {
        className: "relative max-w-7xl mx-auto overflow-hidden",
        children: c.jsx("div", {
            className: "animate-scroll flex",
            children: [...jc, ...jc].map( (e, t) => c.jsx("div", {
                className: "flex-none w-[300px] px-6",
                children: c.jsxs("div", {
                    className: "flex items-center space-x-4 group",
                    children: [c.jsx("div", {
                        className: "text-3xl text-white/90 group-hover:scale-110 group-hover:text-blue-400 transition-all",
                        children: c.jsx(Lr, {
                            icon: e.icon
                        })
                    }), c.jsx("h3", {
                        className: "text-lg font-medium text-white/80 group-hover:text-white transition-colors",
                        children: e.title
                    })]
                })
            }, t))
        })
    }), c.jsx("div", {
        className: "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
    })]
})
  , Pc = {
    shopId: 105400,
    storeUrl: "https://kxz.sellauth.com",
    productId: 170068
}
  , $p = [{
    id: "kxz-external",
    name: "KXZ External",
    type: "External",
    game: "FiveM",
    price: 3.99,
    media: [{
        type: "image",
        url: "https://imagedelivery.net/HL_Fwm__tlvUGLZF2p74xw/58889ab2-2643-4e45-547a-57ddea277a00/public",
        alt: "KXZ Project"
    }, {
        type: "video",
        url: "https://www.youtube.com/watch?v=dQw2w7WgXcQ",
        youtubeId: "dQw2w7WgXcQ",
        thumbnailUrl: "",
        alt: ""
    }, {
        type: "image",
        url: "",
        alt: ""
    }],
    status: "Undetected",
    description: "Advanced external cheat for FiveM",
    subscriptions: [{
        name: "1 Week Key",
        price: 4.99,
        duration: "1 Week",
        variantId: 53241
    }, {
        name: "1 Month Key",
        price: 9.99,
        duration: "1 Month",
        variantId: 93928
    }, {
        name: "Lifetime Key",
        price: 19.99,
        duration: "Lifetime",
        variantId: 93927
    }],
    compatibility: ["Windows 10 & 11 (Versions 2004 and newer, Home and Pro recommended)", "All CPU Compatible (Intel, AMD - UEFI only)", "All GPU Compatible"],
    features: [{
        title: "Aimbot",
        items: ["Enable Aimbot", "Aim at Shoot", "Aim at Scope", "Visible Check", "Aimbot Input Types (Relative, Absolute)", "Adjustable Speed (0-100%)", "Recoil Compensation", "Draw FOV", "Gamepad Support (Xbox only)", "Prediction", "Configurable FOV (0-15)", "Ignore Knocked Targets", "Target Switch Delay", "Unique Hitbox System", "Dual Aim Key Support"]
    }, {
        title: "Visuals",
        items: ["Enable Player ESP", "Enemy Only", "Box ESP", "Out-of-View (OOF) Indicators", "Health Bar / Shield Display", "Skeleton ESP (Adjustable Thickness)", "Glow (Fill and Thickness Options)", "Visibility Check", "Glow Types (Default, Textured, Thermal, Noisy)"]
    }]
}]
  , iy = e => $p.find(t => t.id === e)
  , oy = [{
    id: "all",
    name: "All Products"
}, {
    id: "R6S",
    name: "Rainbow Six Siege [R6S]"
}, {
    id: "FN",
    name: "Fortnite [FN]"
}, {
    id: "FiveM",
    name: "FiveM"
}, {
    id: "SW",
    name: "Software [SW]"
}]
  , ay = () => {
    const e = ys()
      , [t,n] = S.useState("all")
      , [r,l] = S.useState("")
      , i = $p.filter(a => t === "all" || a.game === t).filter(a => a.name.toLowerCase().includes(r.toLowerCase()))
      , o = a => {
        e(`/product/${a}`)
    }
    ;
    return c.jsxs("div", {
        id: "products",
        className: "relative py-24 bg-zinc-900",
        children: [c.jsx("div", {
            className: "absolute inset-0 overflow-hidden",
            children: c.jsx("div", {
                className: "absolute inset-0 opacity-[0.15]",
                style: {
                    backgroundImage: `
              radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, white 1px, transparent 1px)
            `,
                    backgroundSize: "50px 50px",
                    animation: "twinkle 4s infinite"
                }
            })
        }), c.jsxs("div", {
            className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [c.jsx("div", {
                className: "text-center mb-12",
                children: c.jsxs("h2", {
                    className: "text-5xl font-bold mb-4",
                    children: ["Our ", c.jsx("span", {
                        className: "text-blue-400",
                        children: "Products"
                    })]
                })
            }), c.jsxs("div", {
                className: "mb-12 space-y-6",
                children: [c.jsx("div", {
                    className: "max-w-md mx-auto",
                    children: c.jsxs("div", {
                        className: "relative",
                        children: [c.jsx(E1, {
                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                        }), c.jsx("input", {
                            type: "text",
                            placeholder: "Search products...",
                            value: r,
                            onChange: a => l(a.target.value),
                            className: "w-full pl-10 pr-4 py-3 bg-zinc-900/90 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 transition-colors"
                        })]
                    })
                }), c.jsx("div", {
                    className: "flex flex-wrap justify-center gap-3",
                    children: oy.map(a => c.jsx("button", {
                        onClick: () => n(a.id),
                        className: `px-6 py-2.5 rounded-lg transition-all transform hover:scale-105 ${t === a.id ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" : "bg-zinc-900/90 text-white/70 hover:bg-zinc-800 border border-white/10"}`,
                        children: a.name
                    }, a.id))
                })]
            }), c.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: i.map(a => c.jsxs("div", {
                    onClick: () => o(a.id),
                    className: "group relative bg-zinc-900/90 rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer",
                    children: [c.jsxs("div", {
                        className: "relative w-full pt-[75%] overflow-hidden",
                        children: [c.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"
                        }), c.jsx("img", {
                            src: a.image,
                            alt: a.name,
                            className: "absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        })]
                    }), c.jsxs("div", {
                        className: "p-6 space-y-4",
                        children: [c.jsx("h3", {
                            className: "text-xl font-bold text-white group-hover:text-blue-400 transition-colors",
                            children: a.name
                        }), c.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [c.jsxs("div", {
                                className: "space-y-1",
                                children: [c.jsx("p", {
                                    className: "text-sm text-gray-400",
                                    children: "Starting from"
                                }), c.jsxs("p", {
                                    className: "text-2xl font-bold text-blue-400",
                                    children: ["$", a.price, "+"]
                                })]
                            }), c.jsxs("div", {
                                className: "bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30",
                                children: [c.jsx("span", {
                                    children: "Purchase"
                                }), c.jsx(tp, {
                                    className: "h-4 w-4"
                                })]
                            })]
                        })]
                    })]
                }, a.id))
            })]
        })]
    })
}
  , _c = [{
    rating: 5,
    text: "easy cheat",
    user: "Anonymous",
    time: "1 month ago"
}, {
    rating: 5,
    text: "helpfull",
    user: "Anonymous",
    time: "2 weeks ago"
}, {
    rating: 5,
    text: "easiest buy ever",
    user: "Anonymous",
    time: "2 weeks ago"
}, {
    rating: 4,
    text: "1010 stardog",
    user: "Anonymous",
    time: "3 weeks ago"
}]
  , sy = () => c.jsxs("div", {
    className: "relative py-16 bg-zinc-900 overflow-hidden",
    children: [c.jsx("div", {
        className: "absolute inset-0 overflow-hidden",
        children: c.jsx("div", {
            className: "absolute inset-0 opacity-[0.15]",
            style: {
                backgroundImage: `
              radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, white 1px, transparent 1px)
            `,
                backgroundSize: "50px 50px",
                animation: "twinkle 4s infinite"
            }
        })
    }), c.jsx("div", {
        className: "relative text-center mb-12",
        children: c.jsxs("h2", {
            className: "text-4xl font-bold",
            children: ["What Our ", c.jsx("span", {
                className: "text-blue-400",
                children: "Users"
            }), " Say"]
        })
    }), c.jsx("div", {
        className: "absolute top-0 left-0 h-full w-[100px] slider-gradient-left z-10"
    }), c.jsx("div", {
        className: "absolute top-0 right-0 h-full w-[100px] slider-gradient-right z-10"
    }), c.jsx("div", {
        className: "relative max-w-7xl mx-auto overflow-hidden",
        children: c.jsx("div", {
            className: "animate-scroll flex",
            children: [..._c, ..._c].map( (e, t) => c.jsx("div", {
                className: "flex-none w-[300px] px-4",
                children: c.jsxs("div", {
                    className: "bg-zinc-900/90 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:border-blue-400/30 transition-all duration-300",
                    children: [c.jsx("div", {
                        className: "flex items-center space-x-1 mb-3",
                        children: [...Array(5)].map( (n, r) => c.jsx("span", {
                            className: `text-2xl ${r < e.rating ? "text-blue-400" : "text-zinc-700"}`,
                            children: "★"
                        }, r))
                    }), c.jsx("p", {
                        className: "text-lg font-medium text-white mb-4",
                        children: e.text
                    }), c.jsxs("div", {
                        className: "flex items-center justify-between text-sm text-gray-400",
                        children: [c.jsx("span", {
                            children: e.user
                        }), c.jsx("span", {
                            children: e.time
                        })]
                    })]
                })
            }, t))
        })
    }), c.jsx("div", {
        className: "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
    })]
})
  , uy = [{
    question: "What should I do if I have an issue?",
    answer: "If you encounter any issues, our support team is available 24/7 through our Discord server. Join our community and create a ticket in the support channel for immediate assistance."
}, {
    question: "How can I confirm if the software works on my PC?",
    answer: "Check our system requirements page or contact our support team for a detailed compatibility check. We ensure our software works on most modern Windows systems."
}, {
    question: "How fast is delivery?",
    answer: "Delivery is instant! Once your payment is confirmed, you'll receive immediate access to your purchase through our automated system."
}, {
    question: "What's the difference between an Internal and External product?",
    answer: "Internal products run within the game process, while External products run as separate applications. Each has its own advantages - contact support for detailed guidance."
}, {
    question: "Why should I trust you?",
    answer: "We've been in business since 2019, serving thousands of satisfied customers. Our reputation speaks for itself through our community reviews and continuous support."
}]
  , cy = () => {
    const [e,t] = S.useState(null);
    return c.jsxs("div", {
        className: "relative",
        children: [c.jsx("div", {
            className: "relative py-24 bg-[#18181B]",
            children: c.jsx("div", {
                className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: c.jsxs("div", {
                    className: "flex flex-col items-center text-center",
                    children: [c.jsxs("h2", {
                        className: "text-5xl font-bold mb-6",
                        children: ["Join The ", c.jsx("span", {
                            className: "text-blue-400",
                            children: "Community"
                        })]
                    }), c.jsx("p", {
                        className: "text-xl text-gray-300 mb-8 max-w-2xl",
                        children: "Become a member of our Discord server to stay up-to-date with the latest news, updates, and announcements. Our community is a great place to meet other players, share your experiences, and get help from our support team."
                    }), c.jsxs("a", {
                        href: "#",
                        className: "inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors duration-200",
                        children: ["Join Discord", c.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5 ml-2",
                            viewBox: "0 0 127.14 96.36",
                            fill: "currentColor",
                            children: c.jsx("path", {
                                d: "M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                            })
                        })]
                    })]
                })
            })
        }), c.jsxs("div", {
            className: "relative py-24 bg-[#18181B]",
            children: [c.jsx("div", {
                className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            }), c.jsx("div", {
                className: "absolute inset-0 overflow-hidden",
                children: c.jsx("div", {
                    className: "absolute inset-0 opacity-[0.15]",
                    style: {
                        backgroundImage: `
                radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, white 1px, transparent 1px)
              `,
                        backgroundSize: "50px 50px",
                        animation: "twinkle 4s infinite"
                    }
                })
            }), c.jsxs("div", {
                className: "relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [c.jsx("div", {
                    className: "text-center mb-12",
                    children: c.jsxs("h2", {
                        className: "text-5xl font-bold",
                        children: ["Frequently Asked ", c.jsx("span", {
                            className: "text-blue-400",
                            children: "Questions"
                        })]
                    })
                }), c.jsx("div", {
                    className: "space-y-4",
                    children: uy.map( (n, r) => c.jsxs("div", {
                        className: "bg-zinc-900/90 border border-white/10 rounded-lg overflow-hidden",
                        children: [c.jsxs("button", {
                            onClick: () => t(e === r ? null : r),
                            className: "w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors",
                            children: [c.jsx("span", {
                                className: "text-lg font-medium",
                                children: n.question
                            }), c.jsx(w1, {
                                className: `h-5 w-5 transform transition-transform ${e === r ? "rotate-180" : ""}`
                            })]
                        }), e === r && c.jsx("div", {
                            className: "px-6 pb-4 text-gray-300",
                            children: n.answer
                        })]
                    }, r))
                })]
            })]
        })]
    })
}
  , fy = () => c.jsxs(c.Fragment, {
    children: [c.jsx(b1, {}), c.jsx(ly, {}), c.jsx(ay, {}), c.jsx(sy, {}), c.jsx(cy, {})]
})
  , dy = [{
    name: "Goldcore Internal",
    game: "R6S",
    status: "Updating"
}, {
    name: "Seeway Internal",
    game: "R6S",
    status: "Undetected"
}, {
    name: "Disconnect External",
    game: "FN",
    status: "Never"
}, {
    name: "Kamora External",
    game: "R6S",
    status: "Undetected"
}, {
    name: "Fecurity External",
    game: "FiveM",
    status: "Undetected"
}, {
    name: "Seal Internal",
    game: "FiveM",
    status: "Undetected"
}, {
    name: "Rona Temporary Spoofer",
    game: "SW",
    status: "Undetected"
}]
  , py = {
    Undetected: "text-green-400",
    Updating: "text-blue-400",
    Detected: "text-red-400",
    Never: "text-yellow-400"
}
  , my = {
    Undetected: "bg-green-400",
    Updating: "bg-blue-400",
    Detected: "bg-red-400",
    Never: "bg-yellow-400"
}
  , hy = () => c.jsx("div", {
    className: "min-h-screen pt-32 pb-16",
    children: c.jsxs("div", {
        className: "relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [c.jsx("div", {
            className: "text-center mb-16",
            children: c.jsxs("h1", {
                className: "text-6xl font-bold",
                children: ["Product ", c.jsx("span", {
                    className: "text-blue-400",
                    children: "Status"
                })]
            })
        }), c.jsx("div", {
            className: "space-y-4",
            children: dy.map( (e, t) => c.jsxs("div", {
                className: "bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex items-center justify-between hover:border-white/20 transition-colors",
                children: [c.jsx("div", {
                    className: "flex items-center space-x-2",
                    children: c.jsxs("h3", {
                        className: "text-xl font-semibold",
                        children: [e.name, " ", c.jsxs("span", {
                            className: "text-gray-400",
                            children: ["[", e.game, "]"]
                        })]
                    })
                }), c.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [c.jsx("span", {
                        className: `${py[e.status]}`,
                        children: e.status
                    }), c.jsx("div", {
                        className: `w-3 h-3 rounded-full ${my[e.status]} animate-pulse`
                    })]
                })]
            }, t))
        })]
    })
})
  , gy = ({media: e, currentIndex: t, onClose: n}) => {
    const [r,l] = S.useState(1)
      , [i,o] = S.useState({
        x: 0,
        y: 0
    })
      , a = S.useRef(null)
      , s = S.useRef(null)
      , u = d => {
        if (!a.current || !s.current)
            return;
        const {left: h, top: v, width: x, height: w} = a.current.getBoundingClientRect()
          , C = (d.clientX - h) / x * 100
          , m = (d.clientY - v) / w * 100;
        o({
            x: C,
            y: m
        })
    }
      , p = e[t];
    return c.jsxs("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/90",
        children: [c.jsx("button", {
            onClick: n,
            className: "absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/75 text-white/75 hover:text-white transition-colors",
            children: c.jsx(yi, {
                className: "h-6 w-6"
            })
        }), c.jsx("div", {
            ref: a,
            className: "relative w-full max-w-7xl mx-4 aspect-video overflow-hidden rounded-lg",
            onMouseMove: u,
            onMouseEnter: () => l(1.5),
            onMouseLeave: () => l(1),
            children: p.type === "image" ? c.jsx("img", {
                ref: s,
                src: p.url,
                alt: p.alt,
                className: "w-full h-full object-contain transition-transform duration-200",
                style: {
                    transform: r > 1 ? `scale(${r}) translate(${-i.x / 2}%, ${-i.y / 2}%)` : "none",
                    transformOrigin: `${i.x}% ${i.y}%`
                }
            }) : c.jsx("iframe", {
                src: `https://www.youtube.com/embed/${p.youtubeId}?autoplay=1`,
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: !0,
                className: "absolute inset-0 w-full h-full"
            })
        })]
    })
}
  , vy = ({items: e}) => c.jsxs("nav", {
    className: "flex items-center space-x-2 text-sm text-gray-400",
    children: [c.jsx(pe, {
        to: "/",
        className: "hover:text-white transition-colors",
        children: c.jsx(S1, {
            className: "w-4 h-4"
        })
    }), e.map( (t, n) => c.jsxs(ti.Fragment, {
        children: [c.jsx(k1, {
            className: "w-4 h-4"
        }), t.href ? c.jsx(pe, {
            to: t.href,
            className: "hover:text-white transition-colors",
            children: t.label
        }) : c.jsx("span", {
            className: "text-white",
            children: t.label
        })]
    }, n))]
})
  , yy = () => {
    const {productId: e} = H0();
    ys();
    const t = iy(e || "")
      , [n,r] = S.useState(0)
      , [l,i] = S.useState(!1)
      , o = s => {
        switch (s.toLowerCase()) {
        case "aimbot":
            return ey;
        case "visuals":
            return qv;
        default:
            return Jv
        }
    }
    ;
    if (!t)
        return c.jsx("div", {
            className: "min-h-screen pt-32 pb-16",
            children: c.jsx("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: c.jsx("h1", {
                    className: "text-4xl font-bold text-center",
                    children: "Product not found"
                })
            })
        });
    const a = t.media[n];
    return c.jsxs("div", {
        className: "min-h-screen pt-32 pb-16",
        children: [c.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [c.jsx("div", {
                className: "mb-8",
                children: c.jsx(vy, {
                    items: [{
                        label: "Products",
                        href: "/"
                    }, {
                        label: t.name
                    }]
                })
            }), c.jsxs("div", {
                className: "text-center mb-16",
                children: [c.jsxs("h1", {
                    className: "text-6xl font-bold mb-4",
                    children: [t.name, " ", c.jsxs("span", {
                        className: "text-blue-400",
                        children: ["[", t.game, "]"]
                    })]
                }), t.description && c.jsx("p", {
                    className: "text-xl text-gray-400 mb-4",
                    children: t.description
                })]
            }), c.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                children: [c.jsxs("div", {
                    className: "relative",
                    children: [c.jsxs("div", {
                        className: "relative overflow-hidden rounded-lg cursor-pointer group",
                        onClick: () => i(!0),
                        children: [c.jsx("div", {
                            className: "absolute inset-0 bg-blue-400/20 rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-300"
                        }), a.type === "image" ? c.jsx("img", {
                            src: a.url,
                            alt: a.alt,
                            className: "relative w-full aspect-video object-cover rounded-lg border border-white/10 group-hover:border-blue-400/30 group-hover:scale-105 transition-all duration-500"
                        }) : c.jsxs("div", {
                            className: "relative aspect-video",
                            children: [c.jsx("img", {
                                src: a.thumbnailUrl,
                                alt: a.alt,
                                className: "w-full h-full object-cover rounded-lg border border-white/10 group-hover:border-blue-400/30 group-hover:scale-105 transition-all duration-500"
                            }), c.jsx("div", {
                                className: "absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors",
                                children: c.jsx(na, {
                                    className: "w-16 h-16 text-white group-hover:scale-110 transition-transform"
                                })
                            })]
                        })]
                    }), c.jsx("div", {
                        className: "flex justify-center mt-4 space-x-2",
                        children: t.media.map( (s, u) => c.jsxs("button", {
                            onClick: () => r(u),
                            className: `relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${n === u ? "border-blue-400 scale-110" : "border-white/10 hover:border-blue-400/50"}`,
                            children: [c.jsx("img", {
                                src: s.type === "video" ? s.thumbnailUrl : s.url,
                                alt: s.alt,
                                className: "w-full h-full object-cover"
                            }), s.type === "video" && c.jsx("div", {
                                className: "absolute inset-0 flex items-center justify-center bg-black/50",
                                children: c.jsx(na, {
                                    className: "w-4 h-4 text-white"
                                })
                            })]
                        }, u))
                    })]
                }), c.jsxs("div", {
                    className: "space-y-6",
                    children: [c.jsxs("div", {
                        className: "bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-6 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300",
                        children: [c.jsxs("div", {
                            className: "flex items-center space-x-2 mb-4",
                            children: [c.jsx("div", {
                                className: `w-3 h-3 rounded-full ${t.status === "Undetected" ? "bg-green-400" : t.status === "Updating" ? "bg-blue-400" : "bg-red-400"} animate-pulse`
                            }), c.jsx("span", {
                                className: `${t.status === "Undetected" ? "text-green-400" : t.status === "Updating" ? "text-blue-400" : "text-red-400"} font-medium`,
                                children: t.status
                            })]
                        }), c.jsx("p", {
                            className: "text-gray-400",
                            children: "Choose your subscription plan below:"
                        })]
                    }), t.subscriptions.map( (s, u) => c.jsxs("div", {
                        className: "group bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 flex items-center justify-between hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300",
                        children: [c.jsxs("div", {
                            children: [c.jsx("h3", {
                                className: "text-xl font-semibold group-hover:text-blue-400 transition-colors",
                                children: s.name
                            }), c.jsx("p", {
                                className: "text-gray-400",
                                children: s.duration
                            })]
                        }), c.jsxs("div", {
                            className: "flex items-center space-x-4",
                            children: [c.jsxs("span", {
                                className: "text-2xl font-bold text-blue-400",
                                children: ["$", s.price]
                            }), c.jsxs("button", {
                                className: "sellauth-button bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-105 flex items-center space-x-2",
                                onClick: p => {
                                    window.sellAuthEmbed.checkout(p.currentTarget, {
                                        cart: [{
                                            productId: Pc.productId,
                                            variantId: s.variantId,
                                            quantity: 1
                                        }],
                                        shopId: Pc.shopId,
                                        modal: !0
                                    })
                                }
                                ,
                                children: [c.jsx("span", {
                                    children: "Purchase"
                                }), c.jsx(C1, {
                                    className: "h-5 w-5"
                                })]
                            })]
                        })]
                    }, u))]
                })]
            }), c.jsxs("div", {
                className: "mt-16 space-y-12",
                children: [c.jsxs("h2", {
                    className: "text-4xl font-bold",
                    children: ["Product ", c.jsx("span", {
                        className: "text-blue-400",
                        children: "Details"
                    })]
                }), c.jsxs("div", {
                    className: "group bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300",
                    children: [c.jsxs("h3", {
                        className: "text-2xl font-semibold mb-6 flex items-center group-hover:text-blue-400 transition-colors",
                        children: [c.jsx(Lr, {
                            icon: ry,
                            className: "text-blue-400 mr-3 group-hover:scale-110 transition-transform"
                        }), "Compatibility"]
                    }), c.jsx("ul", {
                        className: "space-y-3",
                        children: t.compatibility.map( (s, u) => c.jsxs("li", {
                            className: "flex items-start space-x-3 text-gray-300 group-hover:text-white/90 transition-colors",
                            children: [c.jsx("span", {
                                className: "text-blue-400 group-hover:scale-110 transition-transform",
                                children: "•"
                            }), c.jsx("span", {
                                children: s
                            })]
                        }, u))
                    })]
                }), t.features.map( (s, u) => c.jsxs("div", {
                    className: "group bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300",
                    children: [c.jsxs("h3", {
                        className: "text-2xl font-semibold mb-6 flex items-center group-hover:text-blue-400 transition-colors",
                        children: [c.jsx(Lr, {
                            icon: o(s.title),
                            className: "text-blue-400 mr-3 group-hover:scale-110 transition-transform"
                        }), s.title]
                    }), c.jsx("ul", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                        children: s.items.map( (p, d) => c.jsxs("li", {
                            className: "flex items-start space-x-3 text-gray-300 group-hover:text-white/90 transition-colors",
                            children: [c.jsx("span", {
                                className: "text-blue-400 group-hover:scale-110 transition-transform",
                                children: "•"
                            }), c.jsx("span", {
                                children: p
                            })]
                        }, d))
                    })]
                }, u))]
            })]
        }), l && c.jsx(gy, {
            media: t.media,
            currentIndex: n,
            onClose: () => i(!1)
        })]
    })
}
  , xy = () => {
    const {pathname: e} = Dn();
    return S.useEffect( () => {
        window.scrollTo(0, 0)
    }
    , [e]),
    null
}
  , Os = {
    security: {
        loadingScreen: !0
    },
    notifications: {
        discord: {
            position: "center",
            textColor: "#f87171",
            enabled: !0,
            showOnce: !1,
            message: "Our previous Discord server has been terminated. Please join our new community server for continued support and updates.",
            title: "Discord Server Notice",
            discordLink: "https://discord.gg/example"
        },
        announcement: {
            enabled: !0,
            showOnce: !1,
            message: "🎉 Spring Sale: Get 30% off all products with code SPRING30",
            textColor: "#ffffff",
            backgroundColor: "#1e40af",
            linkText: "Learn More",
            linkUrl: "/"
        }
    }
}
  , Is = () => {
    const e = localStorage.getItem("userPreferences");
    return e ? JSON.parse(e) : Os
}
  , wy = () => {
    const e = "0123456789abcdef";
    let t = "";
    for (let n = 0; n < 16; n++)
        t += e[Math.floor(Math.random() * e.length)];
    return t
}
  , ky = () => {
    const [e,t] = S.useState(!1)
      , n = Dn();
    return S.useEffect( () => {
        if (!Is().security.loadingScreen)
            return;
        if (Math.random() < .03) {
            t(!0);
            const i = setTimeout( () => {
                t(!1)
            }
            , 2e3);
            return () => clearTimeout(i)
        }
    }
    , [n.pathname]),
    e
}
  , Sy = () => {
    const [e,t] = S.useState("")
      , [n] = S.useState( () => wy());
    return S.useEffect( () => {
        fetch("https://api.ipify.org?format=json").then(r => r.json()).then(r => t(r.ip)).catch( () => t("Unknown"))
    }
    , []),
    c.jsxs("div", {
        className: "fixed inset-0 z-50 bg-zinc-900 flex flex-col items-center justify-center",
        children: [c.jsx(x1, {
            className: "w-16 h-16 text-blue-400 animate-bounce mb-8"
        }), c.jsx("h1", {
            className: "text-4xl font-bold mb-4",
            children: "Checking your browser..."
        }), c.jsx("p", {
            className: "text-xl text-gray-400 max-w-2xl text-center mb-8",
            children: "We need to check your browser to make sure that you're a legitimate user, this won't take long and you'll be directed to your requested content shortly..."
        }), c.jsx("div", {
            className: "w-64 h-2 bg-zinc-800 rounded-full overflow-hidden mb-8",
            children: c.jsx("div", {
                className: "h-full bg-blue-400 animate-[loading_2s_ease-in-out_infinite]"
            })
        }), c.jsx("p", {
            className: "text-gray-500",
            children: "Waiting for yoursite.com to respond..."
        }), c.jsxs("p", {
            className: "text-gray-600 text-sm mt-8",
            children: ["Ray ID: ", n, " • IP address: ", e || "..."]
        })]
    })
}
  , Ny = () => {
    const e = ky();
    return c.jsxs(c.Fragment, {
        children: [c.jsx(xy, {}), e && c.jsx(Sy, {}), c.jsxs("div", {
            className: "min-h-screen bg-zinc-900 text-white",
            children: [c.jsx(j1, {}), c.jsxs(o1, {
                children: [c.jsx(Sl, {
                    path: "/",
                    element: c.jsx(fy, {})
                }), c.jsx(Sl, {
                    path: "/status",
                    element: c.jsx(hy, {})
                }), c.jsx(Sl, {
                    path: "/product/:productId",
                    element: c.jsx(yy, {})
                })]
            }), c.jsx(P1, {})]
        })]
    })
}
  , Ey = () => {
    var a;
    const [e,t] = S.useState(!1)
      , [n,r] = S.useState(Os);
    S.useEffect( () => {
        var p;
        const s = Is();
        r(s);
        const u = localStorage.getItem("hasSeenDiscordNotice");
        (p = s == null ? void 0 : s.notifications) != null && p.discord && (!u || !s.notifications.discord.showOnce) && s.notifications.discord.enabled && t(!0)
    }
    , []);
    const l = () => {
        var s, u;
        (u = (s = n == null ? void 0 : n.notifications) == null ? void 0 : s.discord) != null && u.showOnce && localStorage.setItem("hasSeenDiscordNotice", "true"),
        t(!1)
    }
    ;
    if (!e || !((a = n == null ? void 0 : n.notifications) != null && a.discord))
        return null;
    const i = n.notifications.discord.position === "center" ? "fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm" : `fixed ${n.notifications.discord.position.split("-").join(" ")} m-4`
      , o = n.notifications.discord.position === "center" ? "w-full max-w-md mx-4" : "max-w-md";
    return c.jsx("div", {
        className: `z-50 ${i}`,
        children: c.jsx("div", {
            className: `${o} bg-zinc-900/95 backdrop-blur-sm border border-red-500/20 rounded-lg p-4 shadow-lg animate-fade-in`,
            children: c.jsxs("div", {
                className: "flex items-start justify-between",
                children: [c.jsxs("div", {
                    className: "flex-1 mr-4",
                    children: [c.jsx("h3", {
                        className: "text-lg font-semibold mb-2",
                        style: {
                            color: n.notifications.discord.textColor
                        },
                        children: n.notifications.discord.title
                    }), c.jsx("p", {
                        className: "text-gray-300",
                        children: n.notifications.discord.message
                    }), c.jsx("a", {
                        href: n.notifications.discord.discordLink,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-block mt-3 font-medium hover:opacity-80 transition-opacity",
                        style: {
                            color: n.notifications.discord.textColor
                        },
                        children: "Join New Server →"
                    })]
                }), c.jsx("button", {
                    onClick: l,
                    className: "text-gray-400 hover:text-white transition-colors",
                    children: c.jsx(yi, {
                        className: "h-5 w-5"
                    })
                })]
            })
        })
    })
}
  , Cy = () => {
    var p;
    const [e,t] = S.useState(!1)
      , [n,r] = S.useState(Os);
    S.useEffect( () => {
        var v;
        const d = Is();
        r(d);
        const h = localStorage.getItem("hasSeenAnnouncement");
        (v = d == null ? void 0 : d.notifications) != null && v.announcement && (!h || !d.notifications.announcement.showOnce) && d.notifications.announcement.enabled && t(!0)
    }
    , []),
    S.useEffect( () => {
        document.documentElement.style.setProperty("--announcement-height", e ? "40px" : "0px")
    }
    , [e]);
    const l = () => {
        var d, h;
        (h = (d = n == null ? void 0 : n.notifications) == null ? void 0 : d.announcement) != null && h.showOnce && localStorage.setItem("hasSeenAnnouncement", "true"),
        t(!1)
    }
    ;
    if (!e || !((p = n == null ? void 0 : n.notifications) != null && p.announcement))
        return null;
    const {message: i, textColor: o, backgroundColor: a, linkText: s, linkUrl: u} = n.notifications.announcement;
    return c.jsx("div", {
        className: "fixed top-0 left-0 right-0 z-50 h-10",
        style: {
            backgroundColor: a
        },
        children: c.jsx("div", {
            className: "max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8",
            children: c.jsxs("div", {
                className: "flex items-center justify-center flex-wrap",
                children: [c.jsxs("div", {
                    className: "flex-1 flex items-center justify-center min-w-0",
                    children: [c.jsx("span", {
                        className: "text-sm font-medium",
                        style: {
                            color: o
                        },
                        children: i
                    }), s && u && c.jsx(pe, {
                        to: u,
                        className: "ml-3 text-sm font-medium hover:opacity-80 transition-opacity underline",
                        style: {
                            color: o
                        },
                        children: s
                    })]
                }), c.jsx("button", {
                    onClick: l,
                    className: "ml-3 flex p-1 rounded-md hover:bg-white/10 transition-colors",
                    style: {
                        color: o
                    },
                    children: c.jsx(yi, {
                        className: "h-4 w-4"
                    })
                })]
            })
        })
    })
}
;
function jy() {
    return c.jsxs(p1, {
        children: [c.jsx(Cy, {}), c.jsx(Ny, {}), c.jsx(Ey, {})]
    })
}
Bd(document.getElementById("root")).render(c.jsx(S.StrictMode, {
    children: c.jsx(jy, {})
}));
