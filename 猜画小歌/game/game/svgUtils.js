function e(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = function() {
    function e(e, n) {
        for (var r = 0; r < n.length; r++) {
            var t = n[r];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
            Object.defineProperty(e, t.key, t);
        }
    }
    return function(n, r, t) {
        return r && e(n.prototype, r), t && e(n, t), n;
    };
}(), r = require("../libs/min-base64"), t = require("../libs/underscore/underscore.modified"), a = function() {
    function a() {
        e(this, a);
    }
    return n(a, null, [ {
        key: "createSvg",
        value: function(e, n) {
            return '<svg xmlns="http://www.w3.org/2000/svg" width="' + e + '" height="' + n + '" class="svg-margin-10">';
        }
    }, {
        key: "createLinePath",
        value: function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [ 0, 0 ], r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "#000000";
            if (0 != e.length && 0 != e[0].length) {
                for (var o = function(e, t) {
                    return (e - n[t]) * r;
                }, l = "M" + o(e[0][0], 0) + " " + o(e[1][0], 1), i = 1; i < e[0].length; i++) l += " L" + o(e[0][i], 0) + " " + o(e[1][i], 1);
                return '<path d="' + l + '" stroke="' + a + '" stroke-width="' + t + '" stroke-linecap="round" fill="none"></path>';
            }
        }
    }, {
        key: "calculateBoundingBox",
        value: function(e) {
            for (var n = -1, r = -1, t = -1, a = -1, o = 0; o < e.length; o++) for (var l = 0; l < e[o][0].length; l++) (-1 == n || n > e[o][0][l]) && (n = e[o][0][l]), 
            (-1 == r || r < e[o][0][l]) && (r = e[o][0][l]), (-1 == t || t > e[o][1][l]) && (t = e[o][1][l]), 
            (-1 == a || a < e[o][1][l]) && (a = e[o][1][l]);
            return {
                x: n - 5,
                y: t - 5,
                w: r - n + 10,
                h: a - t + 10
            };
        }
    }, {
        key: "createSvgBase64FromSegments",
        value: function(e, n, t) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, l = a.createSvgFromSegments(e, n, t, o);
            return "data:image/svg+xml;base64," + r.Base64.encode(l);
        }
    }, {
        key: "createSvgFromSegments",
        value: function(e, n, r) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, l = [];
            if (1 == (o = t.defaults(o, {
                padding: 0,
                order: 0,
                color: "#000000"
            })).order) for (var i = 0; i < e.length; i++) {
                for (var u = [ [], [] ], v = 0; v < e[i].length; v++) u[0].push(e[i][v][0]), u[1].push(e[i][v][1]);
                l.push(u);
            } else e && (l = e);
            n -= 2 * o.padding, r -= 2 * o.padding;
            var g = 2 * n / 140, h = a.createSvg(n, r), d = a.calculateBoundingBox(l), c = n / r, s = [ d.x, d.y ], f = void 0;
            d.w / d.h > c ? (f = n / d.w, s[1] -= .5 * (r / f - d.h)) : (f = r / d.h, s[0] -= .5 * (n / f - d.w));
            for (var p = 0; p < l.length; p++) h += a.createLinePath(l[p], s, f, g, o.color);
            return h += "</svg>";
        }
    }, {
        key: "createLinePathCommand",
        value: function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [ 0, 0 ], r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3], arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (0 != e.length && 0 != e[0].length) {
                var t = function(e, t) {
                    return (e - n[t]) * r;
                }, a = [];
                a.push({
                    marker: "M",
                    values: [ t(e[0][0], 0), t(e[1][0], 1) ]
                });
                for (var o = 1; o < e[0].length; o++) a.push({
                    marker: "L",
                    values: [ t(e[0][0], 0), t(e[1][0], 1) ]
                });
                return a;
            }
        }
    }, {
        key: "createCommandsFromSegments",
        value: function(e, n, r) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, l = [];
            if (1 == (o = t.defaults(o, {
                padding: 0,
                order: 0,
                color: "#000000"
            })).order) for (var i = 0; i < e.length; i++) {
                for (var u = [ [], [] ], v = 0; v < e[i].length; v++) u[0].push(e[i][v][0]), u[1].push(e[i][v][1]);
                l.push(u);
            } else e && (l = e);
            n -= 2 * o.padding, r -= 2 * o.padding;
            var g = 2 * n / 140, h = a.calculateBoundingBox(l), d = n / r, c = [ h.x, h.y ], s = void 0;
            h.w / h.h > d ? (s = n / h.w, c[1] -= .5 * (r / s - h.h)) : (s = r / h.h, c[0] -= .5 * (n / s - h.w));
            for (var f = [], p = 0; p < l.length; p++) f = f.concat(a.createLinePathCommand(l[p], c, s, g, o.color));
            return f;
        }
    } ]), a;
}();

exports.default = a;