const axios = require('axios')

const APPID = 'wx75152d01bd4220d1'
const VERSION = 15

module.exports = class Https {
  constructor ({access_token, account_id}) {
    this.request = axios.create({
      baseURL: 'https://puzzle-gateway.zaih.com',
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 7.0; MIX Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/043906 Mobile Safari/537.36 MicroMessenger/6.6.2.1240(0x26060236) NetType/WIFI Language/zh_CN MicroMessenger/6.6.2.1240(0x26060236) NetType/WIFI Language/zh_CN',
        host: 'puzzle-gateway.zaih.com',
        referer: `https://servicewechat.com/${APPID}/${VERSION}/page-frame.html`,
        uid: account_id,
        jwt: `Bearer ${access_token}`
      }
    })
  }

  accountsSelf () {
    return this.get('/pbp/v1/accounts/self')
  }

  challenges () {
    return this.get('/pbp/v1/challenges')
  }

  selfDanGrades ({theme_id}) {
    return this.get('/pbp/v1/self/dan_grades', {theme_id})
  }

  async get (url, params) {
    const {data} = await this.request.get(url, {params})
    return data
  }

  async post (url, data) {
    const {data} = await this.request.post(url, data)
    return data
  }
}
