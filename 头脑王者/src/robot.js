const QueryString = require('query-string')
const TnwzApi = require('./common/tnwz-api')

module.exports = {
  async beforeSendRequest (requestDetail) {
    // 提交答案时，修改答案，重新计算签名后发送
    if (requestDetail.url.indexOf('/choose') !== -1) {
      const data = QueryString.parse(requestDetail.requestData)
      data.sign = TnwzApi.sign(data, this._token)
      requestDetail.requestData = QueryString.stringify(data)
      return requestDetail
    }
  },
  async beforeSendResponse (requestDetail, responseDetail) {
    // 登录后，存下 token
    if (request.url.indexOf('/login') !== -1) {
      this._token = responseDetail.response.body.data.token
    }
  }
}
