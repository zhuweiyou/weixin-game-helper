function e(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = function() {
    function e(e, n) {
        for (var t = 0; t < n.length; t++) {
            var r = n[t];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(n, t, r) {
        return t && e(n.prototype, t), r && e(n, r), n;
    };
}(), t = require("../libs/underscore/underscore.modified"), r = function() {
    function r() {
        e(this, r), this.listeners = {};
    }
    return n(r, [ {
        key: "addListener",
        value: function(e, n) {
            t.has(this.listeners, e) || (this.listeners[e] = []), this.listeners[e].push(n);
        }
    }, {
        key: "isFunction",
        value: function(e) {
            return "function" == typeof e || !1;
        }
    }, {
        key: "clearListener",
        value: function(e) {
            this.listeners[e] = [];
        }
    }, {
        key: "removeListener",
        value: function(e, n) {
            var t = this, r = this.listeners[e], i = void 0;
            return !!(r && r.length && (i = r.reduce(function(e, r, i) {
                return t.isFunction(r) && r === n ? e = i : e;
            }, -1)) > -1) && (r.splice(i, 1), this.listeners[e] = r, !0);
        }
    }, {
        key: "emit",
        value: function(e) {
            for (var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
            var i = this.listeners[e];
            return !(!i || !i.length) && (i.forEach(function(e) {
                e.apply(void 0, t);
            }), !0);
        }
    } ]), r;
}();

exports.default = r;