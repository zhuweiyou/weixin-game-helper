function e(e) {
    if (e && e.__esModule) return e;
    var n = {};
    if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
    return n.default = e, n;
}

function n(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
    function e(e, n) {
        for (var t = 0; t < n.length; t++) {
            var r = n[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(n, t, r) {
        return t && e(n.prototype, t), r && e(n, r), n;
    };
}(), r = e(require("./rpcLayer.js")), i = require("../config.js"), a = e(require("./gameAPI.js")), o = require("../../common/initState.js"), u = require("../../libs/av-live-query-weapp-min"), s = require("../models/playHistory"), l = void 0, c = function() {
    function e() {
        return n(this, e), l || (l = this), l;
    }
    return t(e, null, [ {
        key: "initialFetch",
        value: function() {
            return new Promise(function(e, n) {
                if (null == u.User.current()) return n({
                    code: o.InitFailAction.FETCH_PLAY_HISTORY,
                    cause: "AV.User.current() is null"
                }), void (l.playHistory = null);
                a.getOrCreate(s, "player", u.User.current()).then(function(n) {
                    l.playHistory = n, e(n);
                }).catch(function(e) {
                    n({
                        code: o.InitFailAction.FETCH_PLAY_HISTORY,
                        cause: e
                    }), l.playHistory = null;
                });
            });
        }
    }, {
        key: "fetchWorldPersonalBestPlayHistory",
        value: function() {
            return new u.Query(s).include("player").select([ "player.nickName", "player.avatarUrl", "level" ]).addDescending("personalBestCount").addAscending("personalBestTime").addDescending("updatedAt").greaterThan("personalBestCount", 0).limit(100).find();
        }
    }, {
        key: "fetchTop100",
        value: function() {
            return new Promise(function(e, n) {
                r.invokeHttpRequest("top100API", i.config.top100_api, {}, "GET", "", function(n) {
                    e(n.data);
                }, function(n) {
                    e([]), wx.showToast({
                        title: "网络不给力",
                        image: "/assets/icon/cross.svg",
                        duration: 2e3
                    });
                }, {
                    retrying: !0,
                    timeoutPeriod: 1e4
                });
            });
        }
    }, {
        key: "fetchUserRank",
        value: function(e, n) {
            return console.log("endlessBestCount, endlessBestTime: ", e, n), new Promise(function(t, a) {
                r.invokeHttpRequest("userRankAPI", i.config.user_rank_api, {
                    endlessBestCount: e,
                    endlessBestTime: n
                }, "GET", "", function(e) {
                    t(e.data);
                }, function(e) {
                    a(-1);
                }, {
                    retrying: !0,
                    timeoutPeriod: 1e4
                });
            });
        }
    }, {
        key: "fetchWorldVsPlayHistory",
        value: function() {
            return new u.Query(s).include("player").select([ "player.nickName", "player.avatarUrl", "level" ]).greaterThanOrEqualTo("vsGameCount", 10).addDescending("vsWinRate").addDescending("vsGameCount").addDescending("updatedAt").limit(100).find();
        }
    }, {
        key: "hasFetchedPlayHistory",
        value: function() {
            return !!l.playHistory;
        }
    }, {
        key: "fetch",
        value: function() {
            return new u.Query(s).equalTo("player", u.User.current()).find().then(function(e) {
                if (e.length < 1) throw new Error("Cannot find user play history. User: ", u.User.current());
                return l.playHistory = e[0], l.playHistory;
            });
        }
    }, {
        key: "getLatestPlayHistory",
        value: function() {
            return l.playHistory;
        }
    }, {
        key: "setLatestPlayHistory",
        value: function(e) {
            l.playHistory = e;
        }
    } ]), e;
}();

exports.default = c, new c();