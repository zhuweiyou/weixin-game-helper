!function() {
    var t = "undefined" == typeof window ? require("./Crypto").Crypto : window.Crypto, r = t.util, s = t.charenc, e = s.UTF8, n = s.Binary;
    t.HMAC = function(t, s, o, i) {
        s.constructor == String && (s = e.stringToBytes(s)), o.constructor == String && (o = e.stringToBytes(o)), 
        o.length > 4 * t._blocksize && (o = t(o, {
            asBytes: !0
        }));
        for (var c = o.slice(0), y = o.slice(0), a = 0; a < 4 * t._blocksize; a++) c[a] ^= 92, 
        y[a] ^= 54;
        var u = t(c.concat(t(y.concat(s), {
            asBytes: !0
        })), {
            asBytes: !0
        });
        return i && i.asBytes ? u : i && i.asString ? n.bytesToString(u) : r.bytesToHex(u);
    };
}();