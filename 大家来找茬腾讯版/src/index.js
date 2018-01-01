const Canvas = require('canvas')
const {ImageData} = Canvas
const path = require('path')
const fs = require('fs-extra')
const command = require('./command')
const snapshot = require('./snapshot')

// 请使用手机截屏，在 Photoshop 等工具中，精确测量两幅图的坐标和宽高
// 下面是我的（小米 MIX1）手机数据，请根据情况调整
const r1 = {top: 227, left: 214, width: 824, height: 824}
const r2 = {top: r1.top + r1.height + 36, left: 214, width: 824, height: 824}
let canvas
let context
let screen

;(async () => {
  try {
    screen = await snapshot()
    canvas = new Canvas(screen.width, screen.height)
    context = canvas.getContext('2d')
    context.drawImage(screen, 0, 0, screen.width, screen.height)

    for (let y = 0; y < r1.height; y++) {
      for (let x = 0; x < r1.width; x++) {
        const {data: c1} = context.getImageData(x + r1.left, y + r1.top, 1, 1)
        const {data: c2} = context.getImageData(x + r2.left, y + r2.top, 1, 1)
        if ((255 - Math.abs(c1[0] - c2[0]) * 0.297 - Math.abs(c1[1] - c2[1]) * 0.593 - Math.abs(c1[2] - c2[2]) * 0.11) / 255 < 0.9) {
          context.putImageData(new ImageData(new Uint8ClampedArray([255, 0, 0, 225]), 1, 1), x + r1.left, y + r1.top)
        }
      }
    }

    const temp = path.join(__dirname, '../temp/screen.png')
    await fs.writeFile(temp, canvas.toBuffer())
    command(`open ${temp}`)
  } catch (e) {
    console.error(e)
  }
})()

