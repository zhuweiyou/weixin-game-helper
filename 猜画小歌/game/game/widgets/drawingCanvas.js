function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t;
}

function n(t, e) {
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
}), exports.DrawingCanvas = void 0;

var o = function() {
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
}(), a = t(require("../events.js")), r = t(require("../../common/soundFXController.js")), h = require("../../libs/underscore/underscore.modified"), u = require("../config/configManager");

exports.DrawingCanvas = function(t) {
    function c(t, s, o, a) {
        n(this, c);
        var r = i(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this));
        return r.canvasId = t, r.page = s, r.canvasWidth = o, r.canvasHeight = a, r.page.setData(e({}, t + "Width", r.canvasWidth)), 
        r.page.setData(e({}, t + "Height", r.canvasHeight)), r.page.touchstart = r.touchstart.bind(r), 
        r.page.touchmove = r.touchmove.bind(r), r.page.touchend = r.touchend.bind(r), r.lineColor = "black", 
        r.lineWidth = 3, r.paths = [], r.startTime = void 0, r.context = wx.createCanvasContext(t), 
        r.context.setStrokeStyle(r.lineColor), r.context.setLineWidth(r.lineWidth), r.inputIgnored = !1, 
        r.touchStarted = !1, r.touchPointsCount = 0, r.emitHandwritingByPointsNumberEnabled = u.configEnabled(u.EMIT_HANDWRITING_BY_POINTS_NUMBER_EXPERIMENT_NAME), 
        r;
    }
    return s(c, a.default), o(c, [ {
        key: "getWidth",
        value: function() {
            return this.canvasWidth;
        }
    }, {
        key: "getHeight",
        value: function() {
            return this.canvasHeight;
        }
    }, {
        key: "acceptInput",
        value: function() {
            this.inputIgnored = !1;
        }
    }, {
        key: "ignoreInput",
        value: function() {
            this.inputIgnored = !0, this.resetWritingSound();
        }
    }, {
        key: "resetWritingSound",
        value: function() {
            this.writingSound && (this.writingSound.stop(), this.writingSound.destroy(), this.writingSound = null);
        }
    }, {
        key: "isInputIgnored",
        value: function() {
            return !0 === this.inputIgnored;
        }
    }, {
        key: "touchstart",
        value: function(t) {
            if (!this.inputIgnored) {
                this.touchStarted = !0, 0 == this.paths.length && (this.startTime = new Date());
                var e = Math.round(t.changedTouches[0].x), n = Math.round(t.changedTouches[0].y);
                this.paths.push([ [ e ], [ n ], [ this.currentTimeMs() ] ]), this.context.moveTo(e, n);
            }
        }
    }, {
        key: "touchmove",
        value: function(t) {
            if (!this.inputIgnored && this.touchStarted) {
                this.writingSound || (this.writingSound = r.default.play("pencil-writing", !0));
                var e = h.last(this.paths), n = Math.round(t.changedTouches[0].x), i = Math.round(t.changedTouches[0].y);
                e && (0 == e[0].length || Math.abs(h.last(e[0]) - n) > 4 || Math.abs(h.last(e[1]) - i) > 4) && (e[0].push(n), 
                e[1].push(i), e[2].push(this.currentTimeMs())), this.context.lineTo(n, i), this.context.stroke(), 
                this.context.draw(!0), this.context.moveTo(n, i), this.touchPointsCount++, this.emitHandwritingByPointsNumberEnabled && (20 == this.touchPointsCount && this.emit("DRAWING_UPDATED", this), 
                this.touchPointsCount % 70 == 0 && this.emit("DRAWING_UPDATED", this));
            }
        }
    }, {
        key: "touchend",
        value: function() {
            this.touchStarted = !1, this.resetWritingSound(), this.touchPointsCount = 0, this.inputIgnored || this.emit("DRAWING_UPDATED", this);
        }
    }, {
        key: "show",
        value: function() {
            this.page.setData(e({}, this.canvasId + "Class", "")), this.clear();
        }
    }, {
        key: "hide",
        value: function() {
            this.page.setData(e({}, this.canvasId + "Class", "hide")), this.clear();
        }
    }, {
        key: "currentTimeMs",
        value: function() {
            return this.startTime ? new Date() - this.startTime : 0;
        }
    }, {
        key: "getSegments",
        value: function() {
            return this.paths;
        }
    }, {
        key: "undo",
        value: function() {
            this.paths.length > 0 && this.paths.pop(), this._draw(this.paths, 1, 0, 0);
        }
    }, {
        key: "clear",
        value: function() {
            this.touchStarted = !1, this.touchPointsCount = 0, this.paths = [], this._draw(this.paths, 1, 0, 0), 
            this.resetWritingSound(), delete this.startTime;
        }
    }, {
        key: "resize",
        value: function(t, e) {
            this.draw(this.paths, this.canvasWidth, this.canvasHeight, t, e);
        }
    }, {
        key: "draw",
        value: function(t, e, n, i, s) {
            i == this.canvasWidth && s == this.canvasHeight || (this.canvasWidth = i, this.canvasHeight = s);
            var o = i / e, a = s / n, r = o < a ? o : a;
            o < a ? (r = o, this._draw(t, r, 0, (s - n * r) / 2)) : (r = a, this._draw(t, r, (i - e * r) / 2, 0));
        }
    }, {
        key: "_draw",
        value: function(t, e, n, i) {
            if (void 0 != t) {
                var s = [];
                this.context.setStrokeStyle(this.lineColor), this.context.setLineWidth(this.lineWidth);
                for (var o = 0; o < t.length; o++) {
                    var a = t[o], r = 3 == a.length, h = [];
                    if (s.push(h), a[0].length > 0) {
                        var u = Math.round(a[0][0] * e + n), c = Math.round(a[1][0] * e + i);
                        h.push([ u ], [ c ], r ? [ a[2][0] ] : [ 0 ]), this.context.moveTo(u, c);
                        for (var d = 1; d < a[0].length; d++) u = Math.round(a[0][d] * e + n), c = Math.round(a[1][d] * e + i), 
                        h[0].push(u), h[1].push(c), h[2].push(r ? a[2][d] : 0), this.context.lineTo(u, c);
                    }
                    this.context.stroke();
                }
                this.context.draw(), this.paths = s;
            }
        }
    } ]), c;
}();