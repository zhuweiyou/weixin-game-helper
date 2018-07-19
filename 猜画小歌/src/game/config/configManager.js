function e(e) {
    if (e && e.__esModule) return e;
    var n = {};
    if (null != e) for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
    return n.default = e, n;
}

function n(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

var o = function() {
    function e(e, n) {
        for (var o = 0; o < n.length; o++) {
            var i = n[o];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(n, o, i) {
        return o && e(n.prototype, o), i && e(n, i), n;
    };
}(), i = e(require("../api/wordAPI.js")), t = e(require("../config.js")), r = require("../../common/initState.js"), a = require("../../libs/av-live-query-weapp-min"), u = require("config"), l = require("../../libs/underscore/underscore.modified"), c = void 0, g = "PROD_ENV", f = {
    DEV_ENV: "a9yUPzPpWpXD1VF7MDlVVATJ",
    BETA_ENV: "8ISXYfPK2oHROlLSaA2yGahK",
    PROD_ENV: "8ISXYfPK2oHROlLSaA2yGahK"
}, s = {
    DEV_ENV: "CkIsMGVgawrrYyDcLxWknqCn-gzGzoHsz",
    BETA_ENV: "nq2kp0q0egF8sKdimIyH2etY-gzGzoHsz",
    PROD_ENV: "nq2kp0q0egF8sKdimIyH2etY-gzGzoHsz"
}, E = function() {
    function e() {
        return n(this, e), this.config = {}, this.env = g, c || (c = this, this.hasLocalConfig = this.hasLocalConfig(), 
        this.hasLocalConfig && this.initFromLocal()), c;
    }
    return o(e, [ {
        key: "updateWellKnownServerAddress",
        value: function() {
            "PROD_ENV" === this.env || "BETA_ENV" === this.env ? (t.config.quota_api = "https://drawtogether.googleminiapps.cn/quota", 
            t.config.login_verification_api = "https://drawtogether.googleminiapps.cn/loginVerification") : (t.config.quota_api = "https://prod.api.drawtogether.watchparty.cn/quota", 
            t.config.login_verification_api = "https://drawtogether.googleminiapps.cn/loginVerification");
        }
    }, {
        key: "_loadConfig",
        value: function() {
            var e = this;
            return new Promise(function(n, o) {
                e.loadRemoteConfig().then(function(o) {
                    e.updateServerAddress();
                    var i = o[0], t = o[1];
                    if (!e.hasLocalConfig) return console.log("======Config initialized======"), void e.syncLocalStorage().then(function() {
                        n();
                    });
                    i ? (console.log("======Config unchanged======"), n()) : (console.log("======Config updated======"), 
                    e.config.WORD_REVISION.intValue !== t.WORD_REVISION.intValue ? e.syncLocalStorage().then(function() {
                        console.log("=======Local word storage synced======"), n();
                    }) : n());
                }).catch(function(e) {
                    console.log("========Load config failed========", e), o({
                        code: r.InitFailAction.LOAD_CONFIG,
                        cause: e
                    });
                });
            });
        }
    }, {
        key: "updateServerAddress",
        value: function() {
            var e = this.getStringValue("SERVER_ADDRESS");
            t.config.handwriting_proxy_local = e + "/handwriting", t.config.generate_image_api = e + "/genpic", 
            t.config.generate_share_card_api = e + "/genShareCardPic", t.config.game_api = e + "/endlessGame", 
            t.config.top100_api = e + "/top100", t.config.user_rank_api = e + "/userRank", t.config.anonymizeuser_api = e + "/anonymizeuser", 
            t.config.reportdrawing_api = e + "/reportDrawing", t.config.drawings_api = e + "/drawings";
        }
    }, {
        key: "syncLocalStorage",
        value: function() {
            return console.log("======Syncing local word cache======"), new Promise(function(e, n) {
                i.fetchWords().then(function(n) {
                    var o = l.object(l.map(n, function(e) {
                        return [ e.get("word"), e ];
                    }));
                    wx.setStorageSync("words", o), e();
                });
            });
        }
    }, {
        key: "configEnabled",
        value: function(e) {
            return e in this.config && !0 === this.config[e].booleanValue;
        }
    }, {
        key: "getArrayValue",
        value: function(e, n) {
            return e in this.config ? this.config[e].arrayValue : n;
        }
    }, {
        key: "getStringValue",
        value: function(e, n) {
            return e in this.config ? this.config[e].stringValue : n;
        }
    }, {
        key: "getIntValue",
        value: function(e, n) {
            return e in this.config ? this.config[e].intValue : n;
        }
    }, {
        key: "getFloatValue",
        value: function(e, n) {
            return e in this.config ? this.config[e].floatValue : n;
        }
    }, {
        key: "hasLocalConfig",
        value: function() {
            return !!wx.getStorageSync("config");
        }
    }, {
        key: "initFromLocal",
        value: function() {
            this.config = wx.getStorageSync("config"), console.log("load config from local-storage", this.config);
        }
    }, {
        key: "identicalConfig",
        value: function(e) {
            if (!this.config || !e) return !1;
            if (l.size(this.config) !== l.size(e)) return !1;
            for (var n in this.config) {
                if (!(n in e)) return !1;
                if (this.config[n].stringValue !== e[n].stringValue || this.config[n].booleanValue !== e[n].booleanValue || this.config[n].intValue !== e[n].intValue || !this.arrayOrderedEquals(this.config[n].arrayValue, e[n].arrayValue)) return !1;
            }
            return !0;
        }
    }, {
        key: "loadRemoteConfig",
        value: function() {
            var e = this;
            return new Promise(function(n, o) {
                new a.Query(u).limit(100).find().then(function(o) {
                    var i = {};
                    l.map(o, function(e) {
                        i[e.get("name")] = e.toJSON();
                    });
                    var t = e.identicalConfig(i), r = {};
                    for (var a in e.config) r[a] = e.config[a];
                    e.config = i, wx.setStorageSync("config", i), console.log("Remote config:", i), 
                    n([ t, r ]);
                }).catch(o);
            });
        }
    }, {
        key: "arrayOrderedEquals",
        value: function(e, n) {
            if (void 0 === e && void 0 === n) return !0;
            if (void 0 === e && void 0 !== n) return !1;
            if (void 0 !== e && void 0 === n) return !1;
            if (e.length !== n.length) return !1;
            for (var o = 0; o < e.length; o++) if (e[o] !== n[o]) return !1;
            return !0;
        }
    } ], [ {
        key: "setEnv",
        value: function(e) {
            c.env = e, c.updateWellKnownServerAddress();
        }
    }, {
        key: "getLeanCloudAppIdAndKey",
        value: function() {
            return {
                appId: s[c.env],
                appKey: f[c.env]
            };
        }
    }, {
        key: "getEnv",
        value: function() {
            return c.env;
        }
    }, {
        key: "reset",
        value: function() {
            c && (c.hasLocalConfig = !1, c.config = void 0);
        }
    }, {
        key: "loadConfig",
        value: function() {
            return c._loadConfig();
        }
    }, {
        key: "configEnabled",
        value: function(e) {
            return c.configEnabled(e);
        }
    }, {
        key: "getStringValue",
        value: function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return c.getStringValue(e, n);
        }
    }, {
        key: "getIntValue",
        value: function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return c.getIntValue(e, n);
        }
    }, {
        key: "getFloatValue",
        value: function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return c.getFloatValue(e, n);
        }
    }, {
        key: "getArrayValue",
        value: function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return c.getArrayValue(e, n);
        }
    } ]), e;
}();

