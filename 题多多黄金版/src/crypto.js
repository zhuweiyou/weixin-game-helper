const e = require('crypto-js')
const r = 'MiniSecretKey123$@'

const t = function (t, n) {
  var d = e.enc.Utf8.parse(e.MD5(r)),
    p = e.enc.Utf8.parse(n)
  return e.AES.encrypt(t, d, {
    iv: p,
    mode: e.mode.CBC,
    padding: e.pad.ZeroPadding
  }).toString()
}

const n = function (t, n) {
  var d = e.enc.Utf8.parse(e.MD5(r)),
    p = e.enc.Utf8.parse(n)
  return e.AES.decrypt(t, d, {
    iv: p,
    mode: e.mode.CBC,
    padding: e.pad.ZeroPadding
  }).toString(e.enc.Utf8)
}

exports.encrypt = t
exports.decrypt = n
