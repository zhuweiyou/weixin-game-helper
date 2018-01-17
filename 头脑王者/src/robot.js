const QueryString = require('query-string')
const Tnwz = require('./common/tnwz')
const QuizModel = require('./database/quiz-model')

module.exports = {
  async beforeSendRequest (requestDetail) {
    if (requestDetail.url.indexOf('/choose') !== -1) {
      // 提交答案时，从题库中匹配答案，重新计算签名后发送
      const data = QueryString.parse(requestDetail.requestData)
      const one = await QuizModel.findOne({quiz: this._findQuiz.quiz})
      if (one) {
        this._quiz = one
        // 由于选项的顺序每一次可能不一样，所以从这次选项中，找题库里正确的那个文字
        one.options = this._findQuiz.quiz.options.findIndex(option => option === one.options[one.answer - 1])
        data.sign = Tnwz.sign(data, this._login.token)
        requestDetail.requestData = QueryString.stringify(data)
        return requestDetail
      } else {
        this._quiz = null
      }
    }
  },
  async beforeSendResponse (requestDetail, responseDetail) {
    const response = responseDetail.response.body.data
    if (requestDetail.url.indexOf('/login') !== -1) {
      this._login = response
    } else if (requestDetail.url.indexOf('/findQuiz') !== -1) {
      this._findQuiz = response
    } else if (requestDetail.url.indexOf('/choose') !== -1) {
      // 提交完答案，会返回正确答案，如果题库没有，就存起来
      if (!this._quiz) {
        const quizModel = new QuizModel(Object.assign(this._findQuiz, {answer: response.answer}))
        await quizModel.save()
      }
    }
  }
}
