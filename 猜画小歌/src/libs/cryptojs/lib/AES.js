!function() {
    function r(r, o) {
        for (var t = 0, f = 0; f < 8; f++) {
            1 & o && (t ^= r);
            var s = 128 & r;
            r = r << 1 & 255, s && (r ^= 27), o >>>= 1;
        }
        return t;
    }
    for (var o = "undefined" == typeof window ? require("./Crypto").Crypto : window.Crypto, t = o.util, f = o.charenc.UTF8, s = [ 99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22 ], i = [], n = 0; n < 256; n++) i[s[n]] = n;
    for (var e = [], c = [], p = [], u = [], h = [], a = [], n = 0; n < 256; n++) e[n] = r(n, 2), 
    c[n] = r(n, 3), p[n] = r(n, 9), u[n] = r(n, 11), h[n] = r(n, 13), a[n] = r(n, 14);
    var v, y, _, b = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], l = [ [], [], [], [] ], d = o.AES = {
        encrypt: function(r, s, i) {
            var n = (i = i || {}).mode || new o.mode.OFB();
            n.fixOptions && n.fixOptions(i);
            var e = r.constructor == String ? f.stringToBytes(r) : r, c = i.iv || t.randomBytes(4 * d._blocksize), p = s.constructor == String ? o.PBKDF2(s, c, 32, {
                asBytes: !0
            }) : s;
            return d._init(p), n.encrypt(d, e, c), e = i.iv ? e : c.concat(e), i && i.asBytes ? e : t.bytesToBase64(e);
        },
        decrypt: function(r, s, i) {
            var n = (i = i || {}).mode || new o.mode.OFB();
            n.fixOptions && n.fixOptions(i);
            var e = r.constructor == String ? t.base64ToBytes(r) : r, c = i.iv || e.splice(0, 4 * d._blocksize), p = s.constructor == String ? o.PBKDF2(s, c, 32, {
                asBytes: !0
            }) : s;
            return d._init(p), n.decrypt(d, e, c), i && i.asBytes ? e : f.bytesToString(e);
        },
        _blocksize: 4,
        _encryptblock: function(r, o) {
            for (u = 0; u < d._blocksize; u++) for (h = 0; h < 4; h++) l[u][h] = r[o + 4 * h + u];
            for (u = 0; u < 4; u++) for (h = 0; h < 4; h++) l[u][h] ^= _[h][u];
            for (var t = 1; t < y; t++) {
                for (u = 0; u < 4; u++) for (h = 0; h < 4; h++) l[u][h] = s[l[u][h]];
                l[1].push(l[1].shift()), l[2].push(l[2].shift()), l[2].push(l[2].shift()), l[3].unshift(l[3].pop());
                for (h = 0; h < 4; h++) {
                    var f = l[0][h], i = l[1][h], n = l[2][h], p = l[3][h];
                    l[0][h] = e[f] ^ c[i] ^ n ^ p, l[1][h] = f ^ e[i] ^ c[n] ^ p, l[2][h] = f ^ i ^ e[n] ^ c[p], 
                    l[3][h] = c[f] ^ i ^ n ^ e[p];
                }
                for (u = 0; u < 4; u++) for (h = 0; h < 4; h++) l[u][h] ^= _[4 * t + h][u];
            }
            for (u = 0; u < 4; u++) for (h = 0; h < 4; h++) l[u][h] = s[l[u][h]];
            l[1].push(l[1].shift()), l[2].push(l[2].shift()), l[2].push(l[2].shift()), l[3].unshift(l[3].pop());
            for (u = 0; u < 4; u++) for (h = 0; h < 4; h++) l[u][h] ^= _[4 * y + h][u];
            for (var u = 0; u < d._blocksize; u++) for (var h = 0; h < 4; h++) r[o + 4 * h + u] = l[u][h];
        },
        _decryptblock: function(r, o) {
            for (c = 0; c < d._blocksize; c++) for (v = 0; v < 4; v++) l[c][v] = r[o + 4 * v + c];
            for (c = 0; c < 4; c++) for (v = 0; v < 4; v++) l[c][v] ^= _[4 * y + v][c];
            for (var t = 1; t < y; t++) {
                l[1].unshift(l[1].pop()), l[2].push(l[2].shift()), l[2].push(l[2].shift()), l[3].push(l[3].shift());
                for (c = 0; c < 4; c++) for (v = 0; v < 4; v++) l[c][v] = i[l[c][v]];
                for (c = 0; c < 4; c++) for (v = 0; v < 4; v++) l[c][v] ^= _[4 * (y - t) + v][c];
                for (v = 0; v < 4; v++) {
                    var f = l[0][v], s = l[1][v], n = l[2][v], e = l[3][v];
                    l[0][v] = a[f] ^ u[s] ^ h[n] ^ p[e], l[1][v] = p[f] ^ a[s] ^ u[n] ^ h[e], l[2][v] = h[f] ^ p[s] ^ a[n] ^ u[e], 
                    l[3][v] = u[f] ^ h[s] ^ p[n] ^ a[e];
                }
            }
            l[1].unshift(l[1].pop()), l[2].push(l[2].shift()), l[2].push(l[2].shift()), l[3].push(l[3].shift());
            for (c = 0; c < 4; c++) for (v = 0; v < 4; v++) l[c][v] = i[l[c][v]];
            for (c = 0; c < 4; c++) for (v = 0; v < 4; v++) l[c][v] ^= _[v][c];
            for (var c = 0; c < d._blocksize; c++) for (var v = 0; v < 4; v++) r[o + 4 * v + c] = l[c][v];
        },
        _init: function(r) {
            v = r.length / 4, y = v + 6, d._keyexpansion(r);
        },
        _keyexpansion: function(r) {
            _ = [];
            for (o = 0; o < v; o++) _[o] = [ r[4 * o], r[4 * o + 1], r[4 * o + 2], r[4 * o + 3] ];
            for (var o = v; o < d._blocksize * (y + 1); o++) {
                var t = [ _[o - 1][0], _[o - 1][1], _[o - 1][2], _[o - 1][3] ];
                o % v == 0 ? (t.push(t.shift()), t[0] = s[t[0]], t[1] = s[t[1]], t[2] = s[t[2]], 
                t[3] = s[t[3]], t[0] ^= b[o / v]) : v > 6 && o % v == 4 && (t[0] = s[t[0]], t[1] = s[t[1]], 
                t[2] = s[t[2]], t[3] = s[t[3]]), _[o] = [ _[o - v][0] ^ t[0], _[o - v][1] ^ t[1], _[o - v][2] ^ t[2], _[o - v][3] ^ t[3] ];
            }
        }
    };
}();