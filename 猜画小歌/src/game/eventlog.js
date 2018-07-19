function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function e() {
    return Date.now().toString() + Math.random().toString();
}

function n(t, e) {
    return (u.find(e, function(e) {
        return t <= e;
    }) || "INF").toString();
}

function r() {
    return a = void 0, new c();
}

function o() {
    var t = getCurrentPages();
    return t.length > 0 ? t[t.length - 1].route : void 0;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = function() {
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
}();

exports.getContext = function() {
    return a;
}, exports.reset = r, exports.getCurrentPage = o, exports.logEvent = function(t, e) {
    console.log("report event:", t, e), wx.reportAnalytics(t, e);
};

var s = require("config/configManager"), u = require("../libs/underscore/underscore.modified"), a = void 0, c = exports.EventContext = function() {
    function r() {
        return t(this, r), a || (a = this).initSession(), a;
    }
    return i(r, [ {
        key: "data",
        value: function() {
            var t = Object.assign({}, this);
            return t.session_start && (t.session_time_ms = Date.now() - t.session_start), t.game_start && (t.game_time_ms = Date.now() - t.game_start), 
            t.round_count && (t.round_bucket = n(t.round_count, s.getArrayValue("ROUND_COUNT_BUCKETS", []))), 
            t.current_page = o(), t;
        }
    }, {
        key: "initSession",
        value: function() {
            this.session_id = e(), this.session_start = Date.now(), this.play_count = 0;
        }
    }, {
        key: "initEndlessGame",
        value: function() {
            this.game_start = Date.now();
        }
    } ]), r;
}();

r();