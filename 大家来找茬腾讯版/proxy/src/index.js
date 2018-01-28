const decrypt = require('./decrypt')

module.exports = {
  * beforeSendRequest (requestDetail) {},
  * beforeSendResponse (requestDetail, responseDetail) {
    if (requestDetail.url.indexOf('/mixed_image.dat') !== -1) {
      const id = url.match(/\/([^/]*?)\/mixed_image/).pop()
      const response = responseDetail.response
      response.body = decrypt(id, response.body)
      return {response}
    }
  }
}
