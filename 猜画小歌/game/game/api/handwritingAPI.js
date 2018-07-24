function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
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
}(), n = require("../config.js"), r = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t;
}(require("./rpcLayer.js")), i = void 0, u = function() {
    function u() {
        return e(this, u), i || (i = this, this.count = 0), i;
    }
    return t(u, [ {
        key: "sendRequest",
        value: function(e, t) {
            this.count++;
            var i = u.getRequest(e, t);
            return new Promise(function(e, t) {
                r.invokeHttpRequest("handwritingAPI", n.config.handwriting_proxy_local, JSON.stringify(i), "POST", "", function(t) {
                    e(t.data);
                }, function(e) {
                    console.log(e), t("Could not call classifier");
                });
            });
        }
    } ], [ {
        key: "processSegments",
        value: function(e, t, n) {
            return i.sendRequest(e, {
                width: t,
                height: n
            });
        }
    }, {
        key: "getSimilarDrawings",
        value: function(e, t, n) {
            return e && 0 != e.length ? i.sendRequest(e, {
                similar_drawings: !0,
                width: t,
                height: n
            }) : Promise.reject("No segments");
        }
    }, {
        key: "getDrawingRequest",
        value: function(e, t, n) {
            return u.getRequest(e, {
                width: t,
                height: n
            });
        }
    }, {
        key: "getRequest",
        value: function(e, t) {
            var n = {
                input_type: 0,
                requests: [ {
                    language: t.similar_drawings ? "drawtogether-ink" : "drawtogether"
                } ]
            };
            return t.width && (n.requests[0].writing_guide = {
                width: t.width,
                height: t.height
            }), e && (n.requests[0].ink = e), t.ink_hash && (n.requests[0].ink_hash = t.ink_hash), 
            t.feedback && (n.requests[0].feedback = t.feedback, n.requests[0].select_type = "feedback"), 
            n;
        }
    } ]), u;
}();

exports.default = u, new u();