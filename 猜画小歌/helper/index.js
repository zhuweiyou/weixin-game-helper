module.exports = {
  * beforeSendRequest(requestDetail) {},
  * beforeSendResponse(requestDetail, responseDetail) {
    if (requestDetail.url.indexOf('/endlessGame/start') !== -1) {
      const response = Object.assign({}, responseDetail.response)
      const body = JSON.parse(response.body.toString())
      body.challengeWords = new Array(333).fill('line')
      response.body = JSON.stringify(body)
      return { response }
    }
  },
}
