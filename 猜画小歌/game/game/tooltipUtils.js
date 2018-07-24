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
}(), t = {
    collection: 1,
    endcard: 1
}, r = function() {
    function r() {
        e(this, r);
    }
    return n(r, null, [ {
        key: "shouldShow",
        value: function(e) {
            return (wx.getStorageSync(e) || 0) < t[e];
        }
    }, {
        key: "tickCount",
        value: function(e) {
            var n = wx.getStorageSync(e) || 0;
            n < t[e] && wx.setStorageSync(e, n + 1);
        }
    } ]), r;
}();

exports.default = r;