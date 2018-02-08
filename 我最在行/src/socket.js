const {client: WebSocketClient} = require('websocket')
const querystring = require('querystring')

module.exports = class Socket {
  constructor ({player_id, avatar, level, type, theme_id, token, dan, grade}) {
    this.client = new WebSocketClient()
    this.client.on('connect', this.onConnect.bind(this))
    this.client.on('connectFailed', this.onConnectFailed.bind(this))
    this.client.connect(`wss://puzzle.zaih.com?${querystring.stringify({
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
  }

  onConnect (connection) {
    console.log('[onConnect]', connection)
    this.connection = connection
    connection.on('message', this.onMessage.bind(this))
    connection.on('error', this.onError.bind(this))
    connection.on('close', this.onClose.bind(this))
  }

  onConnectFailed (errorDescription) {
    console.error('[onConnectFailed]', errorDescription)
  }

  onMessage (message) {
    console.log('[onMessage]', message)
  }

  onError (error) {
    console.error('[onError]', error)
  }

  onClose (reasonCode, description) {
    console.log('[onClose]', reasonCode, description)
  }
}
