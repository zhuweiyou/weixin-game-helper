function e(s, a, i, l, c, d, p, f, g) {
    var m = void 0, v = u.get(s) || 0, y = Date.now(), w = function(e) {
        var t = Date.now() - y;
        console.log("[" + e.statusCode + "] Invoked " + s + ", latency=" + t + "ms, url=" + a), 
        d(e), v % o.config.rpc_perf_sample_rate == 0 && getApp().tdsdk.event({
            id: s,
            label: "success",
            params: {
                latency: t,
                url: a,
                method: l,
                dataLength: i ? i.length : 0
            }
        });
    }, h = function(t) {
        var n = Date.now() - y;
        console.log("Invoke " + s + " failed, latency=" + n + "ms, url=" + a, t), getApp().tdsdk.event({
            id: s,
            label: "fail",
            params: {
                latency: n,
                url: a,
                method: l,
                data: i,
                res: t,
                network: getApp().networkType,
                userInfo: getApp().userInfo,
                systemInfo: getApp().systemInfo
            }
        }), f -= 1, (g -= n) < 0 ? p("Request timed out!") : f < 0 ? p("Request exceeds max retry count!") : (console.log("Retrying request. Remaining retry count: ", f), 
        e(s, a, i, l, c, d, p, f, g));
    }, k = n(), I = wx.request({
        url: a,
        data: i,
        method: l,
        header: c || {
            "content-type": "application/json",
            userid: k,
            token: r.OtpUtils.hashEncrypt(k, r.OtpUtils.getCurrentMinuteInSeconds())
        },
        success: function(e) {
            t(e.statusCode) ? w(e) : h(e);
        },
        fail: h,
        complete: function(e) {
            clearTimeout(m), v++, u.set(s, v);
        }
    });
    return m = setTimeout(function() {
        I.abort(), p("Request timed out!");
    }, g), I;
}

function t(e) {
    return e.toString().startsWith("2");
}

function n() {
    if (void 0 === getApp().leancloudUserId) {
        for (var e = "", t = 0; t < 24; t++) e += a[s.random(a.length - 1)];
        return e;
    }
    return getApp().leancloudUserId;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.invokeHttpRequest = function(t, n, r, s, a, u, i) {
    var l = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : {}, c = l.retrying, d = void 0 !== c && c, p = l.timeoutPeriod, f = void 0 === p ? o.config.rpc_default_timeout_period : p, g = l.maxRetryCount, m = void 0 === g ? o.config.rpc_max_retry_count : g;
    return e(t, n, r, s, a, u, i, d ? m : 0, f);
}, exports.wxDownloadFile = function(e, o, s, a) {
    var i = u.get(e);
    i || (i = 0);
    var l = Date.now(), c = function(t) {
        var n = Date.now() - l;
        console.log("Download failed, latency=" + n + "ms, url=" + o, t), getApp().tdsdk.event({
            id: e,
            label: "fail",
            params: {
                latency: n,
                url: o,
                res: t,
                network: getApp().networkType,
                userInfo: getApp().userInfo,
                systemInfo: getApp().systemInfo
            }
        }), a(t);
    }, d = n();
    wx.downloadFile({
        url: o,
        header: {
            userid: d,
            token: r.OtpUtils.hashEncrypt(d, r.OtpUtils.getCurrentMinuteInSeconds())
        },
        success: function(n) {
            if (t(n.statusCode)) {
                var r = Date.now() - l;
                console.log("[" + n.statusCode + "] Download " + e + ", latency=" + r + "ms, url=" + o), 
                s(n), getApp().tdsdk.event({
                    id: e,
                    label: "success",
                    params: {
                        latency: r,
                        url: o,
                        dataLength: n ? n.length : 0
                    }
                });
            } else c();
        },
        fail: c,
        complete: function(t) {
            i++, u.set(e, i);
        }
    });
};

var o = require("../config.js"), r = require("../otpUtils.js"), s = require("../../libs/underscore/underscore.modified"), a = "abcdefghijklmnopqrstuvwxyz0123456789", u = new Map();