const fs = require('fs')
const merge = require('./merge')

module.exports = {
  * beforeSendRequest (requestDetail) {},
  * beforeSendResponse (requestDetail, responseDetail) {
    if (requestDetail.url.indexOf('/api/getDrawByTarget') !== -1) {
      const body = JSON.parse(responseDetail.response.body.toString())
      body.forEach(async item => {
        item.qiniuImageUrl = await merge({
          draw: item.qiniuImageUrl,
          photo: item.authorAvatarUrl,
          name: item.authorNickName
        })
        console.log(item.qiniuImageUrl)
      })
      const response = Object.assign({}, responseDetail.response)
      response.body = JSON.stringify(body)
      return {response}
    }
  }
}
