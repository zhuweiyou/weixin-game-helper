const CryptoJS = require('crypto-js')

exports.encrypt = (text, key) => {
  key = CryptoJS.enc.Utf8.parse(key.slice(0, 16))
  const iv = CryptoJS.enc.Utf8.parse(key)
  const msg = JSON.stringify(text)
  return CryptoJS.AES.encrypt(msg, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }).toString()
}

exports.decrypt = (text, key) => {
  key = key.slice(0, 16)
  key = CryptoJS.enc.Utf8.parse(key)
  const iv = CryptoJS.enc.Utf8.parse(key)
  const bytes = CryptoJS.AES.decrypt(text, key, {iv})
  return CryptoJS.enc.Utf8.stringify(bytes)
}

