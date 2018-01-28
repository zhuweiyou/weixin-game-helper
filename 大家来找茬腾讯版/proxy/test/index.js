const fs = require('fs-extra')
const decrypt = require('../src/decrypt')

// 运行 npm test
// .dat 是游戏加密的资源，解密后写出到 data/14087.png 看效果
;(async () => decrypt(14087, await fs.readFile('./test/14087.dat')))()

