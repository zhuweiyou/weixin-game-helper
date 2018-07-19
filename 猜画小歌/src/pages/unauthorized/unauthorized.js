var e = require("../../game/config.js");

Page({
    data: {
        appName: e.config.app_name
    },
    handleGetUserInfo: function(e) {
        "getUserInfo:ok" == e.detail.errMsg && (getApp().reload(), getApp().redirectToHome());
    }
});