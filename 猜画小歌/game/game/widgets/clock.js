function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function n(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function i(t, e) {
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
}), exports.Clock = void 0;

var r = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
    };
}(), a = t(require("../events.js")), l = t(require("../../common/soundFXController.js")), o = require("../config.js"), s = null;

exports.Clock = function(t) {
    function c(t, i) {
        e(this, c);
        var r = n(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this));
        return r.page = t, r.defaultCallback = i || function() {}, r.data = {
            countDownText: "02:00",
            timeElapsedPercent: 0,
            clockClass: "",
            isCountingDown: !1
        }, r.reset(), r.alertFlip = !1, r.started = !1, r;
    }
    return i(c, a.default), r(c, [ {
        key: "setData",
        value: function(t, e) {
            this.data[t] = e, this.page.setData({
                clockData: this.data
            });
        }
    }, {
        key: "reset",
        value: function() {
            this.totalTime = o.config.round_length, this.timeleft = o.config.round_length, this.started = !1, 
            this.pauseClock(), this.resetBeeper(), this.updateElm(), this.setData("clockClass", ""), 
            this.setData("isCountingDown", !1), clearInterval(this.interval);
        }
    }, {
        key: "getTimeElapsed",
        value: function() {
            return o.config.round_length - this.timeleft;
        }
    }, {
        key: "calTimeElapsedPercent",
        value: function() {
            return 100 * (o.config.round_length - this.timeleft) / o.config.round_length;
        }
    }, {
        key: "startClock",
        value: function() {
            var t = this;
            s || ((s = wx.createInnerAudioContext()).src = "https://www.gstatic.cn/qilin/drawtogether/click.mp3", 
            s.loop = !0), this.started = !0, this.interval && clearInterval(this.interval), 
            this.interval = setInterval(function() {
                t.timeleft -= .1, t.updateElm(), t.timeleft <= 0 && (t.timeleft = 0, t.pauseClock(), 
                t.emit("TIMES_UP"));
            }, 100);
        }
    }, {
        key: "pauseClock",
        value: function() {
            this.started = !1, clearInterval(this.interval), this.interval = null, this.resetBeeper();
        }
    }, {
        key: "resetBeeper",
        value: function() {
            s && (s.stop(), s.destroy(), s = null);
        }
    }, {
        key: "updateElm",
        value: function() {
            var t = Math.round(this.timeleft), e = Math.floor(t / 60), n = t % 60;
            this.started && (t <= o.config.count_down_length ? (this.setData("isCountingDown", !0), 
            Math.round(10 * this.timeleft) % 2 == 0 ? this.alertFlip || (this.alertFlip = !this.alertFlip, 
            !l.default.getMute() && s && s.play(), this.setData("clockClass", "text-blink")) : this.alertFlip && (this.alertFlip = !this.alertFlip, 
            this.setData("clockClass", ""))) : this.setData("clockClass", "")), e = ("00" + e).slice(-2), 
            n = ("00" + n).slice(-2), this.setData("countDownText", e + ":" + n), this.setData("timeElapsedPercent", this.calTimeElapsedPercent());
        }
    } ]), c;
}();