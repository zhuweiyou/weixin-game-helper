const axios = require('axios')
const Canvas = require('canvas-prebuilt')

const createImage = async url => {
  const {data} = await axios({
    url,
    method: 'GET',
    responseType: 'arraybuffer'
  })
  const image = new Canvas.Image()
  image.src = data
  return image
}

module.exports = async ({draw, photo, name}) => {
  [draw, photo] = await Promise.all([
    createImage(draw),
    createImage(photo)
  ])
  const canvas = new Canvas(draw.width, draw.height)
  const ctx = canvas.getContext('2d')
  ctx.drawImage(draw, 0, 0, draw.width, draw.height)
  ctx.drawImage(photo, 0, 0, photo.width, photo.height, 0, 0, 100, 100)
  ctx.font = '24px Arial'
  ctx.fillText(name, 0, 130)
  return `data:image/png;base64,${canvas.toBuffer().toString('base64')}`
}
