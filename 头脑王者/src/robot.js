const QueryString = require('query-string')
const TnwzApi = require('./common/tnwz-api')

module.exports = {
  * beforeSendRequest (request) {

  },
  * beforeSendResponse (request, response) {
    // TODO
    // 登录后，存下 token
    // 提交答案时，修改答案，重新计算签名后发送
    // const data = QueryString.parse(request.requestData)
  }
}
