const QueryString = require('query-string')
const Tnwz = require('./common/tnwz')
const QuizModel = require('./database/quiz-model')

module.exports = {
  async beforeSendRequest (requestDetail) {
    if (requestDetail.url.indexOf('/choose') !== -1) {
      // 提交答案时，修改答案，重新计算签名后发送
      const data = QueryString.parse(requestDetail.requestData)
      data.sign = Tnwz.sign(data, this._login.token)
      requestDetail.requestData = QueryString.stringify(data)
      return requestDetail
    }
  },
  async beforeSendResponse (requestDetail, responseDetail) {
    const response = responseDetail.response
    if (requestDetail.url.indexOf('/login') !== -1) {
      this._login = response
    } else if (requestDetail.url.indexOf('/findQuiz') !== -1) {
      this._findQuiz = response
    } else if (requestDetail.url.indexOf('/choose') !== -1) {
      // 提交完答案，会返回正确答案，如果题库没有，就存起来
      const one = await QuizModel.findOne({quiz: this._findQuiz.data.quiz})
      if (!one) {
        const quizModel = new QuizModel(Object.assign(this._findQuiz.data, {answer: response.answer}))
        await quizModel.save()
      }
    }
  }
}
