const axios = require('axios')

module.exports = async ({session_id, openid, stage_id}) => {
  const {data} = await axios({
    method: 'POST',
    url: 'https://mp.weixin.qq.com/wxagame/wxagame_settlement',
    data: {
      base_req: {
        session_id,
        openid
      },
      score_info: [{
        type: 0,
        score: 9000
      }, {
        type: 1,
        score: 0
      }],
      stage_id
    },
    headers: {
      'Referer': 'https://servicewechat.com/wxd3ae9f954fda16cc/9/page-frame.html',
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_1 like Mac OS X) AppleWebKit/604.4.7 (KHTML, like Gecko) Mobile/15C153 MicroMessenger/6.6.1 NetType/WIFI Language/zh_CN'
    }
  })
  console.log(data)
  return data
}
