!function() {
    var t = "undefined" == typeof window ? require("./Crypto").Crypto : window.Crypto, e = t.util, n = t.charenc, i = n.UTF8, o = n.Binary;
    t.nextTick || ("undefined" != typeof process && void 0 !== process.nextTick ? t.nextTick = process.nextTick : "undefined" != typeof setTimeout && (t.nextTick = function(t) {
        setTimeout(t, 0);
    })), t.PBKDF2Async = function(n, s, r, c, u) {
        function a(t) {
            if (h) {
                var e = v.length / g._digestsize * d + t;
                setTimeout(function() {
                    h(Math.round(e / p * 100));
                }, 0);
            }
        }
        function f(e, n) {
            return t.HMAC(g, n, e, {
                asBytes: !0
            });
        }
        n.constructor == String && (n = i.stringToBytes(n)), s.constructor == String && (s = i.stringToBytes(s));
        var y, T, g = u && u.hasher || t.SHA1, d = u && u.iterations || 1, h = u && u.onProgressChange, p = Math.ceil(r / g._digestsize) * d, l = t.nextTick, v = [], x = 1;
        l(y = function() {
            if (v.length < r) {
                var t = f(n, s.concat(e.wordsToBytes([ x ])));
                a(1);
                var i = t, g = 1;
                l(T = function() {
                    if (g < d) {
                        i = f(n, i);
                        for (var e = 0; e < t.length; e++) t[e] ^= i[e];
                        a(++g), l(T);
                    } else v = v.concat(t), x++, l(y);
                });
            } else v.length = r, c(u && u.asBytes ? v : u && u.asString ? o.bytesToString(v) : e.bytesToHex(v));
        });
    };
}();