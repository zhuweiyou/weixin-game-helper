function t(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e.default = t, e;
}

function e(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function a(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function i(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function s(t, e) {
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

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.CardsView = void 0;

var n = function() {
    function t(t, e) {
        for (var a = 0; a < e.length; a++) {
            var i = e[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, a, i) {
        return a && t(e.prototype, a), i && t(e, i), e;
    };
}(), o = e(require("../events.js")), r = e(require("../../common/soundFXController.js")), l = e(require("../svgUtils.js")), d = e(require("../tooltipUtils.js")), u = e(require("../imageEncoding.js")), h = t(require("../api/gameAPI.js")), c = t(require("../utils.js")), g = require("../../game/config.js"), v = t(require("../../game/eventlog.js")), f = require("../../game/widgets/digitImage.js"), C = require("../../libs/underscore/underscore.modified");

exports.CardsView = function(t) {
    function e(t) {
        a(this, e);
        var s = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
        return s.page = t, s.data = {}, s.page.buttonNewRoundReady = s.buttonNewRoundReady.bind(s), 
        s.page.buttonStartGame = s.buttonStartGame.bind(s), s.page.playClickSound = s.playClickSound.bind(s), 
        s.page.showFinalEndCard = s.showFinalEndCard.bind(s), s.page.dismissSavedPhoto = s.dismissSavedPhoto.bind(s), 
        s;
    }
    return s(e, o.default), n(e, [ {
        key: "setData",
        value: function(t, e) {
            this.data[t] = e, this.page.setData({
                cardsViewData: this.data
            });
        }
    }, {
        key: "hideCard",
        value: function(t, e) {
            t.isVisible = !1, t.hasClass("visible") && (t.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                t.hide(), t.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), 
                e && e();
            }), t.removeClass("visible"));
        }
    }, {
        key: "showTutorialCard",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments[1], a = arguments[2];
            setTimeout(function() {
                r.default.play("swish");
            }, 100), this.setData("tutorialCardClass", "visible"), this.setData("tutorialCardTextClass", "");
            for (var i in t) this.setData(i, t[i]);
            e && setTimeout(a, e);
        }
    }, {
        key: "hideTutorialCard",
        value: function() {
            this.setData("tutorialCardClass", ""), this.setData("tutorialCardTextClass", "zoom-out");
        }
    }, {
        key: "showNewRoundBreakCard",
        value: function(t, e) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "underwater";
            r.default.play("tada"), this.setData("newRoundBreakCardClass", "visible");
            var i = Math.floor(t / 10), s = t - 10 * i;
            this.setData("showTensDigit", i > 0), this.setData("tensDigitSrc", c.getGStaticUrl("numbers/digit-" + i + "-" + a + ".svg")), 
            this.setData("passedWordsCount", e), this.setData("onesDigitSrc", c.getGStaticUrl("numbers/digit-" + s + "-" + a + ".svg"));
        }
    }, {
        key: "buttonNewRoundReady",
        value: function() {
            this.setData("newRoundBreakCardClass", ""), this.page.gameController.startNextRound();
        }
    }, {
        key: "buttonStartGame",
        value: function() {
            this.hideTutorialCard(), this.emit("START_GAME");
        }
    }, {
        key: "playClickSound",
        value: function() {
            r.default.play("button-click");
        }
    }, {
        key: "showGameOverCard",
        value: function(t) {
            return r.default.play("game-end"), this.setData("gameOverCardClass", "visible"), 
            this.setData("word", t.wordZhCn), this.setData("theme", t.theme), t.callback && t.callback(), 
            new Promise(function(t) {
                return setTimeout(t, 1e3);
            });
        }
    }, {
        key: "isBetter",
        value: function(t, e) {
            return e.round_pass > t.round_pass || e.round_pass == t.round_pass && e.duration < t.duration;
        }
    }, {
        key: "renderEndCardLowerContainer",
        value: function(t, e, a, i) {
            var s = this;
            this.page.showRoundDetails = function(e) {
                s.showRoundDetails(e, t, i);
            };
            for (var n = 0; n < a.length; n++) {
                var o = a[n];
                a[n].drawingSvg = l.default.createSvgBase64FromSegments(u.default.decode(o.drawing), 180, 120, {
                    padding: 25
                });
            }
            this.setData(e, a);
        }
    }, {
        key: "showFinalCongratCard",
        value: function(t) {
            r.default.play("tada"), this.page.playAgain = this.playAgain.bind(this), this.page.shareFinalCongrat = this.shareFinalCongrat.bind(this), 
            this.setData("wordCount", t.wordCount), this.setData("finalCongratCardClass", "visible"), 
            getApp().setNavigationBar(g.config.app_title, "final-congrat");
        }
    }, {
        key: "shareFinalCongrat",
        value: function() {}
    }, {
        key: "showEndlessEndCard",
        value: function(t, e, a, i, s, n, o) {
            var r = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : void 0;
            arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
            this.page.playAgain = this.playAgain.bind(this), this.page.backToHome = this.backToHome.bind(this), 
            this.page.saveToAlbum = this.saveToAlbum.bind(this), this.page.shareGameResult = this.shareGameResult.bind(this);
            var l = C.filter(e, function(t) {
                return 1 == t.recognized;
            }).length;
            if (0 != l || void 0 != r) {
                this.digitImage = new f.DigitImage(this), this.digitImage.setDigits(l, "本局成功画出", "张", o), 
                this.setData("digitImageData", this.digitImage.getData()), n.theme = o, this.setData("progressData", n), 
                this.setData("showTooltip", d.default.shouldShow("endcard"));
                var u = h.calFinalResult(e);
                if (u.prettyDuration = c.fancyTimeFormat(u.duration), this.setData("levelStr", s), 
                this.setData("endCardClass", "visible"), this.setData("theme", o), this.setData("user", a), 
                getApp().setNavigationBar(g.config.app_title, o), void 0 != r) {
                    this.setData("showChallenge", !0);
                    var v = r.get("result").total;
                    v.prettyDuration = c.fancyTimeFormat(v.duration), this.setData("challenger", a), 
                    this.setData("challengerResult", u), this.setData("creator", r.get("user")), this.setData("creatorResult", v), 
                    this.setData("isChallengeSucceed", this.isBetter(v, u));
                } else this.setData("showChallenge", !1), this.setData("result", u), this.setData("isNewRecord", t);
                this.renderEndCardLowerContainer("endless", "rounds", e, i), this.timesRoundResultClicked = 0;
            } else this.setData("endCardZeroPassClass", "visible");
        }
    }, {
        key: "isShowingEndCard",
        value: function() {
            return "visible" == this.data.endCardClass;
        }
    }, {
        key: "showVsEndCard",
        value: function(t, e, a, i) {
            this.page.playAgain = this.playAgain.bind(this), this.page.saveToAlbum = this.saveToAlbum.bind(this), 
            t.total.prettyDuration = c.fancyTimeFormat(t.total.duration), e.total.prettyDuration = c.fancyTimeFormat(e.total.duration), 
            this.setData("creatorResult", t), this.setData("challengerResult", e), this.renderEndCardLowerContainer("vs", "creatorDrawings", t.detailed, i, []), 
            this.renderEndCardLowerContainer("vs", "challengerDrawings", e.detailed, i, []);
            var s = Math.max(t.detailed.length, e.detailed.length, 1);
            this.setData("competeRound", s), a = {
                WIN: {
                    theme: "light",
                    text: "对战胜利"
                },
                LOSE: {
                    theme: "black",
                    text: "对战失败"
                },
                TIE: {
                    theme: "dark",
                    text: "势均力敌"
                }
            }[a], getApp().setNavigationBar("本局结果", a.theme), this.setData("theme", a.theme), 
            this.setData("outcome", a.text), this.setData("endCardClass", "visible");
        }
    }, {
        key: "hideEndCardFooter",
        value: function() {
            this.setData("endCardFooterClass", "hide");
        }
    }, {
        key: "showEndCardFooter",
        value: function() {
            this.setData("endCardFooterClass", "");
        }
    }, {
        key: "hideEndCards",
        value: function() {
            this.setData("endCardClass", ""), this.setData("gameOverCardClass", ""), this.setData("endCardZeroPassClass", ""), 
            this.setData("finalCongratCardClass", "");
        }
    }, {
        key: "setReplayStatus",
        value: function(t) {
            this.setData("replayStatus", t);
        }
    }, {
        key: "showRoundDetails",
        value: function(t, e, a) {
            var i = this;
            this.playClickSound();
            var s = t.currentTarget.dataset.index, n = t.currentTarget.dataset.rounds, o = this.data[n][s], r = v.getContext().data();
            r.recognized = o.recognized, r.is_new_collection = o.isNewCollection, r.times_clicked = ++this.timesRoundResultClicked, 
            v.logEvent("game_result_open_detail", r), getApp().currentRound = o, "vs" == e && (this.page.delayLeaveRoom = !0, 
            getApp().closeActiveGameHandler = function() {
                i.page.delayLeaveRoom = !1, i.page.gameController.leaveRoom();
            }), d.default.tickCount("endcard"), wx.navigateTo({
                url: "/pages/roundDetail/roundDetail?cId=" + a
            });
        }
    }, {
        key: "playAgain",
        value: function(t) {
            this.emit("PLAY_AGAIN"), this.hideEndCards();
        }
    }, {
        key: "backToHome",
        value: function(t) {
            this.emit("BACK_TO_HOME");
        }
    }, {
        key: "showFinalEndCard",
        value: function(t) {
            var e = this;
            this.page.gameController.finalEndGamePromise.then(function(t) {
                e.page.gameController.showEndGameCard(t);
            });
        }
    }, {
        key: "saveToAlbum",
        value: function() {
            this.emit("CREATE_SHARE_PHOTO");
        }
    }, {
        key: "dismissSavedPhoto",
        value: function() {
            this.setData("savedPhotoDialogClass", ""), this.showEndCardFooter();
        }
    }, {
        key: "catchTap",
        value: function() {}
    }, {
        key: "showSavedPhotoDialog",
        value: function(t) {
            this.hideEndCardFooter(), this.setData("savedPhotoDialogClass", "visible"), this.setData("savedPhotoImageSrc", t);
        }
    }, {
        key: "shareGameResult",
        value: function() {
            v.logEvent("game_result_share_button", v.getContext().data());
        }
    } ]), e;
}();