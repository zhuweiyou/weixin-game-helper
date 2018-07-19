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

var n = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), o = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
}(require("../utils.js")), u = require("../../libs/av-live-query-weapp-min"), i = require("../config/configManager"), a = function(a) {
    function l() {
        return e(this, l), t(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments));
    }
    return r(l, u.Object), n(l, [ {
        key: "getPrettyDuration",
        value: function() {
            return o.textTimeFormat(this.get("personalBestTime"));
        }
    }, {
        key: "betterThan",
        value: function(e) {
            return this.get("endlessBestCount") > e.get("endlessBestCount");
        }
    }, {
        key: "getExp",
        value: function() {
            return this.get("passedWords").length;
        }
    }, {
        key: "getLevel",
        value: function() {
            return o.getLevel(this.getExp());
        }
    }, {
        key: "getLevelStr",
        value: function() {
            return o.getLevelStr(this.getLevel());
        }
    }, {
        key: "getLevelUpProgress",
        value: function() {
            for (var e = this.getLevel(), t = i.getArrayValue("LEVEL_LADDER", []), r = 0, n = 0; n < e - 1; n++) r += t[n];
            var o = this.getExp() - r, u = t[e - 1];
            return {
                progressText: "再解锁" + (u - o) + "个新词",
                leftText: "Lv." + e,
                rightText: "Lv." + Math.min(e + 1, t.length),
                percent: Math.floor(o / u * 100)
            };
        }
    } ], [ {
        key: "fromJson",
        value: function(e) {
            return o.AVObjectfromJson(e, function(e) {
                return new l(e);
            });
        }
    } ]), l;
}();

u.Object.register(a, "PlayHistory"), module.exports = a;