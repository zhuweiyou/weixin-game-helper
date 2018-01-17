const crypto = require('crypto')
const axios = require('axios')
require('../database/mongodb')
const QuizModel = require('../database/quiz-model')

module.exports = class Crawl {
  constructor (players) {
    this.players = players
    this.request = axios.create({
      baseURL: 'https://question.hortor.net/',
      headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_1 like Mac OS X) AppleWebKit/604.4.7 (KHTML, like Gecko) Mobile/15C153 MicroMessenger/6.6.1 NetType/WIFI Language/zh_CN',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      transformRequest: [
        data => Object.keys(data).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&')
      ],
      transformResponse: [res => {
        console.log('\n', res, '\n')
        return res
      }]
    })
  }

  async start () {
    try {
      this.roomID = -1
      // 进入房间
      for (const player of this.players) {
        await this.intoRoom(player)
      }
      // 开始对战
      await this.beginFight()
      // 进行答题
      await this.startAnswer()
      // 获取结果
      for (const player of this.players) {
        await this.fightResult(player)
      }
      // 离开房间
      for (const player of this.players) {
        await this.leaveRoom(player)
      }

    } catch (e) {
      console.error(e)
    }
    // 延迟 3 秒, 继续对战
    await Crawl.sleep(3000)
    await this.start()
  }

  async leaveRoom (player) {
    return await this.request.post('/question/bat/leaveRoom', this.createParamsWithSign(player))
  }

  async fightResult (player) {
    return await this.request.post('/question/bat/fightResult', this.createParamsWithSign(player))
  }

  async startAnswer () {
    for (let i = 1; i <= 5; i++) {
      // 获取题目
      const findQuizRes = await this.findQuiz(i)
      let answer = 0
      // 查找题库是否有该题
      const one = await QuizModel.findOne({quiz: findQuizRes.data.quiz})
      if (one) {
        answer = one.answer
      }
      // 选择答案
      const chooseAnswerRes = await this.chooseAnswer(this.players[0], i, answer)
      await this.chooseAnswer(this.players[1], i)
      // 保存到题库
      if (!one) {
        const quizModel = new QuizModel(Object.assign(findQuizRes.data, {answer: chooseAnswerRes.data.answer}))
        await quizModel.save()
      }
      // 延时，下一题
      await Crawl.sleep(1000)
    }
  }

  async chooseAnswer (player, index = 1, answer = 0) {
    const data = this.createParams(player)
    data.quizNum = index
    data.options = answer
    data.sign = Crawl.signature(data, player.token)
    return await this.request.post('/question/bat/choose', data)
  }

  async findQuiz (index = 1) {
    const player = this.players[0]
    const data = this.createParams(player)
    data.quizNum = index
    data.sign = Crawl.signature(data, player.token)
    return await this.request.post('/question/bat/findQuiz', data)
  }

  async intoRoom (player) {
    const data = this.createParamsWithSign(player)
    console.log(data)
    const res = await this.request.post('/question/bat/intoRoom', data)
    this.roomID = res.data.roomId
    return res
  }

  async beginFight () {
    return await this.request.post('/question/bat/beginFight', this.createParamsWithSign(this.players[0]))
  }

  createParams ({uid}) {
    return {
      uid,
      roomID: this.roomID,
      t: Date.now()
    }
  }

  createParamsWithSign ({uid, token}) {
    const data = this.createParams({uid})
    data.sign = Crawl.signature(data, token)
    return data
  }

  static signature (obj = {}, token) {
    const md5 = crypto.createHash('md5')
    obj = Object.assign(obj, {token})
    md5.update(Object.keys(obj).sort().map(key => `${key}=${obj[key]}`).join(''))
    return md5.digest('hex')
  }

  static sleep (delay) {
    return new Promise(resolve => setTimeout(resolve, delay))
  }
}
