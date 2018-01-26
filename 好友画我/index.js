const request = require('./request')
const queryString = require('query-string')

module.exports = {
  * beforeSendRequest (requestDetail) {
  },
  * beforeSendResponse (requestDetail, responseDetail) {
    if (requestDetail.url.indexOf('/api/getDrawByTarget') !== -1) {
      const body = JSON.parse(responseDetail.response.body.toString())
      const param = queryString.parse(requestDetail.url)
      body.forEach(value => {
        request(param.userid, value._id)
      })
    }
  }
}

