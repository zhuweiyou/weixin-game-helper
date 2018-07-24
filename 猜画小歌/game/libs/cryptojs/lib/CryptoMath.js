!function() {
    var t = ("undefined" == typeof window ? require("./Crypto").Crypto : window.Crypto).util;
    t.u32 = function(t) {
        return t >>> 0;
    }, t.add = function() {
        for (var t = this.u32(arguments[0]), u = 1; u < arguments.length; u++) t = this.u32(t + this.u32(arguments[u]));
        return t;
    }, t.mult = function(t, u) {
        return this.add((4294901760 & u) * t, (65535 & u) * t);
    }, t.gt = function(t, u) {
        return this.u32(t) > this.u32(u);
    }, t.lt = function(t, u) {
        return this.u32(t) < this.u32(u);
    };
}();