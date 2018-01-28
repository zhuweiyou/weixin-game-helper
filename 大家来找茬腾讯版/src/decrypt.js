const fs = require('fs-extra')
const Canvas = require('canvas-prebuilt')
const e = require('./e')
const r = require('./r')

function decryptFile (id, data) {
  for (let key = getKey(id), i = 0; i < data.length; i += key.length)
    for (let j = 0; i + j < data.length && j < key.length; ++j)
      data[i + j] ^= key[j]
  return data
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
  // 只画左边的正方形大图，右边的碎片直接填红，这样游戏时就可以看到标记了，达到辅助的效果
  context.fillStyle = 'red'
  context.fillRect(0, 0, image.width, image.height)
  context.drawImage(image, 0, 0, image.height, image.height, 0, 0, image.height, image.height)
  // 调试用的
  fs.writeFile(`./data/${id}.png`, canvas.toBuffer())
  // 加密回去返回给客户端（解密用的是异或，所以再加密一次就相当于解密了）
  return Buffer.from(decryptFromBuffer(id, canvas.toBuffer()))
}

module.exports = decrypt

