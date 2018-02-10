const request = require('./request')
const fs = require('fs-extra')

;(async () => {
  let data
  try {
    data = await fs.readFile('data/songs.json')
  } catch (e) {
    console.log('请先运行 npm run download 下载音乐列表')
    return
  }
  JSON.parse(data.toString())
    .filter(({is_request}) => is_request) // eslint-disable-line camelcase
    .forEach(({music_id, score}) => request('https://mp.weixin.qq.com/wxagame/wxagame_settlement', {
      stage_id: music_id,
      score_info: [{
        type: 0,
        score
      }, {
        type: 1,
        score: 7
      }],
    }))
})()
