!function() {
    var r = "undefined" == typeof window ? require("./Crypto").Crypto : window.Crypto, t = r.util, e = r.charenc, n = e.UTF8, o = e.Binary, s = r.SHA1 = function(r, e) {
        var n = t.wordsToBytes(s._sha1(r));
        return e && e.asBytes ? n : e && e.asString ? o.bytesToString(n) : t.bytesToHex(n);
    };
    s._sha1 = function(r) {
        r.constructor == String && (r = n.stringToBytes(r));
        var e = t.bytesToWords(r), o = 8 * r.length, s = [], i = 1732584193, a = -271733879, y = -1732584194, u = 271733878, c = -1009589776;
        e[o >> 5] |= 128 << 24 - o % 32, e[15 + (o + 64 >>> 9 << 4)] = o;
        for (var f = 0; f < e.length; f += 16) {
            for (var d = i, g = a, v = y, T = u, h = c, l = 0; l < 80; l++) {
                if (l < 16) s[l] = e[f + l]; else {
                    var w = s[l - 3] ^ s[l - 8] ^ s[l - 14] ^ s[l - 16];
                    s[l] = w << 1 | w >>> 31;
                }
                var b = (i << 5 | i >>> 27) + c + (s[l] >>> 0) + (l < 20 ? 1518500249 + (a & y | ~a & u) : l < 40 ? 1859775393 + (a ^ y ^ u) : l < 60 ? (a & y | a & u | y & u) - 1894007588 : (a ^ y ^ u) - 899497514);
                c = u, u = y, y = a << 30 | a >>> 2, a = i, i = b;
            }
            i += d, a += g, y += v, u += T, c += h;
        }
        return [ i, a, y, u, c ];
    }, s._blocksize = 16, s._digestsize = 20;
}();