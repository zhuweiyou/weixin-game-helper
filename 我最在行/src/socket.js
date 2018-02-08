const {client: WebSocketClient} = require('websocket')
const querystring = require('querystring')

module.exports = class Socket {
  constructor ({player_id, avatar, level, type, theme_id, token, dan, grade}) {
    this.socket = new WebSocketClient()
    this.socket.connect(`wss://puzzle.zaih.com?${querystring.stringify({
      player_id,
      avatar,
      level,
      type,
      theme_id,
      token,
      dan,
      grade,
      owner_id: player_id
    })}`)
    this.socket.on('message', this.onMessage.bind(this))
  }

  onMessage (message) {
    console.log(message)
  }
}
