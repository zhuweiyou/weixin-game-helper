function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.PopupView = void 0;

var a = function() {
    function t(t, e) {
        for (var a = 0; a < e.length; a++) {
            var s = e[a];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
            Object.defineProperty(t, s.key, s);
        }
    }
    return function(e, a, s) {
        return a && t(e.prototype, a), s && t(e, s), e;
    };
}(), s = require("../config.js"), i = t(require("../api/userAPI")), o = t(require("../api/leaderboardAPI")), n = t(require("../../common/soundFXController.js")), c = require("../../game/config/configManager"), u = require("../../libs/av-live-query-weapp-min").User;

exports.PopupView = function() {
    function t(a) {
        e(this, t), this.page = a, this.page.buttonAccept = this.buttonAccept.bind(this), 
        this.page.buttonReject = this.buttonReject.bind(this), this.page.buttonClose = this.buttonClose.bind(this), 
        this.page.onWebViewMessage = this.onWebViewMessage.bind(this), this.data = {
            theme: "default",
            show: !1,
            icon: "icon",
            title: "title",
            message: "message",
            buttonTextAccept: "Accept",
            buttonTextReject: "Reject"
        }, this.page.setData({
            popupData: this.data
        });
    }
    return a(t, [ {
        key: "setData",
        value: function(t, e) {
            this.data[t] = e, this.page.setData({
                popupData: this.data
            });
        }
    }, {
        key: "buttonAccept",
        value: function() {
            this.setData("show", !1), this.callbackAccept && this.callbackAccept();
        }
    }, {
        key: "buttonReject",
        value: function() {
            this.setData("show", !1), this.callbackReject && this.callbackReject();
        }
    }, {
        key: "buttonClose",
        value: function() {
            this.setData("show", !1);
        }
    }, {
        key: "onWebViewMessage",
        value: function(t) {
            console.log("onWebViewMessage, msg=", t), this.setData("theme", "default");
        }
    }, {
        key: "showDialog",
        value: function(t, e, a, s, i) {
            this.setData("theme", "default"), this.setData("message", t), this.setData("buttonTextAccept", e), 
            this.setData("buttonTextReject", a), this.callbackAccept = s, this.callbackReject = i, 
            this.setData("show", !0);
        }
    }, {
        key: "showAlert",
        value: function(t, e, a, s) {
            this.setData("theme", "alert"), this.setData("title", t), this.setData("message", e), 
            this.setData("buttonTextAccept", a), this.callbackAccept = s, this.setData("show", !0);
        }
    }, {
        key: "showSelectionDialog",
        value: function() {
            var t = this;
            this.setData("theme", "selection"), this.setData("mute", n.default.getMute()), this.page.switchSoundEffect = function(t) {
                n.default.setMute(!t.detail.value);
            }, this.page.buttonDeleteAccount = function(e) {
                t.showAlert("确认删除账户", "账户删除后，排名与画作将被清空且无法恢复，确定要删除账户吗？", "狠心删除", t.deleteAccount);
            }, this.page.buttonPrivacyPolicy = function(e) {
                t.setData("theme", "webview"), t.setData("webViewUrl", "https://policies.googleminiapps.cn/pp");
            }, this.page.buttonTermOfService = function(e) {
                t.setData("theme", "webview"), t.setData("webViewUrl", "https://policies.googleminiapps.cn/tos");
            }, this.setData("show", !0);
        }
    }, {
        key: "deleteAccount",
        value: function() {
            i.default.anonymizeMe().then(function(t) {
                o.default.deleteStatistics(function() {
                    u.logOut(), wx.clearStorageSync(), wx.showModal({
                        content: "数据已清空。将打开设置页面供你取消对" + s.config.app_name + "的授权。",
                        showCancel: !1,
                        confirmText: "好",
                        complete: function() {
                            wx.openSetting({
                                complete: function(t) {
                                    c.reset(), getApp().reload(), getApp().redirectToHome();
                                }
                            });
                        }
                    });
                });
            }).catch(function(t) {
                console.log("Caught", t), wx.showToast({
                    title: "删除账户失败",
                    image: "/assets/icon/cross.svg"
                });
            });
        }
    } ]), t;
}();