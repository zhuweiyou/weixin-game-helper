function e(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
}

function t(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var r = require("../../game/mockData.js"), a = t(require("../../game/api/generateShareResultAPI.js")), i = t(require("../../game/api/playHistoryAPI.js")), n = t(require("../../common/soundFXController.js")), o = t(require("../../game/svgUtils.js")), s = e(require("../../game/api/gameAPI.js")), u = e(require("../../game/utils.js")), h = require("../../game/widgets/popup.js"), d = t(require("../../game/imageEncoding.js")), c = require("../../game/config/configManager"), g = require("../../libs/av-live-query-weapp-min").User;

Page({
    data: {
        gallerys: []
    },
    onLoad: function(e) {
        if (wx.showShareMenu({
            withShareTicket: !0
        }), this.round = getApp().currentRound || r.gameround, !this.round) throw new Error("Cannot find current round!");
        wx.setNavigationBarTitle({
            title: this.round.wordZhCn
        }), this.setData({
            recognized: this.isRecognized()
        }), this.popup = new h.PopupView(this), this.competitionId = e.cId, this.showRoundDetails();
    },
    isRecognized: function() {
        return void 0 === this.round.recognized || this.round.recognized;
    },
    showRoundDetails: function() {
        this.setData({
            roundDetailWord: this.round.wordZhCn,
            myDrawing: this.round.drawingSvg
        }), this.next = 0, this.hasNext = void 0 === this.round.recognized || this.round.recognized, 
        this.reportedDrawings = {}, this.hasNext && this.fetchAndShowGallery();
    },
    handleLongPress: function(e) {
        var t = this, r = e.currentTarget.dataset.id;
        this.reportedDrawings[r] || this.popup.showAlert("举报不当画作", "我认为该画作有不恰当的地方", "确认举报", function() {
            s.reportDrawing(r, g.current()).then(function() {
                t.reportedDrawings[r] = !0, wx.showToast({
                    title: "您已举报该画作",
                    icon: "success"
                });
            }).catch(function(e) {
                wx.showToast({
                    title: "举报失败",
                    image: "/assets/icon/cross.svg"
                });
            });
        });
    },
    playClickSound: function() {
        n.default.play("button-click");
    },
    shareImageToMoment: function() {
        var e = this;
        a.default.checkSaveImagePermission(function() {
            e.createSharePhoto(function(t) {
                e.showSavedPhotoDialog(t);
            });
        });
    },
    createSharePhoto: function(e) {
        var t = this.getShareRequestParameters();
        return t.levelStr = i.default.getLatestPlayHistory().getLevelStr(), t.userId = g.current().id, 
        a.default.generateShareResult(t, e);
    },
    catchTap: function() {},
    dismissSavedPhoto: function() {
        this.setData({
            savedPhotoDialogClass: ""
        });
    },
    showSavedPhotoDialog: function(e) {
        n.default.play("button-click"), this.setData({
            savedPhotoDialogClass: "visible",
            savedPhotoImageSrc: e
        });
    },
    fetchAndShowGallery: function() {
        var e = this;
        return s.fetchGallery(this.round.word, this.next).then(function(t) {
            if (0 == t.length && 0 == e.data.gallerys.length) return console.log("End of records reached"), 
            void (e.hasNext = !1);
            for (var r = [], a = 0; a < t.length; a++) {
                var i = void 0, n = void 0;
                c.configEnabled(c.FETCH_GALLERY_FROM_API_SERVER) ? (i = t[a].image, n = t[a].objectId) : (i = t[a].get("image"), 
                n = t[a].getObjectId()), r.push({
                    svg: o.default.createSvgBase64FromSegments(d.default.decode(JSON.parse(i)), 180, 120, {
                        padding: 10
                    }),
                    record_id: n
                });
            }
            e.setData({
                gallerys: e.data.gallerys.concat(r)
            }), e.next++;
        }).catch(function(e) {
            throw new Error(e);
        });
    },
    onReachBottom: function() {
        this.hasNext && this.fetchAndShowGallery();
    },
    onShareAppMessage: function() {
        var e = g.current(), t = this.getShareRequestParameters(), r = this.getShareRequestParametersWithUid(e), i = "/pages/singleImageInvitation/singleImageInvitation" + u.toParamStr(r);
        return getApp().createShareMessage({
            template: this.isRecognized() ? "shareTemplateSingleDrawingSuccess" : "shareTemplateSingleDrawingFail",
            templateArg: this.round.wordZhCn,
            path: i,
            success: function(e) {
                getApp().onShareSuccess(e);
            }
        }, a.default.getShareCardRequest(t));
    },
    getShareRequestParameters: function() {
        var e = {};
        return this.competitionId ? (e.cId = this.competitionId, e.roundNumber = this.round.level ? this.round.level - 1 : this.round.round - 1) : (e.cId = this.round.competitionId, 
        e.roundNumber = this.round.round), e;
    },
    getShareRequestParametersWithUid: function(e) {
        var t = this.getShareRequestParameters();
        return t.uid = e.id, t;
    }
});