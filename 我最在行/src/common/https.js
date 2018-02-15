const axios = require('axios')
const headers = require('./headers')

const BASE_URL1 = 'https://puzzle-gateway.zaih.com'
const BASE_URL2 = 'https://puzzle.zaih.com'
const BASE_URL3 = 'https://apis-puzzle-new.zaih.com'

module.exports = class Https {
  constructor ({access_token, account_id}) {
    this.request = axios.create({
      headers: {
        ...headers,
        uid: account_id,
        // eslint-disable-next-line camelcase
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
