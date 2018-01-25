const axios = require('axios')
const config = require('./config')

module.exports = async (url, data) => {
  const res = await axios({
    url,
    data: {
      ...data,
      base_req: {...config}
    },
    method: 'POST',
    headers: {
      'Referer': 'https://servicewechat.com/wxd3ae9f954fda16cc/9/page-frame.html',
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_1 like Mac OS X) AppleWebKit/604.4.7 (KHTML, like Gecko) Mobile/15C153 MicroMessenger/6.6.1 NetType/WIFI Language/zh_CN'
    }
  })
  console.log(res.data)
  return res.data
}
