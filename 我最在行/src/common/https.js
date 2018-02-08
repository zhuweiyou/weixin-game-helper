const axios = require('axios')

const APPID = 'wx75152d01bd4220d1'
const VERSION = 15
const BASE_URL1 = 'https://puzzle-gateway.zaih.com'
const BASE_URL2 = 'https://puzzle.zaih.com'
const BASE_URL3 = 'https://apis-puzzle-new.zaih.com'

module.exports = class Https {
  constructor ({access_token, account_id}) {
    this.request = axios.create({
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 7.0; MIX Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/043906 Mobile Safari/537.36 MicroMessenger/6.6.2.1240(0x26060236) NetType/WIFI Language/zh_CN MicroMessenger/6.6.2.1240(0x26060236) NetType/WIFI Language/zh_CN',
        referer: `https://servicewechat.com/${APPID}/${VERSION}/page-frame.html`,
        uid: account_id,
        jwt: `Bearer ${access_token}`
      }
    })
  }

  unfinishedSeasons () {
    return this.get(`${BASE_URL3}/pbcp/cache/unfinished_seasons`)
  }

  booking ({theme_id, player_id}) {
    return this.post(`${BASE_URL2}/reception/booking`, {theme_id, player_id})
  }

  accountsSelf () {
    return this.get(`${BASE_URL1}/pbp/v1/accounts/self`)
  }

  challenges () {
    return this.get(`${BASE_URL1}/pbp/v1/challenges`)
  }

  selfDanGrades ({theme_id}) {
    return this.get(`${BASE_URL1}/pbp/v1/self/dan_grades`, {theme_id})
  }

  async get (url, params) {
    const {data} = await this.request.get(url, {params})
    return data
  }

  async post (url, params) {
    const {data} = await this.request.post(url, params)
    return data
  }
}
