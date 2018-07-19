Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ticCount = function(t) {
    if (a[t]) {
        var r = e.Object.createWithoutData("SimpleTracking", a[t]);
        r.increment("counts", 1), r.save();
    }
};

var e = require("libs/av-live-query-weapp-min"), a = {
    "1v1Button": "5a2e48120b616008a212ad78",
    wxcard: "5a2fa7dd0b6160006aae90fd"
};