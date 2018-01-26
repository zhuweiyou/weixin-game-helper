module.exports = {
  * beforeSendRequest (requestDetail) {},
  * beforeSendResponse (requestDetail, responseDetail) {
    if (requestDetail.url.indexOf('/api/getDrawByTarget') !== -1) {
      const body = JSON.parse(responseDetail.response.body.toString())
      body.forEach(item => item.showAuthor = true)
      const response = Object.assign({}, responseDetail.response)
      response.body = JSON.stringify(body)
      return {response}
    }
  }
}