new E(), module.exports = E, module.exports.EMIT_HANDWRITING_BY_POINTS_NUMBER_EXPERIMENT_NAME = "EMIT_HANDWRITING_BY_POINTS_NUMBER", 
module.exports.VS_MODE_EXPERIMENT_NAME = "VS_MODE", module.exports.GLOBAL_LEADERBOARD_EXPERIMENT_NAME = "GLOBAL_LEADERBOARD", 
module.exports.WORD_REVISION = "WORD_REVISION", module.exports.SERVER_ADDRESS = "SERVER_ADDRESS", 
module.exports.DOGFOOD_INVITATION_LOGIN = "DOGFOOD_INVITATION_LOGIN", module.exports.DEV_ENV = "DEV_ENV", 
module.exports.PROD_ENV = "PROD_ENV", module.exports.BETA_ENV = "BETA_ENV", module.exports.LEANCLOUD_LEADERBOARD = "LEANCLOUD_LEADERBOARD", 
module.exports.LEANCLOUD_LEADERBOARD_UPLOAD = "LEANCLOUD_LEADERBOARD_UPLOAD", module.exports.FETCH_GALLERY_FROM_API_SERVER = "FETCH_GALLERY_FROM_API_SERVER", 
module.exports.RECORD_SAMPLE_PERCENTAGE = "RECORD_SAMPLE_PERCENTAGE";