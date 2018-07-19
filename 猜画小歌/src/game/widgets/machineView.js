function e(e, s) {
    if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.MachineView = void 0;

var s = function() {
    function e(e, s) {
        for (var t = 0; t < s.length; t++) {
            var i = s[t];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(s, t, i) {
        return t && e(s.prototype, t), i && e(s, i), s;
    };
}(), t = require("../controllers/speechController.js"), i = function(e) {
    if (e && e.__esModule) return e;
    var s = {};
    if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (s[t] = e[t]);
    return s.default = e, s;
}(require("../utils.js")), n = require("../config.js"), a = require("../../libs/underscore/underscore.modified");

exports.MachineView = function() {
    function o(s) {
        var t = this;
        e(this, o), this.page = s, this.data = {}, this.resetTextAfterDelay = a.debounce(function() {
            return t.setText("...");
        }, 2e3), this.reset(), this.audioSources = {
            "猜出来了！这是": "/assets/audio/zhcn_cai_chu_lai_le_zhe_shi_1.8.mp3",
            "我知道了！这是": "/assets/audio/zhcn_i_know_this_is.mp3",
            "你不画让我怎么猜": "/assets/audio/zhcn_ni_bu_hua_rang_wo_zen_me_cai_1.8.mp3",
            "你画的啥玩意儿": "/assets/audio/zhcn_ni_hua_de_sha_wan_yi_er_1.8.mp3",
            "我猜这是": "/assets/audio/zhcn_wo_cai_zhe_shi_1.8.mp3",
            "我真的猜不出来": "/assets/audio/zhcn_wo_zhen_de_cai_bu_chu_lai_1.8.mp3",
            "再加把劲": "/assets/audio/zhcn_zai_jia_ba_jin_1.8.mp3",
            "抓紧时间画画呀！": "/assets/audio/zhcn_draw_quick.mp3",
            "你开始画我才能猜啊...": "/assets/audio/zhcn_you_draw_i_guess.mp3",
            "我真的看不懂": "/assets/audio/zhcn_i_dont_get_it.mp3",
            "我就快猜出来了": "/assets/audio/zhcn_nearly_get_it.mp3"
        };
    }
    return s(o, [ {
        key: "setData",
        value: function(e, s) {
            this.data[e] = s, this.page.setData({
                machineViewData: this.data
            });
        }
    }, {
        key: "reset",
        value: function() {
            this.setText("..."), this.clearGuessesQueue(), this.mentionedWords = {}, this.talkingGuesses = !1, 
            this.recentMentionedWords = [];
        }
    }, {
        key: "hide",
        value: function() {
            this.setData("machineViewClass", "");
        }
    }, {
        key: "show",
        value: function() {
            this.setData("machineViewClass", "visible");
        }
    }, {
        key: "stop",
        value: function() {
            this.nowSpeaking && (this.nowSpeaking.stop(), this.nowSpeaking.speakFinished(), 
            this.nowSpeaking = void 0), this.talkingGuesses = !1;
        }
    }, {
        key: "setText",
        value: function(e) {
            var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            this.setData("txtA", e), this.setData("txtB", s), this.resetTextAfterDelay();
        }
    }, {
        key: "speak",
        value: function(e, s) {
            var i = this;
            this.talking = !0, this.nowSpeaking = new t.SpeechController(e), this.nowSpeaking.speak(function() {
                i.nowSpeaking = void 0, i.talking = !1, s && s();
            });
        }
    }, {
        key: "speakAndWrite",
        value: function(e) {
            var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
            this.setText(e), this.speak(this.getLocalSpeechUrlForText(e), s);
        }
    }, {
        key: "readNextGuess",
        value: function(e) {
            var s = this;
            if (this.talkingGuesses = !0, 0 != this.guessesQueue.length) {
                if (e) {
                    this.recentMentionedWords = [];
                    return this.setText("", "我猜这是"), void this.speak(this.getLocalSpeechUrlForText("我猜这是"), function() {
                        s.readNextGuess(!1);
                    });
                }
                var i = this.guessesQueue.shift(), n = i.Translations.ZhCn, a = "我猜这是" + this.recentMentionedWords.join(", ");
                this.recentMentionedWords.length > 0 && (a += ", "), this.setText(n, a);
                var o = this.speechCache;
                this.speechCache = void 0, this.guessesQueue.length > 0 && (this.speechCache = new t.SpeechController(this.guessesQueue[0].AudioUrls.ZhCn)), 
                o.speak(function() {
                    var e = a.length > 30;
                    s.readNextGuess(e);
                }), this.recentMentionedWords.push(n), this.mentionedWords[i.Word] = 1;
            } else this.talkingGuesses = !1;
        }
    }, {
        key: "setResultWord",
        value: function(e) {
            var s = this;
            return new Promise(function(a, o) {
                var u = i.pickRandom(n.config.successSentences);
                s.setGuesses([]), s.nowSpeaking && (s.nowSpeaking.stop(), s.nowSpeaking.destroy(), 
                s.nowSpeaking = void 0);
                var r = new t.SpeechController(e.translation.AudioUrls.ZhCn);
                s.setText(u + e.translation.Translations.ZhCn), setTimeout(function() {
                    s.speak(s.getLocalSpeechUrlForText(u), function() {
                        setTimeout(a, 600, "fast-return"), r.speak(a);
                    });
                }, 300);
            });
        }
    }, {
        key: "setGuesses",
        value: function(e) {
            var s = this;
            this.clearGuessesQueue(), this.guessesQueue = a.filter(e, function(e) {
                return !a.has(s.mentionedWords, e.Word);
            });
            var i = this.guessesQueue.length;
            if (i > 0) {
                var n = this.guessesQueue[0];
                this.speechCache = new t.SpeechController(n.AudioUrls.ZhCn);
            }
            return !this.talkingGuesses && this.guessesQueue.length > 0 && this.readNextGuess(!0), 
            i;
        }
    }, {
        key: "clearGuessesQueue",
        value: function() {
            this.guessesQueue = [], this.speechCache && (this.speechCache.destroy(), this.speechCache = void 0);
        }
    }, {
        key: "getLocalSpeechUrlForText",
        value: function(e) {
            return this.audioSources[e];
        }
    } ]), o;
}();