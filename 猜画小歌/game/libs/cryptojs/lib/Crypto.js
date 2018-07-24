"undefined" != typeof Crypto && Crypto.util || function() {
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = "undefined" == typeof window ? exports.Crypto = {} : window.Crypto = {}, r = n.util = {
        rotl: function(t, n) {
            return t << n | t >>> 32 - n;
        },
        rotr: function(t, n) {
            return t << 32 - n | t >>> n;
        },
        endian: function(t) {
            if (t.constructor == Number) return 16711935 & r.rotl(t, 8) | 4278255360 & r.rotl(t, 24);
            for (var n = 0; n < t.length; n++) t[n] = r.endian(t[n]);
            return t;
        },
        randomBytes: function(t) {
            for (var n = []; t > 0; t--) n.push(Math.floor(256 * Math.random()));
            return n;
        },
        bytesToWords: function(t) {
            for (var n = [], r = 0, o = 0; r < t.length; r++, o += 8) n[o >>> 5] |= (255 & t[r]) << 24 - o % 32;
            return n;
        },
        wordsToBytes: function(t) {
            for (var n = [], r = 0; r < 32 * t.length; r += 8) n.push(t[r >>> 5] >>> 24 - r % 32 & 255);
            return n;
        },
        bytesToHex: function(t) {
            for (var n = [], r = 0; r < t.length; r++) n.push((t[r] >>> 4).toString(16)), n.push((15 & t[r]).toString(16));
            return n.join("");
        },
        hexToBytes: function(t) {
            for (var n = [], r = 0; r < t.length; r += 2) n.push(parseInt(t.substr(r, 2), 16));
            return n;
        },
        bytesToBase64: function(n) {
            if ("function" == typeof btoa) return btoa(e.bytesToString(n));
            for (var r = [], o = 0; o < n.length; o += 3) for (var u = n[o] << 16 | n[o + 1] << 8 | n[o + 2], i = 0; i < 4; i++) 8 * o + 6 * i <= 8 * n.length ? r.push(t.charAt(u >>> 6 * (3 - i) & 63)) : r.push("=");
            return r.join("");
        },
        base64ToBytes: function(n) {
            if ("function" == typeof atob) return e.stringToBytes(atob(n));
            n = n.replace(/[^A-Z0-9+\/]/gi, "");
            for (var r = [], o = 0, u = 0; o < n.length; u = ++o % 4) 0 != u && r.push((t.indexOf(n.charAt(o - 1)) & Math.pow(2, -2 * u + 8) - 1) << 2 * u | t.indexOf(n.charAt(o)) >>> 6 - 2 * u);
            return r;
        }
    }, o = n.charenc = {}, e = (o.UTF8 = {
        stringToBytes: function(t) {
            return e.stringToBytes(unescape(encodeURIComponent(t)));
        },
        bytesToString: function(t) {
            return decodeURIComponent(escape(e.bytesToString(t)));
        }
    }, o.Binary = {
        stringToBytes: function(t) {
            for (var n = [], r = 0; r < t.length; r++) n.push(255 & t.charCodeAt(r));
            return n;
        },
        bytesToString: function(t) {
            for (var n = [], r = 0; r < t.length; r++) n.push(String.fromCharCode(t[r]));
            return n.join("");
        }
    });
}();