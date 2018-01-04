const axios = require('axios')
const {encrypt} = require('./encrypt')
const version = 6

module.exports = async ({session_id, score}) => {
  const request = axios.create({
    baseURL: 'https://mp.weixin.qq.com/wxagame/',
    headers: {
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_1 like Mac OS X) AppleWebKit/604.4.7 (KHTML, like Gecko) Mobile/15C153 MicroMessenger/6.6.1 NetType/WIFI Language/zh_CN',
      'Referer': 'https://servicewechat.com/wx7c8d593b2c3a7703/' + version + '/page-frame.html',
      'Host': 'mp.weixin.qq.com',
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept-Language': 'zh-cn',
      'Accept': '*/*',
      'Cache-Control': 'no-cache'
    },
    transformRequest: [(data = {}) => JSON.stringify({
      base_req: {
        session_id,
        fast: 1
      },
      ...data
    })],
    transformResponse: [res => {
      console.log('\n', res, '\n')
      return res
    }]
  })

  const [userInfo, friendsScore, init] = await Promise.all([
    request.post('/wxagame_getuserinfo'),
    request.post('/wxagame_getfriendsscore'),
    request.post('/wxagame_init', {version: 9})
  ])

  const action = []
  const musicList = []
  const touchList = []
  Array.from({length: score}).forEach(() => {
    action.push([0.752, 1.32, false])
    musicList.push(false)
    touchList.push([Math.round(100 + Math.random() * 200), Math.round(300 + Math.random() * 200)])
  })

  return await request.post('/wxagame_settlement', {
    action_data: encrypt({
      score,
      times: 666,
      game_data: JSON.stringify({
        action,
        musicList,
        touchList,
        seed: Date.now(),
        version: 1
      })
    }, session_id)
  })
}
