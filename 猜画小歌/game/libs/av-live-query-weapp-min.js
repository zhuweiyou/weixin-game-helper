var e, t, n, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, i = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t;
}(require("../game/api/rpcLayer.js")), o = {};

!function(e, t) {
    "object" == ("undefined" == typeof exports ? "undefined" : r(exports)) && "object" == ("undefined" == typeof module ? "undefined" : r(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == ("undefined" == typeof exports ? "undefined" : r(exports)) ? exports.AV = t() : e.AV = t();
}("undefined" != typeof self ? self : void 0, function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            });
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return t.d(n, "a", n), n;
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, t.p = "", t(t.s = 23);
    }([ function(e, t, n) {
        (function(e, n) {
            var i, o;
            !function() {
                var s = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self.self === self && self || "object" == (void 0 === e ? "undefined" : r(e)) && e.global === e && e || this || {}, a = s._, u = Array.prototype, c = Object.prototype, l = "undefined" != typeof Symbol ? Symbol.prototype : null, f = u.push, h = u.slice, d = c.toString, p = c.hasOwnProperty, v = Array.isArray, y = Object.keys, m = Object.create, g = function() {}, _ = function e(t) {
                    return t instanceof e ? t : this instanceof e ? void (this._wrapped = t) : new e(t);
                };
                void 0 === t || t.nodeType ? s._ = _ : (void 0 !== n && !n.nodeType && n.exports && (t = n.exports = _), 
                t._ = _), _.VERSION = "1.9.1";
                var b, w = function(e, t, n) {
                    if (void 0 === t) return e;
                    switch (null == n ? 3 : n) {
                      case 1:
                        return function(n) {
                            return e.call(t, n);
                        };

                      case 3:
                        return function(n, r, i) {
                            return e.call(t, n, r, i);
                        };

                      case 4:
                        return function(n, r, i, o) {
                            return e.call(t, n, r, i, o);
                        };
                    }
                    return function() {
                        return e.apply(t, arguments);
                    };
                }, E = function(e, t, n) {
                    return _.iteratee !== b ? _.iteratee(e, t) : null == e ? _.identity : _.isFunction(e) ? w(e, t, n) : _.isObject(e) && !_.isArray(e) ? _.matcher(e) : _.property(e);
                };
                _.iteratee = b = function(e, t) {
                    return E(e, t, 1 / 0);
                };
                var S = function(e, t) {
                    return t = null == t ? e.length - 1 : +t, function() {
                        for (var n = Math.max(arguments.length - t, 0), r = Array(n), i = 0; i < n; i++) r[i] = arguments[i + t];
                        switch (t) {
                          case 0:
                            return e.call(this, r);

                          case 1:
                            return e.call(this, arguments[0], r);

                          case 2:
                            return e.call(this, arguments[0], arguments[1], r);
                        }
                        var o = Array(t + 1);
                        for (i = 0; i < t; i++) o[i] = arguments[i];
                        return o[t] = r, e.apply(this, o);
                    };
                }, T = function(e) {
                    if (!_.isObject(e)) return {};
                    if (m) return m(e);
                    g.prototype = e;
                    var t = new g();
                    return g.prototype = null, t;
                }, O = function(e) {
                    return function(t) {
                        return null == t ? void 0 : t[e];
                    };
                }, A = function(e, t) {
                    return null != e && p.call(e, t);
                }, C = function(e, t) {
                    for (var n = t.length, r = 0; r < n; r++) {
                        if (null == e) return;
                        e = e[t[r]];
                    }
                    return n ? e : void 0;
                }, I = Math.pow(2, 53) - 1, N = O("length"), x = function(e) {
                    var t = N(e);
                    return "number" == typeof t && t >= 0 && t <= I;
                };
                _.each = _.forEach = function(e, t, n) {
                    t = w(t, n);
                    var r, i;
                    if (x(e)) for (r = 0, i = e.length; r < i; r++) t(e[r], r, e); else {
                        var o = _.keys(e);
                        for (r = 0, i = o.length; r < i; r++) t(e[o[r]], o[r], e);
                    }
                    return e;
                }, _.map = _.collect = function(e, t, n) {
                    t = E(t, n);
                    for (var r = !x(e) && _.keys(e), i = (r || e).length, o = Array(i), s = 0; s < i; s++) {
                        var a = r ? r[s] : s;
                        o[s] = t(e[a], a, e);
                    }
                    return o;
                };
                var P = function(e) {
                    var t = function(t, n, r, i) {
                        var o = !x(t) && _.keys(t), s = (o || t).length, a = e > 0 ? 0 : s - 1;
                        for (i || (r = t[o ? o[a] : a], a += e); a >= 0 && a < s; a += e) {
                            var u = o ? o[a] : a;
                            r = n(r, t[u], u, t);
                        }
                        return r;
                    };
                    return function(e, n, r, i) {
                        var o = arguments.length >= 3;
                        return t(e, w(n, i, 4), r, o);
                    };
                };
                _.reduce = _.foldl = _.inject = P(1), _.reduceRight = _.foldr = P(-1), _.find = _.detect = function(e, t, n) {
                    var r = (x(e) ? _.findIndex : _.findKey)(e, t, n);
                    if (void 0 !== r && -1 !== r) return e[r];
                }, _.filter = _.select = function(e, t, n) {
                    var r = [];
                    return t = E(t, n), _.each(e, function(e, n, i) {
                        t(e, n, i) && r.push(e);
                    }), r;
                }, _.reject = function(e, t, n) {
                    return _.filter(e, _.negate(E(t)), n);
                }, _.every = _.all = function(e, t, n) {
                    t = E(t, n);
                    for (var r = !x(e) && _.keys(e), i = (r || e).length, o = 0; o < i; o++) {
                        var s = r ? r[o] : o;
                        if (!t(e[s], s, e)) return !1;
                    }
                    return !0;
                }, _.some = _.any = function(e, t, n) {
                    t = E(t, n);
                    for (var r = !x(e) && _.keys(e), i = (r || e).length, o = 0; o < i; o++) {
                        var s = r ? r[o] : o;
                        if (t(e[s], s, e)) return !0;
                    }
                    return !1;
                }, _.contains = _.includes = _.include = function(e, t, n, r) {
                    return x(e) || (e = _.values(e)), ("number" != typeof n || r) && (n = 0), _.indexOf(e, t, n) >= 0;
                }, _.invoke = S(function(e, t, n) {
                    var r, i;
                    return _.isFunction(t) ? i = t : _.isArray(t) && (r = t.slice(0, -1), t = t[t.length - 1]), 
                    _.map(e, function(e) {
                        var o = i;
                        if (!o) {
                            if (r && r.length && (e = C(e, r)), null == e) return;
                            o = e[t];
                        }
                        return null == o ? o : o.apply(e, n);
                    });
                }), _.pluck = function(e, t) {
                    return _.map(e, _.property(t));
                }, _.where = function(e, t) {
                    return _.filter(e, _.matcher(t));
                }, _.findWhere = function(e, t) {
                    return _.find(e, _.matcher(t));
                }, _.max = function(e, t, n) {
                    var i, o, s = -1 / 0, a = -1 / 0;
                    if (null == t || "number" == typeof t && "object" != r(e[0]) && null != e) for (var u = 0, c = (e = x(e) ? e : _.values(e)).length; u < c; u++) null != (i = e[u]) && i > s && (s = i); else t = E(t, n), 
                    _.each(e, function(e, n, r) {
                        ((o = t(e, n, r)) > a || o === -1 / 0 && s === -1 / 0) && (s = e, a = o);
                    });
                    return s;
                }, _.min = function(e, t, n) {
                    var i, o, s = 1 / 0, a = 1 / 0;
                    if (null == t || "number" == typeof t && "object" != r(e[0]) && null != e) for (var u = 0, c = (e = x(e) ? e : _.values(e)).length; u < c; u++) null != (i = e[u]) && i < s && (s = i); else t = E(t, n), 
                    _.each(e, function(e, n, r) {
                        ((o = t(e, n, r)) < a || o === 1 / 0 && s === 1 / 0) && (s = e, a = o);
                    });
                    return s;
                }, _.shuffle = function(e) {
                    return _.sample(e, 1 / 0);
                }, _.sample = function(e, t, n) {
                    if (null == t || n) return x(e) || (e = _.values(e)), e[_.random(e.length - 1)];
                    var r = x(e) ? _.clone(e) : _.values(e), i = N(r);
                    t = Math.max(Math.min(t, i), 0);
                    for (var o = i - 1, s = 0; s < t; s++) {
                        var a = _.random(s, o), u = r[s];
                        r[s] = r[a], r[a] = u;
                    }
                    return r.slice(0, t);
                }, _.sortBy = function(e, t, n) {
                    var r = 0;
                    return t = E(t, n), _.pluck(_.map(e, function(e, n, i) {
                        return {
                            value: e,
                            index: r++,
                            criteria: t(e, n, i)
                        };
                    }).sort(function(e, t) {
                        var n = e.criteria, r = t.criteria;
                        if (n !== r) {
                            if (n > r || void 0 === n) return 1;
                            if (n < r || void 0 === r) return -1;
                        }
                        return e.index - t.index;
                    }), "value");
                };
                var j = function(e, t) {
                    return function(n, r, i) {
                        var o = t ? [ [], [] ] : {};
                        return r = E(r, i), _.each(n, function(t, i) {
                            var s = r(t, i, n);
                            e(o, t, s);
                        }), o;
                    };
                };
                _.groupBy = j(function(e, t, n) {
                    A(e, n) ? e[n].push(t) : e[n] = [ t ];
                }), _.indexBy = j(function(e, t, n) {
                    e[n] = t;
                }), _.countBy = j(function(e, t, n) {
                    A(e, n) ? e[n]++ : e[n] = 1;
                });
                var R = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
                _.toArray = function(e) {
                    return e ? _.isArray(e) ? h.call(e) : _.isString(e) ? e.match(R) : x(e) ? _.map(e, _.identity) : _.values(e) : [];
                }, _.size = function(e) {
                    return null == e ? 0 : x(e) ? e.length : _.keys(e).length;
                }, _.partition = j(function(e, t, n) {
                    e[n ? 0 : 1].push(t);
                }, !0), _.first = _.head = _.take = function(e, t, n) {
                    return null == e || e.length < 1 ? null == t ? void 0 : [] : null == t || n ? e[0] : _.initial(e, e.length - t);
                }, _.initial = function(e, t, n) {
                    return h.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)));
                }, _.last = function(e, t, n) {
                    return null == e || e.length < 1 ? null == t ? void 0 : [] : null == t || n ? e[e.length - 1] : _.rest(e, Math.max(0, e.length - t));
                }, _.rest = _.tail = _.drop = function(e, t, n) {
                    return h.call(e, null == t || n ? 1 : t);
                }, _.compact = function(e) {
                    return _.filter(e, Boolean);
                };
                var k = function e(t, n, r, i) {
                    for (var o = (i = i || []).length, s = 0, a = N(t); s < a; s++) {
                        var u = t[s];
                        if (x(u) && (_.isArray(u) || _.isArguments(u))) if (n) for (var c = 0, l = u.length; c < l; ) i[o++] = u[c++]; else e(u, n, r, i), 
                        o = i.length; else r || (i[o++] = u);
                    }
                    return i;
                };
                _.flatten = function(e, t) {
                    return k(e, t, !1);
                }, _.without = S(function(e, t) {
                    return _.difference(e, t);
                }), _.uniq = _.unique = function(e, t, n, r) {
                    _.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = E(n, r));
                    for (var i = [], o = [], s = 0, a = N(e); s < a; s++) {
                        var u = e[s], c = n ? n(u, s, e) : u;
                        t && !n ? (s && o === c || i.push(u), o = c) : n ? _.contains(o, c) || (o.push(c), 
                        i.push(u)) : _.contains(i, u) || i.push(u);
                    }
                    return i;
                }, _.union = S(function(e) {
                    return _.uniq(k(e, !0, !0));
                }), _.intersection = function(e) {
                    for (var t = [], n = arguments.length, r = 0, i = N(e); r < i; r++) {
                        var o = e[r];
                        if (!_.contains(t, o)) {
                            var s;
                            for (s = 1; s < n && _.contains(arguments[s], o); s++) ;
                            s === n && t.push(o);
                        }
                    }
                    return t;
                }, _.difference = S(function(e, t) {
                    return t = k(t, !0, !0), _.filter(e, function(e) {
                        return !_.contains(t, e);
                    });
                }), _.unzip = function(e) {
                    for (var t = e && _.max(e, N).length || 0, n = Array(t), r = 0; r < t; r++) n[r] = _.pluck(e, r);
                    return n;
                }, _.zip = S(_.unzip), _.object = function(e, t) {
                    for (var n = {}, r = 0, i = N(e); r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
                    return n;
                };
                var L = function(e) {
                    return function(t, n, r) {
                        n = E(n, r);
                        for (var i = N(t), o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e) if (n(t[o], o, t)) return o;
                        return -1;
                    };
                };
                _.findIndex = L(1), _.findLastIndex = L(-1), _.sortedIndex = function(e, t, n, r) {
                    for (var i = (n = E(n, r, 1))(t), o = 0, s = N(e); o < s; ) {
                        var a = Math.floor((o + s) / 2);
                        n(e[a]) < i ? o = a + 1 : s = a;
                    }
                    return o;
                };
                var U = function(e, t, n) {
                    return function(r, i, o) {
                        var s = 0, a = N(r);
                        if ("number" == typeof o) e > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1; else if (n && o && a) return o = n(r, i), 
                        r[o] === i ? o : -1;
                        if (i !== i) return (o = t(h.call(r, s, a), _.isNaN)) >= 0 ? o + s : -1;
                        for (o = e > 0 ? s : a - 1; o >= 0 && o < a; o += e) if (r[o] === i) return o;
                        return -1;
                    };
                };
                _.indexOf = U(1, _.findIndex, _.sortedIndex), _.lastIndexOf = U(-1, _.findLastIndex), 
                _.range = function(e, t, n) {
                    null == t && (t = e || 0, e = 0), n || (n = t < e ? -1 : 1);
                    for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++, 
                    e += n) i[o] = e;
                    return i;
                }, _.chunk = function(e, t) {
                    if (null == t || t < 1) return [];
                    for (var n = [], r = 0, i = e.length; r < i; ) n.push(h.call(e, r, r += t));
                    return n;
                };
                var F = function(e, t, n, r, i) {
                    if (!(r instanceof t)) return e.apply(n, i);
                    var o = T(e.prototype), s = e.apply(o, i);
                    return _.isObject(s) ? s : o;
                };
                _.bind = S(function(e, t, n) {
                    if (!_.isFunction(e)) throw new TypeError("Bind must be called on a function");
                    var r = S(function(i) {
                        return F(e, r, t, this, n.concat(i));
                    });
                    return r;
                }), (_.partial = S(function(e, t) {
                    var n = _.partial.placeholder;
                    return function r() {
                        for (var i = 0, o = t.length, s = Array(o), a = 0; a < o; a++) s[a] = t[a] === n ? arguments[i++] : t[a];
                        for (;i < arguments.length; ) s.push(arguments[i++]);
                        return F(e, r, this, this, s);
                    };
                })).placeholder = _, _.bindAll = S(function(e, t) {
                    var n = (t = k(t, !1, !1)).length;
                    if (n < 1) throw new Error("bindAll must be passed function names");
                    for (;n--; ) {
                        var r = t[n];
                        e[r] = _.bind(e[r], e);
                    }
                }), _.memoize = function(e, t) {
                    var n = function n(r) {
                        var i = n.cache, o = "" + (t ? t.apply(this, arguments) : r);
                        return A(i, o) || (i[o] = e.apply(this, arguments)), i[o];
                    };
                    return n.cache = {}, n;
                }, _.delay = S(function(e, t, n) {
                    return setTimeout(function() {
                        return e.apply(null, n);
                    }, t);
                }), _.defer = _.partial(_.delay, _, 1), _.throttle = function(e, t, n) {
                    var r, i, o, s, a = 0;
                    n || (n = {});
                    var u = function() {
                        a = !1 === n.leading ? 0 : _.now(), r = null, s = e.apply(i, o), r || (i = o = null);
                    }, c = function() {
                        var c = _.now();
                        a || !1 !== n.leading || (a = c);
                        var l = t - (c - a);
                        return i = this, o = arguments, l <= 0 || l > t ? (r && (clearTimeout(r), r = null), 
                        a = c, s = e.apply(i, o), r || (i = o = null)) : r || !1 === n.trailing || (r = setTimeout(u, l)), 
                        s;
                    };
                    return c.cancel = function() {
                        clearTimeout(r), a = 0, r = i = o = null;
                    }, c;
                }, _.debounce = function(e, t, n) {
                    var r, i, o = function(t, n) {
                        r = null, n && (i = e.apply(t, n));
                    }, s = S(function(s) {
                        if (r && clearTimeout(r), n) {
                            var a = !r;
                            r = setTimeout(o, t), a && (i = e.apply(this, s));
                        } else r = _.delay(o, t, this, s);
                        return i;
                    });
                    return s.cancel = function() {
                        clearTimeout(r), r = null;
                    }, s;
                }, _.wrap = function(e, t) {
                    return _.partial(t, e);
                }, _.negate = function(e) {
                    return function() {
                        return !e.apply(this, arguments);
                    };
                }, _.compose = function() {
                    var e = arguments, t = e.length - 1;
                    return function() {
                        for (var n = t, r = e[t].apply(this, arguments); n--; ) r = e[n].call(this, r);
                        return r;
                    };
                }, _.after = function(e, t) {
                    return function() {
                        if (--e < 1) return t.apply(this, arguments);
                    };
                }, _.before = function(e, t) {
                    var n;
                    return function() {
                        return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n;
                    };
                }, _.once = _.partial(_.before, 2), _.restArguments = S;
                var D = !{
                    toString: null
                }.propertyIsEnumerable("toString"), M = [ "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString" ], B = function(e, t) {
                    var n = M.length, r = e.constructor, i = _.isFunction(r) && r.prototype || c, o = "constructor";
                    for (A(e, o) && !_.contains(t, o) && t.push(o); n--; ) (o = M[n]) in e && e[o] !== i[o] && !_.contains(t, o) && t.push(o);
                };
                _.keys = function(e) {
                    if (!_.isObject(e)) return [];
                    if (y) return y(e);
                    var t = [];
                    for (var n in e) A(e, n) && t.push(n);
                    return D && B(e, t), t;
                }, _.allKeys = function(e) {
                    if (!_.isObject(e)) return [];
                    var t = [];
                    for (var n in e) t.push(n);
                    return D && B(e, t), t;
                }, _.values = function(e) {
                    for (var t = _.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
                    return r;
                }, _.mapObject = function(e, t, n) {
                    t = E(t, n);
                    for (var r = _.keys(e), i = r.length, o = {}, s = 0; s < i; s++) {
                        var a = r[s];
                        o[a] = t(e[a], a, e);
                    }
                    return o;
                }, _.pairs = function(e) {
                    for (var t = _.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = [ t[i], e[t[i]] ];
                    return r;
                }, _.invert = function(e) {
                    for (var t = {}, n = _.keys(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
                    return t;
                }, _.functions = _.methods = function(e) {
                    var t = [];
                    for (var n in e) _.isFunction(e[n]) && t.push(n);
                    return t.sort();
                };
                var q = function(e, t) {
                    return function(n) {
                        var r = arguments.length;
                        if (t && (n = Object(n)), r < 2 || null == n) return n;
                        for (var i = 1; i < r; i++) for (var o = arguments[i], s = e(o), a = s.length, u = 0; u < a; u++) {
                            var c = s[u];
                            t && void 0 !== n[c] || (n[c] = o[c]);
                        }
                        return n;
                    };
                };
                _.extend = q(_.allKeys), _.extendOwn = _.assign = q(_.keys), _.findKey = function(e, t, n) {
                    t = E(t, n);
                    for (var r, i = _.keys(e), o = 0, s = i.length; o < s; o++) if (r = i[o], t(e[r], r, e)) return r;
                };
                var V = function(e, t, n) {
                    return t in n;
                };
                _.pick = S(function(e, t) {
                    var n = {}, r = t[0];
                    if (null == e) return n;
                    _.isFunction(r) ? (t.length > 1 && (r = w(r, t[1])), t = _.allKeys(e)) : (r = V, 
                    t = k(t, !1, !1), e = Object(e));
                    for (var i = 0, o = t.length; i < o; i++) {
                        var s = t[i], a = e[s];
                        r(a, s, e) && (n[s] = a);
                    }
                    return n;
                }), _.omit = S(function(e, t) {
                    var n, r = t[0];
                    return _.isFunction(r) ? (r = _.negate(r), t.length > 1 && (n = t[1])) : (t = _.map(k(t, !1, !1), String), 
                    r = function(e, n) {
                        return !_.contains(t, n);
                    }), _.pick(e, r, n);
                }), _.defaults = q(_.allKeys, !0), _.create = function(e, t) {
                    var n = T(e);
                    return t && _.extendOwn(n, t), n;
                }, _.clone = function(e) {
                    return _.isObject(e) ? _.isArray(e) ? e.slice() : _.extend({}, e) : e;
                }, _.tap = function(e, t) {
                    return t(e), e;
                }, _.isMatch = function(e, t) {
                    var n = _.keys(t), r = n.length;
                    if (null == e) return !r;
                    for (var i = Object(e), o = 0; o < r; o++) {
                        var s = n[o];
                        if (t[s] !== i[s] || !(s in i)) return !1;
                    }
                    return !0;
                };
                var Y, W;
                Y = function(e, t, n, i) {
                    if (e === t) return 0 !== e || 1 / e == 1 / t;
                    if (null == e || null == t) return !1;
                    if (e !== e) return t !== t;
                    var o = void 0 === e ? "undefined" : r(e);
                    return ("function" === o || "object" === o || "object" == (void 0 === t ? "undefined" : r(t))) && W(e, t, n, i);
                }, W = function(e, t, n, i) {
                    e instanceof _ && (e = e._wrapped), t instanceof _ && (t = t._wrapped);
                    var o = d.call(e);
                    if (o !== d.call(t)) return !1;
                    switch (o) {
                      case "[object RegExp]":
                      case "[object String]":
                        return "" + e == "" + t;

                      case "[object Number]":
                        return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;

                      case "[object Date]":
                      case "[object Boolean]":
                        return +e == +t;

                      case "[object Symbol]":
                        return l.valueOf.call(e) === l.valueOf.call(t);
                    }
                    var s = "[object Array]" === o;
                    if (!s) {
                        if ("object" != (void 0 === e ? "undefined" : r(e)) || "object" != (void 0 === t ? "undefined" : r(t))) return !1;
                        var a = e.constructor, u = t.constructor;
                        if (a !== u && !(_.isFunction(a) && a instanceof a && _.isFunction(u) && u instanceof u) && "constructor" in e && "constructor" in t) return !1;
                    }
                    n = n || [], i = i || [];
                    for (var c = n.length; c--; ) if (n[c] === e) return i[c] === t;
                    if (n.push(e), i.push(t), s) {
                        if ((c = e.length) !== t.length) return !1;
                        for (;c--; ) if (!Y(e[c], t[c], n, i)) return !1;
                    } else {
                        var f, h = _.keys(e);
                        if (c = h.length, _.keys(t).length !== c) return !1;
                        for (;c--; ) if (f = h[c], !A(t, f) || !Y(e[f], t[f], n, i)) return !1;
                    }
                    return n.pop(), i.pop(), !0;
                }, _.isEqual = function(e, t) {
                    return Y(e, t);
                }, _.isEmpty = function(e) {
                    return null == e || (x(e) && (_.isArray(e) || _.isString(e) || _.isArguments(e)) ? 0 === e.length : 0 === _.keys(e).length);
                }, _.isElement = function(e) {
                    return !(!e || 1 !== e.nodeType);
                }, _.isArray = v || function(e) {
                    return "[object Array]" === d.call(e);
                }, _.isObject = function(e) {
                    var t = void 0 === e ? "undefined" : r(e);
                    return "function" === t || "object" === t && !!e;
                }, _.each([ "Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet" ], function(e) {
                    _["is" + e] = function(t) {
                        return d.call(t) === "[object " + e + "]";
                    };
                }), _.isArguments(arguments) || (_.isArguments = function(e) {
                    return A(e, "callee");
                });
                var z = s.document && s.document.childNodes;
                "function" != typeof /./ && "object" != ("undefined" == typeof Int8Array ? "undefined" : r(Int8Array)) && "function" != typeof z && (_.isFunction = function(e) {
                    return "function" == typeof e || !1;
                }), _.isFinite = function(e) {
                    return !_.isSymbol(e) && isFinite(e) && !isNaN(parseFloat(e));
                }, _.isNaN = function(e) {
                    return _.isNumber(e) && isNaN(e);
                }, _.isBoolean = function(e) {
                    return !0 === e || !1 === e || "[object Boolean]" === d.call(e);
                }, _.isNull = function(e) {
                    return null === e;
                }, _.isUndefined = function(e) {
                    return void 0 === e;
                }, _.has = function(e, t) {
                    if (!_.isArray(t)) return A(e, t);
                    for (var n = t.length, r = 0; r < n; r++) {
                        var i = t[r];
                        if (null == e || !p.call(e, i)) return !1;
                        e = e[i];
                    }
                    return !!n;
                }, _.noConflict = function() {
                    return s._ = a, this;
                }, _.identity = function(e) {
                    return e;
                }, _.constant = function(e) {
                    return function() {
                        return e;
                    };
                }, _.noop = function() {}, _.property = function(e) {
                    return _.isArray(e) ? function(t) {
                        return C(t, e);
                    } : O(e);
                }, _.propertyOf = function(e) {
                    return null == e ? function() {} : function(t) {
                        return _.isArray(t) ? C(e, t) : e[t];
                    };
                }, _.matcher = _.matches = function(e) {
                    return e = _.extendOwn({}, e), function(t) {
                        return _.isMatch(t, e);
                    };
                }, _.times = function(e, t, n) {
                    var r = Array(Math.max(0, e));
                    t = w(t, n, 1);
                    for (var i = 0; i < e; i++) r[i] = t(i);
                    return r;
                }, _.random = function(e, t) {
                    return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1));
                }, _.now = Date.now || function() {
                    return new Date().getTime();
                };
                var G = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                }, J = _.invert(G), H = function(e) {
                    var t = function(t) {
                        return e[t];
                    }, n = "(?:" + _.keys(e).join("|") + ")", r = RegExp(n), i = RegExp(n, "g");
                    return function(e) {
                        return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e;
                    };
                };
                _.escape = H(G), _.unescape = H(J), _.result = function(e, t, n) {
                    _.isArray(t) || (t = [ t ]);
                    var r = t.length;
                    if (!r) return _.isFunction(n) ? n.call(e) : n;
                    for (var i = 0; i < r; i++) {
                        var o = null == e ? void 0 : e[t[i]];
                        void 0 === o && (o = n, i = r), e = _.isFunction(o) ? o.call(e) : o;
                    }
                    return e;
                };
                var K = 0;
                _.uniqueId = function(e) {
                    var t = ++K + "";
                    return e ? e + t : t;
                }, _.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g
                };
                var Q = /(.)^/, $ = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                }, X = /\\|'|\r|\n|\u2028|\u2029/g, Z = function(e) {
                    return "\\" + $[e];
                };
                _.template = function(e, t, n) {
                    !t && n && (t = n), t = _.defaults({}, t, _.templateSettings);
                    var r = RegExp([ (t.escape || Q).source, (t.interpolate || Q).source, (t.evaluate || Q).source ].join("|") + "|$", "g"), i = 0, o = "__p+='";
                    e.replace(r, function(t, n, r, s, a) {
                        return o += e.slice(i, a).replace(X, Z), i = a + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), 
                        t;
                    }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                    var s;
                    try {
                        s = new Function(t.variable || "obj", "_", o);
                    } catch (e) {
                        throw e.source = o, e;
                    }
                    var a = function(e) {
                        return s.call(this, e, _);
                    };
                    return a.source = "function(" + (t.variable || "obj") + "){\n" + o + "}", a;
                }, _.chain = function(e) {
                    var t = _(e);
                    return t._chain = !0, t;
                };
                var ee = function(e, t) {
                    return e._chain ? _(t).chain() : t;
                };
                _.mixin = function(e) {
                    return _.each(_.functions(e), function(t) {
                        var n = _[t] = e[t];
                        _.prototype[t] = function() {
                            var e = [ this._wrapped ];
                            return f.apply(e, arguments), ee(this, n.apply(_, e));
                        };
                    }), _;
                }, _.mixin(_), _.each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(e) {
                    var t = u[e];
                    _.prototype[e] = function() {
                        var n = this._wrapped;
                        return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], 
                        ee(this, n);
                    };
                }), _.each([ "concat", "join", "slice" ], function(e) {
                    var t = u[e];
                    _.prototype[e] = function() {
                        return ee(this, t.apply(this._wrapped, arguments));
                    };
                }), _.prototype.value = function() {
                    return this._wrapped;
                }, _.prototype.valueOf = _.prototype.toJSON = _.prototype.value, _.prototype.toString = function() {
                    return String(this._wrapped);
                }, i = [], void 0 !== (o = function() {
                    return _;
                }.apply(t, i)) && (n.exports = o);
            }();
        }).call(t, n(5), n(31)(e));
    }, function(e, t, n) {
        var r = (n(0), n(41).Promise);
        r._continueWhile = function(e, t) {
            return e() ? t().then(function() {
                return r._continueWhile(e, t);
            }) : r.resolve();
        }, e.exports = r;
    }, function(e, t, n) {
        var r = n(0), i = n(56), o = n(0).extend, s = n(1), a = n(6), u = n(3), c = u.getSessionToken, l = u.ajax, f = function(e, t) {
            var n = new Date().getTime(), r = i(n + e);
            return t ? r + "," + n + ",master" : r + "," + n;
        }, h = function(e, t) {
            t ? e["X-LC-Sign"] = f(a.applicationKey) : e["X-LC-Key"] = a.applicationKey;
        }, d = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1], n = {
                "X-LC-Id": a.applicationId,
                "Content-Type": "application/json;charset=UTF-8"
            }, r = !1;
            return "boolean" == typeof e.useMasterKey ? r = e.useMasterKey : "boolean" == typeof a._config.useMasterKey && (r = a._config.useMasterKey), 
            r ? a.masterKey ? t ? n["X-LC-Sign"] = f(a.masterKey, !0) : n["X-LC-Key"] = a.masterKey + ",master" : (console.warn("masterKey is not set, fall back to use appKey"), 
            h(n, t)) : h(n, t), a.hookKey && (n["X-LC-Hook-Key"] = a.hookKey), null !== a._config.production && (n["X-LC-Prod"] = String(a._config.production)), 
            n["X-LC-UA"] = a._sharedConfig.userAgent, s.resolve().then(function() {
                var t = c(e);
                if (t) n["X-LC-Session"] = t; else if (!a._config.disableCurrentUser) return a.User.currentAsync().then(function(e) {
                    return e && e._sessionToken && (n["X-LC-Session"] = e._sessionToken), n;
                });
                return n;
            });
        }, p = function(e) {
            var t = e.service, n = void 0 === t ? "api" : t, r = e.version, i = void 0 === r ? "1.1" : r, o = e.path, s = a._config.serverURLs[n];
            if (!s) throw new Error("undefined server URL for " + n);
            return "/" !== s.charAt(s.length - 1) && (s += "/"), s += i, o && (s += o), s;
        }, v = function(e) {
            var t = e.service, n = e.version, i = e.method, o = e.path, s = e.query, u = e.data, c = e.authOptions, f = e.signKey, h = void 0 === f || f;
            if (!a.applicationId || !a.applicationKey && !a.masterKey) throw new Error("Not initialized");
            a._appRouter.refresh();
            var v = a._config.requestTimeout, y = p({
                service: t,
                path: o,
                version: n
            });
            return d(c, h).then(function(e) {
                return l({
                    method: i,
                    url: y,
                    query: s,
                    data: u,
                    headers: e,
                    timeout: v
                }).catch(function(e) {
                    var t = {
                        code: e.code || -1,
                        error: e.message || e.responseText
                    };
                    if (e.response && e.response.code) t = e.response; else if (e.responseText) try {
                        t = JSON.parse(e.responseText);
                    } catch (e) {}
                    t.rawMessage = t.rawMessage || t.error, a._sharedConfig.keepErrorRawMessage || (t.error += " [" + (e.statusCode || "N/A") + " " + i + " " + y + "]");
                    var n = new Error(t.error);
                    throw delete t.error, r.extend(n, t);
                });
            });
        };
        a.request = v, e.exports = {
            _request: function(e, t, n, r, i, s, a) {
                var u = "";
                if (e && (u += "/" + e), t && (u += "/" + t), n && (u += "/" + n), i && i._fetchWhenSave) throw new Error("_fetchWhenSave should be in the query");
                if (i && i._where) throw new Error("_where should be in the query");
                return r && "get" === r.toLowerCase() && (a = o({}, a, i), i = null), v({
                    method: r,
                    path: u,
                    query: a,
                    data: i,
                    authOptions: s
                });
            },
            request: v
        };
    }, function(e, t, n) {
        var i = "function" == typeof Symbol && "symbol" == r(Symbol.iterator) ? function(e) {
            return void 0 === e ? "undefined" : r(e);
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : r(e);
        }, o = n(0), s = n(8), a = n(7), u = a("leancloud:request"), c = a("leancloud:request:error"), l = n(1), f = 0, h = function(e) {
            return o.isArray(e) ? e : void 0 === e || null === e ? [] : [ e ];
        }, d = function() {};
        e.exports = {
            ajax: function(e) {
                var t = e.method, n = e.url, r = e.query, o = e.data, h = e.headers, d = void 0 === h ? {} : h, p = e.onprogress, v = e.timeout, y = f++;
                u("request(%d) %s %s %o %o %o", y, t, n, r, o, d);
                var m = {};
                if (r) for (var g in r) "object" === i(r[g]) ? m[g] = JSON.stringify(r[g]) : m[g] = r[g];
                return new l(function(e, i) {
                    var l = s(t, n).set(d).query(m).send(o);
                    p && l.on("progress", p), v && l.timeout(v), l.end(function(s, l) {
                        return s ? (l && (a.enabled("leancloud:request") || c("request(%d) %s %s %o %o %o", y, t, n, r, o, d), 
                        c("response(%d) %d %O %o", y, l.status, l.body || l.text, l.header), s.statusCode = l.status, 
                        s.responseText = l.text, s.response = l.body), i(s)) : (u("response(%d) %d %O %o", y, l.status, l.body || l.text, l.header), 
                        e(l.body));
                    });
                });
            },
            isNullOrUndefined: function(e) {
                return o.isNull(e) || o.isUndefined(e);
            },
            ensureArray: h,
            transformFetchOptions: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.keys, n = e.include, r = e.includeACL, i = {};
                return t && (i.keys = h(t).join(",")), n && (i.include = h(n).join(",")), r && (i.returnACL = r), 
                i;
            },
            getSessionToken: function(e) {
                return e.sessionToken ? e.sessionToken : e.user && "function" == typeof e.user.getSessionToken ? e.user.getSessionToken() : void 0;
            },
            tap: function(e) {
                return function(t) {
                    return e(t), t;
                };
            },
            inherits: function(e, t, n) {
                var r;
                return r = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                    e.apply(this, arguments);
                }, o.extend(r, e), d.prototype = e.prototype, r.prototype = new d(), t && o.extend(r.prototype, t), 
                n && o.extend(r, n), r.prototype.constructor = r, r.__super__ = e.prototype, r;
            },
            parseDate: function(e) {
                var t = new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$").exec(e);
                if (!t) return null;
                var n = t[1] || 0, r = (t[2] || 1) - 1, i = t[3] || 0, o = t[4] || 0, s = t[5] || 0, a = t[6] || 0, u = t[8] || 0;
                return new Date(Date.UTC(n, r, i, o, s, a, u));
            },
            setValue: function(e, t, n) {
                var r = t.split("."), i = r.pop(), o = e;
                return r.forEach(function(e) {
                    void 0 === o[e] && (o[e] = {}), o = o[e];
                }), o[i] = n, e;
            },
            findValue: function(e, t) {
                for (var n = t.split("."), r = n[0], i = n.pop(), o = e, s = 0; s < n.length; s++) if (void 0 === (o = o[n[s]])) return [ void 0, void 0, i ];
                return [ o[i], o, i, r ];
            },
            isPlainObject: function(e) {
                return o.isObject(e) && Object.getPrototypeOf(e) === Object.prototype;
            }
        };
    }, function(e, t, n) {
        function r(e, t) {
            var n = new Error(t);
            return n.code = e, n;
        }
        n(0).extend(r, {
            OTHER_CAUSE: -1,
            INTERNAL_SERVER_ERROR: 1,
            CONNECTION_FAILED: 100,
            OBJECT_NOT_FOUND: 101,
            INVALID_QUERY: 102,
            INVALID_CLASS_NAME: 103,
            MISSING_OBJECT_ID: 104,
            INVALID_KEY_NAME: 105,
            INVALID_POINTER: 106,
            INVALID_JSON: 107,
            COMMAND_UNAVAILABLE: 108,
            NOT_INITIALIZED: 109,
            INCORRECT_TYPE: 111,
            INVALID_CHANNEL_NAME: 112,
            PUSH_MISCONFIGURED: 115,
            OBJECT_TOO_LARGE: 116,
            OPERATION_FORBIDDEN: 119,
            CACHE_MISS: 120,
            INVALID_NESTED_KEY: 121,
            INVALID_FILE_NAME: 122,
            INVALID_ACL: 123,
            TIMEOUT: 124,
            INVALID_EMAIL_ADDRESS: 125,
            MISSING_CONTENT_TYPE: 126,
            MISSING_CONTENT_LENGTH: 127,
            INVALID_CONTENT_LENGTH: 128,
            FILE_TOO_LARGE: 129,
            FILE_SAVE_ERROR: 130,
            FILE_DELETE_ERROR: 153,
            DUPLICATE_VALUE: 137,
            INVALID_ROLE_NAME: 139,
            EXCEEDED_QUOTA: 140,
            SCRIPT_FAILED: 141,
            VALIDATION_ERROR: 142,
            INVALID_IMAGE_DATA: 150,
            UNSAVED_FILE_ERROR: 151,
            INVALID_PUSH_TIME_ERROR: 152,
            USERNAME_MISSING: 200,
            PASSWORD_MISSING: 201,
            USERNAME_TAKEN: 202,
            EMAIL_TAKEN: 203,
            EMAIL_MISSING: 204,
            EMAIL_NOT_FOUND: 205,
            SESSION_MISSING: 206,
            MUST_CREATE_USER_THROUGH_SIGNUP: 207,
            ACCOUNT_ALREADY_LINKED: 208,
            LINKED_ID_MISSING: 250,
            INVALID_LINKED_SESSION: 251,
            UNSUPPORTED_SERVICE: 252,
            X_DOMAIN_REQUEST: 602
        }), e.exports = r;
    }, function(e, t) {
        var n;
        n = function() {
            return this;
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this");
        } catch (e) {
            "object" == (void 0 === o ? "undefined" : r(o)) && (n = o);
        }
        e.exports = n;
    }, function(e, t, n) {
        (function(t) {
            var r = n(0), i = n(32), o = n(3), s = o.inherits, a = o.parseDate, u = t.AV || {};
            u._config = {
                serverURLs: {},
                useMasterKey: !1,
                production: null,
                realtime: null,
                requestTimeout: null
            }, u._sharedConfig = {
                userAgent: i,
                liveQueryRealtime: null
            }, u._getAVPath = function(e) {
                if (!u.applicationId) throw new Error("You need to call AV.initialize before using AV.");
                if (e || (e = ""), !r.isString(e)) throw new Error("Tried to get a localStorage path that wasn't a String.");
                return "/" === e[0] && (e = e.substring(1)), "AV/" + u.applicationId + "/" + e;
            };
            var c = function() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
            }, l = function() {
                return "" + c() + c() + "-" + c() + "-" + c() + "-" + c() + "-" + c() + c() + c();
            };
            u._installationId = null, u._getInstallationId = function() {
                if (u._installationId) return u.Promise.resolve(u._installationId);
                var e = u._getAVPath("installationId");
                return u.localStorage.getItemAsync(e).then(function(t) {
                    return u._installationId = t, u._installationId ? t : (u._installationId = t = l(), 
                    u.localStorage.setItemAsync(e, t).then(function() {
                        return t;
                    }));
                });
            }, u._subscriptionId = null, u._refreshSubscriptionId = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u._getAVPath("subscriptionId"), t = u._subscriptionId = l();
                return u.localStorage.setItemAsync(e, t).then(function() {
                    return t;
                });
            }, u._getSubscriptionId = function() {
                if (u._subscriptionId) return u.Promise.resolve(u._subscriptionId);
                var e = u._getAVPath("subscriptionId");
                return u.localStorage.getItemAsync(e).then(function(t) {
                    return u._subscriptionId = t, u._subscriptionId || (t = u._refreshSubscriptionId(e)), 
                    t;
                });
            }, u._parseDate = a, u._extend = function(e, t) {
                var n = s(this, e, t);
                return n.extend = this.extend, n;
            }, u._encode = function(e, t, n) {
                var i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                if (e instanceof u.Object) {
                    if (n) throw new Error("AV.Objects not allowed here");
                    return t && !r.include(t, e) && e._hasData ? e._toFullJSON(t.concat(e), i) : e._toPointer();
                }
                if (e instanceof u.ACL) return e.toJSON();
                if (r.isDate(e)) return i ? {
                    __type: "Date",
                    iso: e.toJSON()
                } : e.toJSON();
                if (e instanceof u.GeoPoint) return e.toJSON();
                if (r.isArray(e)) return r.map(e, function(e) {
                    return u._encode(e, t, n, i);
                });
                if (r.isRegExp(e)) return e.source;
                if (e instanceof u.Relation) return e.toJSON();
                if (e instanceof u.Op) return e.toJSON();
                if (e instanceof u.File) {
                    if (!e.url() && !e.id) throw new Error("Tried to save an object containing an unsaved file.");
                    return e._toFullJSON(t, i);
                }
                return r.isObject(e) ? r.mapObject(e, function(e, r) {
                    return u._encode(e, t, n, i);
                }) : e;
            }, u._decode = function(e, t) {
                if (!r.isObject(e) || r.isDate(e)) return e;
                if (r.isArray(e)) return r.map(e, function(e) {
                    return u._decode(e);
                });
                if (e instanceof u.Object) return e;
                if (e instanceof u.File) return e;
                if (e instanceof u.Op) return e;
                if (e instanceof u.GeoPoint) return e;
                if (e instanceof u.ACL) return e;
                if ("ACL" === t) return new u.ACL(e);
                if (e.__op) return u.Op._decode(e);
                var n;
                if ("Pointer" === e.__type) {
                    n = e.className;
                    var i = u.Object._create(n);
                    if (Object.keys(e).length > 3) {
                        var o = r.clone(e);
                        delete o.__type, delete o.className, i._finishFetch(o, !0);
                    } else i._finishFetch({
                        objectId: e.objectId
                    }, !1);
                    return i;
                }
                if ("Object" === e.__type) {
                    n = e.className;
                    var s = r.clone(e);
                    delete s.__type, delete s.className;
                    var a = u.Object._create(n);
                    return a._finishFetch(s, !0), a;
                }
                if ("Date" === e.__type) return u._parseDate(e.iso);
                if ("GeoPoint" === e.__type) return new u.GeoPoint({
                    latitude: e.latitude,
                    longitude: e.longitude
                });
                if ("Relation" === e.__type) {
                    if (!t) throw new Error("key missing decoding a Relation");
                    var c = new u.Relation(null, t);
                    return c.targetClassName = e.className, c;
                }
                if ("File" === e.__type) {
                    var l = new u.File(e.name), f = r.clone(e);
                    return delete f.__type, l._finishFetch(f), l;
                }
                return r.mapObject(e, u._decode);
            }, u.parseJSON = u._decode, u._encodeObjectOrArray = function(e) {
                var t = function(e) {
                    return e && e._toFullJSON && (e = e._toFullJSON([])), r.mapObject(e, function(e) {
                        return u._encode(e, []);
                    });
                };
                return r.isArray(e) ? e.map(function(e) {
                    return t(e);
                }) : t(e);
            }, u._arrayEach = r.each, u._traverse = function(e, t, n) {
                if (e instanceof u.Object) {
                    if (n = n || [], r.indexOf(n, e) >= 0) return;
                    return n.push(e), u._traverse(e.attributes, t, n), t(e);
                }
                return e instanceof u.Relation || e instanceof u.File ? t(e) : r.isArray(e) ? (r.each(e, function(r, i) {
                    var o = u._traverse(r, t, n);
                    o && (e[i] = o);
                }), t(e)) : r.isObject(e) ? (u._each(e, function(r, i) {
                    var o = u._traverse(r, t, n);
                    o && (e[i] = o);
                }), t(e)) : t(e);
            }, u._objectEach = u._each = function(e, t) {
                r.isObject(e) ? r.each(r.keys(e), function(n) {
                    t(e[n], n);
                }) : r.each(e, t);
            }, e.exports = u;
        }).call(t, n(5));
    }, function(e, n, i) {
        function s() {
            var e;
            try {
                e = n.storage.debug;
            } catch (e) {}
            return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), 
            e;
        }
        (n = e.exports = i(39)).log = function() {
            return "object" == ("undefined" == typeof console ? "undefined" : r(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
        }, n.formatArgs = function(e) {
            var t = this.useColors;
            if (e[0] = (t ? "%c" : "") + this.namespace + (t ? " %c" : " ") + e[0] + (t ? "%c " : " ") + "+" + n.humanize(this.diff), 
            t) {
                var r = "color: " + this.color;
                e.splice(1, 0, r, "color: inherit");
                var i = 0, o = 0;
                e[0].replace(/%[a-zA-Z%]/g, function(e) {
                    "%%" !== e && (i++, "%c" === e && (o = i));
                }), e.splice(o, 0, r);
            }
        }, n.save = function(e) {
            try {
                null == e ? n.storage.removeItem("debug") : n.storage.debug = e;
            } catch (e) {}
        }, n.load = s, n.useColors = function() {
            return !(void 0 === o || !o.process || "renderer" !== o.process.type) || (void 0 === t || !t.userAgent || !t.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || void 0 !== o && o.console && (o.console.firebug || o.console.exception && o.console.table) || void 0 !== t && t.userAgent && t.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || void 0 !== t && t.userAgent && t.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
        }, n.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
            try {
                return o.localStorage;
            } catch (e) {}
        }(), n.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ], 
        n.formatters.j = function(e) {
            try {
                return JSON.stringify(e);
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message;
            }
        }, n.enable(s());
    }, function(t, n, i) {
        function s() {}
        function a(e) {
            if (!g(e)) return e;
            var t = [];
            for (var n in e) u(t, n, e[n]);
            return t.join("&");
        }
        function u(e, t, n) {
            if (null != n) if (Array.isArray(n)) n.forEach(function(n) {
                u(e, t, n);
            }); else if (g(n)) for (var r in n) u(e, t + "[" + r + "]", n[r]); else e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n)); else null === n && e.push(encodeURIComponent(t));
        }
        function c(e) {
            for (var t, n, r = {}, i = e.split("&"), o = 0, s = i.length; o < s; ++o) -1 == (n = (t = i[o]).indexOf("=")) ? r[decodeURIComponent(t)] = "" : r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1));
            return r;
        }
        function l(e) {
            for (var t, n, r, i, o = e.split(/\r?\n/), s = {}, a = 0, u = o.length; a < u; ++a) -1 !== (t = (n = o[a]).indexOf(":")) && (r = n.slice(0, t).toLowerCase(), 
            i = E(n.slice(t + 1)), s[r] = i);
            return s;
        }
        function f(e) {
            return /[\/+]json($|[^-\w])/.test(e);
        }
        function h(e) {
            this.req = e, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, 
            this.statusText = this.req.xhr.statusText;
            var t = this.xhr.status;
            1223 === t && (t = 204), this._setStatusProperties(t), this.header = this.headers = l(this.xhr.getAllResponseHeaders()), 
            this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), 
            null === this.text && e._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null;
        }
        function d(e, t) {
            var n = this;
            this._query = this._query || [], this.method = e, this.url = t, this.header = {}, 
            this._header = {}, this.on("end", function() {
                var e = null, t = null;
                try {
                    t = new h(n);
                } catch (t) {
                    return e = new Error("Parser is unable to parse the response"), e.parse = !0, e.original = t, 
                    n.xhr ? (e.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response, 
                    e.status = n.xhr.status ? n.xhr.status : null, e.statusCode = e.status) : (e.rawResponse = null, 
                    e.status = null), n.callback(e);
                }
                n.emit("response", t);
                var r;
                try {
                    n._isResponseOK(t) || (r = new Error(t.statusText || "Unsuccessful HTTP response"));
                } catch (e) {
                    r = e;
                }
                r ? (r.original = e, r.response = t, r.status = t.status, n.callback(r, t)) : n.callback(null, t);
            });
        }
        function p(e, t, n) {
            var r = w("DELETE", e);
            return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), 
            r;
        }
        var v;
        void 0 !== o ? v = o : "undefined" != typeof self ? v = self : (console.warn("Using browser-only version of superagent in non-browser environment"), 
        v = this);
        var y = i(34), m = i(35), g = i(18), _ = i(36), b = i(38), w = n = t.exports = function(e, t) {
            return "function" == typeof t ? new n.Request("GET", e).end(t) : 1 == arguments.length ? new n.Request("GET", e) : new n.Request(e, t);
        };
        n.Request = d, w.getXHR = function() {
            if (!(!v.XMLHttpRequest || v.location && "file:" == v.location.protocol && v.ActiveXObject)) return new e();
            try {
                return new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            } catch (e) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            } catch (e) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {}
            throw Error("Browser-only version of superagent could not find XHR");
        };
        var E = "".trim ? function(e) {
            return e.trim();
        } : function(e) {
            return e.replace(/(^\s*|\s*$)/g, "");
        };
        w.serializeObject = a, w.parseString = c, w.types = {
            html: "text/html",
            json: "application/json",
            xml: "text/xml",
            urlencoded: "application/x-www-form-urlencoded",
            form: "application/x-www-form-urlencoded",
            "form-data": "application/x-www-form-urlencoded"
        }, w.serialize = {
            "application/x-www-form-urlencoded": a,
            "application/json": JSON.stringify
        }, w.parse = {
            "application/x-www-form-urlencoded": c,
            "application/json": JSON.parse
        }, _(h.prototype), h.prototype._parseBody = function(e) {
            var t = w.parse[this.type];
            return this.req._parser ? this.req._parser(this, e) : (!t && f(this.type) && (t = w.parse["application/json"]), 
            t && e && (e.length || e instanceof Object) ? t(e) : null);
        }, h.prototype.toError = function() {
            var e = this.req, t = e.method, n = e.url, r = "cannot " + t + " " + n + " (" + this.status + ")", i = new Error(r);
            return i.status = this.status, i.method = t, i.url = n, i;
        }, w.Response = h, y(d.prototype), m(d.prototype), d.prototype.type = function(e) {
            return this.set("Content-Type", w.types[e] || e), this;
        }, d.prototype.accept = function(e) {
            return this.set("Accept", w.types[e] || e), this;
        }, d.prototype.auth = function(e, t, n) {
            1 === arguments.length && (t = ""), "object" == (void 0 === t ? "undefined" : r(t)) && null !== t && (n = t, 
            t = ""), n || (n = {
                type: "function" == typeof btoa ? "basic" : "auto"
            });
            return this._auth(e, t, n, function(e) {
                if ("function" == typeof btoa) return btoa(e);
                throw new Error("Cannot use basic auth, btoa is not a function");
            });
        }, d.prototype.query = function(e) {
            return "string" != typeof e && (e = a(e)), e && this._query.push(e), this;
        }, d.prototype.attach = function(e, t, n) {
            if (t) {
                if (this._data) throw Error("superagent can't mix .send() and .attach()");
                this._getFormData().append(e, t, n || t.name);
            }
            return this;
        }, d.prototype._getFormData = function() {
            return this._formData || (this._formData = new v.FormData()), this._formData;
        }, d.prototype.callback = function(e, t) {
            if (this._shouldRetry(e, t)) return this._retry();
            var n = this._callback;
            this.clearTimeout(), e && (this._maxRetries && (e.retries = this._retries - 1), 
            this.emit("error", e)), n(e, t);
        }, d.prototype.crossDomainError = function() {
            var e = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
            e.crossDomain = !0, e.status = this.status, e.method = this.method, e.url = this.url, 
            this.callback(e);
        }, d.prototype.buffer = d.prototype.ca = d.prototype.agent = function() {
            return console.warn("This is not supported in browser version of superagent"), this;
        }, d.prototype.pipe = d.prototype.write = function() {
            throw Error("Streaming is not supported in browser version of superagent");
        }, d.prototype._isHost = function(e) {
            return e && "object" == (void 0 === e ? "undefined" : r(e)) && !Array.isArray(e) && "[object Object]" !== Object.prototype.toString.call(e);
        }, d.prototype.end = function(e) {
            return this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), 
            this._endCalled = !0, this._callback = e || s, this._finalizeQueryString(), this._end();
        }, d.prototype._end = function() {
            var e = this, t = this.xhr = w.getXHR(), n = this._formData || this._data;
            this._setTimeouts(), t.onreadystatechange = function() {
                var n = t.readyState;
                if (n >= 2 && e._responseTimeoutTimer && clearTimeout(e._responseTimeoutTimer), 
                4 == n) {
                    var r;
                    try {
                        r = t.status;
                    } catch (e) {
                        r = 0;
                    }
                    if (!r) {
                        if (e.timedout || e._aborted) return;
                        return e.crossDomainError();
                    }
                    e.emit("end");
                }
            };
            var r = function(t, n) {
                n.total > 0 && (n.percent = n.loaded / n.total * 100), n.direction = t, e.emit("progress", n);
            };
            if (this.hasListeners("progress")) try {
                t.onprogress = r.bind(null, "download"), t.upload && (t.upload.onprogress = r.bind(null, "upload"));
            } catch (e) {}
            try {
                this.username && this.password ? t.open(this.method, this.url, !0, this.username, this.password) : t.open(this.method, this.url, !0);
            } catch (e) {
                return this.callback(e);
            }
            if (this._withCredentials && (t.withCredentials = !0), !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof n && !this._isHost(n)) {
                var i = this._header["content-type"], o = this._serializer || w.serialize[i ? i.split(";")[0] : ""];
                !o && f(i) && (o = w.serialize["application/json"]), o && (n = o(n));
            }
            for (var s in this.header) null != this.header[s] && this.header.hasOwnProperty(s) && t.setRequestHeader(s, this.header[s]);
            return this._responseType && (t.responseType = this._responseType), this.emit("request", this), 
            t.send(void 0 !== n ? n : null), this;
        }, w.agent = function() {
            return new b();
        }, [ "GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE" ].forEach(function(e) {
            b.prototype[e.toLowerCase()] = function(t, n) {
                var r = new w.Request(e, t);
                return this._setDefaults(r), n && r.end(n), r;
            };
        }), b.prototype.del = b.prototype.delete, w.get = function(e, t, n) {
            var r = w("GET", e);
            return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), 
            r;
        }, w.head = function(e, t, n) {
            var r = w("HEAD", e);
            return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), 
            r;
        }, w.options = function(e, t, n) {
            var r = w("OPTIONS", e);
            return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), 
            r;
        }, w.del = p, w.delete = p, w.patch = function(e, t, n) {
            var r = w("PATCH", e);
            return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), 
            r;
        }, w.post = function(e, t, n) {
            var r = w("POST", e);
            return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), 
            r;
        }, w.put = function(e, t, n) {
            var r = w("PUT", e);
            return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), 
            r;
        };
    }, function(e, t, n) {
        var i = n(10), s = n(28), a = n(29), u = i.LISTENERS, c = i.CAPTURE, l = i.BUBBLE, f = i.ATTRIBUTE, h = i.newNode, d = s.defineCustomEventTarget, p = a.createEventWrapper, v = a.STOP_IMMEDIATE_PROPAGATION_FLAG, y = void 0 !== o && void 0 !== o.EventTarget, m = e.exports = function e() {
            if (!(this instanceof e)) {
                if (1 === arguments.length && Array.isArray(arguments[0])) return d(e, arguments[0]);
                if (arguments.length > 0) {
                    for (var t = Array(arguments.length), n = 0; n < arguments.length; ++n) t[n] = arguments[n];
                    return d(e, t);
                }
                throw new TypeError("Cannot call a class as a function");
            }
            Object.defineProperty(this, u, {
                value: Object.create(null)
            });
        };
        m.prototype = Object.create((y ? o.EventTarget : Object).prototype, {
            constructor: {
                value: m,
                writable: !0,
                configurable: !0
            },
            addEventListener: {
                value: function(e, t, n) {
                    if (null == t) return !1;
                    if ("function" != typeof t && "object" != (void 0 === t ? "undefined" : r(t))) throw new TypeError('"listener" is not an object.');
                    var i = n ? c : l, o = this[u][e];
                    if (null == o) return this[u][e] = h(t, i), !0;
                    for (var s = null; null != o; ) {
                        if (o.listener === t && o.kind === i) return !1;
                        s = o, o = o.next;
                    }
                    return s.next = h(t, i), !0;
                },
                configurable: !0,
                writable: !0
            },
            removeEventListener: {
                value: function(e, t, n) {
                    if (null == t) return !1;
                    for (var r = n ? c : l, i = null, o = this[u][e]; null != o; ) {
                        if (o.listener === t && o.kind === r) return null == i ? this[u][e] = o.next : i.next = o.next, 
                        !0;
                        i = o, o = o.next;
                    }
                    return !1;
                },
                configurable: !0,
                writable: !0
            },
            dispatchEvent: {
                value: function(e) {
                    var t = this[u][e.type];
                    if (null == t) return !0;
                    for (var n = p(e, this); null != t && ("function" == typeof t.listener ? t.listener.call(this, n) : t.kind !== f && "function" == typeof t.listener.handleEvent && t.listener.handleEvent(n), 
                    !n[v]); ) t = t.next;
                    return !n.defaultPrevented;
                },
                configurable: !0,
                writable: !0
            }
        });
    }, function(e, t, n) {
        var r = t.createUniqueKey = "undefined" != typeof Symbol ? Symbol : function(e) {
            return "[[" + e + "_" + Math.random().toFixed(8).slice(2) + "]]";
        };
        t.LISTENERS = r("listeners"), t.CAPTURE = 1, t.BUBBLE = 2, t.ATTRIBUTE = 3, t.newNode = function(e, t) {
            return {
                listener: e,
                kind: t,
                next: null
            };
        };
    }, function(e, t, n) {
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var o = "function" == typeof Symbol && "symbol" == r(Symbol.iterator) ? function(e) {
            return void 0 === e ? "undefined" : r(e);
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : r(e);
        }, s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), a = function() {
            function e() {
                i(this, e), this._entries = [];
            }
            return s(e, [ {
                key: "append",
                value: function(e, t) {
                    if ("string" != typeof e) throw new TypeError("FormData name must be a string");
                    if ("string" != typeof t && ("object" !== (void 0 === t ? "undefined" : o(t)) || "string" != typeof t.uri)) throw new TypeError("FormData value must be a string or { uri: tempFilePath }");
                    this._entries.push([ e, t ]);
                }
            }, {
                key: "set",
                value: function(e, t) {
                    var n = this.get(e);
                    n ? n[1] = t : this.append(e, t);
                }
            }, {
                key: "delete",
                value: function(e) {
                    this._entries = this._entries.filter(function(t) {
                        return t[0] !== e;
                    });
                }
            }, {
                key: "entries",
                value: function() {
                    return this._entries;
                }
            }, {
                key: "get",
                value: function(e) {
                    return this._entries.find(function(t) {
                        return t[0] === e;
                    });
                }
            }, {
                key: "getAll",
                value: function(e) {
                    return this._entries.filter(function(t) {
                        return t[0] === e;
                    });
                }
            }, {
                key: "has",
                value: function(e) {
                    return this._entries.some(function(t) {
                        return t[0] === e;
                    });
                }
            }, {
                key: "keys",
                value: function() {
                    return this._entries.map(function(e) {
                        return e[0];
                    });
                }
            }, {
                key: "values",
                value: function() {
                    return this._entries.map(function(e) {
                        return e[1];
                    });
                }
            } ]), e;
        }();
        e.exports = a;
    }, function(e, t, n) {
        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), o = function() {
            function e() {
                r(this, e);
            }
            return i(e, [ {
                key: "getItem",
                value: function(e) {
                    return wx.getStorageSync(e);
                }
            }, {
                key: "setItem",
                value: function(e, t) {
                    return wx.setStorageSync(e, t);
                }
            }, {
                key: "removeItem",
                value: function(e) {
                    return this.setItem(e, "");
                }
            }, {
                key: "clear",
                value: function() {
                    return wx.clearStorageSync();
                }
            } ]), e;
        }();
        e.exports = new o();
    }, function(e, t, n) {
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != (void 0 === t ? "undefined" : r(t)) && "function" != typeof t ? e : t;
        }
        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : r(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        function c(e) {
            this.status = e.statusCode, this.statusText = e.statusCode, e.header && (this._responseHeaders = Object.keys(e.header).reduce(function(t, n) {
                return t[n.toLowerCase()] = e.header[n], t;
            }, {}));
            var t = e.data;
            "string" != typeof t && (t = JSON.stringify(t)), this.responseText = this.response = t, 
            this.readyState = v, this.dispatchEvent({
                type: "readystatechange"
            });
        }
        var l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), f = n(14), h = n(9), d = n(11), p = 0, v = 4, y = [ "abort", "error", "load", "loadstart", "progress", "timeout", "loadend", "readystatechange" ], m = [ "abort", "error", "load", "loadstart", "progress", "timeout", "loadend" ], g = function(e) {
            function t() {
                return s(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            }
            return u(t, h(m)), t;
        }(), _ = function(e) {
            function t() {
                s(this, t);
                var e = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.readyState = p, e._headers = {}, e.upload = new g(), e;
            }
            return u(t, h(y)), l(t, [ {
                key: "abort",
                value: function() {
                    if (!this._request || this._request.abort) return this.status = 0, this.readyState = v, 
                    this._request.abort();
                    throw new Error("该版本基础库不支持 abort request");
                }
            }, {
                key: "getAllResponseHeaders",
                value: function() {
                    var e = this;
                    return this._responseHeaders ? Object.keys(this._responseHeaders).map(function(t) {
                        return t + ": " + e._responseHeaders[t];
                    }).join("\r\n") : "";
                }
            }, {
                key: "getResponseHeader",
                value: function(e) {
                    var t = e.toLowerCase();
                    return this._responseHeaders && this._responseHeaders[t] ? this._responseHeaders[t] : null;
                }
            }, {
                key: "overrideMimeType",
                value: function() {
                    throw new Error("not supported in weapp");
                }
            }, {
                key: "open",
                value: function(e, t) {
                    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    if (this.readyState !== p) throw new Error("request is already opened");
                    if (!n) throw new Error("sync request is not supported");
                    this._method = e, this._url = t, this.readyState = 1, this.dispatchEvent({
                        type: "readystatechange"
                    });
                }
            }, {
                key: "setRequestHeader",
                value: function(e, t) {
                    if (1 !== this.readyState) throw new Error("request is not opened");
                    this._headers[e.toLowerCase()] = t;
                }
            }, {
                key: "send",
                value: function(e) {
                    var t = this;
                    if (1 !== this.readyState) throw new Error("request is not opened");
                    if (e instanceof d) {
                        var n = e.entries(), r = n.filter(function(e) {
                            return "string" != typeof e[1];
                        });
                        if (0 === r.length) throw new Error("Must specify a Blob field in FormData");
                        r.length > 1 && console.warn("Only the first Blob will be send in Weapp");
                        var s = n.filter(function(e) {
                            return "string" == typeof e[1];
                        }).reduce(function(e, t) {
                            return f(e, o({}, t[0], t[1]));
                        }, {});
                        this._request = wx.uploadFile({
                            url: this._url,
                            name: r[0][0],
                            filePath: r[0][1].uri,
                            formData: s,
                            header: this._headers,
                            success: c.bind(this),
                            fail: function(e) {
                                t.status = 0, t.readyState = v, t.dispatchEvent({
                                    type: "readystatechange"
                                }), t.dispatchEvent({
                                    type: "error"
                                });
                            }
                        }), this._request && this._request.onProgressUpdate && this._request.onProgressUpdate(function(e) {
                            var n = e.totalBytesSent, r = e.totalBytesExpectedToSend;
                            t.upload.dispatchEvent({
                                type: "progress",
                                loaded: n,
                                total: r
                            });
                        });
                    } else this._request = i.invokeHttpRequest("leancloudAPI1", this._url, e || "", this._method.toUpperCase(), this._headers, c.bind(this), function(e) {
                        t.status = 0, t.readyState = v, t.dispatchEvent({
                            type: "readystatechange"
                        }), t.dispatchEvent({
                            type: "error"
                        });
                    });
                }
            } ]), t;
        }();
        f(_, {
            UNSENT: p,
            OPENED: 1,
            HEADERS_RECEIVED: 2,
            LOADING: 3,
            DONE: v
        }), e.exports = _;
    }, function(e, t, n) {
        function r(e) {
            if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e);
        }
        var i = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
        e.exports = function() {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e];
                }).join("")) return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                    r[e] = e;
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
            } catch (e) {
                return !1;
            }
        }() ? Object.assign : function(e, t) {
            for (var n, a, u = r(e), c = 1; c < arguments.length; c++) {
                n = Object(arguments[c]);
                for (var l in n) o.call(n, l) && (u[l] = n[l]);
                if (i) {
                    a = i(n);
                    for (var f = 0; f < a.length; f++) s.call(n, a[f]) && (u[a[f]] = n[a[f]]);
                }
            }
            return u;
        };
    }, function(e, t, n) {
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != (void 0 === t ? "undefined" : r(t)) && "function" != typeof t ? e : t;
        }
        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : r(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        function a(e) {
            "" !== e.message && v && (v._readyState = d, v.dispatchEvent({
                type: "error",
                message: e.errMsg
            }));
        }
        var u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), c = n(14), l = n(9), f = 0, h = 1, d = 3, p = [ "open", "error", "message", "close" ], v = void 0, y = function(e) {
            function t(e, n) {
                if (i(this, t), !e) throw new TypeError("Failed to construct 'WebSocket': url required");
                if (n && (!wx.canIUse || !wx.canIUse("connectSocket.object.protocols"))) throw new Error("subprotocal not supported in weapp");
                var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return r._url = e, r._protocal = n || "", r._readyState = f, v && v.dispatchEvent({
                    type: "close"
                }), v = r, wx.onSocketOpen(function(e) {
                    v && (v._readyState = h, v.dispatchEvent({
                        type: "open"
                    }));
                }), wx.onSocketError(a), wx.onSocketMessage(function(e) {
                    if (v) {
                        var t = e.data, n = e.origin, r = e.ports, i = e.source;
                        v.dispatchEvent({
                            data: t,
                            origin: n,
                            ports: r,
                            source: i,
                            type: "message"
                        });
                    }
                }), wx.onSocketClose(function(e) {
                    if (v) {
                        v._readyState = d;
                        var t = e.code, n = e.reason, r = e.wasClean;
                        v.dispatchEvent({
                            code: t,
                            reason: n,
                            wasClean: r,
                            type: "close"
                        }), v = null;
                    }
                }), wx.connectSocket({
                    url: e,
                    protocals: r._protocal,
                    fail: function(e) {
                        return setTimeout(function() {
                            return a(e);
                        }, 0);
                    }
                }), r;
            }
            return s(t, l(p)), u(t, [ {
                key: "close",
                value: function() {
                    this.readyState !== d && (this.readyState === f && console.warn("close WebSocket which is connecting might not work"), 
                    wx.closeSocket());
                }
            }, {
                key: "send",
                value: function(e) {
                    if (this.readyState !== h) throw new Error("INVALID_STATE_ERR");
                    if (!("string" == typeof e || e instanceof ArrayBuffer)) throw new TypeError("only String/ArrayBuffer supported");
                    wx.sendSocketMessage({
                        data: e
                    });
                }
            }, {
                key: "url",
                get: function() {
                    return this._url;
                }
            }, {
                key: "protocal",
                get: function() {
                    return this._protocal;
                }
            }, {
                key: "readyState",
                get: function() {
                    return this._readyState;
                }
            } ]), t;
        }();
        c(y, {
            CONNECTING: f,
            OPEN: h,
            CLOSING: 2,
            CLOSED: d
        }), e.exports = y;
    }, function(e, t, n) {
        e.exports = {};
    }, function(e, t, n) {
        e.exports = "3.7.3";
    }, function(e, t, n) {
        e.exports = function(e) {
            return null !== e && "object" == (void 0 === e ? "undefined" : r(e));
        };
    }, function(e, t, n) {
        var r = n(0), i = n(1), o = n(43), s = [ "getItem", "setItem", "removeItem", "clear" ];
        o.async ? r(s).each(function(e) {
            "function" != typeof o[e] && (o[e] = function() {
                var t = new Error("Synchronous API [" + e + "] is not available in this runtime.");
                throw t.code = "SYNC_API_NOT_AVAILABLE", t;
            });
        }) : r(s).each(function(e) {
            "function" == typeof o[e] && (o[e + "Async"] = function() {
                return i.resolve(o[e].apply(o, arguments));
            });
        }), e.exports = o;
    }, function(e, t, n) {
        var r = n(19), i = n(6), o = t.removeAsync = r.removeItemAsync.bind(r), s = function(e, t) {
            try {
                e = JSON.parse(e);
            } catch (e) {
                return null;
            }
            return e ? e.expiredAt && e.expiredAt < Date.now() ? o(t).then(function() {
                return null;
            }) : e.value : null;
        };
        t.getAsync = function(e) {
            return e = "AV/" + i.applicationId + "/" + e, r.getItemAsync(e).then(function(t) {
                return s(t, e);
            });
        }, t.setAsync = function(e, t, n) {
            var o = {
                value: t
            };
            return "number" == typeof n && (o.expiredAt = Date.now() + n), r.setItemAsync("AV/" + i.applicationId + "/" + e, JSON.stringify(o));
        };
    }, function(e, t) {
        var n = {
            utf8: {
                stringToBytes: function(e) {
                    return n.bin.stringToBytes(unescape(encodeURIComponent(e)));
                },
                bytesToString: function(e) {
                    return decodeURIComponent(escape(n.bin.bytesToString(e)));
                }
            },
            bin: {
                stringToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                    return t;
                },
                bytesToString: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                    return t.join("");
                }
            }
        };
        e.exports = n;
    }, function(e, t, n) {
        e.exports = n(74);
    }, function(e, t, n) {
        var r = n(24), i = n(22).Realtime, o = n(75).LiveQueryPlugin;
        i.__preRegisteredPlugins = [ o ], r._sharedConfig.liveQueryRealtime = i, e.exports = r;
    }, function(e, t, n) {
        n(25);
        var r = n(0), i = n(6);
        i._ = r, i.version = n(17), i.Promise = n(1), i.localStorage = n(19), i.Cache = n(20), 
        i.Error = n(4), n(45), n(47)(i), n(48)(i), n(49)(i), n(50)(i), n(51)(i), n(52)(i), 
        n(60)(i), n(61)(i), n(62)(i), n(63)(i), n(64)(i), n(66)(i), n(67)(i), n(68)(i), 
        n(69)(i), n(70)(i), n(71)(i), i.Conversation = n(72), n(73), e.exports = i;
    }, function(e, t, n) {
        n(26);
    }, function(r, i, s) {
        var a = s(27).polyfill;
        try {
            a();
        } catch (r) {}
        try {
            a(GameGlobal);
        } catch (r) {}
        try {
            a(o = o || {});
        } catch (r) {}
        try {
            n = n || s(12);
        } catch (r) {}
        try {
            e = e || s(13);
        } catch (r) {}
        try {
            FormData = FormData || s(11);
        } catch (r) {}
        try {
            WebSocket = WebSocket || s(15);
        } catch (r) {}
        try {
            t = t || s(16);
        } catch (r) {}
    }, function(e, t, n) {
        (function(t) {
            var i = "function" == typeof Symbol && "symbol" == r(Symbol.iterator) ? function(e) {
                return void 0 === e ? "undefined" : r(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : r(e);
            }, s = n(12), a = n(13), u = n(11), c = n(15), l = n(30), f = n(16);
            e.exports = {
                polyfill: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t || o;
                    if ("object" !== (void 0 === e ? "undefined" : i(e))) throw new Error("polyfill target is not an Object");
                    var n = {
                        localStorage: s,
                        XMLHttpRequest: a,
                        FormData: u,
                        WebSocket: c,
                        Object: Object,
                        navigator: f
                    };
                    for (var r in n) e[r] || (e[r] = n[r]);
                    l.polyfill(e), e.navigator.product = "ReactNative";
                },
                localStorage: s,
                XMLHttpRequest: a,
                FormData: u,
                WebSocket: c
            };
        }).call(t, n(5));
    }, function(e, t, n) {
        function i(e, t) {
            for (var n = e[a][t]; null != n; ) {
                if (n.kind === u) return n.listener;
                n = n.next;
            }
            return null;
        }
        function o(e, t, n) {
            "function" != typeof n && "object" != (void 0 === n ? "undefined" : r(n)) && (n = null);
            for (var i = null, o = e[a][t]; null != o; ) o.kind === u ? null == i ? e[a][t] = o.next : i.next = o.next : i = o, 
            o = o.next;
            null != n && (null == i ? e[a][t] = c(n, u) : i.next = c(n, u));
        }
        var s = n(10), a = s.LISTENERS, u = s.ATTRIBUTE, c = s.newNode;
        t.defineCustomEventTarget = function(e, t) {
            function n() {
                e.call(this);
            }
            var r = {
                constructor: {
                    value: n,
                    configurable: !0,
                    writable: !0
                }
            };
            return t.forEach(function(e) {
                r["on" + e] = {
                    get: function() {
                        return i(this, e);
                    },
                    set: function(t) {
                        o(this, e, t);
                    },
                    configurable: !0,
                    enumerable: !0
                };
            }), n.prototype = Object.create(e.prototype, r), n;
        };
    }, function(e, t, n) {
        var r = n(10).createUniqueKey, i = r("stop_immediate_propagation_flag"), o = r("canceled_flag"), s = r("original_event"), a = Object.freeze({
            stopPropagation: Object.freeze({
                value: function() {
                    var e = this[s];
                    "function" == typeof e.stopPropagation && e.stopPropagation();
                },
                writable: !0,
                configurable: !0
            }),
            stopImmediatePropagation: Object.freeze({
                value: function() {
                    this[i] = !0;
                    var e = this[s];
                    "function" == typeof e.stopImmediatePropagation && e.stopImmediatePropagation();
                },
                writable: !0,
                configurable: !0
            }),
            preventDefault: Object.freeze({
                value: function() {
                    !0 === this.cancelable && (this[o] = !0);
                    var e = this[s];
                    "function" == typeof e.preventDefault && e.preventDefault();
                },
                writable: !0,
                configurable: !0
            }),
            defaultPrevented: Object.freeze({
                get: function() {
                    return this[o];
                },
                enumerable: !0,
                configurable: !0
            })
        });
        t.STOP_IMMEDIATE_PROPAGATION_FLAG = i, t.createEventWrapper = function(e, t) {
            var n = "number" == typeof e.timeStamp ? e.timeStamp : Date.now(), r = {
                type: {
                    value: e.type,
                    enumerable: !0
                },
                target: {
                    value: t,
                    enumerable: !0
                },
                currentTarget: {
                    value: t,
                    enumerable: !0
                },
                eventPhase: {
                    value: 2,
                    enumerable: !0
                },
                bubbles: {
                    value: Boolean(e.bubbles),
                    enumerable: !0
                },
                cancelable: {
                    value: Boolean(e.cancelable),
                    enumerable: !0
                },
                timeStamp: {
                    value: n,
                    enumerable: !0
                },
                isTrusted: {
                    value: !1,
                    enumerable: !0
                }
            };
            return r[i] = {
                value: !1,
                writable: !0
            }, r[o] = {
                value: !1,
                writable: !0
            }, r[s] = {
                value: e
            }, void 0 !== e.detail && (r.detail = {
                value: e.detail,
                enumerable: !0
            }), Object.create(Object.create(e, a), r);
        };
    }, function(e, t, n) {
        var r = n(9);
        t.polyfill = function(e) {
            if (wx.onNetworkStatusChange && !e.__onlineOfflinePolyfilled) {
                e.__onlineOfflinePolyfilled = !0;
                var t = new r();
                e.dispatchEvent || (e.addEventListener = t.addEventListener.bind(t), e.removeEventListener = t.removeEventListener.bind(t), 
                e.dispatchEvent = t.dispatchEvent.bind(t), "function" != typeof postMessage || e.importScripts || (e.importScripts = function() {
                    throw new Error("mocked");
                })), wx.getNetworkType({
                    success: function(t) {
                        var n = t.networkType;
                        e.onLine = "none" !== n, wx.onNetworkStatusChange(function(t) {
                            var n = t.isConnected;
                            e.onLine !== n && (e.onLine = n, e.dispatchEvent({
                                type: n ? "online" : "offline"
                            }));
                        });
                    }
                });
            }
        };
    }, function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), 
            Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l;
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i;
                }
            }), e.webpackPolyfill = 1), e;
        };
    }, function(e, t, n) {
        var r = n(17), i = [ "Weapp" ].concat(n(33));
        e.exports = "LeanCloud-JS-SDK/" + r + " (" + i.join("; ") + ")";
    }, function(e, t, n) {
        e.exports = [];
    }, function(e, t, n) {
        function r(e) {
            if (e) return i(e);
        }
        function i(e) {
            for (var t in r.prototype) e[t] = r.prototype[t];
            return e;
        }
        e.exports = r, r.prototype.on = r.prototype.addEventListener = function(e, t) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), 
            this;
        }, r.prototype.once = function(e, t) {
            function n() {
                this.off(e, n), t.apply(this, arguments);
            }
            return n.fn = t, this.on(e, n), this;
        }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, t) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, 
            this;
            var n = this._callbacks["$" + e];
            if (!n) return this;
            if (1 == arguments.length) return delete this._callbacks["$" + e], this;
            for (var r, i = 0; i < n.length; i++) if ((r = n[i]) === t || r.fn === t) {
                n.splice(i, 1);
                break;
            }
            return this;
        }, r.prototype.emit = function(e) {
            this._callbacks = this._callbacks || {};
            var t = [].slice.call(arguments, 1), n = this._callbacks["$" + e];
            if (n) for (var r = 0, i = (n = n.slice(0)).length; r < i; ++r) n[r].apply(this, t);
            return this;
        }, r.prototype.listeners = function(e) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
        }, r.prototype.hasListeners = function(e) {
            return !!this.listeners(e).length;
        };
    }, function(e, t, n) {
        function i(e) {
            if (e) return o(e);
        }
        function o(e) {
            for (var t in i.prototype) e[t] = i.prototype[t];
            return e;
        }
        var s = n(18);
        e.exports = i, i.prototype.clearTimeout = function() {
            return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), delete this._timer, 
            delete this._responseTimeoutTimer, this;
        }, i.prototype.parse = function(e) {
            return this._parser = e, this;
        }, i.prototype.responseType = function(e) {
            return this._responseType = e, this;
        }, i.prototype.serialize = function(e) {
            return this._serializer = e, this;
        }, i.prototype.timeout = function(e) {
            if (!e || "object" != (void 0 === e ? "undefined" : r(e))) return this._timeout = e, 
            this._responseTimeout = 0, this;
            for (var t in e) switch (t) {
              case "deadline":
                this._timeout = e.deadline;
                break;

              case "response":
                this._responseTimeout = e.response;
                break;

              default:
                console.warn("Unknown timeout option", t);
            }
            return this;
        }, i.prototype.retry = function(e, t) {
            return 0 !== arguments.length && !0 !== e || (e = 1), e <= 0 && (e = 0), this._maxRetries = e, 
            this._retries = 0, this._retryCallback = t, this;
        };
        var a = [ "ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT" ];
        i.prototype._shouldRetry = function(e, t) {
            if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
            if (this._retryCallback) try {
                var n = this._retryCallback(e, t);
                if (!0 === n) return !0;
                if (!1 === n) return !1;
            } catch (e) {
                console.error(e);
            }
            if (t && t.status && t.status >= 500 && 501 != t.status) return !0;
            if (e) {
                if (e.code && ~a.indexOf(e.code)) return !0;
                if (e.timeout && "ECONNABORTED" == e.code) return !0;
                if (e.crossDomain) return !0;
            }
            return !1;
        }, i.prototype._retry = function() {
            return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), 
            this._aborted = !1, this.timedout = !1, this._end();
        }, i.prototype.then = function(e, t) {
            if (!this._fullfilledPromise) {
                var n = this;
                this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), 
                this._fullfilledPromise = new Promise(function(e, t) {
                    n.end(function(n, r) {
                        n ? t(n) : e(r);
                    });
                });
            }
            return this._fullfilledPromise.then(e, t);
        }, i.prototype.catch = function(e) {
            return this.then(void 0, e);
        }, i.prototype.use = function(e) {
            return e(this), this;
        }, i.prototype.ok = function(e) {
            if ("function" != typeof e) throw Error("Callback required");
            return this._okCallback = e, this;
        }, i.prototype._isResponseOK = function(e) {
            return !!e && (this._okCallback ? this._okCallback(e) : e.status >= 200 && e.status < 300);
        }, i.prototype.get = function(e) {
            return this._header[e.toLowerCase()];
        }, i.prototype.getHeader = i.prototype.get, i.prototype.set = function(e, t) {
            if (s(e)) {
                for (var n in e) this.set(n, e[n]);
                return this;
            }
            return this._header[e.toLowerCase()] = t, this.header[e] = t, this;
        }, i.prototype.unset = function(e) {
            return delete this._header[e.toLowerCase()], delete this.header[e], this;
        }, i.prototype.field = function(e, t) {
            if (null === e || void 0 === e) throw new Error(".field(name, val) name can not be empty");
            if (this._data && console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"), 
            s(e)) {
                for (var n in e) this.field(n, e[n]);
                return this;
            }
            if (Array.isArray(t)) {
                for (var r in t) this.field(e, t[r]);
                return this;
            }
            if (null === t || void 0 === t) throw new Error(".field(name, val) val can not be empty");
            return "boolean" == typeof t && (t = "" + t), this._getFormData().append(e, t), 
            this;
        }, i.prototype.abort = function() {
            return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), 
            this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this);
        }, i.prototype._auth = function(e, t, n, r) {
            switch (n.type) {
              case "basic":
                this.set("Authorization", "Basic " + r(e + ":" + t));
                break;

              case "auto":
                this.username = e, this.password = t;
                break;

              case "bearer":
                this.set("Authorization", "Bearer " + e);
            }
            return this;
        }, i.prototype.withCredentials = function(e) {
            return void 0 == e && (e = !0), this._withCredentials = e, this;
        }, i.prototype.redirects = function(e) {
            return this._maxRedirects = e, this;
        }, i.prototype.maxResponseSize = function(e) {
            if ("number" != typeof e) throw TypeError("Invalid argument");
            return this._maxResponseSize = e, this;
        }, i.prototype.toJSON = function() {
            return {
                method: this.method,
                url: this.url,
                data: this._data,
                headers: this._header
            };
        }, i.prototype.send = function(e) {
            var t = s(e), n = this._header["content-type"];
            if (this._formData && console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"), 
            t && !this._data) Array.isArray(e) ? this._data = [] : this._isHost(e) || (this._data = {}); else if (e && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");
            if (t && s(this._data)) for (var r in e) this._data[r] = e[r]; else "string" == typeof e ? (n || this.type("form"), 
            n = this._header["content-type"], this._data = "application/x-www-form-urlencoded" == n ? this._data ? this._data + "&" + e : e : (this._data || "") + e) : this._data = e;
            return !t || this._isHost(e) ? this : (n || this.type("json"), this);
        }, i.prototype.sortQuery = function(e) {
            return this._sort = void 0 === e || e, this;
        }, i.prototype._finalizeQueryString = function() {
            var e = this._query.join("&");
            if (e && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + e), this._query.length = 0, 
            this._sort) {
                var t = this.url.indexOf("?");
                if (t >= 0) {
                    var n = this.url.substring(t + 1).split("&");
                    "function" == typeof this._sort ? n.sort(this._sort) : n.sort(), this.url = this.url.substring(0, t) + "?" + n.join("&");
                }
            }
        }, i.prototype._appendQueryString = function() {
            console.trace("Unsupported");
        }, i.prototype._timeoutError = function(e, t, n) {
            if (!this._aborted) {
                var r = new Error(e + t + "ms exceeded");
                r.timeout = t, r.code = "ECONNABORTED", r.errno = n, this.timedout = !0, this.abort(), 
                this.callback(r);
            }
        }, i.prototype._setTimeouts = function() {
            var e = this;
            this._timeout && !this._timer && (this._timer = setTimeout(function() {
                e._timeoutError("Timeout of ", e._timeout, "ETIME");
            }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function() {
                e._timeoutError("Response timeout of ", e._responseTimeout, "ETIMEDOUT");
            }, this._responseTimeout));
        };
    }, function(e, t, n) {
        function r(e) {
            if (e) return i(e);
        }
        function i(e) {
            for (var t in r.prototype) e[t] = r.prototype[t];
            return e;
        }
        var o = n(37);
        e.exports = r, r.prototype.get = function(e) {
            return this.header[e.toLowerCase()];
        }, r.prototype._setHeaderProperties = function(e) {
            var t = e["content-type"] || "";
            this.type = o.type(t);
            var n = o.params(t);
            for (var r in n) this[r] = n[r];
            this.links = {};
            try {
                e.link && (this.links = o.parseLinks(e.link));
            } catch (e) {}
        }, r.prototype._setStatusProperties = function(e) {
            var t = e / 100 | 0;
            this.status = this.statusCode = e, this.statusType = t, this.info = 1 == t, this.ok = 2 == t, 
            this.redirect = 3 == t, this.clientError = 4 == t, this.serverError = 5 == t, this.error = (4 == t || 5 == t) && this.toError(), 
            this.created = 201 == e, this.accepted = 202 == e, this.noContent = 204 == e, this.badRequest = 400 == e, 
            this.unauthorized = 401 == e, this.notAcceptable = 406 == e, this.forbidden = 403 == e, 
            this.notFound = 404 == e, this.unprocessableEntity = 422 == e;
        };
    }, function(e, t, n) {
        t.type = function(e) {
            return e.split(/ *; */).shift();
        }, t.params = function(e) {
            return e.split(/ *; */).reduce(function(e, t) {
                var n = t.split(/ *= */), r = n.shift(), i = n.shift();
                return r && i && (e[r] = i), e;
            }, {});
        }, t.parseLinks = function(e) {
            return e.split(/ *, */).reduce(function(e, t) {
                var n = t.split(/ *; */), r = n[0].slice(1, -1);
                return e[n[1].split(/ *= */)[1].slice(1, -1)] = r, e;
            }, {});
        }, t.cleanHeader = function(e, t) {
            return delete e["content-type"], delete e["content-length"], delete e["transfer-encoding"], 
            delete e.host, t && (delete e.authorization, delete e.cookie), e;
        };
    }, function(e, t) {
        function n() {
            this._defaults = [];
        }
        [ "use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert" ].forEach(function(e) {
            n.prototype[e] = function() {
                return this._defaults.push({
                    fn: e,
                    arguments: arguments
                }), this;
            };
        }), n.prototype._setDefaults = function(e) {
            this._defaults.forEach(function(t) {
                e[t.fn].apply(e, t.arguments);
            });
        }, e.exports = n;
    }, function(e, t, n) {
        function r(e) {
            var n, r = 0;
            for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
            return t.colors[Math.abs(r) % t.colors.length];
        }
        function i(e) {
            function n() {
                if (n.enabled) {
                    var e = n, r = +new Date(), o = r - (i || r);
                    e.diff = o, e.prev = i, e.curr = r, i = r;
                    for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                    s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                    var u = 0;
                    s[0] = s[0].replace(/%([a-zA-Z%])/g, function(n, r) {
                        if ("%%" === n) return n;
                        u++;
                        var i = t.formatters[r];
                        if ("function" == typeof i) {
                            var o = s[u];
                            n = i.call(e, o), s.splice(u, 1), u--;
                        }
                        return n;
                    }), t.formatArgs.call(e, s), (n.log || t.log || console.log.bind(console)).apply(e, s);
                }
            }
            var i;
            return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = r(e), 
            n.destroy = o, "function" == typeof t.init && t.init(n), t.instances.push(n), n;
        }
        function o() {
            var e = t.instances.indexOf(this);
            return -1 !== e && (t.instances.splice(e, 1), !0);
        }
        (t = e.exports = i.debug = i.default = i).coerce = function(e) {
            return e instanceof Error ? e.stack || e.message : e;
        }, t.disable = function() {
            t.enable("");
        }, t.enable = function(e) {
            t.save(e), t.names = [], t.skips = [];
            var n, r = ("string" == typeof e ? e : "").split(/[\s,]+/), i = r.length;
            for (n = 0; n < i; n++) r[n] && ("-" === (e = r[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
            for (n = 0; n < t.instances.length; n++) {
                var o = t.instances[n];
                o.enabled = t.enabled(o.namespace);
            }
        }, t.enabled = function(e) {
            if ("*" === e[e.length - 1]) return !0;
            var n, r;
            for (n = 0, r = t.skips.length; n < r; n++) if (t.skips[n].test(e)) return !1;
            for (n = 0, r = t.names.length; n < r; n++) if (t.names[n].test(e)) return !0;
            return !1;
        }, t.humanize = n(40), t.instances = [], t.names = [], t.skips = [], t.formatters = {};
    }, function(e, t) {
        function n(e) {
            if (!((e = String(e)).length > 100)) {
                var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                if (t) {
                    var n = parseFloat(t[1]);
                    switch ((t[2] || "ms").toLowerCase()) {
                      case "years":
                      case "year":
                      case "yrs":
                      case "yr":
                      case "y":
                        return n * f;

                      case "days":
                      case "day":
                      case "d":
                        return n * l;

                      case "hours":
                      case "hour":
                      case "hrs":
                      case "hr":
                      case "h":
                        return n * c;

                      case "minutes":
                      case "minute":
                      case "mins":
                      case "min":
                      case "m":
                        return n * u;

                      case "seconds":
                      case "second":
                      case "secs":
                      case "sec":
                      case "s":
                        return n * a;

                      case "milliseconds":
                      case "millisecond":
                      case "msecs":
                      case "msec":
                      case "ms":
                        return n;

                      default:
                        return;
                    }
                }
            }
        }
        function i(e) {
            return e >= l ? Math.round(e / l) + "d" : e >= c ? Math.round(e / c) + "h" : e >= u ? Math.round(e / u) + "m" : e >= a ? Math.round(e / a) + "s" : e + "ms";
        }
        function o(e) {
            return s(e, l, "day") || s(e, c, "hour") || s(e, u, "minute") || s(e, a, "second") || e + " ms";
        }
        function s(e, t, n) {
            if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s";
        }
        var a = 1e3, u = 60 * a, c = 60 * u, l = 24 * c, f = 365.25 * l;
        e.exports = function(e, t) {
            t = t || {};
            var s = void 0 === e ? "undefined" : r(e);
            if ("string" === s && e.length > 0) return n(e);
            if ("number" === s && !1 === isNaN(e)) return t.long ? o(e) : i(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
        };
    }, function(e, t, n) {
        (function(t) {
            !function(t, n) {
                e.exports = n();
            }(0, function() {
                function e(e) {
                    var t = void 0 === e ? "undefined" : r(e);
                    return null !== e && ("object" === t || "function" === t);
                }
                function i(e) {
                    return "function" == typeof e;
                }
                function s() {
                    return void 0 !== U ? function() {
                        U(u);
                    } : a();
                }
                function a() {
                    var e = setTimeout;
                    return function() {
                        return e(u, 1);
                    };
                }
                function u() {
                    for (var e = 0; e < L; e += 2) (0, W[e])(W[e + 1]), W[e] = void 0, W[e + 1] = void 0;
                    L = 0;
                }
                function c(e, t) {
                    var n = this, r = new this.constructor(f);
                    void 0 === r[G] && N(r);
                    var i = n._state;
                    if (i) {
                        var o = arguments[i - 1];
                        D(function() {
                            return A(i, r, o, n._result);
                        });
                    } else S(n, r, e, t);
                    return r;
                }
                function l(e) {
                    var t = this;
                    if (e && "object" == (void 0 === e ? "undefined" : r(e)) && e.constructor === t) return e;
                    var n = new t(f);
                    return _(n, e), n;
                }
                function f() {}
                function h() {
                    return new TypeError("You cannot resolve a promise with itself");
                }
                function d() {
                    return new TypeError("A promises callback cannot return that same promise.");
                }
                function p(e) {
                    try {
                        return e.then;
                    } catch (e) {
                        return Q.error = e, Q;
                    }
                }
                function v(e, t, n, r) {
                    try {
                        e.call(t, n, r);
                    } catch (e) {
                        return e;
                    }
                }
                function y(e, t, n) {
                    D(function(e) {
                        var r = !1, i = v(n, t, function(n) {
                            r || (r = !0, t !== n ? _(e, n) : w(e, n));
                        }, function(t) {
                            r || (r = !0, E(e, t));
                        }, "Settle: " + (e._label || " unknown promise"));
                        !r && i && (r = !0, E(e, i));
                    }, e);
                }
                function m(e, t) {
                    t._state === H ? w(e, t._result) : t._state === K ? E(e, t._result) : S(t, void 0, function(t) {
                        return _(e, t);
                    }, function(t) {
                        return E(e, t);
                    });
                }
                function g(e, t, n) {
                    t.constructor === e.constructor && n === c && t.constructor.resolve === l ? m(e, t) : n === Q ? (E(e, Q.error), 
                    Q.error = null) : void 0 === n ? w(e, t) : i(n) ? y(e, t, n) : w(e, t);
                }
                function _(t, n) {
                    t === n ? E(t, h()) : e(n) ? g(t, n, p(n)) : w(t, n);
                }
                function b(e) {
                    e._onerror && e._onerror(e._result), T(e);
                }
                function w(e, t) {
                    e._state === J && (e._result = t, e._state = H, 0 !== e._subscribers.length && D(T, e));
                }
                function E(e, t) {
                    e._state === J && (e._state = K, e._result = t, D(b, e));
                }
                function S(e, t, n, r) {
                    var i = e._subscribers, o = i.length;
                    e._onerror = null, i[o] = t, i[o + H] = n, i[o + K] = r, 0 === o && e._state && D(T, e);
                }
                function T(e) {
                    var t = e._subscribers, n = e._state;
                    if (0 !== t.length) {
                        for (var r = void 0, i = void 0, o = e._result, s = 0; s < t.length; s += 3) r = t[s], 
                        i = t[s + n], r ? A(n, r, i, o) : i(o);
                        e._subscribers.length = 0;
                    }
                }
                function O(e, t) {
                    try {
                        return e(t);
                    } catch (e) {
                        return Q.error = e, Q;
                    }
                }
                function A(e, t, n, r) {
                    var o = i(n), s = void 0, a = void 0, u = void 0, c = void 0;
                    if (o) {
                        if ((s = O(n, r)) === Q ? (c = !0, a = s.error, s.error = null) : u = !0, t === s) return void E(t, d());
                    } else s = r, u = !0;
                    t._state !== J || (o && u ? _(t, s) : c ? E(t, a) : e === H ? w(t, s) : e === K && E(t, s));
                }
                function C(e, t) {
                    try {
                        t(function(t) {
                            _(e, t);
                        }, function(t) {
                            E(e, t);
                        });
                    } catch (t) {
                        E(e, t);
                    }
                }
                function I() {
                    return $++;
                }
                function N(e) {
                    e[G] = $++, e._state = void 0, e._result = void 0, e._subscribers = [];
                }
                function x() {
                    return new Error("Array Methods must be provided an Array");
                }
                function P() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                }
                function j() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                }
                var R = void 0, k = R = Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e);
                }, L = 0, U = void 0, F = void 0, D = function(e, t) {
                    W[L] = e, W[L + 1] = t, 2 === (L += 2) && (F ? F(u) : z());
                }, M = void 0 !== o ? o : void 0, B = M || {}, q = B.MutationObserver || B.WebKitMutationObserver, V = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), Y = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, W = new Array(1e3), z = void 0;
                z = V ? function() {
                    return process.nextTick(u);
                } : q ? function() {
                    var e = 0, t = new q(u), n = document.createTextNode("");
                    return t.observe(n, {
                        characterData: !0
                    }), function() {
                        n.data = e = ++e % 2;
                    };
                }() : Y ? function() {
                    var e = new MessageChannel();
                    return e.port1.onmessage = u, function() {
                        return e.port2.postMessage(0);
                    };
                }() : void 0 === M ? function() {
                    try {
                        var e = n(42);
                        return U = e.runOnLoop || e.runOnContext, s();
                    } catch (e) {
                        return a();
                    }
                }() : a();
                var G = Math.random().toString(36).substring(2), J = void 0, H = 1, K = 2, Q = {
                    error: null
                }, $ = 0, X = function() {
                    function e(e, t) {
                        this._instanceConstructor = e, this.promise = new e(f), this.promise[G] || N(this.promise), 
                        k(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 
                        0 === this.length ? w(this.promise, this._result) : (this.length = this.length || 0, 
                        this._enumerate(t), 0 === this._remaining && w(this.promise, this._result))) : E(this.promise, x());
                    }
                    return e.prototype._enumerate = function(e) {
                        for (var t = 0; this._state === J && t < e.length; t++) this._eachEntry(e[t], t);
                    }, e.prototype._eachEntry = function(e, t) {
                        var n = this._instanceConstructor, r = n.resolve;
                        if (r === l) {
                            var i = p(e);
                            if (i === c && e._state !== J) this._settledAt(e._state, t, e._result); else if ("function" != typeof i) this._remaining--, 
                            this._result[t] = e; else if (n === Z) {
                                var o = new n(f);
                                g(o, e, i), this._willSettleAt(o, t);
                            } else this._willSettleAt(new n(function(t) {
                                return t(e);
                            }), t);
                        } else this._willSettleAt(r(e), t);
                    }, e.prototype._settledAt = function(e, t, n) {
                        var r = this.promise;
                        r._state === J && (this._remaining--, e === K ? E(r, n) : this._result[t] = n), 
                        0 === this._remaining && w(r, this._result);
                    }, e.prototype._willSettleAt = function(e, t) {
                        var n = this;
                        S(e, void 0, function(e) {
                            return n._settledAt(H, t, e);
                        }, function(e) {
                            return n._settledAt(K, t, e);
                        });
                    }, e;
                }(), Z = function() {
                    function e(t) {
                        this[G] = I(), this._result = this._state = void 0, this._subscribers = [], f !== t && ("function" != typeof t && P(), 
                        this instanceof e ? C(this, t) : j());
                    }
                    return e.prototype.catch = function(e) {
                        return this.then(null, e);
                    }, e.prototype.finally = function(e) {
                        var t = this, n = t.constructor;
                        return t.then(function(t) {
                            return n.resolve(e()).then(function() {
                                return t;
                            });
                        }, function(t) {
                            return n.resolve(e()).then(function() {
                                throw t;
                            });
                        });
                    }, e;
                }();
                return Z.prototype.then = c, Z.all = function(e) {
                    return new X(this, e).promise;
                }, Z.race = function(e) {
                    var t = this;
                    return new t(k(e) ? function(n, r) {
                        for (var i = e.length, o = 0; o < i; o++) t.resolve(e[o]).then(n, r);
                    } : function(e, t) {
                        return t(new TypeError("You must pass an array to race."));
                    });
                }, Z.resolve = l, Z.reject = function(e) {
                    var t = new this(f);
                    return E(t, e), t;
                }, Z._setScheduler = function(e) {
                    F = e;
                }, Z._setAsap = function(e) {
                    D = e;
                }, Z._asap = D, Z.polyfill = function() {
                    var e = void 0;
                    if (void 0 !== t) e = t; else if ("undefined" != typeof self) e = self; else try {
                        e = Function("return this")();
                    } catch (e) {
                        throw new Error("polyfill failed because global object is unavailable in this environment");
                    }
                    var n = e.Promise;
                    if (n) {
                        var r = null;
                        try {
                            r = Object.prototype.toString.call(n.resolve());
                        } catch (e) {}
                        if ("[object Promise]" === r && !n.cast) return;
                    }
                    e.Promise = Z;
                }, Z.Promise = Z, Z;
            });
        }).call(t, n(5));
    }, function(e, t) {}, function(e, t, n) {
        (function(t) {
            var r = n(0), i = (n(1), {}), o = [ "getItem", "setItem", "removeItem", "clear" ], s = t.localStorage;
            try {
                var a = "__storejs__";
                if (s.setItem(a, a), s.getItem(a) != a) throw new Error();
                s.removeItem(a);
            } catch (e) {
                s = n(44);
            }
            r(o).each(function(e) {
                i[e] = function() {
                    return s[e].apply(s, arguments);
                };
            }), i.async = !1, e.exports = i;
        }).call(t, n(5));
    }, function(e, t, n) {
        !function(t) {
            var n = {}, r = {};
            n.length = 0, n.getItem = function(e) {
                return r[e] || null;
            }, n.setItem = function(e, t) {
                void 0 === t ? n.removeItem(e) : (r.hasOwnProperty(e) || n.length++, r[e] = "" + t);
            }, n.removeItem = function(e) {
                r.hasOwnProperty(e) && (delete r[e], n.length--);
            }, n.key = function(e) {
                return Object.keys(r)[e] || null;
            }, n.clear = function() {
                r = {}, n.length = 0;
            }, e.exports = n;
        }();
    }, function(e, t, n) {
        function r(e, t) {
            if ("us" === t) return l("https://us-api.leancloud.cn");
            var n = void 0;
            switch (e.slice(-9)) {
              case "-9Nh9j0Va":
                return n = e.slice(0, 8).toLowerCase(), {
                    push: "https://" + n + ".push.lncldapi.com",
                    stats: "https://" + n + ".stats.lncldapi.com",
                    engine: "https://" + n + ".engine.lncldapi.com",
                    api: "https://" + n + ".api.lncldapi.com"
                };

              case "-MdYXbMMI":
                return l("https://us-api.leancloud.cn");

              default:
                return n = e.slice(0, 8).toLowerCase(), {
                    push: "https://" + n + ".push.lncld.net",
                    stats: "https://" + n + ".stats.lncld.net",
                    engine: "https://" + n + ".engine.lncld.net",
                    api: "https://" + n + ".api.lncld.net"
                };
            }
        }
        var i = n(6), o = n(46), s = n(3).isNullOrUndefined, a = n(0), u = a.extend, c = a.isObject, l = function(e) {
            return {
                push: e,
                stats: e,
                engine: e,
                api: e
            };
        }, f = !1;
        i.init = function(e) {
            if (!c(e)) return i.init({
                appId: e,
                appKey: arguments.length <= 1 ? void 0 : arguments[1],
                masterKey: arguments.length <= 2 ? void 0 : arguments[2],
                region: arguments.length <= 3 ? void 0 : arguments[3]
            });
            var t = e.appId, n = e.appKey, s = e.masterKey, a = (e.hookKey, e.region), h = void 0 === a ? "cn" : a, d = e.serverURLs, p = e.disableCurrentUser, v = e.production, y = e.realtime;
            if (i.applicationId) throw new Error("SDK is already initialized.");
            if (!t) throw new TypeError("appId must be a string");
            if (!n) throw new TypeError("appKey must be a string");
            s && console.warn("MasterKey is not supposed to be used in browser."), i._config.applicationId = t, 
            i._config.applicationKey = n, i._config.masterKey = s, void 0 !== v && (i._config.production = v), 
            void 0 !== p && (i._config.disableCurrentUser = p), i._appRouter = new o(i);
            var m = f || void 0 !== d || "cn" !== h;
            i._setServerURLs(u({}, r(t, h), i._config.serverURLs, "string" == typeof d ? l(d) : d), m), 
            y ? i._config.realtime = y : i._sharedConfig.liveQueryRealtime && (i._config.realtime = new i._sharedConfig.liveQueryRealtime({
                appId: t,
                appKey: n,
                region: h
            }));
        }, i.setProduction = function(e) {
            s(e) ? i._config.production = null : i._config.production = e ? 1 : 0;
        }, i._setServerURLs = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            "string" != typeof e ? u(i._config.serverURLs, e) : i._config.serverURLs = l(e), 
            t && (i._appRouter ? i._appRouter.disable() : f = !0);
        }, i.setServerURLs = function(e) {
            return i._setServerURLs(e);
        }, i.keepErrorRawMessage = function(e) {
            i._sharedConfig.keepErrorRawMessage = e;
        }, i.setRequestTimeout = function(e) {
            i._config.requestTimeout = e;
        }, i.initialize = i.init, [ "applicationId", "applicationKey", "masterKey", "hookKey" ].forEach(function(e) {
            return Object.defineProperty(i, e, {
                get: function() {
                    return i._config[e];
                },
                set: function(t) {
                    i._config[e] = t;
                }
            });
        });
    }, function(e, t, n) {
        function r(e) {
            var t = this;
            this.AV = e, this.lockedUntil = 0, o.getAsync("serverURLs").then(function(e) {
                if (!e) return t.lock(0);
                var n = e.serverURLs, r = e.lockedUntil;
                t.AV._setServerURLs(n, !1), t.lockedUntil = r;
            }).catch(function() {
                return t.lock(0);
            });
        }
        var i = n(3).ajax, o = n(20);
        r.prototype.disable = function() {
            this.disabled = !0;
        }, r.prototype.lock = function(e) {
            this.lockedUntil = Date.now() + e;
        }, r.prototype.refresh = function() {
            var e = this;
            if (!(this.disabled || Date.now() < this.lockedUntil)) return this.lock(10), i({
                method: "get",
                url: "https://app-router.leancloud.cn/2/route",
                query: {
                    appId: this.AV.applicationId
                }
            }).then(function(t) {
                if (!e.disabled) {
                    var n = t.ttl;
                    if (!n) throw new Error("missing ttl");
                    n *= 1e3;
                    var r = {
                        push: "https://" + t.push_server,
                        stats: "https://" + t.stats_server,
                        engine: "https://" + t.engine_server,
                        api: "https://" + t.api_server
                    };
                    return e.AV._setServerURLs(r, !1), e.lock(n), o.setAsync("serverURLs", {
                        serverURLs: r,
                        lockedUntil: e.lockedUntil
                    }, n);
                }
            }).catch(function(t) {
                console.warn("refresh server URLs failed: " + t.message), e.lock(600);
            });
        }, e.exports = r;
    }, function(e, t, n) {
        var r = n(0);
        e.exports = function(e) {
            var t = /\s+/, n = Array.prototype.slice;
            e.Events = {
                on: function(e, n, r) {
                    var i, o, s, a, u;
                    if (!n) return this;
                    for (e = e.split(t), i = this._callbacks || (this._callbacks = {}), o = e.shift(); o; ) (s = (u = i[o]) ? u.tail : {}).next = a = {}, 
                    s.context = r, s.callback = n, i[o] = {
                        tail: a,
                        next: u ? u.next : s
                    }, o = e.shift();
                    return this;
                },
                off: function(e, n, i) {
                    var o, s, a, u, c, l;
                    if (s = this._callbacks) {
                        if (!(e || n || i)) return delete this._callbacks, this;
                        for (o = (e = e ? e.split(t) : r.keys(s)).shift(); o; ) if (a = s[o], delete s[o], 
                        a && (n || i)) {
                            for (u = a.tail, a = a.next; a !== u; ) c = a.callback, l = a.context, (n && c !== n || i && l !== i) && this.on(o, c, l), 
                            a = a.next;
                            o = e.shift();
                        }
                        return this;
                    }
                },
                trigger: function(e) {
                    var r, i, o, s, a, u, c;
                    if (!(o = this._callbacks)) return this;
                    for (u = o.all, e = e.split(t), c = n.call(arguments, 1), r = e.shift(); r; ) {
                        if (i = o[r]) for (s = i.tail; (i = i.next) !== s; ) i.callback.apply(i.context || this, c);
                        if (i = u) for (s = i.tail, a = [ r ].concat(c); (i = i.next) !== s; ) i.callback.apply(i.context || this, a);
                        r = e.shift();
                    }
                    return this;
                }
            }, e.Events.bind = e.Events.on, e.Events.unbind = e.Events.off;
        };
    }, function(e, n, r) {
        var i = r(0);
        e.exports = function(e) {
            e.GeoPoint = function(t, n) {
                i.isArray(t) ? (e.GeoPoint._validate(t[0], t[1]), this.latitude = t[0], this.longitude = t[1]) : i.isObject(t) ? (e.GeoPoint._validate(t.latitude, t.longitude), 
                this.latitude = t.latitude, this.longitude = t.longitude) : i.isNumber(t) && i.isNumber(n) ? (e.GeoPoint._validate(t, n), 
                this.latitude = t, this.longitude = n) : (this.latitude = 0, this.longitude = 0);
                var r = this;
                this.__defineGetter__ && this.__defineSetter__ && (this._latitude = this.latitude, 
                this._longitude = this.longitude, this.__defineGetter__("latitude", function() {
                    return r._latitude;
                }), this.__defineGetter__("longitude", function() {
                    return r._longitude;
                }), this.__defineSetter__("latitude", function(t) {
                    e.GeoPoint._validate(t, r.longitude), r._latitude = t;
                }), this.__defineSetter__("longitude", function(t) {
                    e.GeoPoint._validate(r.latitude, t), r._longitude = t;
                }));
            }, e.GeoPoint._validate = function(e, t) {
                if (e < -90) throw new Error("AV.GeoPoint latitude " + e + " < -90.0.");
                if (e > 90) throw new Error("AV.GeoPoint latitude " + e + " > 90.0.");
                if (t < -180) throw new Error("AV.GeoPoint longitude " + t + " < -180.0.");
                if (t > 180) throw new Error("AV.GeoPoint longitude " + t + " > 180.0.");
            }, e.GeoPoint.current = function() {
                return new e.Promise(function(n, r) {
                    t.geolocation.getCurrentPosition(function(t) {
                        n(new e.GeoPoint({
                            latitude: t.coords.latitude,
                            longitude: t.coords.longitude
                        }));
                    }, r);
                });
            }, i.extend(e.GeoPoint.prototype, {
                toJSON: function() {
                    return e.GeoPoint._validate(this.latitude, this.longitude), {
                        __type: "GeoPoint",
                        latitude: this.latitude,
                        longitude: this.longitude
                    };
                },
                radiansTo: function(e) {
                    var t = Math.PI / 180, n = this.latitude * t, r = this.longitude * t, i = e.latitude * t, o = n - i, s = r - e.longitude * t, a = Math.sin(o / 2), u = Math.sin(s / 2), c = a * a + Math.cos(n) * Math.cos(i) * u * u;
                    return c = Math.min(1, c), 2 * Math.asin(Math.sqrt(c));
                },
                kilometersTo: function(e) {
                    return 6371 * this.radiansTo(e);
                },
                milesTo: function(e) {
                    return 3958.8 * this.radiansTo(e);
                }
            });
        };
    }, function(e, t, n) {
        var r = n(0);
        e.exports = function(e) {
            e.ACL = function(t) {
                var n = this;
                if (n.permissionsById = {}, r.isObject(t)) if (t instanceof e.User) n.setReadAccess(t, !0), 
                n.setWriteAccess(t, !0); else {
                    if (r.isFunction(t)) throw new Error("AV.ACL() called with a function.  Did you forget ()?");
                    e._objectEach(t, function(t, i) {
                        if (!r.isString(i)) throw new Error("Tried to create an ACL with an invalid userId.");
                        n.permissionsById[i] = {}, e._objectEach(t, function(e, t) {
                            if ("read" !== t && "write" !== t) throw new Error("Tried to create an ACL with an invalid permission type.");
                            if (!r.isBoolean(e)) throw new Error("Tried to create an ACL with an invalid permission value.");
                            n.permissionsById[i][t] = e;
                        });
                    });
                }
            }, e.ACL.prototype.toJSON = function() {
                return r.clone(this.permissionsById);
            }, e.ACL.prototype._setAccess = function(t, n, i) {
                if (n instanceof e.User ? n = n.id : n instanceof e.Role && (n = "role:" + n.getName()), 
                !r.isString(n)) throw new Error("userId must be a string.");
                if (!r.isBoolean(i)) throw new Error("allowed must be either true or false.");
                var o = this.permissionsById[n];
                if (!o) {
                    if (!i) return;
                    o = {}, this.permissionsById[n] = o;
                }
                i ? this.permissionsById[n][t] = !0 : (delete o[t], r.isEmpty(o) && delete this.permissionsById[n]);
            }, e.ACL.prototype._getAccess = function(t, n) {
                n instanceof e.User ? n = n.id : n instanceof e.Role && (n = "role:" + n.getName());
                var r = this.permissionsById[n];
                return !!r && !!r[t];
            }, e.ACL.prototype.setReadAccess = function(e, t) {
                this._setAccess("read", e, t);
            }, e.ACL.prototype.getReadAccess = function(e) {
                return this._getAccess("read", e);
            }, e.ACL.prototype.setWriteAccess = function(e, t) {
                this._setAccess("write", e, t);
            }, e.ACL.prototype.getWriteAccess = function(e) {
                return this._getAccess("write", e);
            }, e.ACL.prototype.setPublicReadAccess = function(e) {
                this.setReadAccess("*", e);
            }, e.ACL.prototype.getPublicReadAccess = function() {
                return this.getReadAccess("*");
            }, e.ACL.prototype.setPublicWriteAccess = function(e) {
                this.setWriteAccess("*", e);
            }, e.ACL.prototype.getPublicWriteAccess = function() {
                return this.getWriteAccess("*");
            }, e.ACL.prototype.getRoleReadAccess = function(t) {
                if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return this.getReadAccess("role:" + t);
                throw new Error("role must be a AV.Role or a String");
            }, e.ACL.prototype.getRoleWriteAccess = function(t) {
                if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return this.getWriteAccess("role:" + t);
                throw new Error("role must be a AV.Role or a String");
            }, e.ACL.prototype.setRoleReadAccess = function(t, n) {
                if (t instanceof e.Role && (t = t.getName()), !r.isString(t)) throw new Error("role must be a AV.Role or a String");
                this.setReadAccess("role:" + t, n);
            }, e.ACL.prototype.setRoleWriteAccess = function(t, n) {
                if (t instanceof e.Role && (t = t.getName()), !r.isString(t)) throw new Error("role must be a AV.Role or a String");
                this.setWriteAccess("role:" + t, n);
            };
        };
    }, function(e, t, n) {
        var r = n(0);
        e.exports = function(e) {
            e.Op = function() {
                this._initialize.apply(this, arguments);
            }, r.extend(e.Op.prototype, {
                _initialize: function() {}
            }), r.extend(e.Op, {
                _extend: e._extend,
                _opDecoderMap: {},
                _registerDecoder: function(t, n) {
                    e.Op._opDecoderMap[t] = n;
                },
                _decode: function(t) {
                    var n = e.Op._opDecoderMap[t.__op];
                    return n ? n(t) : void 0;
                }
            }), e.Op._registerDecoder("Batch", function(t) {
                var n = null;
                return e._arrayEach(t.ops, function(t) {
                    t = e.Op._decode(t), n = t._mergeWithPrevious(n);
                }), n;
            }), e.Op.Set = e.Op._extend({
                _initialize: function(e) {
                    this._value = e;
                },
                value: function() {
                    return this._value;
                },
                toJSON: function() {
                    return e._encode(this.value());
                },
                _mergeWithPrevious: function(e) {
                    return this;
                },
                _estimate: function(e) {
                    return this.value();
                }
            }), e.Op._UNSET = {}, e.Op.Unset = e.Op._extend({
                toJSON: function() {
                    return {
                        __op: "Delete"
                    };
                },
                _mergeWithPrevious: function(e) {
                    return this;
                },
                _estimate: function(t) {
                    return e.Op._UNSET;
                }
            }), e.Op._registerDecoder("Delete", function(t) {
                return new e.Op.Unset();
            }), e.Op.Increment = e.Op._extend({
                _initialize: function(e) {
                    this._amount = e;
                },
                amount: function() {
                    return this._amount;
                },
                toJSON: function() {
                    return {
                        __op: "Increment",
                        amount: this._amount
                    };
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return new e.Op.Set(this.amount());
                        if (t instanceof e.Op.Set) return new e.Op.Set(t.value() + this.amount());
                        if (t instanceof e.Op.Increment) return new e.Op.Increment(this.amount() + t.amount());
                        throw new Error("Op is invalid after previous op.");
                    }
                    return this;
                },
                _estimate: function(e) {
                    return e ? e + this.amount() : this.amount();
                }
            }), e.Op._registerDecoder("Increment", function(t) {
                return new e.Op.Increment(t.amount);
            }), e.Op.BitAnd = e.Op._extend({
                _initialize: function(e) {
                    this._value = e;
                },
                value: function() {
                    return this._value;
                },
                toJSON: function() {
                    return {
                        __op: "BitAnd",
                        value: this.value()
                    };
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return new e.Op.Set(0);
                        if (t instanceof e.Op.Set) return new e.Op.Set(t.value() & this.value());
                        throw new Error("Op is invalid after previous op.");
                    }
                    return this;
                },
                _estimate: function(e) {
                    return e & this.value();
                }
            }), e.Op._registerDecoder("BitAnd", function(t) {
                return new e.Op.BitAnd(t.value);
            }), e.Op.BitOr = e.Op._extend({
                _initialize: function(e) {
                    this._value = e;
                },
                value: function() {
                    return this._value;
                },
                toJSON: function() {
                    return {
                        __op: "BitOr",
                        value: this.value()
                    };
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return new e.Op.Set(this.value());
                        if (t instanceof e.Op.Set) return new e.Op.Set(t.value() | this.value());
                        throw new Error("Op is invalid after previous op.");
                    }
                    return this;
                },
                _estimate: function(e) {
                    return e | this.value();
                }
            }), e.Op._registerDecoder("BitOr", function(t) {
                return new e.Op.BitOr(t.value);
            }), e.Op.BitXor = e.Op._extend({
                _initialize: function(e) {
                    this._value = e;
                },
                value: function() {
                    return this._value;
                },
                toJSON: function() {
                    return {
                        __op: "BitXor",
                        value: this.value()
                    };
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return new e.Op.Set(this.value());
                        if (t instanceof e.Op.Set) return new e.Op.Set(t.value() ^ this.value());
                        throw new Error("Op is invalid after previous op.");
                    }
                    return this;
                },
                _estimate: function(e) {
                    return e ^ this.value();
                }
            }), e.Op._registerDecoder("BitXor", function(t) {
                return new e.Op.BitXor(t.value);
            }), e.Op.Add = e.Op._extend({
                _initialize: function(e) {
                    this._objects = e;
                },
                objects: function() {
                    return this._objects;
                },
                toJSON: function() {
                    return {
                        __op: "Add",
                        objects: e._encode(this.objects())
                    };
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return new e.Op.Set(this.objects());
                        if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
                        if (t instanceof e.Op.Add) return new e.Op.Add(t.objects().concat(this.objects()));
                        throw new Error("Op is invalid after previous op.");
                    }
                    return this;
                },
                _estimate: function(e) {
                    return e ? e.concat(this.objects()) : r.clone(this.objects());
                }
            }), e.Op._registerDecoder("Add", function(t) {
                return new e.Op.Add(e._decode(t.objects));
            }), e.Op.AddUnique = e.Op._extend({
                _initialize: function(e) {
                    this._objects = r.uniq(e);
                },
                objects: function() {
                    return this._objects;
                },
                toJSON: function() {
                    return {
                        __op: "AddUnique",
                        objects: e._encode(this.objects())
                    };
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return new e.Op.Set(this.objects());
                        if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
                        if (t instanceof e.Op.AddUnique) return new e.Op.AddUnique(this._estimate(t.objects()));
                        throw new Error("Op is invalid after previous op.");
                    }
                    return this;
                },
                _estimate: function(t) {
                    if (t) {
                        var n = r.clone(t);
                        return e._arrayEach(this.objects(), function(t) {
                            if (t instanceof e.Object && t.id) {
                                var i = r.find(n, function(n) {
                                    return n instanceof e.Object && n.id === t.id;
                                });
                                if (i) {
                                    var o = r.indexOf(n, i);
                                    n[o] = t;
                                } else n.push(t);
                            } else r.contains(n, t) || n.push(t);
                        }), n;
                    }
                    return r.clone(this.objects());
                }
            }), e.Op._registerDecoder("AddUnique", function(t) {
                return new e.Op.AddUnique(e._decode(t.objects));
            }), e.Op.Remove = e.Op._extend({
                _initialize: function(e) {
                    this._objects = r.uniq(e);
                },
                objects: function() {
                    return this._objects;
                },
                toJSON: function() {
                    return {
                        __op: "Remove",
                        objects: e._encode(this.objects())
                    };
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return t;
                        if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
                        if (t instanceof e.Op.Remove) return new e.Op.Remove(r.union(t.objects(), this.objects()));
                        throw new Error("Op is invalid after previous op.");
                    }
                    return this;
                },
                _estimate: function(t) {
                    if (t) {
                        var n = r.difference(t, this.objects());
                        return e._arrayEach(this.objects(), function(t) {
                            t instanceof e.Object && t.id && (n = r.reject(n, function(n) {
                                return n instanceof e.Object && n.id === t.id;
                            }));
                        }), n;
                    }
                    return [];
                }
            }), e.Op._registerDecoder("Remove", function(t) {
                return new e.Op.Remove(e._decode(t.objects));
            }), e.Op.Relation = e.Op._extend({
                _initialize: function(t, n) {
                    this._targetClassName = null;
                    var i = this, o = function(t) {
                        if (t instanceof e.Object) {
                            if (!t.id) throw new Error("You can't add an unsaved AV.Object to a relation.");
                            if (i._targetClassName || (i._targetClassName = t.className), i._targetClassName !== t.className) throw new Error("Tried to create a AV.Relation with 2 different types: " + i._targetClassName + " and " + t.className + ".");
                            return t.id;
                        }
                        return t;
                    };
                    this.relationsToAdd = r.uniq(r.map(t, o)), this.relationsToRemove = r.uniq(r.map(n, o));
                },
                added: function() {
                    var t = this;
                    return r.map(this.relationsToAdd, function(n) {
                        var r = e.Object._create(t._targetClassName);
                        return r.id = n, r;
                    });
                },
                removed: function() {
                    var t = this;
                    return r.map(this.relationsToRemove, function(n) {
                        var r = e.Object._create(t._targetClassName);
                        return r.id = n, r;
                    });
                },
                toJSON: function() {
                    var e = null, t = null, n = this, i = function(e) {
                        return {
                            __type: "Pointer",
                            className: n._targetClassName,
                            objectId: e
                        };
                    }, o = null;
                    return this.relationsToAdd.length > 0 && (o = r.map(this.relationsToAdd, i), e = {
                        __op: "AddRelation",
                        objects: o
                    }), this.relationsToRemove.length > 0 && (o = r.map(this.relationsToRemove, i), 
                    t = {
                        __op: "RemoveRelation",
                        objects: o
                    }), e && t ? {
                        __op: "Batch",
                        ops: [ e, t ]
                    } : e || t || {};
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) throw new Error("You can't modify a relation after deleting it.");
                        if (t instanceof e.Op.Relation) {
                            if (t._targetClassName && t._targetClassName !== this._targetClassName) throw new Error("Related object must be of class " + t._targetClassName + ", but " + this._targetClassName + " was passed in.");
                            var n = r.union(r.difference(t.relationsToAdd, this.relationsToRemove), this.relationsToAdd), i = r.union(r.difference(t.relationsToRemove, this.relationsToAdd), this.relationsToRemove), o = new e.Op.Relation(n, i);
                            return o._targetClassName = this._targetClassName, o;
                        }
                        throw new Error("Op is invalid after previous op.");
                    }
                    return this;
                },
                _estimate: function(t, n, r) {
                    if (t) {
                        if (t instanceof e.Relation) {
                            if (this._targetClassName) if (t.targetClassName) {
                                if (t.targetClassName !== this._targetClassName) throw new Error("Related object must be a " + t.targetClassName + ", but a " + this._targetClassName + " was passed in.");
                            } else t.targetClassName = this._targetClassName;
                            return t;
                        }
                        throw new Error("Op is invalid after previous op.");
                    }
                    new e.Relation(n, r).targetClassName = this._targetClassName;
                }
            }), e.Op._registerDecoder("AddRelation", function(t) {
                return new e.Op.Relation(e._decode(t.objects), []);
            }), e.Op._registerDecoder("RemoveRelation", function(t) {
                return new e.Op.Relation([], e._decode(t.objects));
            });
        };
    }, function(e, t, n) {
        var r = n(0);
        e.exports = function(e) {
            e.Relation = function(e, t) {
                if (!r.isString(t)) throw new TypeError("key must be a string");
                this.parent = e, this.key = t, this.targetClassName = null;
            }, e.Relation.reverseQuery = function(t, n, r) {
                var i = new e.Query(t);
                return i.equalTo(n, r._toPointer()), i;
            }, r.extend(e.Relation.prototype, {
                _ensureParentAndKey: function(e, t) {
                    if (this.parent = this.parent || e, this.key = this.key || t, this.parent !== e) throw new Error("Internal Error. Relation retrieved from two different Objects.");
                    if (this.key !== t) throw new Error("Internal Error. Relation retrieved from two different keys.");
                },
                add: function(t) {
                    r.isArray(t) || (t = [ t ]);
                    var n = new e.Op.Relation(t, []);
                    this.parent.set(this.key, n), this.targetClassName = n._targetClassName;
                },
                remove: function(t) {
                    r.isArray(t) || (t = [ t ]);
                    var n = new e.Op.Relation([], t);
                    this.parent.set(this.key, n), this.targetClassName = n._targetClassName;
                },
                toJSON: function() {
                    return {
                        __type: "Relation",
                        className: this.targetClassName
                    };
                },
                query: function() {
                    var t, n;
                    return this.targetClassName ? (t = e.Object._getSubclass(this.targetClassName), 
                    n = new e.Query(t)) : (t = e.Object._getSubclass(this.parent.className), n = new e.Query(t), 
                    n._extraOptions.redirectClassNameForKey = this.key), n._addCondition("$relatedTo", "object", this.parent._toPointer()), 
                    n._addCondition("$relatedTo", "key", this.key), n;
                }
            });
        };
    }, function(e, t, n) {
        var r = n(0), i = n(53), o = n(54), s = n(55), a = n(4), u = n(2)._request, c = n(1), l = n(3), f = l.tap, h = l.transformFetchOptions, d = n(7)("leancloud:file"), p = n(59);
        e.exports = function(e) {
            var t = function() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
            }, n = function(e) {
                return r.isString(e) ? e.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4] : "";
            }, l = function(e) {
                if (e < 26) return String.fromCharCode(65 + e);
                if (e < 52) return String.fromCharCode(e - 26 + 97);
                if (e < 62) return String.fromCharCode(e - 52 + 48);
                if (62 === e) return "+";
                if (63 === e) return "/";
                throw new Error("Tried to encode large digit " + e + " in base64.");
            }, v = function(e) {
                var t = [];
                return t.length = Math.ceil(e.length / 3), r.times(t.length, function(n) {
                    var r = e[3 * n], i = e[3 * n + 1] || 0, o = e[3 * n + 2] || 0, s = 3 * n + 1 < e.length, a = 3 * n + 2 < e.length;
                    t[n] = [ l(r >> 2 & 63), l(r << 4 & 48 | i >> 4 & 15), s ? l(i << 2 & 60 | o >> 6 & 3) : "=", a ? l(63 & o) : "=" ].join("");
                }), t.join("");
            };
            e.File = function(t, i, o) {
                if (this.attributes = {
                    name: t,
                    url: "",
                    metaData: {},
                    base64: ""
                }, r.isString(i)) throw new TypeError("Creating an AV.File from a String is not yet supported.");
                r.isArray(i) && (this.attributes.metaData.size = i.length, i = {
                    base64: v(i)
                }), this._extName = "", this._data = i, this._uploadHeaders = {}, i && i.blob && (this._extName = n(i.blob.uri)), 
                "undefined" != typeof Blob && i instanceof Blob && (i.size && (this.attributes.metaData.size = i.size), 
                i.name && (this._extName = n(i.name)));
                var s = void 0;
                if (i && i.owner) s = i.owner; else if (!e._config.disableCurrentUser) try {
                    s = e.User.current();
                } catch (e) {
                    if ("SYNC_API_NOT_AVAILABLE" !== e.code) throw e;
                }
                this.attributes.metaData.owner = s ? s.id : "unknown", this.set("mime_type", o);
            }, e.File.withURL = function(t, n, r, i) {
                if (!t || !n) throw new Error("Please provide file name and url");
                var o = new e.File(t, null, i);
                if (r) for (var s in r) o.attributes.metaData[s] || (o.attributes.metaData[s] = r[s]);
                return o.attributes.url = n, o.attributes.metaData.__source = "external", o;
            }, e.File.createWithoutData = function(t) {
                var n = new e.File();
                return n.id = t, n;
            }, r.extend(e.File.prototype, {
                className: "_File",
                _toFullJSON: function(t) {
                    var n = this, i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], o = r.clone(this.attributes);
                    return e._objectEach(o, function(n, r) {
                        o[r] = e._encode(n, t, void 0, i);
                    }), e._objectEach(this._operations, function(e, t) {
                        o[t] = e;
                    }), r.has(this, "id") && (o.objectId = this.id), r([ "createdAt", "updatedAt" ]).each(function(e) {
                        if (r.has(n, e)) {
                            var t = n[e];
                            o[e] = r.isDate(t) ? t.toJSON() : t;
                        }
                    }), i && (o.__type = "File"), o;
                },
                toFullJSON: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return this._toFullJSON(e);
                },
                toJSON: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [ this ];
                    return this._toFullJSON(n, !1);
                },
                _toPointer: function() {
                    return {
                        __type: "Pointer",
                        className: this.className,
                        objectId: this.id
                    };
                },
                getACL: function() {
                    return this._acl;
                },
                setACL: function(t) {
                    if (!(t instanceof e.ACL)) return new a(a.OTHER_CAUSE, "ACL must be a AV.ACL.");
                    this._acl = t;
                },
                name: function() {
                    return this.get("name");
                },
                url: function() {
                    return this.get("url");
                },
                get: function(e) {
                    switch (e) {
                      case "objectId":
                        return this.id;

                      case "url":
                      case "name":
                      case "mime_type":
                      case "metaData":
                      case "createdAt":
                      case "updatedAt":
                        return this.attributes[e];

                      default:
                        return this.attributes.metaData[e];
                    }
                },
                set: function() {
                    for (var e = this, t = function(t, n) {
                        switch (t) {
                          case "name":
                          case "url":
                          case "mime_type":
                          case "base64":
                          case "metaData":
                            e.attributes[t] = n;
                            break;

                          default:
                            e.attributes.metaData[t] = n;
                        }
                    }, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    switch (r.length) {
                      case 1:
                        for (var o in r[0]) t(o, r[0][o]);
                        break;

                      case 2:
                        t(r[0], r[1]);
                    }
                },
                setUploadHeader: function(e, t) {
                    return this._uploadHeaders[e] = t, this;
                },
                metaData: function(e, t) {
                    return e && t ? (this.attributes.metaData[e] = t, this) : e && !t ? this.attributes.metaData[e] : this.attributes.metaData;
                },
                thumbnailURL: function(e, t, n, r, i) {
                    var o = this.attributes.url;
                    if (!o) throw new Error("Invalid url.");
                    if (!e || !t || e <= 0 || t <= 0) throw new Error("Invalid width or height value.");
                    if (n = n || 100, r = r || !0, n <= 0 || n > 100) throw new Error("Invalid quality value.");
                    return i = i || "png", o + "?imageView/" + (r ? 2 : 1) + "/w/" + e + "/h/" + t + "/q/" + n + "/format/" + i;
                },
                size: function() {
                    return this.metaData().size;
                },
                ownerId: function() {
                    return this.metaData().owner;
                },
                destroy: function(e) {
                    return this.id ? u("files", null, this.id, "DELETE", null, e) : c.reject(new Error("The file id does not eixst."));
                },
                _fileToken: function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "fileTokens", i = this.attributes.name, o = n(i);
                    !o && this._extName && (i += this._extName, o = this._extName);
                    var s = t() + t() + t() + t() + t() + o, a = {
                        key: s,
                        name: i,
                        ACL: this._acl,
                        mime_type: e,
                        metaData: this.attributes.metaData
                    };
                    return this._qiniu_key = s, u(r, null, null, "POST", a);
                },
                save: function(e) {
                    var t = this;
                    if (this.id) throw new Error("File already saved. If you want to manipulate a file, use AV.Query to get it.");
                    if (!this._previousSave) if (this._data) {
                        var n = this.get("mime_type");
                        this._previousSave = this._fileToken(n).then(function(r) {
                            return r.mime_type && (n = r.mime_type, t.set("mime_type", n)), t._token = r.token, 
                            c.resolve().then(function() {
                                var e = t._data;
                                if (e && e.base64) return p(e.base64, n);
                                if (e && e.blob) return !e.blob.type && n && (e.blob.type = n), e.blob.name || (e.blob.name = t.get("name")), 
                                e.blob;
                                if ("undefined" != typeof Blob && e instanceof Blob) return e;
                                throw new TypeError("malformed file data");
                            }).then(function(n) {
                                switch (r.provider) {
                                  case "s3":
                                    return s(r, n, t, e);

                                  case "qcloud":
                                    return i(r, n, t, e);

                                  case "qiniu":
                                  default:
                                    return o(r, n, t, e);
                                }
                            }).then(f(function() {
                                return t._callback(!0);
                            }), function(e) {
                                throw t._callback(!1), e;
                            });
                        });
                    } else if (this.attributes.url && "external" === this.attributes.metaData.__source) {
                        var r = {
                            name: this.attributes.name,
                            ACL: this._acl,
                            metaData: this.attributes.metaData,
                            mime_type: this.mimeType,
                            url: this.attributes.url
                        };
                        this._previousSave = u("files", this.attributes.name, null, "post", r).then(function(e) {
                            return t.attributes.name = e.name, t.attributes.url = e.url, t.id = e.objectId, 
                            e.size && (t.attributes.metaData.size = e.size), t;
                        });
                    }
                    return this._previousSave;
                },
                _callback: function(e) {
                    u("fileCallback", null, null, "post", {
                        token: this._token,
                        result: e
                    }).catch(d), delete this._token, delete this._data;
                },
                fetch: function(e, t) {
                    return u("files", null, this.id, "GET", h(e), t).then(this._finishFetch.bind(this));
                },
                _finishFetch: function(t) {
                    var n = e.Object.prototype.parse(t);
                    return n.attributes = {
                        name: n.name,
                        url: n.url,
                        mime_type: n.mime_type,
                        bucket: n.bucket
                    }, n.attributes.metaData = n.metaData || {}, n.id = n.objectId, delete n.objectId, 
                    delete n.metaData, delete n.url, delete n.name, delete n.mime_type, delete n.bucket, 
                    r.extend(this, n), this;
                }
            });
        };
    }, function(e, t, n) {
        var r = n(8), i = n(7)("cos"), o = n(1);
        e.exports = function(e, t, n) {
            var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId;
            var a = e.upload_url + "?sign=" + encodeURIComponent(e.token);
            return new o(function(e, o) {
                var u = r("POST", a).set(n._uploadHeaders).attach("fileContent", t, n.attributes.name).field("op", "upload");
                s.onprogress && u.on("progress", s.onprogress), u.end(function(t, r) {
                    if (r && i(r.status, r.body, r.text), t) return r && (t.statusCode = r.status, t.responseText = r.text, 
                    t.response = r.body), o(t);
                    e(n);
                });
            });
        };
    }, function(e, t, n) {
        var r = n(8), i = n(1), o = n(7)("qiniu");
        e.exports = function(e, t, n) {
            var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId;
            var a = e.token, u = e.upload_url || "https://upload.qiniup.com";
            return new i(function(e, i) {
                var c = r("POST", u).set(n._uploadHeaders).attach("file", t, n.attributes.name).field("name", n.attributes.name).field("key", n._qiniu_key).field("token", a);
                s.onprogress && c.on("progress", s.onprogress), c.end(function(t, r) {
                    if (r && o(r.status, r.body, r.text), t) return r && (t.statusCode = r.status, t.responseText = r.text, 
                    t.response = r.body), i(t);
                    e(n);
                });
            });
        };
    }, function(e, t, n) {
        var r = n(8), i = n(1), o = function(e, t) {
            return t && (e.statusCode = t.status, e.responseText = t.text, e.response = t.body), 
            e;
        };
        e.exports = function(e, t, n) {
            var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId, new i(function(i, a) {
                var u = r("PUT", e.upload_url).set(Object.assign({
                    "Content-Type": n.get("mime_type"),
                    "Cache-Control": "public, max-age=31536000"
                }, n._uploadHeaders));
                s.onprogress && u.on("progress", s.onprogress), u.on("response", function(e) {
                    if (e.ok) return i(n);
                    a(o(e.error, e));
                }), u.on("error", function(e, t) {
                    return a(o(e, t));
                }), u.send(t).end();
            });
        };
    }, function(e, t, n) {
        !function() {
            var t = n(57), r = n(21).utf8, i = n(58), o = n(21).bin, s = function e(n, s) {
                n.constructor == String ? n = s && "binary" === s.encoding ? o.stringToBytes(n) : r.stringToBytes(n) : i(n) ? n = Array.prototype.slice.call(n, 0) : Array.isArray(n) || (n = n.toString());
                for (var a = t.bytesToWords(n), u = 8 * n.length, c = 1732584193, l = -271733879, f = -1732584194, h = 271733878, d = 0; d < a.length; d++) a[d] = 16711935 & (a[d] << 8 | a[d] >>> 24) | 4278255360 & (a[d] << 24 | a[d] >>> 8);
                a[u >>> 5] |= 128 << u % 32, a[14 + (u + 64 >>> 9 << 4)] = u;
                for (var p = e._ff, v = e._gg, y = e._hh, m = e._ii, d = 0; d < a.length; d += 16) {
                    var g = c, _ = l, b = f, w = h;
                    l = m(l = m(l = m(l = m(l = y(l = y(l = y(l = y(l = v(l = v(l = v(l = v(l = p(l = p(l = p(l = p(l, f = p(f, h = p(h, c = p(c, l, f, h, a[d + 0], 7, -680876936), l, f, a[d + 1], 12, -389564586), c, l, a[d + 2], 17, 606105819), h, c, a[d + 3], 22, -1044525330), f = p(f, h = p(h, c = p(c, l, f, h, a[d + 4], 7, -176418897), l, f, a[d + 5], 12, 1200080426), c, l, a[d + 6], 17, -1473231341), h, c, a[d + 7], 22, -45705983), f = p(f, h = p(h, c = p(c, l, f, h, a[d + 8], 7, 1770035416), l, f, a[d + 9], 12, -1958414417), c, l, a[d + 10], 17, -42063), h, c, a[d + 11], 22, -1990404162), f = p(f, h = p(h, c = p(c, l, f, h, a[d + 12], 7, 1804603682), l, f, a[d + 13], 12, -40341101), c, l, a[d + 14], 17, -1502002290), h, c, a[d + 15], 22, 1236535329), f = v(f, h = v(h, c = v(c, l, f, h, a[d + 1], 5, -165796510), l, f, a[d + 6], 9, -1069501632), c, l, a[d + 11], 14, 643717713), h, c, a[d + 0], 20, -373897302), f = v(f, h = v(h, c = v(c, l, f, h, a[d + 5], 5, -701558691), l, f, a[d + 10], 9, 38016083), c, l, a[d + 15], 14, -660478335), h, c, a[d + 4], 20, -405537848), f = v(f, h = v(h, c = v(c, l, f, h, a[d + 9], 5, 568446438), l, f, a[d + 14], 9, -1019803690), c, l, a[d + 3], 14, -187363961), h, c, a[d + 8], 20, 1163531501), f = v(f, h = v(h, c = v(c, l, f, h, a[d + 13], 5, -1444681467), l, f, a[d + 2], 9, -51403784), c, l, a[d + 7], 14, 1735328473), h, c, a[d + 12], 20, -1926607734), f = y(f, h = y(h, c = y(c, l, f, h, a[d + 5], 4, -378558), l, f, a[d + 8], 11, -2022574463), c, l, a[d + 11], 16, 1839030562), h, c, a[d + 14], 23, -35309556), f = y(f, h = y(h, c = y(c, l, f, h, a[d + 1], 4, -1530992060), l, f, a[d + 4], 11, 1272893353), c, l, a[d + 7], 16, -155497632), h, c, a[d + 10], 23, -1094730640), f = y(f, h = y(h, c = y(c, l, f, h, a[d + 13], 4, 681279174), l, f, a[d + 0], 11, -358537222), c, l, a[d + 3], 16, -722521979), h, c, a[d + 6], 23, 76029189), f = y(f, h = y(h, c = y(c, l, f, h, a[d + 9], 4, -640364487), l, f, a[d + 12], 11, -421815835), c, l, a[d + 15], 16, 530742520), h, c, a[d + 2], 23, -995338651), f = m(f, h = m(h, c = m(c, l, f, h, a[d + 0], 6, -198630844), l, f, a[d + 7], 10, 1126891415), c, l, a[d + 14], 15, -1416354905), h, c, a[d + 5], 21, -57434055), f = m(f, h = m(h, c = m(c, l, f, h, a[d + 12], 6, 1700485571), l, f, a[d + 3], 10, -1894986606), c, l, a[d + 10], 15, -1051523), h, c, a[d + 1], 21, -2054922799), f = m(f, h = m(h, c = m(c, l, f, h, a[d + 8], 6, 1873313359), l, f, a[d + 15], 10, -30611744), c, l, a[d + 6], 15, -1560198380), h, c, a[d + 13], 21, 1309151649), f = m(f, h = m(h, c = m(c, l, f, h, a[d + 4], 6, -145523070), l, f, a[d + 11], 10, -1120210379), c, l, a[d + 2], 15, 718787259), h, c, a[d + 9], 21, -343485551), 
                    c = c + g >>> 0, l = l + _ >>> 0, f = f + b >>> 0, h = h + w >>> 0;
                }
                return t.endian([ c, l, f, h ]);
            };
            s._ff = function(e, t, n, r, i, o, s) {
                var a = e + (t & n | ~t & r) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + t;
            }, s._gg = function(e, t, n, r, i, o, s) {
                var a = e + (t & r | n & ~r) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + t;
            }, s._hh = function(e, t, n, r, i, o, s) {
                var a = e + (t ^ n ^ r) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + t;
            }, s._ii = function(e, t, n, r, i, o, s) {
                var a = e + (n ^ (t | ~r)) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + t;
            }, s._blocksize = 16, s._digestsize = 16, e.exports = function(e, n) {
                if (void 0 === e || null === e) throw new Error("Illegal argument " + e);
                var r = t.wordsToBytes(s(e, n));
                return n && n.asBytes ? r : n && n.asString ? o.bytesToString(r) : t.bytesToHex(r);
            };
        }();
    }, function(e, t) {
        !function() {
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
                rotl: function(e, t) {
                    return e << t | e >>> 32 - t;
                },
                rotr: function(e, t) {
                    return e << 32 - t | e >>> t;
                },
                endian: function(e) {
                    if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                    for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
                    return e;
                },
                randomBytes: function(e) {
                    for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
                    return t;
                },
                bytesToWords: function(e) {
                    for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
                    return t;
                },
                wordsToBytes: function(e) {
                    for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                    return t;
                },
                bytesToHex: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
                    return t.join("");
                },
                hexToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
                    return t;
                },
                bytesToBase64: function(e) {
                    for (var n = [], r = 0; r < e.length; r += 3) for (var i = e[r] << 16 | e[r + 1] << 8 | e[r + 2], o = 0; o < 4; o++) 8 * r + 6 * o <= 8 * e.length ? n.push(t.charAt(i >>> 6 * (3 - o) & 63)) : n.push("=");
                    return n.join("");
                },
                base64ToBytes: function(e) {
                    e = e.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var n = [], r = 0, i = 0; r < e.length; i = ++r % 4) 0 != i && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | t.indexOf(e.charAt(r)) >>> 6 - 2 * i);
                    return n;
                }
            };
            e.exports = n;
        }();
    }, function(e, t) {
        function n(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
        }
        function r(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0));
        }
        e.exports = function(e) {
            return null != e && (n(e) || r(e) || !!e._isBuffer);
        };
    }, function(e, t, n) {
        e.exports = function(e, t) {
            var n;
            e.indexOf("base64") < 0 ? n = atob(e) : e.split(",")[0].indexOf("base64") >= 0 ? (t = t || e.split(",")[0].split(":")[1].split(";")[0], 
            n = atob(e.split(",")[1])) : n = unescape(e.split(",")[1]);
            for (var r = new Uint8Array(n.length), i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
            return new Blob([ r ], {
                type: t
            });
        };
    }, function(e, t, n) {
        function r(e, t) {
            return e && e[t] ? o.isFunction(e[t]) ? e[t]() : e[t] : null;
        }
        var i = function() {
            function e(e, t) {
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    i = !0, o = e;
                } finally {
                    try {
                        !r && a.return && a.return();
                    } finally {
                        if (i) throw o;
                    }
                }
                return n;
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }(), o = n(0), s = n(4), a = n(2)._request, u = n(3), c = u.isNullOrUndefined, l = u.ensureArray, f = u.transformFetchOptions, h = u.setValue, d = u.findValue, p = u.isPlainObject, v = function e(t) {
            return o.isArray(t) ? t.map(e) : p(t) ? o.mapObject(t, e) : o.isObject(t) && t._toPointer ? t._toPointer() : t;
        }, y = [ "objectId", "createdAt", "updatedAt" ], m = function(e) {
            if (-1 !== y.indexOf(e)) throw new Error("key[" + e + "] is reserved");
        }, g = function(e) {
            var t = o.find(e, function(e) {
                return e instanceof Error;
            });
            if (!t) return e;
            var n = new s(t.code, t.message);
            throw n.results = e, n;
        };
        e.exports = function(e) {
            e.Object = function(t, n) {
                if (o.isString(t)) return e.Object._create.apply(this, arguments);
                t = t || {}, n && n.parse && (t = this.parse(t), t = this._mergeMagicFields(t));
                var i = r(this, "defaults");
                i && (t = o.extend({}, i, t)), n && n.collection && (this.collection = n.collection), 
                this._serverData = {}, this._opSetQueue = [ {} ], this._flags = {}, this.attributes = {}, 
                this._hashedJSON = {}, this._escapedAttributes = {}, this.cid = o.uniqueId("c"), 
                this.changed = {}, this._silent = {}, this._pending = {}, this.set(t, {
                    silent: !0
                }), this.changed = {}, this._silent = {}, this._pending = {}, this._hasData = !0, 
                this._previousAttributes = o.clone(this.attributes), this.initialize.apply(this, arguments);
            }, e.Object.saveAll = function(t, n) {
                return e.Object._deepSaveAsync(t, null, n);
            }, e.Object.fetchAll = function(t, n) {
                return e.Promise.resolve().then(function() {
                    return a("batch", null, null, "POST", {
                        requests: o.map(t, function(e) {
                            if (!e.className) throw new Error("object must have className to fetch");
                            if (!e.id) throw new Error("object must have id to fetch");
                            if (e.dirty()) throw new Error("object is modified but not saved");
                            return {
                                method: "GET",
                                path: "/1.1/classes/" + e.className + "/" + e.id
                            };
                        })
                    }, n);
                }).then(function(e) {
                    var n = o.map(t, function(t, n) {
                        if (e[n].success) {
                            var r = t.parse(e[n].success);
                            return t._cleanupUnsetKeys(r), t._finishFetch(r), t;
                        }
                        return null === e[n].success ? new s(s.OBJECT_NOT_FOUND, "Object not found.") : new s(e[n].error.code, e[n].error.error);
                    });
                    return g(n);
                });
            }, o.extend(e.Object.prototype, e.Events, {
                _fetchWhenSave: !1,
                initialize: function() {},
                fetchWhenSave: function(e) {
                    if (console.warn("AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead."), 
                    !o.isBoolean(e)) throw new Error("Expect boolean value for fetchWhenSave");
                    this._fetchWhenSave = e;
                },
                getObjectId: function() {
                    return this.id;
                },
                getCreatedAt: function() {
                    return this.createdAt || this.get("createdAt");
                },
                getUpdatedAt: function() {
                    return this.updatedAt || this.get("updatedAt");
                },
                toJSON: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    return this._toFullJSON(n, !1);
                },
                toFullJSON: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return this._toFullJSON(e);
                },
                _toFullJSON: function(t) {
                    var n = this, r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = o.clone(this.attributes);
                    if (o.isArray(t)) var s = t.concat(this);
                    return e._objectEach(i, function(t, n) {
                        i[n] = e._encode(t, s, void 0, r);
                    }), e._objectEach(this._operations, function(e, t) {
                        i[t] = e;
                    }), o.has(this, "id") && (i.objectId = this.id), o([ "createdAt", "updatedAt" ]).each(function(e) {
                        if (o.has(n, e)) {
                            var t = n[e];
                            i[e] = o.isDate(t) ? t.toJSON() : t;
                        }
                    }), r && (i.__type = "Object", o.isArray(t) && t.length && (i.__type = "Pointer"), 
                    i.className = this.className), i;
                },
                _refreshCache: function() {
                    var t = this;
                    t._refreshingCache || (t._refreshingCache = !0, e._objectEach(this.attributes, function(n, r) {
                        n instanceof e.Object ? n._refreshCache() : o.isObject(n) && t._resetCacheForKey(r) && t.set(r, new e.Op.Set(n), {
                            silent: !0
                        });
                    }), delete t._refreshingCache);
                },
                dirty: function(e) {
                    this._refreshCache();
                    var t = o.last(this._opSetQueue);
                    return e ? !!t[e] : !this.id || o.keys(t).length > 0;
                },
                _toPointer: function() {
                    return {
                        __type: "Pointer",
                        className: this.className,
                        objectId: this.id
                    };
                },
                get: function(e) {
                    switch (e) {
                      case "objectId":
                        return this.id;

                      case "createdAt":
                      case "updatedAt":
                        return this[e];

                      default:
                        return this.attributes[e];
                    }
                },
                relation: function(t) {
                    var n = this.get(t);
                    if (n) {
                        if (!(n instanceof e.Relation)) throw new Error("Called relation() on non-relation field " + t);
                        return n._ensureParentAndKey(this, t), n;
                    }
                    return new e.Relation(this, t);
                },
                escape: function(e) {
                    var t = this._escapedAttributes[e];
                    if (t) return t;
                    var n, r = this.attributes[e];
                    return n = c(r) ? "" : o.escape(r.toString()), this._escapedAttributes[e] = n, n;
                },
                has: function(e) {
                    return !c(this.attributes[e]);
                },
                _mergeMagicFields: function(t) {
                    var n = this, r = [ "objectId", "createdAt", "updatedAt" ];
                    return e._arrayEach(r, function(r) {
                        t[r] && ("objectId" === r ? n.id = t[r] : "createdAt" !== r && "updatedAt" !== r || o.isDate(t[r]) ? n[r] = t[r] : n[r] = e._parseDate(t[r]), 
                        delete t[r]);
                    }), t;
                },
                _startSave: function() {
                    this._opSetQueue.push({});
                },
                _cancelSave: function() {
                    var t = o.first(this._opSetQueue);
                    this._opSetQueue = o.rest(this._opSetQueue);
                    var n = o.first(this._opSetQueue);
                    e._objectEach(t, function(e, r) {
                        var i = t[r], o = n[r];
                        i && o ? n[r] = o._mergeWithPrevious(i) : i && (n[r] = i);
                    }), this._saving = this._saving - 1;
                },
                _finishSave: function(t) {
                    var n = {};
                    e._traverse(this.attributes, function(t) {
                        t instanceof e.Object && t.id && t._hasData && (n[t.id] = t);
                    });
                    var r = o.first(this._opSetQueue);
                    this._opSetQueue = o.rest(this._opSetQueue), this._applyOpSet(r, this._serverData), 
                    this._mergeMagicFields(t);
                    var i = this;
                    e._objectEach(t, function(t, r) {
                        i._serverData[r] = e._decode(t, r);
                        var o = e._traverse(i._serverData[r], function(t) {
                            if (t instanceof e.Object && n[t.id]) return n[t.id];
                        });
                        o && (i._serverData[r] = o);
                    }), this._rebuildAllEstimatedData();
                    var s = this._opSetQueue.map(o.clone);
                    this._refreshCache(), this._opSetQueue = s, this._saving = this._saving - 1;
                },
                _finishFetch: function(t, n) {
                    this._opSetQueue = [ {} ], this._mergeMagicFields(t);
                    var r = this;
                    e._objectEach(t, function(t, n) {
                        r._serverData[n] = e._decode(t, n);
                    }), this._rebuildAllEstimatedData(), this._refreshCache(), this._opSetQueue = [ {} ], 
                    this._hasData = n;
                },
                _applyOpSet: function(t, n) {
                    var r = this;
                    e._objectEach(t, function(t, o) {
                        var s = d(n, o), a = i(s, 3), u = a[0], c = a[1], l = a[2];
                        h(n, o, t._estimate(u, r, o)), c && c[l] === e.Op._UNSET && delete c[l];
                    });
                },
                _resetCacheForKey: function(t) {
                    var n = this.attributes[t];
                    if (o.isObject(n) && !(n instanceof e.Object) && !(n instanceof e.File)) {
                        var r = JSON.stringify(v(n));
                        if (this._hashedJSON[t] !== r) {
                            var i = !!this._hashedJSON[t];
                            return this._hashedJSON[t] = r, i;
                        }
                    }
                    return !1;
                },
                _rebuildEstimatedDataForKey: function(t) {
                    var n = this;
                    delete this.attributes[t], this._serverData[t] && (this.attributes[t] = this._serverData[t]), 
                    e._arrayEach(this._opSetQueue, function(r) {
                        var o = r[t];
                        if (o) {
                            var s = d(n.attributes, t), a = i(s, 4), u = a[0], c = a[1], l = a[2], f = a[3];
                            h(n.attributes, t, o._estimate(u, n, t)), c && c[l] === e.Op._UNSET && delete c[l], 
                            n._resetCacheForKey(f);
                        }
                    });
                },
                _rebuildAllEstimatedData: function() {
                    var t = this, n = o.clone(this.attributes);
                    this.attributes = o.clone(this._serverData), e._arrayEach(this._opSetQueue, function(n) {
                        t._applyOpSet(n, t.attributes), e._objectEach(n, function(e, n) {
                            t._resetCacheForKey(n);
                        });
                    }), e._objectEach(n, function(e, n) {
                        t.attributes[n] !== e && t.trigger("change:" + n, t, t.attributes[n], {});
                    }), e._objectEach(this.attributes, function(e, r) {
                        o.has(n, r) || t.trigger("change:" + r, t, e, {});
                    });
                },
                set: function(t, n, r) {
                    var i;
                    if (o.isObject(t) || c(t) ? (i = o.mapObject(t, function(t, n) {
                        return m(n), e._decode(t, n);
                    }), r = n) : (i = {}, m(t), i[t] = e._decode(n, t)), r = r || {}, !i) return this;
                    i instanceof e.Object && (i = i.attributes), r.unset && e._objectEach(i, function(t, n) {
                        i[n] = new e.Op.Unset();
                    });
                    var s = o.clone(i), a = this;
                    e._objectEach(s, function(t, n) {
                        t instanceof e.Op && (s[n] = t._estimate(a.attributes[n], a, n), s[n] === e.Op._UNSET && delete s[n]);
                    }), this._validate(i, r), r.changes = {};
                    var u = this._escapedAttributes;
                    return this._previousAttributes, e._arrayEach(o.keys(i), function(t) {
                        var n = i[t];
                        n instanceof e.Relation && (n.parent = a), n instanceof e.Op || (n = new e.Op.Set(n));
                        var s = !0;
                        n instanceof e.Op.Set && o.isEqual(a.attributes[t], n.value) && (s = !1), s && (delete u[t], 
                        r.silent ? a._silent[t] = !0 : r.changes[t] = !0);
                        var c = o.last(a._opSetQueue);
                        c[t] = n._mergeWithPrevious(c[t]), a._rebuildEstimatedDataForKey(t), s ? (a.changed[t] = a.attributes[t], 
                        r.silent || (a._pending[t] = !0)) : (delete a.changed[t], delete a._pending[t]);
                    }), r.silent || this.change(r), this;
                },
                unset: function(e, t) {
                    return t = t || {}, t.unset = !0, this.set(e, null, t);
                },
                increment: function(t, n) {
                    return (o.isUndefined(n) || o.isNull(n)) && (n = 1), this.set(t, new e.Op.Increment(n));
                },
                add: function(t, n) {
                    return this.set(t, new e.Op.Add(l(n)));
                },
                addUnique: function(t, n) {
                    return this.set(t, new e.Op.AddUnique(l(n)));
                },
                remove: function(t, n) {
                    return this.set(t, new e.Op.Remove(l(n)));
                },
                bitAnd: function(t, n) {
                    return this.set(t, new e.Op.BitAnd(n));
                },
                bitOr: function(t, n) {
                    return this.set(t, new e.Op.BitOr(n));
                },
                bitXor: function(t, n) {
                    return this.set(t, new e.Op.BitXor(n));
                },
                op: function(e) {
                    return o.last(this._opSetQueue)[e];
                },
                clear: function(e) {
                    (e = e || {}).unset = !0;
                    var t = o.extend(this.attributes, this._operations);
                    return this.set(t, e);
                },
                _getSaveJSON: function() {
                    var t = o.clone(o.first(this._opSetQueue));
                    return e._objectEach(t, function(e, n) {
                        t[n] = e.toJSON();
                    }), t;
                },
                _canBeSerialized: function() {
                    return e.Object._canBeSerializedAsValue(this.attributes);
                },
                fetch: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1], n = this;
                    return a("classes", this.className, this.id, "GET", f(e), t).then(function(t) {
                        var r = n.parse(t);
                        return e.keys || n._cleanupUnsetKeys(r), n._finishFetch(r, !0), n;
                    });
                },
                _cleanupUnsetKeys: function(t) {
                    var n = this;
                    e._objectEach(this._serverData, function(e, r) {
                        void 0 === t[r] && delete n._serverData[r];
                    });
                },
                save: function(t, n, r) {
                    var i, s, u;
                    o.isObject(t) || c(t) ? (i = t, u = n) : (i = {}, i[t] = n, u = r), (u = o.clone(u) || {}).wait && (s = o.clone(this.attributes));
                    var l = o.clone(u) || {};
                    l.wait && (l.silent = !0), i && this.set(i, l);
                    var f = this, h = [], d = [];
                    return e.Object._findUnsavedChildren(f, h, d), h.length + d.length > 1 ? e.Object._deepSaveAsync(this, f, u) : (this._startSave(), 
                    this._saving = (this._saving || 0) + 1, this._allPreviousSaves = this._allPreviousSaves || e.Promise.resolve(), 
                    this._allPreviousSaves = this._allPreviousSaves.catch(function(e) {}).then(function() {
                        var e = f.id ? "PUT" : "POST", t = f._getSaveJSON(), n = {};
                        if ((f._fetchWhenSave || u.fetchWhenSave) && (n.new = "true"), u._failOnNotExist && (n.failOnNotExist = "true"), 
                        u.query) {
                            var r;
                            if ("function" == typeof u.query.toJSON && (r = u.query.toJSON()) && (n.where = r.where), 
                            !n.where) throw new Error("options.query is not an AV.Query");
                        }
                        o.extend(t, f._flags);
                        var c = "classes", h = f.className;
                        "_User" !== f.className || f.id || (c = "users", h = null);
                        var d = (u._makeRequest || a)(c, h, f.id, e, t, u, n);
                        return d = d.then(function(e) {
                            var t = f.parse(e);
                            return u.wait && (t = o.extend(i || {}, t)), f._finishSave(t), u.wait && f.set(s, l), 
                            f;
                        }, function(e) {
                            throw f._cancelSave(), e;
                        });
                    }), this._allPreviousSaves);
                },
                destroy: function(e) {
                    e = e || {};
                    var t = this, n = function() {
                        t.trigger("destroy", t, t.collection, e);
                    };
                    return this.id ? (e.wait || n(), a("classes", this.className, this.id, "DELETE", this._flags, e).then(function() {
                        return e.wait && n(), t;
                    })) : n();
                },
                parse: function(t) {
                    var n = o.clone(t);
                    return o([ "createdAt", "updatedAt" ]).each(function(t) {
                        n[t] && (n[t] = e._parseDate(n[t]));
                    }), n.createdAt && !n.updatedAt && (n.updatedAt = n.createdAt), n;
                },
                clone: function() {
                    return new this.constructor(this.attributes);
                },
                isNew: function() {
                    return !this.id;
                },
                change: function(t) {
                    t = t || {};
                    var n = this._changing;
                    this._changing = !0;
                    var r = this;
                    e._objectEach(this._silent, function(e) {
                        r._pending[e] = !0;
                    });
                    var i = o.extend({}, t.changes, this._silent);
                    if (this._silent = {}, e._objectEach(i, function(e, n) {
                        r.trigger("change:" + n, r, r.get(n), t);
                    }), n) return this;
                    for (;!o.isEmpty(this._pending); ) this._pending = {}, this.trigger("change", this, t), 
                    e._objectEach(this.changed, function(e, t) {
                        r._pending[t] || r._silent[t] || delete r.changed[t];
                    }), r._previousAttributes = o.clone(this.attributes);
                    return this._changing = !1, this;
                },
                hasChanged: function(e) {
                    return arguments.length ? this.changed && o.has(this.changed, e) : !o.isEmpty(this.changed);
                },
                changedAttributes: function(t) {
                    if (!t) return !!this.hasChanged() && o.clone(this.changed);
                    var n = {}, r = this._previousAttributes;
                    return e._objectEach(t, function(e, t) {
                        o.isEqual(r[t], e) || (n[t] = e);
                    }), n;
                },
                previous: function(e) {
                    return arguments.length && this._previousAttributes ? this._previousAttributes[e] : null;
                },
                previousAttributes: function() {
                    return o.clone(this._previousAttributes);
                },
                isValid: function() {
                    try {
                        this.validate(this.attributes);
                    } catch (e) {
                        return !1;
                    }
                    return !0;
                },
                validate: function(t) {
                    if (o.has(t, "ACL") && !(t.ACL instanceof e.ACL)) throw new s(s.OTHER_CAUSE, "ACL must be a AV.ACL.");
                },
                _validate: function(e, t) {
                    !t.silent && this.validate && (e = o.extend({}, this.attributes, e), this.validate(e));
                },
                getACL: function() {
                    return this.get("ACL");
                },
                setACL: function(e, t) {
                    return this.set("ACL", e, t);
                },
                disableBeforeHook: function() {
                    this.ignoreHook("beforeSave"), this.ignoreHook("beforeUpdate"), this.ignoreHook("beforeDelete");
                },
                disableAfterHook: function() {
                    this.ignoreHook("afterSave"), this.ignoreHook("afterUpdate"), this.ignoreHook("afterDelete");
                },
                ignoreHook: function(t) {
                    o.contains([ "beforeSave", "afterSave", "beforeUpdate", "afterUpdate", "beforeDelete", "afterDelete" ], t) || console.trace("Unsupported hookName: " + t), 
                    e.hookKey || console.trace("ignoreHook required hookKey"), this._flags.__ignore_hooks || (this._flags.__ignore_hooks = []), 
                    this._flags.__ignore_hooks.push(t);
                }
            }), e.Object.createWithoutData = function(t, n, r) {
                var i = new e.Object(t);
                return i.id = n, i._hasData = r, i;
            }, e.Object.destroyAll = function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!t || 0 === t.length) return e.Promise.resolve();
                var r = o.groupBy(t, function(e) {
                    return JSON.stringify({
                        className: e.className,
                        flags: e._flags
                    });
                }), i = {
                    requests: o.map(r, function(e) {
                        var t = o.map(e, "id").join(",");
                        return {
                            method: "DELETE",
                            path: "/1.1/classes/" + e[0].className + "/" + t,
                            body: e[0]._flags
                        };
                    })
                };
                return a("batch", null, null, "POST", i, n).then(function(e) {
                    var t = o.find(e, function(e) {
                        return !e.success;
                    });
                    if (t) throw new s(t.error.code, t.error.error);
                });
            }, e.Object._getSubclass = function(t) {
                if (!o.isString(t)) throw new Error("AV.Object._getSubclass requires a string argument.");
                var n = e.Object._classMap[t];
                return n || (n = e.Object.extend(t), e.Object._classMap[t] = n), n;
            }, e.Object._create = function(t, n, r) {
                return new (e.Object._getSubclass(t))(n, r);
            }, e.Object._classMap = {}, e.Object._extend = e._extend, e.Object.new = function(t, n) {
                return new e.Object(t, n);
            }, e.Object.extend = function(t, n, r) {
                if (!o.isString(t)) {
                    if (t && o.has(t, "className")) return e.Object.extend(t.className, t, n);
                    throw new Error("AV.Object.extend's first argument should be the className.");
                }
                "User" === t && (t = "_User");
                var i = null;
                if (o.has(e.Object._classMap, t)) {
                    var s = e.Object._classMap[t];
                    if (!n && !r) return s;
                    i = s._extend(n, r);
                } else n = n || {}, n._className = t, i = this._extend(n, r);
                return i.extend = function(n) {
                    if (o.isString(n) || n && o.has(n, "className")) return e.Object.extend.apply(i, arguments);
                    var r = [ t ].concat(o.toArray(arguments));
                    return e.Object.extend.apply(i, r);
                }, Object.defineProperty(i, "query", Object.getOwnPropertyDescriptor(e.Object, "query")), 
                i.new = function(e, t) {
                    return new i(e, t);
                }, e.Object._classMap[t] = i, i;
            }, Object.defineProperty(e.Object.prototype, "className", {
                get: function() {
                    var e = this._className || this.constructor._LCClassName || this.constructor.name;
                    return "User" === e ? "_User" : e;
                }
            }), e.Object.register = function(t, n) {
                if (!(t.prototype instanceof e.Object)) throw new Error("registered class is not a subclass of AV.Object");
                var r = n || t.name;
                if (!r.length) throw new Error("registered class must be named");
                n && (t._LCClassName = n), e.Object._classMap[r] = t;
            }, Object.defineProperty(e.Object, "query", {
                get: function() {
                    return new e.Query(this.prototype.className);
                }
            }), e.Object._findUnsavedChildren = function(t, n, r) {
                e._traverse(t, function(t) {
                    return t instanceof e.Object ? void (t.dirty() && n.push(t)) : t instanceof e.File ? void (t.id || r.push(t)) : void 0;
                });
            }, e.Object._canBeSerializedAsValue = function(t) {
                var n = !0;
                return t instanceof e.Object || t instanceof e.File ? n = !!t.id : o.isArray(t) ? e._arrayEach(t, function(t) {
                    e.Object._canBeSerializedAsValue(t) || (n = !1);
                }) : o.isObject(t) && e._objectEach(t, function(t) {
                    e.Object._canBeSerializedAsValue(t) || (n = !1);
                }), n;
            }, e.Object._deepSaveAsync = function(t, n, r) {
                var i = [], u = [];
                e.Object._findUnsavedChildren(t, i, u);
                var c = e.Promise.resolve();
                o.each(u, function(e) {
                    c = c.then(function() {
                        return e.save();
                    });
                });
                var l = o.uniq(i), f = o.uniq(l);
                return c.then(function() {
                    return e.Promise._continueWhile(function() {
                        return f.length > 0;
                    }, function() {
                        var t = [], n = [];
                        if (e._arrayEach(f, function(e) {
                            t.length > 20 ? n.push(e) : e._canBeSerialized() ? t.push(e) : n.push(e);
                        }), f = n, 0 === t.length) return e.Promise.reject(new s(s.OTHER_CAUSE, "Tried to save a batch with a cycle."));
                        var i = e.Promise.resolve(o.map(t, function(t) {
                            return t._allPreviousSaves || e.Promise.resolve();
                        })).then(function() {
                            return a("batch", null, null, "POST", {
                                requests: o.map(t, function(e) {
                                    var t = e.id ? "PUT" : "POST", n = e._getSaveJSON();
                                    o.extend(n, e._flags);
                                    r = "/classes/" + e.className;
                                    "_User" !== e.className || e.id || (r = "/users");
                                    var r = "/1.1" + r;
                                    return e.id && (r = r + "/" + e.id), e._startSave(), {
                                        method: t,
                                        path: r,
                                        body: n
                                    };
                                })
                            }, r).then(function(e) {
                                var n = o.map(t, function(t, n) {
                                    return e[n].success ? (t._finishSave(t.parse(e[n].success)), t) : (t._cancelSave(), 
                                    new s(e[n].error.code, e[n].error.error));
                                });
                                return g(n);
                            });
                        });
                        return e._arrayEach(t, function(e) {
                            e._allPreviousSaves = i;
                        }), i;
                    });
                }).then(function() {
                    return t;
                });
            };
        };
    }, function(e, t, n) {
        var r = n(0), i = n(4);
        e.exports = function(e) {
            e.Role = e.Object.extend("_Role", {
                constructor: function(t, n) {
                    if (r.isString(t) ? (e.Object.prototype.constructor.call(this, null, null), this.setName(t)) : e.Object.prototype.constructor.call(this, t, n), 
                    n) {
                        if (!(n instanceof e.ACL)) throw new TypeError("acl must be an instance of AV.ACL");
                        this.setACL(n);
                    }
                },
                getName: function() {
                    return this.get("name");
                },
                setName: function(e, t) {
                    return this.set("name", e, t);
                },
                getUsers: function() {
                    return this.relation("users");
                },
                getRoles: function() {
                    return this.relation("roles");
                },
                validate: function(t, n) {
                    if ("name" in t && t.name !== this.getName()) {
                        var o = t.name;
                        if (this.id && this.id !== t.objectId) return new i(i.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
                        if (!r.isString(o)) return new i(i.OTHER_CAUSE, "A role's name must be a String.");
                        if (!/^[0-9a-zA-Z\-_ ]+$/.test(o)) return new i(i.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _, -, and spaces.");
                    }
                    return !!e.Object.prototype.validate && e.Object.prototype.validate.call(this, t, n);
                }
            });
        };
    }, function(e, t, n) {
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var i = n(0), o = n(4), s = n(2), a = s._request, u = s.request, c = n(1), l = function() {
            if ("undefined" == typeof wx || "function" != typeof wx.login) throw new Error("Weapp Login is only available in Weapp");
            return new c(function(e, t) {
                wx.login({
                    success: function(n) {
                        var r = n.code, i = n.errMsg;
                        r ? e(r) : t(new Error(i));
                    },
                    fail: function() {
                        return t(new Error("wx.login 失败"));
                    }
                });
            });
        }, f = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = n.unionIdPlatform, s = void 0 === r ? "weixin" : r, a = n.asMainAccount, u = void 0 !== a && a;
            if ("string" != typeof t) throw new o(o.OTHER_CAUSE, "unionId is not a string");
            if ("string" != typeof s) throw new o(o.OTHER_CAUSE, "unionIdPlatform is not a string");
            return i.extend({}, e, {
                platform: s,
                unionid: t,
                main_account: Boolean(u)
            });
        };
        e.exports = function(e) {
            e.User = e.Object.extend("_User", {
                _isCurrentUser: !1,
                _mergeMagicFields: function(t) {
                    return t.sessionToken && (this._sessionToken = t.sessionToken, delete t.sessionToken), 
                    e.User.__super__._mergeMagicFields.call(this, t);
                },
                _cleanupAuthData: function() {
                    if (this.isCurrent()) {
                        var t = this.get("authData");
                        t && e._objectEach(this.get("authData"), function(e, n) {
                            t[n] || delete t[n];
                        });
                    }
                },
                _synchronizeAllAuthData: function() {
                    if (this.get("authData")) {
                        var t = this;
                        e._objectEach(this.get("authData"), function(e, n) {
                            t._synchronizeAuthData(n);
                        });
                    }
                },
                _synchronizeAuthData: function(t) {
                    if (this.isCurrent()) {
                        var n;
                        i.isString(t) ? (n = t, t = e.User._authProviders[n]) : n = t.getAuthType();
                        var r = this.get("authData");
                        r && t && (t.restoreAuthentication(r[n]) || this.dissociateAuthData(t));
                    }
                },
                _handleSaveResult: function(t) {
                    return t && !e._config.disableCurrentUser && (this._isCurrentUser = !0), this._cleanupAuthData(), 
                    this._synchronizeAllAuthData(), delete this._serverData.password, this._rebuildEstimatedDataForKey("password"), 
                    this._refreshCache(), !t && !this.isCurrent() || e._config.disableCurrentUser ? c.resolve() : c.resolve(e.User._saveCurrentUser(this));
                },
                _linkWith: function(t, n) {
                    var o, s = this, a = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).failOnNotExist, u = void 0 !== a && a;
                    return i.isString(t) ? (o = t, t = e.User._authProviders[t]) : o = t.getAuthType(), 
                    n ? this.save({
                        authData: r({}, o, n)
                    }, {
                        fetchWhenSave: !!this.get("authData"),
                        _failOnNotExist: u
                    }).then(function(e) {
                        return e._handleSaveResult(!0).then(function() {
                            return e;
                        });
                    }) : t.authenticate().then(function(e) {
                        return s._linkWith(t, e);
                    });
                },
                associateWithAuthData: function(e, t) {
                    return this._linkWith(t, e);
                },
                associateWithAuthDataAndUnionId: function(e, t, n, r) {
                    return this._linkWith(t, f(e, n, r));
                },
                linkWithWeapp: function() {
                    var e = this;
                    return l().then(function(t) {
                        return e._linkWith("lc_weapp", {
                            code: t
                        });
                    });
                },
                dissociateAuthData: function(e) {
                    return this.unset("authData." + e), this.save().then(function(e) {
                        return e._handleSaveResult(!0).then(function() {
                            return e;
                        });
                    });
                },
                _unlinkFrom: function(e) {
                    return console.warn("DEPRECATED: User#_unlinkFrom 已废弃，请使用 User#dissociateAuthData 代替"), 
                    this.dissociateAuthData(e);
                },
                _isLinked: function(e) {
                    var t;
                    return t = i.isString(e) ? e : e.getAuthType(), !!(this.get("authData") || {})[t];
                },
                logOut: function() {
                    this._logOutWithAll(), this._isCurrentUser = !1;
                },
                _logOutWithAll: function() {
                    if (this.get("authData")) {
                        var t = this;
                        e._objectEach(this.get("authData"), function(e, n) {
                            t._logOutWith(n);
                        });
                    }
                },
                _logOutWith: function(t) {
                    this.isCurrent() && (i.isString(t) && (t = e.User._authProviders[t]), t && t.deauthenticate && t.deauthenticate());
                },
                signUp: function(e, t) {
                    var n = e && e.username || this.get("username");
                    if (!n || "" === n) throw new o(o.OTHER_CAUSE, "Cannot sign up user with an empty name.");
                    var r = e && e.password || this.get("password");
                    if (!r || "" === r) throw new o(o.OTHER_CAUSE, "Cannot sign up user with an empty password.");
                    return this.save(e, t).then(function(e) {
                        return e._handleSaveResult(!0).then(function() {
                            return e;
                        });
                    });
                },
                signUpOrlogInWithMobilePhone: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e && e.mobilePhoneNumber || this.get("mobilePhoneNumber");
                    if (!n || "" === n) throw new o(o.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber with an empty mobilePhoneNumber.");
                    var r = e && e.smsCode || this.get("smsCode");
                    if (!r || "" === r) throw new o(o.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber  with an empty smsCode.");
                    return t._makeRequest = function(e, t, n, r, i) {
                        return a("usersByMobilePhone", null, null, "POST", i);
                    }, this.save(e, t).then(function(e) {
                        return delete e.attributes.smsCode, delete e._serverData.smsCode, e._handleSaveResult(!0).then(function() {
                            return e;
                        });
                    });
                },
                loginWithAuthData: function(e, t, n) {
                    return this._linkWith(t, e, n);
                },
                loginWithAuthDataAndUnionId: function(e, t, n, r) {
                    return this.loginWithAuthData(f(e, n, r), t, r);
                },
                loginWithWeapp: function(e) {
                    var t = this;
                    return l().then(function(n) {
                        return t.loginWithAuthData({
                            code: n
                        }, "lc_weapp", e);
                    });
                },
                logIn: function() {
                    var e = this;
                    return a("login", null, null, "POST", this.toJSON()).then(function(t) {
                        var n = e.parse(t);
                        return e._finishFetch(n), e._handleSaveResult(!0).then(function() {
                            return n.smsCode || delete e.attributes.smsCode, e;
                        });
                    });
                },
                save: function(t, n, r) {
                    var o, s;
                    return i.isObject(t) || i.isNull(t) || i.isUndefined(t) ? (o = t, s = n) : (o = {}, 
                    o[t] = n, s = r), s = s || {}, e.Object.prototype.save.call(this, o, s).then(function(e) {
                        return e._handleSaveResult(!1).then(function() {
                            return e;
                        });
                    });
                },
                follow: function(t, n) {
                    if (!this.id) throw new Error("Please signin.");
                    var r = void 0, o = void 0;
                    t.user ? (r = t.user, o = t.attributes) : r = t;
                    var s = i.isString(r) ? r : r.id;
                    if (!s) throw new Error("Invalid target user.");
                    var u = "users/" + this.id + "/friendship/" + s;
                    return a(u, null, null, "POST", e._encode(o), n);
                },
                unfollow: function(e, t) {
                    if (!this.id) throw new Error("Please signin.");
                    var n = void 0;
                    n = e.user ? e.user : e;
                    var r = i.isString(n) ? n : n.id;
                    if (!r) throw new Error("Invalid target user.");
                    var o = "users/" + this.id + "/friendship/" + r;
                    return a(o, null, null, "DELETE", null, t);
                },
                followerQuery: function() {
                    return e.User.followerQuery(this.id);
                },
                followeeQuery: function() {
                    return e.User.followeeQuery(this.id);
                },
                fetch: function(t, n) {
                    return e.Object.prototype.fetch.call(this, t, n).then(function(e) {
                        return e._handleSaveResult(!1).then(function() {
                            return e;
                        });
                    });
                },
                updatePassword: function(e, t, n) {
                    var r = "users/" + this.id + "/updatePassword";
                    return a(r, null, null, "PUT", {
                        old_password: e,
                        new_password: t
                    }, n);
                },
                isCurrent: function() {
                    return this._isCurrentUser;
                },
                getUsername: function() {
                    return this.get("username");
                },
                getMobilePhoneNumber: function() {
                    return this.get("mobilePhoneNumber");
                },
                setMobilePhoneNumber: function(e, t) {
                    return this.set("mobilePhoneNumber", e, t);
                },
                setUsername: function(e, t) {
                    return this.set("username", e, t);
                },
                setPassword: function(e, t) {
                    return this.set("password", e, t);
                },
                getEmail: function() {
                    return this.get("email");
                },
                setEmail: function(e, t) {
                    return this.set("email", e, t);
                },
                authenticated: function() {
                    return console.warn("DEPRECATED: 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id。"), 
                    !!this._sessionToken && !e._config.disableCurrentUser && e.User.current() && e.User.current().id === this.id;
                },
                isAuthenticated: function() {
                    var t = this;
                    return c.resolve().then(function() {
                        return !!t._sessionToken && e.User._fetchUserBySessionToken(t._sessionToken).then(function() {
                            return !0;
                        }, function(e) {
                            if (211 === e.code) return !1;
                            throw e;
                        });
                    });
                },
                getSessionToken: function() {
                    return this._sessionToken;
                },
                refreshSessionToken: function(e) {
                    var t = this;
                    return a("users/" + this.id + "/refreshSessionToken", null, null, "PUT", null, e).then(function(e) {
                        return t._finishFetch(e), t._handleSaveResult(!0).then(function() {
                            return t;
                        });
                    });
                },
                getRoles: function(t) {
                    return e.Relation.reverseQuery("_Role", "users", this).find(t);
                }
            }, {
                _currentUser: null,
                _currentUserMatchesDisk: !1,
                _CURRENT_USER_KEY: "currentUser",
                _authProviders: {},
                signUp: function(t, n, r, i) {
                    return r = r || {}, r.username = t, r.password = n, e.Object._create("_User").signUp(r, i);
                },
                logIn: function(t, n) {
                    var r = e.Object._create("_User");
                    return r._finishFetch({
                        username: t,
                        password: n
                    }), r.logIn();
                },
                become: function(e) {
                    return this._fetchUserBySessionToken(e).then(function(e) {
                        return e._handleSaveResult(!0).then(function() {
                            return e;
                        });
                    });
                },
                _fetchUserBySessionToken: function(t) {
                    var n = e.Object._create("_User");
                    return u({
                        method: "GET",
                        path: "/users/me",
                        authOptions: {
                            sessionToken: t
                        }
                    }).then(function(e) {
                        var t = n.parse(e);
                        return n._finishFetch(t), n;
                    });
                },
                logInWithMobilePhoneSmsCode: function(t, n) {
                    var r = e.Object._create("_User");
                    return r._finishFetch({
                        mobilePhoneNumber: t,
                        smsCode: n
                    }), r.logIn();
                },
                signUpOrlogInWithMobilePhone: function(t, n, r, i) {
                    return r = r || {}, r.mobilePhoneNumber = t, r.smsCode = n, e.Object._create("_User").signUpOrlogInWithMobilePhone(r, i);
                },
                logInWithMobilePhone: function(t, n) {
                    var r = e.Object._create("_User");
                    return r._finishFetch({
                        mobilePhoneNumber: t,
                        password: n
                    }), r.logIn();
                },
                loginWithAuthData: function(t, n, r) {
                    return e.User._logInWith(n, t, r);
                },
                signUpOrlogInWithAuthData: function() {
                    return console.warn("DEPRECATED: User.signUpOrlogInWithAuthData 已废弃，请使用 User#loginWithAuthData 代替"), 
                    this.loginWithAuthData.apply(this, arguments);
                },
                loginWithAuthDataAndUnionId: function(e, t, n, r) {
                    return this.loginWithAuthData(f(e, n, r), t, r);
                },
                signUpOrlogInWithAuthDataAndUnionId: function() {
                    return console.warn("DEPRECATED: User.signUpOrlogInWithAuthDataAndUnionId 已废弃，请使用 User#loginWithAuthDataAndUnionId 代替"), 
                    this.loginWithAuthDataAndUnionId.apply(this, arguments);
                },
                loginWithWeapp: function(e) {
                    var t = this;
                    return l().then(function(n) {
                        return t.loginWithAuthData({
                            code: n
                        }, "lc_weapp", e);
                    });
                },
                associateWithAuthData: function(e, t, n) {
                    return console.warn("DEPRECATED: User.associateWithAuthData 已废弃，请使用 User#associateWithAuthData 代替"), 
                    e._linkWith(t, n);
                },
                logOut: function() {
                    return e._config.disableCurrentUser ? (console.warn("AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), 
                    c.resolve(null)) : (null !== e.User._currentUser && (e.User._currentUser._logOutWithAll(), 
                    e.User._currentUser._isCurrentUser = !1), e.User._currentUserMatchesDisk = !0, e.User._currentUser = null, 
                    e.localStorage.removeItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY)).then(function() {
                        return e._refreshSubscriptionId();
                    }));
                },
                followerQuery: function(t) {
                    if (!t || !i.isString(t)) throw new Error("Invalid user object id.");
                    var n = new e.FriendShipQuery("_Follower");
                    return n._friendshipTag = "follower", n.equalTo("user", e.Object.createWithoutData("_User", t)), 
                    n;
                },
                followeeQuery: function(t) {
                    if (!t || !i.isString(t)) throw new Error("Invalid user object id.");
                    var n = new e.FriendShipQuery("_Followee");
                    return n._friendshipTag = "followee", n.equalTo("user", e.Object.createWithoutData("_User", t)), 
                    n;
                },
                requestPasswordReset: function(e) {
                    return a("requestPasswordReset", null, null, "POST", {
                        email: e
                    });
                },
                requestEmailVerify: function(e) {
                    return a("requestEmailVerify", null, null, "POST", {
                        email: e
                    });
                },
                requestMobilePhoneVerify: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {
                        mobilePhoneNumber: e
                    };
                    return t.validateToken && (n.validate_token = t.validateToken), a("requestMobilePhoneVerify", null, null, "POST", n, t);
                },
                requestPasswordResetBySmsCode: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {
                        mobilePhoneNumber: e
                    };
                    return t.validateToken && (n.validate_token = t.validateToken), a("requestPasswordResetBySmsCode", null, null, "POST", n, t);
                },
                resetPasswordBySmsCode: function(e, t) {
                    return a("resetPasswordBySmsCode", null, e, "PUT", {
                        password: t
                    });
                },
                verifyMobilePhone: function(e) {
                    return a("verifyMobilePhone", null, e, "POST", null);
                },
                requestLoginSmsCode: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {
                        mobilePhoneNumber: e
                    };
                    return t.validateToken && (n.validate_token = t.validateToken), a("requestLoginSmsCode", null, null, "POST", n, t);
                },
                currentAsync: function() {
                    return e._config.disableCurrentUser ? (console.warn("AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), 
                    c.resolve(null)) : e.User._currentUser ? c.resolve(e.User._currentUser) : e.User._currentUserMatchesDisk ? c.resolve(e.User._currentUser) : e.localStorage.getItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY)).then(function(t) {
                        if (!t) return null;
                        e.User._currentUserMatchesDisk = !0, e.User._currentUser = e.Object._create("_User"), 
                        e.User._currentUser._isCurrentUser = !0;
                        var n = JSON.parse(t);
                        return e.User._currentUser.id = n._id, delete n._id, e.User._currentUser._sessionToken = n._sessionToken, 
                        delete n._sessionToken, e.User._currentUser._finishFetch(n), e.User._currentUser._synchronizeAllAuthData(), 
                        e.User._currentUser._refreshCache(), e.User._currentUser._opSetQueue = [ {} ], e.User._currentUser;
                    });
                },
                current: function() {
                    if (e._config.disableCurrentUser) return console.warn("AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), 
                    null;
                    if (e.User._currentUser) return e.User._currentUser;
                    if (e.User._currentUserMatchesDisk) return e.User._currentUser;
                    e.User._currentUserMatchesDisk = !0;
                    var t = e.localStorage.getItem(e._getAVPath(e.User._CURRENT_USER_KEY));
                    if (!t) return null;
                    e.User._currentUser = e.Object._create("_User"), e.User._currentUser._isCurrentUser = !0;
                    var n = JSON.parse(t);
                    return e.User._currentUser.id = n._id, delete n._id, e.User._currentUser._sessionToken = n._sessionToken, 
                    delete n._sessionToken, e.User._currentUser._finishFetch(n), e.User._currentUser._synchronizeAllAuthData(), 
                    e.User._currentUser._refreshCache(), e.User._currentUser._opSetQueue = [ {} ], e.User._currentUser;
                },
                _saveCurrentUser: function(t) {
                    return (e.User._currentUser !== t ? e.User.logOut() : c.resolve()).then(function() {
                        t._isCurrentUser = !0, e.User._currentUser = t;
                        var n = t._toFullJSON();
                        return n._id = t.id, n._sessionToken = t._sessionToken, e.localStorage.setItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY), JSON.stringify(n)).then(function() {
                            return e.User._currentUserMatchesDisk = !0, e._refreshSubscriptionId();
                        });
                    });
                },
                _registerAuthenticationProvider: function(t) {
                    e.User._authProviders[t.getAuthType()] = t, !e._config.disableCurrentUser && e.User.current() && e.User.current()._synchronizeAuthData(t.getAuthType());
                },
                _logInWith: function(t, n, r) {
                    return e.Object._create("_User")._linkWith(t, n, r);
                }
            });
        };
    }, function(e, t, n) {
        var r = n(0), i = n(7)("leancloud:query"), o = n(1), s = n(4), a = n(2), u = a._request, c = a.request, l = n(3), f = l.ensureArray, h = l.transformFetchOptions, d = function(e, t) {
            if (void 0 === e) throw new Error(t);
        };
        e.exports = function(e) {
            e.Query = function(t) {
                r.isString(t) && (t = e.Object._getSubclass(t)), this.objectClass = t, this.className = t.prototype.className, 
                this._where = {}, this._include = [], this._select = [], this._limit = -1, this._skip = 0, 
                this._extraOptions = {};
            }, e.Query.or = function() {
                var t = r.toArray(arguments), n = null;
                e._arrayEach(t, function(e) {
                    if (r.isNull(n) && (n = e.className), n !== e.className) throw new Error("All queries must be for the same class");
                });
                var i = new e.Query(n);
                return i._orQuery(t), i;
            }, e.Query.and = function() {
                var t = r.toArray(arguments), n = null;
                e._arrayEach(t, function(e) {
                    if (r.isNull(n) && (n = e.className), n !== e.className) throw new Error("All queries must be for the same class");
                });
                var i = new e.Query(n);
                return i._andQuery(t), i;
            }, e.Query.doCloudQuery = function(t, n, i) {
                var o = {
                    cql: t
                };
                return r.isArray(n) ? o.pvalues = n : i = n, u("cloudQuery", null, null, "GET", o, i).then(function(t) {
                    var n = new e.Query(t.className);
                    return {
                        results: r.map(t.results, function(e) {
                            var r = n._newObject(t);
                            return r._finishFetch && r._finishFetch(n._processResult(e), !0), r;
                        }),
                        count: t.count,
                        className: t.className
                    };
                });
            }, e.Query._extend = e._extend, r.extend(e.Query.prototype, {
                _processResult: function(e) {
                    return e;
                },
                get: function(e, t) {
                    if (!e) throw new s(s.OBJECT_NOT_FOUND, "Object not found.");
                    var n = this._newObject();
                    n.id = e;
                    var i = this.toJSON(), o = {};
                    return i.keys && (o.keys = i.keys), i.include && (o.include = i.include), i.includeACL && (o.includeACL = i.includeACL), 
                    u("classes", this.className, e, "GET", h(o), t).then(function(e) {
                        if (r.isEmpty(e)) throw new s(s.OBJECT_NOT_FOUND, "Object not found.");
                        return n._finishFetch(n.parse(e), !0), n;
                    });
                },
                toJSON: function() {
                    var t = {
                        where: this._where
                    };
                    return this._include.length > 0 && (t.include = this._include.join(",")), this._select.length > 0 && (t.keys = this._select.join(",")), 
                    void 0 !== this._includeACL && (t.returnACL = this._includeACL), this._limit >= 0 && (t.limit = this._limit), 
                    this._skip > 0 && (t.skip = this._skip), void 0 !== this._order && (t.order = this._order), 
                    e._objectEach(this._extraOptions, function(e, n) {
                        t[n] = e;
                    }), t;
                },
                _newObject: function(t) {
                    return t && t.className ? new e.Object(t.className) : new this.objectClass();
                },
                _createRequest: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.toJSON(), t = arguments[1], n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/classes/" + this.className;
                    return encodeURIComponent(JSON.stringify(e)).length > 2e3 ? c({
                        path: "/batch",
                        method: "POST",
                        data: {
                            requests: [ {
                                method: "GET",
                                path: "/1.1" + n,
                                params: e
                            } ]
                        },
                        authOptions: t
                    }).then(function(e) {
                        var t = e[0];
                        if (t.success) return t.success;
                        var n = new Error(t.error.error || "Unknown batch error");
                        throw n.code = t.error.code, n;
                    }) : c({
                        method: "GET",
                        path: n,
                        query: e,
                        authOptions: t
                    });
                },
                _parseResponse: function(e) {
                    var t = this;
                    return r.map(e.results, function(n) {
                        var r = t._newObject(e);
                        return r._finishFetch && r._finishFetch(t._processResult(n), !0), r;
                    });
                },
                find: function(e) {
                    return this._createRequest(void 0, e).then(this._parseResponse.bind(this));
                },
                scan: function() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.orderedBy, s = t.batchSize, a = arguments[1], c = this.toJSON();
                    i("scan %O", c), c.order && (console.warn("The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan."), 
                    delete c.order), c.skip && (console.warn("The skip option of the query is ignored for Query#scan."), 
                    delete c.skip), c.limit && (console.warn("The limit option of the query is ignored for Query#scan."), 
                    delete c.limit), n && (c.scan_key = n), s && (c.limit = s);
                    var l = o.resolve([]), f = void 0, h = !1;
                    return {
                        next: function() {
                            return (l = l.then(function(t) {
                                return h ? [] : t.length > 1 ? t : f || 0 === t.length ? u("scan/classes", e.className, null, "GET", f ? r.extend({}, c, {
                                    cursor: f
                                }) : c, a).then(function(t) {
                                    return f = t.cursor, e._parseResponse(t);
                                }).then(function(e) {
                                    return e.length || (h = !0), t.concat(e);
                                }) : (h = !0, t);
                            })).then(function(e) {
                                return e.shift();
                            }).then(function(e) {
                                return {
                                    value: e,
                                    done: h
                                };
                            });
                        }
                    };
                },
                destroyAll: function(t) {
                    return this.find(t).then(function(n) {
                        return e.Object.destroyAll(n, t);
                    });
                },
                count: function(e) {
                    var t = this.toJSON();
                    return t.limit = 0, t.count = 1, this._createRequest(t, e).then(function(e) {
                        return e.count;
                    });
                },
                first: function(e) {
                    var t = this, n = this.toJSON();
                    return n.limit = 1, this._createRequest(n, e).then(function(e) {
                        return r.map(e.results, function(e) {
                            var n = t._newObject();
                            return n._finishFetch && n._finishFetch(t._processResult(e), !0), n;
                        })[0];
                    });
                },
                skip: function(e) {
                    return d(e, "undefined is not a valid skip value"), this._skip = e, this;
                },
                limit: function(e) {
                    return d(e, "undefined is not a valid limit value"), this._limit = e, this;
                },
                equalTo: function(t, n) {
                    return d(t, "undefined is not a valid key"), d(n, "undefined is not a valid value"), 
                    this._where[t] = e._encode(n), this;
                },
                _addCondition: function(t, n, r) {
                    return d(t, "undefined is not a valid condition key"), d(n, "undefined is not a valid condition"), 
                    d(r, "undefined is not a valid condition value"), this._where[t] || (this._where[t] = {}), 
                    this._where[t][n] = e._encode(r), this;
                },
                sizeEqualTo: function(e, t) {
                    return this._addCondition(e, "$size", t), this;
                },
                notEqualTo: function(e, t) {
                    return this._addCondition(e, "$ne", t), this;
                },
                lessThan: function(e, t) {
                    return this._addCondition(e, "$lt", t), this;
                },
                greaterThan: function(e, t) {
                    return this._addCondition(e, "$gt", t), this;
                },
                lessThanOrEqualTo: function(e, t) {
                    return this._addCondition(e, "$lte", t), this;
                },
                greaterThanOrEqualTo: function(e, t) {
                    return this._addCondition(e, "$gte", t), this;
                },
                containedIn: function(e, t) {
                    return this._addCondition(e, "$in", t), this;
                },
                notContainedIn: function(e, t) {
                    return this._addCondition(e, "$nin", t), this;
                },
                containsAll: function(e, t) {
                    return this._addCondition(e, "$all", t), this;
                },
                exists: function(e) {
                    return this._addCondition(e, "$exists", !0), this;
                },
                doesNotExist: function(e) {
                    return this._addCondition(e, "$exists", !1), this;
                },
                matches: function(e, t, n) {
                    return this._addCondition(e, "$regex", t), n || (n = ""), t.ignoreCase && (n += "i"), 
                    t.multiline && (n += "m"), n && n.length && this._addCondition(e, "$options", n), 
                    this;
                },
                matchesQuery: function(e, t) {
                    var n = t.toJSON();
                    return n.className = t.className, this._addCondition(e, "$inQuery", n), this;
                },
                doesNotMatchQuery: function(e, t) {
                    var n = t.toJSON();
                    return n.className = t.className, this._addCondition(e, "$notInQuery", n), this;
                },
                matchesKeyInQuery: function(e, t, n) {
                    var r = n.toJSON();
                    return r.className = n.className, this._addCondition(e, "$select", {
                        key: t,
                        query: r
                    }), this;
                },
                doesNotMatchKeyInQuery: function(e, t, n) {
                    var r = n.toJSON();
                    return r.className = n.className, this._addCondition(e, "$dontSelect", {
                        key: t,
                        query: r
                    }), this;
                },
                _orQuery: function(e) {
                    var t = r.map(e, function(e) {
                        return e.toJSON().where;
                    });
                    return this._where.$or = t, this;
                },
                _andQuery: function(e) {
                    var t = r.map(e, function(e) {
                        return e.toJSON().where;
                    });
                    return this._where.$and = t, this;
                },
                _quote: function(e) {
                    return "\\Q" + e.replace("\\E", "\\E\\\\E\\Q") + "\\E";
                },
                contains: function(e, t) {
                    return this._addCondition(e, "$regex", this._quote(t)), this;
                },
                startsWith: function(e, t) {
                    return this._addCondition(e, "$regex", "^" + this._quote(t)), this;
                },
                endsWith: function(e, t) {
                    return this._addCondition(e, "$regex", this._quote(t) + "$"), this;
                },
                ascending: function(e) {
                    return d(e, "undefined is not a valid key"), this._order = e, this;
                },
                addAscending: function(e) {
                    return d(e, "undefined is not a valid key"), this._order ? this._order += "," + e : this._order = e, 
                    this;
                },
                descending: function(e) {
                    return d(e, "undefined is not a valid key"), this._order = "-" + e, this;
                },
                addDescending: function(e) {
                    return d(e, "undefined is not a valid key"), this._order ? this._order += ",-" + e : this._order = "-" + e, 
                    this;
                },
                near: function(t, n) {
                    return n instanceof e.GeoPoint || (n = new e.GeoPoint(n)), this._addCondition(t, "$nearSphere", n), 
                    this;
                },
                withinRadians: function(e, t, n) {
                    return this.near(e, t), this._addCondition(e, "$maxDistance", n), this;
                },
                withinMiles: function(e, t, n) {
                    return this.withinRadians(e, t, n / 3958.8);
                },
                withinKilometers: function(e, t, n) {
                    return this.withinRadians(e, t, n / 6371);
                },
                withinGeoBox: function(t, n, r) {
                    return n instanceof e.GeoPoint || (n = new e.GeoPoint(n)), r instanceof e.GeoPoint || (r = new e.GeoPoint(r)), 
                    this._addCondition(t, "$within", {
                        $box: [ n, r ]
                    }), this;
                },
                include: function(e) {
                    var t = this;
                    return d(e, "undefined is not a valid key"), r(arguments).forEach(function(e) {
                        t._include = t._include.concat(f(e));
                    }), this;
                },
                includeACL: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return this._includeACL = e, this;
                },
                select: function(e) {
                    var t = this;
                    return d(e, "undefined is not a valid key"), r(arguments).forEach(function(e) {
                        t._select = t._select.concat(f(e));
                    }), this;
                },
                each: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this._order || this._skip || this._limit >= 0) {
                        var i = new Error("Cannot iterate on a query with sort, skip, or limit.");
                        return e.Promise.reject(i);
                    }
                    var o = new e.Query(this.objectClass);
                    o._limit = n.batchSize || 100, o._where = r.clone(this._where), o._include = r.clone(this._include), 
                    o.ascending("objectId");
                    var s = !1;
                    return e.Promise._continueWhile(function() {
                        return !s;
                    }, function() {
                        return o.find(n).then(function(n) {
                            var i = e.Promise.resolve();
                            return r.each(n, function(e) {
                                i = i.then(function() {
                                    return t(e);
                                });
                            }), i.then(function() {
                                n.length >= o._limit ? o.greaterThan("objectId", n[n.length - 1].id) : s = !0;
                            });
                        });
                    });
                },
                subscribe: function(t) {
                    return e.LiveQuery.init(this, t);
                }
            }), e.FriendShipQuery = e.Query._extend({
                _objectClass: e.User,
                _newObject: function() {
                    return new e.User();
                },
                _processResult: function(e) {
                    if (e && e[this._friendshipTag]) {
                        var t = e[this._friendshipTag];
                        return "Pointer" === t.__type && "_User" === t.className && (delete t.__type, delete t.className), 
                        t;
                    }
                    return null;
                }
            });
        };
    }, function(e, t, n) {
        var r = n(0), i = n(65), o = n(1), s = n(3).inherits, a = n(2).request, u = function(e, t) {
            return a({
                method: "POST",
                path: "/LiveQuery/subscribe",
                data: {
                    query: e,
                    id: t
                }
            });
        };
        e.exports = function(e) {
            e.LiveQuery = s(i, {
                constructor: function(e, t, n, r) {
                    var o = this;
                    i.apply(this), this.id = e, this._client = t, this._client.register(this), this._queryJSON = n, 
                    this._subscriptionId = r, this._onMessage = this._dispatch.bind(this), this._onReconnect = function() {
                        u(o._queryJSON, o._subscriptionId).catch(function(e) {
                            return console.error("LiveQuery resubscribe error: " + e.message);
                        });
                    }, t.on("message", this._onMessage), t.on("reconnect", this._onReconnect);
                },
                _dispatch: function(t) {
                    var n = this;
                    t.forEach(function(t) {
                        var i = t.op, o = t.object, s = t.query_id, a = t.updatedKeys;
                        if (s === n.id) {
                            var u = e.parseJSON(r.extend({
                                __type: "_File" === o.className ? "File" : "Object"
                            }, o));
                            a ? n.emit(i, u, a) : n.emit(i, u);
                        }
                    });
                },
                unsubscribe: function() {
                    var e = this._client;
                    return e.off("message", this._onMessage), e.off("reconnect", this._onReconnect), 
                    e.deregister(this), a({
                        method: "POST",
                        path: "/LiveQuery/unsubscribe",
                        data: {
                            id: e.id,
                            query_id: this.id
                        }
                    });
                }
            }, {
                init: function(t) {
                    var n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).subscriptionId, r = void 0 === n ? e._getSubscriptionId() : n;
                    if (!e._config.realtime) throw new Error("LiveQuery not supported. Please use the LiveQuery bundle. https://url.leanapp.cn/enable-live-query");
                    if (!(t instanceof e.Query)) throw new TypeError("LiveQuery must be inited with a Query");
                    return o.resolve(r).then(function(n) {
                        return e._config.realtime.createLiveQueryClient(n).then(function(r) {
                            var i = t.toJSON(), o = {
                                where: i.where,
                                keys: i.keys,
                                returnACL: i.returnACL,
                                className: t.className
                            }, s = u(o, n).then(function(t) {
                                var i = t.query_id;
                                return new e.LiveQuery(i, r, o, n);
                            }).finally(function() {
                                r.deregister(s);
                            });
                            return r.register(s), s;
                        });
                    });
                }
            });
        };
    }, function(e, t, n) {
        function r() {}
        function i(e, t, n) {
            this.fn = e, this.context = t, this.once = n || !1;
        }
        function o() {
            this._events = new r(), this._eventsCount = 0;
        }
        var s = Object.prototype.hasOwnProperty, a = "~";
        Object.create && (r.prototype = Object.create(null), new r().__proto__ || (a = !1)), 
        o.prototype.eventNames = function() {
            var e, t, n = [];
            if (0 === this._eventsCount) return n;
            for (t in e = this._events) s.call(e, t) && n.push(a ? t.slice(1) : t);
            return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n;
        }, o.prototype.listeners = function(e, t) {
            var n = a ? a + e : e, r = this._events[n];
            if (t) return !!r;
            if (!r) return [];
            if (r.fn) return [ r.fn ];
            for (var i = 0, o = r.length, s = new Array(o); i < o; i++) s[i] = r[i].fn;
            return s;
        }, o.prototype.emit = function(e, t, n, r, i, o) {
            var s = a ? a + e : e;
            if (!this._events[s]) return !1;
            var u, c, l = this._events[s], f = arguments.length;
            if (l.fn) {
                switch (l.once && this.removeListener(e, l.fn, void 0, !0), f) {
                  case 1:
                    return l.fn.call(l.context), !0;

                  case 2:
                    return l.fn.call(l.context, t), !0;

                  case 3:
                    return l.fn.call(l.context, t, n), !0;

                  case 4:
                    return l.fn.call(l.context, t, n, r), !0;

                  case 5:
                    return l.fn.call(l.context, t, n, r, i), !0;

                  case 6:
                    return l.fn.call(l.context, t, n, r, i, o), !0;
                }
                for (c = 1, u = new Array(f - 1); c < f; c++) u[c - 1] = arguments[c];
                l.fn.apply(l.context, u);
            } else {
                var h, d = l.length;
                for (c = 0; c < d; c++) switch (l[c].once && this.removeListener(e, l[c].fn, void 0, !0), 
                f) {
                  case 1:
                    l[c].fn.call(l[c].context);
                    break;

                  case 2:
                    l[c].fn.call(l[c].context, t);
                    break;

                  case 3:
                    l[c].fn.call(l[c].context, t, n);
                    break;

                  case 4:
                    l[c].fn.call(l[c].context, t, n, r);
                    break;

                  default:
                    if (!u) for (h = 1, u = new Array(f - 1); h < f; h++) u[h - 1] = arguments[h];
                    l[c].fn.apply(l[c].context, u);
                }
            }
            return !0;
        }, o.prototype.on = function(e, t, n) {
            var r = new i(t, n || this), o = a ? a + e : e;
            return this._events[o] ? this._events[o].fn ? this._events[o] = [ this._events[o], r ] : this._events[o].push(r) : (this._events[o] = r, 
            this._eventsCount++), this;
        }, o.prototype.once = function(e, t, n) {
            var r = new i(t, n || this, !0), o = a ? a + e : e;
            return this._events[o] ? this._events[o].fn ? this._events[o] = [ this._events[o], r ] : this._events[o].push(r) : (this._events[o] = r, 
            this._eventsCount++), this;
        }, o.prototype.removeListener = function(e, t, n, i) {
            var o = a ? a + e : e;
            if (!this._events[o]) return this;
            if (!t) return 0 == --this._eventsCount ? this._events = new r() : delete this._events[o], 
            this;
            var s = this._events[o];
            if (s.fn) s.fn !== t || i && !s.once || n && s.context !== n || (0 == --this._eventsCount ? this._events = new r() : delete this._events[o]); else {
                for (var u = 0, c = [], l = s.length; u < l; u++) (s[u].fn !== t || i && !s[u].once || n && s[u].context !== n) && c.push(s[u]);
                c.length ? this._events[o] = 1 === c.length ? c[0] : c : 0 == --this._eventsCount ? this._events = new r() : delete this._events[o];
            }
            return this;
        }, o.prototype.removeAllListeners = function(e) {
            var t;
            return e ? (t = a ? a + e : e, this._events[t] && (0 == --this._eventsCount ? this._events = new r() : delete this._events[t])) : (this._events = new r(), 
            this._eventsCount = 0), this;
        }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, 
        o.prototype.setMaxListeners = function() {
            return this;
        }, o.prefixed = a, o.EventEmitter = o, e.exports = o;
    }, function(e, t, n) {
        var r = n(0), i = n(3).tap;
        e.exports = function(e) {
            e.Captcha = function(e, t) {
                this._options = e, this._authOptions = t, this.url = void 0, this.captchaToken = void 0, 
                this.validateToken = void 0;
            }, e.Captcha.prototype.refresh = function() {
                var t = this;
                return e.Cloud._requestCaptcha(this._options, this._authOptions).then(function(e) {
                    var n = e.captchaToken, i = e.url;
                    return r.extend(t, {
                        captchaToken: n,
                        url: i
                    }), i;
                });
            }, e.Captcha.prototype.verify = function(t) {
                var n = this;
                return e.Cloud.verifyCaptcha(t, this.captchaToken).then(i(function(e) {
                    return n.validateToken = e;
                }));
            }, e.Captcha.request = function(t, n) {
                var r = new e.Captcha(t, n);
                return r.refresh().then(function() {
                    return r;
                });
            };
        };
    }, function(e, t, n) {
        var r = n(0), i = n(2), o = i._request, s = i.request, a = n(1);
        e.exports = function(e) {
            e.Cloud = e.Cloud || {}, r.extend(e.Cloud, {
                run: function(t, n, r) {
                    return s({
                        service: "engine",
                        method: "POST",
                        path: "/functions/" + t,
                        data: e._encode(n, null, !0),
                        authOptions: r
                    }).then(function(t) {
                        return e._decode(t).result;
                    });
                },
                rpc: function(t, n, i) {
                    return r.isArray(n) ? a.reject(new Error("Can't pass Array as the param of rpc function in JavaScript SDK.")) : s({
                        service: "engine",
                        method: "POST",
                        path: "/call/" + t,
                        data: e._encodeObjectOrArray(n),
                        authOptions: i
                    }).then(function(t) {
                        return e._decode(t).result;
                    });
                },
                getServerDate: function() {
                    return o("date", null, null, "GET").then(function(t) {
                        return e._decode(t);
                    });
                },
                requestSmsCode: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (r.isString(e) && (e = {
                        mobilePhoneNumber: e
                    }), !e.mobilePhoneNumber) throw new Error("Missing mobilePhoneNumber.");
                    return t.validateToken && (e = r.extend({}, e, {
                        validate_token: t.validateToken
                    })), o("requestSmsCode", null, null, "POST", e, t);
                },
                verifySmsCode: function(e, t) {
                    if (!e) throw new Error("Missing sms code.");
                    var n = {};
                    return r.isString(t) && (n.mobilePhoneNumber = t), o("verifySmsCode", e, null, "POST", n);
                },
                _requestCaptcha: function(e, t) {
                    return o("requestCaptcha", null, null, "GET", e, t).then(function(e) {
                        var t = e.captcha_url;
                        return {
                            captchaToken: e.captcha_token,
                            url: t
                        };
                    });
                },
                requestCaptcha: e.Captcha.request,
                verifyCaptcha: function(e, t) {
                    return o("verifyCaptcha", null, null, "POST", {
                        captcha_code: e,
                        captcha_token: t
                    }).then(function(e) {
                        return e.validate_token;
                    });
                }
            });
        };
    }, function(e, t, n) {
        var r = n(2).request;
        e.exports = function(e) {
            e.Installation = e.Object.extend("_Installation"), e.Push = e.Push || {}, e.Push.send = function(e, t) {
                if (e.where && (e.where = e.where.toJSON().where), e.where && e.cql) throw new Error("Both where and cql can't be set");
                if (e.push_time && (e.push_time = e.push_time.toJSON()), e.expiration_time && (e.expiration_time = e.expiration_time.toJSON()), 
                e.expiration_time && e.expiration_time_interval) throw new Error("Both expiration_time and expiration_time_interval can't be set");
                return r({
                    service: "push",
                    method: "POST",
                    path: "/push",
                    data: e,
                    authOptions: t
                });
            };
        };
    }, function(e, t, n) {
        var i = "function" == typeof Symbol && "symbol" == r(Symbol.iterator) ? function(e) {
            return void 0 === e ? "undefined" : r(e);
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : r(e);
        }, o = n(0), s = n(1), a = n(2)._request, u = n(3).getSessionToken;
        e.exports = function(e) {
            var t = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return u(t) ? e.User._fetchUserBySessionToken(u(t)) : e.User.currentAsync();
            }, n = function(n) {
                return t(n).then(function(t) {
                    return e.Object.createWithoutData("_User", t.id)._toPointer();
                });
            };
            e.Status = function(e, t) {
                return this.data = {}, this.inboxType = "default", this.query = null, e && "object" === (void 0 === e ? "undefined" : i(e)) ? this.data = e : (e && (this.data.image = e), 
                t && (this.data.message = t)), this;
            }, o.extend(e.Status.prototype, {
                get: function(e) {
                    return this.data[e];
                },
                set: function(e, t) {
                    return this.data[e] = t, this;
                },
                destroy: function(t) {
                    return this.id ? a("statuses", null, this.id, "DELETE", t) : e.Promise.reject(new Error("The status id is not exists."));
                },
                toObject: function() {
                    return this.id ? e.Object.createWithoutData("_Status", this.id) : null;
                },
                _getDataJSON: function() {
                    var t = o.clone(this.data);
                    return e._encode(t);
                },
                send: function() {
                    var t = this, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!u(r) && !e.User.current()) throw new Error("Please signin an user.");
                    return this.query ? n(r).then(function(e) {
                        var n = t.query.toJSON();
                        n.className = t.query.className;
                        var i = {};
                        return i.query = n, t.data = t.data || {}, t.data.source = t.data.source || e, i.data = t._getDataJSON(), 
                        i.inboxType = t.inboxType || "default", a("statuses", null, null, "POST", i, r);
                    }).then(function(n) {
                        return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t;
                    }) : e.Status.sendStatusToFollowers(this, r);
                },
                _finishFetch: function(t) {
                    this.id = t.objectId, this.createdAt = e._parseDate(t.createdAt), this.updatedAt = e._parseDate(t.updatedAt), 
                    this.messageId = t.messageId, delete t.messageId, delete t.objectId, delete t.createdAt, 
                    delete t.updatedAt, this.data = e._decode(t);
                }
            }), e.Status.sendStatusToFollowers = function(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!u(r) && !e.User.current()) throw new Error("Please signin an user.");
                return n(r).then(function(n) {
                    var i = {};
                    i.className = "_Follower", i.keys = "follower", i.where = {
                        user: n
                    };
                    var o = {};
                    return o.query = i, t.data = t.data || {}, t.data.source = t.data.source || n, o.data = t._getDataJSON(), 
                    o.inboxType = t.inboxType || "default", a("statuses", null, null, "POST", o, r).then(function(n) {
                        return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t;
                    });
                });
            }, e.Status.sendPrivateStatus = function(t, r) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!u(i) && !e.User.current()) throw new Error("Please signin an user.");
                if (!r) throw new Error("Invalid target user.");
                var s = o.isString(r) ? r : r.id;
                if (!s) throw new Error("Invalid target user.");
                return n(i).then(function(n) {
                    var r = {};
                    r.className = "_User", r.where = {
                        objectId: s
                    };
                    var o = {};
                    return o.query = r, t.data = t.data || {}, t.data.source = t.data.source || n, o.data = t._getDataJSON(), 
                    o.inboxType = "private", t.inboxType = "private", a("statuses", null, null, "POST", o, i).then(function(n) {
                        return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t;
                    });
                });
            }, e.Status.countUnreadStatuses = function(n) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default", i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (o.isString(r) || (i = r), !u(i) && null == n && !e.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
                return s.resolve(n || t(i)).then(function(t) {
                    var n = {};
                    return n.inboxType = e._encode(r), n.owner = e._encode(t), a("subscribe/statuses/count", null, null, "GET", n, i);
                });
            }, e.Status.resetUnreadCount = function(n) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default", i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (o.isString(r) || (i = r), !u(i) && null == n && !e.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
                return s.resolve(n || t(i)).then(function(t) {
                    var n = {};
                    return n.inboxType = e._encode(r), n.owner = e._encode(t), a("subscribe/statuses/resetUnreadCount", null, null, "POST", n, i);
                });
            }, e.Status.statusQuery = function(t) {
                var n = new e.Query("_Status");
                return t && n.equalTo("source", t), n;
            }, e.InboxQuery = e.Query._extend({
                _objectClass: e.Status,
                _sinceId: 0,
                _maxId: 0,
                _inboxType: "default",
                _owner: null,
                _newObject: function() {
                    return new e.Status();
                },
                _createRequest: function(t, n) {
                    return e.InboxQuery.__super__._createRequest.call(this, t, n, "/subscribe/statuses");
                },
                sinceId: function(e) {
                    return this._sinceId = e, this;
                },
                maxId: function(e) {
                    return this._maxId = e, this;
                },
                owner: function(e) {
                    return this._owner = e, this;
                },
                inboxType: function(e) {
                    return this._inboxType = e, this;
                },
                toJSON: function() {
                    var t = e.InboxQuery.__super__.toJSON.call(this);
                    return t.owner = e._encode(this._owner), t.inboxType = e._encode(this._inboxType), 
                    t.sinceId = e._encode(this._sinceId), t.maxId = e._encode(this._maxId), t;
                }
            }), e.Status.inboxQuery = function(t, n) {
                var r = new e.InboxQuery(e.Status);
                return t && (r._owner = t), n && (r._inboxType = n), r;
            };
        };
    }, function(e, t, n) {
        var r = n(0), i = n(2)._request;
        e.exports = function(e) {
            e.SearchSortBuilder = function() {
                this._sortFields = [];
            }, r.extend(e.SearchSortBuilder.prototype, {
                _addField: function(e, t, n, r) {
                    var i = {};
                    return i[e] = {
                        order: t || "asc",
                        mode: n || "avg",
                        missing: "_" + (r || "last")
                    }, this._sortFields.push(i), this;
                },
                ascending: function(e, t, n) {
                    return this._addField(e, "asc", t, n);
                },
                descending: function(e, t, n) {
                    return this._addField(e, "desc", t, n);
                },
                whereNear: function(e, t, n) {
                    n = n || {};
                    var r = {}, i = {
                        lat: t.latitude,
                        lon: t.longitude
                    }, o = {
                        order: n.order || "asc",
                        mode: n.mode || "avg",
                        unit: n.unit || "km"
                    };
                    return o[e] = i, r._geo_distance = o, this._sortFields.push(r), this;
                },
                build: function() {
                    return JSON.stringify(e._encode(this._sortFields));
                }
            }), e.SearchQuery = e.Query._extend({
                _sid: null,
                _hits: 0,
                _queryString: null,
                _highlights: null,
                _sortBuilder: null,
                _createRequest: function(e, t) {
                    return i("search/select", null, null, "GET", e || this.toJSON(), t);
                },
                sid: function(e) {
                    return this._sid = e, this;
                },
                queryString: function(e) {
                    return this._queryString = e, this;
                },
                highlights: function(e) {
                    var t;
                    return t = e && r.isString(e) ? arguments : e, this._highlights = t, this;
                },
                sortBy: function(e) {
                    return this._sortBuilder = e, this;
                },
                hits: function() {
                    return this._hits || (this._hits = 0), this._hits;
                },
                _processResult: function(e) {
                    return delete e.className, delete e._app_url, delete e._deeplink, e;
                },
                hasMore: function() {
                    return !this._hitEnd;
                },
                reset: function() {
                    this._hitEnd = !1, this._sid = null, this._hits = 0;
                },
                find: function() {
                    var e = this;
                    return this._createRequest().then(function(t) {
                        return t.sid ? (e._oldSid = e._sid, e._sid = t.sid) : (e._sid = null, e._hitEnd = !0), 
                        e._hits = t.hits || 0, r.map(t.results, function(n) {
                            n.className && (t.className = n.className);
                            var r = e._newObject(t);
                            return r.appURL = n._app_url, r._finishFetch(e._processResult(n), !0), r;
                        });
                    });
                },
                toJSON: function() {
                    var t = e.SearchQuery.__super__.toJSON.call(this);
                    if (delete t.where, this.className && (t.clazz = this.className), this._sid && (t.sid = this._sid), 
                    !this._queryString) throw new Error("Please set query string.");
                    if (t.q = this._queryString, this._highlights && (t.highlights = this._highlights.join(",")), 
                    this._sortBuilder && t.order) throw new Error("sort and order can not be set at same time.");
                    return this._sortBuilder && (t.sort = this._sortBuilder.build()), t;
                }
            });
        };
    }, function(e, t, n) {
        var r = n(0), i = n(4), o = n(2).request;
        e.exports = function(e) {
            e.Insight = e.Insight || {}, r.extend(e.Insight, {
                startJob: function(t, n) {
                    if (!t || !t.sql) throw new Error("Please provide the sql to run the job.");
                    var r = {
                        jobConfig: t,
                        appId: e.applicationId
                    };
                    return o({
                        path: "/bigquery/jobs",
                        method: "POST",
                        data: e._encode(r, null, !0),
                        authOptions: n,
                        signKey: !1
                    }).then(function(t) {
                        return e._decode(t).id;
                    });
                },
                on: function(e, t) {}
            }), e.Insight.JobQuery = function(e, t) {
                if (!e) throw new Error("Please provide the job id.");
                this.id = e, this.className = t, this._skip = 0, this._limit = 100;
            }, r.extend(e.Insight.JobQuery.prototype, {
                skip: function(e) {
                    return this._skip = e, this;
                },
                limit: function(e) {
                    return this._limit = e, this;
                },
                find: function(t) {
                    var n = {
                        skip: this._skip,
                        limit: this._limit
                    };
                    return o({
                        path: "/bigquery/jobs/" + this.id,
                        method: "GET",
                        query: n,
                        authOptions: t,
                        signKey: !1
                    }).then(function(t) {
                        return t.error ? e.Promise.reject(new i(t.code, t.error)) : e.Promise.resolve(t);
                    });
                }
            });
        };
    }, function(e, t, n) {
        var r = n(0), i = n(2)._request, o = n(6), s = function(e) {
            return "function" == typeof e.toJSON ? e.toJSON() : "string" != typeof e ? JSON.stringify(e) : e;
        };
        e.exports = o.Object.extend("_Conversation", {
            constructor: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                o.Object.prototype.constructor.call(this, null, null), this.set("name", e), void 0 !== t.isSystem && this.set("sys", !!t.isSystem), 
                void 0 !== t.isTransient && this.set("tr", !!t.isTransient);
            },
            getCreator: function() {
                return this.get("c");
            },
            getLastMessageAt: function() {
                return this.get("lm");
            },
            getMembers: function() {
                return this.get("m");
            },
            addMember: function(e) {
                return this.add("m", e);
            },
            getMutedMembers: function() {
                return this.get("mu");
            },
            getName: function() {
                return this.get("name");
            },
            isTransient: function() {
                return this.get("tr");
            },
            isSystem: function() {
                return this.get("sys");
            },
            send: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = {
                    from_peer: e,
                    conv_id: this.id,
                    transient: !1,
                    message: s(t)
                };
                return void 0 !== n.toClients && (o.to_peers = n.toClients), void 0 !== n.transient && (o.transient = !!n.transient), 
                void 0 !== n.pushData && (o.push_data = n.pushData), i("rtm", "messages", null, "POST", o, r);
            },
            broadcast: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, a = {
                    from_peer: e,
                    conv_id: this.id,
                    message: s(t)
                };
                if (void 0 !== n.pushData && (a.push = n.pushData), void 0 !== n.validTill) {
                    var u = n.validTill;
                    r.isDate(u) && (u = u.getTime()), n.valid_till = u;
                }
                return i("rtm", "broadcast", null, "POST", a, o);
            }
        });
    }, function(e, t, n) {
        function r(e) {
            var t = e.name, n = e.value, r = e.version;
            this.name = t, this.value = n, this.version = r;
        }
        var i = n(0), o = n(1), s = n(2).request, a = n(3), u = a.ensureArray, c = a.parseDate, l = n(6);
        l.LeaderboardVersionChangeInterval = {
            NEVER: "never",
            HOUR: "hour",
            DAY: "day",
            WEEK: "week",
            MONTH: "month"
        }, l.LeaderboardOrder = {
            ASCENDING: "ascending",
            DESCENDING: "descending"
        }, l.LeaderboardUpdateStrategy = {
            BETTER: "better",
            LAST: "last"
        };
        var f = function(e) {
            var t = l._decode(e);
            return new r({
                name: t.statisticName,
                value: t.statisticValue,
                version: t.version
            });
        };
        l.Leaderboard = function(e) {
            this.statisticName = e, this.order = void 0, this.updateStrategy = void 0, this.versionChangeInterval = void 0, 
            this.version = void 0, this.nextResetAt = void 0, this.createdAt = void 0;
        };
        var h = l.Leaderboard;
        l.Leaderboard.createWithoutData = function(e) {
            return new h(e);
        }, l.Leaderboard.createLeaderboard = function(e, t) {
            var n = e.statisticName, r = e.order, i = e.versionChangeInterval, o = e.updateStrategy;
            return s({
                method: "POST",
                path: "/leaderboard/leaderboards",
                data: {
                    statisticName: n,
                    order: r,
                    versionChangeInterval: i,
                    updateStrategy: o
                },
                authOptions: t
            }).then(function(e) {
                return new h(n)._finishFetch(e);
            });
        }, l.Leaderboard.getLeaderboard = function(e, t) {
            return h.createWithoutData(e).fetch(t);
        }, l.Leaderboard.getStatistics = function(e) {
            var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).statisticNames, n = arguments[2];
            return o.resolve().then(function() {
                if (!e || !e.id) throw new Error("user must be an AV.User");
                return s({
                    method: "GET",
                    path: "/leaderboard/users/" + e.id + "/statistics",
                    query: {
                        statistics: t ? u(t).join(",") : void 0
                    },
                    authOptions: n
                }).then(function(e) {
                    return e.results.map(f);
                });
            });
        }, l.Leaderboard.updateStatistics = function(e, t, n) {
            return o.resolve().then(function() {
                if (!e || !e.id) throw new Error("user must be an AV.User");
                var r = i.map(t, function(e, t) {
                    return {
                        statisticName: t,
                        statisticValue: e
                    };
                });
                return s({
                    method: "POST",
                    path: "/leaderboard/users/" + e.id + "/statistics",
                    data: r,
                    authOptions: n
                }).then(function(e) {
                    return e.results.map(f);
                });
            });
        }, i.extend(h.prototype, {
            _finishFetch: function(e) {
                var t = this;
                return i.forEach(e, function(e, n) {
                    "updatedAt" !== n && "objectId" !== n && ("expiredAt" === n && (n = "nextResetAt"), 
                    "createdAt" === n && (e = c(e)), e && "Date" === e.__type && (e = c(e.iso)), t[n] = e);
                }), this;
            },
            fetch: function(e) {
                var t = this;
                return s({
                    method: "GET",
                    path: "/leaderboard/leaderboards/" + this.statisticName,
                    authOptions: e
                }).then(function(e) {
                    return t._finishFetch(e);
                });
            },
            _getResults: function(e, t, n) {
                var r = e.skip, i = e.limit, o = e.selectUserKeys, a = e.includeStatistics;
                return s({
                    method: "GET",
                    path: "/leaderboard/leaderboards/" + this.statisticName + "/ranks" + (n ? "/self" : ""),
                    query: {
                        skip: r,
                        limit: i,
                        includeUser: o ? u(o).join(",") : void 0,
                        includeStatistics: a ? u(a).join(",") : void 0
                    },
                    authOptions: t
                }).then(function(e) {
                    return e.results.map(function(e) {
                        var t = l._decode(e), n = t.user, r = t.statisticValue, i = t.rank, o = t.statistics;
                        return {
                            user: n,
                            value: r,
                            rank: i,
                            includedStatistics: (void 0 === o ? [] : o).map(f)
                        };
                    });
                });
            },
            getResults: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.skip, n = e.limit, r = e.selectUserKeys, i = e.includeStatistics, o = arguments[1];
                return this._getResults({
                    skip: t,
                    limit: n,
                    selectUserKeys: r,
                    includeStatistics: i
                }, o);
            },
            getResultsAroundUser: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.limit, n = e.selectUserKeys, r = e.includeStatistics, i = arguments[1];
                return this._getResults({
                    limit: t,
                    selectUserKeys: n,
                    includeStatistics: r
                }, i, !0);
            },
            _update: function(e, t) {
                var n = this;
                return s({
                    method: "PUT",
                    path: "/leaderboard/leaderboards/" + this.statisticName,
                    data: e,
                    authOptions: t
                }).then(function(e) {
                    return n._finishFetch(e);
                });
            },
            updateVersionChangeInterval: function(e, t) {
                return this._update({
                    versionChangeInterval: e
                }, t);
            },
            updateUpdateStrategy: function(e, t) {
                return this._update({
                    updateStrategy: e
                }, t);
            },
            reset: function(e) {
                var t = this;
                return s({
                    method: "PUT",
                    path: "/leaderboard/leaderboards/" + this.statisticName + "/incrementVersion",
                    authOptions: e
                }).then(function(e) {
                    return t._finishFetch(e);
                });
            },
            destroy: function(e) {
                return l.request({
                    method: "DELETE",
                    path: "/leaderboard/leaderboards/" + this.statisticName,
                    authOptions: e
                }).then(function() {});
            }
        });
    }, function(s, a, u) {
        (function(s) {
            !function(e, t) {
                t(a);
            }(0, function(a) {
                function u() {
                    throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs");
                }
                function c(e) {
                    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
                }
                function l(e, t) {
                    return t = {
                        exports: {}
                    }, e(t, t.exports), t.exports;
                }
                function f(e) {
                    var t, n;
                    this.promise = new e(function(e, r) {
                        if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                        t = e, n = r;
                    }), this.resolve = G(t), this.reject = G(n);
                }
                function h(e) {
                    if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(e);
                }
                function d(e, t) {
                    for (var n = e[Kr][t]; null != n; ) {
                        if (n.kind === Qr) return n.listener;
                        n = n.next;
                    }
                    return null;
                }
                function p(e, t, n) {
                    "function" != typeof n && "object" != (void 0 === n ? "undefined" : r(n)) && (n = null);
                    for (var i = null, o = e[Kr][t]; null != o; ) o.kind === Qr ? null == i ? e[Kr][t] = o.next : i.next = o.next : i = o, 
                    o = o.next;
                    null != n && (null == i ? e[Kr][t] = $r(n, Qr) : i.next = $r(n, Qr));
                }
                function v(e) {
                    this.status = e.statusCode, this.statusText = e.statusCode, e.header && (this._responseHeaders = Yr(e.header).reduce(function(t, n) {
                        return t[n.toLowerCase()] = e.header[n], t;
                    }, {}));
                    var t = e.data;
                    "string" != typeof t && (t = Br(t)), this.responseText = this.response = t, this.readyState = ui, 
                    this.dispatchEvent({
                        type: "readystatechange"
                    });
                }
                function y(e) {
                    "" !== e.message && gi && (gi._readyState = mi, gi.dispatchEvent({
                        type: "error",
                        message: e.errMsg
                    }));
                }
                function m(e) {
                    if (!((e = String(e)).length > 100)) {
                        var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                        if (t) {
                            var n = parseFloat(t[1]);
                            switch ((t[2] || "ms").toLowerCase()) {
                              case "years":
                              case "year":
                              case "yrs":
                              case "yr":
                              case "y":
                                return n * Go;

                              case "days":
                              case "day":
                              case "d":
                                return n * zo;

                              case "hours":
                              case "hour":
                              case "hrs":
                              case "hr":
                              case "h":
                                return n * Wo;

                              case "minutes":
                              case "minute":
                              case "mins":
                              case "min":
                              case "m":
                                return n * Yo;

                              case "seconds":
                              case "second":
                              case "secs":
                              case "sec":
                              case "s":
                                return n * Vo;

                              case "milliseconds":
                              case "millisecond":
                              case "msecs":
                              case "msec":
                              case "ms":
                                return n;

                              default:
                                return;
                            }
                        }
                    }
                }
                function g(e) {
                    return e >= zo ? Math.round(e / zo) + "d" : e >= Wo ? Math.round(e / Wo) + "h" : e >= Yo ? Math.round(e / Yo) + "m" : e >= Vo ? Math.round(e / Vo) + "s" : e + "ms";
                }
                function _(e) {
                    return b(e, zo, "day") || b(e, Wo, "hour") || b(e, Yo, "minute") || b(e, Vo, "second") || e + " ms";
                }
                function b(e, t, n) {
                    if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s";
                }
                function w(e) {
                    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
                }
                function E(e) {
                    return "function" == typeof e.readFloatLE && "function" == typeof e.slice && w(e.slice(0, 0));
                }
                function S(e) {
                    return "[object Array]" === $o.call(e);
                }
                function T(e) {
                    return null !== e && "object" === (void 0 === e ? "undefined" : Er(e));
                }
                function O(e) {
                    return "[object Function]" === $o.call(e);
                }
                function A(e, t) {
                    if (null !== e && void 0 !== e) if ("object" !== (void 0 === e ? "undefined" : Er(e)) && (e = [ e ]), 
                    S(e)) for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e); else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
                }
                function C() {
                    for (var e = {}, t = 0, n = arguments.length; t < n; t++) A(arguments[t], function(t, n) {
                        "object" === Er(e[n]) && "object" === (void 0 === t ? "undefined" : Er(t)) ? e[n] = C(e[n], t) : e[n] = t;
                    });
                    return e;
                }
                function I(e) {
                    return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
                }
                function N() {
                    this.message = "String contains an invalid character";
                }
                function x(e, t) {
                    !Xo.isUndefined(e) && Xo.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
                }
                function P() {
                    this.handlers = [];
                }
                function j(e) {
                    e.cancelToken && e.cancelToken.throwIfRequested();
                }
                function R(e) {
                    this.defaults = e, this.interceptors = {
                        request: new ps(),
                        response: new ps()
                    };
                }
                function k(e) {
                    this.message = e;
                }
                function L(e) {
                    if ("function" != typeof e) throw new TypeError("executor must be a function.");
                    var t;
                    this.promise = new Sn(function(e) {
                        t = e;
                    });
                    var n = this;
                    e(function(e) {
                        n.reason || (n.reason = new ws(e), t(n.reason));
                    });
                }
                function U(e) {
                    var t = new bs(e), n = Qo(bs.prototype.request, t);
                    return Xo.extend(n, bs.prototype, t), Xo.extend(n, t), n;
                }
                function F(e, t, n, r, i) {
                    var o = {};
                    return Object.keys(r).forEach(function(e) {
                        o[e] = r[e];
                    }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), 
                    o = n.slice().reverse().reduce(function(n, r) {
                        return r(e, t, n) || n;
                    }, o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, 
                    o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), 
                    o = null), o;
                }
                var D = void 0 !== o && o.process || {};
                D.env = D.env || {};
                var M = void 0 !== o ? o : void 0 !== s ? s : "undefined" != typeof self ? self : {}, B = Math.ceil, q = Math.floor, V = function(e) {
                    return isNaN(e = +e) ? 0 : (e > 0 ? q : B)(e);
                }, Y = function(e) {
                    if (void 0 == e) throw TypeError("Can't call method on  " + e);
                    return e;
                }, W = l(function(e) {
                    var t = e.exports = void 0 !== o && o.Math == Math ? o : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                    "number" == typeof __g && (__g = t);
                }), z = l(function(e) {
                    var t = e.exports = {
                        version: "2.5.7"
                    };
                    "number" == typeof __e && (__e = t);
                }), G = (z.version, function(e) {
                    if ("function" != typeof e) throw TypeError(e + " is not a function!");
                    return e;
                }), J = function(e, t, n) {
                    if (G(e), void 0 === t) return e;
                    switch (n) {
                      case 1:
                        return function(n) {
                            return e.call(t, n);
                        };

                      case 2:
                        return function(n, r) {
                            return e.call(t, n, r);
                        };

                      case 3:
                        return function(n, r, i) {
                            return e.call(t, n, r, i);
                        };
                    }
                    return function() {
                        return e.apply(t, arguments);
                    };
                }, H = function(e) {
                    return "object" == (void 0 === e ? "undefined" : r(e)) ? null !== e : "function" == typeof e;
                }, K = function(e) {
                    if (!H(e)) throw TypeError(e + " is not an object!");
                    return e;
                }, Q = function(e) {
                    try {
                        return !!e();
                    } catch (e) {
                        return !0;
                    }
                }, $ = !Q(function() {
                    return 7 != Object.defineProperty({}, "a", {
                        get: function() {
                            return 7;
                        }
                    }).a;
                }), X = W.document, Z = H(X) && H(X.createElement), ee = function(e) {
                    return Z ? X.createElement(e) : {};
                }, te = !$ && !Q(function() {
                    return 7 != Object.defineProperty(ee("div"), "a", {
                        get: function() {
                            return 7;
                        }
                    }).a;
                }), ne = function(e, t) {
                    if (!H(e)) return e;
                    var n, r;
                    if (t && "function" == typeof (n = e.toString) && !H(r = n.call(e))) return r;
                    if ("function" == typeof (n = e.valueOf) && !H(r = n.call(e))) return r;
                    if (!t && "function" == typeof (n = e.toString) && !H(r = n.call(e))) return r;
                    throw TypeError("Can't convert object to primitive value");
                }, re = Object.defineProperty, ie = {
                    f: $ ? Object.defineProperty : function(e, t, n) {
                        if (K(e), t = ne(t, !0), K(n), te) try {
                            return re(e, t, n);
                        } catch (e) {}
                        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                        return "value" in n && (e[t] = n.value), e;
                    }
                }, oe = function(e, t) {
                    return {
                        enumerable: !(1 & e),
                        configurable: !(2 & e),
                        writable: !(4 & e),
                        value: t
                    };
                }, se = $ ? function(e, t, n) {
                    return ie.f(e, t, oe(1, n));
                } : function(e, t, n) {
                    return e[t] = n, e;
                }, ae = {}.hasOwnProperty, ue = function(e, t) {
                    return ae.call(e, t);
                }, ce = function e(t, n, r) {
                    var i, o, s, a = t & e.F, u = t & e.G, c = t & e.S, l = t & e.P, f = t & e.B, h = t & e.W, d = u ? z : z[n] || (z[n] = {}), p = d.prototype, v = u ? W : c ? W[n] : (W[n] || {}).prototype;
                    u && (r = n);
                    for (i in r) (o = !a && v && void 0 !== v[i]) && ue(d, i) || (s = o ? v[i] : r[i], 
                    d[i] = u && "function" != typeof v[i] ? r[i] : f && o ? J(s, W) : h && v[i] == s ? function(e) {
                        var t = function(t, n, r) {
                            if (this instanceof e) {
                                switch (arguments.length) {
                                  case 0:
                                    return new e();

                                  case 1:
                                    return new e(t);

                                  case 2:
                                    return new e(t, n);
                                }
                                return new e(t, n, r);
                            }
                            return e.apply(this, arguments);
                        };
                        return t.prototype = e.prototype, t;
                    }(s) : l && "function" == typeof s ? J(Function.call, s) : s, l && ((d.virtual || (d.virtual = {}))[i] = s, 
                    t & e.R && p && !p[i] && se(p, i, s)));
                };
                ce.F = 1, ce.G = 2, ce.S = 4, ce.P = 8, ce.B = 16, ce.W = 32, ce.U = 64, ce.R = 128;
                var le = ce, fe = se, he = {}, de = {}.toString, pe = function(e) {
                    return de.call(e).slice(8, -1);
                }, ve = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                    return "String" == pe(e) ? e.split("") : Object(e);
                }, ye = function(e) {
                    return ve(Y(e));
                }, me = Math.min, ge = function(e) {
                    return e > 0 ? me(V(e), 9007199254740991) : 0;
                }, _e = Math.max, be = Math.min, we = function(e, t) {
                    return (e = V(e)) < 0 ? _e(e + t, 0) : be(e, t);
                }, Ee = l(function(e) {
                    var t = W["__core-js_shared__"] || (W["__core-js_shared__"] = {});
                    (e.exports = function(e, n) {
                        return t[e] || (t[e] = void 0 !== n ? n : {});
                    })("versions", []).push({
                        version: z.version,
                        mode: "pure",
                        copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
                    });
                }), Se = 0, Te = Math.random(), Oe = function(e) {
                    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++Se + Te).toString(36));
                }, Ae = Ee("keys"), Ce = function(e) {
                    return Ae[e] || (Ae[e] = Oe(e));
                }, Ie = function(e, t, n) {
                    for (var r = ye(e), i = ge(r.length), o = we(n, i); i > o; o++) if (o in r && r[o] === t) return o || 0;
                    return -1;
                }, Ne = Ce("IE_PROTO"), xe = function(e, t) {
                    var n, r = ye(e), i = 0, o = [];
                    for (n in r) n != Ne && ue(r, n) && o.push(n);
                    for (;t.length > i; ) ue(r, n = t[i++]) && (~Ie(o, n) || o.push(n));
                    return o;
                }, Pe = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), je = Object.keys || function(e) {
                    return xe(e, Pe);
                }, Re = $ ? Object.defineProperties : function(e, t) {
                    K(e);
                    for (var n, r = je(t), i = r.length, o = 0; i > o; ) ie.f(e, n = r[o++], t[n]);
                    return e;
                }, ke = W.document, Le = ke && ke.documentElement, Ue = Ce("IE_PROTO"), Fe = function() {}, De = function() {
                    var e, t = ee("iframe"), n = Pe.length;
                    for (t.style.display = "none", Le.appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), 
                    e.write("<script>document.F=Object<\/script>"), e.close(), De = e.F; n--; ) delete De.prototype[Pe[n]];
                    return De();
                }, Me = Object.create || function(e, t) {
                    var n;
                    return null !== e ? (Fe.prototype = K(e), n = new Fe(), Fe.prototype = null, n[Ue] = e) : n = De(), 
                    void 0 === t ? n : Re(n, t);
                }, Be = l(function(e) {
                    var t = Ee("wks"), n = W.Symbol, r = "function" == typeof n;
                    (e.exports = function(e) {
                        return t[e] || (t[e] = r && n[e] || (r ? n : Oe)("Symbol." + e));
                    }).store = t;
                }), qe = ie.f, Ve = Be("toStringTag"), Ye = function(e, t, n) {
                    e && !ue(e = n ? e : e.prototype, Ve) && qe(e, Ve, {
                        configurable: !0,
                        value: t
                    });
                }, We = {};
                se(We, Be("iterator"), function() {
                    return this;
                });
                var ze = function(e, t, n) {
                    e.prototype = Me(We, {
                        next: oe(1, n)
                    }), Ye(e, t + " Iterator");
                }, Ge = function(e) {
                    return Object(Y(e));
                }, Je = Ce("IE_PROTO"), He = Object.prototype, Ke = Object.getPrototypeOf || function(e) {
                    return e = Ge(e), ue(e, Je) ? e[Je] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? He : null;
                }, Qe = Be("iterator"), $e = !([].keys && "next" in [].keys()), Xe = function() {
                    return this;
                }, Ze = function(e, t, n, r, i, o, s) {
                    ze(n, t, r);
                    var a, u, c, l = function(e) {
                        if (!$e && e in p) return p[e];
                        switch (e) {
                          case "keys":
                          case "values":
                            return function() {
                                return new n(this, e);
                            };
                        }
                        return function() {
                            return new n(this, e);
                        };
                    }, f = t + " Iterator", h = "values" == i, d = !1, p = e.prototype, v = p[Qe] || p["@@iterator"] || i && p[i], y = v || l(i), m = i ? h ? l("entries") : y : void 0, g = "Array" == t ? p.entries || v : v;
                    if (g && (c = Ke(g.call(new e()))) !== Object.prototype && c.next && Ye(c, f, !0), 
                    h && v && "values" !== v.name && (d = !0, y = function() {
                        return v.call(this);
                    }), s && ($e || d || !p[Qe]) && se(p, Qe, y), he[t] = y, he[f] = Xe, i) if (a = {
                        values: h ? y : l("values"),
                        keys: o ? y : l("keys"),
                        entries: m
                    }, s) for (u in a) u in p || fe(p, u, a[u]); else le(le.P + le.F * ($e || d), t, a);
                    return a;
                }, et = function(e, t) {
                    var n, r, i = String(Y(e)), o = V(t), s = i.length;
                    return o < 0 || o >= s ? "" : (n = i.charCodeAt(o)) < 55296 || n > 56319 || o + 1 === s || (r = i.charCodeAt(o + 1)) < 56320 || r > 57343 ? i.charAt(o) : i.slice(o, o + 2);
                };
                Ze(String, "String", function(e) {
                    this._t = String(e), this._i = 0;
                }, function() {
                    var e, t = this._t, n = this._i;
                    return n >= t.length ? {
                        value: void 0,
                        done: !0
                    } : (e = et(t, n), this._i += e.length, {
                        value: e,
                        done: !1
                    });
                });
                var tt = function(e, t) {
                    return {
                        value: t,
                        done: !!e
                    };
                };
                Ze(Array, "Array", function(e, t) {
                    this._t = ye(e), this._i = 0, this._k = t;
                }, function() {
                    var e = this._t, t = this._k, n = this._i++;
                    return !e || n >= e.length ? (this._t = void 0, tt(1)) : "keys" == t ? tt(0, n) : "values" == t ? tt(0, e[n]) : tt(0, [ n, e[n] ]);
                }, "values"), he.Arguments = he.Array;
                for (var nt = Be("toStringTag"), rt = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), it = 0; it < rt.length; it++) {
                    var ot = rt[it], st = W[ot], at = st && st.prototype;
                    at && !at[nt] && se(at, nt, ot), he[ot] = he.Array;
                }
                var ut, ct, lt, ft = Be("toStringTag"), ht = "Arguments" == pe(function() {
                    return arguments;
                }()), dt = function(e, t) {
                    try {
                        return e[t];
                    } catch (e) {}
                }, pt = function(e) {
                    var t, n, r;
                    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = dt(t = Object(e), ft)) ? n : ht ? pe(t) : "Object" == (r = pe(t)) && "function" == typeof t.callee ? "Arguments" : r;
                }, vt = function(e, t, n, r) {
                    if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
                    return e;
                }, yt = function(e, t, n, r) {
                    try {
                        return r ? t(K(n)[0], n[1]) : t(n);
                    } catch (t) {
                        var i = e.return;
                        throw void 0 !== i && K(i.call(e)), t;
                    }
                }, mt = Be("iterator"), gt = Array.prototype, _t = function(e) {
                    return void 0 !== e && (he.Array === e || gt[mt] === e);
                }, bt = Be("iterator"), wt = z.getIteratorMethod = function(e) {
                    if (void 0 != e) return e[bt] || e["@@iterator"] || he[pt(e)];
                }, Et = l(function(e) {
                    var t = {}, n = {}, r = e.exports = function(e, r, i, o, s) {
                        var a, u, c, l, f = s ? function() {
                            return e;
                        } : wt(e), h = J(i, o, r ? 2 : 1), d = 0;
                        if ("function" != typeof f) throw TypeError(e + " is not iterable!");
                        if (_t(f)) {
                            for (a = ge(e.length); a > d; d++) if ((l = r ? h(K(u = e[d])[0], u[1]) : h(e[d])) === t || l === n) return l;
                        } else for (c = f.call(e); !(u = c.next()).done; ) if ((l = yt(c, h, u.value, r)) === t || l === n) return l;
                    };
                    r.BREAK = t, r.RETURN = n;
                }), St = Be("species"), Tt = function(e, t) {
                    var n, r = K(e).constructor;
                    return void 0 === r || void 0 == (n = K(r)[St]) ? t : G(n);
                }, Ot = function(e, t, n) {
                    var r = void 0 === n;
                    switch (t.length) {
                      case 0:
                        return r ? e() : e.call(n);

                      case 1:
                        return r ? e(t[0]) : e.call(n, t[0]);

                      case 2:
                        return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);

                      case 3:
                        return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);

                      case 4:
                        return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]);
                    }
                    return e.apply(n, t);
                }, At = W.process, Ct = W.setImmediate, It = W.clearImmediate, Nt = W.MessageChannel, xt = W.Dispatch, Pt = 0, jt = {}, Rt = function() {
                    var e = +this;
                    if (jt.hasOwnProperty(e)) {
                        var t = jt[e];
                        delete jt[e], t();
                    }
                }, kt = function(e) {
                    Rt.call(e.data);
                };
                Ct && It || (Ct = function(e) {
                    for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
                    return jt[++Pt] = function() {
                        Ot("function" == typeof e ? e : Function(e), t);
                    }, ut(Pt), Pt;
                }, It = function(e) {
                    delete jt[e];
                }, "process" == pe(At) ? ut = function(e) {
                    At.nextTick(J(Rt, e, 1));
                } : xt && xt.now ? ut = function(e) {
                    xt.now(J(Rt, e, 1));
                } : Nt ? (ct = new Nt(), lt = ct.port2, ct.port1.onmessage = kt, ut = J(lt.postMessage, lt, 1)) : W.addEventListener && "function" == typeof postMessage && !W.importScripts ? (ut = function(e) {
                    W.postMessage(e + "", "*");
                }, W.addEventListener("message", kt, !1)) : ut = "onreadystatechange" in ee("script") ? function(e) {
                    Le.appendChild(ee("script")).onreadystatechange = function() {
                        Le.removeChild(this), Rt.call(e);
                    };
                } : function(e) {
                    setTimeout(J(Rt, e, 1), 0);
                });
                var Lt = {
                    set: Ct,
                    clear: It
                }, Ut = Lt.set, Ft = W.MutationObserver || W.WebKitMutationObserver, Dt = W.process, Mt = W.Promise, Bt = "process" == pe(Dt), qt = {
                    f: function(e) {
                        return new f(e);
                    }
                }, Vt = function(e) {
                    try {
                        return {
                            e: !1,
                            v: e()
                        };
                    } catch (e) {
                        return {
                            e: !0,
                            v: e
                        };
                    }
                }, Yt = W.navigator, Wt = Yt && Yt.userAgent || "", zt = function(e, t) {
                    if (K(e), H(t) && t.constructor === e) return t;
                    var n = qt.f(e);
                    return (0, n.resolve)(t), n.promise;
                }, Gt = function(e, t, n) {
                    for (var r in t) n && e[r] ? e[r] = t[r] : se(e, r, t[r]);
                    return e;
                }, Jt = Be("species"), Ht = function(e) {
                    var t = "function" == typeof z[e] ? z[e] : W[e];
                    $ && t && !t[Jt] && ie.f(t, Jt, {
                        configurable: !0,
                        get: function() {
                            return this;
                        }
                    });
                }, Kt = Be("iterator"), Qt = !1;
                try {
                    [ 7 ][Kt]().return = function() {
                        Qt = !0;
                    };
                } catch (e) {}
                var $t, Xt, Zt, en, tn = function(e, t) {
                    if (!t && !Qt) return !1;
                    var n = !1;
                    try {
                        var r = [ 7 ], i = r[Kt]();
                        i.next = function() {
                            return {
                                done: n = !0
                            };
                        }, r[Kt] = function() {
                            return i;
                        }, e(r);
                    } catch (e) {}
                    return n;
                }, nn = Lt.set, rn = function() {
                    var e, t, n, r = function() {
                        var r, i;
                        for (Bt && (r = Dt.domain) && r.exit(); e; ) {
                            i = e.fn, e = e.next;
                            try {
                                i();
                            } catch (r) {
                                throw e ? n() : t = void 0, r;
                            }
                        }
                        t = void 0, r && r.enter();
                    };
                    if (Bt) n = function() {
                        Dt.nextTick(r);
                    }; else if (!Ft || W.navigator && W.navigator.standalone) if (Mt && Mt.resolve) {
                        var i = Mt.resolve(void 0);
                        n = function() {
                            i.then(r);
                        };
                    } else n = function() {
                        Ut.call(W, r);
                    }; else {
                        var o = !0, s = document.createTextNode("");
                        new Ft(r).observe(s, {
                            characterData: !0
                        }), n = function() {
                            s.data = o = !o;
                        };
                    }
                    return function(r) {
                        var i = {
                            fn: r,
                            next: void 0
                        };
                        t && (t.next = i), e || (e = i, n()), t = i;
                    };
                }(), on = W.TypeError, sn = W.process, an = sn && sn.versions, un = an && an.v8 || "", cn = W.Promise, ln = "process" == pt(sn), fn = function() {}, hn = Xt = qt.f, dn = !!function() {
                    try {
                        var e = cn.resolve(1), t = (e.constructor = {})[Be("species")] = function(e) {
                            e(fn, fn);
                        };
                        return (ln || "function" == typeof PromiseRejectionEvent) && e.then(fn) instanceof t && 0 !== un.indexOf("6.6") && -1 === Wt.indexOf("Chrome/66");
                    } catch (e) {}
                }(), pn = function(e) {
                    var t;
                    return !(!H(e) || "function" != typeof (t = e.then)) && t;
                }, vn = function(e, t) {
                    if (!e._n) {
                        e._n = !0;
                        var n = e._c;
                        rn(function() {
                            for (var r = e._v, i = 1 == e._s, o = 0; n.length > o; ) !function(t) {
                                var n, o, s, a = i ? t.ok : t.fail, u = t.resolve, c = t.reject, l = t.domain;
                                try {
                                    a ? (i || (2 == e._h && gn(e), e._h = 1), !0 === a ? n = r : (l && l.enter(), n = a(r), 
                                    l && (l.exit(), s = !0)), n === t.promise ? c(on("Promise-chain cycle")) : (o = pn(n)) ? o.call(n, u, c) : u(n)) : c(r);
                                } catch (e) {
                                    l && !s && l.exit(), c(e);
                                }
                            }(n[o++]);
                            e._c = [], e._n = !1, t && !e._h && yn(e);
                        });
                    }
                }, yn = function(e) {
                    nn.call(W, function() {
                        var t, n, r, i = e._v, o = mn(e);
                        if (o && (t = Vt(function() {
                            ln ? sn.emit("unhandledRejection", i, e) : (n = W.onunhandledrejection) ? n({
                                promise: e,
                                reason: i
                            }) : (r = W.console) && r.error && r.error("Unhandled promise rejection", i);
                        }), e._h = ln || mn(e) ? 2 : 1), e._a = void 0, o && t.e) throw t.v;
                    });
                }, mn = function(e) {
                    return 1 !== e._h && 0 === (e._a || e._c).length;
                }, gn = function(e) {
                    nn.call(W, function() {
                        var t;
                        ln ? sn.emit("rejectionHandled", e) : (t = W.onrejectionhandled) && t({
                            promise: e,
                            reason: e._v
                        });
                    });
                }, _n = function(e) {
                    var t = this;
                    t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), 
                    vn(t, !0));
                }, bn = function e(t) {
                    var n, r = this;
                    if (!r._d) {
                        r._d = !0, r = r._w || r;
                        try {
                            if (r === t) throw on("Promise can't be resolved itself");
                            (n = pn(t)) ? rn(function() {
                                var i = {
                                    _w: r,
                                    _d: !1
                                };
                                try {
                                    n.call(t, J(e, i, 1), J(_n, i, 1));
                                } catch (e) {
                                    _n.call(i, e);
                                }
                            }) : (r._v = t, r._s = 1, vn(r, !1));
                        } catch (t) {
                            _n.call({
                                _w: r,
                                _d: !1
                            }, t);
                        }
                    }
                };
                dn || (cn = function(e) {
                    vt(this, cn, "Promise", "_h"), G(e), $t.call(this);
                    try {
                        e(J(bn, this, 1), J(_n, this, 1));
                    } catch (e) {
                        _n.call(this, e);
                    }
                }, $t = function(e) {
                    this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, 
                    this._n = !1;
                }, $t.prototype = Gt(cn.prototype, {
                    then: function(e, t) {
                        var n = hn(Tt(this, cn));
                        return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, 
                        n.domain = ln ? sn.domain : void 0, this._c.push(n), this._a && this._a.push(n), 
                        this._s && vn(this, !1), n.promise;
                    },
                    catch: function(e) {
                        return this.then(void 0, e);
                    }
                }), Zt = function() {
                    var e = new $t();
                    this.promise = e, this.resolve = J(bn, e, 1), this.reject = J(_n, e, 1);
                }, qt.f = hn = function(e) {
                    return e === cn || e === en ? new Zt(e) : Xt(e);
                }), le(le.G + le.W + le.F * !dn, {
                    Promise: cn
                }), Ye(cn, "Promise"), Ht("Promise"), en = z.Promise, le(le.S + le.F * !dn, "Promise", {
                    reject: function(e) {
                        var t = hn(this);
                        return (0, t.reject)(e), t.promise;
                    }
                }), le(le.S + !0 * le.F, "Promise", {
                    resolve: function(e) {
                        return zt(this === en ? cn : this, e);
                    }
                }), le(le.S + le.F * !(dn && tn(function(e) {
                    cn.all(e).catch(fn);
                })), "Promise", {
                    all: function(e) {
                        var t = this, n = hn(t), r = n.resolve, i = n.reject, o = Vt(function() {
                            var n = [], o = 0, s = 1;
                            Et(e, !1, function(e) {
                                var a = o++, u = !1;
                                n.push(void 0), s++, t.resolve(e).then(function(e) {
                                    u || (u = !0, n[a] = e, --s || r(n));
                                }, i);
                            }), --s || r(n);
                        });
                        return o.e && i(o.v), n.promise;
                    },
                    race: function(e) {
                        var t = this, n = hn(t), r = n.reject, i = Vt(function() {
                            Et(e, !1, function(e) {
                                t.resolve(e).then(n.resolve, r);
                            });
                        });
                        return i.e && r(i.v), n.promise;
                    }
                }), le(le.P + le.R, "Promise", {
                    finally: function(e) {
                        var t = Tt(this, z.Promise || W.Promise), n = "function" == typeof e;
                        return this.then(n ? function(n) {
                            return zt(t, e()).then(function() {
                                return n;
                            });
                        } : e, n ? function(n) {
                            return zt(t, e()).then(function() {
                                throw n;
                            });
                        } : e);
                    }
                }), le(le.S, "Promise", {
                    try: function(e) {
                        var t = qt.f(this), n = Vt(e);
                        return (n.e ? t.reject : t.resolve)(n.v), t.promise;
                    }
                });
                var wn = z.Promise, En = l(function(e) {
                    e.exports = {
                        default: wn,
                        __esModule: !0
                    };
                }), Sn = c(En), Tn = {
                    f: Be
                }, On = Tn.f("iterator"), An = l(function(e) {
                    e.exports = {
                        default: On,
                        __esModule: !0
                    };
                });
                c(An);
                var Cn = l(function(e) {
                    var t = Oe("meta"), n = ie.f, i = 0, o = Object.isExtensible || function() {
                        return !0;
                    }, s = !Q(function() {
                        return o(Object.preventExtensions({}));
                    }), a = function(e) {
                        n(e, t, {
                            value: {
                                i: "O" + ++i,
                                w: {}
                            }
                        });
                    }, u = e.exports = {
                        KEY: t,
                        NEED: !1,
                        fastKey: function(e, n) {
                            if (!H(e)) return "symbol" == (void 0 === e ? "undefined" : r(e)) ? e : ("string" == typeof e ? "S" : "P") + e;
                            if (!ue(e, t)) {
                                if (!o(e)) return "F";
                                if (!n) return "E";
                                a(e);
                            }
                            return e[t].i;
                        },
                        getWeak: function(e, n) {
                            if (!ue(e, t)) {
                                if (!o(e)) return !0;
                                if (!n) return !1;
                                a(e);
                            }
                            return e[t].w;
                        },
                        onFreeze: function(e) {
                            return s && u.NEED && o(e) && !ue(e, t) && a(e), e;
                        }
                    };
                }), In = (Cn.KEY, Cn.NEED, Cn.fastKey, Cn.getWeak, Cn.onFreeze, ie.f), Nn = function(e) {
                    var t = z.Symbol || (z.Symbol = {});
                    "_" == e.charAt(0) || e in t || In(t, e, {
                        value: Tn.f(e)
                    });
                }, xn = {
                    f: Object.getOwnPropertySymbols
                }, Pn = {
                    f: {}.propertyIsEnumerable
                }, jn = function(e) {
                    var t = je(e), n = xn.f;
                    if (n) for (var r, i = n(e), o = Pn.f, s = 0; i.length > s; ) o.call(e, r = i[s++]) && t.push(r);
                    return t;
                }, Rn = Array.isArray || function(e) {
                    return "Array" == pe(e);
                }, kn = Pe.concat("length", "prototype"), Ln = {
                    f: Object.getOwnPropertyNames || function(e) {
                        return xe(e, kn);
                    }
                }, Un = Ln.f, Fn = {}.toString, Dn = "object" == (void 0 === o ? "undefined" : r(o)) && o && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(o) : [], Mn = function(e) {
                    try {
                        return Un(e);
                    } catch (e) {
                        return Dn.slice();
                    }
                }, Bn = {
                    f: function(e) {
                        return Dn && "[object Window]" == Fn.call(e) ? Mn(e) : Un(ye(e));
                    }
                }, qn = Object.getOwnPropertyDescriptor, Vn = {
                    f: $ ? qn : function(e, t) {
                        if (e = ye(e), t = ne(t, !0), te) try {
                            return qn(e, t);
                        } catch (e) {}
                        if (ue(e, t)) return oe(!Pn.f.call(e, t), e[t]);
                    }
                }, Yn = Cn.KEY, Wn = Vn.f, zn = ie.f, Gn = Bn.f, Jn = W.Symbol, Hn = W.JSON, Kn = Hn && Hn.stringify, Qn = Be("_hidden"), $n = Be("toPrimitive"), Xn = {}.propertyIsEnumerable, Zn = Ee("symbol-registry"), er = Ee("symbols"), tr = Ee("op-symbols"), nr = Object.prototype, rr = "function" == typeof Jn, ir = W.QObject, or = !ir || !ir.prototype || !ir.prototype.findChild, sr = $ && Q(function() {
                    return 7 != Me(zn({}, "a", {
                        get: function() {
                            return zn(this, "a", {
                                value: 7
                            }).a;
                        }
                    })).a;
                }) ? function(e, t, n) {
                    var r = Wn(nr, t);
                    r && delete nr[t], zn(e, t, n), r && e !== nr && zn(nr, t, r);
                } : zn, ar = function(e) {
                    var t = er[e] = Me(Jn.prototype);
                    return t._k = e, t;
                }, ur = rr && "symbol" == r(Jn.iterator) ? function(e) {
                    return "symbol" == (void 0 === e ? "undefined" : r(e));
                } : function(e) {
                    return e instanceof Jn;
                }, cr = function e(t, n, r) {
                    return t === nr && e(tr, n, r), K(t), n = ne(n, !0), K(r), ue(er, n) ? (r.enumerable ? (ue(t, Qn) && t[Qn][n] && (t[Qn][n] = !1), 
                    r = Me(r, {
                        enumerable: oe(0, !1)
                    })) : (ue(t, Qn) || zn(t, Qn, oe(1, {})), t[Qn][n] = !0), sr(t, n, r)) : zn(t, n, r);
                }, lr = function(e, t) {
                    K(e);
                    for (var n, r = jn(t = ye(t)), i = 0, o = r.length; o > i; ) cr(e, n = r[i++], t[n]);
                    return e;
                }, fr = function(e, t) {
                    if (e = ye(e), t = ne(t, !0), e !== nr || !ue(er, t) || ue(tr, t)) {
                        var n = Wn(e, t);
                        return !n || !ue(er, t) || ue(e, Qn) && e[Qn][t] || (n.enumerable = !0), n;
                    }
                }, hr = function(e) {
                    for (var t, n = Gn(ye(e)), r = [], i = 0; n.length > i; ) ue(er, t = n[i++]) || t == Qn || t == Yn || r.push(t);
                    return r;
                }, dr = function(e) {
                    for (var t, n = e === nr, r = Gn(n ? tr : ye(e)), i = [], o = 0; r.length > o; ) !ue(er, t = r[o++]) || n && !ue(nr, t) || i.push(er[t]);
                    return i;
                };
                rr || (Jn = function() {
                    if (this instanceof Jn) throw TypeError("Symbol is not a constructor!");
                    var e = Oe(arguments.length > 0 ? arguments[0] : void 0);
                    return $ && or && sr(nr, e, {
                        configurable: !0,
                        set: function t(n) {
                            this === nr && t.call(tr, n), ue(this, Qn) && ue(this[Qn], e) && (this[Qn][e] = !1), 
                            sr(this, e, oe(1, n));
                        }
                    }), ar(e);
                }, fe(Jn.prototype, "toString", function() {
                    return this._k;
                }), Vn.f = fr, ie.f = cr, Ln.f = Bn.f = hr, Pn.f = function(e) {
                    var t = Xn.call(this, e = ne(e, !0));
                    return !(this === nr && ue(er, e) && !ue(tr, e)) && (!(t || !ue(this, e) || !ue(er, e) || ue(this, Qn) && this[Qn][e]) || t);
                }, xn.f = dr, Tn.f = function(e) {
                    return ar(Be(e));
                }), le(le.G + le.W + le.F * !rr, {
                    Symbol: Jn
                });
                for (var pr = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), vr = 0; pr.length > vr; ) Be(pr[vr++]);
                for (var yr = je(Be.store), mr = 0; yr.length > mr; ) Nn(yr[mr++]);
                le(le.S + le.F * !rr, "Symbol", {
                    for: function(e) {
                        return ue(Zn, e += "") ? Zn[e] : Zn[e] = Jn(e);
                    },
                    keyFor: function(e) {
                        if (!ur(e)) throw TypeError(e + " is not a symbol!");
                        for (var t in Zn) if (Zn[t] === e) return t;
                    },
                    useSetter: function() {
                        or = !0;
                    },
                    useSimple: function() {
                        or = !1;
                    }
                }), le(le.S + le.F * !rr, "Object", {
                    create: function(e, t) {
                        return void 0 === t ? Me(e) : lr(Me(e), t);
                    },
                    defineProperty: cr,
                    defineProperties: lr,
                    getOwnPropertyDescriptor: fr,
                    getOwnPropertyNames: hr,
                    getOwnPropertySymbols: dr
                }), Hn && le(le.S + le.F * (!rr || Q(function() {
                    var e = Jn();
                    return "[null]" != Kn([ e ]) || "{}" != Kn({
                        a: e
                    }) || "{}" != Kn(Object(e));
                })), "JSON", {
                    stringify: function(e) {
                        for (var t, n, r = [ e ], i = 1; arguments.length > i; ) r.push(arguments[i++]);
                        if (n = t = r[1], (H(t) || void 0 !== e) && !ur(e)) return Rn(t) || (t = function(e, t) {
                            if ("function" == typeof n && (t = n.call(this, e, t)), !ur(t)) return t;
                        }), r[1] = t, Kn.apply(Hn, r);
                    }
                }), Jn.prototype[$n] || se(Jn.prototype, $n, Jn.prototype.valueOf), Ye(Jn, "Symbol"), 
                Ye(Math, "Math", !0), Ye(W.JSON, "JSON", !0), Nn("asyncIterator"), Nn("observable");
                var gr = z.Symbol, _r = l(function(e) {
                    e.exports = {
                        default: gr,
                        __esModule: !0
                    };
                }), br = c(_r), wr = l(function(e, t) {
                    function n(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    t.__esModule = !0;
                    var i = n(An), o = n(_r), s = "function" == typeof o.default && "symbol" == r(i.default) ? function(e) {
                        return void 0 === e ? "undefined" : r(e);
                    } : function(e) {
                        return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : void 0 === e ? "undefined" : r(e);
                    };
                    t.default = "function" == typeof o.default && "symbol" === s(i.default) ? function(e) {
                        return void 0 === e ? "undefined" : s(e);
                    } : function(e) {
                        return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : void 0 === e ? "undefined" : s(e);
                    };
                }), Er = c(wr), Sr = c(l(function(e, t) {
                    t.__esModule = !0, t.default = function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    };
                })), Tr = new (function() {
                    function e() {
                        Sr(this, e);
                    }
                    return e.prototype.getItem = function(e) {
                        return wx.getStorageSync(e);
                    }, e.prototype.setItem = function(e, t) {
                        return wx.setStorageSync(e, t);
                    }, e.prototype.removeItem = function(e) {
                        return this.setItem(e, "");
                    }, e.prototype.clear = function() {
                        return wx.clearStorageSync();
                    }, e;
                }())();
                le(le.S + le.F * !$, "Object", {
                    defineProperty: ie.f
                });
                var Or = z.Object, Ar = function(e, t, n) {
                    return Or.defineProperty(e, t, n);
                }, Cr = l(function(e) {
                    e.exports = {
                        default: Ar,
                        __esModule: !0
                    };
                });
                c(Cr);
                var Ir = c(l(function(e, t) {
                    t.__esModule = !0;
                    var n = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }(Cr);
                    t.default = function(e, t, r) {
                        return t in e ? (0, n.default)(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e;
                    };
                })), Nr = c(l(function(e, t) {
                    t.__esModule = !0;
                    var n = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }(wr);
                    t.default = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (void 0 === t ? "undefined" : (0, n.default)(t)) && "function" != typeof t ? e : t;
                    };
                })), xr = function(e, t) {
                    if (K(e), !H(t) && null !== t) throw TypeError(t + ": can't set as prototype!");
                }, Pr = {
                    set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, n) {
                        try {
                            (n = J(Function.call, Vn.f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array);
                        } catch (e) {
                            t = !0;
                        }
                        return function(e, r) {
                            return xr(e, r), t ? e.__proto__ = r : n(e, r), e;
                        };
                    }({}, !1) : void 0),
                    check: xr
                };
                le(le.S, "Object", {
                    setPrototypeOf: Pr.set
                });
                var jr = z.Object.setPrototypeOf, Rr = l(function(e) {
                    e.exports = {
                        default: jr,
                        __esModule: !0
                    };
                });
                c(Rr), le(le.S, "Object", {
                    create: Me
                });
                var kr = z.Object, Lr = function(e, t) {
                    return kr.create(e, t);
                }, Ur = l(function(e) {
                    e.exports = {
                        default: Lr,
                        __esModule: !0
                    };
                });
                c(Ur);
                var Fr = c(l(function(e, t) {
                    function n(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    t.__esModule = !0;
                    var r = n(Rr), i = n(Ur), o = n(wr);
                    t.default = function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, 
                        o.default)(t)));
                        e.prototype = (0, i.default)(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (r.default ? (0, r.default)(e, t) : e.__proto__ = t);
                    };
                })), Dr = z.JSON || (z.JSON = {
                    stringify: JSON.stringify
                }), Mr = function(e) {
                    return Dr.stringify.apply(Dr, arguments);
                }, Br = c(l(function(e) {
                    e.exports = {
                        default: Mr,
                        __esModule: !0
                    };
                })), qr = function(e, t) {
                    var n = (z.Object || {})[e] || Object[e], r = {};
                    r[e] = t(n), le(le.S + le.F * Q(function() {
                        n(1);
                    }), "Object", r);
                };
                qr("keys", function() {
                    return function(e) {
                        return je(Ge(e));
                    };
                });
                var Vr = z.Object.keys, Yr = c(l(function(e) {
                    e.exports = {
                        default: Vr,
                        __esModule: !0
                    };
                })), Wr = Object.getOwnPropertySymbols, zr = Object.prototype.hasOwnProperty, Gr = Object.prototype.propertyIsEnumerable, Jr = function() {
                    try {
                        if (!Object.assign) return !1;
                        var e = new String("abc");
                        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                            return t[e];
                        }).join("")) return !1;
                        var r = {};
                        return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                            r[e] = e;
                        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
                    } catch (e) {
                        return !1;
                    }
                }() ? Object.assign : function(e, t) {
                    for (var n, r, i = h(e), o = 1; o < arguments.length; o++) {
                        n = Object(arguments[o]);
                        for (var s in n) zr.call(n, s) && (i[s] = n[s]);
                        if (Wr) {
                            r = Wr(n);
                            for (var a = 0; a < r.length; a++) Gr.call(n, r[a]) && (i[r[a]] = n[r[a]]);
                        }
                    }
                    return i;
                }, Hr = l(function(e, t) {
                    var n = t.createUniqueKey = "undefined" != typeof Symbol ? Symbol : function(e) {
                        return "[[" + e + "_" + Math.random().toFixed(8).slice(2) + "]]";
                    };
                    t.LISTENERS = n("listeners"), t.CAPTURE = 1, t.BUBBLE = 2, t.ATTRIBUTE = 3, t.newNode = function(e, t) {
                        return {
                            listener: e,
                            kind: t,
                            next: null
                        };
                    };
                }), Kr = (Hr.createUniqueKey, Hr.LISTENERS, Hr.CAPTURE, Hr.BUBBLE, Hr.ATTRIBUTE, 
                Hr.newNode, Hr.LISTENERS), Qr = Hr.ATTRIBUTE, $r = Hr.newNode, Xr = {
                    defineCustomEventTarget: function(e, t) {
                        function n() {
                            e.call(this);
                        }
                        var r = {
                            constructor: {
                                value: n,
                                configurable: !0,
                                writable: !0
                            }
                        };
                        return t.forEach(function(e) {
                            r["on" + e] = {
                                get: function() {
                                    return d(this, e);
                                },
                                set: function(t) {
                                    p(this, e, t);
                                },
                                configurable: !0,
                                enumerable: !0
                            };
                        }), n.prototype = Object.create(e.prototype, r), n;
                    }
                }, Zr = Hr.createUniqueKey, ei = Zr("stop_immediate_propagation_flag"), ti = Zr("canceled_flag"), ni = Zr("original_event"), ri = Object.freeze({
                    stopPropagation: Object.freeze({
                        value: function() {
                            var e = this[ni];
                            "function" == typeof e.stopPropagation && e.stopPropagation();
                        },
                        writable: !0,
                        configurable: !0
                    }),
                    stopImmediatePropagation: Object.freeze({
                        value: function() {
                            this[ei] = !0;
                            var e = this[ni];
                            "function" == typeof e.stopImmediatePropagation && e.stopImmediatePropagation();
                        },
                        writable: !0,
                        configurable: !0
                    }),
                    preventDefault: Object.freeze({
                        value: function() {
                            !0 === this.cancelable && (this[ti] = !0);
                            var e = this[ni];
                            "function" == typeof e.preventDefault && e.preventDefault();
                        },
                        writable: !0,
                        configurable: !0
                    }),
                    defaultPrevented: Object.freeze({
                        get: function() {
                            return this[ti];
                        },
                        enumerable: !0,
                        configurable: !0
                    })
                }), ii = {
                    STOP_IMMEDIATE_PROPAGATION_FLAG: ei,
                    createEventWrapper: function(e, t) {
                        var n = "number" == typeof e.timeStamp ? e.timeStamp : Date.now(), r = {
                            type: {
                                value: e.type,
                                enumerable: !0
                            },
                            target: {
                                value: t,
                                enumerable: !0
                            },
                            currentTarget: {
                                value: t,
                                enumerable: !0
                            },
                            eventPhase: {
                                value: 2,
                                enumerable: !0
                            },
                            bubbles: {
                                value: Boolean(e.bubbles),
                                enumerable: !0
                            },
                            cancelable: {
                                value: Boolean(e.cancelable),
                                enumerable: !0
                            },
                            timeStamp: {
                                value: n,
                                enumerable: !0
                            },
                            isTrusted: {
                                value: !1,
                                enumerable: !0
                            }
                        };
                        return r[ei] = {
                            value: !1,
                            writable: !0
                        }, r[ti] = {
                            value: !1,
                            writable: !0
                        }, r[ni] = {
                            value: e
                        }, void 0 !== e.detail && (r.detail = {
                            value: e.detail,
                            enumerable: !0
                        }), Object.create(Object.create(e, ri), r);
                    }
                }, oi = l(function(e) {
                    var t = Hr.LISTENERS, n = Hr.CAPTURE, i = Hr.BUBBLE, s = Hr.ATTRIBUTE, a = Hr.newNode, u = Xr.defineCustomEventTarget, c = ii.createEventWrapper, l = ii.STOP_IMMEDIATE_PROPAGATION_FLAG, f = void 0 !== o && void 0 !== o.EventTarget, h = e.exports = function e() {
                        if (!(this instanceof e)) {
                            if (1 === arguments.length && Array.isArray(arguments[0])) return u(e, arguments[0]);
                            if (arguments.length > 0) {
                                for (var n = Array(arguments.length), r = 0; r < arguments.length; ++r) n[r] = arguments[r];
                                return u(e, n);
                            }
                            throw new TypeError("Cannot call a class as a function");
                        }
                        Object.defineProperty(this, t, {
                            value: Object.create(null)
                        });
                    };
                    h.prototype = Object.create((f ? o.EventTarget : Object).prototype, {
                        constructor: {
                            value: h,
                            writable: !0,
                            configurable: !0
                        },
                        addEventListener: {
                            value: function(e, o, s) {
                                if (null == o) return !1;
                                if ("function" != typeof o && "object" != (void 0 === o ? "undefined" : r(o))) throw new TypeError('"listener" is not an object.');
                                var u = s ? n : i, c = this[t][e];
                                if (null == c) return this[t][e] = a(o, u), !0;
                                for (var l = null; null != c; ) {
                                    if (c.listener === o && c.kind === u) return !1;
                                    l = c, c = c.next;
                                }
                                return l.next = a(o, u), !0;
                            },
                            configurable: !0,
                            writable: !0
                        },
                        removeEventListener: {
                            value: function(e, r, o) {
                                if (null == r) return !1;
                                for (var s = o ? n : i, a = null, u = this[t][e]; null != u; ) {
                                    if (u.listener === r && u.kind === s) return null == a ? this[t][e] = u.next : a.next = u.next, 
                                    !0;
                                    a = u, u = u.next;
                                }
                                return !1;
                            },
                            configurable: !0,
                            writable: !0
                        },
                        dispatchEvent: {
                            value: function(e) {
                                var n = this[t][e.type];
                                if (null == n) return !0;
                                for (var r = c(e, this); null != n && ("function" == typeof n.listener ? n.listener.call(this, r) : n.kind !== s && "function" == typeof n.listener.handleEvent && n.listener.handleEvent(r), 
                                !r[l]); ) n = n.next;
                                return !r.defaultPrevented;
                            },
                            configurable: !0,
                            writable: !0
                        }
                    });
                }), si = function() {
                    function e() {
                        Sr(this, e), this._entries = [];
                    }
                    return e.prototype.append = function(e, t) {
                        if ("string" != typeof e) throw new TypeError("FormData name must be a string");
                        if ("string" != typeof t && ("object" !== (void 0 === t ? "undefined" : Er(t)) || "string" != typeof t.uri)) throw new TypeError("FormData value must be a string or { uri: tempFilePath }");
                        this._entries.push([ e, t ]);
                    }, e.prototype.set = function(e, t) {
                        var n = this.get(e);
                        n ? n[1] = t : this.append(e, t);
                    }, e.prototype.delete = function(e) {
                        this._entries = this._entries.filter(function(t) {
                            return t[0] !== e;
                        });
                    }, e.prototype.entries = function() {
                        return this._entries;
                    }, e.prototype.get = function(e) {
                        return this._entries.find(function(t) {
                            return t[0] === e;
                        });
                    }, e.prototype.getAll = function(e) {
                        return this._entries.filter(function(t) {
                            return t[0] === e;
                        });
                    }, e.prototype.has = function(e) {
                        return this._entries.some(function(t) {
                            return t[0] === e;
                        });
                    }, e.prototype.keys = function() {
                        return this._entries.map(function(e) {
                            return e[0];
                        });
                    }, e.prototype.values = function() {
                        return this._entries.map(function(e) {
                            return e[1];
                        });
                    }, e;
                }(), ai = 0, ui = 4, ci = [ "abort", "error", "load", "loadstart", "progress", "timeout", "loadend", "readystatechange" ], li = function(e) {
                    function t() {
                        return Sr(this, t), Nr(this, e.apply(this, arguments));
                    }
                    return Fr(t, e), t;
                }(oi([ "abort", "error", "load", "loadstart", "progress", "timeout", "loadend" ])), fi = function(e) {
                    function t() {
                        Sr(this, t);
                        var n = Nr(this, e.call(this));
                        return n.readyState = ai, n._headers = {}, n.upload = new li(), n;
                    }
                    return Fr(t, e), t.prototype.abort = function() {
                        if (!this._request || this._request.abort) return this.status = 0, this.readyState = ui, 
                        this._request.abort();
                        throw new Error("该版本基础库不支持 abort request");
                    }, t.prototype.getAllResponseHeaders = function() {
                        var e = this;
                        return this._responseHeaders ? Yr(this._responseHeaders).map(function(t) {
                            return t + ": " + e._responseHeaders[t];
                        }).join("\r\n") : "";
                    }, t.prototype.getResponseHeader = function(e) {
                        var t = e.toLowerCase();
                        return this._responseHeaders && this._responseHeaders[t] ? this._responseHeaders[t] : null;
                    }, t.prototype.overrideMimeType = function() {
                        throw new Error("not supported in weapp");
                    }, t.prototype.open = function(e, t) {
                        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        if (this.readyState !== ai) throw new Error("request is already opened");
                        if (!n) throw new Error("sync request is not supported");
                        this._method = e, this._url = t, this.readyState = 1, this.dispatchEvent({
                            type: "readystatechange"
                        });
                    }, t.prototype.setRequestHeader = function(e, t) {
                        if (1 !== this.readyState) throw new Error("request is not opened");
                        this._headers[e.toLowerCase()] = t;
                    }, t.prototype.send = function(e) {
                        var t = this;
                        if (1 !== this.readyState) throw new Error("request is not opened");
                        if (e instanceof si) {
                            var n = e.entries(), r = n.filter(function(e) {
                                return "string" != typeof e[1];
                            });
                            if (0 === r.length) throw new Error("Must specify a Blob field in FormData");
                            r.length > 1 && console.warn("Only the first Blob will be send in Weapp");
                            var o = n.filter(function(e) {
                                return "string" == typeof e[1];
                            }).reduce(function(e, t) {
                                return Jr(e, Ir({}, t[0], t[1]));
                            }, {});
                            this._request = wx.uploadFile({
                                url: this._url,
                                name: r[0][0],
                                filePath: r[0][1].uri,
                                formData: o,
                                header: this._headers,
                                success: v.bind(this),
                                fail: function(e) {
                                    t.status = 0, t.readyState = ui, t.dispatchEvent({
                                        type: "readystatechange"
                                    }), t.dispatchEvent({
                                        type: "error"
                                    });
                                }
                            }), this._request && this._request.onProgressUpdate && this._request.onProgressUpdate(function(e) {
                                var n = e.totalBytesSent, r = e.totalBytesExpectedToSend;
                                t.upload.dispatchEvent({
                                    type: "progress",
                                    loaded: n,
                                    total: r
                                });
                            });
                        } else this._request = i.invokeHttpRequest("leancloudAPI", this._url, e || "", this._method.toUpperCase(), this._headers, v.bind(this), function(e) {
                            t.status = 0, t.readyState = ui, t.dispatchEvent({
                                type: "readystatechange"
                            }), t.dispatchEvent({
                                type: "error"
                            });
                        });
                    }, t;
                }(oi(ci));
                Jr(fi, {
                    UNSENT: ai,
                    OPENED: 1,
                    HEADERS_RECEIVED: 2,
                    LOADING: 3,
                    DONE: ui
                });
                var hi = fi, di = l(function(e, t) {
                    t.__esModule = !0;
                    var n = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }(Cr);
                    t.default = function() {
                        function e(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var i = t[r];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                                (0, n.default)(e, i.key, i);
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t;
                        };
                    }();
                }), pi = c(di), vi = 0, yi = 1, mi = 3, gi = void 0, _i = function(e) {
                    function t(n, r) {
                        if (Sr(this, t), !n) throw new TypeError("Failed to construct 'WebSocket': url required");
                        if (r && (!wx.canIUse || !wx.canIUse("connectSocket.object.protocols"))) throw new Error("subprotocal not supported in weapp");
                        var i = Nr(this, e.call(this));
                        return i._url = n, i._protocal = r || "", i._readyState = vi, gi && gi.dispatchEvent({
                            type: "close"
                        }), gi = i, wx.onSocketOpen(function(e) {
                            gi && (gi._readyState = yi, gi.dispatchEvent({
                                type: "open"
                            }));
                        }), wx.onSocketError(y), wx.onSocketMessage(function(e) {
                            if (gi) {
                                var t = e.data, n = e.origin, r = e.ports, i = e.source;
                                gi.dispatchEvent({
                                    data: t,
                                    origin: n,
                                    ports: r,
                                    source: i,
                                    type: "message"
                                });
                            }
                        }), wx.onSocketClose(function(e) {
                            if (gi) {
                                gi._readyState = mi;
                                var t = e.code, n = e.reason, r = e.wasClean;
                                gi.dispatchEvent({
                                    code: t,
                                    reason: n,
                                    wasClean: r,
                                    type: "close"
                                }), gi = null;
                            }
                        }), wx.connectSocket({
                            url: n,
                            protocals: i._protocal,
                            fail: function(e) {
                                return setTimeout(function() {
                                    return y(e);
                                }, 0);
                            }
                        }), i;
                    }
                    return Fr(t, e), t.prototype.close = function() {
                        this.readyState !== mi && (this.readyState === vi && console.warn("close WebSocket which is connecting might not work"), 
                        wx.closeSocket());
                    }, t.prototype.send = function(e) {
                        if (this.readyState !== yi) throw new Error("INVALID_STATE_ERR");
                        if (!("string" == typeof e || e instanceof ArrayBuffer)) throw new TypeError("only String/ArrayBuffer supported");
                        wx.sendSocketMessage({
                            data: e
                        });
                    }, pi(t, [ {
                        key: "url",
                        get: function() {
                            return this._url;
                        }
                    }, {
                        key: "protocal",
                        get: function() {
                            return this._protocal;
                        }
                    }, {
                        key: "readyState",
                        get: function() {
                            return this._readyState;
                        }
                    } ]), t;
                }(oi([ "open", "error", "message", "close" ]));
                Jr(_i, {
                    CONNECTING: vi,
                    OPEN: yi,
                    CLOSING: 2,
                    CLOSED: mi
                });
                var bi = _i, wi = l(function(e, t) {
                    t.polyfill = function(e) {
                        if (wx.onNetworkStatusChange && !e.__onlineOfflinePolyfilled) {
                            e.__onlineOfflinePolyfilled = !0;
                            var t = new oi();
                            e.dispatchEvent || (e.addEventListener = t.addEventListener.bind(t), e.removeEventListener = t.removeEventListener.bind(t), 
                            e.dispatchEvent = t.dispatchEvent.bind(t), "function" != typeof postMessage || e.importScripts || (e.importScripts = function() {
                                throw new Error("mocked");
                            })), wx.getNetworkType({
                                success: function(t) {
                                    var n = t.networkType;
                                    e.onLine = "none" !== n, wx.onNetworkStatusChange(function(t) {
                                        var n = t.isConnected;
                                        e.onLine !== n && (e.onLine = n, e.dispatchEvent({
                                            type: n ? "online" : "offline"
                                        }));
                                    });
                                }
                            });
                        }
                    };
                }), Ei = (wi.polyfill, {}), Si = {
                    polyfill: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M || o;
                        if ("object" !== (void 0 === e ? "undefined" : Er(e))) throw new Error("polyfill target is not an Object");
                        var t = {
                            localStorage: Tr,
                            XMLHttpRequest: hi,
                            FormData: si,
                            WebSocket: bi,
                            Object: Object,
                            navigator: Ei
                        };
                        for (var n in t) e[n] || (e[n] = t[n]);
                        wi.polyfill(e), e.navigator.product = "ReactNative";
                    },
                    localStorage: Tr,
                    XMLHttpRequest: hi,
                    FormData: si,
                    WebSocket: bi
                }.polyfill;
                try {
                    Si();
                } catch (e) {}
                try {
                    Si(GameGlobal);
                } catch (e) {}
                try {
                    Si(o = o || {});
                } catch (e) {}
                try {
                    n = n || Tr;
                } catch (e) {}
                try {
                    e = e || hi;
                } catch (e) {}
                try {
                    FormData = FormData || si;
                } catch (e) {}
                try {
                    WebSocket = WebSocket || bi;
                } catch (e) {}
                try {
                    t = t || Ei;
                } catch (e) {}
                var Ti = l(function(e) {
                    !function(t, n) {
                        "function" == typeof u && e && e.exports ? e.exports = n() : (t.dcodeIO = t.dcodeIO || {}).Long = n();
                    }(M, function() {
                        function e(e, t, n) {
                            this.low = 0 | e, this.high = 0 | t, this.unsigned = !!n;
                        }
                        function t(e) {
                            return !0 === (e && e.__isLong__);
                        }
                        function n(e, t) {
                            var n, r, o;
                            return t ? (e >>>= 0, (o = 0 <= e && e < 256) && (r = u[e]) ? r : (n = i(e, (0 | e) < 0 ? -1 : 0, !0), 
                            o && (u[e] = n), n)) : (e |= 0, (o = -128 <= e && e < 128) && (r = a[e]) ? r : (n = i(e, e < 0 ? -1 : 0, !1), 
                            o && (a[e] = n), n));
                        }
                        function r(e, t) {
                            if (isNaN(e) || !isFinite(e)) return t ? v : p;
                            if (t) {
                                if (e < 0) return v;
                                if (e >= f) return b;
                            } else {
                                if (e <= -h) return w;
                                if (e + 1 >= h) return _;
                            }
                            return e < 0 ? r(-e, t).neg() : i(e % l | 0, e / l | 0, t);
                        }
                        function i(t, n, r) {
                            return new e(t, n, r);
                        }
                        function o(e, t, n) {
                            if (0 === e.length) throw Error("empty string");
                            if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) return p;
                            if ("number" == typeof t ? (n = t, t = !1) : t = !!t, (n = n || 10) < 2 || 36 < n) throw RangeError("radix");
                            var i;
                            if ((i = e.indexOf("-")) > 0) throw Error("interior hyphen");
                            if (0 === i) return o(e.substring(1), t, n).neg();
                            for (var s = r(c(n, 8)), a = p, u = 0; u < e.length; u += 8) {
                                var l = Math.min(8, e.length - u), f = parseInt(e.substring(u, u + l), n);
                                if (l < 8) {
                                    var h = r(c(n, l));
                                    a = a.mul(h).add(r(f));
                                } else a = a.mul(s), a = a.add(r(f));
                            }
                            return a.unsigned = t, a;
                        }
                        function s(t) {
                            return t instanceof e ? t : "number" == typeof t ? r(t) : "string" == typeof t ? o(t) : i(t.low, t.high, t.unsigned);
                        }
                        Object.defineProperty(e.prototype, "__isLong__", {
                            value: !0,
                            enumerable: !1,
                            configurable: !1
                        }), e.isLong = t;
                        var a = {}, u = {};
                        e.fromInt = n, e.fromNumber = r, e.fromBits = i;
                        var c = Math.pow;
                        e.fromString = o, e.fromValue = s;
                        var l = 4294967296, f = l * l, h = f / 2, d = n(1 << 24), p = n(0);
                        e.ZERO = p;
                        var v = n(0, !0);
                        e.UZERO = v;
                        var y = n(1);
                        e.ONE = y;
                        var m = n(1, !0);
                        e.UONE = m;
                        var g = n(-1);
                        e.NEG_ONE = g;
                        var _ = i(-1, 2147483647, !1);
                        e.MAX_VALUE = _;
                        var b = i(-1, -1, !0);
                        e.MAX_UNSIGNED_VALUE = b;
                        var w = i(0, -2147483648, !1);
                        e.MIN_VALUE = w;
                        var E = e.prototype;
                        return E.toInt = function() {
                            return this.unsigned ? this.low >>> 0 : this.low;
                        }, E.toNumber = function() {
                            return this.unsigned ? (this.high >>> 0) * l + (this.low >>> 0) : this.high * l + (this.low >>> 0);
                        }, E.toString = function(e) {
                            if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
                            if (this.isZero()) return "0";
                            if (this.isNegative()) {
                                if (this.eq(w)) {
                                    var t = r(e), n = this.div(t), i = n.mul(t).sub(this);
                                    return n.toString(e) + i.toInt().toString(e);
                                }
                                return "-" + this.neg().toString(e);
                            }
                            for (var o = r(c(e, 6), this.unsigned), s = this, a = ""; ;) {
                                var u = s.div(o), l = (s.sub(u.mul(o)).toInt() >>> 0).toString(e);
                                if ((s = u).isZero()) return l + a;
                                for (;l.length < 6; ) l = "0" + l;
                                a = "" + l + a;
                            }
                        }, E.getHighBits = function() {
                            return this.high;
                        }, E.getHighBitsUnsigned = function() {
                            return this.high >>> 0;
                        }, E.getLowBits = function() {
                            return this.low;
                        }, E.getLowBitsUnsigned = function() {
                            return this.low >>> 0;
                        }, E.getNumBitsAbs = function() {
                            if (this.isNegative()) return this.eq(w) ? 64 : this.neg().getNumBitsAbs();
                            for (var e = 0 != this.high ? this.high : this.low, t = 31; t > 0 && 0 == (e & 1 << t); t--) ;
                            return 0 != this.high ? t + 33 : t + 1;
                        }, E.isZero = function() {
                            return 0 === this.high && 0 === this.low;
                        }, E.isNegative = function() {
                            return !this.unsigned && this.high < 0;
                        }, E.isPositive = function() {
                            return this.unsigned || this.high >= 0;
                        }, E.isOdd = function() {
                            return 1 == (1 & this.low);
                        }, E.isEven = function() {
                            return 0 == (1 & this.low);
                        }, E.equals = function(e) {
                            return t(e) || (e = s(e)), (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && this.high === e.high && this.low === e.low;
                        }, E.eq = E.equals, E.notEquals = function(e) {
                            return !this.eq(e);
                        }, E.neq = E.notEquals, E.lessThan = function(e) {
                            return this.comp(e) < 0;
                        }, E.lt = E.lessThan, E.lessThanOrEqual = function(e) {
                            return this.comp(e) <= 0;
                        }, E.lte = E.lessThanOrEqual, E.greaterThan = function(e) {
                            return this.comp(e) > 0;
                        }, E.gt = E.greaterThan, E.greaterThanOrEqual = function(e) {
                            return this.comp(e) >= 0;
                        }, E.gte = E.greaterThanOrEqual, E.compare = function(e) {
                            if (t(e) || (e = s(e)), this.eq(e)) return 0;
                            var n = this.isNegative(), r = e.isNegative();
                            return n && !r ? -1 : !n && r ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1;
                        }, E.comp = E.compare, E.negate = function() {
                            return !this.unsigned && this.eq(w) ? w : this.not().add(y);
                        }, E.neg = E.negate, E.add = function(e) {
                            t(e) || (e = s(e));
                            var n = this.high >>> 16, r = 65535 & this.high, o = this.low >>> 16, a = 65535 & this.low, u = e.high >>> 16, c = 65535 & e.high, l = e.low >>> 16, f = 0, h = 0, d = 0, p = 0;
                            return p += a + (65535 & e.low), d += p >>> 16, p &= 65535, d += o + l, h += d >>> 16, 
                            d &= 65535, h += r + c, f += h >>> 16, h &= 65535, f += n + u, f &= 65535, i(d << 16 | p, f << 16 | h, this.unsigned);
                        }, E.subtract = function(e) {
                            return t(e) || (e = s(e)), this.add(e.neg());
                        }, E.sub = E.subtract, E.multiply = function(e) {
                            if (this.isZero()) return p;
                            if (t(e) || (e = s(e)), e.isZero()) return p;
                            if (this.eq(w)) return e.isOdd() ? w : p;
                            if (e.eq(w)) return this.isOdd() ? w : p;
                            if (this.isNegative()) return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
                            if (e.isNegative()) return this.mul(e.neg()).neg();
                            if (this.lt(d) && e.lt(d)) return r(this.toNumber() * e.toNumber(), this.unsigned);
                            var n = this.high >>> 16, o = 65535 & this.high, a = this.low >>> 16, u = 65535 & this.low, c = e.high >>> 16, l = 65535 & e.high, f = e.low >>> 16, h = 65535 & e.low, v = 0, y = 0, m = 0, g = 0;
                            return g += u * h, m += g >>> 16, g &= 65535, m += a * h, y += m >>> 16, m &= 65535, 
                            m += u * f, y += m >>> 16, m &= 65535, y += o * h, v += y >>> 16, y &= 65535, y += a * f, 
                            v += y >>> 16, y &= 65535, y += u * l, v += y >>> 16, y &= 65535, v += n * h + o * f + a * l + u * c, 
                            v &= 65535, i(m << 16 | g, v << 16 | y, this.unsigned);
                        }, E.mul = E.multiply, E.divide = function(e) {
                            if (t(e) || (e = s(e)), e.isZero()) throw Error("division by zero");
                            if (this.isZero()) return this.unsigned ? v : p;
                            var n, i, o;
                            if (this.unsigned) {
                                if (e.unsigned || (e = e.toUnsigned()), e.gt(this)) return v;
                                if (e.gt(this.shru(1))) return m;
                                o = v;
                            } else {
                                if (this.eq(w)) return e.eq(y) || e.eq(g) ? w : e.eq(w) ? y : (n = this.shr(1).div(e).shl(1)).eq(p) ? e.isNegative() ? y : g : (i = this.sub(e.mul(n)), 
                                o = n.add(i.div(e)));
                                if (e.eq(w)) return this.unsigned ? v : p;
                                if (this.isNegative()) return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
                                if (e.isNegative()) return this.div(e.neg()).neg();
                                o = p;
                            }
                            for (i = this; i.gte(e); ) {
                                n = Math.max(1, Math.floor(i.toNumber() / e.toNumber()));
                                for (var a = Math.ceil(Math.log(n) / Math.LN2), u = a <= 48 ? 1 : c(2, a - 48), l = r(n), f = l.mul(e); f.isNegative() || f.gt(i); ) f = (l = r(n -= u, this.unsigned)).mul(e);
                                l.isZero() && (l = y), o = o.add(l), i = i.sub(f);
                            }
                            return o;
                        }, E.div = E.divide, E.modulo = function(e) {
                            return t(e) || (e = s(e)), this.sub(this.div(e).mul(e));
                        }, E.mod = E.modulo, E.not = function() {
                            return i(~this.low, ~this.high, this.unsigned);
                        }, E.and = function(e) {
                            return t(e) || (e = s(e)), i(this.low & e.low, this.high & e.high, this.unsigned);
                        }, E.or = function(e) {
                            return t(e) || (e = s(e)), i(this.low | e.low, this.high | e.high, this.unsigned);
                        }, E.xor = function(e) {
                            return t(e) || (e = s(e)), i(this.low ^ e.low, this.high ^ e.high, this.unsigned);
                        }, E.shiftLeft = function(e) {
                            return t(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? i(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : i(0, this.low << e - 32, this.unsigned);
                        }, E.shl = E.shiftLeft, E.shiftRight = function(e) {
                            return t(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? i(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : i(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned);
                        }, E.shr = E.shiftRight, E.shiftRightUnsigned = function(e) {
                            if (t(e) && (e = e.toInt()), 0 == (e &= 63)) return this;
                            var n = this.high;
                            return e < 32 ? i(this.low >>> e | n << 32 - e, n >>> e, this.unsigned) : 32 === e ? i(n, 0, this.unsigned) : i(n >>> e - 32, 0, this.unsigned);
                        }, E.shru = E.shiftRightUnsigned, E.toSigned = function() {
                            return this.unsigned ? i(this.low, this.high, !1) : this;
                        }, E.toUnsigned = function() {
                            return this.unsigned ? this : i(this.low, this.high, !0);
                        }, E.toBytes = function(e) {
                            return e ? this.toBytesLE() : this.toBytesBE();
                        }, E.toBytesLE = function() {
                            var e = this.high, t = this.low;
                            return [ 255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255 ];
                        }, E.toBytesBE = function() {
                            var e = this.high, t = this.low;
                            return [ e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t ];
                        }, e;
                    });
                }), Oi = l(function(e) {
                    !function(t, n) {
                        "function" == typeof u && e && e.exports ? e.exports = function() {
                            var e;
                            try {
                                e = Ti;
                            } catch (e) {}
                            return n(e);
                        }() : (t.dcodeIO = t.dcodeIO || {}).ByteBuffer = n(t.dcodeIO.Long);
                    }(M, function(e) {
                        function t(e) {
                            var t = 0;
                            return function() {
                                return t < e.length ? e.charCodeAt(t++) : null;
                            };
                        }
                        function n() {
                            var e = [], t = [];
                            return function() {
                                if (0 === arguments.length) return t.join("") + c.apply(String, e);
                                e.length + arguments.length > 1024 && (t.push(c.apply(String, e)), e.length = 0), 
                                Array.prototype.push.apply(e, arguments);
                            };
                        }
                        function i(e, t, n, r, i) {
                            var o, s, a = 8 * i - r - 1, u = (1 << a) - 1, c = u >> 1, l = -7, f = n ? i - 1 : 0, h = n ? -1 : 1, d = e[t + f];
                            for (f += h, o = d & (1 << -l) - 1, d >>= -l, l += a; l > 0; o = 256 * o + e[t + f], 
                            f += h, l -= 8) ;
                            for (s = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; s = 256 * s + e[t + f], f += h, 
                            l -= 8) ;
                            if (0 === o) o = 1 - c; else {
                                if (o === u) return s ? NaN : 1 / 0 * (d ? -1 : 1);
                                s += Math.pow(2, r), o -= c;
                            }
                            return (d ? -1 : 1) * s * Math.pow(2, o - r);
                        }
                        function o(e, t, n, r, i, o) {
                            var s, a, u, c = 8 * o - i - 1, l = (1 << c) - 1, f = l >> 1, h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = r ? 0 : o - 1, p = r ? 1 : -1, v = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), 
                            t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (t += s + f >= 1 ? h / u : h * Math.pow(2, 1 - f)) * u >= 2 && (s++, 
                            u /= 2), s + f >= l ? (a = 0, s = l) : s + f >= 1 ? (a = (t * u - 1) * Math.pow(2, i), 
                            s += f) : (a = t * Math.pow(2, f - 1) * Math.pow(2, i), s = 0)); i >= 8; e[n + d] = 255 & a, 
                            d += p, a /= 256, i -= 8) ;
                            for (s = s << i | a, c += i; c > 0; e[n + d] = 255 & s, d += p, s /= 256, c -= 8) ;
                            e[n + d - p] |= 128 * v;
                        }
                        var s = function e(t, n, r) {
                            if (void 0 === t && (t = e.DEFAULT_CAPACITY), void 0 === n && (n = e.DEFAULT_ENDIAN), 
                            void 0 === r && (r = e.DEFAULT_NOASSERT), !r) {
                                if ((t |= 0) < 0) throw RangeError("Illegal capacity");
                                n = !!n, r = !!r;
                            }
                            this.buffer = 0 === t ? u : new ArrayBuffer(t), this.view = 0 === t ? null : new Uint8Array(this.buffer), 
                            this.offset = 0, this.markedOffset = -1, this.limit = t, this.littleEndian = n, 
                            this.noAssert = r;
                        };
                        s.VERSION = "5.0.1", s.LITTLE_ENDIAN = !0, s.BIG_ENDIAN = !1, s.DEFAULT_CAPACITY = 16, 
                        s.DEFAULT_ENDIAN = s.BIG_ENDIAN, s.DEFAULT_NOASSERT = !1, s.Long = e || null;
                        var a = s.prototype;
                        Object.defineProperty(a, "__isByteBuffer__", {
                            value: !0,
                            enumerable: !1,
                            configurable: !1
                        });
                        var u = new ArrayBuffer(0), c = String.fromCharCode;
                        s.accessor = function() {
                            return Uint8Array;
                        }, s.allocate = function(e, t, n) {
                            return new s(e, t, n);
                        }, s.concat = function(e, t, n, r) {
                            "boolean" != typeof t && "string" == typeof t || (r = n, n = t, t = void 0);
                            for (var i, o = 0, a = 0, u = e.length; a < u; ++a) s.isByteBuffer(e[a]) || (e[a] = s.wrap(e[a], t)), 
                            (i = e[a].limit - e[a].offset) > 0 && (o += i);
                            if (0 === o) return new s(0, n, r);
                            var c, l = new s(o, n, r);
                            for (a = 0; a < u; ) (i = (c = e[a++]).limit - c.offset) <= 0 || (l.view.set(c.view.subarray(c.offset, c.limit), l.offset), 
                            l.offset += i);
                            return l.limit = l.offset, l.offset = 0, l;
                        }, s.isByteBuffer = function(e) {
                            return !0 === (e && e.__isByteBuffer__);
                        }, s.type = function() {
                            return ArrayBuffer;
                        }, s.wrap = function(e, t, n, i) {
                            if ("string" != typeof t && (i = n, n = t, t = void 0), "string" == typeof e) switch (void 0 === t && (t = "utf8"), 
                            t) {
                              case "base64":
                                return s.fromBase64(e, n);

                              case "hex":
                                return s.fromHex(e, n);

                              case "binary":
                                return s.fromBinary(e, n);

                              case "utf8":
                                return s.fromUTF8(e, n);

                              case "debug":
                                return s.fromDebug(e, n);

                              default:
                                throw Error("Unsupported encoding: " + t);
                            }
                            if (null === e || "object" != (void 0 === e ? "undefined" : r(e))) throw TypeError("Illegal buffer");
                            var o;
                            if (s.isByteBuffer(e)) return o = a.clone.call(e), o.markedOffset = -1, o;
                            if (e instanceof Uint8Array) o = new s(0, n, i), e.length > 0 && (o.buffer = e.buffer, 
                            o.offset = e.byteOffset, o.limit = e.byteOffset + e.byteLength, o.view = new Uint8Array(e.buffer)); else if (e instanceof ArrayBuffer) o = new s(0, n, i), 
                            e.byteLength > 0 && (o.buffer = e, o.offset = 0, o.limit = e.byteLength, o.view = e.byteLength > 0 ? new Uint8Array(e) : null); else {
                                if ("[object Array]" !== Object.prototype.toString.call(e)) throw TypeError("Illegal buffer");
                                (o = new s(e.length, n, i)).limit = e.length;
                                for (var u = 0; u < e.length; ++u) o.view[u] = e[u];
                            }
                            return o;
                        }, a.writeBitSet = function(e, t) {
                            var n = void 0 === t;
                            if (n && (t = this.offset), !this.noAssert) {
                                if (!(e instanceof Array)) throw TypeError("Illegal BitSet: Not an array");
                                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                                if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
                            }
                            var r, i = t, o = e.length, s = o >> 3, a = 0;
                            for (t += this.writeVarint32(o, t); s--; ) r = 1 & !!e[a++] | (1 & !!e[a++]) << 1 | (1 & !!e[a++]) << 2 | (1 & !!e[a++]) << 3 | (1 & !!e[a++]) << 4 | (1 & !!e[a++]) << 5 | (1 & !!e[a++]) << 6 | (1 & !!e[a++]) << 7, 
                            this.writeByte(r, t++);
                            if (a < o) {
                                var u = 0;
                                for (r = 0; a < o; ) r |= (1 & !!e[a++]) << u++;
                                this.writeByte(r, t++);
                            }
                            return n ? (this.offset = t, this) : t - i;
                        }, a.readBitSet = function(e) {
                            var t = void 0 === e;
                            t && (e = this.offset);
                            var n, r = this.readVarint32(e), i = r.value, o = i >> 3, s = 0, a = [];
                            for (e += r.length; o--; ) n = this.readByte(e++), a[s++] = !!(1 & n), a[s++] = !!(2 & n), 
                            a[s++] = !!(4 & n), a[s++] = !!(8 & n), a[s++] = !!(16 & n), a[s++] = !!(32 & n), 
                            a[s++] = !!(64 & n), a[s++] = !!(128 & n);
                            if (s < i) {
                                var u = 0;
                                for (n = this.readByte(e++); s < i; ) a[s++] = !!(n >> u++ & 1);
                            }
                            return t && (this.offset = e), a;
                        }, a.readBytes = function(e, t) {
                            var n = void 0 === t;
                            if (n && (t = this.offset), !this.noAssert) {
                                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                                if ((t >>>= 0) < 0 || t + e > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+" + e + ") <= " + this.buffer.byteLength);
                            }
                            var r = this.slice(t, t + e);
                            return n && (this.offset += e), r;
                        }, a.writeBytes = a.append, a.writeInt8 = function(e, t) {
                            var n = void 0 === t;
                            if (n && (t = this.offset), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                                if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                                if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
                            }
                            t += 1;
                            var r = this.buffer.byteLength;
                            return t > r && this.resize((r *= 2) > t ? r : t), t -= 1, this.view[t] = e, n && (this.offset += 1), 
                            this;
                        }, a.writeByte = a.writeInt8, a.readInt8 = function(e) {
                            var t = void 0 === e;
                            if (t && (e = this.offset), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                                if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
                            }
                            var n = this.view[e];
                            return 128 == (128 & n) && (n = -(255 - n + 1)), t && (this.offset += 1), n;
                        }, a.readByte = a.readInt8, a.writeUint8 = function(e, t) {
                            var n = void 0 === t;
                            if (n && (t = this.offset), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                                if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                                if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
                            }
                            t += 1;
                            var r = this.buffer.byteLength;
                            return t > r && this.resize((r *= 2) > t ? r : t), t -= 1, this.view[t] = e, n && (this.offset += 1), 
                            this;
                        }, a.writeUInt8 = a.writeUint8, a.readUint8 = function(e) {
                            var t = void 0 === e;
                            if (t && (e = this.offset), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                                if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
                            }
                            var n = this.view[e];
                            return t && (this.offset += 1), n;
                        }, a.readUInt8 = a.readUint8, a.writeInt16 = function(e, t) {
                            var n = void 0 === t;
                            if (n && (t = this.offset), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                                if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                                if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
                            }
                            t += 2;
                            var r = this.buffer.byteLength;
                            return t > r && this.resize((r *= 2) > t ? r : t), t -= 2, this.littleEndian ? (this.view[t + 1] = (65280 & e) >>> 8, 
                            this.view[t] = 255 & e) : (this.view[t] = (65280 & e) >>> 8, this.view[t + 1] = 255 & e), 
                            n && (this.offset += 2), this;
                        }, a.writeShort = a.writeInt16, a.readInt16 = function(e) {
                            var t = void 0 === e;
                            if (t && (e = this.offset), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                                if ((e >>>= 0) < 0 || e + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength);
                            }
                            var n = 0;
                            return this.littleEndian ? (n = this.view[e], n |= this.view[e + 1] << 8) : (n = this.view[e] << 8, 
                            n |= this.view[e + 1]), 32768 == (32768 & n) && (n = -(65535 - n + 1)), t && (this.offset += 2), 
                            n;
                        }, a.readShort = a.readInt16, a.writeUint16 = function(e, t) {
                            var n = void 0 === t;
                            if (n && (t = this.offset), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                                if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                                if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
                            }
                            t += 2;
                            var r = this.buffer.byteLength;
                            return t > r && this.resize((r *= 2) > t ? r : t), t -= 2, this.littleEndian ? (this.view[t + 1] = (65280 & e) >>> 8, 
                            this.view[t] = 255 & e) : (this.view[t] = (65280 & e) >>> 8, this.view[t + 1] = 255 & e), 
                            n && (this.offset += 2), this;
                        }, a.writeUInt16 = a.writeUint16, a.readUint16 = function(e) {
                            var t = void 0 === e;
                            if (t && (e = this.offset), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                                if ((e >>>= 0) < 0 || e + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength);
                            }
                            var n = 0;
                            return this.littleEndian ? (n = this.view[e], n |= this.view[e + 1] << 8) : (n = this.view[e] << 8, 
                            n |= this.view[e + 1]), t && (this.offset += 2), n;
                        }, a.readUInt16 = a.readUint16, a.writeInt32 = function(e, t) {
                            var n = void 0 === t;
                            if (n && (t = this.offset), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                                if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                                if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
                            }
                            t += 4;
                            var r = this.buffer.byteLength;
                            return t > r && this.resize((r *= 2) > t ? r : t), t -= 4, this.littleEndian ? (this.view[t + 3] = e >>> 24 & 255, 
                            this.view[t + 2] = e >>> 16 & 255, this.view[t + 1] = e >>> 8 & 255, this.view[t] = 255 & e) : (this.view[t] = e >>> 24 & 255, 
                            this.view[t + 1] = e >>> 16 & 255, this.view[t + 2] = e >>> 8 & 255, this.view[t + 3] = 255 & e), 
                            n && (this.offset += 4), this;
                        }, a.writeInt = a.writeInt32, a.readInt32 = function(e) {
                            var t = void 0 === e;
                            if (t && (e = this.offset), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                                if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength);
                            }
                            var n = 0;
                            return this.littleEndian ? (n = this.view[e + 2] << 16, n |= this.view[e + 1] << 8, 
                            n |= this.view[e], n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16, 
                            n |= this.view[e + 2] << 8, n |= this.view[e + 3], n += this.view[e] << 24 >>> 0), 
                            n |= 0, t && (this.offset += 4), n;
                        }, a.readInt = a.readInt32, a.writeUint32 = function(e, t) {
                            var n = void 0 === t;
                            if (n && (t = this.offset), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                                if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                                if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
                            }
                            t += 4;
                            var r = this.buffer.byteLength;
                            return t > r && this.resize((r *= 2) > t ? r : t), t -= 4, this.littleEndian ? (this.view[t + 3] = e >>> 24 & 255, 
                            this.view[t + 2] = e >>> 16 & 255, this.view[t + 1] = e >>> 8 & 255, this.view[t] = 255 & e) : (this.view[t] = e >>> 24 & 255, 
                            this.view[t + 1] = e >>> 16 & 255, this.view[t + 2] = e >>> 8 & 255, this.view[t + 3] = 255 & e), 
                            n && (this.offset += 4), this;
                        }, a.writeUInt32 = a.writeUint32, a.readUint32 = function(e) {
                            var t = void 0 === e;
                            if (t && (e = this.offset), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                                if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength);
                            }
                            var n = 0;
                            return this.littleEndian ? (n = this.view[e + 2] << 16, n |= this.view[e + 1] << 8, 
                            n |= this.view[e], n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16, 
                            n |= this.view[e + 2] << 8, n |= this.view[e + 3], n += this.view[e] << 24 >>> 0), 
                            t && (this.offset += 4), n;
                        }, a.readUInt32 = a.readUint32, e && (a.writeInt64 = function(t, n) {
                            var r = void 0 === n;
                            if (r && (n = this.offset), !this.noAssert) {
                                if ("number" == typeof t) t = e.fromNumber(t); else if ("string" == typeof t) t = e.fromString(t); else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
                                if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                                if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength);
                            }
                            "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t)), 
                            n += 8;
                            var i = this.buffer.byteLength;
                            n > i && this.resize((i *= 2) > n ? i : n), n -= 8;
                            var o = t.low, s = t.high;
                            return this.littleEndian ? (this.view[n + 3] = o >>> 24 & 255, this.view[n + 2] = o >>> 16 & 255, 
                            this.view[n + 1] = o >>> 8 & 255, this.view[n] = 255 & o, n += 4, this.view[n + 3] = s >>> 24 & 255, 
                            this.view[n + 2] = s >>> 16 & 255, this.view[n + 1] = s >>> 8 & 255, this.view[n] = 255 & s) : (this.view[n] = s >>> 24 & 255, 
                            this.view[n + 1] = s >>> 16 & 255, this.view[n + 2] = s >>> 8 & 255, this.view[n + 3] = 255 & s, 
                            n += 4, this.view[n] = o >>> 24 & 255, this.view[n + 1] = o >>> 16 & 255, this.view[n + 2] = o >>> 8 & 255, 
                            this.view[n + 3] = 255 & o), r && (this.offset += 8), this;
                        }, a.writeLong = a.writeInt64, a.readInt64 = function(t) {
                            var n = void 0 === t;
                            if (n && (t = this.offset), !this.noAssert) {
                                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                                if ((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength);
                            }
                            var r = 0, i = 0;
                            this.littleEndian ? (r = this.view[t + 2] << 16, r |= this.view[t + 1] << 8, r |= this.view[t], 
                            r += this.view[t + 3] << 24 >>> 0, t += 4, i = this.view[t + 2] << 16, i |= this.view[t + 1] << 8, 
                            i |= this.view[t], i += this.view[t + 3] << 24 >>> 0) : (i = this.view[t + 1] << 16, 
                            i |= this.view[t + 2] << 8, i |= this.view[t + 3], i += this.view[t] << 24 >>> 0, 
                            t += 4, r = this.view[t + 1] << 16, r |= this.view[t + 2] << 8, r |= this.view[t + 3], 
                            r += this.view[t] << 24 >>> 0);
                            var o = new e(r, i, !1);
                            return n && (this.offset += 8), o;
                        }, a.readLong = a.readInt64, a.writeUint64 = function(t, n) {
                            var r = void 0 === n;
                            if (r && (n = this.offset), !this.noAssert) {
                                if ("number" == typeof t) t = e.fromNumber(t); else if ("string" == typeof t) t = e.fromString(t); else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
                                if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                                if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength);
                            }
                            "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t)), 
                            n += 8;
                            var i = this.buffer.byteLength;
                            n > i && this.resize((i *= 2) > n ? i : n), n -= 8;
                            var o = t.low, s = t.high;
                            return this.littleEndian ? (this.view[n + 3] = o >>> 24 & 255, this.view[n + 2] = o >>> 16 & 255, 
                            this.view[n + 1] = o >>> 8 & 255, this.view[n] = 255 & o, n += 4, this.view[n + 3] = s >>> 24 & 255, 
                            this.view[n + 2] = s >>> 16 & 255, this.view[n + 1] = s >>> 8 & 255, this.view[n] = 255 & s) : (this.view[n] = s >>> 24 & 255, 
                            this.view[n + 1] = s >>> 16 & 255, this.view[n + 2] = s >>> 8 & 255, this.view[n + 3] = 255 & s, 
                            n += 4, this.view[n] = o >>> 24 & 255, this.view[n + 1] = o >>> 16 & 255, this.view[n + 2] = o >>> 8 & 255, 
                            this.view[n + 3] = 255 & o), r && (this.offset += 8), this;
                        }, a.writeUInt64 = a.writeUint64, a.readUint64 = function(t) {
                            var n = void 0 === t;
                            if (n && (t = this.offset), !this.noAssert) {
                                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                                if ((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength);
                            }
                            var r = 0, i = 0;
                            this.littleEndian ? (r = this.view[t + 2] << 16, r |= this.view[t + 1] << 8, r |= this.view[t], 
                            r += this.view[t + 3] << 24 >>> 0, t += 4, i = this.view[t + 2] << 16, i |= this.view[t + 1] << 8, 
                            i |= this.view[t], i += this.view[t + 3] << 24 >>> 0) : (i = this.view[t + 1] << 16, 
                            i |= this.view[t + 2] << 8, i |= this.view[t + 3], i += this.view[t] << 24 >>> 0, 
                            t += 4, r = this.view[t + 1] << 16, r |= this.view[t + 2] << 8, r |= this.view[t + 3], 
                            r += this.view[t] << 24 >>> 0);
                            var o = new e(r, i, !0);
                            return n && (this.offset += 8), o;
                        }, a.readUInt64 = a.readUint64), a.writeFloat32 = function(e, t) {
                            var n = void 0 === t;
                            if (n && (t = this.offset), !this.noAssert) {
                                if ("number" != typeof e) throw TypeError("Illegal value: " + e + " (not a number)");
                                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                                if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
                            }
                            t += 4;
                            var r = this.buffer.byteLength;
                            return t > r && this.resize((r *= 2) > t ? r : t), t -= 4, o(this.view, e, t, this.littleEndian, 23, 4), 
                            n && (this.offset += 4), this;
                        }, a.writeFloat = a.writeFloat32, a.readFloat32 = function(e) {
                            var t = void 0 === e;
                            if (t && (e = this.offset), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                                if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength);
                            }
                            var n = i(this.view, e, this.littleEndian, 23, 4);
                            return t && (this.offset += 4), n;
                        }, a.readFloat = a.readFloat32, a.writeFloat64 = function(e, t) {
                            var n = void 0 === t;
                            if (n && (t = this.offset), !this.noAssert) {
                                if ("number" != typeof e) throw TypeError("Illegal value: " + e + " (not a number)");
                                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                                if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
                            }
                            t += 8;
                            var r = this.buffer.byteLength;
                            return t > r && this.resize((r *= 2) > t ? r : t), t -= 8, o(this.view, e, t, this.littleEndian, 52, 8), 
                            n && (this.offset += 8), this;
                        }, a.writeDouble = a.writeFloat64, a.readFloat64 = function(e) {
                            var t = void 0 === e;
                            if (t && (e = this.offset), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                                if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength);
                            }
                            var n = i(this.view, e, this.littleEndian, 52, 8);
                            return t && (this.offset += 8), n;
                        }, a.readDouble = a.readFloat64, s.MAX_VARINT32_BYTES = 5, s.calculateVarint32 = function(e) {
                            return (e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 1 << 21 ? 3 : e < 1 << 28 ? 4 : 5;
                        }, s.zigZagEncode32 = function(e) {
                            return ((e |= 0) << 1 ^ e >> 31) >>> 0;
                        }, s.zigZagDecode32 = function(e) {
                            return e >>> 1 ^ -(1 & e) | 0;
                        }, a.writeVarint32 = function(e, t) {
                            var n = void 0 === t;
                            if (n && (t = this.offset), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                                if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                                if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength);
                            }
                            var r, i = s.calculateVarint32(e);
                            t += i;
                            var o = this.buffer.byteLength;
                            for (t > o && this.resize((o *= 2) > t ? o : t), t -= i, e >>>= 0; e >= 128; ) r = 127 & e | 128, 
                            this.view[t++] = r, e >>>= 7;
                            return this.view[t++] = e, n ? (this.offset = t, this) : i;
                        }, a.writeVarint32ZigZag = function(e, t) {
                            return this.writeVarint32(s.zigZagEncode32(e), t);
                        }, a.readVarint32 = function(e) {
                            var t = void 0 === e;
                            if (t && (e = this.offset), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                                if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
                            }
                            var n, r = 0, i = 0;
                            do {
                                if (!this.noAssert && e > this.limit) {
                                    var o = Error("Truncated");
                                    throw o.truncated = !0, o;
                                }
                                n = this.view[e++], r < 5 && (i |= (127 & n) << 7 * r), ++r;
                            } while (0 != (128 & n));
                            return i |= 0, t ? (this.offset = e, i) : {
                                value: i,
                                length: r
                            };
                        }, a.readVarint32ZigZag = function(e) {
                            var t = this.readVarint32(e);
                            return "object" == (void 0 === t ? "undefined" : r(t)) ? t.value = s.zigZagDecode32(t.value) : t = s.zigZagDecode32(t), 
                            t;
                        }, e && (s.MAX_VARINT64_BYTES = 10, s.calculateVarint64 = function(t) {
                            "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t));
                            var n = t.toInt() >>> 0, r = t.shiftRightUnsigned(28).toInt() >>> 0, i = t.shiftRightUnsigned(56).toInt() >>> 0;
                            return 0 == i ? 0 == r ? n < 16384 ? n < 128 ? 1 : 2 : n < 1 << 21 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 1 << 21 ? 7 : 8 : i < 128 ? 9 : 10;
                        }, s.zigZagEncode64 = function(t) {
                            return "number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t.toSigned()), 
                            t.shiftLeft(1).xor(t.shiftRight(63)).toUnsigned();
                        }, s.zigZagDecode64 = function(t) {
                            return "number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t.toSigned()), 
                            t.shiftRightUnsigned(1).xor(t.and(e.ONE).toSigned().negate()).toSigned();
                        }, a.writeVarint64 = function(t, n) {
                            var r = void 0 === n;
                            if (r && (n = this.offset), !this.noAssert) {
                                if ("number" == typeof t) t = e.fromNumber(t); else if ("string" == typeof t) t = e.fromString(t); else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
                                if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                                if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength);
                            }
                            "number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t.toSigned());
                            var i = s.calculateVarint64(t), o = t.toInt() >>> 0, a = t.shiftRightUnsigned(28).toInt() >>> 0, u = t.shiftRightUnsigned(56).toInt() >>> 0;
                            n += i;
                            var c = this.buffer.byteLength;
                            switch (n > c && this.resize((c *= 2) > n ? c : n), n -= i, i) {
                              case 10:
                                this.view[n + 9] = u >>> 7 & 1;

                              case 9:
                                this.view[n + 8] = 9 !== i ? 128 | u : 127 & u;

                              case 8:
                                this.view[n + 7] = 8 !== i ? a >>> 21 | 128 : a >>> 21 & 127;

                              case 7:
                                this.view[n + 6] = 7 !== i ? a >>> 14 | 128 : a >>> 14 & 127;

                              case 6:
                                this.view[n + 5] = 6 !== i ? a >>> 7 | 128 : a >>> 7 & 127;

                              case 5:
                                this.view[n + 4] = 5 !== i ? 128 | a : 127 & a;

                              case 4:
                                this.view[n + 3] = 4 !== i ? o >>> 21 | 128 : o >>> 21 & 127;

                              case 3:
                                this.view[n + 2] = 3 !== i ? o >>> 14 | 128 : o >>> 14 & 127;

                              case 2:
                                this.view[n + 1] = 2 !== i ? o >>> 7 | 128 : o >>> 7 & 127;

                              case 1:
                                this.view[n] = 1 !== i ? 128 | o : 127 & o;
                            }
                            return r ? (this.offset += i, this) : i;
                        }, a.writeVarint64ZigZag = function(e, t) {
                            return this.writeVarint64(s.zigZagEncode64(e), t);
                        }, a.readVarint64 = function(t) {
                            var n = void 0 === t;
                            if (n && (t = this.offset), !this.noAssert) {
                                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                                if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength);
                            }
                            var r = t, i = 0, o = 0, s = 0, a = 0;
                            if (a = this.view[t++], i = 127 & a, 128 & a && (a = this.view[t++], i |= (127 & a) << 7, 
                            (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], i |= (127 & a) << 14, 
                            (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], i |= (127 & a) << 21, 
                            (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], o = 127 & a, 
                            (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], o |= (127 & a) << 7, 
                            (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], o |= (127 & a) << 14, 
                            (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], o |= (127 & a) << 21, 
                            (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], s = 127 & a, 
                            (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], s |= (127 & a) << 7, 
                            128 & a || this.noAssert && void 0 === a)))))))))) throw Error("Buffer overrun");
                            var u = e.fromBits(i | o << 28, o >>> 4 | s << 24, !1);
                            return n ? (this.offset = t, u) : {
                                value: u,
                                length: t - r
                            };
                        }, a.readVarint64ZigZag = function(t) {
                            var n = this.readVarint64(t);
                            return n && n.value instanceof e ? n.value = s.zigZagDecode64(n.value) : n = s.zigZagDecode64(n), 
                            n;
                        }), a.writeCString = function(e, n) {
                            var r = void 0 === n;
                            r && (n = this.offset);
                            var i, o = e.length;
                            if (!this.noAssert) {
                                if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                                for (i = 0; i < o; ++i) if (0 === e.charCodeAt(i)) throw RangeError("Illegal str: Contains NULL-characters");
                                if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                                if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength);
                            }
                            o = f.calculateUTF16asUTF8(t(e))[1], n += o + 1;
                            var s = this.buffer.byteLength;
                            return n > s && this.resize((s *= 2) > n ? s : n), n -= o + 1, f.encodeUTF16toUTF8(t(e), function(e) {
                                this.view[n++] = e;
                            }.bind(this)), this.view[n++] = 0, r ? (this.offset = n, this) : o;
                        }, a.readCString = function(e) {
                            var t = void 0 === e;
                            if (t && (e = this.offset), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                                if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
                            }
                            var r, i = e, o = -1;
                            return f.decodeUTF8toUTF16(function() {
                                if (0 === o) return null;
                                if (e >= this.limit) throw RangeError("Illegal range: Truncated data, " + e + " < " + this.limit);
                                return 0 === (o = this.view[e++]) ? null : o;
                            }.bind(this), r = n(), !0), t ? (this.offset = e, r()) : {
                                string: r(),
                                length: e - i
                            };
                        }, a.writeIString = function(e, n) {
                            var r = void 0 === n;
                            if (r && (n = this.offset), !this.noAssert) {
                                if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                                if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                                if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength);
                            }
                            var i, o = n;
                            i = f.calculateUTF16asUTF8(t(e), this.noAssert)[1], n += 4 + i;
                            var s = this.buffer.byteLength;
                            if (n > s && this.resize((s *= 2) > n ? s : n), n -= 4 + i, this.littleEndian ? (this.view[n + 3] = i >>> 24 & 255, 
                            this.view[n + 2] = i >>> 16 & 255, this.view[n + 1] = i >>> 8 & 255, this.view[n] = 255 & i) : (this.view[n] = i >>> 24 & 255, 
                            this.view[n + 1] = i >>> 16 & 255, this.view[n + 2] = i >>> 8 & 255, this.view[n + 3] = 255 & i), 
                            n += 4, f.encodeUTF16toUTF8(t(e), function(e) {
                                this.view[n++] = e;
                            }.bind(this)), n !== o + 4 + i) throw RangeError("Illegal range: Truncated data, " + n + " == " + (n + 4 + i));
                            return r ? (this.offset = n, this) : n - o;
                        }, a.readIString = function(e) {
                            var t = void 0 === e;
                            if (t && (e = this.offset), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                                if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength);
                            }
                            var n = e, r = this.readUint32(e), i = this.readUTF8String(r, s.METRICS_BYTES, e += 4);
                            return e += i.length, t ? (this.offset = e, i.string) : {
                                string: i.string,
                                length: e - n
                            };
                        }, s.METRICS_CHARS = "c", s.METRICS_BYTES = "b", a.writeUTF8String = function(e, n) {
                            var r = void 0 === n;
                            if (r && (n = this.offset), !this.noAssert) {
                                if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                                if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength);
                            }
                            var i, o = n;
                            i = f.calculateUTF16asUTF8(t(e))[1], n += i;
                            var s = this.buffer.byteLength;
                            return n > s && this.resize((s *= 2) > n ? s : n), n -= i, f.encodeUTF16toUTF8(t(e), function(e) {
                                this.view[n++] = e;
                            }.bind(this)), r ? (this.offset = n, this) : n - o;
                        }, a.writeString = a.writeUTF8String, s.calculateUTF8Chars = function(e) {
                            return f.calculateUTF16asUTF8(t(e))[0];
                        }, s.calculateUTF8Bytes = function(e) {
                            return f.calculateUTF16asUTF8(t(e))[1];
                        }, s.calculateString = s.calculateUTF8Bytes, a.readUTF8String = function(e, t, r) {
                            "number" == typeof t && (r = t, t = void 0);
                            var i = void 0 === r;
                            if (i && (r = this.offset), void 0 === t && (t = s.METRICS_CHARS), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal length: " + e + " (not an integer)");
                                if (e |= 0, "number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                                if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength);
                            }
                            var o, a = 0, u = r;
                            if (t === s.METRICS_CHARS) {
                                if (o = n(), f.decodeUTF8(function() {
                                    return a < e && r < this.limit ? this.view[r++] : null;
                                }.bind(this), function(e) {
                                    ++a, f.UTF8toUTF16(e, o);
                                }), a !== e) throw RangeError("Illegal range: Truncated data, " + a + " == " + e);
                                return i ? (this.offset = r, o()) : {
                                    string: o(),
                                    length: r - u
                                };
                            }
                            if (t === s.METRICS_BYTES) {
                                if (!this.noAssert) {
                                    if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                                    if ((r >>>= 0) < 0 || r + e > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+" + e + ") <= " + this.buffer.byteLength);
                                }
                                var c = r + e;
                                if (f.decodeUTF8toUTF16(function() {
                                    return r < c ? this.view[r++] : null;
                                }.bind(this), o = n(), this.noAssert), r !== c) throw RangeError("Illegal range: Truncated data, " + r + " == " + c);
                                return i ? (this.offset = r, o()) : {
                                    string: o(),
                                    length: r - u
                                };
                            }
                            throw TypeError("Unsupported metrics: " + t);
                        }, a.readString = a.readUTF8String, a.writeVString = function(e, n) {
                            var r = void 0 === n;
                            if (r && (n = this.offset), !this.noAssert) {
                                if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                                if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                                if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength);
                            }
                            var i, o, a = n;
                            i = f.calculateUTF16asUTF8(t(e), this.noAssert)[1], o = s.calculateVarint32(i), 
                            n += o + i;
                            var u = this.buffer.byteLength;
                            if (n > u && this.resize((u *= 2) > n ? u : n), n -= o + i, n += this.writeVarint32(i, n), 
                            f.encodeUTF16toUTF8(t(e), function(e) {
                                this.view[n++] = e;
                            }.bind(this)), n !== a + i + o) throw RangeError("Illegal range: Truncated data, " + n + " == " + (n + i + o));
                            return r ? (this.offset = n, this) : n - a;
                        }, a.readVString = function(e) {
                            var t = void 0 === e;
                            if (t && (e = this.offset), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                                if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength);
                            }
                            var n = e, r = this.readVarint32(e), i = this.readUTF8String(r.value, s.METRICS_BYTES, e += r.length);
                            return e += i.length, t ? (this.offset = e, i.string) : {
                                string: i.string,
                                length: e - n
                            };
                        }, a.append = function(e, t, n) {
                            "number" != typeof t && "string" == typeof t || (n = t, t = void 0);
                            var r = void 0 === n;
                            if (r && (n = this.offset), !this.noAssert) {
                                if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                                if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength);
                            }
                            e instanceof s || (e = s.wrap(e, t));
                            var i = e.limit - e.offset;
                            if (i <= 0) return this;
                            n += i;
                            var o = this.buffer.byteLength;
                            return n > o && this.resize((o *= 2) > n ? o : n), n -= i, this.view.set(e.view.subarray(e.offset, e.limit), n), 
                            e.offset += i, r && (this.offset += i), this;
                        }, a.appendTo = function(e, t) {
                            return e.append(this, t), this;
                        }, a.assert = function(e) {
                            return this.noAssert = !e, this;
                        }, a.capacity = function() {
                            return this.buffer.byteLength;
                        }, a.clear = function() {
                            return this.offset = 0, this.limit = this.buffer.byteLength, this.markedOffset = -1, 
                            this;
                        }, a.clone = function(e) {
                            var t = new s(0, this.littleEndian, this.noAssert);
                            return e ? (t.buffer = new ArrayBuffer(this.buffer.byteLength), t.view = new Uint8Array(t.buffer)) : (t.buffer = this.buffer, 
                            t.view = this.view), t.offset = this.offset, t.markedOffset = this.markedOffset, 
                            t.limit = this.limit, t;
                        }, a.compact = function(e, t) {
                            if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                                if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                                if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
                            }
                            if (0 === e && t === this.buffer.byteLength) return this;
                            var n = t - e;
                            if (0 === n) return this.buffer = u, this.view = null, this.markedOffset >= 0 && (this.markedOffset -= e), 
                            this.offset = 0, this.limit = 0, this;
                            var r = new ArrayBuffer(n), i = new Uint8Array(r);
                            return i.set(this.view.subarray(e, t)), this.buffer = r, this.view = i, this.markedOffset >= 0 && (this.markedOffset -= e), 
                            this.offset = 0, this.limit = n, this;
                        }, a.copy = function(e, t) {
                            if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                                if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                                if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
                            }
                            if (e === t) return new s(0, this.littleEndian, this.noAssert);
                            var n = t - e, r = new s(n, this.littleEndian, this.noAssert);
                            return r.offset = 0, r.limit = n, r.markedOffset >= 0 && (r.markedOffset -= e), 
                            this.copyTo(r, 0, e, t), r;
                        }, a.copyTo = function(e, t, n, r) {
                            var i, o;
                            if (!this.noAssert && !s.isByteBuffer(e)) throw TypeError("Illegal target: Not a ByteBuffer");
                            if (t = (o = void 0 === t) ? e.offset : 0 | t, n = (i = void 0 === n) ? this.offset : 0 | n, 
                            r = void 0 === r ? this.limit : 0 | r, t < 0 || t > e.buffer.byteLength) throw RangeError("Illegal target range: 0 <= " + t + " <= " + e.buffer.byteLength);
                            if (n < 0 || r > this.buffer.byteLength) throw RangeError("Illegal source range: 0 <= " + n + " <= " + this.buffer.byteLength);
                            var a = r - n;
                            return 0 === a ? e : (e.ensureCapacity(t + a), e.view.set(this.view.subarray(n, r), t), 
                            i && (this.offset += a), o && (e.offset += a), this);
                        }, a.ensureCapacity = function(e) {
                            var t = this.buffer.byteLength;
                            return t < e ? this.resize((t *= 2) > e ? t : e) : this;
                        }, a.fill = function(e, t, n) {
                            var r = void 0 === t;
                            if (r && (t = this.offset), "string" == typeof e && e.length > 0 && (e = e.charCodeAt(0)), 
                            void 0 === t && (t = this.offset), void 0 === n && (n = this.limit), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                                if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                                if (t >>>= 0, "number" != typeof n || n % 1 != 0) throw TypeError("Illegal end: Not an integer");
                                if (n >>>= 0, t < 0 || t > n || n > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + n + " <= " + this.buffer.byteLength);
                            }
                            if (t >= n) return this;
                            for (;t < n; ) this.view[t++] = e;
                            return r && (this.offset = t), this;
                        }, a.flip = function() {
                            return this.limit = this.offset, this.offset = 0, this;
                        }, a.mark = function(e) {
                            if (e = void 0 === e ? this.offset : e, !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                                if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength);
                            }
                            return this.markedOffset = e, this;
                        }, a.order = function(e) {
                            if (!this.noAssert && "boolean" != typeof e) throw TypeError("Illegal littleEndian: Not a boolean");
                            return this.littleEndian = !!e, this;
                        }, a.LE = function(e) {
                            return this.littleEndian = void 0 === e || !!e, this;
                        }, a.BE = function(e) {
                            return this.littleEndian = void 0 !== e && !e, this;
                        }, a.prepend = function(e, t, n) {
                            "number" != typeof t && "string" == typeof t || (n = t, t = void 0);
                            var r = void 0 === n;
                            if (r && (n = this.offset), !this.noAssert) {
                                if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                                if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength);
                            }
                            e instanceof s || (e = s.wrap(e, t));
                            var i = e.limit - e.offset;
                            if (i <= 0) return this;
                            var o = i - n;
                            if (o > 0) {
                                var a = new ArrayBuffer(this.buffer.byteLength + o), u = new Uint8Array(a);
                                u.set(this.view.subarray(n, this.buffer.byteLength), i), this.buffer = a, this.view = u, 
                                this.offset += o, this.markedOffset >= 0 && (this.markedOffset += o), this.limit += o, 
                                n += o;
                            } else new Uint8Array(this.buffer);
                            return this.view.set(e.view.subarray(e.offset, e.limit), n - i), e.offset = e.limit, 
                            r && (this.offset -= i), this;
                        }, a.prependTo = function(e, t) {
                            return e.prepend(this, t), this;
                        }, a.printDebug = function(e) {
                            "function" != typeof e && (e = console.log.bind(console)), e(this.toString() + "\n-------------------------------------------------------------------\n" + this.toDebug(!0));
                        }, a.remaining = function() {
                            return this.limit - this.offset;
                        }, a.reset = function() {
                            return this.markedOffset >= 0 ? (this.offset = this.markedOffset, this.markedOffset = -1) : this.offset = 0, 
                            this;
                        }, a.resize = function(e) {
                            if (!this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal capacity: " + e + " (not an integer)");
                                if ((e |= 0) < 0) throw RangeError("Illegal capacity: 0 <= " + e);
                            }
                            if (this.buffer.byteLength < e) {
                                var t = new ArrayBuffer(e), n = new Uint8Array(t);
                                n.set(this.view), this.buffer = t, this.view = n;
                            }
                            return this;
                        }, a.reverse = function(e, t) {
                            if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                                if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                                if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
                            }
                            return e === t ? this : (Array.prototype.reverse.call(this.view.subarray(e, t)), 
                            this);
                        }, a.skip = function(e) {
                            if (!this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal length: " + e + " (not an integer)");
                                e |= 0;
                            }
                            var t = this.offset + e;
                            if (!this.noAssert && (t < 0 || t > this.buffer.byteLength)) throw RangeError("Illegal length: 0 <= " + this.offset + " + " + e + " <= " + this.buffer.byteLength);
                            return this.offset = t, this;
                        }, a.slice = function(e, t) {
                            if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                                if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                                if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
                            }
                            var n = this.clone();
                            return n.offset = e, n.limit = t, n;
                        }, a.toBuffer = function(e) {
                            var t = this.offset, n = this.limit;
                            if (!this.noAssert) {
                                if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: Not an integer");
                                if (t >>>= 0, "number" != typeof n || n % 1 != 0) throw TypeError("Illegal limit: Not an integer");
                                if (n >>>= 0, t < 0 || t > n || n > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + n + " <= " + this.buffer.byteLength);
                            }
                            if (!e && 0 === t && n === this.buffer.byteLength) return this.buffer;
                            if (t === n) return u;
                            var r = new ArrayBuffer(n - t);
                            return new Uint8Array(r).set(new Uint8Array(this.buffer).subarray(t, n), 0), r;
                        }, a.toArrayBuffer = a.toBuffer, a.toString = function(e, t, n) {
                            if (void 0 === e) return "ByteBufferAB(offset=" + this.offset + ",markedOffset=" + this.markedOffset + ",limit=" + this.limit + ",capacity=" + this.capacity() + ")";
                            switch ("number" == typeof e && (e = "utf8", t = e, n = t), e) {
                              case "utf8":
                                return this.toUTF8(t, n);

                              case "base64":
                                return this.toBase64(t, n);

                              case "hex":
                                return this.toHex(t, n);

                              case "binary":
                                return this.toBinary(t, n);

                              case "debug":
                                return this.toDebug();

                              case "columns":
                                return this.toColumns();

                              default:
                                throw Error("Unsupported encoding: " + e);
                            }
                        };
                        var l = function() {
                            for (var e = {}, t = [ 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47 ], n = [], r = 0, i = t.length; r < i; ++r) n[t[r]] = r;
                            return e.encode = function(e, n) {
                                for (var r, i; null !== (r = e()); ) n(t[r >> 2 & 63]), i = (3 & r) << 4, null !== (r = e()) ? (i |= r >> 4 & 15, 
                                n(t[63 & (i | r >> 4 & 15)]), i = (15 & r) << 2, null !== (r = e()) ? (n(t[63 & (i | r >> 6 & 3)]), 
                                n(t[63 & r])) : (n(t[63 & i]), n(61))) : (n(t[63 & i]), n(61), n(61));
                            }, e.decode = function(e, t) {
                                function r(e) {
                                    throw Error("Illegal character code: " + e);
                                }
                                for (var i, o, s; null !== (i = e()); ) if (void 0 === (o = n[i]) && r(i), null !== (i = e()) && (void 0 === (s = n[i]) && r(i), 
                                t(o << 2 >>> 0 | (48 & s) >> 4), null !== (i = e()))) {
                                    if (void 0 === (o = n[i])) {
                                        if (61 === i) break;
                                        r(i);
                                    }
                                    if (t((15 & s) << 4 >>> 0 | (60 & o) >> 2), null !== (i = e())) {
                                        if (void 0 === (s = n[i])) {
                                            if (61 === i) break;
                                            r(i);
                                        }
                                        t((3 & o) << 6 >>> 0 | s);
                                    }
                                }
                            }, e.test = function(e) {
                                return /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e);
                            }, e;
                        }();
                        a.toBase64 = function(e, t) {
                            if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), e |= 0, 
                            t |= 0, e < 0 || t > this.capacity || e > t) throw RangeError("begin, end");
                            var r;
                            return l.encode(function() {
                                return e < t ? this.view[e++] : null;
                            }.bind(this), r = n()), r();
                        }, s.fromBase64 = function(e, n) {
                            if ("string" != typeof e) throw TypeError("str");
                            var r = new s(e.length / 4 * 3, n), i = 0;
                            return l.decode(t(e), function(e) {
                                r.view[i++] = e;
                            }), r.limit = i, r;
                        }, s.btoa = function(e) {
                            return s.fromBinary(e).toBase64();
                        }, s.atob = function(e) {
                            return s.fromBase64(e).toBinary();
                        }, a.toBinary = function(e, t) {
                            if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), e |= 0, 
                            t |= 0, e < 0 || t > this.capacity() || e > t) throw RangeError("begin, end");
                            if (e === t) return "";
                            for (var n = [], r = []; e < t; ) n.push(this.view[e++]), n.length >= 1024 && (r.push(String.fromCharCode.apply(String, n)), 
                            n = []);
                            return r.join("") + String.fromCharCode.apply(String, n);
                        }, s.fromBinary = function(e, t) {
                            if ("string" != typeof e) throw TypeError("str");
                            for (var n, r = 0, i = e.length, o = new s(i, t); r < i; ) {
                                if ((n = e.charCodeAt(r)) > 255) throw RangeError("illegal char code: " + n);
                                o.view[r++] = n;
                            }
                            return o.limit = i, o;
                        }, a.toDebug = function(e) {
                            for (var t, n = -1, r = this.buffer.byteLength, i = "", o = "", s = ""; n < r; ) {
                                if (-1 !== n && (t = this.view[n], i += t < 16 ? "0" + t.toString(16).toUpperCase() : t.toString(16).toUpperCase(), 
                                e && (o += t > 32 && t < 127 ? String.fromCharCode(t) : ".")), ++n, e && n > 0 && n % 16 == 0 && n !== r) {
                                    for (;i.length < 51; ) i += " ";
                                    s += i + o + "\n", i = o = "";
                                }
                                n === this.offset && n === this.limit ? i += n === this.markedOffset ? "!" : "|" : n === this.offset ? i += n === this.markedOffset ? "[" : "<" : n === this.limit ? i += n === this.markedOffset ? "]" : ">" : i += n === this.markedOffset ? "'" : e || 0 !== n && n !== r ? " " : "";
                            }
                            if (e && " " !== i) {
                                for (;i.length < 51; ) i += " ";
                                s += i + o + "\n";
                            }
                            return e ? s : i;
                        }, s.fromDebug = function(e, t, n) {
                            for (var r, i, o = e.length, a = new s((o + 1) / 3 | 0, t, n), u = 0, c = 0, l = !1, f = !1, h = !1, d = !1, p = !1; u < o; ) {
                                switch (r = e.charAt(u++)) {
                                  case "!":
                                    if (!n) {
                                        if (f || h || d) {
                                            p = !0;
                                            break;
                                        }
                                        f = h = d = !0;
                                    }
                                    a.offset = a.markedOffset = a.limit = c, l = !1;
                                    break;

                                  case "|":
                                    if (!n) {
                                        if (f || d) {
                                            p = !0;
                                            break;
                                        }
                                        f = d = !0;
                                    }
                                    a.offset = a.limit = c, l = !1;
                                    break;

                                  case "[":
                                    if (!n) {
                                        if (f || h) {
                                            p = !0;
                                            break;
                                        }
                                        f = h = !0;
                                    }
                                    a.offset = a.markedOffset = c, l = !1;
                                    break;

                                  case "<":
                                    if (!n) {
                                        if (f) {
                                            p = !0;
                                            break;
                                        }
                                        f = !0;
                                    }
                                    a.offset = c, l = !1;
                                    break;

                                  case "]":
                                    if (!n) {
                                        if (d || h) {
                                            p = !0;
                                            break;
                                        }
                                        d = h = !0;
                                    }
                                    a.limit = a.markedOffset = c, l = !1;
                                    break;

                                  case ">":
                                    if (!n) {
                                        if (d) {
                                            p = !0;
                                            break;
                                        }
                                        d = !0;
                                    }
                                    a.limit = c, l = !1;
                                    break;

                                  case "'":
                                    if (!n) {
                                        if (h) {
                                            p = !0;
                                            break;
                                        }
                                        h = !0;
                                    }
                                    a.markedOffset = c, l = !1;
                                    break;

                                  case " ":
                                    l = !1;
                                    break;

                                  default:
                                    if (!n && l) {
                                        p = !0;
                                        break;
                                    }
                                    if (i = parseInt(r + e.charAt(u++), 16), !n && (isNaN(i) || i < 0 || i > 255)) throw TypeError("Illegal str: Not a debug encoded string");
                                    a.view[c++] = i, l = !0;
                                }
                                if (p) throw TypeError("Illegal str: Invalid symbol at " + u);
                            }
                            if (!n) {
                                if (!f || !d) throw TypeError("Illegal str: Missing offset or limit");
                                if (c < a.buffer.byteLength) throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + c + " < " + o);
                            }
                            return a;
                        }, a.toHex = function(e, t) {
                            if (e = void 0 === e ? this.offset : e, t = void 0 === t ? this.limit : t, !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                                if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                                if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
                            }
                            for (var n, r = new Array(t - e); e < t; ) (n = this.view[e++]) < 16 ? r.push("0", n.toString(16)) : r.push(n.toString(16));
                            return r.join("");
                        }, s.fromHex = function(e, t, n) {
                            if (!n) {
                                if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                                if (e.length % 2 != 0) throw TypeError("Illegal str: Length not a multiple of 2");
                            }
                            for (var r, i = e.length, o = new s(i / 2 | 0, t), a = 0, u = 0; a < i; a += 2) {
                                if (r = parseInt(e.substring(a, a + 2), 16), !n && (!isFinite(r) || r < 0 || r > 255)) throw TypeError("Illegal str: Contains non-hex characters");
                                o.view[u++] = r;
                            }
                            return o.limit = u, o;
                        };
                        var f = function() {
                            var e = {};
                            return e.MAX_CODEPOINT = 1114111, e.encodeUTF8 = function(e, t) {
                                var n = null;
                                for ("number" == typeof e && (n = e, e = function() {
                                    return null;
                                }); null !== n || null !== (n = e()); ) n < 128 ? t(127 & n) : n < 2048 ? (t(n >> 6 & 31 | 192), 
                                t(63 & n | 128)) : n < 65536 ? (t(n >> 12 & 15 | 224), t(n >> 6 & 63 | 128), t(63 & n | 128)) : (t(n >> 18 & 7 | 240), 
                                t(n >> 12 & 63 | 128), t(n >> 6 & 63 | 128), t(63 & n | 128)), n = null;
                            }, e.decodeUTF8 = function(e, t) {
                                for (var n, r, i, o, s = function(e) {
                                    e = e.slice(0, e.indexOf(null));
                                    var t = Error(e.toString());
                                    throw t.name = "TruncatedError", t.bytes = e, t;
                                }; null !== (n = e()); ) if (0 == (128 & n)) t(n); else if (192 == (224 & n)) null === (r = e()) && s([ n, r ]), 
                                t((31 & n) << 6 | 63 & r); else if (224 == (240 & n)) (null === (r = e()) || null === (i = e())) && s([ n, r, i ]), 
                                t((15 & n) << 12 | (63 & r) << 6 | 63 & i); else {
                                    if (240 != (248 & n)) throw RangeError("Illegal starting byte: " + n);
                                    (null === (r = e()) || null === (i = e()) || null === (o = e())) && s([ n, r, i, o ]), 
                                    t((7 & n) << 18 | (63 & r) << 12 | (63 & i) << 6 | 63 & o);
                                }
                            }, e.UTF16toUTF8 = function(e, t) {
                                for (var n, r = null; null !== (n = null !== r ? r : e()); ) n >= 55296 && n <= 57343 && null !== (r = e()) && r >= 56320 && r <= 57343 ? (t(1024 * (n - 55296) + r - 56320 + 65536), 
                                r = null) : t(n);
                                null !== r && t(r);
                            }, e.UTF8toUTF16 = function(e, t) {
                                var n = null;
                                for ("number" == typeof e && (n = e, e = function() {
                                    return null;
                                }); null !== n || null !== (n = e()); ) n <= 65535 ? t(n) : (n -= 65536, t(55296 + (n >> 10)), 
                                t(n % 1024 + 56320)), n = null;
                            }, e.encodeUTF16toUTF8 = function(t, n) {
                                e.UTF16toUTF8(t, function(t) {
                                    e.encodeUTF8(t, n);
                                });
                            }, e.decodeUTF8toUTF16 = function(t, n) {
                                e.decodeUTF8(t, function(t) {
                                    e.UTF8toUTF16(t, n);
                                });
                            }, e.calculateCodePoint = function(e) {
                                return e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
                            }, e.calculateUTF8 = function(e) {
                                for (var t, n = 0; null !== (t = e()); ) n += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
                                return n;
                            }, e.calculateUTF16asUTF8 = function(t) {
                                var n = 0, r = 0;
                                return e.UTF16toUTF8(t, function(e) {
                                    ++n, r += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
                                }), [ n, r ];
                            }, e;
                        }();
                        return a.toUTF8 = function(e, t) {
                            if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                                if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                                if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                                if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength);
                            }
                            var r;
                            try {
                                f.decodeUTF8toUTF16(function() {
                                    return e < t ? this.view[e++] : null;
                                }.bind(this), r = n());
                            } catch (n) {
                                if (e !== t) throw RangeError("Illegal range: Truncated data, " + e + " != " + t);
                            }
                            return r();
                        }, s.fromUTF8 = function(e, n, r) {
                            if (!r && "string" != typeof e) throw TypeError("Illegal str: Not a string");
                            var i = new s(f.calculateUTF16asUTF8(t(e), !0)[1], n, r), o = 0;
                            return f.encodeUTF16toUTF8(t(e), function(e) {
                                i.view[o++] = e;
                            }), i.limit = o, i;
                        }, s;
                    });
                }), Ai = {}, Ci = Object.freeze({
                    default: Ai
                }), Ii = Ci && Ai || Ci, Ni = l(function(t) {
                    !function(e, n) {
                        "function" == typeof u && t && t.exports ? t.exports = n(Oi, !0) : (e.dcodeIO = e.dcodeIO || {}).ProtoBuf = n(e.dcodeIO.ByteBuffer);
                    }(M, function(t, n) {
                        var i = {};
                        return i.ByteBuffer = t, i.Long = t.Long || null, i.VERSION = "5.0.3", i.WIRE_TYPES = {}, 
                        i.WIRE_TYPES.VARINT = 0, i.WIRE_TYPES.BITS64 = 1, i.WIRE_TYPES.LDELIM = 2, i.WIRE_TYPES.STARTGROUP = 3, 
                        i.WIRE_TYPES.ENDGROUP = 4, i.WIRE_TYPES.BITS32 = 5, i.PACKABLE_WIRE_TYPES = [ i.WIRE_TYPES.VARINT, i.WIRE_TYPES.BITS64, i.WIRE_TYPES.BITS32 ], 
                        i.TYPES = {
                            int32: {
                                name: "int32",
                                wireType: i.WIRE_TYPES.VARINT,
                                defaultValue: 0
                            },
                            uint32: {
                                name: "uint32",
                                wireType: i.WIRE_TYPES.VARINT,
                                defaultValue: 0
                            },
                            sint32: {
                                name: "sint32",
                                wireType: i.WIRE_TYPES.VARINT,
                                defaultValue: 0
                            },
                            int64: {
                                name: "int64",
                                wireType: i.WIRE_TYPES.VARINT,
                                defaultValue: i.Long ? i.Long.ZERO : void 0
                            },
                            uint64: {
                                name: "uint64",
                                wireType: i.WIRE_TYPES.VARINT,
                                defaultValue: i.Long ? i.Long.UZERO : void 0
                            },
                            sint64: {
                                name: "sint64",
                                wireType: i.WIRE_TYPES.VARINT,
                                defaultValue: i.Long ? i.Long.ZERO : void 0
                            },
                            bool: {
                                name: "bool",
                                wireType: i.WIRE_TYPES.VARINT,
                                defaultValue: !1
                            },
                            double: {
                                name: "double",
                                wireType: i.WIRE_TYPES.BITS64,
                                defaultValue: 0
                            },
                            string: {
                                name: "string",
                                wireType: i.WIRE_TYPES.LDELIM,
                                defaultValue: ""
                            },
                            bytes: {
                                name: "bytes",
                                wireType: i.WIRE_TYPES.LDELIM,
                                defaultValue: null
                            },
                            fixed32: {
                                name: "fixed32",
                                wireType: i.WIRE_TYPES.BITS32,
                                defaultValue: 0
                            },
                            sfixed32: {
                                name: "sfixed32",
                                wireType: i.WIRE_TYPES.BITS32,
                                defaultValue: 0
                            },
                            fixed64: {
                                name: "fixed64",
                                wireType: i.WIRE_TYPES.BITS64,
                                defaultValue: i.Long ? i.Long.UZERO : void 0
                            },
                            sfixed64: {
                                name: "sfixed64",
                                wireType: i.WIRE_TYPES.BITS64,
                                defaultValue: i.Long ? i.Long.ZERO : void 0
                            },
                            float: {
                                name: "float",
                                wireType: i.WIRE_TYPES.BITS32,
                                defaultValue: 0
                            },
                            enum: {
                                name: "enum",
                                wireType: i.WIRE_TYPES.VARINT,
                                defaultValue: 0
                            },
                            message: {
                                name: "message",
                                wireType: i.WIRE_TYPES.LDELIM,
                                defaultValue: null
                            },
                            group: {
                                name: "group",
                                wireType: i.WIRE_TYPES.STARTGROUP,
                                defaultValue: null
                            }
                        }, i.MAP_KEY_TYPES = [ i.TYPES.int32, i.TYPES.sint32, i.TYPES.sfixed32, i.TYPES.uint32, i.TYPES.fixed32, i.TYPES.int64, i.TYPES.sint64, i.TYPES.sfixed64, i.TYPES.uint64, i.TYPES.fixed64, i.TYPES.bool, i.TYPES.string, i.TYPES.bytes ], 
                        i.ID_MIN = 1, i.ID_MAX = 536870911, i.convertFieldsToCamelCase = !1, i.populateAccessors = !0, 
                        i.populateDefaults = !0, i.Util = function() {
                            var t = {};
                            return t.IS_NODE = !("object" != (void 0 === D ? "undefined" : r(D)) || D + "" != "[object process]" || D.browser), 
                            t.XHR = function() {
                                for (var t = [ function() {
                                    return new e();
                                }, function() {
                                    return new ActiveXObject("Msxml2.XMLHTTP");
                                }, function() {
                                    return new ActiveXObject("Msxml3.XMLHTTP");
                                }, function() {
                                    return new ActiveXObject("Microsoft.XMLHTTP");
                                } ], n = null, r = 0; r < t.length; r++) {
                                    try {
                                        n = t[r]();
                                    } catch (t) {
                                        continue;
                                    }
                                    break;
                                }
                                if (!n) throw Error("XMLHttpRequest is not supported");
                                return n;
                            }, t.fetch = function(e, n) {
                                if (n && "function" != typeof n && (n = null), t.IS_NODE) {
                                    var r = Ii;
                                    if (n) r.readFile(e, function(e, t) {
                                        n(e ? null : "" + t);
                                    }); else try {
                                        return r.readFileSync(e);
                                    } catch (e) {
                                        return null;
                                    }
                                } else {
                                    var i = t.XHR();
                                    if (i.open("GET", e, !!n), i.setRequestHeader("Accept", "text/plain"), "function" == typeof i.overrideMimeType && i.overrideMimeType("text/plain"), 
                                    !n) return i.send(null), 200 == i.status || 0 == i.status && "string" == typeof i.responseText ? i.responseText : null;
                                    if (i.onreadystatechange = function() {
                                        4 == i.readyState && n(200 == i.status || 0 == i.status && "string" == typeof i.responseText ? i.responseText : null);
                                    }, 4 == i.readyState) return;
                                    i.send(null);
                                }
                            }, t.toCamelCase = function(e) {
                                return e.replace(/_([a-zA-Z])/g, function(e, t) {
                                    return t.toUpperCase();
                                });
                            }, t;
                        }(), i.Lang = {
                            DELIM: /[\s\{\}=;:\[\],'"\(\)<>]/g,
                            RULE: /^(?:required|optional|repeated|map)$/,
                            TYPE: /^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,
                            NAME: /^[a-zA-Z_][a-zA-Z_0-9]*$/,
                            TYPEDEF: /^[a-zA-Z][a-zA-Z_0-9]*$/,
                            TYPEREF: /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
                            FQTYPEREF: /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/,
                            NUMBER: /^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/,
                            NUMBER_DEC: /^(?:[1-9][0-9]*|0)$/,
                            NUMBER_HEX: /^0[xX][0-9a-fA-F]+$/,
                            NUMBER_OCT: /^0[0-7]+$/,
                            NUMBER_FLT: /^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/,
                            BOOL: /^(?:true|false)$/i,
                            ID: /^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
                            NEGID: /^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
                            WHITESPACE: /\s/,
                            STRING: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
                            STRING_DQ: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
                            STRING_SQ: /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g
                        }, i.Reflect = function(e) {
                            function n(t, n) {
                                if (t && "number" == typeof t.low && "number" == typeof t.high && "boolean" == typeof t.unsigned && t.low === t.low && t.high === t.high) return new e.Long(t.low, t.high, void 0 === n ? t.unsigned : n);
                                if ("string" == typeof t) return e.Long.fromString(t, n || !1, 10);
                                if ("number" == typeof t) return e.Long.fromNumber(t, n || !1);
                                throw Error("not convertible to Long");
                            }
                            function i(t, n) {
                                var r = n.readVarint32(), o = 7 & r, s = r >>> 3;
                                switch (o) {
                                  case e.WIRE_TYPES.VARINT:
                                    do {
                                        r = n.readUint8();
                                    } while (128 == (128 & r));
                                    break;

                                  case e.WIRE_TYPES.BITS64:
                                    n.offset += 8;
                                    break;

                                  case e.WIRE_TYPES.LDELIM:
                                    r = n.readVarint32(), n.offset += r;
                                    break;

                                  case e.WIRE_TYPES.STARTGROUP:
                                    i(s, n);
                                    break;

                                  case e.WIRE_TYPES.ENDGROUP:
                                    if (s === t) return !1;
                                    throw Error("Illegal GROUPEND after unknown group: " + s + " (" + t + " expected)");

                                  case e.WIRE_TYPES.BITS32:
                                    n.offset += 4;
                                    break;

                                  default:
                                    throw Error("Illegal wire type in unknown group " + t + ": " + o);
                                }
                                return !0;
                            }
                            var o = {}, s = function(e, t, n) {
                                this.builder = e, this.parent = t, this.name = n, this.className;
                            }, a = s.prototype;
                            a.fqn = function() {
                                for (var e = this.name, t = this; null != (t = t.parent); ) e = t.name + "." + e;
                                return e;
                            }, a.toString = function(e) {
                                return (e ? this.className + " " : "") + this.fqn();
                            }, a.build = function() {
                                throw Error(this.toString(!0) + " cannot be built directly");
                            }, o.T = s;
                            var u = function(e, t, n, r, i) {
                                s.call(this, e, t, n), this.className = "Namespace", this.children = [], this.options = r || {}, 
                                this.syntax = i || "proto2";
                            }, c = u.prototype = Object.create(s.prototype);
                            c.getChildren = function(e) {
                                if (null == (e = e || null)) return this.children.slice();
                                for (var t = [], n = 0, r = this.children.length; n < r; ++n) this.children[n] instanceof e && t.push(this.children[n]);
                                return t;
                            }, c.addChild = function(e) {
                                var t;
                                if (t = this.getChild(e.name)) if (t instanceof h.Field && t.name !== t.originalName && null === this.getChild(t.originalName)) t.name = t.originalName; else {
                                    if (!(e instanceof h.Field && e.name !== e.originalName && null === this.getChild(e.originalName))) throw Error("Duplicate name in namespace " + this.toString(!0) + ": " + e.name);
                                    e.name = e.originalName;
                                }
                                this.children.push(e);
                            }, c.getChild = function(e) {
                                for (var t = "number" == typeof e ? "id" : "name", n = 0, r = this.children.length; n < r; ++n) if (this.children[n][t] === e) return this.children[n];
                                return null;
                            }, c.resolve = function(e, t) {
                                var n = "string" == typeof e ? e.split(".") : e, r = this, i = 0;
                                if ("" === n[i]) {
                                    for (;null !== r.parent; ) r = r.parent;
                                    i++;
                                }
                                var s;
                                do {
                                    do {
                                        if (!(r instanceof o.Namespace)) {
                                            r = null;
                                            break;
                                        }
                                        if (!(s = r.getChild(n[i])) || !(s instanceof o.T) || t && !(s instanceof o.Namespace)) {
                                            r = null;
                                            break;
                                        }
                                        r = s, i++;
                                    } while (i < n.length);
                                    if (null != r) break;
                                    if (null !== this.parent) return this.parent.resolve(e, t);
                                } while (null != r);
                                return r;
                            }, c.qn = function(e) {
                                var t = [], n = e;
                                do {
                                    t.unshift(n.name), n = n.parent;
                                } while (null !== n);
                                for (var r = 1; r <= t.length; r++) {
                                    var i = t.slice(t.length - r);
                                    if (e === this.resolve(i, e instanceof o.Namespace)) return i.join(".");
                                }
                                return e.fqn();
                            }, c.build = function() {
                                for (var e, t = {}, n = this.children, r = 0, i = n.length; r < i; ++r) (e = n[r]) instanceof u && (t[e.name] = e.build());
                                return Object.defineProperty && Object.defineProperty(t, "$options", {
                                    value: this.buildOpt()
                                }), t;
                            }, c.buildOpt = function() {
                                for (var e = {}, t = Object.keys(this.options), n = 0, r = t.length; n < r; ++n) {
                                    var i = t[n], o = this.options[t[n]];
                                    e[i] = o;
                                }
                                return e;
                            }, c.getOption = function(e) {
                                return void 0 === e ? this.options : void 0 !== this.options[e] ? this.options[e] : null;
                            }, o.Namespace = u;
                            var l = function(t, n, r, i, o) {
                                if (this.type = t, this.resolvedType = n, this.isMapKey = r, this.syntax = i, this.name = o, 
                                r && e.MAP_KEY_TYPES.indexOf(t) < 0) throw Error("Invalid map key type: " + t.name);
                            }, f = l.prototype;
                            l.defaultFieldValue = function(n) {
                                if ("string" == typeof n && (n = e.TYPES[n]), void 0 === n.defaultValue) throw Error("default value for type " + n.name + " is not supported");
                                return n == e.TYPES.bytes ? new t(0) : n.defaultValue;
                            }, f.toString = function() {
                                return (this.name || "") + (this.isMapKey ? "map" : "value") + " element";
                            }, f.verifyValue = function(i) {
                                function o(e, t) {
                                    throw Error("Illegal value for " + s.toString(!0) + " of type " + s.type.name + ": " + e + " (" + t + ")");
                                }
                                var s = this;
                                switch (this.type) {
                                  case e.TYPES.int32:
                                  case e.TYPES.sint32:
                                  case e.TYPES.sfixed32:
                                    return ("number" != typeof i || i === i && i % 1 != 0) && o(void 0 === i ? "undefined" : r(i), "not an integer"), 
                                    i > 4294967295 ? 0 | i : i;

                                  case e.TYPES.uint32:
                                  case e.TYPES.fixed32:
                                    return ("number" != typeof i || i === i && i % 1 != 0) && o(void 0 === i ? "undefined" : r(i), "not an integer"), 
                                    i < 0 ? i >>> 0 : i;

                                  case e.TYPES.int64:
                                  case e.TYPES.sint64:
                                  case e.TYPES.sfixed64:
                                    if (e.Long) try {
                                        return n(i, !1);
                                    } catch (e) {
                                        o(void 0 === i ? "undefined" : r(i), e.message);
                                    } else o(void 0 === i ? "undefined" : r(i), "requires Long.js");

                                  case e.TYPES.uint64:
                                  case e.TYPES.fixed64:
                                    if (e.Long) try {
                                        return n(i, !0);
                                    } catch (e) {
                                        o(void 0 === i ? "undefined" : r(i), e.message);
                                    } else o(void 0 === i ? "undefined" : r(i), "requires Long.js");

                                  case e.TYPES.bool:
                                    return "boolean" != typeof i && o(void 0 === i ? "undefined" : r(i), "not a boolean"), 
                                    i;

                                  case e.TYPES.float:
                                  case e.TYPES.double:
                                    return "number" != typeof i && o(void 0 === i ? "undefined" : r(i), "not a number"), 
                                    i;

                                  case e.TYPES.string:
                                    return "string" == typeof i || i && i instanceof String || o(void 0 === i ? "undefined" : r(i), "not a string"), 
                                    "" + i;

                                  case e.TYPES.bytes:
                                    return t.isByteBuffer(i) ? i : t.wrap(i, "base64");

                                  case e.TYPES.enum:
                                    var a = this.resolvedType.getChildren(e.Reflect.Enum.Value);
                                    for (c = 0; c < a.length; c++) {
                                        if (a[c].name == i) return a[c].id;
                                        if (a[c].id == i) return a[c].id;
                                    }
                                    if ("proto3" === this.syntax) return ("number" != typeof i || i === i && i % 1 != 0) && o(void 0 === i ? "undefined" : r(i), "not an integer"), 
                                    (i > 4294967295 || i < 0) && o(void 0 === i ? "undefined" : r(i), "not in range for uint32"), 
                                    i;
                                    o(i, "not a valid enum value");

                                  case e.TYPES.group:
                                  case e.TYPES.message:
                                    if (i && "object" == (void 0 === i ? "undefined" : r(i)) || o(void 0 === i ? "undefined" : r(i), "object expected"), 
                                    i instanceof this.resolvedType.clazz) return i;
                                    if (i instanceof e.Builder.Message) {
                                        var u = {};
                                        for (var c in i) i.hasOwnProperty(c) && (u[c] = i[c]);
                                        i = u;
                                    }
                                    return new this.resolvedType.clazz(i);
                                }
                                throw Error("[INTERNAL] Illegal value for " + this.toString(!0) + ": " + i + " (undefined type " + this.type + ")");
                            }, f.calculateLength = function(n, r) {
                                if (null === r) return 0;
                                var i;
                                switch (this.type) {
                                  case e.TYPES.int32:
                                    return r < 0 ? t.calculateVarint64(r) : t.calculateVarint32(r);

                                  case e.TYPES.uint32:
                                    return t.calculateVarint32(r);

                                  case e.TYPES.sint32:
                                    return t.calculateVarint32(t.zigZagEncode32(r));

                                  case e.TYPES.fixed32:
                                  case e.TYPES.sfixed32:
                                  case e.TYPES.float:
                                    return 4;

                                  case e.TYPES.int64:
                                  case e.TYPES.uint64:
                                    return t.calculateVarint64(r);

                                  case e.TYPES.sint64:
                                    return t.calculateVarint64(t.zigZagEncode64(r));

                                  case e.TYPES.fixed64:
                                  case e.TYPES.sfixed64:
                                    return 8;

                                  case e.TYPES.bool:
                                    return 1;

                                  case e.TYPES.enum:
                                    return t.calculateVarint32(r);

                                  case e.TYPES.double:
                                    return 8;

                                  case e.TYPES.string:
                                    return i = t.calculateUTF8Bytes(r), t.calculateVarint32(i) + i;

                                  case e.TYPES.bytes:
                                    if (r.remaining() < 0) throw Error("Illegal value for " + this.toString(!0) + ": " + r.remaining() + " bytes remaining");
                                    return t.calculateVarint32(r.remaining()) + r.remaining();

                                  case e.TYPES.message:
                                    return i = this.resolvedType.calculate(r), t.calculateVarint32(i) + i;

                                  case e.TYPES.group:
                                    return (i = this.resolvedType.calculate(r)) + t.calculateVarint32(n << 3 | e.WIRE_TYPES.ENDGROUP);
                                }
                                throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + r + " (unknown type)");
                            }, f.encodeValue = function(n, r, i) {
                                if (null === r) return i;
                                switch (this.type) {
                                  case e.TYPES.int32:
                                    r < 0 ? i.writeVarint64(r) : i.writeVarint32(r);
                                    break;

                                  case e.TYPES.uint32:
                                    i.writeVarint32(r);
                                    break;

                                  case e.TYPES.sint32:
                                    i.writeVarint32ZigZag(r);
                                    break;

                                  case e.TYPES.fixed32:
                                    i.writeUint32(r);
                                    break;

                                  case e.TYPES.sfixed32:
                                    i.writeInt32(r);
                                    break;

                                  case e.TYPES.int64:
                                  case e.TYPES.uint64:
                                    i.writeVarint64(r);
                                    break;

                                  case e.TYPES.sint64:
                                    i.writeVarint64ZigZag(r);
                                    break;

                                  case e.TYPES.fixed64:
                                    i.writeUint64(r);
                                    break;

                                  case e.TYPES.sfixed64:
                                    i.writeInt64(r);
                                    break;

                                  case e.TYPES.bool:
                                    "string" == typeof r ? i.writeVarint32("false" === r.toLowerCase() ? 0 : !!r) : i.writeVarint32(r ? 1 : 0);
                                    break;

                                  case e.TYPES.enum:
                                    i.writeVarint32(r);
                                    break;

                                  case e.TYPES.float:
                                    i.writeFloat32(r);
                                    break;

                                  case e.TYPES.double:
                                    i.writeFloat64(r);
                                    break;

                                  case e.TYPES.string:
                                    i.writeVString(r);
                                    break;

                                  case e.TYPES.bytes:
                                    if (r.remaining() < 0) throw Error("Illegal value for " + this.toString(!0) + ": " + r.remaining() + " bytes remaining");
                                    var o = r.offset;
                                    i.writeVarint32(r.remaining()), i.append(r), r.offset = o;
                                    break;

                                  case e.TYPES.message:
                                    var s = new t().LE();
                                    this.resolvedType.encode(r, s), i.writeVarint32(s.offset), i.append(s.flip());
                                    break;

                                  case e.TYPES.group:
                                    this.resolvedType.encode(r, i), i.writeVarint32(n << 3 | e.WIRE_TYPES.ENDGROUP);
                                    break;

                                  default:
                                    throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + r + " (unknown type)");
                                }
                                return i;
                            }, f.decode = function(t, n, r) {
                                if (n != this.type.wireType) throw Error("Unexpected wire type for element");
                                var i, o;
                                switch (this.type) {
                                  case e.TYPES.int32:
                                    return 0 | t.readVarint32();

                                  case e.TYPES.uint32:
                                    return t.readVarint32() >>> 0;

                                  case e.TYPES.sint32:
                                    return 0 | t.readVarint32ZigZag();

                                  case e.TYPES.fixed32:
                                    return t.readUint32() >>> 0;

                                  case e.TYPES.sfixed32:
                                    return 0 | t.readInt32();

                                  case e.TYPES.int64:
                                    return t.readVarint64();

                                  case e.TYPES.uint64:
                                    return t.readVarint64().toUnsigned();

                                  case e.TYPES.sint64:
                                    return t.readVarint64ZigZag();

                                  case e.TYPES.fixed64:
                                    return t.readUint64();

                                  case e.TYPES.sfixed64:
                                    return t.readInt64();

                                  case e.TYPES.bool:
                                    return !!t.readVarint32();

                                  case e.TYPES.enum:
                                    return t.readVarint32();

                                  case e.TYPES.float:
                                    return t.readFloat();

                                  case e.TYPES.double:
                                    return t.readDouble();

                                  case e.TYPES.string:
                                    return t.readVString();

                                  case e.TYPES.bytes:
                                    if (o = t.readVarint32(), t.remaining() < o) throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + o + " required but got only " + t.remaining());
                                    return i = t.clone(), i.limit = i.offset + o, t.offset += o, i;

                                  case e.TYPES.message:
                                    return o = t.readVarint32(), this.resolvedType.decode(t, o);

                                  case e.TYPES.group:
                                    return this.resolvedType.decode(t, -1, r);
                                }
                                throw Error("[INTERNAL] Illegal decode type");
                            }, f.valueFromString = function(n) {
                                if (!this.isMapKey) throw Error("valueFromString() called on non-map-key element");
                                switch (this.type) {
                                  case e.TYPES.int32:
                                  case e.TYPES.sint32:
                                  case e.TYPES.sfixed32:
                                  case e.TYPES.uint32:
                                  case e.TYPES.fixed32:
                                    return this.verifyValue(parseInt(n));

                                  case e.TYPES.int64:
                                  case e.TYPES.sint64:
                                  case e.TYPES.sfixed64:
                                  case e.TYPES.uint64:
                                  case e.TYPES.fixed64:
                                    return this.verifyValue(n);

                                  case e.TYPES.bool:
                                    return "true" === n;

                                  case e.TYPES.string:
                                    return this.verifyValue(n);

                                  case e.TYPES.bytes:
                                    return t.fromBinary(n);
                                }
                            }, f.valueToString = function(t) {
                                if (!this.isMapKey) throw Error("valueToString() called on non-map-key element");
                                return this.type === e.TYPES.bytes ? t.toString("binary") : t.toString();
                            }, o.Element = l;
                            var h = function(e, t, n, r, i, o) {
                                u.call(this, e, t, n, r, o), this.className = "Message", this.extensions = void 0, 
                                this.clazz = null, this.isGroup = !!i, this._fields = null, this._fieldsById = null, 
                                this._fieldsByName = null;
                            }, d = h.prototype = Object.create(u.prototype);
                            d.build = function(n) {
                                if (this.clazz && !n) return this.clazz;
                                var i = function(e, n) {
                                    function i(n, o, s, a) {
                                        if (null === n || "object" != (void 0 === n ? "undefined" : r(n))) {
                                            if (a && a instanceof e.Reflect.Enum) {
                                                var u = e.Reflect.Enum.getName(a.object, n);
                                                if (null !== u) return u;
                                            }
                                            return n;
                                        }
                                        if (t.isByteBuffer(n)) return o ? n.toBase64() : n.toBuffer();
                                        if (e.Long.isLong(n)) return s ? n.toString() : e.Long.fromValue(n);
                                        var c;
                                        if (Array.isArray(n)) return c = [], n.forEach(function(e, t) {
                                            c[t] = i(e, o, s, a);
                                        }), c;
                                        if (c = {}, n instanceof e.Map) {
                                            for (var l = n.entries(), f = l.next(); !f.done; f = l.next()) c[n.keyElem.valueToString(f.value[0])] = i(f.value[1], o, s, n.valueElem.resolvedType);
                                            return c;
                                        }
                                        var h = n.$type, d = void 0;
                                        for (var p in n) n.hasOwnProperty(p) && (h && (d = h.getChild(p)) ? c[p] = i(n[p], o, s, d.resolvedType) : c[p] = i(n[p], o, s));
                                        return c;
                                    }
                                    var o = n.getChildren(e.Reflect.Message.Field), s = n.getChildren(e.Reflect.Message.OneOf), a = function i(a, u) {
                                        e.Builder.Message.call(this);
                                        for (var c = 0, l = s.length; c < l; ++c) this[s[c].name] = null;
                                        for (c = 0, l = o.length; c < l; ++c) {
                                            var f = o[c];
                                            this[f.name] = f.repeated ? [] : f.map ? new e.Map(f) : null, !f.required && "proto3" !== n.syntax || null === f.defaultValue || (this[f.name] = f.defaultValue);
                                        }
                                        if (arguments.length > 0) {
                                            var h;
                                            if (1 !== arguments.length || null === a || "object" != (void 0 === a ? "undefined" : r(a)) || !("function" != typeof a.encode || a instanceof i) || Array.isArray(a) || a instanceof e.Map || t.isByteBuffer(a) || a instanceof ArrayBuffer || e.Long && a instanceof e.Long) for (c = 0, 
                                            l = arguments.length; c < l; ++c) void 0 !== (h = arguments[c]) && this.$set(o[c].name, h); else this.$set(a);
                                        }
                                    }, u = a.prototype = Object.create(e.Builder.Message.prototype);
                                    u.add = function(t, r, i) {
                                        var o = n._fieldsByName[t];
                                        if (!i) {
                                            if (!o) throw Error(this + "#" + t + " is undefined");
                                            if (!(o instanceof e.Reflect.Message.Field)) throw Error(this + "#" + t + " is not a field: " + o.toString(!0));
                                            if (!o.repeated) throw Error(this + "#" + t + " is not a repeated field");
                                            r = o.verifyValue(r, !0);
                                        }
                                        return null === this[t] && (this[t] = []), this[t].push(r), this;
                                    }, u.$add = u.add, u.set = function(t, i, o) {
                                        if (t && "object" == (void 0 === t ? "undefined" : r(t))) {
                                            o = i;
                                            for (var s in t) t.hasOwnProperty(s) && void 0 !== (i = t[s]) && void 0 === n._oneofsByName[s] && this.$set(s, i, o);
                                            return this;
                                        }
                                        var a = n._fieldsByName[t];
                                        if (o) this[t] = i; else {
                                            if (!a) throw Error(this + "#" + t + " is not a field: undefined");
                                            if (!(a instanceof e.Reflect.Message.Field)) throw Error(this + "#" + t + " is not a field: " + a.toString(!0));
                                            this[a.name] = i = a.verifyValue(i);
                                        }
                                        if (a && a.oneof) {
                                            var u = this[a.oneof.name];
                                            null !== i ? (null !== u && u !== a.name && (this[u] = null), this[a.oneof.name] = a.name) : u === t && (this[a.oneof.name] = null);
                                        }
                                        return this;
                                    }, u.$set = u.set, u.get = function(t, r) {
                                        if (r) return this[t];
                                        var i = n._fieldsByName[t];
                                        if (!(i && i instanceof e.Reflect.Message.Field)) throw Error(this + "#" + t + " is not a field: undefined");
                                        if (!(i instanceof e.Reflect.Message.Field)) throw Error(this + "#" + t + " is not a field: " + i.toString(!0));
                                        return this[i.name];
                                    }, u.$get = u.get;
                                    for (var c = 0; c < o.length; c++) {
                                        var l = o[c];
                                        l instanceof e.Reflect.Message.ExtensionField || n.builder.options.populateAccessors && function(e) {
                                            var t = e.originalName.replace(/(_[a-zA-Z])/g, function(e) {
                                                return e.toUpperCase().replace("_", "");
                                            });
                                            t = t.substring(0, 1).toUpperCase() + t.substring(1);
                                            var r = e.originalName.replace(/([A-Z])/g, function(e) {
                                                return "_" + e;
                                            }), i = function(t, n) {
                                                return this[e.name] = n ? t : e.verifyValue(t), this;
                                            }, o = function() {
                                                return this[e.name];
                                            };
                                            null === n.getChild("set" + t) && (u["set" + t] = i), null === n.getChild("set_" + r) && (u["set_" + r] = i), 
                                            null === n.getChild("get" + t) && (u["get" + t] = o), null === n.getChild("get_" + r) && (u["get_" + r] = o);
                                        }(l);
                                    }
                                    return u.encode = function(e, r) {
                                        "boolean" == typeof e && (r = e, e = void 0);
                                        var i = !1;
                                        e || (e = new t(), i = !0);
                                        var o = e.littleEndian;
                                        try {
                                            return n.encode(this, e.LE(), r), (i ? e.flip() : e).LE(o);
                                        } catch (t) {
                                            throw e.LE(o), t;
                                        }
                                    }, a.encode = function(e, t, n) {
                                        return new a(e).encode(t, n);
                                    }, u.calculate = function() {
                                        return n.calculate(this);
                                    }, u.encodeDelimited = function(e, r) {
                                        var i = !1;
                                        e || (e = new t(), i = !0);
                                        var o = new t().LE();
                                        return n.encode(this, o, r).flip(), e.writeVarint32(o.remaining()), e.append(o), 
                                        i ? e.flip() : e;
                                    }, u.encodeAB = function() {
                                        try {
                                            return this.encode().toArrayBuffer();
                                        } catch (e) {
                                            throw e.encoded && (e.encoded = e.encoded.toArrayBuffer()), e;
                                        }
                                    }, u.toArrayBuffer = u.encodeAB, u.encodeNB = function() {
                                        try {
                                            return this.encode().toBuffer();
                                        } catch (e) {
                                            throw e.encoded && (e.encoded = e.encoded.toBuffer()), e;
                                        }
                                    }, u.toBuffer = u.encodeNB, u.encode64 = function() {
                                        try {
                                            return this.encode().toBase64();
                                        } catch (e) {
                                            throw e.encoded && (e.encoded = e.encoded.toBase64()), e;
                                        }
                                    }, u.toBase64 = u.encode64, u.encodeHex = function() {
                                        try {
                                            return this.encode().toHex();
                                        } catch (e) {
                                            throw e.encoded && (e.encoded = e.encoded.toHex()), e;
                                        }
                                    }, u.toHex = u.encodeHex, u.toRaw = function(e, t) {
                                        return i(this, !!e, !!t, this.$type);
                                    }, u.encodeJSON = function() {
                                        return JSON.stringify(i(this, !0, !0, this.$type));
                                    }, a.decode = function(e, r, i) {
                                        "string" == typeof r && (i = r, r = -1), "string" == typeof e ? e = t.wrap(e, i || "base64") : t.isByteBuffer(e) || (e = t.wrap(e));
                                        var o = e.littleEndian;
                                        try {
                                            var s = n.decode(e.LE(), r);
                                            return e.LE(o), s;
                                        } catch (t) {
                                            throw e.LE(o), t;
                                        }
                                    }, a.decodeDelimited = function(e, r) {
                                        if ("string" == typeof e ? e = t.wrap(e, r || "base64") : t.isByteBuffer(e) || (e = t.wrap(e)), 
                                        e.remaining() < 1) return null;
                                        var i = e.offset, o = e.readVarint32();
                                        if (e.remaining() < o) return e.offset = i, null;
                                        try {
                                            var s = n.decode(e.slice(e.offset, e.offset + o).LE());
                                            return e.offset += o, s;
                                        } catch (t) {
                                            throw e.offset += o, t;
                                        }
                                    }, a.decode64 = function(e) {
                                        return a.decode(e, "base64");
                                    }, a.decodeHex = function(e) {
                                        return a.decode(e, "hex");
                                    }, a.decodeJSON = function(e) {
                                        return new a(JSON.parse(e));
                                    }, u.toString = function() {
                                        return n.toString();
                                    }, Object.defineProperty && (Object.defineProperty(a, "$options", {
                                        value: n.buildOpt()
                                    }), Object.defineProperty(u, "$options", {
                                        value: a.$options
                                    }), Object.defineProperty(a, "$type", {
                                        value: n
                                    }), Object.defineProperty(u, "$type", {
                                        value: n
                                    })), a;
                                }(e, this);
                                this._fields = [], this._fieldsById = {}, this._fieldsByName = {}, this._oneofsByName = {};
                                for (var o, s = 0, a = this.children.length; s < a; s++) if ((o = this.children[s]) instanceof m || o instanceof h || o instanceof b) {
                                    if (i.hasOwnProperty(o.name)) throw Error("Illegal reflect child of " + this.toString(!0) + ": " + o.toString(!0) + " cannot override static property '" + o.name + "'");
                                    i[o.name] = o.build();
                                } else if (o instanceof h.Field) o.build(), this._fields.push(o), this._fieldsById[o.id] = o, 
                                this._fieldsByName[o.name] = o; else if (o instanceof h.OneOf) this._oneofsByName[o.name] = o; else if (!(o instanceof h.OneOf || o instanceof _)) throw Error("Illegal reflect child of " + this.toString(!0) + ": " + this.children[s].toString(!0));
                                return this.clazz = i;
                            }, d.encode = function(e, t, n) {
                                for (var r, i, o = null, s = 0, a = this._fields.length; s < a; ++s) i = e[(r = this._fields[s]).name], 
                                r.required && null === i ? null === o && (o = r) : r.encode(n ? i : r.verifyValue(i), t, e);
                                if (null !== o) {
                                    var u = Error("Missing at least one required field for " + this.toString(!0) + ": " + o);
                                    throw u.encoded = t, u;
                                }
                                return t;
                            }, d.calculate = function(e) {
                                for (var t, n, r = 0, i = 0, o = this._fields.length; i < o; ++i) {
                                    if (t = this._fields[i], n = e[t.name], t.required && null === n) throw Error("Missing at least one required field for " + this.toString(!0) + ": " + t);
                                    r += t.calculate(n, e);
                                }
                                return r;
                            }, d.decode = function(t, n, r) {
                                "number" != typeof n && (n = -1);
                                for (var o, s, a, u, c = t.offset, l = new this.clazz(); t.offset < c + n || -1 === n && t.remaining() > 0; ) {
                                    if (o = t.readVarint32(), s = 7 & o, a = o >>> 3, s === e.WIRE_TYPES.ENDGROUP) {
                                        if (a !== r) throw Error("Illegal group end indicator for " + this.toString(!0) + ": " + a + " (" + (r ? r + " expected" : "not a group") + ")");
                                        break;
                                    }
                                    if (u = this._fieldsById[a]) {
                                        if (u.repeated && !u.options.packed) l[u.name].push(u.decode(s, t)); else if (u.map) {
                                            var f = u.decode(s, t);
                                            l[u.name].set(f[0], f[1]);
                                        } else if (l[u.name] = u.decode(s, t), u.oneof) {
                                            var h = l[u.oneof.name];
                                            null !== h && h !== u.name && (l[h] = null), l[u.oneof.name] = u.name;
                                        }
                                    } else switch (s) {
                                      case e.WIRE_TYPES.VARINT:
                                        t.readVarint32();
                                        break;

                                      case e.WIRE_TYPES.BITS32:
                                        t.offset += 4;
                                        break;

                                      case e.WIRE_TYPES.BITS64:
                                        t.offset += 8;
                                        break;

                                      case e.WIRE_TYPES.LDELIM:
                                        var d = t.readVarint32();
                                        t.offset += d;
                                        break;

                                      case e.WIRE_TYPES.STARTGROUP:
                                        for (;i(a, t); ) ;
                                        break;

                                      default:
                                        throw Error("Illegal wire type for unknown field " + a + " in " + this.toString(!0) + "#decode: " + s);
                                    }
                                }
                                for (var p = 0, v = this._fields.length; p < v; ++p) if (u = this._fields[p], null === l[u.name]) if ("proto3" === this.syntax) l[u.name] = u.defaultValue; else {
                                    if (u.required) {
                                        var y = Error("Missing at least one required field for " + this.toString(!0) + ": " + u.name);
                                        throw y.decoded = l, y;
                                    }
                                    e.populateDefaults && null !== u.defaultValue && (l[u.name] = u.defaultValue);
                                }
                                return l;
                            }, o.Message = h;
                            var p = function(t, n, r, i, o, a, u, c, l, f) {
                                s.call(this, t, n, a), this.className = "Message.Field", this.required = "required" === r, 
                                this.repeated = "repeated" === r, this.map = "map" === r, this.keyType = i || null, 
                                this.type = o, this.resolvedType = null, this.id = u, this.options = c || {}, this.defaultValue = null, 
                                this.oneof = l || null, this.syntax = f || "proto2", this.originalName = this.name, 
                                this.element = null, this.keyElement = null, !this.builder.options.convertFieldsToCamelCase || this instanceof h.ExtensionField || (this.name = e.Util.toCamelCase(this.name));
                            }, v = p.prototype = Object.create(s.prototype);
                            v.build = function() {
                                this.element = new l(this.type, this.resolvedType, !1, this.syntax, this.name), 
                                this.map && (this.keyElement = new l(this.keyType, void 0, !0, this.syntax, this.name)), 
                                "proto3" !== this.syntax || this.repeated || this.map ? void 0 !== this.options.default && (this.defaultValue = this.verifyValue(this.options.default)) : this.defaultValue = l.defaultFieldValue(this.type);
                            }, v.verifyValue = function(t, n) {
                                function i(e, t) {
                                    throw Error("Illegal value for " + o.toString(!0) + " of type " + o.type.name + ": " + e + " (" + t + ")");
                                }
                                n = n || !1;
                                var o = this;
                                if (null === t) return this.required && i(void 0 === t ? "undefined" : r(t), "required"), 
                                "proto3" === this.syntax && this.type !== e.TYPES.message && i(void 0 === t ? "undefined" : r(t), "proto3 field without field presence cannot be null"), 
                                null;
                                var s;
                                if (this.repeated && !n) {
                                    Array.isArray(t) || (t = [ t ]);
                                    var a = [];
                                    for (s = 0; s < t.length; s++) a.push(this.element.verifyValue(t[s]));
                                    return a;
                                }
                                return this.map && !n ? t instanceof e.Map ? t : (t instanceof Object || i(void 0 === t ? "undefined" : r(t), "expected ProtoBuf.Map or raw object for map field"), 
                                new e.Map(this, t)) : (!this.repeated && Array.isArray(t) && i(void 0 === t ? "undefined" : r(t), "no array expected"), 
                                this.element.verifyValue(t));
                            }, v.hasWirePresence = function(t, n) {
                                if ("proto3" !== this.syntax) return null !== t;
                                if (this.oneof && n[this.oneof.name] === this.name) return !0;
                                switch (this.type) {
                                  case e.TYPES.int32:
                                  case e.TYPES.sint32:
                                  case e.TYPES.sfixed32:
                                  case e.TYPES.uint32:
                                  case e.TYPES.fixed32:
                                    return 0 !== t;

                                  case e.TYPES.int64:
                                  case e.TYPES.sint64:
                                  case e.TYPES.sfixed64:
                                  case e.TYPES.uint64:
                                  case e.TYPES.fixed64:
                                    return 0 !== t.low || 0 !== t.high;

                                  case e.TYPES.bool:
                                    return t;

                                  case e.TYPES.float:
                                  case e.TYPES.double:
                                    return 0 !== t;

                                  case e.TYPES.string:
                                    return t.length > 0;

                                  case e.TYPES.bytes:
                                    return t.remaining() > 0;

                                  case e.TYPES.enum:
                                    return 0 !== t;

                                  case e.TYPES.message:
                                    return null !== t;

                                  default:
                                    return !0;
                                }
                            }, v.encode = function(n, i, o) {
                                if (null === this.type || "object" != r(this.type)) throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
                                if (null === n || this.repeated && 0 == n.length) return i;
                                try {
                                    if (this.repeated) {
                                        var s;
                                        if (this.options.packed && e.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
                                            i.writeVarint32(this.id << 3 | e.WIRE_TYPES.LDELIM), i.ensureCapacity(i.offset += 1);
                                            var a = i.offset;
                                            for (s = 0; s < n.length; s++) this.element.encodeValue(this.id, n[s], i);
                                            var u = i.offset - a, c = t.calculateVarint32(u);
                                            if (c > 1) {
                                                var l = i.slice(a, i.offset);
                                                a += c - 1, i.offset = a, i.append(l);
                                            }
                                            i.writeVarint32(u, a - c);
                                        } else for (s = 0; s < n.length; s++) i.writeVarint32(this.id << 3 | this.type.wireType), 
                                        this.element.encodeValue(this.id, n[s], i);
                                    } else this.map ? n.forEach(function(n, r, o) {
                                        var s = t.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, r) + t.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, n);
                                        i.writeVarint32(this.id << 3 | e.WIRE_TYPES.LDELIM), i.writeVarint32(s), i.writeVarint32(8 | this.keyType.wireType), 
                                        this.keyElement.encodeValue(1, r, i), i.writeVarint32(16 | this.type.wireType), 
                                        this.element.encodeValue(2, n, i);
                                    }, this) : this.hasWirePresence(n, o) && (i.writeVarint32(this.id << 3 | this.type.wireType), 
                                    this.element.encodeValue(this.id, n, i));
                                } catch (e) {
                                    throw Error("Illegal value for " + this.toString(!0) + ": " + n + " (" + e + ")");
                                }
                                return i;
                            }, v.calculate = function(n, i) {
                                if (n = this.verifyValue(n), null === this.type || "object" != r(this.type)) throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
                                if (null === n || this.repeated && 0 == n.length) return 0;
                                var o = 0;
                                try {
                                    if (this.repeated) {
                                        var s, a;
                                        if (this.options.packed && e.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
                                            for (o += t.calculateVarint32(this.id << 3 | e.WIRE_TYPES.LDELIM), a = 0, s = 0; s < n.length; s++) a += this.element.calculateLength(this.id, n[s]);
                                            o += t.calculateVarint32(a), o += a;
                                        } else for (s = 0; s < n.length; s++) o += t.calculateVarint32(this.id << 3 | this.type.wireType), 
                                        o += this.element.calculateLength(this.id, n[s]);
                                    } else this.map ? n.forEach(function(n, r, i) {
                                        var s = t.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, r) + t.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, n);
                                        o += t.calculateVarint32(this.id << 3 | e.WIRE_TYPES.LDELIM), o += t.calculateVarint32(s), 
                                        o += s;
                                    }, this) : this.hasWirePresence(n, i) && (o += t.calculateVarint32(this.id << 3 | this.type.wireType), 
                                    o += this.element.calculateLength(this.id, n));
                                } catch (e) {
                                    throw Error("Illegal value for " + this.toString(!0) + ": " + n + " (" + e + ")");
                                }
                                return o;
                            }, v.decode = function(t, n, r) {
                                var i, o;
                                if (!(!this.map && t == this.type.wireType || !r && this.repeated && this.options.packed && t == e.WIRE_TYPES.LDELIM || this.map && t == e.WIRE_TYPES.LDELIM)) throw Error("Illegal wire type for field " + this.toString(!0) + ": " + t + " (" + this.type.wireType + " expected)");
                                if (t == e.WIRE_TYPES.LDELIM && this.repeated && this.options.packed && e.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0 && !r) {
                                    o = n.readVarint32(), o = n.offset + o;
                                    for (var s = []; n.offset < o; ) s.push(this.decode(this.type.wireType, n, !0));
                                    return s;
                                }
                                if (this.map) {
                                    var a = l.defaultFieldValue(this.keyType);
                                    if (i = l.defaultFieldValue(this.type), o = n.readVarint32(), n.remaining() < o) throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + o + " required but got only " + n.remaining());
                                    var u = n.clone();
                                    for (u.limit = u.offset + o, n.offset += o; u.remaining() > 0; ) {
                                        var c = u.readVarint32();
                                        t = 7 & c;
                                        var f = c >>> 3;
                                        if (1 === f) a = this.keyElement.decode(u, t, f); else {
                                            if (2 !== f) throw Error("Unexpected tag in map field key/value submessage");
                                            i = this.element.decode(u, t, f);
                                        }
                                    }
                                    return [ a, i ];
                                }
                                return this.element.decode(n, t, this.id);
                            }, o.Message.Field = p;
                            var y = function(e, t, n, r, i, o, s) {
                                p.call(this, e, t, n, null, r, i, o, s), this.extension;
                            };
                            y.prototype = Object.create(p.prototype), o.Message.ExtensionField = y;
                            o.Message.OneOf = function(e, t, n) {
                                s.call(this, e, t, n), this.fields = [];
                            };
                            var m = function(e, t, n, r, i) {
                                u.call(this, e, t, n, r, i), this.className = "Enum", this.object = null;
                            };
                            m.getName = function(e, t) {
                                for (var n, r = Object.keys(e), i = 0; i < r.length; ++i) if (e[n = r[i]] === t) return n;
                                return null;
                            }, (m.prototype = Object.create(u.prototype)).build = function(t) {
                                if (this.object && !t) return this.object;
                                for (var n = new e.Builder.Enum(), r = this.getChildren(m.Value), i = 0, o = r.length; i < o; ++i) n[r[i].name] = r[i].id;
                                return Object.defineProperty && Object.defineProperty(n, "$options", {
                                    value: this.buildOpt(),
                                    enumerable: !1
                                }), this.object = n;
                            }, o.Enum = m;
                            var g = function(e, t, n, r) {
                                s.call(this, e, t, n), this.className = "Enum.Value", this.id = r;
                            };
                            g.prototype = Object.create(s.prototype), o.Enum.Value = g;
                            var _ = function(e, t, n, r) {
                                s.call(this, e, t, n), this.field = r;
                            };
                            _.prototype = Object.create(s.prototype), o.Extension = _;
                            var b = function(e, t, n, r) {
                                u.call(this, e, t, n, r), this.className = "Service", this.clazz = null;
                            };
                            (b.prototype = Object.create(u.prototype)).build = function(n) {
                                return this.clazz && !n ? this.clazz : this.clazz = function(e, n) {
                                    for (var i = function(t) {
                                        e.Builder.Service.call(this), this.rpcImpl = t || function(e, t, n) {
                                            setTimeout(n.bind(this, Error("Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services")), 0);
                                        };
                                    }, o = i.prototype = Object.create(e.Builder.Service.prototype), s = n.getChildren(e.Reflect.Service.RPCMethod), a = 0; a < s.length; a++) !function(e) {
                                        o[e.name] = function(i, o) {
                                            try {
                                                try {
                                                    i = e.resolvedRequestType.clazz.decode(t.wrap(i));
                                                } catch (e) {
                                                    if (!(e instanceof TypeError)) throw e;
                                                }
                                                if (null === i || "object" != (void 0 === i ? "undefined" : r(i))) throw Error("Illegal arguments");
                                                i instanceof e.resolvedRequestType.clazz || (i = new e.resolvedRequestType.clazz(i)), 
                                                this.rpcImpl(e.fqn(), i, function(t, r) {
                                                    if (t) o(t); else {
                                                        null === r && (r = "");
                                                        try {
                                                            r = e.resolvedResponseType.clazz.decode(r);
                                                        } catch (t) {}
                                                        r && r instanceof e.resolvedResponseType.clazz ? o(null, r) : o(Error("Illegal response type received in service method " + n.name + "#" + e.name));
                                                    }
                                                });
                                            } catch (e) {
                                                setTimeout(o.bind(this, e), 0);
                                            }
                                        }, i[e.name] = function(t, n, r) {
                                            new i(t)[e.name](n, r);
                                        }, Object.defineProperty && (Object.defineProperty(i[e.name], "$options", {
                                            value: e.buildOpt()
                                        }), Object.defineProperty(o[e.name], "$options", {
                                            value: i[e.name].$options
                                        }));
                                    }(s[a]);
                                    return Object.defineProperty && (Object.defineProperty(i, "$options", {
                                        value: n.buildOpt()
                                    }), Object.defineProperty(o, "$options", {
                                        value: i.$options
                                    }), Object.defineProperty(i, "$type", {
                                        value: n
                                    }), Object.defineProperty(o, "$type", {
                                        value: n
                                    })), i;
                                }(e, this);
                            }, o.Service = b;
                            var w = function(e, t, n, r) {
                                s.call(this, e, t, n), this.className = "Service.Method", this.options = r || {};
                            };
                            (w.prototype = Object.create(s.prototype)).buildOpt = c.buildOpt, o.Service.Method = w;
                            var E = function(e, t, n, r, i, o, s, a) {
                                w.call(this, e, t, n, a), this.className = "Service.RPCMethod", this.requestName = r, 
                                this.responseName = i, this.requestStream = o, this.responseStream = s, this.resolvedRequestType = null, 
                                this.resolvedResponseType = null;
                            };
                            return E.prototype = Object.create(w.prototype), o.Service.RPCMethod = E, o;
                        }(i), i.Builder = function(e, t, n) {
                            function i(e) {
                                e.messages && e.messages.forEach(function(t) {
                                    t.syntax = e.syntax, i(t);
                                }), e.enums && e.enums.forEach(function(t) {
                                    t.syntax = e.syntax;
                                });
                            }
                            var o = function(e) {
                                this.ns = new n.Namespace(this, null, ""), this.ptr = this.ns, this.resolved = !1, 
                                this.result = null, this.files = {}, this.importRoot = null, this.options = e || {};
                            }, s = o.prototype;
                            return o.isMessage = function(e) {
                                return "string" == typeof e.name && void 0 === e.values && void 0 === e.rpc;
                            }, o.isMessageField = function(e) {
                                return "string" == typeof e.rule && "string" == typeof e.name && "string" == typeof e.type && void 0 !== e.id;
                            }, o.isEnum = function(e) {
                                return "string" == typeof e.name && !(void 0 === e.values || !Array.isArray(e.values) || 0 === e.values.length);
                            }, o.isService = function(e) {
                                return !("string" != typeof e.name || "object" != r(e.rpc) || !e.rpc);
                            }, o.isExtend = function(e) {
                                return "string" == typeof e.ref;
                            }, s.reset = function() {
                                return this.ptr = this.ns, this;
                            }, s.define = function(e) {
                                if ("string" != typeof e || !t.TYPEREF.test(e)) throw Error("illegal namespace: " + e);
                                return e.split(".").forEach(function(e) {
                                    var t = this.ptr.getChild(e);
                                    null === t && this.ptr.addChild(t = new n.Namespace(this, this.ptr, e)), this.ptr = t;
                                }, this), this;
                            }, s.create = function(t) {
                                if (!t) return this;
                                if (Array.isArray(t)) {
                                    if (0 === t.length) return this;
                                    t = t.slice();
                                } else t = [ t ];
                                for (var i = [ t ]; i.length > 0; ) {
                                    if (t = i.pop(), !Array.isArray(t)) throw Error("not a valid namespace: " + JSON.stringify(t));
                                    for (;t.length > 0; ) {
                                        var s = t.shift();
                                        if (o.isMessage(s)) {
                                            var a = new n.Message(this, this.ptr, s.name, s.options, s.isGroup, s.syntax), u = {};
                                            s.oneofs && Object.keys(s.oneofs).forEach(function(e) {
                                                a.addChild(u[e] = new n.Message.OneOf(this, a, e));
                                            }, this), s.fields && s.fields.forEach(function(e) {
                                                if (null !== a.getChild(0 | e.id)) throw Error("duplicate or invalid field id in " + a.name + ": " + e.id);
                                                if (e.options && "object" != r(e.options)) throw Error("illegal field options in " + a.name + "#" + e.name);
                                                var t = null;
                                                if ("string" == typeof e.oneof && !(t = u[e.oneof])) throw Error("illegal oneof in " + a.name + "#" + e.name + ": " + e.oneof);
                                                e = new n.Message.Field(this, a, e.rule, e.keytype, e.type, e.name, e.id, e.options, t, s.syntax), 
                                                t && t.fields.push(e), a.addChild(e);
                                            }, this);
                                            var c = [];
                                            if (s.enums && s.enums.forEach(function(e) {
                                                c.push(e);
                                            }), s.messages && s.messages.forEach(function(e) {
                                                c.push(e);
                                            }), s.services && s.services.forEach(function(e) {
                                                c.push(e);
                                            }), s.extensions && ("number" == typeof s.extensions[0] ? a.extensions = [ s.extensions ] : a.extensions = s.extensions), 
                                            this.ptr.addChild(a), c.length > 0) {
                                                i.push(t), t = c, c = null, this.ptr = a, a = null;
                                                continue;
                                            }
                                            c = null;
                                        } else if (o.isEnum(s)) a = new n.Enum(this, this.ptr, s.name, s.options, s.syntax), 
                                        s.values.forEach(function(e) {
                                            a.addChild(new n.Enum.Value(this, a, e.name, e.id));
                                        }, this), this.ptr.addChild(a); else if (o.isService(s)) a = new n.Service(this, this.ptr, s.name, s.options), 
                                        Object.keys(s.rpc).forEach(function(e) {
                                            var t = s.rpc[e];
                                            a.addChild(new n.Service.RPCMethod(this, a, e, t.request, t.response, !!t.request_stream, !!t.response_stream, t.options));
                                        }, this), this.ptr.addChild(a); else {
                                            if (!o.isExtend(s)) throw Error("not a valid definition: " + JSON.stringify(s));
                                            if (a = this.ptr.resolve(s.ref, !0)) s.fields.forEach(function(t) {
                                                if (null !== a.getChild(0 | t.id)) throw Error("duplicate extended field id in " + a.name + ": " + t.id);
                                                if (a.extensions) {
                                                    var r = !1;
                                                    if (a.extensions.forEach(function(e) {
                                                        t.id >= e[0] && t.id <= e[1] && (r = !0);
                                                    }), !r) throw Error("illegal extended field id in " + a.name + ": " + t.id + " (not within valid ranges)");
                                                }
                                                var i = t.name;
                                                this.options.convertFieldsToCamelCase && (i = e.Util.toCamelCase(i));
                                                var o = new n.Message.ExtensionField(this, a, t.rule, t.type, this.ptr.fqn() + "." + i, t.id, t.options), s = new n.Extension(this, this.ptr, t.name, o);
                                                o.extension = s, this.ptr.addChild(s), a.addChild(o);
                                            }, this); else if (!/\.?google\.protobuf\./.test(s.ref)) throw Error("extended message " + s.ref + " is not defined");
                                        }
                                        s = null, a = null;
                                    }
                                    t = null, this.ptr = this.ptr.parent;
                                }
                                return this.resolved = !1, this.result = null, this;
                            }, s.import = function(t, n) {
                                var o = "/";
                                if ("string" == typeof n) {
                                    if (e.Util.IS_NODE && (n = Ii.resolve(n)), !0 === this.files[n]) return this.reset();
                                    this.files[n] = !0;
                                } else if ("object" == (void 0 === n ? "undefined" : r(n))) {
                                    var s = n.root;
                                    e.Util.IS_NODE && (s = Ii.resolve(s)), (s.indexOf("\\") >= 0 || n.file.indexOf("\\") >= 0) && (o = "\\");
                                    var a;
                                    if (a = e.Util.IS_NODE ? Ii.join(s, n.file) : s + o + n.file, !0 === this.files[a]) return this.reset();
                                    this.files[a] = !0;
                                }
                                if (t.imports && t.imports.length > 0) {
                                    var u, c = !1;
                                    "object" == (void 0 === n ? "undefined" : r(n)) ? (this.importRoot = n.root, c = !0, 
                                    u = this.importRoot, n = n.file, (u.indexOf("\\") >= 0 || n.indexOf("\\") >= 0) && (o = "\\")) : "string" == typeof n ? this.importRoot ? u = this.importRoot : n.indexOf("/") >= 0 ? "" === (u = n.replace(/\/[^\/]*$/, "")) && (u = "/") : n.indexOf("\\") >= 0 ? (u = n.replace(/\\[^\\]*$/, ""), 
                                    o = "\\") : u = "." : u = null;
                                    for (var l = 0; l < t.imports.length; l++) if ("string" == typeof t.imports[l]) {
                                        if (!u) throw Error("cannot determine import root");
                                        var f = t.imports[l];
                                        if ("google/protobuf/descriptor.proto" === f) continue;
                                        if (f = e.Util.IS_NODE ? Ii.join(u, f) : u + o + f, !0 === this.files[f]) continue;
                                        /\.proto$/i.test(f) && !e.DotProto && (f = f.replace(/\.proto$/, ".json"));
                                        var h = e.Util.fetch(f);
                                        if (null === h) throw Error("failed to import '" + f + "' in '" + n + "': file not found");
                                        /\.json$/i.test(f) ? this.import(JSON.parse(h + ""), f) : this.import(e.DotProto.Parser.parse(h), f);
                                    } else n ? /\.(\w+)$/.test(n) ? this.import(t.imports[l], n.replace(/^(.+)\.(\w+)$/, function(e, t, n) {
                                        return t + "_import" + l + "." + n;
                                    })) : this.import(t.imports[l], n + "_import" + l) : this.import(t.imports[l]);
                                    c && (this.importRoot = null);
                                }
                                t.package && this.define(t.package), t.syntax && i(t);
                                var d = this.ptr;
                                return t.options && Object.keys(t.options).forEach(function(e) {
                                    d.options[e] = t.options[e];
                                }), t.messages && (this.create(t.messages), this.ptr = d), t.enums && (this.create(t.enums), 
                                this.ptr = d), t.services && (this.create(t.services), this.ptr = d), t.extends && this.create(t.extends), 
                                this.reset();
                            }, s.resolveAll = function() {
                                var i;
                                if (null == this.ptr || "object" == r(this.ptr.type)) return this;
                                if (this.ptr instanceof n.Namespace) this.ptr.children.forEach(function(e) {
                                    this.ptr = e, this.resolveAll();
                                }, this); else if (this.ptr instanceof n.Message.Field) {
                                    if (t.TYPE.test(this.ptr.type)) this.ptr.type = e.TYPES[this.ptr.type]; else {
                                        if (!t.TYPEREF.test(this.ptr.type)) throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                                        if (!(i = (this.ptr instanceof n.Message.ExtensionField ? this.ptr.extension.parent : this.ptr.parent).resolve(this.ptr.type, !0))) throw Error("unresolvable type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                                        if (this.ptr.resolvedType = i, i instanceof n.Enum) {
                                            if (this.ptr.type = e.TYPES.enum, "proto3" === this.ptr.syntax && "proto3" !== i.syntax) throw Error("proto3 message cannot reference proto2 enum");
                                        } else {
                                            if (!(i instanceof n.Message)) throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                                            this.ptr.type = i.isGroup ? e.TYPES.group : e.TYPES.message;
                                        }
                                    }
                                    if (this.ptr.map) {
                                        if (!t.TYPE.test(this.ptr.keyType)) throw Error("illegal key type for map field in " + this.ptr.toString(!0) + ": " + this.ptr.keyType);
                                        this.ptr.keyType = e.TYPES[this.ptr.keyType];
                                    }
                                    "proto3" === this.ptr.syntax && this.ptr.repeated && void 0 === this.ptr.options.packed && -1 !== e.PACKABLE_WIRE_TYPES.indexOf(this.ptr.type.wireType) && (this.ptr.options.packed = !0);
                                } else if (this.ptr instanceof e.Reflect.Service.Method) {
                                    if (!(this.ptr instanceof e.Reflect.Service.RPCMethod)) throw Error("illegal service type in " + this.ptr.toString(!0));
                                    if (!((i = this.ptr.parent.resolve(this.ptr.requestName, !0)) && i instanceof e.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.requestName);
                                    if (this.ptr.resolvedRequestType = i, !((i = this.ptr.parent.resolve(this.ptr.responseName, !0)) && i instanceof e.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.responseName);
                                    this.ptr.resolvedResponseType = i;
                                } else if (!(this.ptr instanceof e.Reflect.Message.OneOf || this.ptr instanceof e.Reflect.Extension || this.ptr instanceof e.Reflect.Enum.Value)) throw Error("illegal object in namespace: " + r(this.ptr) + ": " + this.ptr);
                                return this.reset();
                            }, s.build = function(e) {
                                if (this.reset(), this.resolved || (this.resolveAll(), this.resolved = !0, this.result = null), 
                                null === this.result && (this.result = this.ns.build()), !e) return this.result;
                                for (var t = "string" == typeof e ? e.split(".") : e, n = this.result, r = 0; r < t.length; r++) {
                                    if (!n[t[r]]) {
                                        n = null;
                                        break;
                                    }
                                    n = n[t[r]];
                                }
                                return n;
                            }, s.lookup = function(e, t) {
                                return e ? this.ns.resolve(e, t) : this.ns;
                            }, s.toString = function() {
                                return "Builder";
                            }, o.Message = function() {}, o.Enum = function() {}, o.Service = function() {}, 
                            o;
                        }(i, i.Lang, i.Reflect), i.Map = function(e, t) {
                            function n(e) {
                                var t = 0;
                                return {
                                    next: function() {
                                        return t < e.length ? {
                                            done: !1,
                                            value: e[t++]
                                        } : {
                                            done: !0
                                        };
                                    }
                                };
                            }
                            var r = function(e, n) {
                                if (!e.map) throw Error("field is not a map");
                                if (this.field = e, this.keyElem = new t.Element(e.keyType, null, !0, e.syntax), 
                                this.valueElem = new t.Element(e.type, e.resolvedType, !1, e.syntax), this.map = {}, 
                                Object.defineProperty(this, "size", {
                                    get: function() {
                                        return Object.keys(this.map).length;
                                    }
                                }), n) for (var r = Object.keys(n), i = 0; i < r.length; i++) {
                                    var o = this.keyElem.valueFromString(r[i]), s = this.valueElem.verifyValue(n[r[i]]);
                                    this.map[this.keyElem.valueToString(o)] = {
                                        key: o,
                                        value: s
                                    };
                                }
                            }, i = r.prototype;
                            return i.clear = function() {
                                this.map = {};
                            }, i.delete = function(e) {
                                var t = this.keyElem.valueToString(this.keyElem.verifyValue(e)), n = t in this.map;
                                return delete this.map[t], n;
                            }, i.entries = function() {
                                for (var e, t = [], r = Object.keys(this.map), i = 0; i < r.length; i++) t.push([ (e = this.map[r[i]]).key, e.value ]);
                                return n(t);
                            }, i.keys = function() {
                                for (var e = [], t = Object.keys(this.map), r = 0; r < t.length; r++) e.push(this.map[t[r]].key);
                                return n(e);
                            }, i.values = function() {
                                for (var e = [], t = Object.keys(this.map), r = 0; r < t.length; r++) e.push(this.map[t[r]].value);
                                return n(e);
                            }, i.forEach = function(e, t) {
                                for (var n, r = Object.keys(this.map), i = 0; i < r.length; i++) e.call(t, (n = this.map[r[i]]).value, n.key, this);
                            }, i.set = function(e, t) {
                                var n = this.keyElem.verifyValue(e), r = this.valueElem.verifyValue(t);
                                return this.map[this.keyElem.valueToString(n)] = {
                                    key: n,
                                    value: r
                                }, this;
                            }, i.get = function(e) {
                                var t = this.keyElem.valueToString(this.keyElem.verifyValue(e));
                                if (t in this.map) return this.map[t].value;
                            }, i.has = function(e) {
                                return this.keyElem.valueToString(this.keyElem.verifyValue(e)) in this.map;
                            }, r;
                        }(0, i.Reflect), i.newBuilder = function(e) {
                            return void 0 === (e = e || {}).convertFieldsToCamelCase && (e.convertFieldsToCamelCase = i.convertFieldsToCamelCase), 
                            void 0 === e.populateAccessors && (e.populateAccessors = i.populateAccessors), new i.Builder(e);
                        }, i.loadJson = function(e, t, n) {
                            return ("string" == typeof t || t && "string" == typeof t.file && "string" == typeof t.root) && (n = t, 
                            t = null), t && "object" == (void 0 === t ? "undefined" : r(t)) || (t = i.newBuilder()), 
                            "string" == typeof e && (e = JSON.parse(e)), t.import(e, n), t.resolveAll(), t;
                        }, i.loadJsonFile = function(e, t, n) {
                            if (t && "object" == (void 0 === t ? "undefined" : r(t)) ? (n = t, t = null) : t && "function" == typeof t || (t = null), 
                            t) return i.Util.fetch("string" == typeof e ? e : e.root + "/" + e.file, function(r) {
                                if (null !== r) try {
                                    t(null, i.loadJson(JSON.parse(r), n, e));
                                } catch (e) {
                                    t(e);
                                } else t(Error("Failed to fetch file"));
                            });
                            var o = i.Util.fetch("object" == (void 0 === e ? "undefined" : r(e)) ? e.root + "/" + e.file : e);
                            return null === o ? null : i.loadJson(JSON.parse(o), n, e);
                        }, i;
                    });
                }).newBuilder({}).import({
                    package: "push_server.messages2",
                    syntax: "proto2",
                    options: {
                        objc_class_prefix: "AVIM"
                    },
                    messages: [ {
                        name: "JsonObjectMessage",
                        syntax: "proto2",
                        fields: [ {
                            rule: "required",
                            type: "string",
                            name: "data",
                            id: 1
                        } ]
                    }, {
                        name: "UnreadTuple",
                        syntax: "proto2",
                        fields: [ {
                            rule: "required",
                            type: "string",
                            name: "cid",
                            id: 1
                        }, {
                            rule: "required",
                            type: "int32",
                            name: "unread",
                            id: 2
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "mid",
                            id: 3
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "timestamp",
                            id: 4
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "from",
                            id: 5
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "data",
                            id: 6
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "patchTimestamp",
                            id: 7
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "mentioned",
                            id: 8
                        }, {
                            rule: "optional",
                            type: "bytes",
                            name: "binaryMsg",
                            id: 9
                        }, {
                            rule: "optional",
                            type: "int32",
                            name: "convType",
                            id: 10
                        } ]
                    }, {
                        name: "LogItem",
                        syntax: "proto2",
                        fields: [ {
                            rule: "optional",
                            type: "string",
                            name: "from",
                            id: 1
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "data",
                            id: 2
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "timestamp",
                            id: 3
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "msgId",
                            id: 4
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "ackAt",
                            id: 5
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "readAt",
                            id: 6
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "patchTimestamp",
                            id: 7
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "mentionAll",
                            id: 8
                        }, {
                            rule: "repeated",
                            type: "string",
                            name: "mentionPids",
                            id: 9
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "bin",
                            id: 10
                        }, {
                            rule: "optional",
                            type: "int32",
                            name: "convType",
                            id: 11
                        } ]
                    }, {
                        name: "ConvMemberInfo",
                        syntax: "proto2",
                        fields: [ {
                            rule: "optional",
                            type: "string",
                            name: "pid",
                            id: 1
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "role",
                            id: 2
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "infoId",
                            id: 3
                        } ]
                    }, {
                        name: "DataCommand",
                        syntax: "proto2",
                        fields: [ {
                            rule: "repeated",
                            type: "string",
                            name: "ids",
                            id: 1
                        }, {
                            rule: "repeated",
                            type: "JsonObjectMessage",
                            name: "msg",
                            id: 2
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "offline",
                            id: 3
                        } ]
                    }, {
                        name: "SessionCommand",
                        syntax: "proto2",
                        fields: [ {
                            rule: "optional",
                            type: "int64",
                            name: "t",
                            id: 1
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "n",
                            id: 2
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "s",
                            id: 3
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "ua",
                            id: 4
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "r",
                            id: 5
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "tag",
                            id: 6
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "deviceId",
                            id: 7
                        }, {
                            rule: "repeated",
                            type: "string",
                            name: "sessionPeerIds",
                            id: 8
                        }, {
                            rule: "repeated",
                            type: "string",
                            name: "onlineSessionPeerIds",
                            id: 9
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "st",
                            id: 10
                        }, {
                            rule: "optional",
                            type: "int32",
                            name: "stTtl",
                            id: 11
                        }, {
                            rule: "optional",
                            type: "int32",
                            name: "code",
                            id: 12
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "reason",
                            id: 13
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "deviceToken",
                            id: 14
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "sp",
                            id: 15
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "detail",
                            id: 16
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "lastUnreadNotifTime",
                            id: 17
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "lastPatchTime",
                            id: 18
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "configBitmap",
                            id: 19
                        } ]
                    }, {
                        name: "ErrorCommand",
                        syntax: "proto2",
                        fields: [ {
                            rule: "required",
                            type: "int32",
                            name: "code",
                            id: 1
                        }, {
                            rule: "required",
                            type: "string",
                            name: "reason",
                            id: 2
                        }, {
                            rule: "optional",
                            type: "int32",
                            name: "appCode",
                            id: 3
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "detail",
                            id: 4
                        }, {
                            rule: "repeated",
                            type: "string",
                            name: "pids",
                            id: 5
                        } ]
                    }, {
                        name: "DirectCommand",
                        syntax: "proto2",
                        fields: [ {
                            rule: "optional",
                            type: "string",
                            name: "msg",
                            id: 1
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "uid",
                            id: 2
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "fromPeerId",
                            id: 3
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "timestamp",
                            id: 4
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "offline",
                            id: 5
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "hasMore",
                            id: 6
                        }, {
                            rule: "repeated",
                            type: "string",
                            name: "toPeerIds",
                            id: 7
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "r",
                            id: 10
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "cid",
                            id: 11
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "id",
                            id: 12
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "transient",
                            id: 13
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "dt",
                            id: 14
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "roomId",
                            id: 15
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "pushData",
                            id: 16
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "will",
                            id: 17
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "patchTimestamp",
                            id: 18
                        }, {
                            rule: "optional",
                            type: "bytes",
                            name: "binaryMsg",
                            id: 19
                        }, {
                            rule: "repeated",
                            type: "string",
                            name: "mentionPids",
                            id: 20
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "mentionAll",
                            id: 21
                        }, {
                            rule: "optional",
                            type: "int32",
                            name: "convType",
                            id: 22
                        } ]
                    }, {
                        name: "AckCommand",
                        syntax: "proto2",
                        fields: [ {
                            rule: "optional",
                            type: "int32",
                            name: "code",
                            id: 1
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "reason",
                            id: 2
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "mid",
                            id: 3
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "cid",
                            id: 4
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "t",
                            id: 5
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "uid",
                            id: 6
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "fromts",
                            id: 7
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "tots",
                            id: 8
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "type",
                            id: 9
                        }, {
                            rule: "repeated",
                            type: "string",
                            name: "ids",
                            id: 10
                        }, {
                            rule: "optional",
                            type: "int32",
                            name: "appCode",
                            id: 11
                        } ]
                    }, {
                        name: "UnreadCommand",
                        syntax: "proto2",
                        fields: [ {
                            rule: "repeated",
                            type: "UnreadTuple",
                            name: "convs",
                            id: 1
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "notifTime",
                            id: 2
                        } ]
                    }, {
                        name: "ConvCommand",
                        syntax: "proto2",
                        fields: [ {
                            rule: "repeated",
                            type: "string",
                            name: "m",
                            id: 1
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "transient",
                            id: 2
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "unique",
                            id: 3
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "cid",
                            id: 4
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "cdate",
                            id: 5
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "initBy",
                            id: 6
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "sort",
                            id: 7
                        }, {
                            rule: "optional",
                            type: "int32",
                            name: "limit",
                            id: 8
                        }, {
                            rule: "optional",
                            type: "int32",
                            name: "skip",
                            id: 9
                        }, {
                            rule: "optional",
                            type: "int32",
                            name: "flag",
                            id: 10
                        }, {
                            rule: "optional",
                            type: "int32",
                            name: "count",
                            id: 11
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "udate",
                            id: 12
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "t",
                            id: 13
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "n",
                            id: 14
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "s",
                            id: 15
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "statusSub",
                            id: 16
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "statusPub",
                            id: 17
                        }, {
                            rule: "optional",
                            type: "int32",
                            name: "statusTTL",
                            id: 18
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "uniqueId",
                            id: 19
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "targetClientId",
                            id: 20
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "maxReadTimestamp",
                            id: 21
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "maxAckTimestamp",
                            id: 22
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "queryAllMembers",
                            id: 23
                        }, {
                            rule: "repeated",
                            type: "MaxReadTuple",
                            name: "maxReadTuples",
                            id: 24
                        }, {
                            rule: "repeated",
                            type: "string",
                            name: "cids",
                            id: 25
                        }, {
                            rule: "optional",
                            type: "ConvMemberInfo",
                            name: "info",
                            id: 26
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "tempConv",
                            id: 27
                        }, {
                            rule: "optional",
                            type: "int32",
                            name: "tempConvTTL",
                            id: 28
                        }, {
                            rule: "repeated",
                            type: "string",
                            name: "tempConvIds",
                            id: 29
                        }, {
                            rule: "repeated",
                            type: "string",
                            name: "allowedPids",
                            id: 30
                        }, {
                            rule: "repeated",
                            type: "ErrorCommand",
                            name: "failedPids",
                            id: 31
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "next",
                            id: 40
                        }, {
                            rule: "optional",
                            type: "JsonObjectMessage",
                            name: "results",
                            id: 100
                        }, {
                            rule: "optional",
                            type: "JsonObjectMessage",
                            name: "where",
                            id: 101
                        }, {
                            rule: "optional",
                            type: "JsonObjectMessage",
                            name: "attr",
                            id: 103
                        } ]
                    }, {
                        name: "RoomCommand",
                        syntax: "proto2",
                        fields: [ {
                            rule: "optional",
                            type: "string",
                            name: "roomId",
                            id: 1
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "s",
                            id: 2
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "t",
                            id: 3
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "n",
                            id: 4
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "transient",
                            id: 5
                        }, {
                            rule: "repeated",
                            type: "string",
                            name: "roomPeerIds",
                            id: 6
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "byPeerId",
                            id: 7
                        } ]
                    }, {
                        name: "LogsCommand",
                        syntax: "proto2",
                        fields: [ {
                            rule: "optional",
                            type: "string",
                            name: "cid",
                            id: 1
                        }, {
                            rule: "optional",
                            type: "int32",
                            name: "l",
                            id: 2
                        }, {
                            rule: "optional",
                            type: "int32",
                            name: "limit",
                            id: 3
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "t",
                            id: 4
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "tt",
                            id: 5
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "tmid",
                            id: 6
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "mid",
                            id: 7
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "checksum",
                            id: 8
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "stored",
                            id: 9
                        }, {
                            rule: "optional",
                            type: "QueryDirection",
                            name: "direction",
                            id: 10,
                            options: {
                                default: "OLD"
                            }
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "tIncluded",
                            id: 11
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "ttIncluded",
                            id: 12
                        }, {
                            rule: "optional",
                            type: "int32",
                            name: "lctype",
                            id: 13
                        }, {
                            rule: "repeated",
                            type: "LogItem",
                            name: "logs",
                            id: 105
                        } ],
                        enums: [ {
                            name: "QueryDirection",
                            syntax: "proto2",
                            values: [ {
                                name: "OLD",
                                id: 1
                            }, {
                                name: "NEW",
                                id: 2
                            } ]
                        } ]
                    }, {
                        name: "RcpCommand",
                        syntax: "proto2",
                        fields: [ {
                            rule: "optional",
                            type: "string",
                            name: "id",
                            id: 1
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "cid",
                            id: 2
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "t",
                            id: 3
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "read",
                            id: 4
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "from",
                            id: 5
                        } ]
                    }, {
                        name: "ReadTuple",
                        syntax: "proto2",
                        fields: [ {
                            rule: "required",
                            type: "string",
                            name: "cid",
                            id: 1
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "timestamp",
                            id: 2
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "mid",
                            id: 3
                        } ]
                    }, {
                        name: "MaxReadTuple",
                        syntax: "proto2",
                        fields: [ {
                            rule: "optional",
                            type: "string",
                            name: "pid",
                            id: 1
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "maxAckTimestamp",
                            id: 2
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "maxReadTimestamp",
                            id: 3
                        } ]
                    }, {
                        name: "ReadCommand",
                        syntax: "proto2",
                        fields: [ {
                            rule: "optional",
                            type: "string",
                            name: "cid",
                            id: 1
                        }, {
                            rule: "repeated",
                            type: "string",
                            name: "cids",
                            id: 2
                        }, {
                            rule: "repeated",
                            type: "ReadTuple",
                            name: "convs",
                            id: 3
                        } ]
                    }, {
                        name: "PresenceCommand",
                        syntax: "proto2",
                        fields: [ {
                            rule: "optional",
                            type: "StatusType",
                            name: "status",
                            id: 1
                        }, {
                            rule: "repeated",
                            type: "string",
                            name: "sessionPeerIds",
                            id: 2
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "cid",
                            id: 3
                        } ]
                    }, {
                        name: "ReportCommand",
                        syntax: "proto2",
                        fields: [ {
                            rule: "optional",
                            type: "bool",
                            name: "initiative",
                            id: 1
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "type",
                            id: 2
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "data",
                            id: 3
                        } ]
                    }, {
                        name: "PatchItem",
                        syntax: "proto2",
                        fields: [ {
                            rule: "optional",
                            type: "string",
                            name: "cid",
                            id: 1
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "mid",
                            id: 2
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "timestamp",
                            id: 3
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "recall",
                            id: 4
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "data",
                            id: 5
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "patchTimestamp",
                            id: 6
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "from",
                            id: 7
                        }, {
                            rule: "optional",
                            type: "bytes",
                            name: "binaryMsg",
                            id: 8
                        }, {
                            rule: "optional",
                            type: "bool",
                            name: "mentionAll",
                            id: 9
                        }, {
                            rule: "repeated",
                            type: "string",
                            name: "mentionPids",
                            id: 10
                        } ]
                    }, {
                        name: "PatchCommand",
                        syntax: "proto2",
                        fields: [ {
                            rule: "repeated",
                            type: "PatchItem",
                            name: "patches",
                            id: 1
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "lastPatchTime",
                            id: 2
                        } ]
                    }, {
                        name: "PubsubCommand",
                        syntax: "proto2",
                        fields: [ {
                            rule: "optional",
                            type: "string",
                            name: "cid",
                            id: 1
                        }, {
                            rule: "repeated",
                            type: "string",
                            name: "cids",
                            id: 2
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "topic",
                            id: 3
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "subtopic",
                            id: 4
                        }, {
                            rule: "repeated",
                            type: "string",
                            name: "topics",
                            id: 5
                        }, {
                            rule: "repeated",
                            type: "string",
                            name: "subtopics",
                            id: 6
                        }, {
                            rule: "optional",
                            type: "JsonObjectMessage",
                            name: "results",
                            id: 7
                        } ]
                    }, {
                        name: "BlacklistCommand",
                        syntax: "proto2",
                        fields: [ {
                            rule: "optional",
                            type: "string",
                            name: "srcCid",
                            id: 1
                        }, {
                            rule: "repeated",
                            type: "string",
                            name: "toPids",
                            id: 2
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "srcPid",
                            id: 3
                        }, {
                            rule: "repeated",
                            type: "string",
                            name: "toCids",
                            id: 4
                        }, {
                            rule: "optional",
                            type: "int32",
                            name: "limit",
                            id: 5
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "next",
                            id: 6
                        }, {
                            rule: "repeated",
                            type: "string",
                            name: "blockedPids",
                            id: 8
                        }, {
                            rule: "repeated",
                            type: "string",
                            name: "blockedCids",
                            id: 9
                        }, {
                            rule: "repeated",
                            type: "string",
                            name: "allowedPids",
                            id: 10
                        }, {
                            rule: "repeated",
                            type: "ErrorCommand",
                            name: "failedPids",
                            id: 11
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "t",
                            id: 12
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "n",
                            id: 13
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "s",
                            id: 14
                        } ]
                    }, {
                        name: "GenericCommand",
                        syntax: "proto2",
                        fields: [ {
                            rule: "optional",
                            type: "CommandType",
                            name: "cmd",
                            id: 1
                        }, {
                            rule: "optional",
                            type: "OpType",
                            name: "op",
                            id: 2
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "appId",
                            id: 3
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "peerId",
                            id: 4
                        }, {
                            rule: "optional",
                            type: "int32",
                            name: "i",
                            id: 5
                        }, {
                            rule: "optional",
                            type: "string",
                            name: "installationId",
                            id: 6
                        }, {
                            rule: "optional",
                            type: "int32",
                            name: "priority",
                            id: 7
                        }, {
                            rule: "optional",
                            type: "int32",
                            name: "service",
                            id: 8
                        }, {
                            rule: "optional",
                            type: "int64",
                            name: "serverTs",
                            id: 9
                        }, {
                            rule: "optional",
                            type: "DataCommand",
                            name: "dataMessage",
                            id: 101
                        }, {
                            rule: "optional",
                            type: "SessionCommand",
                            name: "sessionMessage",
                            id: 102
                        }, {
                            rule: "optional",
                            type: "ErrorCommand",
                            name: "errorMessage",
                            id: 103
                        }, {
                            rule: "optional",
                            type: "DirectCommand",
                            name: "directMessage",
                            id: 104
                        }, {
                            rule: "optional",
                            type: "AckCommand",
                            name: "ackMessage",
                            id: 105
                        }, {
                            rule: "optional",
                            type: "UnreadCommand",
                            name: "unreadMessage",
                            id: 106
                        }, {
                            rule: "optional",
                            type: "ReadCommand",
                            name: "readMessage",
                            id: 107
                        }, {
                            rule: "optional",
                            type: "RcpCommand",
                            name: "rcpMessage",
                            id: 108
                        }, {
                            rule: "optional",
                            type: "LogsCommand",
                            name: "logsMessage",
                            id: 109
                        }, {
                            rule: "optional",
                            type: "ConvCommand",
                            name: "convMessage",
                            id: 110
                        }, {
                            rule: "optional",
                            type: "RoomCommand",
                            name: "roomMessage",
                            id: 111
                        }, {
                            rule: "optional",
                            type: "PresenceCommand",
                            name: "presenceMessage",
                            id: 112
                        }, {
                            rule: "optional",
                            type: "ReportCommand",
                            name: "reportMessage",
                            id: 113
                        }, {
                            rule: "optional",
                            type: "PatchCommand",
                            name: "patchMessage",
                            id: 114
                        }, {
                            rule: "optional",
                            type: "PubsubCommand",
                            name: "pubsubMessage",
                            id: 115
                        }, {
                            rule: "optional",
                            type: "BlacklistCommand",
                            name: "blacklistMessage",
                            id: 116
                        } ]
                    } ],
                    enums: [ {
                        name: "CommandType",
                        syntax: "proto2",
                        values: [ {
                            name: "session",
                            id: 0
                        }, {
                            name: "conv",
                            id: 1
                        }, {
                            name: "direct",
                            id: 2
                        }, {
                            name: "ack",
                            id: 3
                        }, {
                            name: "rcp",
                            id: 4
                        }, {
                            name: "unread",
                            id: 5
                        }, {
                            name: "logs",
                            id: 6
                        }, {
                            name: "error",
                            id: 7
                        }, {
                            name: "login",
                            id: 8
                        }, {
                            name: "data",
                            id: 9
                        }, {
                            name: "room",
                            id: 10
                        }, {
                            name: "read",
                            id: 11
                        }, {
                            name: "presence",
                            id: 12
                        }, {
                            name: "report",
                            id: 13
                        }, {
                            name: "echo",
                            id: 14
                        }, {
                            name: "loggedin",
                            id: 15
                        }, {
                            name: "logout",
                            id: 16
                        }, {
                            name: "loggedout",
                            id: 17
                        }, {
                            name: "patch",
                            id: 18
                        }, {
                            name: "pubsub",
                            id: 19
                        }, {
                            name: "blacklist",
                            id: 20
                        } ]
                    }, {
                        name: "OpType",
                        syntax: "proto2",
                        values: [ {
                            name: "open",
                            id: 1
                        }, {
                            name: "add",
                            id: 2
                        }, {
                            name: "remove",
                            id: 3
                        }, {
                            name: "close",
                            id: 4
                        }, {
                            name: "opened",
                            id: 5
                        }, {
                            name: "closed",
                            id: 6
                        }, {
                            name: "query",
                            id: 7
                        }, {
                            name: "query_result",
                            id: 8
                        }, {
                            name: "conflict",
                            id: 9
                        }, {
                            name: "added",
                            id: 10
                        }, {
                            name: "removed",
                            id: 11
                        }, {
                            name: "refresh",
                            id: 12
                        }, {
                            name: "refreshed",
                            id: 13
                        }, {
                            name: "start",
                            id: 30
                        }, {
                            name: "started",
                            id: 31
                        }, {
                            name: "joined",
                            id: 32
                        }, {
                            name: "members_joined",
                            id: 33
                        }, {
                            name: "left",
                            id: 39
                        }, {
                            name: "members_left",
                            id: 40
                        }, {
                            name: "results",
                            id: 42
                        }, {
                            name: "count",
                            id: 43
                        }, {
                            name: "result",
                            id: 44
                        }, {
                            name: "update",
                            id: 45
                        }, {
                            name: "updated",
                            id: 46
                        }, {
                            name: "mute",
                            id: 47
                        }, {
                            name: "unmute",
                            id: 48
                        }, {
                            name: "status",
                            id: 49
                        }, {
                            name: "members",
                            id: 50
                        }, {
                            name: "max_read",
                            id: 51
                        }, {
                            name: "is_member",
                            id: 52
                        }, {
                            name: "member_info_update",
                            id: 53
                        }, {
                            name: "member_info_updated",
                            id: 54
                        }, {
                            name: "member_info_changed",
                            id: 55
                        }, {
                            name: "join",
                            id: 80
                        }, {
                            name: "invite",
                            id: 81
                        }, {
                            name: "leave",
                            id: 82
                        }, {
                            name: "kick",
                            id: 83
                        }, {
                            name: "reject",
                            id: 84
                        }, {
                            name: "invited",
                            id: 85
                        }, {
                            name: "kicked",
                            id: 86
                        }, {
                            name: "upload",
                            id: 100
                        }, {
                            name: "uploaded",
                            id: 101
                        }, {
                            name: "subscribe",
                            id: 120
                        }, {
                            name: "subscribed",
                            id: 121
                        }, {
                            name: "unsubscribe",
                            id: 122
                        }, {
                            name: "unsubscribed",
                            id: 123
                        }, {
                            name: "is_subscribed",
                            id: 124
                        }, {
                            name: "modify",
                            id: 150
                        }, {
                            name: "modified",
                            id: 151
                        }, {
                            name: "block",
                            id: 170
                        }, {
                            name: "unblock",
                            id: 171
                        }, {
                            name: "blocked",
                            id: 172
                        }, {
                            name: "unblocked",
                            id: 173
                        }, {
                            name: "members_blocked",
                            id: 174
                        }, {
                            name: "members_unblocked",
                            id: 175
                        }, {
                            name: "add_shutup",
                            id: 180
                        }, {
                            name: "remove_shutup",
                            id: 181
                        }, {
                            name: "query_shutup",
                            id: 182
                        }, {
                            name: "shutup_added",
                            id: 183
                        }, {
                            name: "shutup_removed",
                            id: 184
                        }, {
                            name: "shutup_result",
                            id: 185
                        }, {
                            name: "shutuped",
                            id: 186
                        }, {
                            name: "unshutuped",
                            id: 187
                        }, {
                            name: "members_shutuped",
                            id: 188
                        }, {
                            name: "members_unshutuped",
                            id: 189
                        } ]
                    }, {
                        name: "StatusType",
                        syntax: "proto2",
                        values: [ {
                            name: "on",
                            id: 1
                        }, {
                            name: "off",
                            id: 2
                        } ]
                    } ],
                    isNamespace: !0
                }).build().push_server.messages2, xi = Ni.JsonObjectMessage, Pi = Ni.UnreadTuple, ji = Ni.LogItem, Ri = Ni.DataCommand, ki = Ni.SessionCommand, Li = Ni.ErrorCommand, Ui = Ni.DirectCommand, Fi = Ni.AckCommand, Di = Ni.UnreadCommand, Mi = Ni.ConvCommand, Bi = Ni.RoomCommand, qi = Ni.LogsCommand, Vi = Ni.RcpCommand, Yi = Ni.ReadTuple, Wi = Ni.MaxReadTuple, zi = Ni.ReadCommand, Gi = Ni.PresenceCommand, Ji = Ni.ReportCommand, Hi = Ni.GenericCommand, Ki = Ni.BlacklistCommand, Qi = Ni.PatchCommand, $i = Ni.PatchItem, Xi = Ni.ConvMemberInfo, Zi = Ni.CommandType, eo = Ni.OpType, to = Ni.StatusType, no = Object.freeze({
                    JsonObjectMessage: xi,
                    UnreadTuple: Pi,
                    LogItem: ji,
                    DataCommand: Ri,
                    SessionCommand: ki,
                    ErrorCommand: Li,
                    DirectCommand: Ui,
                    AckCommand: Fi,
                    UnreadCommand: Di,
                    ConvCommand: Mi,
                    RoomCommand: Bi,
                    LogsCommand: qi,
                    RcpCommand: Vi,
                    ReadTuple: Yi,
                    MaxReadTuple: Wi,
                    ReadCommand: zi,
                    PresenceCommand: Gi,
                    ReportCommand: Ji,
                    GenericCommand: Hi,
                    BlacklistCommand: Ki,
                    PatchCommand: Qi,
                    PatchItem: $i,
                    ConvMemberInfo: Xi,
                    CommandType: Zi,
                    OpType: eo,
                    StatusType: to
                }), ro = l(function(e) {
                    function t() {}
                    function n(e, t, n) {
                        this.fn = e, this.context = t, this.once = n || !1;
                    }
                    function r(e, t, r, i, o) {
                        if ("function" != typeof r) throw new TypeError("The listener must be a function");
                        var s = new n(r, i || e, o), u = a ? a + t : t;
                        return e._events[u] ? e._events[u].fn ? e._events[u] = [ e._events[u], s ] : e._events[u].push(s) : (e._events[u] = s, 
                        e._eventsCount++), e;
                    }
                    function i(e, n) {
                        0 == --e._eventsCount ? e._events = new t() : delete e._events[n];
                    }
                    function o() {
                        this._events = new t(), this._eventsCount = 0;
                    }
                    var s = Object.prototype.hasOwnProperty, a = "~";
                    Object.create && (t.prototype = Object.create(null), new t().__proto__ || (a = !1)), 
                    o.prototype.eventNames = function() {
                        var e, t, n = [];
                        if (0 === this._eventsCount) return n;
                        for (t in e = this._events) s.call(e, t) && n.push(a ? t.slice(1) : t);
                        return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n;
                    }, o.prototype.listeners = function(e) {
                        var t = a ? a + e : e, n = this._events[t];
                        if (!n) return [];
                        if (n.fn) return [ n.fn ];
                        for (var r = 0, i = n.length, o = new Array(i); r < i; r++) o[r] = n[r].fn;
                        return o;
                    }, o.prototype.listenerCount = function(e) {
                        var t = a ? a + e : e, n = this._events[t];
                        return n ? n.fn ? 1 : n.length : 0;
                    }, o.prototype.emit = function(e, t, n, r, i, o) {
                        var s = a ? a + e : e;
                        if (!this._events[s]) return !1;
                        var u, c, l = this._events[s], f = arguments.length;
                        if (l.fn) {
                            switch (l.once && this.removeListener(e, l.fn, void 0, !0), f) {
                              case 1:
                                return l.fn.call(l.context), !0;

                              case 2:
                                return l.fn.call(l.context, t), !0;

                              case 3:
                                return l.fn.call(l.context, t, n), !0;

                              case 4:
                                return l.fn.call(l.context, t, n, r), !0;

                              case 5:
                                return l.fn.call(l.context, t, n, r, i), !0;

                              case 6:
                                return l.fn.call(l.context, t, n, r, i, o), !0;
                            }
                            for (c = 1, u = new Array(f - 1); c < f; c++) u[c - 1] = arguments[c];
                            l.fn.apply(l.context, u);
                        } else {
                            var h, d = l.length;
                            for (c = 0; c < d; c++) switch (l[c].once && this.removeListener(e, l[c].fn, void 0, !0), 
                            f) {
                              case 1:
                                l[c].fn.call(l[c].context);
                                break;

                              case 2:
                                l[c].fn.call(l[c].context, t);
                                break;

                              case 3:
                                l[c].fn.call(l[c].context, t, n);
                                break;

                              case 4:
                                l[c].fn.call(l[c].context, t, n, r);
                                break;

                              default:
                                if (!u) for (h = 1, u = new Array(f - 1); h < f; h++) u[h - 1] = arguments[h];
                                l[c].fn.apply(l[c].context, u);
                            }
                        }
                        return !0;
                    }, o.prototype.on = function(e, t, n) {
                        return r(this, e, t, n, !1);
                    }, o.prototype.once = function(e, t, n) {
                        return r(this, e, t, n, !0);
                    }, o.prototype.removeListener = function(e, t, n, r) {
                        var o = a ? a + e : e;
                        if (!this._events[o]) return this;
                        if (!t) return i(this, o), this;
                        var s = this._events[o];
                        if (s.fn) s.fn !== t || r && !s.once || n && s.context !== n || i(this, o); else {
                            for (var u = 0, c = [], l = s.length; u < l; u++) (s[u].fn !== t || r && !s[u].once || n && s[u].context !== n) && c.push(s[u]);
                            c.length ? this._events[o] = 1 === c.length ? c[0] : c : i(this, o);
                        }
                        return this;
                    }, o.prototype.removeAllListeners = function(e) {
                        var n;
                        return e ? (n = a ? a + e : e, this._events[n] && i(this, n)) : (this._events = new t(), 
                        this._eventsCount = 0), this;
                    }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, 
                    o.prefixed = a, o.EventEmitter = o, e.exports = o;
                }), io = l(function(e) {
                    !function(t) {
                        function n(e, t, n, r) {
                            var i = t && t.prototype instanceof o ? t : o, s = Object.create(i.prototype), a = new p(r || []);
                            return s._invoke = l(e, n, a), s;
                        }
                        function i(e, t, n) {
                            try {
                                return {
                                    type: "normal",
                                    arg: e.call(t, n)
                                };
                            } catch (e) {
                                return {
                                    type: "throw",
                                    arg: e
                                };
                            }
                        }
                        function o() {}
                        function s() {}
                        function a() {}
                        function u(e) {
                            [ "next", "throw", "return" ].forEach(function(t) {
                                e[t] = function(e) {
                                    return this._invoke(t, e);
                                };
                            });
                        }
                        function c(e) {
                            function t(n, o, s, a) {
                                var u = i(e[n], e, o);
                                if ("throw" !== u.type) {
                                    var c = u.arg, l = c.value;
                                    return l && "object" == (void 0 === l ? "undefined" : r(l)) && _.call(l, "__await") ? Promise.resolve(l.__await).then(function(e) {
                                        t("next", e, s, a);
                                    }, function(e) {
                                        t("throw", e, s, a);
                                    }) : Promise.resolve(l).then(function(e) {
                                        c.value = e, s(c);
                                    }, a);
                                }
                                a(u.arg);
                            }
                            var n;
                            this._invoke = function(e, r) {
                                function i() {
                                    return new Promise(function(n, i) {
                                        t(e, r, n, i);
                                    });
                                }
                                return n = n ? n.then(i, i) : i();
                            };
                        }
                        function l(e, t, n) {
                            var r = O;
                            return function(o, s) {
                                if (r === C) throw new Error("Generator is already running");
                                if (r === I) {
                                    if ("throw" === o) throw s;
                                    return y();
                                }
                                for (n.method = o, n.arg = s; ;) {
                                    var a = n.delegate;
                                    if (a) {
                                        var u = f(a, n);
                                        if (u) {
                                            if (u === N) continue;
                                            return u;
                                        }
                                    }
                                    if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                                        if (r === O) throw r = I, n.arg;
                                        n.dispatchException(n.arg);
                                    } else "return" === n.method && n.abrupt("return", n.arg);
                                    r = C;
                                    var c = i(e, t, n);
                                    if ("normal" === c.type) {
                                        if (r = n.done ? I : A, c.arg === N) continue;
                                        return {
                                            value: c.arg,
                                            done: n.done
                                        };
                                    }
                                    "throw" === c.type && (r = I, n.method = "throw", n.arg = c.arg);
                                }
                            };
                        }
                        function f(e, t) {
                            var n = e.iterator[t.method];
                            if (n === m) {
                                if (t.delegate = null, "throw" === t.method) {
                                    if (e.iterator.return && (t.method = "return", t.arg = m, f(e, t), "throw" === t.method)) return N;
                                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
                                }
                                return N;
                            }
                            var r = i(n, e.iterator, t.arg);
                            if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, 
                            N;
                            var o = r.arg;
                            return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", 
                            t.arg = m), t.delegate = null, N) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), 
                            t.delegate = null, N);
                        }
                        function h(e) {
                            var t = {
                                tryLoc: e[0]
                            };
                            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
                            this.tryEntries.push(t);
                        }
                        function d(e) {
                            var t = e.completion || {};
                            t.type = "normal", delete t.arg, e.completion = t;
                        }
                        function p(e) {
                            this.tryEntries = [ {
                                tryLoc: "root"
                            } ], e.forEach(h, this), this.reset(!0);
                        }
                        function v(e) {
                            if (e) {
                                var t = e[w];
                                if (t) return t.call(e);
                                if ("function" == typeof e.next) return e;
                                if (!isNaN(e.length)) {
                                    var n = -1, r = function t() {
                                        for (;++n < e.length; ) if (_.call(e, n)) return t.value = e[n], t.done = !1, t;
                                        return t.value = m, t.done = !0, t;
                                    };
                                    return r.next = r;
                                }
                            }
                            return {
                                next: y
                            };
                        }
                        function y() {
                            return {
                                value: m,
                                done: !0
                            };
                        }
                        var m, g = Object.prototype, _ = g.hasOwnProperty, b = "function" == typeof Symbol ? Symbol : {}, w = b.iterator || "@@iterator", E = b.asyncIterator || "@@asyncIterator", S = b.toStringTag || "@@toStringTag", T = t.regeneratorRuntime;
                        if (T) e.exports = T; else {
                            (T = t.regeneratorRuntime = e.exports).wrap = n;
                            var O = "suspendedStart", A = "suspendedYield", C = "executing", I = "completed", N = {}, x = {};
                            x[w] = function() {
                                return this;
                            };
                            var P = Object.getPrototypeOf, j = P && P(P(v([])));
                            j && j !== g && _.call(j, w) && (x = j);
                            var R = a.prototype = o.prototype = Object.create(x);
                            s.prototype = R.constructor = a, a.constructor = s, a[S] = s.displayName = "GeneratorFunction", 
                            T.isGeneratorFunction = function(e) {
                                var t = "function" == typeof e && e.constructor;
                                return !!t && (t === s || "GeneratorFunction" === (t.displayName || t.name));
                            }, T.mark = function(e) {
                                return Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : (e.__proto__ = a, S in e || (e[S] = "GeneratorFunction")), 
                                e.prototype = Object.create(R), e;
                            }, T.awrap = function(e) {
                                return {
                                    __await: e
                                };
                            }, u(c.prototype), c.prototype[E] = function() {
                                return this;
                            }, T.AsyncIterator = c, T.async = function(e, t, r, i) {
                                var o = new c(n(e, t, r, i));
                                return T.isGeneratorFunction(t) ? o : o.next().then(function(e) {
                                    return e.done ? e.value : o.next();
                                });
                            }, u(R), R[S] = "Generator", R[w] = function() {
                                return this;
                            }, R.toString = function() {
                                return "[object Generator]";
                            }, T.keys = function(e) {
                                var t = [];
                                for (var n in e) t.push(n);
                                return t.reverse(), function n() {
                                    for (;t.length; ) {
                                        var r = t.pop();
                                        if (r in e) return n.value = r, n.done = !1, n;
                                    }
                                    return n.done = !0, n;
                                };
                            }, T.values = v, p.prototype = {
                                constructor: p,
                                reset: function(e) {
                                    if (this.prev = 0, this.next = 0, this.sent = this._sent = m, this.done = !1, this.delegate = null, 
                                    this.method = "next", this.arg = m, this.tryEntries.forEach(d), !e) for (var t in this) "t" === t.charAt(0) && _.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = m);
                                },
                                stop: function() {
                                    this.done = !0;
                                    var e = this.tryEntries[0].completion;
                                    if ("throw" === e.type) throw e.arg;
                                    return this.rval;
                                },
                                dispatchException: function(e) {
                                    function t(t, r) {
                                        return o.type = "throw", o.arg = e, n.next = t, r && (n.method = "next", n.arg = m), 
                                        !!r;
                                    }
                                    if (this.done) throw e;
                                    for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                                        var i = this.tryEntries[r], o = i.completion;
                                        if ("root" === i.tryLoc) return t("end");
                                        if (i.tryLoc <= this.prev) {
                                            var s = _.call(i, "catchLoc"), a = _.call(i, "finallyLoc");
                                            if (s && a) {
                                                if (this.prev < i.catchLoc) return t(i.catchLoc, !0);
                                                if (this.prev < i.finallyLoc) return t(i.finallyLoc);
                                            } else if (s) {
                                                if (this.prev < i.catchLoc) return t(i.catchLoc, !0);
                                            } else {
                                                if (!a) throw new Error("try statement without catch or finally");
                                                if (this.prev < i.finallyLoc) return t(i.finallyLoc);
                                            }
                                        }
                                    }
                                },
                                abrupt: function(e, t) {
                                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                        var r = this.tryEntries[n];
                                        if (r.tryLoc <= this.prev && _.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                            var i = r;
                                            break;
                                        }
                                    }
                                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                                    var o = i ? i.completion : {};
                                    return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, 
                                    N) : this.complete(o);
                                },
                                complete: function(e, t) {
                                    if ("throw" === e.type) throw e.arg;
                                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                                    this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
                                    N;
                                },
                                finish: function(e) {
                                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                        var n = this.tryEntries[t];
                                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), d(n), N;
                                    }
                                },
                                catch: function(e) {
                                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                        var n = this.tryEntries[t];
                                        if (n.tryLoc === e) {
                                            var r = n.completion;
                                            if ("throw" === r.type) {
                                                var i = r.arg;
                                                d(n);
                                            }
                                            return i;
                                        }
                                    }
                                    throw new Error("illegal catch attempt");
                                },
                                delegateYield: function(e, t, n) {
                                    return this.delegate = {
                                        iterator: v(e),
                                        resultName: t,
                                        nextLoc: n
                                    }, "next" === this.method && (this.arg = m), N;
                                }
                            };
                        }
                    }(function() {
                        return this;
                    }() || Function("return this")());
                }), oo = function() {
                    return this;
                }() || Function("return this")(), so = oo.regeneratorRuntime && Object.getOwnPropertyNames(oo).indexOf("regeneratorRuntime") >= 0, ao = so && oo.regeneratorRuntime;
                oo.regeneratorRuntime = void 0;
                var uo = io;
                if (so) oo.regeneratorRuntime = ao; else try {
                    delete oo.regeneratorRuntime;
                } catch (e) {
                    oo.regeneratorRuntime = void 0;
                }
                var co = uo, lo = Object.assign, fo = !lo || Q(function() {
                    var e = {}, t = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
                    return e[n] = 7, r.split("").forEach(function(e) {
                        t[e] = e;
                    }), 7 != lo({}, e)[n] || Object.keys(lo({}, t)).join("") != r;
                }) ? function(e, t) {
                    for (var n = Ge(e), r = arguments.length, i = 1, o = xn.f, s = Pn.f; r > i; ) for (var a, u = ve(arguments[i++]), c = o ? je(u).concat(o(u)) : je(u), l = c.length, f = 0; l > f; ) s.call(u, a = c[f++]) && (n[a] = u[a]);
                    return n;
                } : lo;
                le(le.S + le.F, "Object", {
                    assign: fo
                });
                var ho = z.Object.assign, po = l(function(e) {
                    e.exports = {
                        default: ho,
                        __esModule: !0
                    };
                }), vo = c(po), yo = c(l(function(e, t) {
                    t.__esModule = !0;
                    var n = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }(po);
                    t.default = n.default || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    };
                })), mo = c(l(function(e, t) {
                    t.__esModule = !0;
                    var n = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }(En);
                    t.default = function(e) {
                        return function() {
                            var t = e.apply(this, arguments);
                            return new n.default(function(e, r) {
                                function i(o, s) {
                                    try {
                                        var a = t[o](s), u = a.value;
                                    } catch (e) {
                                        return void r(e);
                                    }
                                    if (!a.done) return n.default.resolve(u).then(function(e) {
                                        i("next", e);
                                    }, function(e) {
                                        i("throw", e);
                                    });
                                    e(u);
                                }
                                return i("next");
                            });
                        };
                    };
                })), go = function(e, t, n) {
                    t in e ? ie.f(e, t, oe(0, n)) : e[t] = n;
                };
                le(le.S + le.F * !tn(function(e) {}), "Array", {
                    from: function(e) {
                        var t, n, r, i, o = Ge(e), s = "function" == typeof this ? this : Array, a = arguments.length, u = a > 1 ? arguments[1] : void 0, c = void 0 !== u, l = 0, f = wt(o);
                        if (c && (u = J(u, a > 2 ? arguments[2] : void 0, 2)), void 0 == f || s == Array && _t(f)) for (t = ge(o.length), 
                        n = new s(t); t > l; l++) go(n, l, c ? u(o[l], l) : o[l]); else for (i = f.call(o), 
                        n = new s(); !(r = i.next()).done; l++) go(n, l, c ? yt(i, u, [ r.value, l ], !0) : r.value);
                        return n.length = l, n;
                    }
                });
                var _o = z.Array.from, bo = l(function(e) {
                    e.exports = {
                        default: _o,
                        __esModule: !0
                    };
                });
                c(bo);
                var wo = l(function(e, t) {
                    t.__esModule = !0;
                    var n = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }(bo);
                    t.default = function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                            return r;
                        }
                        return (0, n.default)(e);
                    };
                }), Eo = c(wo), So = function(e, t) {
                    if (!H(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
                    return e;
                }, To = ie.f, Oo = Cn.fastKey, Ao = $ ? "_s" : "size", Co = function(e, t) {
                    var n, r = Oo(t);
                    if ("F" !== r) return e._i[r];
                    for (n = e._f; n; n = n.n) if (n.k == t) return n;
                }, Io = {
                    getConstructor: function(e, t, n, r) {
                        var i = e(function(e, o) {
                            vt(e, i, t, "_i"), e._t = t, e._i = Me(null), e._f = void 0, e._l = void 0, e[Ao] = 0, 
                            void 0 != o && Et(o, n, e[r], e);
                        });
                        return Gt(i.prototype, {
                            clear: function() {
                                for (var e = So(this, t), n = e._i, r = e._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), 
                                delete n[r.i];
                                e._f = e._l = void 0, e[Ao] = 0;
                            },
                            delete: function(e) {
                                var n = So(this, t), r = Co(n, e);
                                if (r) {
                                    var i = r.n, o = r.p;
                                    delete n._i[r.i], r.r = !0, o && (o.n = i), i && (i.p = o), n._f == r && (n._f = i), 
                                    n._l == r && (n._l = o), n[Ao]--;
                                }
                                return !!r;
                            },
                            forEach: function(e) {
                                So(this, t);
                                for (var n, r = J(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f; ) for (r(n.v, n.k, this); n && n.r; ) n = n.p;
                            },
                            has: function(e) {
                                return !!Co(So(this, t), e);
                            }
                        }), $ && To(i.prototype, "size", {
                            get: function() {
                                return So(this, t)[Ao];
                            }
                        }), i;
                    },
                    def: function(e, t, n) {
                        var r, i, o = Co(e, t);
                        return o ? o.v = n : (e._l = o = {
                            i: i = Oo(t, !0),
                            k: t,
                            v: n,
                            p: r = e._l,
                            n: void 0,
                            r: !1
                        }, e._f || (e._f = o), r && (r.n = o), e[Ao]++, "F" !== i && (e._i[i] = o)), e;
                    },
                    getEntry: Co,
                    setStrong: function(e, t, n) {
                        Ze(e, t, function(e, n) {
                            this._t = So(e, t), this._k = n, this._l = void 0;
                        }, function() {
                            for (var e = this, t = e._k, n = e._l; n && n.r; ) n = n.p;
                            return e._t && (e._l = n = n ? n.n : e._t._f) ? "keys" == t ? tt(0, n.k) : "values" == t ? tt(0, n.v) : tt(0, [ n.k, n.v ]) : (e._t = void 0, 
                            tt(1));
                        }, n ? "entries" : "values", !n, !0), Ht(t);
                    }
                }, No = Be("species"), xo = function(e) {
                    var t;
                    return Rn(e) && ("function" != typeof (t = e.constructor) || t !== Array && !Rn(t.prototype) || (t = void 0), 
                    H(t) && null === (t = t[No]) && (t = void 0)), void 0 === t ? Array : t;
                }, Po = function(e, t) {
                    return new (xo(e))(t);
                }, jo = function(e, t) {
                    var n = 1 == e, r = 2 == e, i = 3 == e, o = 4 == e, s = 6 == e, a = 5 == e || s, u = t || Po;
                    return function(t, c, l) {
                        for (var f, h, d = Ge(t), p = ve(d), v = J(c, l, 3), y = ge(p.length), m = 0, g = n ? u(t, y) : r ? u(t, 0) : void 0; y > m; m++) if ((a || m in p) && (f = p[m], 
                        h = v(f, m, d), e)) if (n) g[m] = h; else if (h) switch (e) {
                          case 3:
                            return !0;

                          case 5:
                            return f;

                          case 6:
                            return m;

                          case 2:
                            g.push(f);
                        } else if (o) return !1;
                        return s ? -1 : i || o ? o : g;
                    };
                }, Ro = ie.f, ko = jo(0), Lo = function(e, t, n, r, i, o) {
                    var s = W[e], a = s, u = i ? "set" : "add", c = a && a.prototype, l = {};
                    return $ && "function" == typeof a && (o || c.forEach && !Q(function() {
                        new a().entries().next();
                    })) ? (a = t(function(t, n) {
                        vt(t, a, e, "_c"), t._c = new s(), void 0 != n && Et(n, i, t[u], t);
                    }), ko("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(e) {
                        var t = "add" == e || "set" == e;
                        e in c && (!o || "clear" != e) && se(a.prototype, e, function(n, r) {
                            if (vt(this, a, e), !t && o && !H(n)) return "get" == e && void 0;
                            var i = this._c[e](0 === n ? 0 : n, r);
                            return t ? this : i;
                        });
                    }), o || Ro(a.prototype, "size", {
                        get: function() {
                            return this._c.size;
                        }
                    })) : (a = r.getConstructor(t, e, i, u), Gt(a.prototype, n), Cn.NEED = !0), Ye(a, e), 
                    l[e] = a, le(le.G + le.W + le.F, l), o || r.setStrong(a, e, i), a;
                }, Uo = (Lo("Set", function(e) {
                    return function() {
                        return e(this, arguments.length > 0 ? arguments[0] : void 0);
                    };
                }, {
                    add: function(e) {
                        return Io.def(So(this, "Set"), e = 0 === e ? 0 : e, e);
                    }
                }, Io), function(e, t) {
                    var n = [];
                    return Et(e, !1, n.push, n, t), n;
                });
                le(le.P + le.R, "Set", {
                    toJSON: function() {
                        if ("Set" != pt(this)) throw TypeError("Set#toJSON isn't generic");
                        return Uo(this);
                    }
                });
                var Fo = function(e) {
                    le(le.S, e, {
                        of: function() {
                            for (var e = arguments.length, t = new Array(e); e--; ) t[e] = arguments[e];
                            return new this(t);
                        }
                    });
                };
                Fo("Set");
                var Do = function(e) {
                    le(le.S, e, {
                        from: function(e) {
                            var t, n, r, i, o = arguments[1];
                            return G(this), (t = void 0 !== o) && G(o), void 0 == e ? new this() : (n = [], 
                            t ? (r = 0, i = J(o, arguments[2], 2), Et(e, !1, function(e) {
                                n.push(i(e, r++));
                            })) : Et(e, !1, n.push, n), new this(n));
                        }
                    });
                };
                Do("Set");
                var Mo = z.Set, Bo = c(l(function(e) {
                    e.exports = {
                        default: Mo,
                        __esModule: !0
                    };
                })), qo = c(l(function(e, t) {
                    t.__esModule = !0, t.default = function(e, t) {
                        var n = {};
                        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n;
                    };
                })), Vo = 1e3, Yo = 60 * Vo, Wo = 60 * Yo, zo = 24 * Wo, Go = 365.25 * zo, Jo = function(e, t) {
                    t = t || {};
                    var n = void 0 === e ? "undefined" : r(e);
                    if ("string" === n && e.length > 0) return m(e);
                    if ("number" === n && !1 === isNaN(e)) return t.long ? _(e) : g(e);
                    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
                }, Ho = l(function(e, t) {
                    function n(e) {
                        var n, r = 0;
                        for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
                        return t.colors[Math.abs(r) % t.colors.length];
                    }
                    function r(e) {
                        function r() {
                            if (r.enabled) {
                                var e = r, n = +new Date(), i = n - (o || n);
                                e.diff = i, e.prev = o, e.curr = n, o = n;
                                for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                                s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                                var u = 0;
                                s[0] = s[0].replace(/%([a-zA-Z%])/g, function(n, r) {
                                    if ("%%" === n) return n;
                                    u++;
                                    var i = t.formatters[r];
                                    if ("function" == typeof i) {
                                        var o = s[u];
                                        n = i.call(e, o), s.splice(u, 1), u--;
                                    }
                                    return n;
                                }), t.formatArgs.call(e, s), (r.log || t.log || console.log.bind(console)).apply(e, s);
                            }
                        }
                        var o;
                        return r.namespace = e, r.enabled = t.enabled(e), r.useColors = t.useColors(), r.color = n(e), 
                        r.destroy = i, "function" == typeof t.init && t.init(r), t.instances.push(r), r;
                    }
                    function i() {
                        var e = t.instances.indexOf(this);
                        return -1 !== e && (t.instances.splice(e, 1), !0);
                    }
                    (t = e.exports = r.debug = r.default = r).coerce = function(e) {
                        return e instanceof Error ? e.stack || e.message : e;
                    }, t.disable = function() {
                        t.enable("");
                    }, t.enable = function(e) {
                        t.save(e), t.names = [], t.skips = [];
                        var n, r = ("string" == typeof e ? e : "").split(/[\s,]+/), i = r.length;
                        for (n = 0; n < i; n++) r[n] && ("-" === (e = r[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
                        for (n = 0; n < t.instances.length; n++) {
                            var o = t.instances[n];
                            o.enabled = t.enabled(o.namespace);
                        }
                    }, t.enabled = function(e) {
                        if ("*" === e[e.length - 1]) return !0;
                        var n, r;
                        for (n = 0, r = t.skips.length; n < r; n++) if (t.skips[n].test(e)) return !1;
                        for (n = 0, r = t.names.length; n < r; n++) if (t.names[n].test(e)) return !0;
                        return !1;
                    }, t.humanize = Jo, t.instances = [], t.names = [], t.skips = [], t.formatters = {};
                }), Ko = (Ho.coerce, Ho.disable, Ho.enable, Ho.enabled, Ho.humanize, Ho.instances, 
                Ho.names, Ho.skips, Ho.formatters, l(function(e, n) {
                    function i() {
                        var e;
                        try {
                            e = n.storage.debug;
                        } catch (e) {}
                        return !e && void 0 !== D && "env" in D && (e = D.env.DEBUG), e;
                    }
                    (n = e.exports = Ho).log = function() {
                        return "object" == ("undefined" == typeof console ? "undefined" : r(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
                    }, n.formatArgs = function(e) {
                        var t = this.useColors;
                        if (e[0] = (t ? "%c" : "") + this.namespace + (t ? " %c" : " ") + e[0] + (t ? "%c " : " ") + "+" + n.humanize(this.diff), 
                        t) {
                            var r = "color: " + this.color;
                            e.splice(1, 0, r, "color: inherit");
                            var i = 0, o = 0;
                            e[0].replace(/%[a-zA-Z%]/g, function(e) {
                                "%%" !== e && (i++, "%c" === e && (o = i));
                            }), e.splice(o, 0, r);
                        }
                    }, n.save = function(e) {
                        try {
                            null == e ? n.storage.removeItem("debug") : n.storage.debug = e;
                        } catch (e) {}
                    }, n.load = i, n.useColors = function() {
                        return !(void 0 === o || !o.process || "renderer" !== o.process.type) || (void 0 === t || !t.userAgent || !t.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || void 0 !== o && o.console && (o.console.firebug || o.console.exception && o.console.table) || void 0 !== t && t.userAgent && t.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || void 0 !== t && t.userAgent && t.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
                    }, n.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                        try {
                            return o.localStorage;
                        } catch (e) {}
                    }(), n.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ], 
                    n.formatters.j = function(e) {
                        try {
                            return JSON.stringify(e);
                        } catch (e) {
                            return "[UnexpectedJSONParseError]: " + e.message;
                        }
                    }, n.enable(i());
                })), Qo = (Ko.log, Ko.formatArgs, Ko.save, Ko.load, Ko.useColors, Ko.storage, Ko.colors, 
                function(e, t) {
                    return function() {
                        for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                        return e.apply(t, n);
                    };
                }), $o = Object.prototype.toString, Xo = {
                    isArray: S,
                    isArrayBuffer: function(e) {
                        return "[object ArrayBuffer]" === $o.call(e);
                    },
                    isBuffer: function(e) {
                        return null != e && (w(e) || E(e) || !!e._isBuffer);
                    },
                    isFormData: function(e) {
                        return "undefined" != typeof FormData && e instanceof FormData;
                    },
                    isArrayBufferView: function(e) {
                        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
                    },
                    isString: function(e) {
                        return "string" == typeof e;
                    },
                    isNumber: function(e) {
                        return "number" == typeof e;
                    },
                    isObject: T,
                    isUndefined: function(e) {
                        return void 0 === e;
                    },
                    isDate: function(e) {
                        return "[object Date]" === $o.call(e);
                    },
                    isFile: function(e) {
                        return "[object File]" === $o.call(e);
                    },
                    isBlob: function(e) {
                        return "[object Blob]" === $o.call(e);
                    },
                    isFunction: O,
                    isStream: function(e) {
                        return T(e) && O(e.pipe);
                    },
                    isURLSearchParams: function(e) {
                        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
                    },
                    isStandardBrowserEnv: function() {
                        return (void 0 === t || "ReactNative" !== t.product) && void 0 !== o && "undefined" != typeof document;
                    },
                    forEach: A,
                    merge: C,
                    extend: function(e, t, n) {
                        return A(t, function(t, r) {
                            e[r] = n && "function" == typeof t ? Qo(t, n) : t;
                        }), e;
                    },
                    trim: function(e) {
                        return e.replace(/^\s*/, "").replace(/\s*$/, "");
                    }
                }, Zo = function(e, t) {
                    Xo.forEach(e, function(n, r) {
                        r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]);
                    });
                }, es = function(e, t, n, r, i) {
                    return e.config = t, n && (e.code = n), e.request = r, e.response = i, e;
                }, ts = function(e, t, n, r, i) {
                    var o = new Error(e);
                    return es(o, t, n, r, i);
                }, ns = function(e, t, n) {
                    var r = n.config.validateStatus;
                    n.status && r && !r(n.status) ? t(ts("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n);
                }, rs = function(e, t, n) {
                    if (!t) return e;
                    var r;
                    if (n) r = n(t); else if (Xo.isURLSearchParams(t)) r = t.toString(); else {
                        var i = [];
                        Xo.forEach(t, function(e, t) {
                            null !== e && void 0 !== e && (Xo.isArray(e) ? t += "[]" : e = [ e ], Xo.forEach(e, function(e) {
                                Xo.isDate(e) ? e = e.toISOString() : Xo.isObject(e) && (e = Br(e)), i.push(I(t) + "=" + I(e));
                            }));
                        }), r = i.join("&");
                    }
                    return r && (e += (-1 === e.indexOf("?") ? "?" : "&") + r), e;
                }, is = [ "age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent" ], os = function(e) {
                    var t, n, r, i = {};
                    return e ? (Xo.forEach(e.split("\n"), function(e) {
                        if (r = e.indexOf(":"), t = Xo.trim(e.substr(0, r)).toLowerCase(), n = Xo.trim(e.substr(r + 1)), 
                        t) {
                            if (i[t] && is.indexOf(t) >= 0) return;
                            i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([ n ]) : i[t] ? i[t] + ", " + n : n;
                        }
                    }), i) : i;
                }, ss = Xo.isStandardBrowserEnv() ? function() {
                    function e(e) {
                        var t = e;
                        return r && (i.setAttribute("href", t), t = i.href), i.setAttribute("href", t), 
                        {
                            href: i.href,
                            protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                            host: i.host,
                            search: i.search ? i.search.replace(/^\?/, "") : "",
                            hash: i.hash ? i.hash.replace(/^#/, "") : "",
                            hostname: i.hostname,
                            port: i.port,
                            pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
                        };
                    }
                    var n, r = /(msie|trident)/i.test(t.userAgent), i = document.createElement("a");
                    return n = e(o.location.href), function(t) {
                        var r = Xo.isString(t) ? e(t) : t;
                        return r.protocol === n.protocol && r.host === n.host;
                    };
                }() : function() {
                    return !0;
                }, as = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                N.prototype = new Error(), N.prototype.code = 5, N.prototype.name = "InvalidCharacterError";
                var us = Xo.isStandardBrowserEnv() ? {
                    write: function(e, t, n, r, i, o) {
                        var s = [];
                        s.push(e + "=" + encodeURIComponent(t)), Xo.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), 
                        Xo.isString(r) && s.push("path=" + r), Xo.isString(i) && s.push("domain=" + i), 
                        !0 === o && s.push("secure"), document.cookie = s.join("; ");
                    },
                    read: function(e) {
                        var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                        return t ? decodeURIComponent(t[3]) : null;
                    },
                    remove: function(e) {
                        this.write(e, "", Date.now() - 864e5);
                    }
                } : {
                    write: function() {},
                    read: function() {
                        return null;
                    },
                    remove: function() {}
                }, cs = void 0 !== o && o.btoa && o.btoa.bind(o) || function(e) {
                    for (var t, n, r = String(e), i = "", o = 0, s = as; r.charAt(0 | o) || (s = "=", 
                    o % 1); i += s.charAt(63 & t >> 8 - o % 1 * 8)) {
                        if ((n = r.charCodeAt(o += .75)) > 255) throw new N();
                        t = t << 8 | n;
                    }
                    return i;
                }, ls = function(t) {
                    return new Sn(function(n, r) {
                        var i = t.data, s = t.headers;
                        Xo.isFormData(i) && delete s["Content-Type"];
                        var a = new e(), u = "onreadystatechange", c = !1;
                        if ("test" === D.env.NODE_ENV || void 0 === o || !o.XDomainRequest || "withCredentials" in a || ss(t.url) || (a = new o.XDomainRequest(), 
                        u = "onload", c = !0, a.onprogress = function() {}, a.ontimeout = function() {}), 
                        t.auth) {
                            var l = t.auth.username || "", f = t.auth.password || "";
                            s.Authorization = "Basic " + cs(l + ":" + f);
                        }
                        if (a.open(t.method.toUpperCase(), rs(t.url, t.params, t.paramsSerializer), !0), 
                        a.timeout = t.timeout, a[u] = function() {
                            if (a && (4 === a.readyState || c) && (0 !== a.status || a.responseURL && 0 === a.responseURL.indexOf("file:"))) {
                                var e = "getAllResponseHeaders" in a ? os(a.getAllResponseHeaders()) : null, i = {
                                    data: t.responseType && "text" !== t.responseType ? a.response : a.responseText,
                                    status: 1223 === a.status ? 204 : a.status,
                                    statusText: 1223 === a.status ? "No Content" : a.statusText,
                                    headers: e,
                                    config: t,
                                    request: a
                                };
                                ns(n, r, i), a = null;
                            }
                        }, a.onerror = function() {
                            r(ts("Network Error", t, null, a)), a = null;
                        }, a.ontimeout = function() {
                            r(ts("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED", a)), a = null;
                        }, Xo.isStandardBrowserEnv()) {
                            var h = us, d = (t.withCredentials || ss(t.url)) && t.xsrfCookieName ? h.read(t.xsrfCookieName) : void 0;
                            d && (s[t.xsrfHeaderName] = d);
                        }
                        if ("setRequestHeader" in a && Xo.forEach(s, function(e, t) {
                            void 0 === i && "content-type" === t.toLowerCase() ? delete s[t] : a.setRequestHeader(t, e);
                        }), t.withCredentials && (a.withCredentials = !0), t.responseType) try {
                            a.responseType = t.responseType;
                        } catch (n) {
                            if ("json" !== t.responseType) throw n;
                        }
                        "function" == typeof t.onDownloadProgress && a.addEventListener("progress", t.onDownloadProgress), 
                        "function" == typeof t.onUploadProgress && a.upload && a.upload.addEventListener("progress", t.onUploadProgress), 
                        t.cancelToken && t.cancelToken.promise.then(function(e) {
                            a && (a.abort(), r(e), a = null);
                        }), void 0 === i && (i = null), a.send(i);
                    });
                }, fs = {
                    "Content-Type": "application/x-www-form-urlencoded"
                }, hs = {
                    adapter: function() {
                        var t;
                        return void 0 !== e ? t = ls : void 0 !== D && (t = ls), t;
                    }(),
                    transformRequest: [ function(e, t) {
                        return Zo(t, "Content-Type"), Xo.isFormData(e) || Xo.isArrayBuffer(e) || Xo.isBuffer(e) || Xo.isStream(e) || Xo.isFile(e) || Xo.isBlob(e) ? e : Xo.isArrayBufferView(e) ? e.buffer : Xo.isURLSearchParams(e) ? (x(t, "application/x-www-form-urlencoded;charset=utf-8"), 
                        e.toString()) : Xo.isObject(e) ? (x(t, "application/json;charset=utf-8"), Br(e)) : e;
                    } ],
                    transformResponse: [ function(e) {
                        if ("string" == typeof e) try {
                            e = JSON.parse(e);
                        } catch (e) {}
                        return e;
                    } ],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    validateStatus: function(e) {
                        return e >= 200 && e < 300;
                    }
                };
                hs.headers = {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }, Xo.forEach([ "delete", "get", "head" ], function(e) {
                    hs.headers[e] = {};
                }), Xo.forEach([ "post", "put", "patch" ], function(e) {
                    hs.headers[e] = Xo.merge(fs);
                });
                var ds = hs;
                P.prototype.use = function(e, t) {
                    return this.handlers.push({
                        fulfilled: e,
                        rejected: t
                    }), this.handlers.length - 1;
                }, P.prototype.eject = function(e) {
                    this.handlers[e] && (this.handlers[e] = null);
                }, P.prototype.forEach = function(e) {
                    Xo.forEach(this.handlers, function(t) {
                        null !== t && e(t);
                    });
                };
                var ps = P, vs = function(e, t, n) {
                    return Xo.forEach(n, function(n) {
                        e = n(e, t);
                    }), e;
                }, ys = function(e) {
                    return !(!e || !e.__CANCEL__);
                }, ms = function(e) {
                    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
                }, gs = function(e, t) {
                    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
                }, _s = function(e) {
                    return j(e), e.baseURL && !ms(e.url) && (e.url = gs(e.baseURL, e.url)), e.headers = e.headers || {}, 
                    e.data = vs(e.data, e.headers, e.transformRequest), e.headers = Xo.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), 
                    Xo.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], function(t) {
                        delete e.headers[t];
                    }), (e.adapter || ds.adapter)(e).then(function(t) {
                        return j(e), t.data = vs(t.data, t.headers, e.transformResponse), t;
                    }, function(t) {
                        return ys(t) || (j(e), t && t.response && (t.response.data = vs(t.response.data, t.response.headers, e.transformResponse))), 
                        Sn.reject(t);
                    });
                };
                R.prototype.request = function(e) {
                    "string" == typeof e && (e = Xo.merge({
                        url: arguments[0]
                    }, arguments[1])), (e = Xo.merge(ds, {
                        method: "get"
                    }, this.defaults, e)).method = e.method.toLowerCase();
                    var t = [ _s, void 0 ], n = Sn.resolve(e);
                    for (this.interceptors.request.forEach(function(e) {
                        t.unshift(e.fulfilled, e.rejected);
                    }), this.interceptors.response.forEach(function(e) {
                        t.push(e.fulfilled, e.rejected);
                    }); t.length; ) n = n.then(t.shift(), t.shift());
                    return n;
                }, Xo.forEach([ "delete", "get", "head", "options" ], function(e) {
                    R.prototype[e] = function(t, n) {
                        return this.request(Xo.merge(n || {}, {
                            method: e,
                            url: t
                        }));
                    };
                }), Xo.forEach([ "post", "put", "patch" ], function(e) {
                    R.prototype[e] = function(t, n, r) {
                        return this.request(Xo.merge(r || {}, {
                            method: e,
                            url: t,
                            data: n
                        }));
                    };
                });
                var bs = R;
                k.prototype.toString = function() {
                    return "Cancel" + (this.message ? ": " + this.message : "");
                }, k.prototype.__CANCEL__ = !0;
                var ws = k;
                L.prototype.throwIfRequested = function() {
                    if (this.reason) throw this.reason;
                }, L.source = function() {
                    var e;
                    return {
                        token: new L(function(t) {
                            e = t;
                        }),
                        cancel: e
                    };
                };
                var Es = L, Ss = U(ds);
                Ss.Axios = bs, Ss.create = function(e) {
                    return U(Xo.merge(ds, e));
                }, Ss.Cancel = ws, Ss.CancelToken = Es, Ss.isCancel = ys, Ss.all = function(e) {
                    return Sn.all(e);
                }, Ss.spread = function(e) {
                    return function(t) {
                        return e.apply(null, t);
                    };
                };
                var Ts = Ss, Os = Ss;
                Ts.default = Os;
                var As = Ts, Cs = function(e, t) {
                    var n = -1, r = e.length;
                    for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
                    return t;
                }, Is = Math.floor, Ns = Math.random, xs = function(e, t) {
                    return e + Is(Ns() * (t - e + 1));
                }, Ps = function(e, t) {
                    var n = -1, r = e.length, i = r - 1;
                    for (t = void 0 === t ? r : t; ++n < t; ) {
                        var o = xs(n, i), s = e[o];
                        e[o] = e[n], e[n] = s;
                    }
                    return e.length = t, e;
                }, js = function(e) {
                    return Ps(Cs(e));
                }, Rs = function(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r; ) i[n] = t(e[n], n, e);
                    return i;
                }, ks = function(e, t) {
                    return Rs(t, function(t) {
                        return e[t];
                    });
                }, Ls = function(e, t) {
                    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
                    return r;
                }, Us = "object" == (void 0 === M ? "undefined" : r(M)) && M && M.Object === Object && M, Fs = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self, Ds = Us || Fs || Function("return this")(), Ms = Ds.Symbol, Bs = Object.prototype, qs = Bs.hasOwnProperty, Vs = Bs.toString, Ys = Ms ? Ms.toStringTag : void 0, Ws = function(e) {
                    var t = qs.call(e, Ys), n = e[Ys];
                    try {
                        e[Ys] = void 0;
                        var r = !0;
                    } catch (e) {}
                    var i = Vs.call(e);
                    return r && (t ? e[Ys] = n : delete e[Ys]), i;
                }, zs = Object.prototype.toString, Gs = function(e) {
                    return zs.call(e);
                }, Js = "[object Null]", Hs = "[object Undefined]", Ks = Ms ? Ms.toStringTag : void 0, Qs = function(e) {
                    return null == e ? void 0 === e ? Hs : Js : Ks && Ks in Object(e) ? Ws(e) : Gs(e);
                }, $s = function(e) {
                    return null != e && "object" == (void 0 === e ? "undefined" : r(e));
                }, Xs = "[object Arguments]", Zs = function(e) {
                    return $s(e) && Qs(e) == Xs;
                }, ea = Object.prototype, ta = ea.hasOwnProperty, na = ea.propertyIsEnumerable, ra = Zs(function() {
                    return arguments;
                }()) ? Zs : function(e) {
                    return $s(e) && ta.call(e, "callee") && !na.call(e, "callee");
                }, ia = Array.isArray, oa = function() {
                    return !1;
                }, sa = l(function(e, t) {
                    var n = t && !t.nodeType && t, r = n && !0 && e && !e.nodeType && e, i = r && r.exports === n ? Ds.Buffer : void 0, o = (i ? i.isBuffer : void 0) || oa;
                    e.exports = o;
                }), aa = 9007199254740991, ua = /^(?:0|[1-9]\d*)$/, ca = function(e, t) {
                    var n = void 0 === e ? "undefined" : r(e);
                    return !!(t = null == t ? aa : t) && ("number" == n || "symbol" != n && ua.test(e)) && e > -1 && e % 1 == 0 && e < t;
                }, la = 9007199254740991, fa = function(e) {
                    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= la;
                }, ha = {};
                ha["[object Float32Array]"] = ha["[object Float64Array]"] = ha["[object Int8Array]"] = ha["[object Int16Array]"] = ha["[object Int32Array]"] = ha["[object Uint8Array]"] = ha["[object Uint8ClampedArray]"] = ha["[object Uint16Array]"] = ha["[object Uint32Array]"] = !0, 
                ha["[object Arguments]"] = ha["[object Array]"] = ha["[object ArrayBuffer]"] = ha["[object Boolean]"] = ha["[object DataView]"] = ha["[object Date]"] = ha["[object Error]"] = ha["[object Function]"] = ha["[object Map]"] = ha["[object Number]"] = ha["[object Object]"] = ha["[object RegExp]"] = ha["[object Set]"] = ha["[object String]"] = ha["[object WeakMap]"] = !1;
                var da = function(e) {
                    return function(t) {
                        return e(t);
                    };
                }, pa = l(function(e, t) {
                    var n = t && !t.nodeType && t, r = n && !0 && e && !e.nodeType && e, i = r && r.exports === n && Us.process, o = function() {
                        try {
                            return r && r.require && r.require("util").types || i && i.binding && i.binding("util");
                        } catch (e) {}
                    }();
                    e.exports = o;
                }), va = pa && pa.isTypedArray, ya = va ? da(va) : function(e) {
                    return $s(e) && fa(e.length) && !!ha[Qs(e)];
                }, ma = Object.prototype.hasOwnProperty, ga = function(e, t) {
                    var n = ia(e), r = !n && ra(e), i = !n && !r && sa(e), o = !n && !r && !i && ya(e), s = n || r || i || o, a = s ? Ls(e.length, String) : [], u = a.length;
                    for (var c in e) !t && !ma.call(e, c) || s && ("length" == c || i && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || ca(c, u)) || a.push(c);
                    return a;
                }, _a = Object.prototype, ba = function(e) {
                    var t = e && e.constructor;
                    return e === ("function" == typeof t && t.prototype || _a);
                }, wa = function(e, t) {
                    return function(n) {
                        return e(t(n));
                    };
                }, Ea = wa(Object.keys, Object), Sa = Object.prototype.hasOwnProperty, Ta = function(e) {
                    if (!ba(e)) return Ea(e);
                    var t = [];
                    for (var n in Object(e)) Sa.call(e, n) && "constructor" != n && t.push(n);
                    return t;
                }, Oa = function(e) {
                    var t = void 0 === e ? "undefined" : r(e);
                    return null != e && ("object" == t || "function" == t);
                }, Aa = "[object AsyncFunction]", Ca = "[object Function]", Ia = "[object GeneratorFunction]", Na = "[object Proxy]", xa = function(e) {
                    if (!Oa(e)) return !1;
                    var t = Qs(e);
                    return t == Ca || t == Ia || t == Aa || t == Na;
                }, Pa = function(e) {
                    return null != e && fa(e.length) && !xa(e);
                }, ja = function(e) {
                    return Pa(e) ? ga(e) : Ta(e);
                }, Ra = function(e) {
                    return null == e ? [] : ks(e, ja(e));
                }, ka = function(e) {
                    return Ps(Ra(e));
                }, La = function(e) {
                    return (ia(e) ? js : ka)(e);
                }, Ua = Vn.f;
                qr("getOwnPropertyDescriptor", function() {
                    return function(e, t) {
                        return Ua(ye(e), t);
                    };
                });
                var Fa = z.Object, Da = function(e, t) {
                    return Fa.getOwnPropertyDescriptor(e, t);
                }, Ma = c(l(function(e) {
                    e.exports = {
                        default: Da,
                        __esModule: !0
                    };
                })), Ba = c(l(function(e, t) {
                    t.__esModule = !0;
                    var n = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }(bo);
                    t.default = function(e) {
                        return Array.isArray(e) ? e : (0, n.default)(e);
                    };
                })), qa = l(function(e, t) {
                    !function() {
                        var n = {
                            VERSION: "2.4.0",
                            Result: {
                                SUCCEEDED: 1,
                                NOTRANSITION: 2,
                                CANCELLED: 3,
                                PENDING: 4
                            },
                            Error: {
                                INVALID_TRANSITION: 100,
                                PENDING_TRANSITION: 200,
                                INVALID_CALLBACK: 300
                            },
                            WILDCARD: "*",
                            ASYNC: "async",
                            create: function(e, t) {
                                var r = "string" == typeof e.initial ? {
                                    state: e.initial
                                } : e.initial, i = e.terminal || e.final, o = t || e.target || {}, s = e.events || [], a = e.callbacks || {}, u = {}, c = {}, l = function(e) {
                                    var t = Array.isArray(e.from) ? e.from : e.from ? [ e.from ] : [ n.WILDCARD ];
                                    u[e.name] = u[e.name] || {};
                                    for (var r = 0; r < t.length; r++) c[t[r]] = c[t[r]] || [], c[t[r]].push(e.name), 
                                    u[e.name][t[r]] = e.to || t[r];
                                    e.to && (c[e.to] = c[e.to] || []);
                                };
                                r && (r.event = r.event || "startup", l({
                                    name: r.event,
                                    from: "none",
                                    to: r.state
                                }));
                                for (var f = 0; f < s.length; f++) l(s[f]);
                                for (var h in u) u.hasOwnProperty(h) && (o[h] = n.buildEvent(h, u[h]));
                                for (var h in a) a.hasOwnProperty(h) && (o[h] = a[h]);
                                return o.current = "none", o.is = function(e) {
                                    return Array.isArray(e) ? e.indexOf(this.current) >= 0 : this.current === e;
                                }, o.can = function(e) {
                                    return !this.transition && void 0 !== u[e] && (u[e].hasOwnProperty(this.current) || u[e].hasOwnProperty(n.WILDCARD));
                                }, o.cannot = function(e) {
                                    return !this.can(e);
                                }, o.transitions = function() {
                                    return (c[this.current] || []).concat(c[n.WILDCARD] || []);
                                }, o.isFinished = function() {
                                    return this.is(i);
                                }, o.error = e.error || function(e, t, n, r, i, o, s) {
                                    throw s || o;
                                }, o.states = function() {
                                    return Object.keys(c).sort();
                                }, r && !r.defer && o[r.event](), o;
                            },
                            doCallback: function(e, t, r, i, o, s) {
                                if (t) try {
                                    return t.apply(e, [ r, i, o ].concat(s));
                                } catch (t) {
                                    return e.error(r, i, o, s, n.Error.INVALID_CALLBACK, "an exception occurred in a caller-provided callback function", t);
                                }
                            },
                            beforeAnyEvent: function(e, t, r, i, o) {
                                return n.doCallback(e, e.onbeforeevent, t, r, i, o);
                            },
                            afterAnyEvent: function(e, t, r, i, o) {
                                return n.doCallback(e, e.onafterevent || e.onevent, t, r, i, o);
                            },
                            leaveAnyState: function(e, t, r, i, o) {
                                return n.doCallback(e, e.onleavestate, t, r, i, o);
                            },
                            enterAnyState: function(e, t, r, i, o) {
                                return n.doCallback(e, e.onenterstate || e.onstate, t, r, i, o);
                            },
                            changeState: function(e, t, r, i, o) {
                                return n.doCallback(e, e.onchangestate, t, r, i, o);
                            },
                            beforeThisEvent: function(e, t, r, i, o) {
                                return n.doCallback(e, e["onbefore" + t], t, r, i, o);
                            },
                            afterThisEvent: function(e, t, r, i, o) {
                                return n.doCallback(e, e["onafter" + t] || e["on" + t], t, r, i, o);
                            },
                            leaveThisState: function(e, t, r, i, o) {
                                return n.doCallback(e, e["onleave" + r], t, r, i, o);
                            },
                            enterThisState: function(e, t, r, i, o) {
                                return n.doCallback(e, e["onenter" + i] || e["on" + i], t, r, i, o);
                            },
                            beforeEvent: function(e, t, r, i, o) {
                                if (!1 === n.beforeThisEvent(e, t, r, i, o) || !1 === n.beforeAnyEvent(e, t, r, i, o)) return !1;
                            },
                            afterEvent: function(e, t, r, i, o) {
                                n.afterThisEvent(e, t, r, i, o), n.afterAnyEvent(e, t, r, i, o);
                            },
                            leaveState: function(e, t, r, i, o) {
                                var s = n.leaveThisState(e, t, r, i, o), a = n.leaveAnyState(e, t, r, i, o);
                                return !1 !== s && !1 !== a && (n.ASYNC === s || n.ASYNC === a ? n.ASYNC : void 0);
                            },
                            enterState: function(e, t, r, i, o) {
                                n.enterThisState(e, t, r, i, o), n.enterAnyState(e, t, r, i, o);
                            },
                            buildEvent: function(e, t) {
                                return function() {
                                    var r = this.current, i = t[r] || (t[n.WILDCARD] != n.WILDCARD ? t[n.WILDCARD] : r) || r, o = Array.prototype.slice.call(arguments);
                                    if (this.transition) return this.error(e, r, i, o, n.Error.PENDING_TRANSITION, "event " + e + " inappropriate because previous transition did not complete");
                                    if (this.cannot(e)) return this.error(e, r, i, o, n.Error.INVALID_TRANSITION, "event " + e + " inappropriate in current state " + this.current);
                                    if (!1 === n.beforeEvent(this, e, r, i, o)) return n.Result.CANCELLED;
                                    if (r === i) return n.afterEvent(this, e, r, i, o), n.Result.NOTRANSITION;
                                    var s = this;
                                    this.transition = function() {
                                        return s.transition = null, s.current = i, n.enterState(s, e, r, i, o), n.changeState(s, e, r, i, o), 
                                        n.afterEvent(s, e, r, i, o), n.Result.SUCCEEDED;
                                    }, this.transition.cancel = function() {
                                        s.transition = null, n.afterEvent(s, e, r, i, o);
                                    };
                                    var a = n.leaveState(this, e, r, i, o);
                                    return !1 === a ? (this.transition = null, n.Result.CANCELLED) : n.ASYNC === a ? n.Result.PENDING : this.transition ? this.transition() : void 0;
                                };
                            }
                        };
                        e.exports && (t = e.exports = n), t.StateMachine = n;
                    }();
                }), Va = (qa.StateMachine, Cn.getWeak), Ya = jo(5), Wa = jo(6), za = 0, Ga = function(e) {
                    return e._l || (e._l = new Ja());
                }, Ja = function() {
                    this.a = [];
                }, Ha = function(e, t) {
                    return Ya(e.a, function(e) {
                        return e[0] === t;
                    });
                };
                Ja.prototype = {
                    get: function(e) {
                        var t = Ha(this, e);
                        if (t) return t[1];
                    },
                    has: function(e) {
                        return !!Ha(this, e);
                    },
                    set: function(e, t) {
                        var n = Ha(this, e);
                        n ? n[1] = t : this.a.push([ e, t ]);
                    },
                    delete: function(e) {
                        var t = Wa(this.a, function(t) {
                            return t[0] === e;
                        });
                        return ~t && this.a.splice(t, 1), !!~t;
                    }
                };
                var Ka = {
                    getConstructor: function(e, t, n, r) {
                        var i = e(function(e, o) {
                            vt(e, i, t, "_i"), e._t = t, e._i = za++, e._l = void 0, void 0 != o && Et(o, n, e[r], e);
                        });
                        return Gt(i.prototype, {
                            delete: function(e) {
                                if (!H(e)) return !1;
                                var n = Va(e);
                                return !0 === n ? Ga(So(this, t)).delete(e) : n && ue(n, this._i) && delete n[this._i];
                            },
                            has: function(e) {
                                if (!H(e)) return !1;
                                var n = Va(e);
                                return !0 === n ? Ga(So(this, t)).has(e) : n && ue(n, this._i);
                            }
                        }), i;
                    },
                    def: function(e, t, n) {
                        var r = Va(K(t), !0);
                        return !0 === r ? Ga(e).set(t, n) : r[e._i] = n, e;
                    },
                    ufstore: Ga
                };
                l(function(e) {
                    var t, n = jo(0), r = Cn.getWeak, i = Object.isExtensible, o = Ka.ufstore, s = {}, a = function(e) {
                        return function() {
                            return e(this, arguments.length > 0 ? arguments[0] : void 0);
                        };
                    }, u = {
                        get: function(e) {
                            if (H(e)) {
                                var t = r(e);
                                return !0 === t ? o(So(this, "WeakMap")).get(e) : t ? t[this._i] : void 0;
                            }
                        },
                        set: function(e, t) {
                            return Ka.def(So(this, "WeakMap"), e, t);
                        }
                    }, c = e.exports = Lo("WeakMap", a, u, Ka, !0, !0);
                    Q(function() {
                        return 7 != new c().set((Object.freeze || Object)(s), 7).get(s);
                    }) && (t = Ka.getConstructor(a, "WeakMap"), fo(t.prototype, u), Cn.NEED = !0, n([ "delete", "has", "get", "set" ], function(e) {
                        var n = c.prototype, r = n[e];
                        fe(n, e, function(n, o) {
                            if (H(n) && !i(n)) {
                                this._f || (this._f = new t());
                                var s = this._f[e](n, o);
                                return "set" == e ? this : s;
                            }
                            return r.call(this, n, o);
                        });
                    }));
                }), Fo("WeakMap"), Do("WeakMap");
                var Qa = z.WeakMap, $a = c(l(function(e) {
                    e.exports = {
                        default: Qa,
                        __esModule: !0
                    };
                })), Xa = wa(Object.getPrototypeOf, Object), Za = "[object Object]", eu = Function.prototype, tu = Object.prototype, nu = eu.toString, ru = tu.hasOwnProperty, iu = nu.call(Object), ou = function(e) {
                    if (!$s(e) || Qs(e) != Za) return !1;
                    var t = Xa(e);
                    if (null === t) return !0;
                    var n = ru.call(t, "constructor") && t.constructor;
                    return "function" == typeof n && n instanceof n && nu.call(n) == iu;
                }, su = void 0 !== s ? s : void 0 !== o ? o : {}, au = br("expired"), uu = Ko("LC:Expirable"), cu = function() {
                    function e(t, n) {
                        Sr(this, e), this.originalValue = t, "number" == typeof n && (this.expiredAt = Date.now() + n);
                    }
                    return pi(e, [ {
                        key: "value",
                        get: function() {
                            var e = this.expiredAt && this.expiredAt <= Date.now();
                            return e && uu("expired: " + this.originalValue), e ? au : this.originalValue;
                        }
                    } ]), e;
                }();
                cu.EXPIRED = au;
                var lu, fu = Ko("LC:Cache"), hu = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "anonymous";
                        Sr(this, e), this.name = t, this._map = {};
                    }
                    return e.prototype.get = function(e) {
                        var t = this._map[e];
                        if (t) {
                            var n = t.value;
                            if (n !== cu.EXPIRED) return fu("[%s] hit: %s", this.name, e), n;
                            delete this._map[e];
                        }
                        return fu("[" + this.name + "] missed: " + e), null;
                    }, e.prototype.set = function(e, t, n) {
                        fu("[%s] set: %s %o %d", this.name, e, t, n), this._map[e] = new cu(t, n);
                    }, e;
                }(), du = function e(t) {
                    var n = new Sn(t[0]);
                    return 1 === t.length ? n : n.catch(function() {
                        return e(t.slice(1));
                    });
                }, pu = function(e) {
                    return function(t) {
                        return e(t), t;
                    };
                }, vu = (su.navigator && su.navigator.userAgent && su.navigator.userAgent.indexOf("MSIE 10."), 
                new $a()), yu = function(e) {
                    return vu.has(e) || vu.set(e, {}), vu.get(e);
                }, mu = function e(t, n) {
                    if (!ou(t)) return t;
                    var r = vo({}, t);
                    for (var i in r) if ({}.hasOwnProperty.call(r, i)) {
                        var o = r[i];
                        o === n ? delete r[i] : r[i] = e(o, n);
                    }
                    return r;
                }, gu = function(e) {
                    return mu(e, null);
                }, _u = function(e) {
                    return gu(JSON.parse(Br(e)));
                }, bu = function(e) {
                    return Array.isArray(e) ? e : void 0 === e || null === e ? [] : [ e ];
                }, wu = "object" === ("undefined" == typeof wx ? "undefined" : Er(wx)) && "function" == typeof wx.connectSocket, Eu = Ko("LC:WebSocketPlus"), Su = function(e) {
                    return Math.min(1e3 * Math.pow(2, e), 3e5);
                }, Tu = function(e, t, n) {
                    return vo({}, n, {
                        value: function() {
                            var e;
                            this.checkConnectionAvailability(t);
                            for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                            return (e = n.value).call.apply(e, [ this ].concat(i));
                        }
                    });
                }, Ou = (lu = function(e) {
                    function t(n, r) {
                        if (Sr(this, t), void 0 === bi) throw new Error("WebSocket is undefined. Polyfill is required in this runtime.");
                        var i = Nr(this, e.call(this));
                        return i.init(), i._protocol = r, Sn.resolve("function" == typeof n ? n() : n).then(bu).then(function(e) {
                            return i._urls = e, i._open();
                        }).then(function() {
                            i.__postponeTimeoutTimer = i._postponeTimeoutTimer.bind(i), su.addEventListener && (i.__pause = function() {
                                return i.pause();
                            }, i.__resume = function() {
                                return i.resume();
                            }, su.addEventListener("offline", i.__pause), su.addEventListener("online", i.__resume)), 
                            i.open();
                        }).catch(i.throw.bind(i)), i;
                    }
                    return Fr(t, e), t.prototype._open = function() {
                        var e = this;
                        return this._createWs(this._urls, this._protocol).then(function(t) {
                            var n = Ba(e._urls), r = n[0], i = n.slice(1);
                            return e._urls = [].concat(Eo(i), [ r ]), t;
                        });
                    }, t.prototype._createWs = function(e, t) {
                        var n = this;
                        return du(e.map(function(e) {
                            return function(r, i) {
                                Eu("connect [" + e + "] " + t);
                                var o = t ? new bi(e, t) : new bi(e);
                                o.binaryType = n.binaryType || "arraybuffer", o.onopen = function() {
                                    return r(o);
                                }, o.onclose = function(t) {
                                    return i(t instanceof Error ? t : new Error("Failed to connect [" + e + "]"));
                                }, o.onerror = o.onclose;
                            };
                        })).then(function(e) {
                            return n._ws = e, n._ws.onclose = n._handleClose.bind(n), n._ws.onmessage = n._handleMessage.bind(n), 
                            e;
                        });
                    }, t.prototype._destroyWs = function() {
                        var e = this._ws;
                        e && (e.onopen = null, e.onclose = null, e.onerror = null, e.onmessage = null, this._ws = null, 
                        e.close());
                    }, t.prototype.onbeforeevent = function(e, t, n) {
                        for (var r = arguments.length, i = Array(r > 3 ? r - 3 : 0), o = 3; o < r; o++) i[o - 3] = arguments[o];
                        Eu.apply(void 0, [ e + ": " + t + " -> " + n ].concat(i));
                    }, t.prototype.onopen = function() {
                        this.emit("open");
                    }, t.prototype.onconnected = function() {
                        this._startConnectionKeeper();
                    }, t.prototype.onleaveconnected = function(e, t, n) {
                        this._stopConnectionKeeper(), this._destroyWs(), "offline" !== n && "disconnected" !== n || this.emit("disconnect");
                    }, t.prototype.onpause = function() {
                        this.emit("offline");
                    }, t.prototype.onbeforeresume = function() {
                        this.emit("online");
                    }, t.prototype.onreconnect = function() {
                        this.emit("reconnect");
                    }, t.prototype.ondisconnected = function(e, t, n) {
                        var r = this, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, o = Su.call(null, i);
                        Eu("schedule attempt=" + i + " delay=" + o), this.emit("schedule", i, o), this.__scheduledRetry && clearTimeout(this.__scheduledRetry), 
                        this.__scheduledRetry = setTimeout(function() {
                            r.is("disconnected") && r.retry(i);
                        }, o);
                    }, t.prototype.onretry = function(e, t, n) {
                        var r = this, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                        this.emit("retry", i), this._open().then(function() {
                            return r.can("reconnect") ? r.reconnect() : r._destroyWs();
                        }, function() {
                            return r.can("fail") && r.fail(i + 1);
                        });
                    }, t.prototype.onerror = function(e, t, n, r) {
                        this.emit("error", r);
                    }, t.prototype.onclose = function() {
                        su.removeEventListener && (this.__pause && su.removeEventListener("offline", this.__pause), 
                        this.__resume && su.removeEventListener("online", this.__resume));
                    }, t.prototype.checkConnectionAvailability = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "API";
                        if (!this.is("connected")) {
                            var t = this.current;
                            throw console.warn(e + " should not be called when the connection is " + t), (this.is("disconnected") || this.is("reconnecting")) && console.warn("disconnect and reconnect event should be handled to avoid such calls."), 
                            new Error("Connection unavailable");
                        }
                    }, t.prototype._ping = function() {
                        Eu("ping");
                        try {
                            this.ping();
                        } catch (e) {
                            console.warn("websocket ping error: " + e.message);
                        }
                    }, t.prototype.ping = function() {
                        this._ws.ping ? this._ws.ping() : console.warn("The WebSocket implement does not support sending ping frame.\n        Override ping method to use application defined ping/pong mechanism.");
                    }, t.prototype._postponeTimeoutTimer = function() {
                        var e = this;
                        Eu("_postponeTimeoutTimer"), this._clearTimeoutTimers(), this._timeoutTimer = setTimeout(function() {
                            Eu("timeout"), e.disconnect();
                        }, 38e4);
                    }, t.prototype._clearTimeoutTimers = function() {
                        this._timeoutTimer && clearTimeout(this._timeoutTimer);
                    }, t.prototype._startConnectionKeeper = function() {
                        Eu("start connection keeper"), this._heartbeatTimer = setInterval(this._ping.bind(this), 18e4);
                        var e = this._ws.addListener || this._ws.addEventListener;
                        e.call(this._ws, "message", this.__postponeTimeoutTimer), e.call(this._ws, "pong", this.__postponeTimeoutTimer), 
                        this._postponeTimeoutTimer();
                    }, t.prototype._stopConnectionKeeper = function() {
                        Eu("stop connection keeper");
                        var e = this._ws.removeListener || this._ws.removeEventListener;
                        e.call(this._ws, "message", this.__postponeTimeoutTimer), e.call(this._ws, "pong", this.__postponeTimeoutTimer), 
                        this._clearTimeoutTimers(), this._heartbeatTimer && clearInterval(this._heartbeatTimer);
                    }, t.prototype._handleClose = function(e) {
                        Eu("ws closed [" + e.code + "] " + e.reason), this.isFinished() || this.handleClose(e);
                    }, t.prototype.handleClose = function() {
                        this.disconnect();
                    }, t.prototype.send = function(e) {
                        Eu("send", e), this._ws.send(e);
                    }, t.prototype._handleMessage = function(e) {
                        Eu("message", e.data), this.handleMessage(e.data);
                    }, t.prototype.handleMessage = function(e) {
                        this.emit("message", e);
                    }, t;
                }(ro), F(lu.prototype, "_ping", [ Tu ], Ma(lu.prototype, "_ping"), lu.prototype), 
                F(lu.prototype, "send", [ Tu ], Ma(lu.prototype, "send"), lu.prototype), lu);
                qa.create({
                    target: Ou.prototype,
                    initial: {
                        state: "initialized",
                        event: "init",
                        defer: !0
                    },
                    terminal: "closed",
                    events: [ {
                        name: "open",
                        from: "initialized",
                        to: "connected"
                    }, {
                        name: "disconnect",
                        from: "connected",
                        to: "disconnected"
                    }, {
                        name: "retry",
                        from: "disconnected",
                        to: "reconnecting"
                    }, {
                        name: "fail",
                        from: "reconnecting",
                        to: "disconnected"
                    }, {
                        name: "reconnect",
                        from: "reconnecting",
                        to: "connected"
                    }, {
                        name: "pause",
                        from: [ "connected", "disconnected", "reconnecting" ],
                        to: "offline"
                    }, {}, {
                        name: "resume",
                        from: "offline",
                        to: "disconnected"
                    }, {
                        name: "close",
                        from: [ "connected", "disconnected", "reconnecting", "offline" ],
                        to: "closed"
                    }, {
                        name: "throw",
                        from: "*",
                        to: "error"
                    } ]
                });
                var Au = Cn.onFreeze;
                qr("freeze", function(e) {
                    return function(t) {
                        return e && H(t) ? e(Au(t)) : t;
                    };
                });
                var Cu = z.Object.freeze, Iu = c(l(function(e) {
                    e.exports = {
                        default: Cu,
                        __esModule: !0
                    };
                })), Nu = Iu({
                    1000: {
                        name: "CLOSE_NORMAL"
                    },
                    1006: {
                        name: "CLOSE_ABNORMAL"
                    },
                    4100: {
                        name: "APP_NOT_AVAILABLE",
                        message: "App not exists or realtime message service is disabled."
                    },
                    4102: {
                        name: "SIGNATURE_FAILED",
                        message: "Login signature mismatch."
                    },
                    4103: {
                        name: "INVALID_LOGIN",
                        message: "Malformed clientId."
                    },
                    4105: {
                        name: "SESSION_REQUIRED",
                        message: "Message sent before session opened."
                    },
                    4107: {
                        name: "READ_TIMEOUT"
                    },
                    4108: {
                        name: "LOGIN_TIMEOUT"
                    },
                    4109: {
                        name: "FRAME_TOO_LONG"
                    },
                    4110: {
                        name: "INVALID_ORIGIN",
                        message: "Access denied by domain whitelist."
                    },
                    4111: {
                        name: "SESSION_CONFLICT"
                    },
                    4112: {
                        name: "SESSION_TOKEN_EXPIRED"
                    },
                    4113: {
                        name: "APP_QUOTA_EXCEEDED",
                        message: "The daily active users limit exceeded."
                    },
                    4116: {
                        name: "MESSAGE_SENT_QUOTA_EXCEEDED",
                        message: "Command sent too fast."
                    },
                    4200: {
                        name: "INTERNAL_ERROR",
                        message: "Internal error, please contact LeanCloud for support."
                    },
                    4301: {
                        name: "CONVERSATION_API_FAILED",
                        message: "Upstream Conversatoin API failed, see error.detail for details."
                    },
                    4302: {
                        name: "CONVERSATION_SIGNATURE_FAILED",
                        message: "Conversation action signature mismatch."
                    },
                    4303: {
                        name: "CONVERSATION_NOT_FOUND"
                    },
                    4304: {
                        name: "CONVERSATION_FULL"
                    },
                    4305: {
                        name: "CONVERSATION_REJECTED_BY_APP",
                        message: "Conversation action rejected by hook."
                    },
                    4306: {
                        name: "CONVERSATION_UPDATE_FAILED"
                    },
                    4307: {
                        name: "CONVERSATION_READ_ONLY"
                    },
                    4308: {
                        name: "CONVERSATION_NOT_ALLOWED"
                    },
                    4309: {
                        name: "CONVERSATION_UPDATE_REJECTED",
                        message: "Conversation update rejected because the client is not a member."
                    },
                    4310: {
                        name: "CONVERSATION_QUERY_FAILED",
                        message: "Conversation query failed because it is too expansive."
                    },
                    4311: {
                        name: "CONVERSATION_LOG_FAILED"
                    },
                    4312: {
                        name: "CONVERSATION_LOG_REJECTED",
                        message: "Message query rejected because the client is not a member of the conversation."
                    },
                    4313: {
                        name: "SYSTEM_CONVERSATION_REQUIRED"
                    },
                    4314: {
                        name: "NORMAL_CONVERSATION_REQUIRED"
                    },
                    4315: {
                        name: "CONVERSATION_BLACKLISTED",
                        message: "Blacklisted in the conversation."
                    },
                    4316: {
                        name: "TRANSIENT_CONVERSATION_REQUIRED"
                    },
                    4317: {
                        name: "CONVERSATION_MEMBERSHIP_REQUIRED"
                    },
                    4318: {
                        name: "CONVERSATION_API_QUOTA_EXCEEDED",
                        message: "LeanCloud API quota exceeded. You may upgrade your plan."
                    },
                    4323: {
                        name: "TEMPORARY_CONVERSATION_EXPIRED",
                        message: "Temporary conversation expired or does not exist."
                    },
                    4401: {
                        name: "INVALID_MESSAGING_TARGET",
                        message: "Conversation does not exist or client is not a member."
                    },
                    4402: {
                        name: "MESSAGE_REJECTED_BY_APP",
                        message: "Message rejected by hook."
                    },
                    4403: {
                        name: "MESSAGE_OWNERSHIP_REQUIRED"
                    },
                    4404: {
                        name: "MESSAGE_NOT_FOUND"
                    },
                    4405: {
                        name: "MESSAGE_UPDATE_REJECTED_BY_APP",
                        message: "Message update rejected by hook."
                    },
                    4406: {
                        name: "MESSAGE_EDIT_DISABLED"
                    },
                    4407: {
                        name: "MESSAGE_RECALL_DISABLED"
                    }
                }), xu = Iu(Yr(Nu).reduce(function(e, t) {
                    return vo(e, Ir({}, Nu[t].name, Number(t)));
                }, {})), Pu = function(e) {
                    var t = e.code, n = e.reason, r = e.appCode, i = e.detail, o = e.error, s = n || i || o, a = n;
                    !s && Nu[t] && (a = Nu[t].name, s = Nu[t].message || a), s || (s = "Unknow Error: " + t);
                    var u = new Error(s);
                    return vo(u, {
                        code: t,
                        appCode: r,
                        detail: i,
                        name: a
                    });
                }, ju = Ko("LC:Connection"), Ru = function(e) {
                    function t(n, r) {
                        var i = r.format, o = r.version;
                        Sr(this, t), ju("initializing Connection");
                        var s = "lc." + i + "." + o;
                        if (wu) a = Nr(this, e.call(this, n().then(function(e) {
                            return e.map(function(e) {
                                return e + (-1 === e.indexOf("?") ? "?" : "&") + "subprotocol=" + encodeURIComponent(s);
                            });
                        }))); else var a = Nr(this, e.call(this, n, s));
                        return a._protocalFormat = i, a._commands = {}, a._serialId = 0, Nr(a);
                    }
                    return Fr(t, e), t.prototype.send = function() {
                        var t = mo(co.mark(function t(n) {
                            var r, i, o = this, s = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            return co.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (r = void 0, s && (this._serialId += 1, r = this._serialId, n.i = r), ju.enabled && ju("↑ %O sent", _u(n)), 
                                    i = void 0, "proto2base64" === this._protocalFormat ? i = n.toBase64() : n.toArrayBuffer && (i = n.toArrayBuffer()), 
                                    i) {
                                        t.next = 7;
                                        break;
                                    }
                                    throw new TypeError(n + " is not a GenericCommand");

                                  case 7:
                                    if (e.prototype.send.call(this, i), s) {
                                        t.next = 10;
                                        break;
                                    }
                                    return t.abrupt("return", void 0);

                                  case 10:
                                    return t.abrupt("return", new Sn(function(e, t) {
                                        o._commands[r] = {
                                            resolve: e,
                                            reject: t,
                                            timeout: setTimeout(function() {
                                                o._commands[r] && (ju.enabled && ju("✗ %O timeout", _u(n)), t(Pu({
                                                    error: "Command Timeout [cmd:" + n.cmd + " op:" + n.op + "]",
                                                    name: "COMMAND_TIMEOUT"
                                                })), delete o._commands[r]);
                                            }, 2e4)
                                        };
                                    }));

                                  case 11:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(), t.prototype.handleMessage = function(e) {
                        var t = void 0;
                        try {
                            t = Hi.decode(e), ju.enabled && ju("↓ %O received", _u(t));
                        } catch (t) {
                            console.warn("Decode message failed", e);
                        }
                        var n = t.i;
                        n ? this._commands[n] ? (clearTimeout(this._commands[n].timeout), t.cmd === Zi.error ? this._commands[n].reject(Pu(t.errorMessage)) : this._commands[n].resolve(t), 
                        delete this._commands[n]) : console.warn("Unexpected command received with serialId [" + n + "],\n         which have timed out or never been requested.") : t.cmd === Zi.error ? this.emit("error", Pu(t.errorMessage)) : this.emit("message", t);
                    }, t.prototype.ping = function() {
                        return this.send(new Hi({
                            cmd: Zi.echo
                        })).catch(function(e) {
                            return ju("ping failed:", e);
                        });
                    }, t;
                }(Ou), ku = function(e, t) {
                    e && e.forEach(function(e) {
                        try {
                            e(t);
                        } catch (t) {
                            throw e._pluginName && (t.message += "[" + e._pluginName + "]"), t;
                        }
                    });
                }, Lu = function(e, t) {
                    return bu(e).reduce(function(e, n) {
                        return e.then(function(e) {
                            return !1 !== e && n.apply(void 0, Eo(t));
                        }).catch(function(e) {
                            throw n._pluginName && (e.message += "[" + n._pluginName + "]"), e;
                        });
                    }, Sn.resolve(!0));
                }, Uu = "4.0.1", Fu = Ko("LC:Realtime"), Du = Ko("LC:request"), Mu = new hu("push-router"), Bu = function(e) {
                    function t(n) {
                        var r = n.plugins, i = qo(n, [ "plugins" ]);
                        Sr(this, t), Fu("initializing Realtime %s %O", Uu, i);
                        var o = Nr(this, e.call(this));
                        if ("string" != typeof i.appId) throw new TypeError("appId [" + i.appId + "] is not a string");
                        if ("string" != typeof i.appKey) throw new TypeError("appKey [" + i.appKey + "] is not a string");
                        o._options = vo({
                            appId: void 0,
                            appKey: void 0,
                            region: "cn",
                            pushOfflineMessages: !1,
                            noBinary: !1,
                            ssl: !0,
                            RTMServerName: D.env.RTM_SERVER_NAME
                        }, i), o._cache = new hu("endpoints");
                        var s = yu(o);
                        s.clients = new Bo(), s.pendingClients = new Bo();
                        var a = [].concat(Eo(bu(t.__preRegisteredPlugins)), Eo(bu(r)));
                        return Fu("Using plugins %o", a.map(function(e) {
                            return e.name;
                        })), o._plugins = a.reduce(function(e, t) {
                            for (var n in t) ({}).hasOwnProperty.call(t, n) && "name" !== n && (t.name && bu(t[n]).forEach(function(e) {
                                e._pluginName = t.name;
                            }), e[n] = bu(e[n]).concat(t[n]));
                            return e;
                        }, {}), ku(o._plugins.onRealtimeCreate, o), o;
                    }
                    return Fr(t, e), t.prototype._request = function() {
                        var e = mo(co.mark(function e(t) {
                            var n, r, i, o, s, a, u, c, l = t.method, f = t.version, h = void 0 === f ? "1.1" : f, d = t.path, p = t.query, v = t.headers, y = t.data, m = void 0 === y ? {} : y;
                            return co.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = this._options, r = n.appId, i = n.region, o = n.server, e.next = 3, this.constructor._getServerUrls({
                                        appId: r,
                                        region: i,
                                        server: o
                                    });

                                  case 3:
                                    return s = e.sent, a = s.api, u = "https://" + a + "/" + h + d, c = {
                                        method: l,
                                        params: p,
                                        headers: yo({
                                            "X-LC-Id": this._options.appId,
                                            "X-LC-Key": this._options.appKey
                                        }, v),
                                        data: m
                                    }, Du("Req: %O %O", u, c), e.abrupt("return", As(u, c).then(function(e) {
                                        return Du("Res: %O %O %O", u, e.status, e.data), e.data;
                                    }, function(e) {
                                        if (Du("Error: %O %O %O", u, e.response.status, e.response.data), e.response && e.response.data && e.response.data.code) throw Pu(e.response.data);
                                        throw e;
                                    }));

                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(), t.prototype._open = function() {
                        var e = this;
                        if (this._openPromise) return this._openPromise;
                        var t = "protobuf2";
                        this._options.noBinary && (t = "proto2base64");
                        var n = 3;
                        this._options.pushOfflineMessages && (n = 1);
                        var r = {
                            format: t,
                            version: n
                        };
                        return this._openPromise = new Sn(function(t, n) {
                            Fu("No connection established, create a new one.");
                            var i = new Ru(function() {
                                return e._getRTMServers(e._options);
                            }, r);
                            i.on("open", function() {
                                return t(i);
                            }), i.on("error", n), i.on("message", e._dispatchCommand.bind(e)), [ "disconnect", "reconnect", "retry", "schedule", "offline", "online" ].forEach(function(t) {
                                return i.on(t, function() {
                                    for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                    Fu(t + " event emitted. %o", r), e.emit.apply(e, [ t ].concat(r)), "reconnect" !== t && yu(e).clients.forEach(function(e) {
                                        e.emit.apply(e, [ t ].concat(r));
                                    });
                                });
                            }), i.handleClose = function(e) {
                                [ xu.APP_NOT_AVAILABLE, xu.INVALID_LOGIN, xu.INVALID_ORIGIN ].some(function(t) {
                                    return t === e.code;
                                }) ? this.throw(Pu(e)) : this.disconnect();
                            }, yu(e).connection = i;
                        }), this._openPromise;
                    }, t.prototype._getRTMServers = function() {
                        var e = mo(co.mark(function e(t) {
                            var n, r;
                            return co.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!t.RTMServers) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return", La(bu(t.RTMServers)));

                                  case 2:
                                    if (n = void 0, !(r = this._cache.get("endpoints"))) {
                                        e.next = 10;
                                        break;
                                    }
                                    return e.next = 7, r;

                                  case 7:
                                    n = e.sent, e.next = 14;
                                    break;

                                  case 10:
                                    return e.next = 12, this.constructor._fetchRTMServers(t);

                                  case 12:
                                    n = e.sent, this._cache.set("endpoints", n, 1e3 * n.ttl);

                                  case 14:
                                    return Fu("endpoint info: %O", n), e.abrupt("return", [ n.server, n.secondary ]);

                                  case 16:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(), t._getServerUrls = function() {
                        var e = mo(co.mark(function e(t) {
                            var n, r = t.appId, i = t.region, o = t.server;
                            return co.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (Fu("fetch server urls"), !o) {
                                        e.next = 5;
                                        break;
                                    }
                                    if ("string" == typeof o) {
                                        e.next = 4;
                                        break;
                                    }
                                    return e.abrupt("return", o);

                                  case 4:
                                    return e.abrupt("return", {
                                        RTMRouter: o,
                                        api: o
                                    });

                                  case 5:
                                    e.t0 = i, e.next = "cn" === e.t0 ? 8 : "us" === e.t0 ? 12 : 13;
                                    break;

                                  case 8:
                                    if (!(n = Mu.get(r))) {
                                        e.next = 11;
                                        break;
                                    }
                                    return e.abrupt("return", n);

                                  case 11:
                                    return e.abrupt("return", As.get("https://app-router.leancloud.cn/2/route", {
                                        params: {
                                            appId: r
                                        },
                                        timeout: 2e4
                                    }).then(function(e) {
                                        return e.data;
                                    }).then(pu(Fu)).then(function(e) {
                                        var t = e.rtm_router_server, n = e.api_server, i = e.ttl, o = void 0 === i ? 3600 : i;
                                        if (!t) throw new Error("rtm router not exists");
                                        var s = {
                                            RTMRouter: t,
                                            api: n
                                        };
                                        return Mu.set(r, s, 1e3 * o), s;
                                    }).catch(function() {
                                        var e = r.slice(0, 8).toLowerCase();
                                        return {
                                            RTMRouter: e + ".rtm.lncld.net",
                                            api: e + ".api.lncld.net"
                                        };
                                    }));

                                  case 12:
                                    return e.abrupt("return", {
                                        RTMRouter: "router-a0-push.leancloud.cn",
                                        api: "us-api.leancloud.cn"
                                    });

                                  case 13:
                                    throw new Error("Region [" + i + "] is not supported.");

                                  case 14:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(), t._fetchRTMServers = function(e) {
                        var t = e.appId, n = e.region, r = e.ssl, i = e.server, o = e.RTMServerName;
                        return Fu("fetch endpoint info"), this._getServerUrls({
                            appId: t,
                            region: n,
                            server: i
                        }).then(pu(Fu)).then(function(e) {
                            var n = e.RTMRouter;
                            return As.get("https://" + n + "/v1/route", {
                                params: {
                                    appId: t,
                                    secure: r,
                                    features: wu ? "wechat" : void 0,
                                    server: o,
                                    _t: Date.now()
                                },
                                timeout: 2e4
                            }).then(function(e) {
                                return e.data;
                            }).then(pu(Fu));
                        });
                    }, t.prototype._close = function() {
                        this._openPromise && this._openPromise.then(function(e) {
                            return e.close();
                        }), delete this._openPromise;
                    }, t.prototype.retry = function() {
                        var e = yu(this).connection;
                        if (!e) throw new Error("no connection established");
                        if (e.cannot("retry")) throw new Error("retrying not allowed when not disconnected. the connection is now " + e.current);
                        return e.retry();
                    }, t.prototype.pause = function() {
                        var e = yu(this).connection;
                        e && e.can("pause") && e.pause();
                    }, t.prototype.resume = function() {
                        var e = yu(this).connection;
                        e && e.can("resume") && e.resume();
                    }, t.prototype._registerPending = function(e) {
                        yu(this).pendingClients.add(e);
                    }, t.prototype._deregisterPending = function(e) {
                        yu(this).pendingClients.delete(e);
                    }, t.prototype._register = function(e) {
                        yu(this).clients.add(e);
                    }, t.prototype._deregister = function(e) {
                        var t = yu(this);
                        t.clients.delete(e), t.clients.size + t.pendingClients.size === 0 && this._close();
                    }, t.prototype._dispatchCommand = function(e) {
                        return Lu(this._plugins.beforeCommandDispatch, [ e, this ]).then(function(t) {
                            return !!t && Fu("[WARN] Unexpected message received: %O", _u(e));
                        });
                    }, t;
                }(ro);
                a.Protocals = no, a.Promise = Sn, a.EventEmitter = ro, a.Realtime = Bu, Object.defineProperty(a, "__esModule", {
                    value: !0
                });
            });
        }).call(a, u(5));
    }, function(e, t, n) {
        !function(e, r) {
            r(t, n(22));
        }(0, function(e, t) {
            function n(e) {
                return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
            }
            function i(e, t) {
                return t = {
                    exports: {}
                }, e(t, t.exports), t.exports;
            }
            if (!t.Protocals) throw new Error("LeanCloud Realtime SDK not installed");
            var s = i(function(e) {
                var t = e.exports = void 0 !== o && o.Math == Math ? o : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                "number" == typeof __g && (__g = t);
            }), a = i(function(e) {
                var t = e.exports = {
                    version: "2.5.5"
                };
                "number" == typeof __e && (__e = t);
            }), u = (a.version, function(e) {
                if ("function" != typeof e) throw TypeError(e + " is not a function!");
                return e;
            }), c = function(e, t, n) {
                if (u(e), void 0 === t) return e;
                switch (n) {
                  case 1:
                    return function(n) {
                        return e.call(t, n);
                    };

                  case 2:
                    return function(n, r) {
                        return e.call(t, n, r);
                    };

                  case 3:
                    return function(n, r, i) {
                        return e.call(t, n, r, i);
                    };
                }
                return function() {
                    return e.apply(t, arguments);
                };
            }, l = function(e) {
                return "object" == (void 0 === e ? "undefined" : r(e)) ? null !== e : "function" == typeof e;
            }, f = function(e) {
                if (!l(e)) throw TypeError(e + " is not an object!");
                return e;
            }, h = function(e) {
                try {
                    return !!e();
                } catch (e) {
                    return !0;
                }
            }, d = !h(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7;
                    }
                }).a;
            }), p = s.document, v = l(p) && l(p.createElement), y = function(e) {
                return v ? p.createElement(e) : {};
            }, m = !d && !h(function() {
                return 7 != Object.defineProperty(y("div"), "a", {
                    get: function() {
                        return 7;
                    }
                }).a;
            }), g = function(e, t) {
                if (!l(e)) return e;
                var n, r;
                if (t && "function" == typeof (n = e.toString) && !l(r = n.call(e))) return r;
                if ("function" == typeof (n = e.valueOf) && !l(r = n.call(e))) return r;
                if (!t && "function" == typeof (n = e.toString) && !l(r = n.call(e))) return r;
                throw TypeError("Can't convert object to primitive value");
            }, _ = Object.defineProperty, b = {
                f: d ? Object.defineProperty : function(e, t, n) {
                    if (f(e), t = g(t, !0), f(n), m) try {
                        return _(e, t, n);
                    } catch (e) {}
                    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                    return "value" in n && (e[t] = n.value), e;
                }
            }, w = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                };
            }, E = d ? function(e, t, n) {
                return b.f(e, t, w(1, n));
            } : function(e, t, n) {
                return e[t] = n, e;
            }, S = {}.hasOwnProperty, T = function(e, t) {
                return S.call(e, t);
            }, O = function e(t, n, r) {
                var i, o, u, l = t & e.F, f = t & e.G, h = t & e.S, d = t & e.P, p = t & e.B, v = t & e.W, y = f ? a : a[n] || (a[n] = {}), m = y.prototype, g = f ? s : h ? s[n] : (s[n] || {}).prototype;
                f && (r = n);
                for (i in r) (o = !l && g && void 0 !== g[i]) && T(y, i) || (u = o ? g[i] : r[i], 
                y[i] = f && "function" != typeof g[i] ? r[i] : p && o ? c(u, s) : v && g[i] == u ? function(e) {
                    var t = function(t, n, r) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                              case 0:
                                return new e();

                              case 1:
                                return new e(t);

                              case 2:
                                return new e(t, n);
                            }
                            return new e(t, n, r);
                        }
                        return e.apply(this, arguments);
                    };
                    return t.prototype = e.prototype, t;
                }(u) : d && "function" == typeof u ? c(Function.call, u) : u, d && ((y.virtual || (y.virtual = {}))[i] = u, 
                t & e.R && m && !m[i] && E(m, i, u)));
            };
            O.F = 1, O.G = 2, O.S = 4, O.P = 8, O.B = 16, O.W = 32, O.U = 64, O.R = 128;
            var A = O, C = {}.toString, I = function(e) {
                return C.call(e).slice(8, -1);
            }, N = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                return "String" == I(e) ? e.split("") : Object(e);
            }, x = function(e) {
                if (void 0 == e) throw TypeError("Can't call method on  " + e);
                return e;
            }, P = function(e) {
                return N(x(e));
            }, j = Math.ceil, R = Math.floor, k = function(e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? R : j)(e);
            }, L = Math.min, U = function(e) {
                return e > 0 ? L(k(e), 9007199254740991) : 0;
            }, F = Math.max, D = Math.min, M = function(e, t) {
                return (e = k(e)) < 0 ? F(e + t, 0) : D(e, t);
            }, B = s["__core-js_shared__"] || (s["__core-js_shared__"] = {}), q = function(e) {
                return B[e] || (B[e] = {});
            }, V = 0, Y = Math.random(), W = function(e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++V + Y).toString(36));
            }, z = q("keys"), G = function(e) {
                return z[e] || (z[e] = W(e));
            }, J = function(e, t, n) {
                for (var r = P(e), i = U(r.length), o = M(n, i); i > o; o++) if (o in r && r[o] === t) return o || 0;
                return -1;
            }, H = G("IE_PROTO"), K = function(e, t) {
                var n, r = P(e), i = 0, o = [];
                for (n in r) n != H && T(r, n) && o.push(n);
                for (;t.length > i; ) T(r, n = t[i++]) && (~J(o, n) || o.push(n));
                return o;
            }, Q = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), $ = Object.keys || function(e) {
                return K(e, Q);
            }, X = {
                f: Object.getOwnPropertySymbols
            }, Z = {
                f: {}.propertyIsEnumerable
            }, ee = function(e) {
                return Object(x(e));
            }, te = Object.assign, ne = !te || h(function() {
                var e = {}, t = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
                return e[n] = 7, r.split("").forEach(function(e) {
                    t[e] = e;
                }), 7 != te({}, e)[n] || Object.keys(te({}, t)).join("") != r;
            }) ? function(e, t) {
                for (var n = ee(e), r = arguments.length, i = 1, o = X.f, s = Z.f; r > i; ) for (var a, u = N(arguments[i++]), c = o ? $(u).concat(o(u)) : $(u), l = c.length, f = 0; l > f; ) s.call(u, a = c[f++]) && (n[a] = u[a]);
                return n;
            } : te;
            A(A.S + A.F, "Object", {
                assign: ne
            });
            var re = a.Object.assign, ie = n(i(function(e) {
                e.exports = {
                    default: re,
                    __esModule: !0
                };
            })), oe = E, se = {}, ae = d ? Object.defineProperties : function(e, t) {
                f(e);
                for (var n, r = $(t), i = r.length, o = 0; i > o; ) b.f(e, n = r[o++], t[n]);
                return e;
            }, ue = s.document, ce = ue && ue.documentElement, le = G("IE_PROTO"), fe = function() {}, he = function() {
                var e, t = y("iframe"), n = Q.length;
                for (t.style.display = "none", ce.appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), 
                e.write("<script>document.F=Object<\/script>"), e.close(), he = e.F; n--; ) delete he.prototype[Q[n]];
                return he();
            }, de = Object.create || function(e, t) {
                var n;
                return null !== e ? (fe.prototype = f(e), n = new fe(), fe.prototype = null, n[le] = e) : n = he(), 
                void 0 === t ? n : ae(n, t);
            }, pe = i(function(e) {
                var t = q("wks"), n = s.Symbol, r = "function" == typeof n;
                (e.exports = function(e) {
                    return t[e] || (t[e] = r && n[e] || (r ? n : W)("Symbol." + e));
                }).store = t;
            }), ve = b.f, ye = pe("toStringTag"), me = function(e, t, n) {
                e && !T(e = n ? e : e.prototype, ye) && ve(e, ye, {
                    configurable: !0,
                    value: t
                });
            }, ge = {};
            E(ge, pe("iterator"), function() {
                return this;
            });
            var _e = function(e, t, n) {
                e.prototype = de(ge, {
                    next: w(1, n)
                }), me(e, t + " Iterator");
            }, be = G("IE_PROTO"), we = Object.prototype, Ee = Object.getPrototypeOf || function(e) {
                return e = ee(e), T(e, be) ? e[be] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? we : null;
            }, Se = pe("iterator"), Te = !([].keys && "next" in [].keys()), Oe = function() {
                return this;
            }, Ae = function(e, t, n, r, i, o, s) {
                _e(n, t, r);
                var a, u, c, l = function(e) {
                    if (!Te && e in p) return p[e];
                    switch (e) {
                      case "keys":
                      case "values":
                        return function() {
                            return new n(this, e);
                        };
                    }
                    return function() {
                        return new n(this, e);
                    };
                }, f = t + " Iterator", h = "values" == i, d = !1, p = e.prototype, v = p[Se] || p["@@iterator"] || i && p[i], y = v || l(i), m = i ? h ? l("entries") : y : void 0, g = "Array" == t ? p.entries || v : v;
                if (g && (c = Ee(g.call(new e()))) !== Object.prototype && c.next && me(c, f, !0), 
                h && v && "values" !== v.name && (d = !0, y = function() {
                    return v.call(this);
                }), s && (Te || d || !p[Se]) && E(p, Se, y), se[t] = y, se[f] = Oe, i) if (a = {
                    values: h ? y : l("values"),
                    keys: o ? y : l("keys"),
                    entries: m
                }, s) for (u in a) u in p || oe(p, u, a[u]); else A(A.P + A.F * (Te || d), t, a);
                return a;
            }, Ce = function(e, t) {
                var n, r, i = String(x(e)), o = k(t), s = i.length;
                return o < 0 || o >= s ? "" : (n = i.charCodeAt(o)) < 55296 || n > 56319 || o + 1 === s || (r = i.charCodeAt(o + 1)) < 56320 || r > 57343 ? i.charAt(o) : i.slice(o, o + 2);
            };
            Ae(String, "String", function(e) {
                this._t = String(e), this._i = 0;
            }, function() {
                var e, t = this._t, n = this._i;
                return n >= t.length ? {
                    value: void 0,
                    done: !0
                } : (e = Ce(t, n), this._i += e.length, {
                    value: e,
                    done: !1
                });
            });
            var Ie = function(e, t) {
                return {
                    value: t,
                    done: !!e
                };
            };
            Ae(Array, "Array", function(e, t) {
                this._t = P(e), this._i = 0, this._k = t;
            }, function() {
                var e = this._t, t = this._k, n = this._i++;
                return !e || n >= e.length ? (this._t = void 0, Ie(1)) : "keys" == t ? Ie(0, n) : "values" == t ? Ie(0, e[n]) : Ie(0, [ n, e[n] ]);
            }, "values"), se.Arguments = se.Array;
            for (var Ne = pe("toStringTag"), xe = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), Pe = 0; Pe < xe.length; Pe++) {
                var je = xe[Pe], Re = s[je], ke = Re && Re.prototype;
                ke && !ke[Ne] && E(ke, Ne, je), se[je] = se.Array;
            }
            var Le = function(e, t, n) {
                for (var r in t) n && e[r] ? e[r] = t[r] : E(e, r, t[r]);
                return e;
            }, Ue = function(e, t, n, r) {
                if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
                return e;
            }, Fe = function(e, t, n, r) {
                try {
                    return r ? t(f(n)[0], n[1]) : t(n);
                } catch (t) {
                    var i = e.return;
                    throw void 0 !== i && f(i.call(e)), t;
                }
            }, De = pe("iterator"), Me = Array.prototype, Be = function(e) {
                return void 0 !== e && (se.Array === e || Me[De] === e);
            }, qe = pe("toStringTag"), Ve = "Arguments" == I(function() {
                return arguments;
            }()), Ye = function(e, t) {
                try {
                    return e[t];
                } catch (e) {}
            }, We = function(e) {
                var t, n, r;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = Ye(t = Object(e), qe)) ? n : Ve ? I(t) : "Object" == (r = I(t)) && "function" == typeof t.callee ? "Arguments" : r;
            }, ze = pe("iterator"), Ge = a.getIteratorMethod = function(e) {
                if (void 0 != e) return e[ze] || e["@@iterator"] || se[We(e)];
            }, Je = i(function(e) {
                var t = {}, n = {}, r = e.exports = function(e, r, i, o, s) {
                    var a, u, l, h, d = s ? function() {
                        return e;
                    } : Ge(e), p = c(i, o, r ? 2 : 1), v = 0;
                    if ("function" != typeof d) throw TypeError(e + " is not iterable!");
                    if (Be(d)) {
                        for (a = U(e.length); a > v; v++) if ((h = r ? p(f(u = e[v])[0], u[1]) : p(e[v])) === t || h === n) return h;
                    } else for (l = d.call(e); !(u = l.next()).done; ) if ((h = Fe(l, p, u.value, r)) === t || h === n) return h;
                };
                r.BREAK = t, r.RETURN = n;
            }), He = pe("species"), Ke = function(e) {
                var t = "function" == typeof a[e] ? a[e] : s[e];
                d && t && !t[He] && b.f(t, He, {
                    configurable: !0,
                    get: function() {
                        return this;
                    }
                });
            }, Qe = i(function(e) {
                var t = W("meta"), n = b.f, i = 0, o = Object.isExtensible || function() {
                    return !0;
                }, s = !h(function() {
                    return o(Object.preventExtensions({}));
                }), a = function(e) {
                    n(e, t, {
                        value: {
                            i: "O" + ++i,
                            w: {}
                        }
                    });
                }, u = e.exports = {
                    KEY: t,
                    NEED: !1,
                    fastKey: function(e, n) {
                        if (!l(e)) return "symbol" == (void 0 === e ? "undefined" : r(e)) ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!T(e, t)) {
                            if (!o(e)) return "F";
                            if (!n) return "E";
                            a(e);
                        }
                        return e[t].i;
                    },
                    getWeak: function(e, n) {
                        if (!T(e, t)) {
                            if (!o(e)) return !0;
                            if (!n) return !1;
                            a(e);
                        }
                        return e[t].w;
                    },
                    onFreeze: function(e) {
                        return s && u.NEED && o(e) && !T(e, t) && a(e), e;
                    }
                };
            }), $e = (Qe.KEY, Qe.NEED, Qe.fastKey, Qe.getWeak, Qe.onFreeze, function(e, t) {
                if (!l(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
                return e;
            }), Xe = b.f, Ze = Qe.fastKey, et = d ? "_s" : "size", tt = function(e, t) {
                var n, r = Ze(t);
                if ("F" !== r) return e._i[r];
                for (n = e._f; n; n = n.n) if (n.k == t) return n;
            }, nt = {
                getConstructor: function(e, t, n, r) {
                    var i = e(function(e, o) {
                        Ue(e, i, t, "_i"), e._t = t, e._i = de(null), e._f = void 0, e._l = void 0, e[et] = 0, 
                        void 0 != o && Je(o, n, e[r], e);
                    });
                    return Le(i.prototype, {
                        clear: function() {
                            for (var e = $e(this, t), n = e._i, r = e._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), 
                            delete n[r.i];
                            e._f = e._l = void 0, e[et] = 0;
                        },
                        delete: function(e) {
                            var n = $e(this, t), r = tt(n, e);
                            if (r) {
                                var i = r.n, o = r.p;
                                delete n._i[r.i], r.r = !0, o && (o.n = i), i && (i.p = o), n._f == r && (n._f = i), 
                                n._l == r && (n._l = o), n[et]--;
                            }
                            return !!r;
                        },
                        forEach: function(e) {
                            $e(this, t);
                            for (var n, r = c(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f; ) for (r(n.v, n.k, this); n && n.r; ) n = n.p;
                        },
                        has: function(e) {
                            return !!tt($e(this, t), e);
                        }
                    }), d && Xe(i.prototype, "size", {
                        get: function() {
                            return $e(this, t)[et];
                        }
                    }), i;
                },
                def: function(e, t, n) {
                    var r, i, o = tt(e, t);
                    return o ? o.v = n : (e._l = o = {
                        i: i = Ze(t, !0),
                        k: t,
                        v: n,
                        p: r = e._l,
                        n: void 0,
                        r: !1
                    }, e._f || (e._f = o), r && (r.n = o), e[et]++, "F" !== i && (e._i[i] = o)), e;
                },
                getEntry: tt,
                setStrong: function(e, t, n) {
                    Ae(e, t, function(e, n) {
                        this._t = $e(e, t), this._k = n, this._l = void 0;
                    }, function() {
                        for (var e = this, t = e._k, n = e._l; n && n.r; ) n = n.p;
                        return e._t && (e._l = n = n ? n.n : e._t._f) ? "keys" == t ? Ie(0, n.k) : "values" == t ? Ie(0, n.v) : Ie(0, [ n.k, n.v ]) : (e._t = void 0, 
                        Ie(1));
                    }, n ? "entries" : "values", !n, !0), Ke(t);
                }
            }, rt = Array.isArray || function(e) {
                return "Array" == I(e);
            }, it = (pe("species"), b.f), ot = function(e, t, n) {
                for (var r, i = ee(e), o = N(i), s = c(t, n, 3), a = U(o.length), u = 0, l = void 0; a > u; u++) u in o && (r = o[u], 
                s(r, u, i));
                return l;
            }, st = (function(e, t, n, r, i, o) {
                var a = s[e], u = a, c = u && u.prototype, f = {};
                d && "function" == typeof u && c.forEach && !h(function() {
                    new u().entries().next();
                }) ? (u = t(function(t, n) {
                    Ue(t, u, e, "_c"), t._c = new a(), void 0 != n && Je(n, i, t.add, t);
                }), ot("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(e) {
                    var t = "add" == e || "set" == e;
                    e in c && !0 && E(u.prototype, e, function(n, r) {
                        if (Ue(this, u, e), !t && o && !l(n)) return "get" == e && void 0;
                        var i = this._c[e](0 === n ? 0 : n, r);
                        return t ? this : i;
                    });
                }), it(u.prototype, "size", {
                    get: function() {
                        return this._c.size;
                    }
                })) : (u = r.getConstructor(t, e, i, "add"), Le(u.prototype, n), Qe.NEED = !0), 
                me(u, e), f[e] = u, A(A.G + A.W + A.F, f), r.setStrong(u, e, i);
            }("Set", function(e) {
                return function() {
                    return e(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            }, {
                add: function(e) {
                    return nt.def($e(this, "Set"), e = 0 === e ? 0 : e, e);
                }
            }, nt), function(e, t) {
                var n = [];
                return Je(e, !1, n.push, n, t), n;
            });
            A(A.P + A.R, "Set", {
                toJSON: function() {
                    if ("Set" != We(this)) throw TypeError("Set#toJSON isn't generic");
                    return st(this);
                }
            }), A(A.S, "Set", {
                of: function() {
                    for (var e = arguments.length, t = new Array(e); e--; ) t[e] = arguments[e];
                    return new this(t);
                }
            }), A(A.S, "Set", {
                from: function(e) {
                    var t, n, r, i, o = arguments[1];
                    return u(this), (t = void 0 !== o) && u(o), void 0 == e ? new this() : (n = [], 
                    t ? (r = 0, i = c(o, arguments[2], 2), Je(e, !1, function(e) {
                        n.push(i(e, r++));
                    })) : Je(e, !1, n.push, n), new this(n));
                }
            });
            var at = a.Set, ut = n(i(function(e) {
                e.exports = {
                    default: at,
                    __esModule: !0
                };
            })), ct = n(i(function(e, t) {
                t.__esModule = !0, t.default = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                };
            })), lt = {
                f: pe
            }, ft = lt.f("iterator"), ht = i(function(e) {
                e.exports = {
                    default: ft,
                    __esModule: !0
                };
            });
            n(ht);
            var dt = b.f, pt = function(e) {
                var t = a.Symbol || (a.Symbol = {});
                "_" == e.charAt(0) || e in t || dt(t, e, {
                    value: lt.f(e)
                });
            }, vt = function(e) {
                var t = $(e), n = X.f;
                if (n) for (var r, i = n(e), o = Z.f, s = 0; i.length > s; ) o.call(e, r = i[s++]) && t.push(r);
                return t;
            }, yt = Q.concat("length", "prototype"), mt = {
                f: Object.getOwnPropertyNames || function(e) {
                    return K(e, yt);
                }
            }, gt = mt.f, _t = {}.toString, bt = "object" == (void 0 === o ? "undefined" : r(o)) && o && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(o) : [], wt = function(e) {
                try {
                    return gt(e);
                } catch (e) {
                    return bt.slice();
                }
            }, Et = {
                f: function(e) {
                    return bt && "[object Window]" == _t.call(e) ? wt(e) : gt(P(e));
                }
            }, St = Object.getOwnPropertyDescriptor, Tt = {
                f: d ? St : function(e, t) {
                    if (e = P(e), t = g(t, !0), m) try {
                        return St(e, t);
                    } catch (e) {}
                    if (T(e, t)) return w(!Z.f.call(e, t), e[t]);
                }
            }, Ot = Qe.KEY, At = Tt.f, Ct = b.f, It = Et.f, Nt = s.Symbol, xt = s.JSON, Pt = xt && xt.stringify, jt = pe("_hidden"), Rt = pe("toPrimitive"), kt = {}.propertyIsEnumerable, Lt = q("symbol-registry"), Ut = q("symbols"), Ft = q("op-symbols"), Dt = Object.prototype, Mt = "function" == typeof Nt, Bt = s.QObject, qt = !Bt || !Bt.prototype || !Bt.prototype.findChild, Vt = d && h(function() {
                return 7 != de(Ct({}, "a", {
                    get: function() {
                        return Ct(this, "a", {
                            value: 7
                        }).a;
                    }
                })).a;
            }) ? function(e, t, n) {
                var r = At(Dt, t);
                r && delete Dt[t], Ct(e, t, n), r && e !== Dt && Ct(Dt, t, r);
            } : Ct, Yt = function(e) {
                var t = Ut[e] = de(Nt.prototype);
                return t._k = e, t;
            }, Wt = Mt && "symbol" == r(Nt.iterator) ? function(e) {
                return "symbol" == (void 0 === e ? "undefined" : r(e));
            } : function(e) {
                return e instanceof Nt;
            }, zt = function e(t, n, r) {
                return t === Dt && e(Ft, n, r), f(t), n = g(n, !0), f(r), T(Ut, n) ? (r.enumerable ? (T(t, jt) && t[jt][n] && (t[jt][n] = !1), 
                r = de(r, {
                    enumerable: w(0, !1)
                })) : (T(t, jt) || Ct(t, jt, w(1, {})), t[jt][n] = !0), Vt(t, n, r)) : Ct(t, n, r);
            }, Gt = function(e, t) {
                f(e);
                for (var n, r = vt(t = P(t)), i = 0, o = r.length; o > i; ) zt(e, n = r[i++], t[n]);
                return e;
            }, Jt = function(e, t) {
                if (e = P(e), t = g(t, !0), e !== Dt || !T(Ut, t) || T(Ft, t)) {
                    var n = At(e, t);
                    return !n || !T(Ut, t) || T(e, jt) && e[jt][t] || (n.enumerable = !0), n;
                }
            }, Ht = function(e) {
                for (var t, n = It(P(e)), r = [], i = 0; n.length > i; ) T(Ut, t = n[i++]) || t == jt || t == Ot || r.push(t);
                return r;
            }, Kt = function(e) {
                for (var t, n = e === Dt, r = It(n ? Ft : P(e)), i = [], o = 0; r.length > o; ) !T(Ut, t = r[o++]) || n && !T(Dt, t) || i.push(Ut[t]);
                return i;
            };
            Mt || (Nt = function() {
                if (this instanceof Nt) throw TypeError("Symbol is not a constructor!");
                var e = W(arguments.length > 0 ? arguments[0] : void 0);
                return d && qt && Vt(Dt, e, {
                    configurable: !0,
                    set: function t(n) {
                        this === Dt && t.call(Ft, n), T(this, jt) && T(this[jt], e) && (this[jt][e] = !1), 
                        Vt(this, e, w(1, n));
                    }
                }), Yt(e);
            }, oe(Nt.prototype, "toString", function() {
                return this._k;
            }), Tt.f = Jt, b.f = zt, mt.f = Et.f = Ht, Z.f = function(e) {
                var t = kt.call(this, e = g(e, !0));
                return !(this === Dt && T(Ut, e) && !T(Ft, e)) && (!(t || !T(this, e) || !T(Ut, e) || T(this, jt) && this[jt][e]) || t);
            }, X.f = Kt, lt.f = function(e) {
                return Yt(pe(e));
            }), A(A.G + A.W + A.F * !Mt, {
                Symbol: Nt
            });
            for (var Qt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), $t = 0; Qt.length > $t; ) pe(Qt[$t++]);
            for (var Xt = $(pe.store), Zt = 0; Xt.length > Zt; ) pt(Xt[Zt++]);
            A(A.S + A.F * !Mt, "Symbol", {
                for: function(e) {
                    return T(Lt, e += "") ? Lt[e] : Lt[e] = Nt(e);
                },
                keyFor: function(e) {
                    if (!Wt(e)) throw TypeError(e + " is not a symbol!");
                    for (var t in Lt) if (Lt[t] === e) return t;
                },
                useSetter: function() {
                    qt = !0;
                },
                useSimple: function() {
                    qt = !1;
                }
            }), A(A.S + A.F * !Mt, "Object", {
                create: function(e, t) {
                    return void 0 === t ? de(e) : Gt(de(e), t);
                },
                defineProperty: zt,
                defineProperties: Gt,
                getOwnPropertyDescriptor: Jt,
                getOwnPropertyNames: Ht,
                getOwnPropertySymbols: Kt
            }), xt && A(A.S + A.F * (!Mt || h(function() {
                var e = Nt();
                return "[null]" != Pt([ e ]) || "{}" != Pt({
                    a: e
                }) || "{}" != Pt(Object(e));
            })), "JSON", {
                stringify: function(e) {
                    for (var t, n, r = [ e ], i = 1; arguments.length > i; ) r.push(arguments[i++]);
                    if (n = t = r[1], (l(t) || void 0 !== e) && !Wt(e)) return rt(t) || (t = function(e, t) {
                        if ("function" == typeof n && (t = n.call(this, e, t)), !Wt(t)) return t;
                    }), r[1] = t, Pt.apply(xt, r);
                }
            }), Nt.prototype[Rt] || E(Nt.prototype, Rt, Nt.prototype.valueOf), me(Nt, "Symbol"), 
            me(Math, "Math", !0), me(s.JSON, "JSON", !0), pt("asyncIterator"), pt("observable");
            var en = a.Symbol, tn = i(function(e) {
                e.exports = {
                    default: en,
                    __esModule: !0
                };
            });
            n(tn);
            var nn = i(function(e, t) {
                function n(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                t.__esModule = !0;
                var i = n(ht), o = n(tn), s = "function" == typeof o.default && "symbol" == r(i.default) ? function(e) {
                    return void 0 === e ? "undefined" : r(e);
                } : function(e) {
                    return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : void 0 === e ? "undefined" : r(e);
                };
                t.default = "function" == typeof o.default && "symbol" === s(i.default) ? function(e) {
                    return void 0 === e ? "undefined" : s(e);
                } : function(e) {
                    return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : void 0 === e ? "undefined" : s(e);
                };
            });
            n(nn);
            var rn = n(i(function(e, t) {
                t.__esModule = !0;
                var n = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }(nn);
                t.default = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== (void 0 === t ? "undefined" : (0, n.default)(t)) && "function" != typeof t ? e : t;
                };
            })), on = function(e, t) {
                if (f(e), !l(t) && null !== t) throw TypeError(t + ": can't set as prototype!");
            }, sn = {
                set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, n) {
                    try {
                        (n = c(Function.call, Tt.f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array);
                    } catch (e) {
                        t = !0;
                    }
                    return function(e, r) {
                        return on(e, r), t ? e.__proto__ = r : n(e, r), e;
                    };
                }({}, !1) : void 0),
                check: on
            };
            A(A.S, "Object", {
                setPrototypeOf: sn.set
            });
            var an = a.Object.setPrototypeOf, un = i(function(e) {
                e.exports = {
                    default: an,
                    __esModule: !0
                };
            });
            n(un), A(A.S, "Object", {
                create: de
            });
            var cn = a.Object, ln = function(e, t) {
                return cn.create(e, t);
            }, fn = i(function(e) {
                e.exports = {
                    default: ln,
                    __esModule: !0
                };
            });
            n(fn);
            var hn = n(i(function(e, t) {
                function n(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                t.__esModule = !0;
                var r = n(un), i = n(fn), o = n(nn);
                t.default = function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, 
                    o.default)(t)));
                    e.prototype = (0, i.default)(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (r.default ? (0, r.default)(e, t) : e.__proto__ = t);
                };
            })), dn = t.Protocals.CommandType, pn = t.Protocals.GenericCommand, vn = t.Protocals.AckCommand, yn = function(e) {
                return console.warn(e.message);
            }, mn = function(e) {
                function n(r, i, o) {
                    ct(this, n);
                    var s = rn(this, e.call(this));
                    return s._appId = r, s.id = i, s._connection = o, s._eventemitter = new t.EventEmitter(), 
                    s._querys = new ut(), s;
                }
                return hn(n, e), n.prototype._send = function(e) {
                    for (var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                    return (t = this._connection).send.apply(t, [ ie(e, {
                        appId: this._appId,
                        installationId: this.id,
                        service: 1
                    }) ].concat(r));
                }, n.prototype._open = function() {
                    return this._send(new pn({
                        cmd: dn.login
                    }));
                }, n.prototype.close = function() {
                    var e = this._eventemitter;
                    return e.emit("beforeclose"), this._send(new pn({
                        cmd: dn.logout
                    })).then(function() {
                        return e.emit("close");
                    });
                }, n.prototype.register = function(e) {
                    this._querys.add(e);
                }, n.prototype.deregister = function(e) {
                    var t = this;
                    this._querys.delete(e), setTimeout(function() {
                        t._querys.size || t.close().catch(yn);
                    }, 0);
                }, n.prototype._dispatchCommand = function(e) {
                    return e.cmd !== dn.data ? (this.emit("unhandledmessage", e), t.Promise.resolve()) : this._dispatchDataCommand(e);
                }, n.prototype._dispatchDataCommand = function(e) {
                    var t = e.dataMessage, n = t.ids, r = t.msg;
                    this.emit("message", r.map(function(e) {
                        var t = e.data;
                        return JSON.parse(t);
                    }));
                    var i = new pn({
                        cmd: dn.ack,
                        ackMessage: new vn({
                            ids: n
                        })
                    });
                    return this._send(i, !1).catch(yn);
                }, n;
            }(t.EventEmitter), gn = {
                name: "leancloud-realtime-plugin-live-query",
                onRealtimeCreate: function(e) {
                    e._liveQueryClients = {}, e.createLiveQueryClient = function(n) {
                        if (void 0 !== e._liveQueryClients[n]) return t.Promise.resolve(e._liveQueryClients[n]);
                        var r = e._open().then(function(t) {
                            var r = new mn(e._options.appId, n, t);
                            return t.on("reconnect", function() {
                                return r._open().then(function() {
                                    return r.emit("reconnect");
                                }, function(e) {
                                    return r.emit("reconnecterror", e);
                                });
                            }), r._eventemitter.on("beforeclose", function() {
                                delete e._liveQueryClients[r.id];
                            }, e), r._eventemitter.on("close", function() {
                                e._deregister(r);
                            }, e), r._open().then(function() {
                                return e._liveQueryClients[r.id] = r, e._register(r), r;
                            });
                        }).finally(function() {
                            e._deregisterPending && e._deregisterPending(r);
                        });
                        return e._liveQueryClients[n] = r, e._registerPending && e._registerPending(r), 
                        r;
                    };
                },
                beforeCommandDispatch: function(e, t) {
                    if (!e.installationId || 1 !== e.service) return !0;
                    var n = t._liveQueryClients[e.installationId];
                    return n ? n._dispatchCommand(e).catch(function(e) {
                        return console.warn(e);
                    }) : console.warn("Unexpected message received without any live client match: %O", e), 
                    !1;
                }
            };
            e.LiveQueryPlugin = gn, Object.defineProperty(e, "__esModule", {
                value: !0
            });
        });
    } ]);
});