function e(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t;
}

function t(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function n(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function o(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function i(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.EndlessGameController = void 0;

var s = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
    };
}(), r = t(require("../events.js")), a = e(require("../eventlog.js")), u = e(require("../api/gameAPI.js")), d = e(require("../mockData.js")), l = e(require("../utils.js")), c = t(require("../api/playHistoryAPI.js")), h = t(require("../api/leaderboardAPI.js")), g = t(require("../../common/soundFXController.js")), p = require("../models/gameRound.js"), m = require("../widgets/drawingCanvas.js"), w = require("../widgets/cardsView.js"), f = require("../widgets/machineView.js"), v = require("../widgets/clock.js"), C = require("../config.js"), y = t(require("../imageEncoding.js")), R = require("./drawingRecognitionController.js"), k = t(require("../api/generateShareResultAPI.js")), P = require("../../libs/underscore/underscore.modified"), T = require("../../libs/av-live-query-weapp-min").User;

exports.EndlessGameController = function(e) {
    function t(e, i) {
        n(this, t);
        var s = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        s.page = e, s.invitedCompetition = i, s.user = T.current(), s.finalEndGamePromise = void 0, 
        s.recognitionController = new R.DrawingRecognitionController(), s.clock = new v.Clock(s.page), 
        s.page.buttonClear = s.buttonClear.bind(s), s.showLevelUp = !0;
        var r = l.getWindowSize();
        return s.drawingCanvas = new m.DrawingCanvas("drawingCanvas", s.page, r.w - 42, r.h - 68), 
        s.cardsView = new w.CardsView(s.page), s.machineView = new f.MachineView(s.page), 
        s.newCongratLevel = null, s.drawingUntouched = !0, s.drawingCanvas.addListener("DRAWING_UPDATED", function(e) {
            s.onDrawingUpdated(e);
        }), s.cardsView.addListener("START_GAME", function() {
            return s.startGame();
        }), s.cardsView.addListener("PLAY_AGAIN", function() {
            var e = a.getContext();
            e.retry_count++, a.logEvent("play_again", e), s.openGame();
        }), s.cardsView.addListener("BACK_TO_HOME", function() {
            return wx.navigateBack({
                delta: getCurrentPages().length
            });
        }), s.cardsView.addListener("CREATE_SHARE_PHOTO", function() {
            a.logEvent("long_image", a.getContext().data()), k.default.checkSaveImagePermission(function() {
                s.createSharePhoto(function(e) {
                    s.cardsView.showSavedPhotoDialog(e);
                });
            });
        }), s.clock.addListener("TIMES_UP", function() {
            return s.roundTimesUp();
        }), s.recognitionController.addListener(R.DrawingRecognitionControllerEvents.NEW_RECOGNITIONS, function(e) {
            return s.onNewRecognitions(e);
        }), s;
    }
    return i(t, r.default), s(t, [ {
        key: "buttonClear",
        value: function() {
            !this.drawingCanvas.isInputIgnored() && this.recognitionController.isRecognizing && (g.default.play("erase"), 
            this.clearCanvas());
        }
    }, {
        key: "clearCanvas",
        value: function() {
            this.machineView.reset(), this.drawingCanvas.clear();
        }
    }, {
        key: "prepareGame",
        value: function() {
            var e = this;
            if (!this.preparing) if (this.preparedCompetition) this.postPrepare && this.postPrepare(); else {
                this.preparing = !0;
                var t = {
                    playHistoryId: c.default.getLatestPlayHistory().id,
                    userId: T.current().id
                };
                this.invitedCompetition && (t.invitedCompetitionId = this.invitedCompetition.id), 
                u.startEndlessGame(t).then(function(t) {
                    e.unloaded || (e.preparedCompetition = t, e.preparing = !1, e.postPrepare && e.postPrepare());
                }).catch(function(t) {
                    e.showModalToHome("网络故障", "网络不给力，请稍后重试");
                });
            }
        }
    }, {
        key: "unload",
        value: function() {
            this.unloaded = !0, 1 === this.state && a.logEvent("abandon_game", a.getContext().data());
        }
    }, {
        key: "getLocalPassedWordsCopy",
        value: function(e) {
            return e.get("passedWords").slice();
        }
    }, {
        key: "openGame",
        value: function() {
            console.log("Open Game"), this.reset(), this.localPassedWords = this.getLocalPassedWordsCopy(c.default.getLatestPlayHistory()), 
            this.setLevelTheme(1), this.localPassedWords.length <= C.config.tutorial_round_threshold ? (this.drawingCanvas.hide(), 
            this.cardsView.showTutorialCard()) : this.startGame();
        }
    }, {
        key: "startGame",
        value: function() {
            var e = this;
            console.log("Start Game"), this.postPrepare = function() {
                e.competition = e.preparedCompetition, e.preparedCompetition = null, e.postPrepare = null, 
                e.challengeWords = e.competition.get("challengeWords");
                var t = a.getContext();
                t.play_count++, t.initEndlessGame(), e.updateLogContext(t), a.logEvent("start_game", t.data()), 
                e.state = 1, e.startNextRound();
            }, this.preparedCompetition ? this.postPrepare() : this.prepareGame();
        }
    }, {
        key: "updateLogContext",
        value: function(e) {
            e.round_count = this.roundCount, e.level_n = l.getLevel(this.localPassedWords.length);
        }
    }, {
        key: "mockShowEndCard",
        value: function() {
            var e = new d.Competition();
            this.cardsView.showEndlessEndCard(!1, d.roundResults.slice(0), this.user, e.id, "Level Str", 28, "outerspace");
        }
    }, {
        key: "showEndCardWithCompetition",
        value: function(e) {
            this.drawingCanvas.hide(), this.cardsView.showEndlessEndCard(!1, [], e.get("result").detailed, this.user, e.id);
        }
    }, {
        key: "setLevelTheme",
        value: function(e) {
            if (!e || e <= 0) return this.page.setData({
                levelTheme: ""
            }), void getApp().setNavigationBar();
            var t = l.getThemeSchemeFromRoundCount(e);
            this.page.setData({
                levelTheme: t
            }), getApp().setNavigationBar(C.config.app_title, t);
        }
    }, {
        key: "getCompetition",
        value: function() {
            return this.competition;
        }
    }, {
        key: "isGameEnded",
        value: function() {
            return 2 === this.state;
        }
    }, {
        key: "reset",
        value: function() {
            this.presentedWords = [], this.previousRounds = [], this.challengeWords = [], this.competition = void 0, 
            this.currentRound = void 0, this.unsavedRoundStartIdx = 0, this.roundCount = 0, 
            this.newGuessesCounter = 0, this.clock.reset(), this.showLevelUp = !0, this.finalEndGamePromise = void 0, 
            this.state = 0, this.startNextRoundTimeout && clearTimeout(this.startNextRoundTimeout), 
            this.transTimeOut && clearTimeout(this.transTimeOut), this.clearCanvas(), this.recognitionController.stop();
        }
    }, {
        key: "finishCurrentRound",
        value: function(e) {
            this.drawingCanvas.ignoreInput(), this.currentRound.drawing = y.default.encode(this.drawingCanvas.getSegments()), 
            this.currentRound.width = this.drawingCanvas.getWidth(), this.currentRound.height = this.drawingCanvas.getHeight(), 
            this.currentRound.recognized = !!e.recognition, this.currentRound.recognitionId = e.recognition ? e.recognition.id : 0, 
            this.currentRound.score = e.recognition ? parseFloat(e.recognition.score) : 999, 
            this.currentRound.duration = Math.round(10 * this.clock.getTimeElapsed()) / 10;
            var t = [];
            P.each(this.currentRound.recognitions, function(e) {
                delete e.audioUrl, t.push(e);
            }), this.currentRound.recognitions = t, this.previousRounds.push(this.currentRound);
        }
    }, {
        key: "showCongratCard",
        value: function(e) {
            this.page.setData({
                animClass: ""
            }), this.machineView.hide(), this.cardsView.showNewRoundBreakCard(this.newCongratLevel, this.localPassedWords.length, e), 
            this.newCongratLevel = null;
        }
    }, {
        key: "startNextRound",
        value: function() {
            var e = this;
            if (!this.unloaded) {
                if (this.roundCount++, this.updateLogContext(a.getContext()), this.roundCount > this.challengeWords.length) return this.finalEndGamePromise = this.endGame(), 
                void this.cardsView.showFinalCongratCard({
                    wordCount: this.challengeWords.length
                });
                var t = this.challengeWords[this.roundCount - 1];
                this.currentRound = new p.GameRound(t, this.roundCount), this.presentedWords.push(this.currentRound.word), 
                this.cardsView.hideTutorialCard(), this.page.setData({
                    word: this.currentRound.wordZhCn,
                    level: "第 " + this.roundCount + " 题",
                    animClass: "center-text"
                });
                var n = function() {
                    e.page.setData({
                        animClass: "on-screen"
                    }), e.clock.startClock(), e.machineView.show(), e.drawingCanvas.acceptInput();
                }, o = l.getThemeSchemeFromRoundCount(this.roundCount - 1), i = l.getThemeSchemeFromRoundCount(this.roundCount);
                o !== i ? (this.page.setData({
                    targetTheme: i,
                    transitioning: "transitioning"
                }), this.transTimeOut = setTimeout(function() {
                    e.setLevelTheme(e.roundCount), e.page.setData({
                        transitioning: ""
                    }), e.startNextRoundTimeout = setTimeout(n, 900);
                }, 1100)) : this.startNextRoundTimeout = setTimeout(n, 2e3), this.drawingCanvas.clear(), 
                this.drawingCanvas.show(), this.machineView.reset(), this.machineView.hide(), this.recognitionController.start(), 
                this.clock.reset();
            }
        }
    }, {
        key: "pauseGame",
        value: function() {
            this.clock.pauseClock();
        }
    }, {
        key: "resumeGame",
        value: function() {
            this.clock.startClock();
        }
    }, {
        key: "hideGame",
        value: function() {
            this.recognitionController.stop(), this.machineView.stop();
        }
    }, {
        key: "showGame",
        value: function() {
            this.recognitionController.start();
        }
    }, {
        key: "roundRecognized",
        value: function(e) {
            var t = this;
            g.default.play("correct"), this.recognitionController.stop(), this.pauseGame();
            var n = this.updateLocalPassedWords();
            this.machineView.setResultWord(e).then(function() {
                t.unloaded || (t.finishCurrentRound({
                    recognition: e
                }), n ? t.submitRounds().then(function() {
                    t.unsavedRoundStartIdx = t.previousRounds.length, t.showCongratCard(l.getThemeSchemeFromRoundCount(t.roundCount)), 
                    c.default.getLatestPlayHistory().attributes.passedWords = t.localPassedWords.slice();
                }).catch(function(e) {
                    console.log("Submit rounds got error: ", e), t.newCongratLevel = null, c.default.fetch().then(function() {
                        t.localPassedWords = t.getLocalPassedWordsCopy(c.default.getLatestPlayHistory()), 
                        t.startNextRound();
                    }).catch(function(e) {
                        t.showLevelUp = !1, t.startNextRound();
                    });
                }) : t.startNextRound());
            });
        }
    }, {
        key: "updateLocalPassedWords",
        value: function() {
            var e = this.localPassedWords.indexOf(this.currentRound.word) < 0;
            if (this.currentRound.isNewCollection = e, e) {
                var t = l.getLevel(this.localPassedWords.length);
                this.localPassedWords.push(this.currentRound.word);
                var n = l.getLevel(this.localPassedWords.length);
                if (n > t) return this.newCongratLevel = n, !0;
            }
            return !1;
        }
    }, {
        key: "pickRandom",
        value: function(e) {
            return e[P.random(e.length - 1)];
        }
    }, {
        key: "roundTimesUp",
        value: function() {
            var e = this;
            this.recognitionController.stop(), this.pauseGame(), this.finishCurrentRound({
                recognition: !1
            }), Promise.all([ this.cardsView.showGameOverCard({
                wordZhCn: this.currentRound.wordZhCn,
                theme: l.getThemeSchemeFromRoundCount(this.roundCount)
            }), this.endGame() ]).then(function(t) {
                e.showEndGameCard(t[1]);
            }).catch(function(t) {
                console.log("End game error", t), c.default.fetch().then(function() {
                    e.showModalToHome("网络故障", "本局无法结束，画作已保存。");
                }).catch(function(t) {
                    console.log("Cannot refetch PlayHistory", t), e.showModalToHome("网络故障", "本局无法结束，画作已保存。");
                });
            });
        }
    }, {
        key: "endGame",
        value: function() {
            var e = this;
            return this.state = 2, new Promise(function(t, n) {
                e.competition || n("Missing competition!"), e.recognitionController.stop(), e.machineView.reset(), 
                e.drawingCanvas.hide();
                var o = c.default.getLatestPlayHistory();
                u.sendEndlessCompetitionResult(e.competition, e.previousRounds, e.unsavedRoundStartIdx, c.default.getLatestPlayHistory().id, e.user).then(function(e) {
                    return c.default.fetch();
                }).then(function(e) {
                    var n = o.attributes.endlessBestCount, i = o.attributes.endlessBestTime;
                    e.betterThan(o) && (n = e.attributes.endlessBestCount, i = e.attributes.endlessBestTime), 
                    h.default.uploadStatistics(n, i, e.attributes.passedWords.length), t({
                        playHistory: e,
                        isNewRecord: !o || e.betterThan(o)
                    });
                }).catch(n);
            });
        }
    }, {
        key: "showEndGameCard",
        value: function(e) {
            c.default.setLatestPlayHistory(e.playHistory), this.prepareGame(), this.cardsView.showEndlessEndCard(e.isNewRecord, this.previousRounds, this.user, this.competition.id, e.playHistory.getLevelStr(), e.playHistory.getLevelUpProgress(), l.getThemeSchemeFromRoundCount(this.roundCount)), 
            a.logEvent("end_game", a.getContext().data());
        }
    }, {
        key: "submitRounds",
        value: function() {
            var e = Object.assign({}, c.default.getLatestPlayHistory());
            return e.attributes.passedWords = this.localPassedWords.slice(), u.submitRounds(e, this.competition, this.previousRounds.slice(this.unsavedRoundStartIdx), this.user);
        }
    }, {
        key: "showModalToHome",
        value: function(e, t) {
            getApp().getCurrentPage().route.includes("pages/home/home") || wx.showModal({
                title: e,
                content: t,
                showCancel: !1,
                confirmText: "回到首页",
                complete: function() {
                    wx.navigateBack({
                        delta: getCurrentPages().length
                    });
                }
            });
        }
    }, {
        key: "onNewRecognitions",
        value: function(e) {
            var t = this;
            if (this.currentRound.recognitions = e, this.recognitionController.isRecognizing) {
                var n = P.find(e, function(e) {
                    return (e.word == t.currentRound.word || P.contains(t.currentRound.synonyms, e.word)) && e.score < C.config.handwriting_recognition_threshold;
                });
                if (this.currentRound && n) this.roundRecognized(n); else if (this.currentRound) {
                    e = P.filter(e, function(e) {
                        return e.word != t.currentRound.word && null != e.translation;
                    });
                    var o = P.pluck(e, "translation");
                    o = P.filter(o, function(e) {
                        return e.Translations.ZhCn != t.currentRound.wordZhCn;
                    }), 0 == this.machineView.setGuesses(o) ? this.newGuessesCounter++ : this.newGuessesCounter = 0, 
                    this.newGuessesCounter > 2 && (this.newGuessesCounter = 0, this.machineView.speakAndWrite(this.pickRandom(C.config.noNewGuessesSentences)));
                }
            }
        }
    }, {
        key: "onDrawingUpdated",
        value: function(e) {
            this.recognitionController.onDrawingUpdated(e), this.drawingUntouched && (this.drawingUntouched = !1, 
            this.machineView.setText("..."));
        }
    }, {
        key: "createSharePhoto",
        value: function(e) {
            k.default.generateShareResult({
                cId: this.competition.id,
                userId: this.user.id,
                levelStr: c.default.getLatestPlayHistory().getLevelStr()
            }, e);
        }
    }, {
        key: "showFeedBack",
        value: function() {
            this.clock.started ? (this.clock.pauseClock(), this.wasInGameForFeedBack = !0, this.drawingCanvas.hide()) : this.wasInGameForFeedBack = !1, 
            this.feedBackView.showFeedBackCard();
        }
    }, {
        key: "dismissFeedBack",
        value: function() {
            console.log("in dismissFeedBack, wasInGameForFeedBack" + this.wasInGameForFeedBack), 
            this.wasInGameForFeedBack && (this.clock.startClock(), this.wasInGameForFeedBack = !1, 
            this.drawingCanvas.show());
        }
    } ]), t;
}();