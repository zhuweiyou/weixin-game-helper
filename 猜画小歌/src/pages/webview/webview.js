var n = "https://codelab.hiwecloud.com", o = require("../../libs/av-live-query-weapp-min").User;

Page({
    data: {
        src: ""
    },
    onLoad: function(e) {
        o.current() && (e.session = o.current()._sessionToken), console.log(e.session);
        var s = "?" + Object.keys(e).map(function(n) {
            return [ n, e[n] ].map(encodeURIComponent).join("=");
        }).join("&");
        console.log(n + s), this.setData({
            src: n + s
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});