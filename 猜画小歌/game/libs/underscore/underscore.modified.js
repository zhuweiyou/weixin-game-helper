var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
    return typeof n;
} : function(n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
};

(function() {
    function r(n) {
        function r(r, t, e, u, i, o) {
            for (;i >= 0 && i < o; i += n) {
                var a = u ? u[i] : i;
                e = t(e, r[a], a, r);
            }
            return e;
        }
        return function(t, e, u, i) {
            e = m(e, i, 4);
            var o = !O(t) && g.keys(t), a = (o || t).length, c = n > 0 ? 0 : a - 1;
            return arguments.length < 3 && (u = t[o ? o[c] : c], c += n), r(t, e, u, o, c, a);
        };
    }
    function t(n) {
        return function(r, t, e) {
            t = b(t, e);
            for (var u = A(r), i = n > 0 ? 0 : u - 1; i >= 0 && i < u; i += n) if (t(r[i], i, r)) return i;
            return -1;
        };
    }
    function e(n, r, t) {
        return function(e, u, i) {
            var o = 0, a = A(e);
            if ("number" == typeof i) n > 0 ? o = i >= 0 ? i : Math.max(i + a, o) : a = i >= 0 ? Math.min(i + 1, a) : i + a + 1; else if (t && i && a) return i = t(e, u), 
            e[i] === u ? i : -1;
            if (u !== u) return (i = r(f.call(e, o, a), g.isNaN)) >= 0 ? i + o : -1;
            for (i = n > 0 ? o : a - 1; i >= 0 && i < a; i += n) if (e[i] === u) return i;
            return -1;
        };
    }
    function u(n, r) {
        var t = I.length, e = n.constructor, u = g.isFunction(e) && e.prototype || o, i = "constructor";
        for (g.has(n, i) && !g.contains(r, i) && r.push(i); t--; ) (i = I[t]) in n && n[i] !== u[i] && !g.contains(r, i) && r.push(i);
    }
    var i = Array.prototype, o = Object.prototype, a = Function.prototype, c = i.push, f = i.slice, l = o.toString, s = o.hasOwnProperty, p = Array.isArray, v = Object.keys, h = a.bind, y = Object.create, d = function() {}, g = function n(r) {
        return r instanceof n ? r : this instanceof n ? void (this._wrapped = r) : new n(r);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = g), 
    exports._ = g) : root._ = g, g.VERSION = "1.8.3";
    var m = function(n, r, t) {
        if (void 0 === r) return n;
        switch (null == t ? 3 : t) {
          case 1:
            return function(t) {
                return n.call(r, t);
            };

          case 2:
            return function(t, e) {
                return n.call(r, t, e);
            };

          case 3:
            return function(t, e, u) {
                return n.call(r, t, e, u);
            };

          case 4:
            return function(t, e, u, i) {
                return n.call(r, t, e, u, i);
            };
        }
        return function() {
            return n.apply(r, arguments);
        };
    }, b = function(n, r, t) {
        return null == n ? g.identity : g.isFunction(n) ? m(n, r, t) : g.isObject(n) ? g.matcher(n) : g.property(n);
    };
    g.iteratee = function(n, r) {
        return b(n, r, 1 / 0);
    };
    var x = function(n, r) {
        return function(t) {
            var e = arguments.length;
            if (e < 2 || null == t) return t;
            for (var u = 1; u < e; u++) for (var i = arguments[u], o = n(i), a = o.length, c = 0; c < a; c++) {
                var f = o[c];
                r && void 0 !== t[f] || (t[f] = i[f]);
            }
            return t;
        };
    }, _ = function(n) {
        if (!g.isObject(n)) return {};
        if (y) return y(n);
        d.prototype = n;
        var r = new d();
        return d.prototype = null, r;
    }, j = function(n) {
        return function(r) {
            return null == r ? void 0 : r[n];
        };
    }, w = Math.pow(2, 53) - 1, A = j("length"), O = function(n) {
        var r = A(n);
        return "number" == typeof r && r >= 0 && r <= w;
    };
    g.each = g.forEach = function(n, r, t) {
        r = m(r, t);
        var e, u;
        if (O(n)) for (e = 0, u = n.length; e < u; e++) r(n[e], e, n); else {
            var i = g.keys(n);
            for (e = 0, u = i.length; e < u; e++) r(n[i[e]], i[e], n);
        }
        return n;
    }, g.map = g.collect = function(n, r, t) {
        r = b(r, t);
        for (var e = !O(n) && g.keys(n), u = (e || n).length, i = Array(u), o = 0; o < u; o++) {
            var a = e ? e[o] : o;
            i[o] = r(n[a], a, n);
        }
        return i;
    }, g.reduce = g.foldl = g.inject = r(1), g.reduceRight = g.foldr = r(-1), g.find = g.detect = function(n, r, t) {
        var e;
        if (void 0 !== (e = O(n) ? g.findIndex(n, r, t) : g.findKey(n, r, t)) && -1 !== e) return n[e];
    }, g.filter = g.select = function(n, r, t) {
        var e = [];
        return r = b(r, t), g.each(n, function(n, t, u) {
            r(n, t, u) && e.push(n);
        }), e;
    }, g.reject = function(n, r, t) {
        return g.filter(n, g.negate(b(r)), t);
    }, g.every = g.all = function(n, r, t) {
        r = b(r, t);
        for (var e = !O(n) && g.keys(n), u = (e || n).length, i = 0; i < u; i++) {
            var o = e ? e[i] : i;
            if (!r(n[o], o, n)) return !1;
        }
        return !0;
    }, g.some = g.any = function(n, r, t) {
        r = b(r, t);
        for (var e = !O(n) && g.keys(n), u = (e || n).length, i = 0; i < u; i++) {
            var o = e ? e[i] : i;
            if (r(n[o], o, n)) return !0;
        }
        return !1;
    }, g.contains = g.includes = g.include = function(n, r, t, e) {
        return O(n) || (n = g.values(n)), ("number" != typeof t || e) && (t = 0), g.indexOf(n, r, t) >= 0;
    }, g.invoke = function(n, r) {
        var t = f.call(arguments, 2), e = g.isFunction(r);
        return g.map(n, function(n) {
            var u = e ? r : n[r];
            return null == u ? u : u.apply(n, t);
        });
    }, g.pluck = function(n, r) {
        return g.map(n, g.property(r));
    }, g.where = function(n, r) {
        return g.filter(n, g.matcher(r));
    }, g.findWhere = function(n, r) {
        return g.find(n, g.matcher(r));
    }, g.max = function(n, r, t) {
        var e, u, i = -1 / 0, o = -1 / 0;
        if (null == r && null != n) for (var a = 0, c = (n = O(n) ? n : g.values(n)).length; a < c; a++) (e = n[a]) > i && (i = e); else r = b(r, t), 
        g.each(n, function(n, t, e) {
            ((u = r(n, t, e)) > o || u === -1 / 0 && i === -1 / 0) && (i = n, o = u);
        });
        return i;
    }, g.min = function(n, r, t) {
        var e, u, i = 1 / 0, o = 1 / 0;
        if (null == r && null != n) for (var a = 0, c = (n = O(n) ? n : g.values(n)).length; a < c; a++) (e = n[a]) < i && (i = e); else r = b(r, t), 
        g.each(n, function(n, t, e) {
            ((u = r(n, t, e)) < o || u === 1 / 0 && i === 1 / 0) && (i = n, o = u);
        });
        return i;
    }, g.shuffle = function(n) {
        for (var r, t = O(n) ? n : g.values(n), e = t.length, u = Array(e), i = 0; i < e; i++) (r = g.random(0, i)) !== i && (u[i] = u[r]), 
        u[r] = t[i];
        return u;
    }, g.sample = function(n, r, t) {
        return null == r || t ? (O(n) || (n = g.values(n)), n[g.random(n.length - 1)]) : g.shuffle(n).slice(0, Math.max(0, r));
    }, g.sortBy = function(n, r, t) {
        return r = b(r, t), g.pluck(g.map(n, function(n, t, e) {
            return {
                value: n,
                index: t,
                criteria: r(n, t, e)
            };
        }).sort(function(n, r) {
            var t = n.criteria, e = r.criteria;
            if (t !== e) {
                if (t > e || void 0 === t) return 1;
                if (t < e || void 0 === e) return -1;
            }
            return n.index - r.index;
        }), "value");
    };
    var k = function(n) {
        return function(r, t, e) {
            var u = {};
            return t = b(t, e), g.each(r, function(e, i) {
                var o = t(e, i, r);
                n(u, e, o);
            }), u;
        };
    };
    g.groupBy = k(function(n, r, t) {
        g.has(n, t) ? n[t].push(r) : n[t] = [ r ];
    }), g.indexBy = k(function(n, r, t) {
        n[t] = r;
    }), g.countBy = k(function(n, r, t) {
        g.has(n, t) ? n[t]++ : n[t] = 1;
    }), g.toArray = function(n) {
        return n ? g.isArray(n) ? f.call(n) : O(n) ? g.map(n, g.identity) : g.values(n) : [];
    }, g.size = function(n) {
        return null == n ? 0 : O(n) ? n.length : g.keys(n).length;
    }, g.partition = function(n, r, t) {
        r = b(r, t);
        var e = [], u = [];
        return g.each(n, function(n, t, i) {
            (r(n, t, i) ? e : u).push(n);
        }), [ e, u ];
    }, g.first = g.head = g.take = function(n, r, t) {
        if (null != n) return null == r || t ? n[0] : g.initial(n, n.length - r);
    }, g.initial = function(n, r, t) {
        return f.call(n, 0, Math.max(0, n.length - (null == r || t ? 1 : r)));
    }, g.last = function(n, r, t) {
        if (null != n) return null == r || t ? n[n.length - 1] : g.rest(n, Math.max(0, n.length - r));
    }, g.rest = g.tail = g.drop = function(n, r, t) {
        return f.call(n, null == r || t ? 1 : r);
    }, g.compact = function(n) {
        return g.filter(n, g.identity);
    };
    var S = function n(r, t, e, u) {
        for (var i = [], o = 0, a = u || 0, c = A(r); a < c; a++) {
            var f = r[a];
            if (O(f) && (g.isArray(f) || g.isArguments(f))) {
                t || (f = n(f, t, e));
                var l = 0, s = f.length;
                for (i.length += s; l < s; ) i[o++] = f[l++];
            } else e || (i[o++] = f);
        }
        return i;
    };
    g.flatten = function(n, r) {
        return S(n, r, !1);
    }, g.without = function(n) {
        return g.difference(n, f.call(arguments, 1));
    }, g.uniq = g.unique = function(n, r, t, e) {
        g.isBoolean(r) || (e = t, t = r, r = !1), null != t && (t = b(t, e));
        for (var u = [], i = [], o = 0, a = A(n); o < a; o++) {
            var c = n[o], f = t ? t(c, o, n) : c;
            r ? (o && i === f || u.push(c), i = f) : t ? g.contains(i, f) || (i.push(f), u.push(c)) : g.contains(u, c) || u.push(c);
        }
        return u;
    }, g.union = function() {
        return g.uniq(S(arguments, !0, !0));
    }, g.intersection = function(n) {
        for (var r = [], t = arguments.length, e = 0, u = A(n); e < u; e++) {
            var i = n[e];
            if (!g.contains(r, i)) {
                for (var o = 1; o < t && g.contains(arguments[o], i); o++) ;
                o === t && r.push(i);
            }
        }
        return r;
    }, g.difference = function(n) {
        var r = S(arguments, !0, !0, 1);
        return g.filter(n, function(n) {
            return !g.contains(r, n);
        });
    }, g.zip = function() {
        return g.unzip(arguments);
    }, g.unzip = function(n) {
        for (var r = n && g.max(n, A).length || 0, t = Array(r), e = 0; e < r; e++) t[e] = g.pluck(n, e);
        return t;
    }, g.object = function(n, r) {
        for (var t = {}, e = 0, u = A(n); e < u; e++) r ? t[n[e]] = r[e] : t[n[e][0]] = n[e][1];
        return t;
    }, g.findIndex = t(1), g.findLastIndex = t(-1), g.sortedIndex = function(n, r, t, e) {
        for (var u = (t = b(t, e, 1))(r), i = 0, o = A(n); i < o; ) {
            var a = Math.floor((i + o) / 2);
            t(n[a]) < u ? i = a + 1 : o = a;
        }
        return i;
    }, g.indexOf = e(1, g.findIndex, g.sortedIndex), g.lastIndexOf = e(-1, g.findLastIndex), 
    g.range = function(n, r, t) {
        null == r && (r = n || 0, n = 0), t = t || 1;
        for (var e = Math.max(Math.ceil((r - n) / t), 0), u = Array(e), i = 0; i < e; i++, 
        n += t) u[i] = n;
        return u;
    };
    var F = function(n, r, t, e, u) {
        if (!(e instanceof r)) return n.apply(t, u);
        var i = _(n.prototype), o = n.apply(i, u);
        return g.isObject(o) ? o : i;
    };
    g.bind = function(n, r) {
        if (h && n.bind === h) return h.apply(n, f.call(arguments, 1));
        if (!g.isFunction(n)) throw new TypeError("Bind must be called on a function");
        var t = f.call(arguments, 2);
        return function e() {
            return F(n, e, r, this, t.concat(f.call(arguments)));
        };
    }, g.partial = function(n) {
        var r = f.call(arguments, 1);
        return function t() {
            for (var e = 0, u = r.length, i = Array(u), o = 0; o < u; o++) i[o] = r[o] === g ? arguments[e++] : r[o];
            for (;e < arguments.length; ) i.push(arguments[e++]);
            return F(n, t, this, this, i);
        };
    }, g.bindAll = function(n) {
        var r, t, e = arguments.length;
        if (e <= 1) throw new Error("bindAll must be passed function names");
        for (r = 1; r < e; r++) n[t = arguments[r]] = g.bind(n[t], n);
        return n;
    }, g.memoize = function(n, r) {
        var t = function t(e) {
            var u = t.cache, i = "" + (r ? r.apply(this, arguments) : e);
            return g.has(u, i) || (u[i] = n.apply(this, arguments)), u[i];
        };
        return t.cache = {}, t;
    }, g.delay = function(n, r) {
        var t = f.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, t);
        }, r);
    }, g.defer = g.partial(g.delay, g, 1), g.throttle = function(n, r, t) {
        var e, u, i, o = null, a = 0;
        t || (t = {});
        var c = function() {
            a = !1 === t.leading ? 0 : g.now(), o = null, i = n.apply(e, u), o || (e = u = null);
        };
        return function() {
            var f = g.now();
            a || !1 !== t.leading || (a = f);
            var l = r - (f - a);
            return e = this, u = arguments, l <= 0 || l > r ? (o && (clearTimeout(o), o = null), 
            a = f, i = n.apply(e, u), o || (e = u = null)) : o || !1 === t.trailing || (o = setTimeout(c, l)), 
            i;
        };
    }, g.debounce = function(n, r, t) {
        var e, u, i, o, a, c = function c() {
            var f = g.now() - o;
            f < r && f >= 0 ? e = setTimeout(c, r - f) : (e = null, t || (a = n.apply(i, u), 
            e || (i = u = null)));
        };
        return function() {
            i = this, u = arguments, o = g.now();
            var f = t && !e;
            return e || (e = setTimeout(c, r)), f && (a = n.apply(i, u), i = u = null), a;
        };
    }, g.wrap = function(n, r) {
        return g.partial(r, n);
    }, g.negate = function(n) {
        return function() {
            return !n.apply(this, arguments);
        };
    }, g.compose = function() {
        var n = arguments, r = n.length - 1;
        return function() {
            for (var t = r, e = n[r].apply(this, arguments); t--; ) e = n[t].call(this, e);
            return e;
        };
    }, g.after = function(n, r) {
        return function() {
            if (--n < 1) return r.apply(this, arguments);
        };
    }, g.before = function(n, r) {
        var t;
        return function() {
            return --n > 0 && (t = r.apply(this, arguments)), n <= 1 && (r = null), t;
        };
    }, g.once = g.partial(g.before, 2);
    var E = !{
        toString: null
    }.propertyIsEnumerable("toString"), I = [ "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString" ];
    g.keys = function(n) {
        if (!g.isObject(n)) return [];
        if (v) return v(n);
        var r = [];
        for (var t in n) g.has(n, t) && r.push(t);
        return E && u(n, r), r;
    }, g.allKeys = function(n) {
        if (!g.isObject(n)) return [];
        var r = [];
        for (var t in n) r.push(t);
        return E && u(n, r), r;
    }, g.values = function(n) {
        for (var r = g.keys(n), t = r.length, e = Array(t), u = 0; u < t; u++) e[u] = n[r[u]];
        return e;
    }, g.mapObject = function(n, r, t) {
        r = b(r, t);
        for (var e, u = g.keys(n), i = u.length, o = {}, a = 0; a < i; a++) o[e = u[a]] = r(n[e], e, n);
        return o;
    }, g.pairs = function(n) {
        for (var r = g.keys(n), t = r.length, e = Array(t), u = 0; u < t; u++) e[u] = [ r[u], n[r[u]] ];
        return e;
    }, g.invert = function(n) {
        for (var r = {}, t = g.keys(n), e = 0, u = t.length; e < u; e++) r[n[t[e]]] = t[e];
        return r;
    }, g.functions = g.methods = function(n) {
        var r = [];
        for (var t in n) g.isFunction(n[t]) && r.push(t);
        return r.sort();
    }, g.extend = x(g.allKeys), g.extendOwn = g.assign = x(g.keys), g.findKey = function(n, r, t) {
        r = b(r, t);
        for (var e, u = g.keys(n), i = 0, o = u.length; i < o; i++) if (e = u[i], r(n[e], e, n)) return e;
    }, g.pick = function(n, r, t) {
        var e, u, i = {}, o = n;
        if (null == o) return i;
        g.isFunction(r) ? (u = g.allKeys(o), e = m(r, t)) : (u = S(arguments, !1, !1, 1), 
        e = function(n, r, t) {
            return r in t;
        }, o = Object(o));
        for (var a = 0, c = u.length; a < c; a++) {
            var f = u[a], l = o[f];
            e(l, f, o) && (i[f] = l);
        }
        return i;
    }, g.omit = function(n, r, t) {
        if (g.isFunction(r)) r = g.negate(r); else {
            var e = g.map(S(arguments, !1, !1, 1), String);
            r = function(n, r) {
                return !g.contains(e, r);
            };
        }
        return g.pick(n, r, t);
    }, g.defaults = x(g.allKeys, !0), g.create = function(n, r) {
        var t = _(n);
        return r && g.extendOwn(t, r), t;
    }, g.clone = function(n) {
        return g.isObject(n) ? g.isArray(n) ? n.slice() : g.extend({}, n) : n;
    }, g.tap = function(n, r) {
        return r(n), n;
    }, g.isMatch = function(n, r) {
        var t = g.keys(r), e = t.length;
        if (null == n) return !e;
        for (var u = Object(n), i = 0; i < e; i++) {
            var o = t[i];
            if (r[o] !== u[o] || !(o in u)) return !1;
        }
        return !0;
    };
    var M = function r(t, e, u, i) {
        if (t === e) return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof g && (t = t._wrapped), e instanceof g && (e = e._wrapped);
        var o = l.call(t);
        if (o !== l.call(e)) return !1;
        switch (o) {
          case "[object RegExp]":
          case "[object String]":
            return "" + t == "" + e;

          case "[object Number]":
            return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;

          case "[object Date]":
          case "[object Boolean]":
            return +t == +e;
        }
        var a = "[object Array]" === o;
        if (!a) {
            if ("object" != (void 0 === t ? "undefined" : n(t)) || "object" != (void 0 === e ? "undefined" : n(e))) return !1;
            var c = t.constructor, f = e.constructor;
            if (c !== f && !(g.isFunction(c) && c instanceof c && g.isFunction(f) && f instanceof f) && "constructor" in t && "constructor" in e) return !1;
        }
        u = u || [], i = i || [];
        for (var s = u.length; s--; ) if (u[s] === t) return i[s] === e;
        if (u.push(t), i.push(e), a) {
            if ((s = t.length) !== e.length) return !1;
            for (;s--; ) if (!r(t[s], e[s], u, i)) return !1;
        } else {
            var p, v = g.keys(t);
            if (s = v.length, g.keys(e).length !== s) return !1;
            for (;s--; ) if (p = v[s], !g.has(e, p) || !r(t[p], e[p], u, i)) return !1;
        }
        return u.pop(), i.pop(), !0;
    };
    g.isEqual = function(n, r) {
        return M(n, r);
    }, g.isEmpty = function(n) {
        return null == n || (O(n) && (g.isArray(n) || g.isString(n) || g.isArguments(n)) ? 0 === n.length : 0 === g.keys(n).length);
    }, g.isElement = function(n) {
        return !(!n || 1 !== n.nodeType);
    }, g.isArray = p || function(n) {
        return "[object Array]" === l.call(n);
    }, g.isObject = function(r) {
        var t = void 0 === r ? "undefined" : n(r);
        return "function" === t || "object" === t && !!r;
    }, g.each([ "Arguments", "Function", "String", "Number", "Date", "RegExp", "Error" ], function(n) {
        g["is" + n] = function(r) {
            return l.call(r) === "[object " + n + "]";
        };
    }), g.isArguments(arguments) || (g.isArguments = function(n) {
        return g.has(n, "callee");
    }), "function" != typeof /./ && "object" != ("undefined" == typeof Int8Array ? "undefined" : n(Int8Array)) && (g.isFunction = function(n) {
        return "function" == typeof n || !1;
    }), g.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n));
    }, g.isNaN = function(n) {
        return g.isNumber(n) && n !== +n;
    }, g.isBoolean = function(n) {
        return !0 === n || !1 === n || "[object Boolean]" === l.call(n);
    }, g.isNull = function(n) {
        return null === n;
    }, g.isUndefined = function(n) {
        return void 0 === n;
    }, g.has = function(n, r) {
        return null != n && s.call(n, r);
    }, g.noConflict = function() {
        return root._ = previousUnderscore, this;
    }, g.identity = function(n) {
        return n;
    }, g.constant = function(n) {
        return function() {
            return n;
        };
    }, g.noop = function() {}, g.property = j, g.propertyOf = function(n) {
        return null == n ? function() {} : function(r) {
            return n[r];
        };
    }, g.matcher = g.matches = function(n) {
        return n = g.extendOwn({}, n), function(r) {
            return g.isMatch(r, n);
        };
    }, g.times = function(n, r, t) {
        var e = Array(Math.max(0, n));
        r = m(r, t, 1);
        for (var u = 0; u < n; u++) e[u] = r(u);
        return e;
    }, g.random = function(n, r) {
        return null == r && (r = n, n = 0), n + Math.floor(Math.random() * (r - n + 1));
    }, g.now = Date.now || function() {
        return new Date().getTime();
    };
    var N = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, B = g.invert(N), T = function(n) {
        var r = function(r) {
            return n[r];
        }, t = "(?:" + g.keys(n).join("|") + ")", e = RegExp(t), u = RegExp(t, "g");
        return function(n) {
            return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, r) : n;
        };
    };
    g.escape = T(N), g.unescape = T(B), g.result = function(n, r, t) {
        var e = null == n ? void 0 : n[r];
        return void 0 === e && (e = t), g.isFunction(e) ? e.call(n) : e;
    };
    var R = 0;
    g.uniqueId = function(n) {
        var r = ++R + "";
        return n ? n + r : r;
    }, g.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var q = /(.)^/, K = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, z = /\\|'|\r|\n|\u2028|\u2029/g, D = function(n) {
        return "\\" + K[n];
    };
    g.template = function(n, r, t) {
        !r && t && (r = t), r = g.defaults({}, r, g.templateSettings);
        var e = RegExp([ (r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source ].join("|") + "|$", "g"), u = 0, i = "__p+='";
        n.replace(e, function(r, t, e, o, a) {
            return i += n.slice(u, a).replace(z, D), u = a + r.length, t ? i += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"), 
            r;
        }), i += "';\n", r.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try {
            var o = new Function(r.variable || "obj", "_", i);
        } catch (n) {
            throw n.source = i, n;
        }
        var a = function(n) {
            return o.call(this, n, g);
        }, c = r.variable || "obj";
        return a.source = "function(" + c + "){\n" + i + "}", a;
    }, g.chain = function(n) {
        var r = g(n);
        return r._chain = !0, r;
    };
    var L = function(n, r) {
        return n._chain ? g(r).chain() : r;
    };
    g.mixin = function(n) {
        g.each(g.functions(n), function(r) {
            var t = g[r] = n[r];
            g.prototype[r] = function() {
                var n = [ this._wrapped ];
                return c.apply(n, arguments), L(this, t.apply(g, n));
            };
        });
    }, g.mixin(g), g.each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(n) {
        var r = i[n];
        g.prototype[n] = function() {
            var t = this._wrapped;
            return r.apply(t, arguments), "shift" !== n && "splice" !== n || 0 !== t.length || delete t[0], 
            L(this, t);
        };
    }), g.each([ "concat", "join", "slice" ], function(n) {
        var r = i[n];
        g.prototype[n] = function() {
            return L(this, r.apply(this._wrapped, arguments));
        };
    }), g.prototype.value = function() {
        return this._wrapped;
    }, g.prototype.valueOf = g.prototype.toJSON = g.prototype.value, g.prototype.toString = function() {
        return "" + this._wrapped;
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return g;
    });
}).call(void 0);