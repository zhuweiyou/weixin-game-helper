!function() {
    function e() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {}, a = e[t];
        e[t] = function(e) {
            a && a.call(this, e), n.call(this, e);
        };
    }
    var t = App, n = Page, a = require("./tdweapp-conf.js"), o = {}, i = !1, s = {
        deviceInfo: !0,
        networkInfo: !0,
        locationInfo: !0,
        userInfo: !0
    }, r = {
        sdkInfo: {
            version: "3",
            minorVersion: "0",
            build: "0",
            platform: "Weapp",
            partner: ""
        },
        appInfo: {
            versionCode: a.config.versionCode || "1",
            versionName: a.config.versionName || "1.0.0",
            installTime: 0,
            displayName: a.config.appName,
            appKey: a.config.appkey,
            uniqueId: a.config.wxAppid,
            channel: ""
        },
        deviceInfo: {
            type: "mobile",
            softwareConfig: {},
            hardwareConfig: {},
            deviceId: ""
        },
        networksInfo: [ {
            type: "wifi",
            available: !1,
            connected: !1
        }, {
            type: "cellular",
            available: !1,
            connected: !1,
            current: []
        }, {
            type: "unknown",
            available: !1,
            connected: !1
        } ],
        locationInfo: {},
        appContextInfo: {}
    }, c = {
        firstInit: !1,
        initTime: 0,
        sessionId: "",
        sessionStartTime: 0,
        appLaunchInfo: null,
        sendFailTimes: 0,
        Store: {
            set: function(e, t) {
                return wx.setStorageSync(e, t), !0;
            },
            get: function(e) {
                return wx.getStorageSync(e);
            },
            remove: function(e) {
                return wx.removeStorageSync(e), !0;
            }
        },
        random: function() {
            for (var e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890", t = e.length, n = "", a = 0; a < 12; a++) n += e.charAt(Math.floor(Math.random() * t));
            return n;
        },
        timestamp: function() {
            return new Date().getTime();
        },
        uuid: function() {
            return "weapp-" + this.timestamp() + "-" + this.random();
        },
        addStoreData: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = "TDSDK_EVENT_" + c.sessionId, n = c.Store.get(t);
            n = n && n.length ? n.concat(e) : e, c.Store.set(t, n), n.length >= 30 && (p.sessionContinue(), 
            p.startLoop());
        },
        eventHandle: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (e) {
                var n = getCurrentPages(), a = n[n.length - 1], o = {
                    eventId: e,
                    label: a.__route__,
                    count: 1,
                    startTime: c.timestamp()
                };
                if ("WeappShare" === e) {
                    o.shareTickets = t.shareTickets;
                    var i = JSON.parse(JSON.stringify(a.options));
                    i.user = c.deviceId, i.title = t.title, i.desc = t.desc, i.path = t.path, o.params = i;
                }
                c.addStoreData([ o ]);
            }
        },
        getCacheData: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = Object.keys(e), n = [], a = [];
            return t.length && t.forEach(function(t) {
                var o = e[t];
                o && o.sendFail && o.data && (n = n.concat(o.data), a.push(t));
            }), {
                data: n,
                keys: a
            };
        },
        sendCacheList: {},
        updateSendTime: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return e.forEach(function(n, a) {
                n.action && n.action.data && (e[a].action.data.start = t);
            }), e;
        },
        getRequestData: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = JSON.parse(JSON.stringify(e)), n = c.sendCacheList;
            if (Object.keys(n).length) {
                var a = c.getCacheData(n);
                t = t.concat(a.data), a.keys.forEach(function(e) {
                    return delete n[e];
                });
            }
            var o = t.length;
            if (o) {
                var i = [];
                o >= 30 ? (JSON.stringify(t) > 61440 && i.push(t.splice(0, o / 2)), i.push(t)) : i.push(t), 
                i.forEach(function(e) {
                    var t = c.timestamp();
                    n[t] = {
                        data: e,
                        sendFail: !1
                    };
                    var a = c.updateSendTime(e, c.timestamp());
                    c.request(t, a);
                });
            }
        },
        request: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            wx.request({
                url: "https://h5.udrig.com/app/wx/v1",
                data: JSON.stringify(t),
                method: "POST",
                success: function(t) {
                    200 === t.statusCode && (delete c.sendCacheList[e], c.sendFailTimes = 0, d.appIsHide || (clearTimeout(p.timeout), 
                    p.timeout = null, p.startLoop()));
                },
                fail: function() {
                    c.sendCacheList[e].sendFail = !0, c.sendFailTimes < 5 && c.sendFailTimes++;
                }
            });
        }
    }, u = {
        sendTime: 0,
        statusType: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = [], n = JSON.parse(JSON.stringify(o)), a = {
                domain: e.domain,
                name: e.name,
                data: e.data
            };
            n.ts = e.data.start || c.timestamp(), n.action = a, t.push(n), c.getRequestData(t);
        },
        dataType: function(e, t) {
            var n = this.getStoreList(e, t);
            c.getRequestData(n);
        },
        getEventType: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (e.pageEvent) return {
                domain: "page",
                name: "leave"
            };
            if (e.eventId) {
                var t = {};
                switch (e.eventId) {
                  case "WeappShare":
                    t = {
                        domain: "user",
                        name: "share"
                    };
                    break;

                  case "WeappPullDownRefresh":
                    t = {
                        domain: "page",
                        name: "pullDownRefresh"
                    };
                    break;

                  case "WeappReachBottom":
                    t = {
                        domain: "page",
                        name: "reachBottom"
                    };
                    break;

                  default:
                    t = {
                        domain: "appEvent",
                        name: ""
                    };
                }
                return t;
            }
        },
        getStoreList: function(e, t) {
            var n = this, a = [], i = e || c.sessionId, s = JSON.stringify(o), r = c.Store.get("TDSDK_EVENT_" + i);
            return r && r.length && (r.forEach(function(e) {
                var o = n.getEventType(e), i = JSON.parse(s);
                t && i.appContext && (i.appContext.sessionStartTime = t);
                var r = JSON.parse(JSON.stringify(e));
                r.pageEvent && delete r.pageEvent, r.status = 2;
                var u = {
                    domain: o.domain,
                    name: o.name,
                    data: r
                };
                i.ts = r.startTime ? r.startTime : c.timestamp(), i.action = u, a.push(i);
            }), c.Store.remove("TDSDK_EVENT_" + i)), a;
        }
    }, p = {
        timeout: null,
        init: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            c.appLaunchInfo = e, p.judgeRequireData(), p.getLocalParams(), p.getSystemInfo(), 
            p.getNetwork(), a.config.getLocation && p.getLocation(), a.config.getUserInfo && p.getUserInfo();
        },
        launchRequest: function() {
            var e = {
                first: !0
            };
            u.statusType({
                domain: "app",
                name: "init",
                data: e
            });
        },
        sessionStart: function(e) {
            var t = c.appLaunchInfo || {}, n = {
                status: 1,
                duration: 0,
                name: t.path,
                scene: t.scene,
                query: t.query || {},
                shareTicket: t.shareTicket
            };
            e && p.setNewSession(), n.start = c.Store.get("TDSDK_session_time") || c.timestamp(), 
            n.url = p.getUrl(n.name, n.query), u.statusType({
                domain: "session",
                name: "begin",
                data: n
            });
        },
        getUrl: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = Object.keys(t).sort(function(e, t) {
                return e > t;
            }) || [], a = n.length ? e + "?" : e;
            return n.forEach(function(e, n) {
                0 !== n && (a += "&"), a += e + "=" + t[e];
            }), a;
        },
        sessionContinue: function() {
            u.dataType();
        },
        sessionEnd: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = {
                status: 3,
                start: e.startTime,
                duration: e.duration
            };
            u.statusType({
                domain: "session",
                name: "end",
                data: t
            });
        },
        sendTmpSession: function() {
            p.sessionContinue(), p.startLoop();
        },
        startLoop: function() {
            p.timeout && (clearTimeout(p.timeout), p.timeout = null);
            var e = 3e3 * (c.sendFailTimes + 1);
            p.timeout = setTimeout(function() {
                p.sendTmpSession();
            }, e);
        },
        judgeRequireData: function() {
            r.appInfo.appKey || (r.appInfo.appKey = "", console.error("请填写您在TalkingData申请的App ID")), 
            r.appInfo.displayName || (r.appInfo.displayName = "appname", console.error("请填写您的小程序名称"));
        },
        getLocalParams: function() {
            var e = c.Store.get("TDSDK_initTime");
            e ? c.initTime = e : (c.initTime = c.timestamp(), c.Store.set("TDSDK_initTime", c.initTime), 
            c.firstInit = !0), r.appInfo.installTime = c.initTime;
            var t = c.Store.get("TDSDK_deviceId");
            t || (t = c.uuid(), c.Store.set("TDSDK_deviceId", t)), r.deviceInfo.deviceId = {
                tid: t
            };
            var n = c.appLaunchInfo.query || {}, a = n.TDChannelId ? n.TDChannelId : "";
            r.appInfo.channel = a, p.setNewSession();
        },
        setNewSession: function() {
            c.sessionId = c.uuid(), c.sessionStartTime = c.timestamp(), c.Store.set("TDSDK_session_time", c.sessionStartTime), 
            r.appContextInfo.sessionId = c.sessionId, r.appContextInfo.sessionStartTime = c.sessionStartTime;
        },
        getLaunchInfo: function() {
            var e = JSON.parse(JSON.stringify(p.launchOptions));
            return e.type = "appLaunch", e;
        },
        getAppProfile: function() {
            if (!i) {
                var e = [ "deviceInfo", "networkInfo" ], t = !0;
                a.config.getUserInfo && e.push("userInfo"), a.config.getLocation && e.push("locationInfo"), 
                e.forEach(function(e) {
                    s[e] && (t = !1);
                }), t && (o.device = r.deviceInfo, o.sdk = r.sdkInfo, o.networks = r.networksInfo, 
                o.locations = [ r.locationInfo ], o.appContext = r.appContextInfo, o.user = r.userInfo, 
                o.app = r.appInfo, i = !0, this.startRequest());
            }
        },
        startRequest: function() {
            c.firstInit && p.launchRequest(), this.sessionStart(), this.startLoop();
        },
        getLocation: function() {
            wx.getLocation({
                type: "wgs84",
                complete: function(e) {
                    if (e.longitude || e.latitude || e.horizontalAccuracy || e.verticalAccuracy) {
                        var t = r.locationInfo;
                        t.lng = e.longitude, t.lat = e.latitude, t.hAccuracy = e.horizontalAccuracy, t.vAccuracy = e.verticalAccuracy, 
                        t.speed = e.speed, t.altitude = e.altitude, t.ts = new Date().getTime();
                    }
                    s.locationInfo = !1, p.getAppProfile();
                }
            });
        },
        getNetwork: function() {
            wx.getNetworkType({
                complete: function(e) {
                    var t = r.networksInfo, n = e.networkType;
                    "wifi" === n ? (t[0].available = !0, t[0].connected = !0) : "unknown" === n ? (t[2].available = !0, 
                    t[2].connected = !0) : "none" !== n && (t[1].available = !0, t[1].connected = !0, 
                    t[1].current.push({
                        type: n
                    })), s.networkInfo = !1, p.getAppProfile();
                }
            });
        },
        getSystemInfo: function() {
            wx.getSystemInfo({
                complete: function(e) {
                    if (e.model || e.system || e.SDKVersion) {
                        var t = {
                            model: e.model,
                            pixel: e.screenWidth + "*" + e.screenHeight + "*" + e.pixelRatio,
                            densityDpi: e.pixelRatio,
                            brand: e.brand
                        }, n = {
                            os: e.system,
                            local: e.language,
                            osVersionCode: e.version,
                            timezone: -new Date().getTimezoneOffset() / 60,
                            mpVersion: e.SDKVersion
                        };
                        r.deviceInfo.hardwareConfig = t, r.deviceInfo.softwareConfig = n;
                    }
                    s.deviceInfo = !1, p.getAppProfile();
                }
            });
        },
        getUserInfo: function() {
            wx.getUserInfo({
                complete: function(e) {
                    if (e.userInfo) {
                        var t = {
                            name: e.userInfo.nickName,
                            gender: e.userInfo.gender
                        };
                        r.deviceInfo.softwareConfig.language = e.userInfo.language, r.appContextInfo.account = t;
                    }
                    s.userInfo = !1, p.getAppProfile();
                }
            });
        }
    }, d = {
        isHide2Show: !1,
        appIsHide: !1,
        show: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (d.appIsHide = !1, d.getlastTmpData(), d.isHide2Show) {
                var t = c.Store.get("TDSDK_TMP_time_end_" + c.sessionId);
                e.scene !== c.appLaunchInfo.scene ? (c.appLaunchInfo = e, d.sessionRestart(t)) : c.timestamp() - t > 3e4 ? d.sessionRestart(t) : c.Store.remove("TDSDK_TMP_time_end_" + c.sessionId), 
                d.isHide2Show = !1, p.startLoop();
            }
        },
        sessionRestart: function(e) {
            var t = c.Store.get("TDSDK_TMP_time_start_" + c.sessionId), n = {
                startTime: t,
                duration: parseInt((e - t) / 1e3)
            };
            p.sessionEnd(n), c.Store.remove("TDSDK_TMP_time_start_" + c.sessionId), c.Store.remove("TDSDK_TMP_time_end_" + c.sessionId), 
            c.Store.remove("TDSDK_session_time"), p.sessionStart(!0);
        },
        hide: function() {
            d.appIsHide = !0, clearTimeout(p.timeout), p.timeout = null, p.sessionContinue(), 
            d.isHide2Show = !0, c.Store.set("TDSDK_TMP_time_start_" + c.sessionId, c.Store.get("TDSDK_session_time")), 
            c.Store.set("TDSDK_TMP_time_end_" + c.sessionId, c.timestamp());
        },
        getlastTmpData: function() {
            var e = [], t = wx.getStorageInfoSync().keys || [];
            t && t.length && (t = t.filter(function(e) {
                return e.indexOf("TDSDK_EVENT") > -1;
            })), t && t.length && t.forEach(function(t) {
                var n = {};
                t.split("_")[2], n.id = t.split("_")[2], n.time = n.id.split("-")[1], e.push(n);
            }), d.sendLastTmpData(e);
        },
        sendLastTmpData: function() {
            (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach(function(e) {
                u.dataType(e.id, e.time);
            });
        }
    }, f = {
        event: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (e.id) {
                var t = {};
                t.eventId = e.id, t.label = e.label || "", t.count = e.count || 1, t.params = e.params, 
                t.startTime = c.timestamp(), c.addStoreData([ t ]);
            }
        },
        share: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            c.eventHandle("WeappShare", e);
        },
        pullDownRefresh: function() {
            c.eventHandle("WeappPullDownRefresh");
        },
        reachBottom: function() {
            c.eventHandle("WeappReachBottom");
        }
    };
    App = function(n) {
        var a = {
            onLaunch: p.init,
            onShow: d.show,
            onHide: d.hide
        };
        Object.keys(a).forEach(function(t) {
            e(n, t, a[t]);
        }), n.tdsdk = f, t(n);
    };
    var l = {
        curPagePath: "",
        refer: "",
        pageTime: 0,
        pageQuery: {},
        show: function() {
            var e = getCurrentPages(), t = e[e.length - 1];
            "" !== l.curPagePath && (l.refer = l.curPagePath), l.curPagePath = t.__route__, 
            l.pageTime = c.timestamp(), l.pageQuery = t.options;
        },
        hide: function() {
            var e = [ {
                name: l.curPagePath,
                from: l.refer || "",
                query: l.pageQuery,
                scene: c.appLaunchInfo.scene,
                duration: parseInt((c.timestamp() - l.pageTime) / 1e3),
                startTime: l.pageTime,
                pageEvent: !0
            } ];
            c.addStoreData(e);
        }
    };
    Page = function(t) {
        var o = {
            onShow: l.show,
            onHide: l.hide,
            onUnload: l.hide
        };
        a.config.autoOnPullDownRefresh && (o.onPullDownRefresh = f.pullDownRefresh), a.config.autoOnReachBottom && (o.onReachBottom = f.reachBottom), 
        Object.keys(o).forEach(function(n) {
            e(t, n, o[n]);
        }), n(t);
    };
}();