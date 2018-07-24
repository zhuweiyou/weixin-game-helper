!function() {
    function n(n, o) {
        var t = 4 * n._blocksize;
        return t - o.length % t;
    }
    var o = "undefined" == typeof window ? require("./Crypto").Crypto : window.Crypto, t = o.pad = {}, r = function(n) {
        for (var o = n.pop(), t = 1; t < o; t++) n.pop();
    };
    t.NoPadding = {
        pad: function(n, o) {},
        unpad: function(n) {}
    }, t.ZeroPadding = {
        pad: function(n, o) {
            var t = 4 * n._blocksize, r = o.length % t;
            if (0 != r) for (r = t - r; r > 0; r--) o.push(0);
        },
        unpad: function(n) {}
    }, t.iso7816 = {
        pad: function(o, t) {
            var r = n(o, t);
            for (t.push(128); r > 1; r--) t.push(0);
        },
        unpad: function(n) {
            for (;128 != n.pop(); ) ;
        }
    }, t.ansix923 = {
        pad: function(o, t) {
            for (var r = n(o, t), p = 1; p < r; p++) t.push(0);
            t.push(r);
        },
        unpad: r
    }, t.iso10126 = {
        pad: function(o, t) {
            for (var r = n(o, t), p = 1; p < r; p++) t.push(Math.floor(256 * Math.random()));
            t.push(r);
        },
        unpad: r
    }, t.pkcs7 = {
        pad: function(o, t) {
            for (var r = n(o, t), p = 0; p < r; p++) t.push(r);
        },
        unpad: r
    };
    var p = o.mode = {}, i = p.Mode = function(n) {
        n && (this._padding = n);
    };
    i.prototype = {
        encrypt: function(n, o, t) {
            this._padding.pad(n, o), this._doEncrypt(n, o, t);
        },
        decrypt: function(n, o, t) {
            this._doDecrypt(n, o, t), this._padding.unpad(o);
        },
        _padding: t.iso7816
    };
    var c = (p.ECB = function() {
        i.apply(this, arguments);
    }).prototype = new i();
    c._doEncrypt = function(n, o, t) {
        for (var r = 4 * n._blocksize, p = 0; p < o.length; p += r) n._encryptblock(o, p);
    }, c._doDecrypt = function(n, o, t) {
        for (var r = 4 * n._blocksize, p = 0; p < o.length; p += r) n._decryptblock(o, p);
    }, c.fixOptions = function(n) {
        n.iv = [];
    };
    var a = (p.CBC = function() {
        i.apply(this, arguments);
    }).prototype = new i();
    a._doEncrypt = function(n, o, t) {
        for (var r = 4 * n._blocksize, p = 0; p < o.length; p += r) {
            if (0 == p) for (i = 0; i < r; i++) o[i] ^= t[i]; else for (var i = 0; i < r; i++) o[p + i] ^= o[p + i - r];
            n._encryptblock(o, p);
        }
    }, a._doDecrypt = function(n, o, t) {
        for (var r = 4 * n._blocksize, p = t, i = 0; i < o.length; i += r) {
            var c = o.slice(i, i + r);
            n._decryptblock(o, i);
            for (var a = 0; a < r; a++) o[i + a] ^= p[a];
            p = c;
        }
    };
    var e = (p.CFB = function() {
        i.apply(this, arguments);
    }).prototype = new i();
    e._padding = t.NoPadding, e._doEncrypt = function(n, o, t) {
        for (var r = 4 * n._blocksize, p = t.slice(0), i = 0; i < o.length; i++) {
            var c = i % r;
            0 == c && n._encryptblock(p, 0), o[i] ^= p[c], p[c] = o[i];
        }
    }, e._doDecrypt = function(n, o, t) {
        for (var r = 4 * n._blocksize, p = t.slice(0), i = 0; i < o.length; i++) {
            var c = i % r;
            0 == c && n._encryptblock(p, 0);
            var a = o[i];
            o[i] ^= p[c], p[c] = a;
        }
    };
    var d = (p.OFB = function() {
        i.apply(this, arguments);
    }).prototype = new i();
    d._padding = t.NoPadding, d._doEncrypt = function(n, o, t) {
        for (var r = 4 * n._blocksize, p = t.slice(0), i = 0; i < o.length; i++) i % r == 0 && n._encryptblock(p, 0), 
        o[i] ^= p[i % r];
    }, d._doDecrypt = d._doEncrypt;
    var f = (p.CTR = function() {
        i.apply(this, arguments);
    }).prototype = new i();
    f._padding = t.NoPadding, f._doEncrypt = function(n, o, t) {
        for (var r = 4 * n._blocksize, p = t.slice(0), i = 0; i < o.length; ) {
            var c = p.slice(0);
            n._encryptblock(c, 0);
            for (var a = 0; i < o.length && a < r; a++, i++) o[i] ^= c[a];
            256 == ++p[r - 1] && (p[r - 1] = 0, 256 == ++p[r - 2] && (p[r - 2] = 0, 256 == ++p[r - 3] && (p[r - 3] = 0, 
            ++p[r - 4])));
        }
    }, f._doDecrypt = f._doEncrypt;
}();