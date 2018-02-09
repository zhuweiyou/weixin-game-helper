const QuestionModel = require('../common/question-model')
const random = require('../common/random')

module.exports = async (socket, data) => {
  if (!data.question) {
    // 游戏结束
    return
  }

  // 从题库找答案
  const one = await QuestionModel.findOne({question: data.question})
  let choice
  if (one) {
    console.log('题库有答案', JSON.stringify(one))
    // 答题时，选项顺序可能会打乱，所以要找一下正确答案文字对应的索引值
    choice = data.options.findIndex(option => String(one.options[one.answer]) === String(option))
    console.log('提交正确答案', choice, data.options[choice])
  } else {
    console.log('题库没答案')
    choice = random(0, 3)
    console.log('提交随机答案', choice, data.options[choice])
  }

  // 把题目先暂存到内存中，等返回答案后，一块存数据库
  socket._question = {
    question: data.question,
    options: data.options
  }

  // 题库有答案就用，没答案就随机一个
  socket.send({
    event: 'event_choice',
    choice
  })
}
