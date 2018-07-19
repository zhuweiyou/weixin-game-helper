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
}(), r = function(e) {
    if (e && e.__esModule) return e;
    var n = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    return n.default = e, n;
}(require("./rpcLayer.js")), t = require("../config.js"), o = require("../../libs/av-live-query-weapp-min"), u = void 0, i = function() {
    function i() {
        return e(this, i), u || (u = this), u;
    }
    return n(i, null, [ {
        key: "anonymizeMe",
        value: function() {
            return new Promise(function(e, n) {
                var u = o.User.current();
                null != u ? (console.log("current user", u), r.invokeHttpRequest("anonymizeuserAPI", t.config.anonymizeuser_api, {
                    user_id: u.getObjectId(),
                    session_token: u.getSessionToken()
                }, "POST", "", function(r) {
                    200 == r.statusCode ? e(!0) : n(r);
                }, function(e) {
                    n(e);
                })) : n("Cannot get current user");
            });
        }
    } ]), i;
}();

exports.default = i, new i();