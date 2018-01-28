const fs = require('fs-extra')
const decrypt = require('../src/decrypt')

// 运行 npm test
// .dat 为游戏请求的资源，解密后写出 png 看下效果
;(async () => {
  decrypt(14087, await fs.readFile('./test/14087.dat'), './test/14087.png')
})()

