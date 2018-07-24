function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function n(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function r(e, t) {
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
}), exports.DrawingRecognitionController = exports.DrawingRecognitionControllerEvents = void 0;

var o = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), i = e(require("../api/handwritingAPI.js")), s = require("../config.js"), c = e(require("../events.js")), u = require("../../libs/underscore/underscore.modified"), a = exports.DrawingRecognitionControllerEvents = {
    NEW_RECOGNITIONS: "NEW_RECOGNITIONS"
};

exports.DrawingRecognitionController = function(e) {
    function l() {
        t(this, l);
        var e = n(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this));
        return e.wordBlacklist = s.config.blacklist, e.processDrawingThrottle = u.throttle(function(t) {
            return e.processDrawing(t);
        }, 1e3 * s.config.max_api_rate, {
            leading: !1
        }), e.isRecognizing = !1, e.reset(), e;
    }
    return r(l, c.default), o(l, [ {
        key: "reset",
        value: function() {}
    }, {
        key: "start",
        value: function() {
            this.reset(), this.isRecognizing = !0;
        }
    }, {
        key: "stop",
        value: function() {
            this.isRecognizing = !1;
        }
    }, {
        key: "processDrawing",
        value: function(e) {
            var t = this, n = e.getSegments();
            u.reduce(n, function(e, t) {
                return e + t[0].length;
            }, 0) > 10 && i.default.processSegments(n, e.getWidth(), e.getHeight()).then(function(e) {
                return t.processRecognitionResponse(e);
            });
        }
    }, {
        key: "processRecognitionResponse",
        value: function(e) {
            if (this.isRecognizing) {
                var t = this.filterGuesses(e);
                this.emit(a.NEW_RECOGNITIONS, t);
            }
        }
    }, {
        key: "filterGuesses",
        value: function(e) {
            return u.filter(e, function(e) {
                return e.score < s.config.handwriting_threshold;
            });
        }
    }, {
        key: "onDrawingUpdated",
        value: function(e) {
            this.isRecognizing && this.processDrawingThrottle(e);
        }
    } ]), l;
}();