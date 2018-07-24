!function() {
    var r = "undefined" == typeof window ? require("./Crypto").Crypto : window.Crypto, t = r.util, n = r.charenc, e = n.UTF8, o = (n.Binary, 
    r.MARC4 = {
        encrypt: function(n, c) {
            var s = e.stringToBytes(n), a = t.randomBytes(16), i = c.constructor == String ? r.PBKDF2(c, a, 32, {
                asBytes: !0
            }) : c;
            return o._marc4(s, i, 1536), t.bytesToBase64(a.concat(s));
        },
        decrypt: function(n, c) {
            var s = t.base64ToBytes(n), a = s.splice(0, 16), i = c.constructor == String ? r.PBKDF2(c, a, 32, {
                asBytes: !0
            }) : c;
            return o._marc4(s, i, 1536), e.bytesToString(s);
        },
        _marc4: function(r, t, n) {
            var e, o, c, s;
            for (e = 0, c = []; e < 256; e++) c[e] = e;
            for (e = 0, o = 0; e < 256; e++) o = (o + c[e] + t[e % t.length]) % 256, s = c[e], 
            c[e] = c[o], c[o] = s;
            e = o = 0;
            for (var t = -n; t < r.length; t++) o = (o + c[e = (e + 1) % 256]) % 256, s = c[e], 
            c[e] = c[o], c[o] = s, t < 0 || (r[t] ^= c[(c[e] + c[o]) % 256]);
        }
    });
}();