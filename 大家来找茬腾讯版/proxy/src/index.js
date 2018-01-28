const download = require('./download')

// 运行 npm run server 后，复制终端打印的局域网地址到这里
const hostname = '192.168.0.101'
const port = 3344

module.exports = {
  * beforeSendRequest (requestDetail) {
    if (requestDetail.url.indexOf('/mixed_image.dat') !== -1) {
      const path = yield download(responseDetail.url)
      const newRequestOptions = requestDetail.requestOptions
      requestDetail.protocol = 'http'
      newRequestOptions.hostname = hostname
      newRequestOptions.port = port
      newRequestOptions.path = path
      return requestDetail
    }
  },
  * beforeSendResponse (requestDetail, responseDetail) {}
}
