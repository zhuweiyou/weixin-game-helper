function e(e) {
    return e[r.random(e.length - 1)];
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.shuffle = function(e) {
    for (var t = e.length; t; ) {
        var o = r.random(t--), n = [ e[t], e[o] ];
        e[o] = n[0], e[t] = n[1];
    }
}, exports.toParamStr = function(e) {
    return "?" + Object.keys(e).map(function(t) {
        return [ t, e[t] ].map(encodeURIComponent).join("=");
    }).join("&");
}, exports.fancyTimeFormat = function(e) {
    var t = ~~((e = Math.round(e)) % 3600 / 60), r = e % 60, o = "";
    return o += ~~(e / 3600) + ":" + (t < 10 ? "0" : ""), o += t + ":" + (r < 10 ? "0" : ""), 
    o += "" + r;
}, exports.textTimeFormat = function(e) {
    var t = ~~((e = Math.round(e)) / 3600), r = ~~(e % 3600 / 60), o = e % 60, n = "";
    return t > 0 && (n += t + "时"), r > 0 && (n += r + "分"), o > 0 && (n += o + "秒"), 
    n;
}, exports.validateGoogleMail = function(e) {
    return void 0 != e && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@google.com$/.test(e.toLowerCase());
}, exports.validateAllNumbers = function(e) {
    return void 0 != e && /^\d+$/.test(e.toLowerCase());
}, exports.getWindowSize = function() {
    try {
        return {
            w: wx.getSystemInfoSync().windowWidth,
            h: wx.getSystemInfoSync().windowHeight
        };
    } catch (e) {
        console.log(e);
    }
    return {
        w: 300,
        h: 300
    };
}, exports.pickRandom = e, exports.pickRandomShareTemplate = function(r, o) {
    var n = e(t.config[r]);
    return {
        template: n,
        message: t.config.shareTemplates[n].replace("{}", o)
    };
}, exports.getRandomInt = function(e, t) {
    return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e)) + e;
}, exports.getLevelStr = function(e) {
    return e - 1 < t.config.levelNames.length ? "Lv. " + e + " " + t.config.levelNames[e - 1] : "Lv. " + e + " 超神";
}, exports.getLevel = function(e) {
    for (var t = n.getArrayValue("LEVEL_LADDER", []), r = 1, o = 0, a = 0; a < t.length && (o += t[a]) <= e; a++) r += 1;
    return r;
}, exports.getThemeSchemeFromRoundCount = function(e) {
    var t = n.getArrayValue("LEVEL_THEME_ACCUMULATED_LADDER", []);
    return e < t[0] ? "underwater" : e < t[1] ? "land" : e < t[2] ? "to-outerspace" : e < t[3] ? "outerspace" : (console.log('Round count exceeds maximum! Return default theme "underwater"'), 
    "underwater");
}, exports.getGStaticUrl = function(e) {
    return "https://www.gstatic.com/qilin/drawtogether/" + e;
}, exports.AVObjectfromJson = function(e, t) {
    var r = o.parseJSON(e), n = r.createdAt, a = r.updatedAt, u = r.objectId;
    delete r.createdAt, delete r.updatedAt, delete r.objectId;
    var i = t(r);
    return i.id = u, n && (i.createdAt = n), a && (i.updatedAt = a), u && (i.id = u), 
    i;
};

var t = require("config.js"), r = require("../libs/underscore/underscore.modified"), o = require("../libs/av-live-query-weapp-min"), n = require("config/configManager");