function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function r(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

var o = require("../../libs/av-live-query-weapp-min"), n = function(n) {
    function i() {
        return e(this, i), t(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
    }
    return r(i, o.Object), i;
}();

o.Object.register(n, "FeedBack"), module.exports = n;