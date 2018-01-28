const command = require('./command')

module.exports = async (x, y) => await command(`adb shell input tap ${~~x} ${~~y}`)
