Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fetchWords = function() {
    return new e.Query(i).equalTo("isTopic", !0).notEqualTo("blacklist", !0).ascending("failRate").limit(1e3).find();
};

var e = require("../../libs/av-live-query-weapp-min"), i = require("../models/words");