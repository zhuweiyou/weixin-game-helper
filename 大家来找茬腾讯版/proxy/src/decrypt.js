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

async function decrypt (id, data, dist) {
  data = await decryptFromBuffer(id, data)

  const image = new Canvas.Image()
  image.src = arrayBufferToBase64(data)

  const canvas = new Canvas(image.width, image.height)
  const context = canvas.getContext('2d')
  context.drawImage(image, 0, 0, image.width, image.height, 0, 0, image.height, image.height)

  await fs.writeFile(dist, canvas.toBuffer())
}

module.exports = decrypt

//
// canvas = new Canvas(screen.width, screen.height)
// context = canvas.getContext('2d')
// context.drawImage(screen, 0, 0, screen.width, screen.height)
// for (let y = 0; y < r1.h; y++) {
//   for (let x = 0; x < r1.w; x++) {
//     const {data: c1} = context.getImageData(x + r1.x, y + r1.y, 1, 1)
//     const {data: c2} = context.getImageData(x + r2.x, y + r2.y, 1, 1)
//     if ((255 - Math.abs(c1[0] - c2[0]) * 0.297 - Math.abs(c1[1] - c2[1]) * 0.593 - Math.abs(c1[2] - c2[2]) * 0.11) / 255 < similarity) {
//       context.putImageData(new ImageData(new Uint8ClampedArray([255, 0, 0, 225]), 1, 1), x + r1.x, y + r1.y)
//     }
//   }
// }
