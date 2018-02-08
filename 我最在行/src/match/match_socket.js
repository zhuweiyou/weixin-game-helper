const Socket = require('../common/socket')
const querystring = require('querystring')
const Match2Socket = require('./match2_socket')

module.exports = class MatchSocket extends Socket {
  constructor ({player_id, theme_id, season_id, token, dan, grade, star, events}) {
    const wss = `wss://puzzle.zaih.com/reception/pairing?${querystring.stringify({
      player_id,
      theme_id,
      season_id,
      token,
      dan,
      grade,
      star
    })}`
    super({wss})
    this.events = events
  }

  onMessage ({data: {address}}) {
    if (address) {
      this.client.close()
      new Match2Socket({wss: address, events: this.events})
    }
  }
}
