module.exports = {
  * beforeSendRequest (requestDetail) {},
  * beforeSendResponse (requestDetail, responseDetail) {
    let data
    let body
    try {
      body = JSON.parse(responseDetail.response.body.toString())
      data = body.data
    } catch (e) {}
    if (requestDetail.url.indexOf('/minapp/answer/question/') !== -1) {
      if (data.question) {
        //匹配出正确答案
        data.question.forEach(value => {
          const answer = value.answers[value.right]
          console.log(value.title + '答案:' + answer)
          value.answers[value.right] = '√ ' + answer
        })
        body.data = data
        const response = Object.assign({}, responseDetail.response)
        response.body = JSON.stringify(body)
        return {response}
      }
    }
  }
}
