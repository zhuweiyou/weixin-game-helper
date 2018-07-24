function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
    };
}(), n = require("../../libs/av-live-query-weapp-min"), a = require("../../libs/underscore/underscore.modified"), s = require("../config/configManager"), r = void 0, o = function() {
    function o() {
        return e(this, o), r || (r = this), r;
    }
    return t(o, [ {
        key: "uploadLeaderboardFail",
        value: function(e) {
            var t = eventlog.getContext().data();
            throw t.action = "upload", eventlog.logEvent("leaderboard_fail", t), new Error(e);
        }
    } ], [ {
        key: "uploadStatistics",
        value: function(e, t, n) {
            o.uploadStatisticsInternal(o.endlessBestToScore({
                endlessBestCount: e,
                endlessBestTime: t
            }), n);
        }
    }, {
        key: "deleteStatistics",
        value: function(e) {
            o.uploadStatisticsInternal(-1, -1, e);
        }
    }, {
        key: "uploadStatisticsInternal",
        value: function(e, t, a) {
            s.configEnabled(s.LEANCLOUD_LEADERBOARD_UPLOAD) ? n.Leaderboard.updateStatistics(n.User.current(), {
                EndlessLeaderboard: e,
                CollectionCountLeaderboard: t
            }).then(function(e) {
                console.log(e), a && a();
            }).catch(function(e) {
                a && a();
            }) : a && a();
        }
    }, {
        key: "getUserRank",
        value: function(e) {
            n.Leaderboard.createWithoutData("EndlessLeaderboard").getResultsAroundUser({
                limit: 1
            }).then(function(t) {
                if (t.length > 0) {
                    var n = t[0];
                    e && e(n.rank + 1);
                }
            });
        }
    }, {
        key: "getTop100",
        value: function(e) {
            n.Leaderboard.createWithoutData("EndlessLeaderboard").getResults({
                limit: 100,
                skip: 0,
                selectUserKeys: [ "nickName", "avatarUrl" ],
                includeStatistics: [ "CollectionCountLeaderboard" ]
            }).then(function(t) {
                var n = [];
                a.each(t, function(e) {
                    var t = {}, a = e.value;
                    if (-1 !== a) {
                        t.nickName = e.user.attributes.nickName, t.avatarUrl = e.user.attributes.avatarUrl, 
                        t.passedWordsCount = e.includedStatistics[0].value;
                        var s = o.scoreToEndlessBest(a);
                        t.endlessBestCount = s.endlessBestCount, t.endlessBestTime = s.endlessBestTime, 
                        n.push(t);
                    }
                }), e && e(n);
            });
        }
    }, {
        key: "endlessBestToScore",
        value: function(e) {
            return 1e5 * e.endlessBestCount + 1e5 - e.endlessBestTime;
        }
    }, {
        key: "scoreToEndlessBest",
        value: function(e) {
            var t = e % 1e5;
            return 0 == t ? {
                endlessBestCount: 0,
                endlessBestTime: 0
            } : {
                endlessBestCount: Math.round((e - t) / 1e5),
                endlessBestTime: 1e5 - t
            };
        }
    } ]), o;
}();

exports.default = o, new o();