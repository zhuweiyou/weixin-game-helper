const Socket = require('../common/socket')
const querystring = require('querystring')

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
    super({wss, events})
    console.log(wss)
  }
}
