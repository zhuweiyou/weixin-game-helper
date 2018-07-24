function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
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
}(), n = void 0, o = function() {
    function o() {
        return e(this, o), n || ((n = this).mute = !0 === wx.getStorageSync("mute"), n.loadAudios()), 
        n;
    }
    return t(o, [ {
        key: "loadAudios",
        value: function() {
            this.audioSources = {
                "button-click": "/assets/audio/button-click.mp3",
                swish: "/assets/audio/swish.mp3",
                erase: "/assets/audio/erase.mp3",
                "pencil-writing": "/assets/audio/pencil-writing.mp3",
                tada: "/assets/audio/tada.mp3",
                correct: "/assets/audio/correct.mp3",
                "game-end": "/assets/audio/game-end.mp3",
                silence: "/assets/audio/silence45s.mp3"
            };
        }
    } ], [ {
        key: "play",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!n.mute) {
                if (n.audioSources[e]) {
                    var o = wx.createInnerAudioContext();
                    return o.src = n.audioSources[e], o.loop = t, o.play(), t ? o.onStop(function() {
                        o.destroy();
                    }) : o.onEnded(function() {
                        o.destroy();
                    }), o.onError(function(e) {
                        console.log("Audio context error: ", e), o.destroy();
                    }), o;
                }
                return console.error("Cannot find audio source for key", e), null;
            }
        }
    }, {
        key: "setMute",
        value: function(e) {
            n.mute = e, wx.setStorageSync("mute", e);
        }
    }, {
        key: "getMute",
        value: function() {
            return n.mute;
        }
    }, {
        key: "playSilentBackground",
        value: function() {
            n.silentBackground || (n.silentBackground = this.play("silence", !0)), n.silentBackground.play();
        }
    } ]), o;
}();

exports.default = o, new o();