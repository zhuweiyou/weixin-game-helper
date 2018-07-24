function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SpeechController = void 0;

var e = function() {
    function t(t, e) {
        for (var o = 0; o < e.length; o++) {
            var n = e[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    return function(e, o, n) {
        return o && t(e.prototype, o), n && t(e, n), e;
    };
}(), o = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../common/soundFXController.js")), n = require("../../libs/underscore/underscore.modified");

exports.SpeechController = function() {
    function i(e) {
        var o = this;
        t(this, i), this.audioCtx = wx.createInnerAudioContext(), this.audioCtx.autoplay = !1, 
        this.audioCtx.loop = !1, this.audioCtx.src = e, this.setUrlTimeStamp = Date.now(), 
        this.audioCtx.onError(function(t) {
            o.speakErr(t);
        }), this.audioCtx.onEnded(function(t) {
            o.speakFinished();
        }), this.audioCtx.onCanplay(function(t) {
            o.onCanplay();
        }), this.audioCtx.onPlay(function(t) {
            o.onPlay = !0;
        });
    }
    return e(i, [ {
        key: "speakErr",
        value: function(t) {
            console.log(t), this.audioCtx.destroy(), this._callback && this._callback();
        }
    }, {
        key: "onCanplay",
        value: function() {
            var t = Date.now() - this.setUrlTimeStamp;
            console.log("onCanplay ## Loading latency:" + t + " url: " + this.audioCtx.src), 
            this.requestPlay && !this.onPlay && this.audioCtx.play();
        }
    }, {
        key: "stop",
        value: function() {
            this.audioCtx.stop();
        }
    }, {
        key: "speakFinished",
        value: function() {
            this.audioCtx.destroy(), this._callback && this._callback();
        }
    }, {
        key: "speak",
        value: function(t) {
            var e = this;
            this._callback = n.once(function() {
                t && t();
            }), o.default.getMute() ? setTimeout(function() {
                e.speakFinished();
            }, 1e3) : (this.audioCtx.play(), this.requestPlay = !0);
        }
    }, {
        key: "destroy",
        value: function() {
            this.audioCtx.destroy();
        }
    } ]), i;
}();