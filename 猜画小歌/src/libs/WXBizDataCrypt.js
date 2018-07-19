function e(e, t) {
    this.appId = e, this.sessionKey = t;
}

var t = require("cryptojs/cryptojs.js").Crypto;

getApp();

e.prototype.decryptData = function(e, s) {
    try {
        var e = t.util.base64ToBytes(e), o = t.util.base64ToBytes(this.sessionKey), s = t.util.base64ToBytes(s), r = new t.mode.CBC(t.pad.pkcs7), p = t.AES.decrypt(e, o, {
            asBpytes: !0,
            iv: s,
            mode: r
        }), i = JSON.parse(p);
    } catch (e) {
        return void console.log(e);
    }
    {
        if (i.watermark.appid === this.appId) return i;
        console.log(err);
    }
}, module.exports = e;