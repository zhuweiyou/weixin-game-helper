function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../game/svgUtils.js")), o = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    return t.default = e, t;
}(require("../../game/api/gameAPI.js")), r = e(require("../../common/soundFXController.js")), n = e(require("../../game/imageEncoding.js")), i = require("../../game/config.js"), a = require("../../common/initState"), d = require("../../libs/av-live-query-weapp-min").User, u = require("../../libs/underscore/underscore.modified");

Page({
    data: {
        user: null,
        appName: i.config.app_name,
        loaded: !1
    },
    onShow: function(e) {
        var t = this;
        if (getApp().getInitState() === a.InitState.LOADING) return wx.showLoading({
            title: "加载中"
        }), void setTimeout(function() {
            t.onShow();
        }, 300);
        wx.hideLoading(), getApp().getInitState() !== a.InitState.SUCCESS && getApp().redirectToHome(), 
        u.isEmpty(e) && (e = getApp().ops.query), e.cId && e.roundNumber ? o.fetchCompetition(e.cId).then(function(o) {
            if (o.get("deleted")) getApp().redirectToHome(); else {
                t.setData({
                    user: o.get("user")
                });
                var r = o.get("result");
                if (r && r.detailed && r.detailed.length > e.roundNumber) {
                    var n = r.detailed[e.roundNumber];
                    t.showRoundDetails(n.word, n.drawing, n.recognized, n.duration);
                } else getApp().redirectToHome();
            }
        }).catch(function(e) {
            getApp().redirectToHome();
        }) : e.recordId ? o.fetchRecord(e.recordId).then(function(e) {
            t.setData({
                user: e.get("user")
            }), t.showRoundDetails(e.get("word"), JSON.parse(e.get("image")), e.get("recognized"), e.get("duration"));
        }).catch(function(e) {
            getApp().redirectToHome();
        }) : (console.log("Unrecognized single image inv entrance options: ", e), getApp().redirectToHome());
    },
    onUnload: function() {
        wx.hideLoading(), this.loaded = !1;
    },
    showRoundDetails: function(e, o, r, i) {
        var a = wx.getStorageSync("words"), d = a && a[e] && a[e].wordZhCn ? a[e].wordZhCn : e, u = n.default.decode(o), s = t.default.createSvgBase64FromSegments(u, 250, 200, {
            padding: 25
        }), c = Math.floor(10 * i) / 10;
        this.setData({
            drawingSvg: s,
            wordZhCn: d,
            recognized: r,
            duration: c,
            loaded: !0
        });
    },
    buttonStartDrawing: function() {
        getApp().setLoadingTarget("/pages/endless/endless"), getApp().redirectToHome();
    },
    buttonGoHome: function() {
        getApp().redirectToHome();
    },
    onShareAppMessage: function() {
        var e = d.current();
        return getApp().createShareMessage({
            template: "shareTemplateCommon",
            path: "/pages/home/home?uid=" + e.id,
            success: function(e) {
                getApp().onShareSuccess(e);
            }
        });
    },
    playClickSound: function() {
        r.default.play("button-click");
    }
});