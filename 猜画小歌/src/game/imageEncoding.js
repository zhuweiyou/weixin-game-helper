function e(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = function() {
    function e(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(r, t, n) {
        return t && e(r.prototype, t), n && e(r, n), r;
    };
}(), t = require("../libs/underscore/underscore.modified"), n = function() {
    function n() {
        e(this, n);
    }
    return r(n, null, [ {
        key: "imageToShortList",
        value: function(e) {
            if (0 == e.length) return [];
            var r = [];
            return r.push(e.length), t.each(e, function(e) {
                var n = e[0], o = e[1], u = e[2];
                r.push(n.length), t.each(n, function(e) {
                    r.push(e);
                }), t.each(o, function(e) {
                    r.push(e);
                }), t.each(u, function(e) {
                    r.push(e);
                });
            }), r;
        }
    }, {
        key: "shortListToImage",
        value: function(e) {
            if (0 == e.length) return [];
            for (var r = [], t = 0, n = e[t++], o = 0; o < n; o++) {
                var u = e[t++], i = [], s = [], a = [], h = void 0;
                for (h = 0; h < u; h++) i.push(e[t++]);
                for (h = 0; h < u; h++) s.push(e[t++]);
                for (h = 0; h < u; h++) a.push(e[t++]);
                r.push([ i, s, a ]);
            }
            return r;
        }
    }, {
        key: "shortListIncrease20000",
        value: function(e) {
            for (var r = 0; r < e.length; r++) e[r] += 2e4;
        }
    }, {
        key: "shortListDecrease20000",
        value: function(e) {
            for (var r = 0; r < e.length; r++) e[r] -= 2e4;
        }
    }, {
        key: "shortListToString",
        value: function(e) {
            var r = [];
            return t.each(e, function(e) {
                r.push(String.fromCharCode(e));
            }), r.join("");
        }
    }, {
        key: "stringToShortList",
        value: function(e) {
            var r = [], t = void 0;
            for (t = 0; t < e.length; t++) r.push(e.charCodeAt(t));
            return r;
        }
    }, {
        key: "encode",
        value: function(e) {
            if (0 == e.length) return [];
            var r = n.imageToShortList(e);
            return n.shortListIncrease20000(r), [ n.shortListToString(r) ];
        }
    }, {
        key: "decode",
        value: function(e) {
            if (0 == e.length) return [];
            if (1 == e.length && "string" == typeof e[0]) {
                var r = n.stringToShortList(e[0]);
                return n.shortListDecrease20000(r), n.shortListToImage(r);
            }
            return e;
        }
    } ]), n;
}();

exports.default = n;