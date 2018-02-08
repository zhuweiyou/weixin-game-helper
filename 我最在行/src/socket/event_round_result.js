const QuestionModel = require('../../database/question-model')

module.exports = async (socket, data) => {
  // 两个人题目一样，所以只要大号记就好
  if (socket.master) {
    // 组合题目和答案，入库
    this._question.data = data.results.answer
    await new QuestionModel(this._question).save()
    console.log('保存到题库', JSON.stringify(this._question))

    // 下一题的题目，也一块返回了。和 event_battle_start 一样，暂存内存
    this._question = {
      question: data.question,
      options: data.options
    }
  }
}

