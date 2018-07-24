function e(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

var n = function() {
    function e(e, n) {
        for (var t = 0; t < n.length; t++) {
            var r = n[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(n, t, r) {
        return t && e(n.prototype, t), r && e(n, r), n;
    };
}(), t = require("../libs/cryptojs/cryptojs.js").Crypto, r = function() {
    function r() {
        e(this, r);
    }
    return n(r, null, [ {
        key: "getCurrentMinuteInSeconds",
        value: function() {
            var e = new Date(), n = Math.floor(e.getTime() / 1e3);
            return 60 * Math.floor(n / 60);
        }
    }, {
        key: "hashEncrypt",
        value: function(e, n) {
            for (var t = e + n, o = r.sha1(t), u = 0, a = 7; a < 13; a++) u = 256 * u + (255 & o[a]);
            return (u % 514229).toString();
        }
    }, {
        key: "sha1",
        value: function(e) {
            var n = {
                asBytes: !0
            };
            return t.SHA1(e, n);
        }
    } ]), r;
}();

module.exports.OtpUtils = r;