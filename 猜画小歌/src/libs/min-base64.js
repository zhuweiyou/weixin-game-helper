var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function(e, r) {
    "object" === ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module ? module.exports = r(e) : "function" == typeof define && define.amd ? define(r) : e.moment = r(e);
}("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : void 0, function(t) {
    var e, r = t.Base64;
    if ("undefined" != typeof module && module.exports) try {
        e = require("buffer").Buffer;
    } catch (t) {}
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = function(t) {
        for (var e = {}, r = 0, n = t.length; r < n; r++) e[t.charAt(r)] = r;
        return e;
    }(n), u = String.fromCharCode, c = function(t) {
        if (t.length < 2) return (e = t.charCodeAt(0)) < 128 ? t : e < 2048 ? u(192 | e >>> 6) + u(128 | 63 & e) : u(224 | e >>> 12 & 15) + u(128 | e >>> 6 & 63) + u(128 | 63 & e);
        var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
        return u(240 | e >>> 18 & 7) + u(128 | e >>> 12 & 63) + u(128 | e >>> 6 & 63) + u(128 | 63 & e);
    }, f = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, i = function(t) {
        return t.replace(f, c);
    }, a = function(t) {
        var e = [ 0, 2, 1 ][t.length % 3], r = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0);
        return [ n.charAt(r >>> 18), n.charAt(r >>> 12 & 63), e >= 2 ? "=" : n.charAt(r >>> 6 & 63), e >= 1 ? "=" : n.charAt(63 & r) ].join("");
    }, d = t.btoa ? function(e) {
        return t.btoa(e);
    } : function(t) {
        return t.replace(/[\s\S]{1,3}/g, a);
    }, s = e ? e.from && e.from !== Uint8Array.from ? function(t) {
        return (t.constructor === e.constructor ? t : e.from(t)).toString("base64");
    } : function(t) {
        return (t.constructor === e.constructor ? t : new e(t)).toString("base64");
    } : function(t) {
        return d(i(t));
    }, l = function(t, e) {
        return e ? s(String(t)).replace(/[+\/]/g, function(t) {
            return "+" == t ? "-" : "_";
        }).replace(/=/g, "") : s(String(t));
    }, p = new RegExp([ "[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}" ].join("|"), "g"), h = function(t) {
        switch (t.length) {
          case 4:
            var e = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
            return u(55296 + (e >>> 10)) + u(56320 + (1023 & e));

          case 3:
            return u((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));

          default:
            return u((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1));
        }
    }, y = function(t) {
        return t.replace(p, h);
    }, g = function(t) {
        var e = t.length, r = e % 4, n = (e > 0 ? o[t.charAt(0)] << 18 : 0) | (e > 1 ? o[t.charAt(1)] << 12 : 0) | (e > 2 ? o[t.charAt(2)] << 6 : 0) | (e > 3 ? o[t.charAt(3)] : 0), c = [ u(n >>> 16), u(n >>> 8 & 255), u(255 & n) ];
        return c.length -= [ 0, 0, 2, 1 ][r], c.join("");
    }, b = t.atob ? function(e) {
        return t.atob(e);
    } : function(t) {
        return t.replace(/[\s\S]{1,4}/g, g);
    }, m = e ? e.from && e.from !== Uint8Array.from ? function(t) {
        return (t.constructor === e.constructor ? t : e.from(t, "base64")).toString();
    } : function(t) {
        return (t.constructor === e.constructor ? t : new e(t, "base64")).toString();
    } : function(t) {
        return y(b(t));
    }, A = function(t) {
        return m(String(t).replace(/[-_]/g, function(t) {
            return "-" == t ? "+" : "/";
        }).replace(/[^A-Za-z0-9\+\/]/g, ""));
    };
    if (t.Base64 = {
        VERSION: "2.4.0",
        atob: b,
        btoa: d,
        fromBase64: A,
        toBase64: l,
        utob: i,
        encode: l,
        encodeURI: function(t) {
            return l(t, !0);
        },
        btou: y,
        decode: A,
        noConflict: function() {
            var e = t.Base64;
            return t.Base64 = r, e;
        }
    }, "function" == typeof Object.defineProperty) {
        var S = function(t) {
            return {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            };
        };
        t.Base64.extendString = function() {
            Object.defineProperty(String.prototype, "fromBase64", S(function() {
                return A(this);
            })), Object.defineProperty(String.prototype, "toBase64", S(function(t) {
                return l(this, t);
            })), Object.defineProperty(String.prototype, "toBase64URI", S(function() {
                return l(this, !0);
            }));
        };
    }
    return t.Meteor && (Base64 = t.Base64), "undefined" != typeof module && module.exports ? module.exports.Base64 = t.Base64 : "function" == typeof define && define.amd && define([], function() {
        return t.Base64;
    }), {
        Base64: t.Base64
    };
});