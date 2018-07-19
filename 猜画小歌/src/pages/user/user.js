var e = require("../../libs/av-live-query-weapp-min").User;

Page({
    data: {
        user: null,
        username: "",
        password: "",
        error: null
    },
    onLoad: function() {
        this.setData({
            user: e.current()
        });
    },
    updateUsername: function(e) {
        var a = e.detail.value;
        this.setData({
            username: a
        });
    },
    updatePassword: function(e) {
        var a = e.detail.value;
        this.setData({
            password: a
        });
    },
    save: function() {
        var a = this;
        this.setData({
            error: null
        });
        var s = this.data, t = s.username, r = s.password, n = e.current();
        t && n.set({
            username: t
        }), r && n.set({
            password: r
        }), n.save().then(function() {
            wx.showToast({
                title: "更新成功",
                icon: "success"
            });
        }).catch(function(e) {
            a.setData({
                error: e.message
            });
        });
    }
});