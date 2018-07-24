function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function e(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function r(t, e) {
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

var n = function() {
    function t(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    return function(e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e;
    };
}(), a = require("../../libs/av-live-query-weapp-min"), o = function(o) {
    function s() {
        return t(this, s), e(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }
    return r(s, a.Object), n(s, [ {
        key: "isAllAvailable",
        value: function() {
            return null != this.get("creator") && null != this.get("challenger") && this.get("creator_status") == s.STATUS_AVAILABLE && this.get("challenger_status") == s.STATUS_AVAILABLE;
        }
    }, {
        key: "isAllPaired",
        value: function() {
            return null != this.get("creator") && null != this.get("challenger") && this.get("creator_status") == s.STATUS_PAIRED && this.get("challenger_status") == s.STATUS_PAIRED;
        }
    }, {
        key: "updatePlayersStatus",
        value: function(t) {
            this.set("creator_status", t), this.set("challenger_status", t);
        }
    }, {
        key: "setRoomStatusPaired",
        value: function() {
            this.updatePlayersStatus(s.STATUS_PAIRED);
        }
    }, {
        key: "setRoomStatusPlaying",
        value: function() {
            this.updatePlayersStatus(s.STATUS_PLAYING);
        }
    }, {
        key: "creator_status",
        set: function(t) {
            console.log("creator status updated:" + t), this.set("creator_status", t);
        }
    } ]), s;
}();

o.STATUS_AVAILABLE = "available", o.STATUS_PAIRED = "paired", o.STATUS_OFFLINE = "offline", 
o.STATUS_PLAYING = "playing", o.ROLE_CREATOR = "creator", o.ROLE_CHALLENGER = "challenger", 
a.Object.register(o, "Room"), module.exports = o;