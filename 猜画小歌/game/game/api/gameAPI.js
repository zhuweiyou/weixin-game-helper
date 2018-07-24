function e(e) {
    var t = g.filter(e, function(e) {
        return 1 == e.recognized;
    }).length, n = e.reduce(function(e, t) {
        return t.duration + e;
    }, 0);
    return {
        duration: Number(n).toFixed(2),
        round_pass: t
    };
}

function t() {
    var e = a.getFloatValue(a.RECORD_SAMPLE_PERCENTAGE, 0);
    return Math.random() < e;
}

function n(t) {
    return {
        detailed: t,
        total: e(t)
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.submitRounds = function(e, n, i, s) {
    return new Promise(function(u, a) {
        i && 0 !== i.length || u(), r.invokeHttpRequest("gameAPI", o.config.game_api + "/submitRounds", {
            saveRecords: t(),
            rounds: i,
            playHistoryId: e.id,
            competitionId: n.id,
            userId: s.id,
            session_token: s.getSessionToken()
        }, "POST", "", function(e) {
            u(e);
        }, function(e) {
            console.log("Send endless round result failed. res", e), a(e);
        }, {
            retrying: !0,
            timeoutPeriod: 1e4
        });
    });
}, exports.sendEndlessCompetitionResult = function(e, s, u, a, l) {
    var d = n(s);
    e.set("result", d);
    var f = i.Object.createWithoutData("Competition", e.id);
    return f.set("result", d), new Promise(function(e, n) {
        r.invokeHttpRequest("gameAPI", o.config.game_api + "/end", {
            saveRecords: t(),
            playHistoryId: a,
            userId: l.id,
            competition: f.toJSON(),
            unsavedRoundStartIdx: u,
            session_token: l.getSessionToken()
        }, "POST", "", function(t) {
            console.log("GameAPI end res", t), e(c.fromJson(t.data));
        }, function(e) {
            console.log("Send endless competition result failed. res", e), n(e);
        }, {
            retrying: !0,
            timeoutPeriod: 1e4
        });
    });
}, exports.startEndlessGame = function(e) {
    return new Promise(function(t, n) {
        r.invokeHttpRequest("gameAPI", o.config.game_api + "/start", e, "POST", "", function(e) {
            console.log("GameAPI start res", e), t(s.fromJson(e.data));
        }, function(e) {
            console.log("GameAPI start failed", e), n(e);
        }, {
            retrying: !0,
            timeoutPeriod: 5e3
        });
    });
}, exports.calFinalResult = e, exports.prepareResult = n, exports.sendCompetitionResult = function(e, t, o) {
    console.log("role is: " + o), e.set(o, n(t)), e.save();
}, exports.sendFeedBack = function(e, t, n) {
    console.log("Start send feedback, imagePath: " + n);
    var o = new f();
    return o.set("user", e), o.set("comment", t), void 0 != n && "" != n ? new i.File("feedback", {
        blob: {
            uri: n
        }
    }).save().then(function(e) {
        o.set("image", e), o.save(), console.log("save image successful");
    }, function(e) {
        console.error("Failed to create new object, with error message: " + e.message);
    }) : (o.save(), console.log("save without image successful")), o;
}, exports.fetchCompetition = function(e) {
    return new i.Query(s).include("user").include("creator").include("challenger").get(e);
}, exports.fetchCollections = function(e) {
    return new i.Query(u).equalTo("user", e).limit(400).exists("image").find();
}, exports.fetchInvitedCompetition = function(e, t) {
    return new i.Query(s).include("user").equalTo("user", t).equalTo("invitedCompetition", e).find();
}, exports.fetchShareResult = function(e) {
    return new i.Query(d).include("user").include("competition").get(e);
}, exports.fetchRecord = function(e) {
    return new i.Query(l).include("user").get(e);
}, exports.fetchGallery = function(e, t, n) {
    var s = a.getIntValue("FETCH_GALLERY_PAGE_SIZE", 20);
    if (a.configEnabled(a.FETCH_GALLERY_FROM_API_SERVER)) return new Promise(function(n, i) {
        r.invokeHttpRequest("drawingsAPI", o.config.drawings_api, {
            skip: t * s,
            limit: s,
            word: e
        }, "GET", "", function(e) {
            n(e.data);
        }, function(e) {
            i(e);
        }, {
            retrying: !0,
            timeoutPeriod: 1e4
        });
    });
    var u = a.getIntValue("INAPPROP_REPORT_THRESHOLD", 3), c = a.getIntValue("COLLECTION_LOOK_BACK_MS") || 3e5;
    return i.Query.and(new i.Query(l).equalTo("word", e).equalTo("recognized", !0).greaterThan("updatedAt", new Date(Date.now() - c)).notEqualTo("image", "[]").notEqualTo("flags.user_deleted", !0), i.Query.or(new i.Query(l).lessThan("flags.reported", u), new i.Query(l).equalTo("flags.reported", null))).ascending("score").exists("image").skip(t * s).limit(s).find();
}, exports.getOrCreate = function(e, t, n) {
    return new i.Query(e).equalTo(t, n).find().then(function(o) {
        return new Promise(function(r, i) {
            if (0 == o.length) {
                var s = new e();
                s.set(t, n), s.fetchWhenSave(!0), s.save().then(function(e) {
                    r(e);
                }).catch(i);
            } else r(o[0]);
        });
    });
}, exports.reportDrawing = function(e, t) {
    return new Promise(function(n, i) {
        r.invokeHttpRequest("reportDrawing", o.config.reportdrawing_api, {
            record_id: e,
            session_token: t.getSessionToken()
        }, "POST", "", function(e) {
            if (200 != e.statusCode) return console.log("reportDrawing failed. res", e), void i(e);
            n("ok");
        }, function(e) {
            console.log("reportDrawing failed. res", e), i(e);
        });
    });
};

var o = require("../config.js"), r = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t;
}(require("./rpcLayer.js")), i = require("../../libs/av-live-query-weapp-min"), s = require("../models/competition"), u = require("../models/collection"), a = require("../config/configManager"), c = require("../models/playHistory"), l = require("../models/record"), d = require("../models/shareResult"), f = require("../models/feedback"), g = require("../../libs/underscore/underscore.modified");