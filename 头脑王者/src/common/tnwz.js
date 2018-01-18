const crypto = require('crypto')
const axios = require('axios')
const QueryString = require('query-string')
const sleep = require('./sleep')
require('../database/mongo')
const QuizModel = require('../database/quiz-model')

const request = axios.create({
  baseURL: 'https://question.hortor.net/',
  headers: {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_1 like Mac OS X) AppleWebKit/604.4.7 (KHTML, like Gecko) Mobile/15C153 MicroMessenger/6.6.1 NetType/WIFI Language/zh_CN',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [data => QueryString.stringify(data)]
})

module.exports = {
  async crawl (players) {
    this._players = players
    this._roomId = -1

    // 进入房间
    await this.intoRoom(players[0])
    await this.intoRoom(players[1])
    // 开始对战
    await this.beginFight()
    // 进行答题
    await this.startAnswer()
    // 获取结果
    await this.fightResult(players[0])
    await this.fightResult(players[1])
    // 离开房间
    await this.leaveRoom(players[0])
    await this.leaveRoom(players[1])

    // 延迟 1 秒, 继续爬
    await sleep(1000)
    await this.crawl(players)
  },
  sign (params = {}, token) {
    const md5 = crypto.createHash('md5')
    params = Object.assign(params, {token})
    md5.update(Object.keys(params).sort().map(key => `${key}=${params[key]}`).join(''))
    return md5.digest('hex')
  },
  async leaveRoom (player) {
    try {
      const res = await request.post('/question/bat/leaveRoom', this._createParamsWithSign(player))
      console.log('[leaveRoom]', JSON.stringify(res.data))
    } catch (e) {
      console.error(e.message)
    }
  },
  async fightResult (player) {
    try {
      const res = await request.post('/question/bat/fightResult', this._createParamsWithSign(player))
      console.log('[fightResult]', JSON.stringify(res.data))
    } catch (e) {
      console.error(e.message)
    }
  },
  async startAnswer () {
    try {
      for (let i = 1; i <= 5; i++) {
        // 获取题目
        const findQuizRes = await this.findQuiz(i)
        const quiz = findQuizRes.data.quiz
        if (!quiz) {
          throw new Error('没有获取到题目')
        }
        let answer = 0
        // 查找题库是否有该题
        const one = await QuizModel.findOne({quiz})
        if (one) {
          answer = this.transformAnswer(one, findQuizRes.data)
        }
        // 选择答案
        const chooseAnswerRes = await this.chooseAnswer(this._players[0], i, answer)
        await this.chooseAnswer(this._players[1], i)
        // 保存到题库
        if (!one) {
          const quizModel = new QuizModel(Object.assign(findQuizRes.data, {answer: chooseAnswerRes.data.answer}))
          await quizModel.save()
          console.log('[保存到题库]', JSON.stringify(quizModel))
        }
        // 延迟，下一题
        await sleep(200)
      }
    } catch (e) {
      console.error(e.message)
    }
  },
  // 由于选项的顺序每一次可能不一样，所以从这次选项中找题库里正确的那个文字
  transformAnswer(db, cur) {
    return cur.options.findIndex(option => option === db.options[db.answer - 1]) + 1
  },
  async chooseAnswer (player, index = 1, answer = 1) {
    try {
      const data = this._createParams(player)
      data.quizNum = index
      data.options = answer
      data.sign = this.sign(data, player.token)
      const res = await request.post('/question/bat/choose', data)
      console.log('[chooseAnswer]', JSON.stringify(res.data))
      return res.data
    } catch (e) {
      console.error(e.message)
    }
  },
  async findQuiz (index = 1) {
    try {
      const player = this._players[0]
      const data = this._createParams(player)
      data.quizNum = index
      data.sign = this.sign(data, player.token)
      const res = await request.post('/question/bat/findQuiz', data)
      console.log('[findQuiz]', JSON.stringify(res.data))
      return res.data
    } catch (e) {
      console.error(e.message)
    }
  },
  async intoRoom (player) {
    try {
      const res = await request.post('/question/bat/intoRoom', this._createParamsWithSign(player))
      console.log('[intoRoom]', JSON.stringify(res.data))
      this._roomId = res.data.data.roomId
    } catch (e) {
      console.error(e.message)
    }
  },
  async beginFight () {
    try {
      const res = await request.post('/question/bat/beginFight', this._createParamsWithSign(this._players[0]))
      console.log('[beginFight]', JSON.stringify(res.data))
    } catch (e) {
      console.error(e.message)
    }
  },
  _players: [
    {uid: '', token: ''},
    {uid: '', token: ''}
  ],
  _roomId: -1,
  _createParams ({uid}) {
    return {
      uid,
      roomID: this._roomId,
      t: Date.now()
    }
  },
  _createParamsWithSign ({uid, token}) {
    const data = this._createParams({uid})
    data.sign = this.sign(data, token)
    return data
  }
}
