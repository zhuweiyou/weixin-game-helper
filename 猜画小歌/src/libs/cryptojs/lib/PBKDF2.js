!function() {
    var t = "undefined" == typeof window ? require("./Crypto").Crypto : window.Crypto, r = t.util, n = t.charenc, o = n.UTF8, e = n.Binary;
    t.PBKDF2 = function(n, s, i, c) {
        function a(r, n) {
            return t.HMAC(y, n, r, {
                asBytes: !0
            });
        }
        n.constructor == String && (n = o.stringToBytes(n)), s.constructor == String && (s = o.stringToBytes(s));
        for (var y = c && c.hasher || t.SHA1, u = c && c.iterations || 1, g = [], f = 1; g.length < i; ) {
            for (var B = a(n, s.concat(r.wordsToBytes([ f ]))), h = B, T = 1; T < u; T++) {
                h = a(n, h);
                for (var d = 0; d < B.length; d++) B[d] ^= h[d];
            }
            g = g.concat(B), f++;
        }
        return g.length = i, c && c.asBytes ? g : c && c.asString ? e.bytesToString(g) : r.bytesToHex(g);
    };
}();