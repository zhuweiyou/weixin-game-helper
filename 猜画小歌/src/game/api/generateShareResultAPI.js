function e(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t;
}

function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = function() {
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
}(), o = require("../config.js"), r = e(require("./rpcLayer.js")), i = e(require("../../game/utils.js")), a = void 0, u = function() {
    function e() {
        return t(this, e), a || (a = this, this.count = 0), a;
    }
    return n(e, [ {
        key: "sendRequest",
        value: function(e, t) {
            wx.showLoading({
                title: "生成长图中"
            }), r.wxDownloadFile("generateLongImage", o.config.generate_image_api + i.toParamStr(e), function(e) {
                wx.hideLoading();
                var n = e.tempFilePath;
                wx.saveImageToPhotosAlbum({
                    filePath: e.tempFilePath,
                    success: function(e) {
                        t(n);
                    },
                    fail: function(e) {
                        console.log("Save image failed. Error:", e);
                    }
                });
            }, function(e) {
                throw wx.hideLoading(), wx.showToast({
                    title: "生成长图失败",
                    image: "/assets/icon/cross.svg",
                    duration: 2e3
                }), new Error(e);
            });
        }
    } ], [ {
        key: "checkSaveImagePermission",
        value: function(e) {
            wx.authorize({
                scope: "scope.writePhotosAlbum",
                success: e,
                fail: function(t) {
                    console.log("Requesting scope.writePhotosAlbum failed. err: ", t), wx.showModal({
                        title: "没有授权",
                        content: "点击“确定”前往设置页面给予“保存到相册”的权限",
                        success: function(t) {
                            t.confirm && wx.openSetting({
                                success: function(t) {
                                    return t.authSetting["scope.writePhotosAlbum"] ? e() : "";
                                }
                            });
                        }
                    });
                }
            });
        }
    }, {
        key: "getShareCardRequest",
        value: function(e, t) {
            return e.recordId ? e.mode = "shareCardWithRecord" : void 0 !== e.roundNumber && (e.mode = "shareCardWithRoundNumber"), 
            o.config.generate_share_card_api + i.toParamStr(e);
        }
    }, {
        key: "generateShareResult",
        value: function(e, t) {
            a.sendRequest(e, t);
        }
    } ]), e;
}();

exports.default = u, new u();