const QueryString = require('query-string')
const Tnwz = require('./common/tnwz')
const QuizModel = require('./database/quiz-model')

// AngProxy 只支持 yield 语法，暂不支持 await
module.exports = {
  * beforeSendRequest (requestDetail) {
    // 原先采用的是改数据发送，经测试发现会频繁的提示需要重新登录，所以改为只提示答案了
  },
  * beforeSendResponse (requestDetail, responseDetail) {
    let data
    let body
    try {
      body = JSON.parse(responseDetail.response.body.toString())
      data = body.data
      // console.log('[response]', response)
    } catch (e) {}
    if (requestDetail.url.indexOf('/question/bat/findQuiz') !== -1) {
      this._findQuiz = data
      console.log('[题目信息]', JSON.stringify(data))
      // 从题库里找答案
      this._quiz = yield QuizModel.findOne({quiz: this._findQuiz.quiz})
      if (this._quiz) {
        const answer = Tnwz.transformAnswer(this._quiz, this._findQuiz) - 1
        const option = this._findQuiz.options[answer]
        this._findQuiz.options[answer] = '√ ' + option
        body.data = this._findQuiz
        const response = Object.assign({}, responseDetail.response)
        response.body = JSON.stringify(body)
        console.log('[题库有答案]', option)
        return {response}
      }
    } else if (requestDetail.url.indexOf('/question/bat/choose') !== -1) {
      // 提交完答案，会返回正确答案，如果题库没有，就存起来
      if (!this._quiz) {
        const quizModel = new QuizModel(Object.assign(this._findQuiz, {answer: data.answer}))
        yield quizModel.save()
        console.log('[保存到题库]', JSON.stringify(this._findQuiz), data.answer)
      }
    }
  }
}
