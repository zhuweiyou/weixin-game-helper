const Socket = require('./socket')
const querystring = require('querystring')

module.exports = class PkSocket extends Socket {
  constructor ({address, player_id, avatar, level, type, theme_id, token, dan, grade, master, events}) {
    const wss = `${address}&${querystring.stringify({
      player_id,
      avatar,
      level,
      type,
      theme_id,
      token,
      dan,
      grade,
      owner_id: player_id
    })}`
    super({wss, events})
    this.master = master
    this.player_id = player_id
  }

  onOpen () {
    console.log('[onOpen]', `${this.player_id} 连接成功`)
  }
}
