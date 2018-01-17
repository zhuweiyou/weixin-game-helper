const crypto = require('crypto')
const axios = require('axios')
const sleep = require('./sleep')
const QuizModel = require('../db/quiz-model')

const request = axios.create({
  baseURL: 'https://question.hortor.net/',
  headers: {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_1 like Mac OS X) AppleWebKit/604.4.7 (KHTML, like Gecko) Mobile/15C153 MicroMessenger/6.6.1 NetType/WIFI Language/zh_CN',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [
    data => Object.keys(data).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&')
  ],
  transformResponse: [res => {
    // console.log('\n', res, '\n')
    return res
  }]
})

module.exports = {
  async crawl (players) {
    try {
      this._players = players
      this._roomID = -1
      // 进入房间
      for (const player of players) {
        await this.intoRoom(player)
      }
      // 开始对战
      await this.beginFight()
      // 进行答题
      await this.startAnswer()
      // 获取结果
      for (const player of players) {
        await this.fightResult(player)
      }
      // 离开房间
      for (const player of players) {
        await this.leaveRoom(player)
      }
    } catch (e) {
      console.error(e)
    }
    // 延迟 1 秒, 继续爬
    await sleep(1000)
    await this.crawl()
  },
  sign (params = {}, token) {
    const md5 = crypto.createHash('md5')
    params = Object.assign(params, {token})
    md5.update(Object.keys(params).sort().map(key => `${key}=${params[key]}`).join(''))
    return md5.digest('hex')
  },
  async leaveRoom (player) {
    return await request.post('/question/bat/leaveRoom', this._createParamsWithSign(player))
  },
  async fightResult (player) {
    return await request.post('/question/bat/fightResult', this._createParamsWithSign(player))
  },
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
      const chooseAnswerRes = await this.chooseAnswer(this._players[0], i, answer)
      await this.chooseAnswer(this._players[1], i)
      // 保存到题库
      if (!one) {
        const quizModel = new QuizModel(Object.assign(findQuizRes.data, {answer: chooseAnswerRes.data.answer}))
        await quizModel.save()
      }
      // 延迟，下一题
      await sleep(200)
    }
  },
  async chooseAnswer (player, index = 1, answer = 0) {
    const data = this._createParams(player)
    data.quizNum = index
    data.options = answer
    data.sign = this.sign(data, player.token)
    return await request.post('/question/bat/choose', data)
  },
  async findQuiz (index = 1) {
    const player = this._players[0]
    const data = this._createParams(player)
    data.quizNum = index
    data.sign = sign(data, player.token)
    return await request.post('/question/bat/findQuiz', data)
  },
  async intoRoom (player) {
    const data = this._createParamsWithSign(player)
    const res = await request.post('/question/bat/intoRoom', data)
    this._roomID = res.data.roomId
    return res
  },
  async beginFight () {
    return await request.post('/question/bat/beginFight', this._createParamsWithSign(this._players[0]))
  },
  _players: [
    {uid: '', token: ''},
    {uid: '', token: ''}
  ],
  _roomID: -1,
  _createParams ({uid}) {
    return {
      uid,
      roomID: this._roomID,
      t: Date.now()
    }
  },
  _createParamsWithSign ({uid, token}) {
    const data = this._createParams({uid})
    data.sign = this.sign(data, token)
    return data
  }
}
