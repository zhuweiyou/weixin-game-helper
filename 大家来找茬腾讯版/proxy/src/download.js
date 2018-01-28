const axios = require('axios')
const {decryptFromFile} = require('./game')

// "https://zhaocha.qq.com/resource/zhaocha/" + Math.floor(e / 1e4) + "/" + e + "/mixed_image.dat"

module.exports = async url => {
  const {data} = await axios({
    url,
    method: 'GET',
    responseType: 'arraybuffer'
  })
  const id = url.match(/\/([^/]*?)\/mixed_image/).pop()
  const file = `${id}.png`
  await decryptFromFile(id, data, `./server/${file}`)
  return file
}
