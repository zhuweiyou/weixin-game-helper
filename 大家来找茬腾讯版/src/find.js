const Canvas = require('canvas-prebuilt')
const fs = require('fs-extra')
const path = require('path')
const command = require('./command')
const {ImageData} = Canvas
const snapshot = require('./snapshot')
const config = require('./config')

module.exports = async (similarity = 0.9) => {
  let canvas
  let context
  const {image: screen, buffer: screenBuffer} = await snapshot()
  const configKey = `${screen.width}x${screen.height}`
  const hasConfig = config[configKey]
  if (!hasConfig) {
    await fs.writeFile(path.join(__dirname, '..', 'tmp', `${configKey}.png`), screenBuffer)
    console.log('请使用 Photoshop 等工具，测量找茬的两个画面坐标和宽高，并配置在 src/config.js 中')
    await command(`open ${path.join(__dirname, '..', 'tmp')}`)
    process.exit(0)
    return
  }
  const [r1, r2] = hasConfig
  canvas = new Canvas(screen.width, screen.height)
  context = canvas.getContext('2d')
  context.drawImage(screen, 0, 0, screen.width, screen.height)
  for (let y = 0; y < r1.h; y++) {
    for (let x = 0; x < r1.w; x++) {
      const {data: c1} = context.getImageData(x + r1.x, y + r1.y, 1, 1)
      const {data: c2} = context.getImageData(x + r2.x, y + r2.y, 1, 1)
      if ((255 - Math.abs(c1[0] - c2[0]) * 0.297 - Math.abs(c1[1] - c2[1]) * 0.593 - Math.abs(c1[2] - c2[2]) * 0.11) / 255 < similarity) {
        context.putImageData(new ImageData(new Uint8ClampedArray([255, 0, 0, 225]), 1, 1), x + r1.x, y + r1.y)
      }
    }
  }
  return {
    config: r1,
    buffer: canvas.toBuffer()
  }
}

