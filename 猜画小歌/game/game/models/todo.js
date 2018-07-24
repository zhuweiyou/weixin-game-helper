function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function n(e, t) {
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

var o = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
    };
}(), r = require("../../libs/av-live-query-weapp-min"), i = function(i) {
    function u() {
        return e(this, u), t(this, (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments));
    }
    return n(u, r.Object), o(u, [ {
        key: "done",
        get: function() {
            return this.get("done");
        },
        set: function(e) {
            this.set("done", e);
        }
    }, {
        key: "content",
        get: function() {
            return this.get("content");
        },
        set: function(e) {
            this.set("content", e);
        }
    } ]), u;
}();

r.Object.register(i, "Todo"), module.exports = i;