function t(e, n) {
    $(e).contents().each(function() {
        if (1 === this.nodeType) t(this); else if (3 === this.nodeType) {
            var e = this.nodeValue.trim();
            $(this).replaceWith($.map(e.split(""), n).join(""));
        }
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ShuffleHandwrittenText = function(e) {
    t(e, function(t) {
        var e = Math.ceil(3 * Math.random());
        return "9" == t && (e = 2), '<span class="font-hand-' + e + '">' + t + "</span>";
    });
}, String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};