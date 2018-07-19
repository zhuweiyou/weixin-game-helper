!function() {
    var t, r = "undefined" == typeof window ? require("./Crypto").Crypto : window.Crypto, e = r.util, n = r.charenc, o = n.UTF8, a = (n.Binary, 
    []), s = [], i = r.Rabbit = {
        encrypt: function(t, n) {
            var a = o.stringToBytes(t), s = e.randomBytes(8), c = n.constructor == String ? r.PBKDF2(n, s, 32, {
                asBytes: !0
            }) : n;
            return i._rabbit(a, c, e.bytesToWords(s)), e.bytesToBase64(s.concat(a));
        },
        decrypt: function(t, n) {
            var a = e.base64ToBytes(t), s = a.splice(0, 8), c = n.constructor == String ? r.PBKDF2(n, s, 32, {
                asBytes: !0
            }) : n;
            return i._rabbit(a, c, e.bytesToWords(s)), o.bytesToString(a);
        },
        _rabbit: function(t, r, e) {
            i._keysetup(r), e && i._ivsetup(e);
            for (var n = [], o = 0; o < t.length; o++) {
                if (o % 16 == 0) {
                    i._nextstate(), n[0] = a[0] ^ a[5] >>> 16 ^ a[3] << 16, n[1] = a[2] ^ a[7] >>> 16 ^ a[5] << 16, 
                    n[2] = a[4] ^ a[1] >>> 16 ^ a[7] << 16, n[3] = a[6] ^ a[3] >>> 16 ^ a[1] << 16;
                    for (var s = 0; s < 4; s++) n[s] = 16711935 & (n[s] << 8 | n[s] >>> 24) | 4278255360 & (n[s] << 24 | n[s] >>> 8);
                    for (var c = 120; c >= 0; c -= 8) n[c / 8] = n[c >>> 5] >>> 24 - c % 32 & 255;
                }
                t[o] ^= n[o % 16];
            }
        },
        _keysetup: function(r) {
            a[0] = r[0], a[2] = r[1], a[4] = r[2], a[6] = r[3], a[1] = r[3] << 16 | r[2] >>> 16, 
            a[3] = r[0] << 16 | r[3] >>> 16, a[5] = r[1] << 16 | r[0] >>> 16, a[7] = r[2] << 16 | r[1] >>> 16, 
            s[0] = e.rotl(r[2], 16), s[2] = e.rotl(r[3], 16), s[4] = e.rotl(r[0], 16), s[6] = e.rotl(r[1], 16), 
            s[1] = 4294901760 & r[0] | 65535 & r[1], s[3] = 4294901760 & r[1] | 65535 & r[2], 
            s[5] = 4294901760 & r[2] | 65535 & r[3], s[7] = 4294901760 & r[3] | 65535 & r[0], 
            t = 0;
            for (n = 0; n < 4; n++) i._nextstate();
            for (var n = 0; n < 8; n++) s[n] ^= a[n + 4 & 7];
        },
        _ivsetup: function(t) {
            var r = e.endian(t[0]), n = e.endian(t[1]), o = r >>> 16 | 4294901760 & n, a = n << 16 | 65535 & r;
            s[0] ^= r, s[1] ^= o, s[2] ^= n, s[3] ^= a, s[4] ^= r, s[5] ^= o, s[6] ^= n, s[7] ^= a;
            for (var c = 0; c < 4; c++) i._nextstate();
        },
        _nextstate: function() {
            for (var r = [], e = 0; e < 8; e++) r[e] = s[e];
            s[0] = s[0] + 1295307597 + t >>> 0, s[1] = s[1] + 3545052371 + (s[0] >>> 0 < r[0] >>> 0 ? 1 : 0) >>> 0, 
            s[2] = s[2] + 886263092 + (s[1] >>> 0 < r[1] >>> 0 ? 1 : 0) >>> 0, s[3] = s[3] + 1295307597 + (s[2] >>> 0 < r[2] >>> 0 ? 1 : 0) >>> 0, 
            s[4] = s[4] + 3545052371 + (s[3] >>> 0 < r[3] >>> 0 ? 1 : 0) >>> 0, s[5] = s[5] + 886263092 + (s[4] >>> 0 < r[4] >>> 0 ? 1 : 0) >>> 0, 
            s[6] = s[6] + 1295307597 + (s[5] >>> 0 < r[5] >>> 0 ? 1 : 0) >>> 0, s[7] = s[7] + 3545052371 + (s[6] >>> 0 < r[6] >>> 0 ? 1 : 0) >>> 0, 
            t = s[7] >>> 0 < r[7] >>> 0 ? 1 : 0;
            for (var n = [], e = 0; e < 8; e++) {
                var o = a[e] + s[e] >>> 0, i = 65535 & o, c = o >>> 16, u = ((i * i >>> 17) + i * c >>> 15) + c * c, f = ((4294901760 & o) * o >>> 0) + ((65535 & o) * o >>> 0) >>> 0;
                n[e] = u ^ f;
            }
            a[0] = n[0] + (n[7] << 16 | n[7] >>> 16) + (n[6] << 16 | n[6] >>> 16), a[1] = n[1] + (n[0] << 8 | n[0] >>> 24) + n[7], 
            a[2] = n[2] + (n[1] << 16 | n[1] >>> 16) + (n[0] << 16 | n[0] >>> 16), a[3] = n[3] + (n[2] << 8 | n[2] >>> 24) + n[1], 
            a[4] = n[4] + (n[3] << 16 | n[3] >>> 16) + (n[2] << 16 | n[2] >>> 16), a[5] = n[5] + (n[4] << 8 | n[4] >>> 24) + n[3], 
            a[6] = n[6] + (n[5] << 16 | n[5] >>> 16) + (n[4] << 16 | n[4] >>> 16), a[7] = n[7] + (n[6] << 8 | n[6] >>> 24) + n[5];
        }
    };
}();