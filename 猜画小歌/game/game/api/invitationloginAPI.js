function e(e, i) {
    if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = function() {
    function e(e, i) {
        for (var n = 0; n < i.length; n++) {
            var r = i[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(i, n, r) {
        return n && e(i.prototype, n), r && e(i, r), i;
    };
}(), n = require("../config.js"), r = function(e) {
    if (e && e.__esModule) return e;
    var i = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
    return i.default = e, i;
}(require("./rpcLayer.js")), t = function() {
    function t() {
        e(this, t);
    }
    return i(t, null, [ {
        key: "verify",
        value: function(e) {
            return new Promise(function(i, n) {
                r.invokeHttpRequest("invitationLoginAPI", e, "", "GET", "", function(e) {
                    console.log("success: " + e.data), i(e.data);
                }, function(e) {
                    console.log("fail: " + e), n("Failed to invoke invitationLoginAPI.");
                });
            });
        }
    }, {
        key: "verifyLoggedIn",
        value: function(e) {
            var i = n.config.login_verification_api + "?verificationType=verifyLoggedIn&userObjectId=" + e;
            return this.verify(i);
        }
    }, {
        key: "sendEmail",
        value: function(e, i) {
            var r = n.config.login_verification_api + "?verificationType=sendEmail&userObjectId=" + e + "&useremail=" + i;
            return this.verify(r);
        }
    }, {
        key: "verifyInvitationCode",
        value: function(e, i) {
            var r = n.config.login_verification_api + "?verificationType=verifyCode&userObjectId=" + e + "&invitationCode=" + i;
            return this.verify(r);
        }
    } ]), t;
}();

exports.default = t, new t();