!function() {
    var r = "undefined" == typeof window ? require("./Crypto").Crypto : window.Crypto, n = r.util, t = r.charenc, e = t.UTF8, i = t.Binary, o = r.MD5 = function(r, t) {
        var e = n.wordsToBytes(o._md5(r));
        return t && t.asBytes ? e : t && t.asString ? i.bytesToString(e) : n.bytesToHex(e);
    };
    o._md5 = function(r) {
        r.constructor == String && (r = e.stringToBytes(r));
        for (var t = n.bytesToWords(r), i = 8 * r.length, u = 1732584193, s = -271733879, f = -1732584194, a = 271733878, c = 0; c < t.length; c++) t[c] = 16711935 & (t[c] << 8 | t[c] >>> 24) | 4278255360 & (t[c] << 24 | t[c] >>> 8);
        t[i >>> 5] |= 128 << i % 32, t[14 + (i + 64 >>> 9 << 4)] = i;
        for (var g = o._ff, _ = o._gg, y = o._hh, d = o._ii, c = 0; c < t.length; c += 16) {
            var v = u, h = s, T = f, l = a;
            s = d(s = d(s = d(s = d(s = y(s = y(s = y(s = y(s = _(s = _(s = _(s = _(s = g(s = g(s = g(s = g(s, f = g(f, a = g(a, u = g(u, s, f, a, t[c + 0], 7, -680876936), s, f, t[c + 1], 12, -389564586), u, s, t[c + 2], 17, 606105819), a, u, t[c + 3], 22, -1044525330), f = g(f, a = g(a, u = g(u, s, f, a, t[c + 4], 7, -176418897), s, f, t[c + 5], 12, 1200080426), u, s, t[c + 6], 17, -1473231341), a, u, t[c + 7], 22, -45705983), f = g(f, a = g(a, u = g(u, s, f, a, t[c + 8], 7, 1770035416), s, f, t[c + 9], 12, -1958414417), u, s, t[c + 10], 17, -42063), a, u, t[c + 11], 22, -1990404162), f = g(f, a = g(a, u = g(u, s, f, a, t[c + 12], 7, 1804603682), s, f, t[c + 13], 12, -40341101), u, s, t[c + 14], 17, -1502002290), a, u, t[c + 15], 22, 1236535329), f = _(f, a = _(a, u = _(u, s, f, a, t[c + 1], 5, -165796510), s, f, t[c + 6], 9, -1069501632), u, s, t[c + 11], 14, 643717713), a, u, t[c + 0], 20, -373897302), f = _(f, a = _(a, u = _(u, s, f, a, t[c + 5], 5, -701558691), s, f, t[c + 10], 9, 38016083), u, s, t[c + 15], 14, -660478335), a, u, t[c + 4], 20, -405537848), f = _(f, a = _(a, u = _(u, s, f, a, t[c + 9], 5, 568446438), s, f, t[c + 14], 9, -1019803690), u, s, t[c + 3], 14, -187363961), a, u, t[c + 8], 20, 1163531501), f = _(f, a = _(a, u = _(u, s, f, a, t[c + 13], 5, -1444681467), s, f, t[c + 2], 9, -51403784), u, s, t[c + 7], 14, 1735328473), a, u, t[c + 12], 20, -1926607734), f = y(f, a = y(a, u = y(u, s, f, a, t[c + 5], 4, -378558), s, f, t[c + 8], 11, -2022574463), u, s, t[c + 11], 16, 1839030562), a, u, t[c + 14], 23, -35309556), f = y(f, a = y(a, u = y(u, s, f, a, t[c + 1], 4, -1530992060), s, f, t[c + 4], 11, 1272893353), u, s, t[c + 7], 16, -155497632), a, u, t[c + 10], 23, -1094730640), f = y(f, a = y(a, u = y(u, s, f, a, t[c + 13], 4, 681279174), s, f, t[c + 0], 11, -358537222), u, s, t[c + 3], 16, -722521979), a, u, t[c + 6], 23, 76029189), f = y(f, a = y(a, u = y(u, s, f, a, t[c + 9], 4, -640364487), s, f, t[c + 12], 11, -421815835), u, s, t[c + 15], 16, 530742520), a, u, t[c + 2], 23, -995338651), f = d(f, a = d(a, u = d(u, s, f, a, t[c + 0], 6, -198630844), s, f, t[c + 7], 10, 1126891415), u, s, t[c + 14], 15, -1416354905), a, u, t[c + 5], 21, -57434055), f = d(f, a = d(a, u = d(u, s, f, a, t[c + 12], 6, 1700485571), s, f, t[c + 3], 10, -1894986606), u, s, t[c + 10], 15, -1051523), a, u, t[c + 1], 21, -2054922799), f = d(f, a = d(a, u = d(u, s, f, a, t[c + 8], 6, 1873313359), s, f, t[c + 15], 10, -30611744), u, s, t[c + 6], 15, -1560198380), a, u, t[c + 13], 21, 1309151649), f = d(f, a = d(a, u = d(u, s, f, a, t[c + 4], 6, -145523070), s, f, t[c + 11], 10, -1120210379), u, s, t[c + 2], 15, 718787259), a, u, t[c + 9], 21, -343485551), 
            u = u + v >>> 0, s = s + h >>> 0, f = f + T >>> 0, a = a + l >>> 0;
        }
        return n.endian([ u, s, f, a ]);
    }, o._ff = function(r, n, t, e, i, o, u) {
        var s = r + (n & t | ~n & e) + (i >>> 0) + u;
        return (s << o | s >>> 32 - o) + n;
    }, o._gg = function(r, n, t, e, i, o, u) {
        var s = r + (n & e | t & ~e) + (i >>> 0) + u;
        return (s << o | s >>> 32 - o) + n;
    }, o._hh = function(r, n, t, e, i, o, u) {
        var s = r + (n ^ t ^ e) + (i >>> 0) + u;
        return (s << o | s >>> 32 - o) + n;
    }, o._ii = function(r, n, t, e, i, o, u) {
        var s = r + (t ^ (n | ~e)) + (i >>> 0) + u;
        return (s << o | s >>> 32 - o) + n;
    }, o._blocksize = 16, o._digestsize = 16;
}();