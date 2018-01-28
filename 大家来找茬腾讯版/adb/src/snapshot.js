const fs = require('fs-extra')
const path = require('path')
const os = require('os')
const {Image} = require('canvas-prebuilt')
const command = require('./command')

module.exports = async () => {
  const fileName = `snapshot-${Date.now()}.png`
  await command(`adb shell screencap -p /sdcard/${fileName}`)
  await command(`adb pull /sdcard/${fileName} ${os.tmpdir()}`)
  const filePath = path.join(os.tmpdir(), fileName)
  const buffer = await fs.readFile(filePath)
  const image = new Image()
  image.src = buffer
  await Promise.all([
    fs.unlink(filePath),
    command(`adb shell rm /sdcard/${fileName}`)
  ])
  return {image, buffer}
}
