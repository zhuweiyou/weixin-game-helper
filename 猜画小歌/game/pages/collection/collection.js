function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../common/soundFXController.js")), a = e(require("../../game/svgUtils.js")), n = e(require("../../game/tooltipUtils.js")), o = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    return t.default = e, t;
}(require("../../game/api/gameAPI.js")), i = e(require("../../game/api/playHistoryAPI.js")), r = e(require("../../game/imageEncoding.js")), s = require("../../libs/av-live-query-weapp-min").User, u = require("../../libs/underscore/underscore.modified"), l = void 0;

Page({
    data: {
        words: "",
        showAll: !0,
        showWord: !1,
        user: s.current()
    },
    onLoad: function(e) {
        var t = this;
        wx.setNavigationBarTitle({
            title: "我的画作"
        }), wx.showShareMenu({
            withShareTicket: !0
        }), this.setData({
            user: s.current()
        });
        var c = i.default.getLatestPlayHistory();
        l = wx.getStorageSync("words"), this.setData({
            progressData: c.getLevelUpProgress(),
            userLevel: c.getLevelStr(),
            showTooltip: n.default.shouldShow("collection"),
            hasMore: c.getExp() < u.size(l)
        }), wx.showLoading({
            title: "加载中"
        }), o.fetchCollections(s.current()).then(function(e) {
            u.each(e, function(e) {
                var t = e.get("word");
                l[t] && (l[t].status = l[t].status || e.get("recognized"), e.get("recognized") && (l[t].drawingSvg = a.default.createSvgBase64FromSegments(r.default.decode(JSON.parse(e.get("image"))), 120, 120, {
                    padding: 0
                }), l[t].competitionId = e.get("competition").id, l[t].round = e.get("round")));
            }), t.setDataWithMultipleSegements(l), wx.hideLoading();
        }).catch(function(e) {
            wx.hideLoading(), wx.showToast({
                title: "无法加载图片，请重试",
                image: "/assets/icon/cross.svg"
            });
        });
    },
    setDataWithMultipleSegements: function(e) {
        var t = 0, a = [], n = [];
        u.each(e, function(e, o, i) {
            t % 10 == 0 && (n.push({}), a.push(0)), t++, n[n.length - 1][o] = e;
        }), console.log("bucketIndex length: " + a.length);
        var o = u.pick(e, function(e, t, a) {
            return e.status;
        });
        this.setData({
            bucketIndex: a,
            totalNum: Object.keys(o).length
        }), this.setDataInSequence(n, 0);
    },
    setDataInSequence: function(e, t) {
        var a = this;
        if (!(t >= e.length)) {
            var n = {};
            n["words[" + t + "]"] = e[t], this.setData(n), u.defer(function() {
                a.setDataInSequence(e, t + 1);
            });
        }
    },
    playClickSound: function(e) {
        t.default.play("button-click");
    },
    handleCollectionTap: function(e) {
        this.playClickSound();
        var t = e.currentTarget.dataset.index;
        l[t].competitionId && l[t].round && (n.default.tickCount("collection"), getApp().currentRound = l[t], 
        wx.navigateTo({
            url: "/pages/roundDetail/roundDetail"
        }));
    },
    showAllToggle: function(e) {
        this.setData({
            showAll: e.detail.value
        });
    },
    onShareAppMessage: function() {
        var e = s.current();
        return getApp().createShareMessage({
            template: "shareTemplateCommon",
            path: "/pages/home/home?uid=" + e.id,
            success: function(e) {
                getApp().onShareSuccess(e);
            }
        }, null);
    }
});