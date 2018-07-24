var e = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
}(require("../../game/utils.js")), t = require("../../game/controllers/endlessGameController.js"), r = require("../../libs/av-live-query-weapp-min").User;

Page({
    data: {},
    onLoad: function(e) {
        wx.showShareMenu({
            withShareTicket: !0
        });
        var o = getApp().invitedCompetition;
        this.gameController = new t.EndlessGameController(this, o), o && o.get("user").id == r.current().id ? this.gameController.showEndCardWithCompetition(o) : (this.gameController.prepareGame(), 
        this.gameController.openGame()), this.user = r.current();
    },
    onReady: function() {},
    onShow: function() {
        this.gameController.showGame();
    },
    onHide: function() {
        this.gameController.hideGame();
    },
    onUnload: function() {
        this.gameController && (this.gameController.unload(), this.gameController.reset()), 
        getApp().invitedCompetition = void 0;
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var t = this.gameController.getCompetition(), r = {
            path: "/pages/challenge/challenge" + e.toParamStr({
                source: "wxcard",
                mode: "endless",
                uid: this.user.id,
                cid: t ? t.id : ""
            }),
            success: function(e) {
                getApp().onShareSuccess(e);
            }
        };
        if (this.gameController.isGameEnded()) {
            var o = this.gameController.getCompetition().get("result").total.round_pass, n = e.getThemeSchemeFromRoundCount(o + 1);
            return r.template = "shareTemplateEndGame", r.templateArg = o, getApp().createShareMessage(r, "http://www.gstatic.com/qilin/drawtogether/sharecards/" + o + "-" + n + ".png");
        }
        return r.template = "shareTemplateCommon", getApp().createShareMessage(r);
    }
});