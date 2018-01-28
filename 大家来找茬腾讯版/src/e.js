
  var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
  function(t) {
      return typeof t
  }: function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
  }; !
  function(r) {
      if ("object" === ("undefined" == typeof exports ? "undefined": t(exports))) module.exports = r();
      else if ("function" == typeof define && define.amd) define(r);
      else {
          var e;
          try {
              e = window
          } catch(t) {
              e = self
          }
          e.SparkMD5 = r()
      }
  } (function(t) {
      function r(t, r) {
          var e = t[0],
          n = t[1],
          f = t[2],
          o = t[3];
          n = ((n += ((f = ((f += ((o = ((o += ((e = ((e += (n & f | ~n & o) + r[0] - 680876936 | 0) << 7 | e >>> 25) + n | 0) & n | ~e & f) + r[1] - 389564586 | 0) << 12 | o >>> 20) + e | 0) & e | ~o & n) + r[2] + 606105819 | 0) << 17 | f >>> 15) + o | 0) & o | ~f & e) + r[3] - 1044525330 | 0) << 22 | n >>> 10) + f | 0,
          n = ((n += ((f = ((f += ((o = ((o += ((e = ((e += (n & f | ~n & o) + r[4] - 176418897 | 0) << 7 | e >>> 25) + n | 0) & n | ~e & f) + r[5] + 1200080426 | 0) << 12 | o >>> 20) + e | 0) & e | ~o & n) + r[6] - 1473231341 | 0) << 17 | f >>> 15) + o | 0) & o | ~f & e) + r[7] - 45705983 | 0) << 22 | n >>> 10) + f | 0,
          n = ((n += ((f = ((f += ((o = ((o += ((e = ((e += (n & f | ~n & o) + r[8] + 1770035416 | 0) << 7 | e >>> 25) + n | 0) & n | ~e & f) + r[9] - 1958414417 | 0) << 12 | o >>> 20) + e | 0) & e | ~o & n) + r[10] - 42063 | 0) << 17 | f >>> 15) + o | 0) & o | ~f & e) + r[11] - 1990404162 | 0) << 22 | n >>> 10) + f | 0,
          n = ((n += ((f = ((f += ((o = ((o += ((e = ((e += (n & f | ~n & o) + r[12] + 1804603682 | 0) << 7 | e >>> 25) + n | 0) & n | ~e & f) + r[13] - 40341101 | 0) << 12 | o >>> 20) + e | 0) & e | ~o & n) + r[14] - 1502002290 | 0) << 17 | f >>> 15) + o | 0) & o | ~f & e) + r[15] + 1236535329 | 0) << 22 | n >>> 10) + f | 0,
          n = ((n += ((f = ((f += ((o = ((o += ((e = ((e += (n & o | f & ~o) + r[1] - 165796510 | 0) << 5 | e >>> 27) + n | 0) & f | n & ~f) + r[6] - 1069501632 | 0) << 9 | o >>> 23) + e | 0) & n | e & ~n) + r[11] + 643717713 | 0) << 14 | f >>> 18) + o | 0) & e | o & ~e) + r[0] - 373897302 | 0) << 20 | n >>> 12) + f | 0,
          n = ((n += ((f = ((f += ((o = ((o += ((e = ((e += (n & o | f & ~o) + r[5] - 701558691 | 0) << 5 | e >>> 27) + n | 0) & f | n & ~f) + r[10] + 38016083 | 0) << 9 | o >>> 23) + e | 0) & n | e & ~n) + r[15] - 660478335 | 0) << 14 | f >>> 18) + o | 0) & e | o & ~e) + r[4] - 405537848 | 0) << 20 | n >>> 12) + f | 0,
          n = ((n += ((f = ((f += ((o = ((o += ((e = ((e += (n & o | f & ~o) + r[9] + 568446438 | 0) << 5 | e >>> 27) + n | 0) & f | n & ~f) + r[14] - 1019803690 | 0) << 9 | o >>> 23) + e | 0) & n | e & ~n) + r[3] - 187363961 | 0) << 14 | f >>> 18) + o | 0) & e | o & ~e) + r[8] + 1163531501 | 0) << 20 | n >>> 12) + f | 0,
          n = ((n += ((f = ((f += ((o = ((o += ((e = ((e += (n & o | f & ~o) + r[13] - 1444681467 | 0) << 5 | e >>> 27) + n | 0) & f | n & ~f) + r[2] - 51403784 | 0) << 9 | o >>> 23) + e | 0) & n | e & ~n) + r[7] + 1735328473 | 0) << 14 | f >>> 18) + o | 0) & e | o & ~e) + r[12] - 1926607734 | 0) << 20 | n >>> 12) + f | 0,
          n = ((n += ((f = ((f += ((o = ((o += ((e = ((e += (n ^ f ^ o) + r[5] - 378558 | 0) << 4 | e >>> 28) + n | 0) ^ n ^ f) + r[8] - 2022574463 | 0) << 11 | o >>> 21) + e | 0) ^ e ^ n) + r[11] + 1839030562 | 0) << 16 | f >>> 16) + o | 0) ^ o ^ e) + r[14] - 35309556 | 0) << 23 | n >>> 9) + f | 0,
          n = ((n += ((f = ((f += ((o = ((o += ((e = ((e += (n ^ f ^ o) + r[1] - 1530992060 | 0) << 4 | e >>> 28) + n | 0) ^ n ^ f) + r[4] + 1272893353 | 0) << 11 | o >>> 21) + e | 0) ^ e ^ n) + r[7] - 155497632 | 0) << 16 | f >>> 16) + o | 0) ^ o ^ e) + r[10] - 1094730640 | 0) << 23 | n >>> 9) + f | 0,
          n = ((n += ((f = ((f += ((o = ((o += ((e = ((e += (n ^ f ^ o) + r[13] + 681279174 | 0) << 4 | e >>> 28) + n | 0) ^ n ^ f) + r[0] - 358537222 | 0) << 11 | o >>> 21) + e | 0) ^ e ^ n) + r[3] - 722521979 | 0) << 16 | f >>> 16) + o | 0) ^ o ^ e) + r[6] + 76029189 | 0) << 23 | n >>> 9) + f | 0,
          n = ((n += ((f = ((f += ((o = ((o += ((e = ((e += (n ^ f ^ o) + r[9] - 640364487 | 0) << 4 | e >>> 28) + n | 0) ^ n ^ f) + r[12] - 421815835 | 0) << 11 | o >>> 21) + e | 0) ^ e ^ n) + r[15] + 530742520 | 0) << 16 | f >>> 16) + o | 0) ^ o ^ e) + r[2] - 995338651 | 0) << 23 | n >>> 9) + f | 0,
          n = ((n += ((o = ((o += (n ^ ((e = ((e += (f ^ (n | ~o)) + r[0] - 198630844 | 0) << 6 | e >>> 26) + n | 0) | ~f)) + r[7] + 1126891415 | 0) << 10 | o >>> 22) + e | 0) ^ ((f = ((f += (e ^ (o | ~n)) + r[14] - 1416354905 | 0) << 15 | f >>> 17) + o | 0) | ~e)) + r[5] - 57434055 | 0) << 21 | n >>> 11) + f | 0,
          n = ((n += ((o = ((o += (n ^ ((e = ((e += (f ^ (n | ~o)) + r[12] + 1700485571 | 0) << 6 | e >>> 26) + n | 0) | ~f)) + r[3] - 1894986606 | 0) << 10 | o >>> 22) + e | 0) ^ ((f = ((f += (e ^ (o | ~n)) + r[10] - 1051523 | 0) << 15 | f >>> 17) + o | 0) | ~e)) + r[1] - 2054922799 | 0) << 21 | n >>> 11) + f | 0,
          n = ((n += ((o = ((o += (n ^ ((e = ((e += (f ^ (n | ~o)) + r[8] + 1873313359 | 0) << 6 | e >>> 26) + n | 0) | ~f)) + r[15] - 30611744 | 0) << 10 | o >>> 22) + e | 0) ^ ((f = ((f += (e ^ (o | ~n)) + r[6] - 1560198380 | 0) << 15 | f >>> 17) + o | 0) | ~e)) + r[13] + 1309151649 | 0) << 21 | n >>> 11) + f | 0,
          n = ((n += ((o = ((o += (n ^ ((e = ((e += (f ^ (n | ~o)) + r[4] - 145523070 | 0) << 6 | e >>> 26) + n | 0) | ~f)) + r[11] - 1120210379 | 0) << 10 | o >>> 22) + e | 0) ^ ((f = ((f += (e ^ (o | ~n)) + r[2] + 718787259 | 0) << 15 | f >>> 17) + o | 0) | ~e)) + r[9] - 343485551 | 0) << 21 | n >>> 11) + f | 0,
          t[0] = e + t[0] | 0,
          t[1] = n + t[1] | 0,
          t[2] = f + t[2] | 0,
          t[3] = o + t[3] | 0
      }
      function e(t) {
          var r, e = [];
          for (r = 0; r < 64; r += 4) e[r >> 2] = t.charCodeAt(r) + (t.charCodeAt(r + 1) << 8) + (t.charCodeAt(r + 2) << 16) + (t.charCodeAt(r + 3) << 24);
          return e
      }
      function n(t) {
          var r, e = [];
          for (r = 0; r < 64; r += 4) e[r >> 2] = t[r] + (t[r + 1] << 8) + (t[r + 2] << 16) + (t[r + 3] << 24);
          return e
      }
      function f(t) {
          var n, f, o, i, h, u, s = t.length,
          a = [1732584193, -271733879, -1732584194, 271733878];
          for (n = 64; n <= s; n += 64) r(a, e(t.substring(n - 64, n)));
          for (f = (t = t.substring(n - 64)).length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], n = 0; n < f; n += 1) o[n >> 2] |= t.charCodeAt(n) << (n % 4 << 3);
          if (o[n >> 2] |= 128 << (n % 4 << 3), n > 55) for (r(a, o), n = 0; n < 16; n += 1) o[n] = 0;
          return i = 8 * s,
          i = i.toString(16).match(/(.*?)(.{0,8})$/),
          h = parseInt(i[2], 16),
          u = parseInt(i[1], 16) || 0,
          o[14] = h,
          o[15] = u,
          r(a, o),
          a
      }
      function o(t) {
          var e, f, o, i, h, u, s = t.length,
          a = [1732584193, -271733879, -1732584194, 271733878];
          for (e = 64; e <= s; e += 64) r(a, n(t.subarray(e - 64, e)));
          for (f = (t = e - 64 < s ? t.subarray(e - 64) : new Uint8Array(0)).length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], e = 0; e < f; e += 1) o[e >> 2] |= t[e] << (e % 4 << 3);
          if (o[e >> 2] |= 128 << (e % 4 << 3), e > 55) for (r(a, o), e = 0; e < 16; e += 1) o[e] = 0;
          return i = 8 * s,
          i = i.toString(16).match(/(.*?)(.{0,8})$/),
          h = parseInt(i[2], 16),
          u = parseInt(i[1], 16) || 0,
          o[14] = h,
          o[15] = u,
          r(a, o),
          a
      }
      function i(t) {
          var r, e = "";
          for (r = 0; r < 4; r += 1) e += l[t >> 8 * r + 4 & 15] + l[t >> 8 * r & 15];
          return e
      }
      function h(t) {
          var r;
          for (r = 0; r < t.length; r += 1) t[r] = i(t[r]);
          return t.join("")
      }
      function u(t) {
          return /[\u0080-\uFFFF]/.test(t) && (t = unescape(encodeURIComponent(t))),
          t
      }
      function s(t, r) {
          var e, n = t.length,
          f = new ArrayBuffer(n),
          o = new Uint8Array(f);
          for (e = 0; e < n; e += 1) o[e] = t.charCodeAt(e);
          return r ? o: f
      }
      function a(t) {
          return String.fromCharCode.apply(null, new Uint8Array(t))
      }
      function y(t, r, e) {
          var n = new Uint8Array(t.byteLength + r.byteLength);
          return n.set(new Uint8Array(t)),
          n.set(new Uint8Array(r), t.byteLength),
          e ? n: n.buffer
      }
      function p(t) {
          var r, e = [],
          n = t.length;
          for (r = 0; r < n - 1; r += 2) e.push(parseInt(t.substr(r, 2), 16));
          return String.fromCharCode.apply(String, e)
      }
      function c() {
          this.reset()
      }
      var l = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      return "5d41402abc4b2a76b9719d911017c592" !== h(f("hello")) &&
      function(t, r) {
          var e = (65535 & t) + (65535 & r);
          return (t >> 16) + (r >> 16) + (e >> 16) << 16 | 65535 & e
      },
      "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice ||
      function() {
          function r(t, r) {
              return (t = 0 | t || 0) < 0 ? Math.max(t + r, 0) : Math.min(t, r)
          }
          ArrayBuffer.prototype.slice = function(e, n) {
              var f, o, i, h, u = this.byteLength,
              s = r(e, u),
              a = u;
              return n !== t && (a = r(n, u)),
              s > a ? new ArrayBuffer(0) : (f = a - s, o = new ArrayBuffer(f), i = new Uint8Array(o), h = new Uint8Array(this, s, f), i.set(h), o)
          }
      } (),
      c.prototype.append = function(t) {
          return this.appendBinary(u(t)),
          this
      },
      c.prototype.appendBinary = function(t) {
          this._buff += t,
          this._length += t.length;
          var n, f = this._buff.length;
          for (n = 64; n <= f; n += 64) r(this._hash, e(this._buff.substring(n - 64, n)));
          return this._buff = this._buff.substring(n - 64),
          this
      },
      c.prototype.end = function(t) {
          var r, e, n = this._buff,
          f = n.length,
          o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (r = 0; r < f; r += 1) o[r >> 2] |= n.charCodeAt(r) << (r % 4 << 3);
          return this._finish(o, f),
          e = h(this._hash),
          t && (e = p(e)),
          this.reset(),
          e
      },
      c.prototype.reset = function() {
          return this._buff = "",
          this._length = 0,
          this._hash = [1732584193, -271733879, -1732584194, 271733878],
          this
      },
      c.prototype.getState = function() {
          return {
              buff: this._buff,
              length: this._length,
              hash: this._hash
          }
      },
      c.prototype.setState = function(t) {
          return this._buff = t.buff,
          this._length = t.length,
          this._hash = t.hash,
          this
      },
      c.prototype.destroy = function() {
          delete this._hash,
          delete this._buff,
          delete this._length
      },
      c.prototype._finish = function(t, e) {
          var n, f, o, i = e;
          if (t[i >> 2] |= 128 << (i % 4 << 3), i > 55) for (r(this._hash, t), i = 0; i < 16; i += 1) t[i] = 0;
          n = (n = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/),
          f = parseInt(n[2], 16),
          o = parseInt(n[1], 16) || 0,
          t[14] = f,
          t[15] = o,
          r(this._hash, t)
      },
      c.hash = function(t, r) {
          return c.hashBinary(u(t), r)
      },
      c.hashBinary = function(t, r) {
          var e = h(f(t));
          return r ? p(e) : e
      },
      c.ArrayBuffer = function() {
          this.reset()
      },
      c.ArrayBuffer.prototype.append = function(t) {
          var e, f = y(this._buff.buffer, t, !0),
          o = f.length;
          for (this._length += t.byteLength, e = 64; e <= o; e += 64) r(this._hash, n(f.subarray(e - 64, e)));
          return this._buff = e - 64 < o ? new Uint8Array(f.buffer.slice(e - 64)) : new Uint8Array(0),
          this
      },
      c.ArrayBuffer.prototype.end = function(t) {
          var r, e, n = this._buff,
          f = n.length,
          o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (r = 0; r < f; r += 1) o[r >> 2] |= n[r] << (r % 4 << 3);
          return this._finish(o, f),
          e = h(this._hash),
          t && (e = p(e)),
          this.reset(),
          e
      },
      c.ArrayBuffer.prototype.reset = function() {
          return this._buff = new Uint8Array(0),
          this._length = 0,
          this._hash = [1732584193, -271733879, -1732584194, 271733878],
          this
      },
      c.ArrayBuffer.prototype.getState = function() {
          var t = c.prototype.getState.call(this);
          return t.buff = a(t.buff),
          t
      },
      c.ArrayBuffer.prototype.setState = function(t) {
          return t.buff = s(t.buff, !0),
          c.prototype.setState.call(this, t)
      },
      c.ArrayBuffer.prototype.destroy = c.prototype.destroy,
      c.ArrayBuffer.prototype._finish = c.prototype._finish,
      c.ArrayBuffer.hash = function(t, r) {
          var e = h(o(new Uint8Array(t)));
          return r ? p(e) : e
      },
      c
  });
