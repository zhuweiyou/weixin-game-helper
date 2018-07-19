function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function o(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ON_MSG = exports.ON_ERROR = exports.ON_CLOSE = exports.ON_OPEN = void 0;

var n = function() {
    function e(e, t) {
        for (var o = 0; o < t.length; o++) {
            var n = t[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
    };
}(), s = require("../config.js"), c = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../events.js")), i = void 0, r = exports.ON_OPEN = "SOCKET_OPEN", u = exports.ON_CLOSE = "SOCKET_CLOSE", a = exports.ON_ERROR = "SOCKET_ERROR", l = exports.ON_MSG = "SOCKET_MSG", k = function(k) {
    function f() {
        var o;
        if (e(this, f), !i) {
            var n = t(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this));
            i = n, n.socketTask = null, n.isReConnected = !1, n.socketMsgQueue = [];
        }
        return o = i, t(n, o);
    }
    return o(f, c.default), n(f, [ {
        key: "init",
        value: function(e) {
            this.userId = e;
        }
    }, {
        key: "openConnection",
        value: function(e) {
            var t = this;
            this.userId = e;
            var o = this.getSocketStatus();
            return console.log("OpenConnection..., statusCode=" + o), 0 != o && 1 != o ? (console.log("wx.connectSocket!"), 
            this.socketTask = wx.connectSocket({
                url: s.config.game_web_socket_api + "?userId=" + e
            }), wx.showLoading({
                title: "连接中..."
            }), this.socketTask.onOpen(function(e) {
                wx.hideLoading(), wx.hideToast(), console.log("socketTask onOpen"), t.emit(r, e);
                for (var o = 0; o < t.socketMsgQueue.length; o++) t.sendSocketMessage(t.socketMsgQueue[o]);
                t.socketMsgQueue = [];
            }), this.socketTask.onClose(function(e) {
                t.socketTask = null, console.log("socketTask onClose", e), t.emit(u, e);
            }), this.socketTask.onError(function(e) {
                t.socketTask = null, console.log("socketTask onError", e, t.getSocketStatus()), 
                t.emit(a, e);
            }), this.socketTask.onMessage(function(e) {
                try {
                    t.emit(l, e);
                } catch (e) {
                    throw console.log("### Error in onMessage!", e), e;
                }
            }), !0) : (console.log("Can't open websocket. StatusCode = " + o), !1);
        }
    }, {
        key: "getSocketStatus",
        value: function() {
            return this.socketTask ? this.socketTask.readyState : -1;
        }
    }, {
        key: "closeConnection",
        value: function() {
            this.socketTask ? this.socketTask.close() : console.log("Can't close websocket. WebSocket is " + this.socketStatus);
        }
    }, {
        key: "sendSocketMessage",
        value: function(e, t) {
            this.socketTask && 1 == this.getSocketStatus() ? (console.log("sending message:", e), 
            this.socketTask.send({
                data: e,
                fail: function(e) {
                    console.log("Socket sending error", e);
                }
            })) : (console.log("Can't send message!", e, this.getSocketStatus()), this.socketMsgQueue.push(e), 
            null != this.userId && t && (this.isReConnected = this.openConnection(this.userId)));
        }
    } ], [ {
        key: "init",
        value: function(e) {
            i.init(e);
        }
    }, {
        key: "open",
        value: function(e) {
            i.openConnection(e);
        }
    }, {
        key: "sendWithAutoReconnect",
        value: function(e) {
            i.sendSocketMessage(e, !0);
        }
    }, {
        key: "send",
        value: function(e, t) {
            i.sendSocketMessage(e, !1);
        }
    }, {
        key: "instance",
        value: function() {
            return i;
        }
    }, {
        key: "close",
        value: function() {
            i.closeConnection();
        }
    } ]), f;
}();

exports.default = k, new k();