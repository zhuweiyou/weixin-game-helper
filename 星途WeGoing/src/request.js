const axios = require('axios')

module.exports = async ({session_id, newscore, level, baoshi, combo}) => {
  const appid = 'wx7a727ff7d940bb3f'

  const game_behav_list = [
    {key: 'newscore', value: newscore},
    {key: 'level', value: level},
    {key: 'baoshi', value: baoshi},
    {key: 'combo', value: combo}
  ]

  const sign = () =>
    game_behav_list
      .reduce((ret, {key, value}) => ret += `_${key}:${value}`, appid)
      .split('')
      .reduce((ret, value) => (31 * ret + value.charCodeAt(0)) & 67108863, 0)

  const {data} = await axios({
    method: 'POST',
    url: 'https://game.weixin.qq.com/cgi-bin/gametetrisws/syncgame',
    params: {
      session_id
    },
    data: {
      appid,
      game_behav_list,
      sig: sign(),
      sync_type: 1,
      use_time: 120
    },
    headers: {
      'Referer': 'https://servicewechat.com/wx7a727ff7d940bb3f/23/page-frame.html',
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_1 like Mac OS X) AppleWebKit/604.4.7 (KHTML, like Gecko) Mobile/15C153 MicroMessenger/6.6.1 NetType/WIFI Language/zh_CN'
    }
  })
  console.log(data)
  return data
}
