const QueryString = require('query-string')
const Tnwz = require('./common/tnwz')
const QuizModel = require('./database/quiz-model')

// AngProxy 只支持 yield 语法，暂不支持 await
module.exports = {
  * beforeSendRequest (requestDetail) {
    if (requestDetail.url.indexOf('/question/bat/choose') !== -1) {
      // 提交答案时，从题库中匹配答案，重新计算签名后发送
      const data = QueryString.parse(requestDetail.requestData)
      const one = yield QuizModel.findOne({quiz: this._findQuiz.quiz})
      if (one) {
        console.log('[匹配到题库]', one)
        this._quiz = one
        // 由于选项的顺序每一次可能不一样，所以从这次选项中，找题库里正确的那个文字
        data.options = this._findQuiz.options.findIndex(option => option === one.options[one.answer - 1]) + 1
        data.sign = Tnwz.sign(data, this._login.token)
        console.log('[改数据发送]', data)
        return {
          requestData: QueryString.stringify(data)
        }
      } else {
        this._quiz = null
      }
    }
  },
  * beforeSendResponse (requestDetail, responseDetail) {
    let response
    try {
      response = JSON.parse(responseDetail.response.body.toString()).data
      // console.log('[response]', response)
    } catch (e) {}
    if (requestDetail.url.indexOf('/question/player/login') !== -1) {
      this._login = response
      console.log('[登录信息]', response)
    } else if (requestDetail.url.indexOf('/question/bat/findQuiz') !== -1) {
      this._findQuiz = response
      console.log('[题目信息]', response)
    } else if (requestDetail.url.indexOf('/question/bat/choose') !== -1) {
      // 提交完答案，会返回正确答案，如果题库没有，就存起来
      if (!this._quiz) {
        console.log('[保存到题库]', this._findQuiz, response.answer)
        const quizModel = new QuizModel(Object.assign(this._findQuiz, {answer: response.answer}))
        yield quizModel.save()
      }
    }
  }
}
