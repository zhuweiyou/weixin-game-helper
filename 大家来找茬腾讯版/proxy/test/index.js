const {decryptFromFile} = require('../src/game')

// 运行 npm test
// .dat 为游戏请求的资源，解密后写出 png 看下效果
decryptFromFile(14087, './test/14087.dat', './test/14087.png')
