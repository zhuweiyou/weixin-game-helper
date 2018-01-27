const request = require('./request')
const querystring = require('querystring')

module.exports = {
  * beforeSendRequest (requestDetail) {},
  * beforeSendResponse (requestDetail, responseDetail) {
    if (requestDetail.url.indexOf('/api/getDrawByTarget') !== -1) {
      const body = JSON.parse(responseDetail.response.body.toString())
      const {userid} = querystring.parse(requestDetail.url)
      body.forEach(({_id}) => request(userid, _id))
    }
  }
}
