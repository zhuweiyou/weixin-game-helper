function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.DigitImage = void 0;

var e = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(t, a.key, a);
        }
    }
    return function(e, i, a) {
        return i && t(e.prototype, i), a && t(e, a), e;
    };
}(), i = function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    return e.default = t, e;
}(require("../../game/utils.js"));

exports.DigitImage = function() {
    function a(e) {
        t(this, a), this.page = e, this.data = {};
    }
    return e(a, [ {
        key: "setDigits",
        value: function(t, e, a) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "outerspace";
            this.data.themeScheme = r;
            var n = Math.floor(t / 100), s = Math.floor((t - 100 * n) / 10), o = t - 100 * n - 10 * s;
            this.data.showHundredsDigit = n > 0, this.data.showTensDigit = n > 0 || s > 0, this.data.hundredsDigitSrc = i.getGStaticUrl("numbers/digit-" + n + "-" + r + ".svg"), 
            this.data.tensDigitSrc = i.getGStaticUrl("numbers/digit-" + s + "-" + r + ".svg"), 
            this.data.onesDigitSrc = i.getGStaticUrl("numbers/digit-" + o + "-" + r + ".svg"), 
            this.data.title = e, this.data.suffix = a;
        }
    }, {
        key: "getData",
        value: function() {
            return this.data;
        }
    } ]), a;
}();