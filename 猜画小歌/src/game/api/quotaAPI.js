function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
    };
}(), n = require("../config.js"), o = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t;
}(require("./rpcLayer.js")), r = void 0, u = function() {
    function u() {
        return e(this, u), r || (r = this, this.count = 0), r;
    }
    return t(u, [ {
        key: "sendRequest",
        value: function(e) {
            return new Promise(function(t, r) {
                o.invokeHttpRequest("quotaAPI", n.config.quota_api, {
                    api: e,
                    bucket: "app"
                }, "GET", "", function(e) {
                    console.log("Succeed to get quota", e), t(e);
                }, function(e) {
                    console.log("Failed to get quota", e), r(e);
                });
            });
        }
    } ], [ {
        key: "checkAppPermitQuota",
        value: function() {
            return u.checkQuota("QUOTA_APP_PERMITS");
        }
    }, {
        key: "checkQuota",
        value: function(e) {
            return r.sendRequest(e);
        }
    } ]), u;
}();

exports.default = u, new u();