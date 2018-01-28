
    var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function(e) {
        return typeof e
    }: function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
    }; !
    function(r) {
        if ("object" === ("undefined" == typeof exports ? "undefined": e(exports)) && "undefined" != typeof module) module.exports = r();
        else if ("function" == typeof define && define.amd) define([], r);
        else { ("undefined" != typeof window ? window: "undefined" != typeof global ? global: "undefined" != typeof self ? self: this).base64js = r()
        }
    } (function() {
        return function e(r, t, n) {
            function o(u, i) {
                if (!t[u]) {
                    if (!r[u]) {
                        var a = "function" == typeof require && require;
                        if (!i && a) return a(u, !0);
                        if (f) return f(u, !0);
                        var d = new Error("Cannot find module '" + u + "'");
                        throw d.code = "MODULE_NOT_FOUND",
                        d
                    }
                    var c = t[u] = {
                        exports: {}
                    };
                    r[u][0].call(c.exports,
                    function(e) {
                        var t = r[u][1][e];
                        return o(t || e)
                    },
                    c, c.exports, e, r, t, n)
                }
                return t[u].exports
            }
            for (var f = "function" == typeof require && require,
            u = 0; u < n.length; u++) o(n[u]);
            return o
        } ({
            "/": [function(e, r, t) {
                function n(e) {
                    var r = e.length;
                    if (r % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                    return "=" === e[r - 2] ? 2 : "=" === e[r - 1] ? 1 : 0
                }
                function o(e) {
                    return u[e >> 18 & 63] + u[e >> 12 & 63] + u[e >> 6 & 63] + u[63 & e]
                }
                function f(e, r, t) {
                    for (var n, f = [], u = r; u < t; u += 3) n = (e[u] << 16) + (e[u + 1] << 8) + e[u + 2],
                    f.push(o(n));
                    return f.join("")
                }
                t.byteLength = function(e) {
                    return 3 * e.length / 4 - n(e)
                },
                t.toByteArray = function(e) {
                    var r, t, o, f, u, d = e.length;
                    f = n(e),
                    u = new a(3 * d / 4 - f),
                    t = f > 0 ? d - 4 : d;
                    var c = 0;
                    for (r = 0; r < t; r += 4) o = i[e.charCodeAt(r)] << 18 | i[e.charCodeAt(r + 1)] << 12 | i[e.charCodeAt(r + 2)] << 6 | i[e.charCodeAt(r + 3)],
                    u[c++] = o >> 16 & 255,
                    u[c++] = o >> 8 & 255,
                    u[c++] = 255 & o;
                    return 2 === f ? (o = i[e.charCodeAt(r)] << 2 | i[e.charCodeAt(r + 1)] >> 4, u[c++] = 255 & o) : 1 === f && (o = i[e.charCodeAt(r)] << 10 | i[e.charCodeAt(r + 1)] << 4 | i[e.charCodeAt(r + 2)] >> 2, u[c++] = o >> 8 & 255, u[c++] = 255 & o),
                    u
                },
                t.fromByteArray = function(e) {
                    for (var r, t = e.length,
                    n = t % 3,
                    o = "",
                    i = [], a = 16383, d = 0, c = t - n; d < c; d += a) i.push(f(e, d, d + a > c ? c: d + a));
                    return 1 === n ? (r = e[t - 1], o += u[r >> 2], o += u[r << 4 & 63], o += "==") : 2 === n && (r = (e[t - 2] << 8) + e[t - 1], o += u[r >> 10], o += u[r >> 4 & 63], o += u[r << 2 & 63], o += "="),
                    i.push(o),
                    i.join("")
                };
                for (var u = [], i = [], a = "undefined" != typeof Uint8Array ? Uint8Array: Array, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = 0, y = d.length; c < y; ++c) u[c] = d[c],
                i[d.charCodeAt(c)] = c;
                i["-".charCodeAt(0)] = 62,
                i["_".charCodeAt(0)] = 63
            },
            {}]
        },
        {},
        [])("/")
    });
