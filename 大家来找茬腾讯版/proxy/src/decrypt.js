const fs = require('fs-extra')
const Canvas = require('canvas-prebuilt')
const e = require('./e')
const r = require('./r')

function decryptFile (e, r) {
  for (var t = getKey(e), a = 0; a < r.length; a += t.length)
    for (var o = 0; a + o < r.length && o < t.length; ++o)
      r[a + o] ^= t[o]
  return r
}

function getKey (r) {
  r += 'QQGameZC'
  for (var t = e.hash(r, !0), a = new ArrayBuffer(16), o = new Uint8Array(a), n = 0; n < 16; n++)
    o[n] = t.charCodeAt(n)
  return o
}

function decryptFromBuffer (id, data) {
  data = new Uint8Array(data)
  return decryptFile(id, data)
}

function arrayBufferToBase64 (e) {
  var t = new Uint8Array(e)
  return `data:image/png;base64,${r.fromByteArray(t)}`
}

function decrypt (id, data) {
  data = decryptFromBuffer(id, data)

  const image = new Canvas.Image()
  image.src = arrayBufferToBase64(data)

  const canvas = new Canvas(image.width, image.height)
  const context = canvas.getContext('2d')
  context.drawImage(image, 0, 0, image.width, image.height, 0, 0, image.height, image.height)

  // debug
  fs.writeFile(`./data/${id}.png`, canvas.toBuffer())

  return canvas.toBuffer()
}

module.exports = decrypt

