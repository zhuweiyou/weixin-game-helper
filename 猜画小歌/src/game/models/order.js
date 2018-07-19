function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function e(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function n(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

var r = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(t, r.key, r);
        }
    }
    return function(e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
    };
}(), i = require("../../libs/av-live-query-weapp-min"), o = function(o) {
    function u() {
        return t(this, u), e(this, (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments));
    }
    return n(u, i.Object), r(u, [ {
        key: "tradeId",
        get: function() {
            return this.get("tradeId");
        },
        set: function(t) {
            this.set("tradeId", t);
        }
    }, {
        key: "amount",
        get: function() {
            return this.get("amount");
        },
        set: function(t) {
            this.set("amount", t);
        }
    }, {
        key: "user",
        get: function() {
            return this.get("user");
        },
        set: function(t) {
            this.set("user", t);
        }
    }, {
        key: "productDescription",
        get: function() {
            return this.get("productDescription");
        },
        set: function(t) {
            this.set("productDescription", t);
        }
    }, {
        key: "status",
        get: function() {
            return this.get("status");
        },
        set: function(t) {
            this.set("status", t);
        }
    }, {
        key: "ip",
        get: function() {
            return this.get("ip");
        },
        set: function(t) {
            this.set("ip", t);
        }
    }, {
        key: "tradeType",
        get: function() {
            return this.get("tradeType");
        },
        set: function(t) {
            this.set("tradeType", t);
        }
    }, {
        key: "prepayId",
        get: function() {
            return this.get("prepayId");
        },
        set: function(t) {
            this.set("prepayId", t);
        }
    }, {
        key: "paidAt",
        get: function() {
            return this.get("paidAt");
        },
        set: function(t) {
            this.set("paidAt", t);
        }
    } ]), u;
}();

i.Object.register(o), module.exports = o;