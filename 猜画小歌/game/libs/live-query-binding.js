function r(r) {
    if (Array.isArray(r)) {
        for (var e = 0, n = Array(r.length); e < r.length; e++) n[e] = r[e];
        return n;
    }
    return Array.from(r);
}

module.exports = function(e, n, t) {
    var o = [].concat(r(n)), f = function(r) {
        return o = o.filter(function(e) {
            return e.id !== r.id;
        }), t(o);
    }, u = function(e) {
        var n = !1;
        return o = o.map(function(r) {
            return r.id === e.id ? (n = !0, e) : r;
        }), n || (o = [ e ].concat(r(o))), t(o);
    };
    return e.on("create", u), e.on("update", u), e.on("enter", u), e.on("leave", f), 
    e.on("delete", f), function() {
        e.off("create", u), e.off("update", u), e.off("enter", u), e.off("leave", f), e.off("delete", f);
    };
};