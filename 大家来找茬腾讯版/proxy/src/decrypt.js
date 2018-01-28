const fs = require('fs-extra')
const Canvas = require('canvas-prebuilt')
const e = require('./e')
const r = require('./r')

function decryptFile (id, data) {
  for (var key = getKey(id), i = 0; i < data.length; i += key.length)
    for (var j = 0; i + j < data.length && j < key.length; ++j)
      data[i + j] ^= key[j]
  return data
}

function encryptFile (id, data) {

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

// function arrayBufferToBase64 (e) {
//   var t = new Uint8Array(e)
//   return `data:image/png;base64,${r.fromByteArray(t)}`
// }

function decrypt (id, data) {
  data = decryptFromBuffer(id, data)
  const image = new Canvas.Image()
  image.src = data
  const canvas = new Canvas(image.width, image.height)
  const context = canvas.getContext('2d')
  context.fillStyle = 'red'
  context.fillRect(0, 0, image.width, image.height)
  context.drawImage(image, 0, 0, image.height, image.height, 0, 0, image.height, image.height)
  // debug
  fs.writeFile(`./data/${id}.png`, canvas.toBuffer())
  return encryptFile(canvas.toBuffer())
}

module.exports = decrypt

