function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

exports.GameRound = function e(i, s) {
    t(this, e), this.word = i, this.wordZhCn = wx.getStorageSync("words")[this.word].wordZhCn, 
    this.startTime = new Date(), this.recognized = !1, this.level = s, this.recognitions = [], 
    this.score = 999, this.width = 0, this.height = 0;
};