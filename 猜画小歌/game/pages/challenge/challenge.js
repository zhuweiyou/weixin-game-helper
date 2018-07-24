function e(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    return t.default = e, t;
}

function t(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var i = t(require("../../game/svgUtils.js")), o = e(require("../../game/api/gameAPI.js")), n = e(require("../../game/utils.js")), a = t(require("../../common/soundFXController.js")), r = t(require("../../game/imageEncoding.js")), s = require("../../game/config.js"), d = require("../../common/initState"), c = require("../../game/widgets/digitImage.js"), g = require("../../libs/av-live-query-weapp-min").User, u = require("../../libs/underscore/underscore.modified");

Page({
    data: {
        user: null,
        appName: s.config.app_name,
        digitImageData: void 0,
        themeScheme: "underwater"
    },
    onLoad: function(e) {
        if (this.loaded = !0, u.isEmpty(e) && (e = getApp().ops.query), wx.showShareMenu({
            withShareTicket: !0
        }), "endless" == e.mode) "wxcard" == e.source && this.showCompetition(e.cid); else {
            var t = decodeURIComponent(e.scene), i = this.getSceneMode(t);
            "m1" === i ? this.showCompetition(this.getCompetitionIdFromScene(t)) : (console.log("Unrecognized scene mode:", i), 
            this.redirectToHome());
        }
    },
    getSceneMode: function(e) {
        var t = e.split("&");
        if (0 !== t.length) return t[0];
    },
    getCompetitionIdFromScene: function(e) {
        return e.split("&")[1];
    },
    showCompetition: function(e) {
        var t = this;
        o.fetchCompetition(e).then(function(e) {
            e.get("deleted") ? getApp().redirectToHome() : (t.competition = e, t.showInvitationPage());
        }).catch(function(t) {
            console.log("Could not load competition", e, t), getApp().redirectToHome();
        });
    },
    redirectToHome: function() {
        wx.redirectTo({
            url: "/pages/home/home"
        });
    },
    renderInvitationPageLowerContainer: function(e) {
        u.each(e, function(e, t) {
            e.drawingSvg = i.default.createSvgBase64FromSegments(r.default.decode(e.drawing), 180, 120, {
                padding: 25
            });
        }), this.setData({
            rounds: e
        });
    },
    showInvitationPage: function() {
        var e = this.competition.get("user"), t = this.competition.get("result"), i = t ? t.total : void 0, o = i ? i.round_pass : 0, a = n.getThemeSchemeFromRoundCount(o + 1);
        this.setData({
            user: e,
            themeScheme: a
        }), getApp().setNavigationBar(s.config.app_title, a), this.digitImage = new c.DigitImage(this), 
        this.digitImage.setDigits(o, e.get("nickName") + "本局成功画出", "张", a), this.setData({
            digitImageData: this.digitImage.getData()
        }), t && this.renderInvitationPageLowerContainer(t.detailed);
    },
    onReady: function() {},
    onShow: function() {
        var e = this;
        if (this.loaded) {
            if (getApp().getInitState() === d.InitState.LOADING) return wx.showLoading({
                title: "加载中"
            }), void setTimeout(function() {
                e.onShow();
            }, 300);
            wx.hideLoading(), getApp().getInitState() !== d.InitState.SUCCESS && getApp().redirectToHome();
        }
    },
    onHide: function() {},
    onUnload: function() {
        wx.hideLoading(), this.loaded = !1;
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var e = g.current();
        return getApp().createShareMessage({
            template: "shareTemplateCommon",
            path: "/pages/home/home?uid=" + e.id,
            success: function(e) {
                getApp().onShareSuccess(e);
            }
        });
    },
    buttonStartDrawing: function() {
        this.competition.get("user").id !== g.current().id && (getApp().invitedCompetition = this.competition), 
        getApp().setLoadingTarget("/pages/endless/endless"), getApp().redirectToHome();
    },
    playClickSound: function() {
        a.default.play("button-click");
    }
});