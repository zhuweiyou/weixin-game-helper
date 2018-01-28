const fs = require('fs-extra')
const e = require('./e')

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

async function decryptFromBuffer (id, data, dist) {
  data = new Uint8Array(data)
  data = decryptFile(id, data)
  await fs.writeFile(dist, data)
  return data
}

async function decryptFromFile (id, src, dist) {
  return await decryptFromBuffer(id, await fs.readFile(src), dist)
}

module.exports = {
  decryptFromBuffer,
  decryptFromFile
}
