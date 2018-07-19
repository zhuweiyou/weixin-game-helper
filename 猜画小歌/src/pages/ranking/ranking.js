function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../game/api/playHistoryAPI.js")), a = e(require("../../game/api/leaderboardAPI.js")), s = e(require("../../common/soundFXController.js")), n = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    return t.default = e, t;
}(require("../../game/utils.js")), r = require("../../game/config/configManager"), i = require("../../libs/underscore/underscore.modified"), o = require("../../libs/av-live-query-weapp-min").User;

Page({
    data: {
        user: o.current()
    },
    onLoad: function(e) {
        wx.setNavigationBarTitle({
            title: "排行榜"
        }), this.applyConfig(), wx.showShareMenu({
            withShareTicket: !0
        }), this.setData({
            user: o.current()
        }), "vs" == e.tab ? this.loadVsTab() : this.loadPersonalBestTab();
    },
    applyConfig: function() {
        this.vsModeEnabled = r.configEnabled(r.VS_MODE_EXPERIMENT_NAME), this.setData({
            vsModeEnabled: this.vsModeEnabled
        }), r.configEnabled(r.LEANCLOUD_LEADERBOARD) ? this.setData({
            leaderboardTitle: "单局成绩排行榜"
        }) : this.setData({
            leaderboardTitle: "单局成绩排行榜（整点更新）"
        });
    },
    loadUserRank: function(e) {
        var s = this;
        if (t.default.hasFetchedPlayHistory()) {
            var i = t.default.getLatestPlayHistory(), l = i.attributes.endlessBestCount, u = i.attributes.endlessBestTime;
            if (this.setData({
                userLevelStr: i.getLevelStr(),
                endlessBestCount: l
            }), l > 0) if (r.configEnabled(r.LEANCLOUD_LEADERBOARD)) a.default.getUserRank(function(e) {
                s.setData({
                    userRank: s.rankStr(e)
                });
            }); else {
                for (var d = 0; d < e.length; d++) {
                    var c = e[d];
                    if (o.current().attributes.nickName == c.nickName && l == c.endlessBestCount && n.fancyTimeFormat(u) == n.fancyTimeFormat(c.endlessBestTime)) return void this.setData({
                        userRank: this.rankStr(d + 1)
                    });
                }
                t.default.fetchUserRank(l, u).then(function(e) {
                    e > 0 && s.setData({
                        userRank: s.rankStr(e)
                    });
                });
            }
        }
    },
    renderTop100: function(e) {
        i.each(e, function(e) {
            var t = {
                nickName: e.nickName,
                avatarUrl: e.avatarUrl
            };
            e.player = t, e.levelStr = n.getLevelStr(n.getLevel(e.passedWordsCount)), e.prettyDuration = n.fancyTimeFormat(e.endlessBestTime), 
            e.personalBestCount = e.endlessBestCount;
        }), this.setData({
            rankings: e
        });
    },
    handleTop100: function(e) {
        this.renderTop100(e), this.loadUserRank(e), this.setData({
            setLogo: !0
        });
    },
    loadLeaderboard: function() {
        var e = this;
        r.configEnabled(r.LEANCLOUD_LEADERBOARD) ? a.default.getTop100(function(t) {
            e.handleTop100(t);
        }) : t.default.fetchTop100().then(function(t) {
            e.handleTop100(t);
        });
    },
    loadPersonalBestTab: function() {
        this.loadLeaderboard(), this.setData({
            selectedTab: "personalBest"
        }), this.setData({
            personalBestClass: "selected"
        }), this.setData({
            vsClass: ""
        });
    },
    loadVsTab: function() {
        var e = this;
        this.vsRanking ? this.setData({
            rankings: this.vsRanking
        }) : t.default.fetchWorldVsPlayHistory().then(function(t) {
            e.vsRanking = t, i.each(t, function(e) {
                e.attributes.levelStr = e.getLevelStr();
            }), e.setData({
                rankings: e.vsRanking
            });
        }).catch(function(e) {
            console.log(e);
        }), this.setData({
            selectedTab: "vs"
        }), this.setData({
            personalBestClass: ""
        }), this.setData({
            vsClass: "selected"
        });
    },
    tapPersonalBestTab: function() {
        this.vsModeEnabled && (s.default.play("button-click"), this.loadPersonalBestTab());
    },
    tapVsTab: function() {
        this.vsModeEnabled && (s.default.play("button-click"), this.loadVsTab());
    },
    onShareAppMessage: function() {
        var e = o.current();
        return getApp().createShareMessage({
            template: "shareTemplateCommon",
            path: "/pages/home/home?uid=" + e.id,
            success: function(e) {
                getApp().onShareSuccess(e);
            }
        }, null);
    },
    rankStr: function(e) {
        return e <= 999 ? e : "999+";
    }
});