const {w3cwebsocket: WebSocket} = require('websocket')
const querystring = require('querystring')

module.exports = class Socket {
  constructor ({address, player_id, avatar, level, type, theme_id, token, dan, grade, master}) {
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
    console.log(wss)
    this.client = new WebSocket(wss)
    this.client.onopen = this.onOpen.bind(this)
    this.client.onclose = this.onClose.bind(this)
    this.client.onmessage = this.onMessage.bind(this)
    this.client.onerror = this.onError.bind(this)
    this.master = master
  }

  onOpen () {
    console.log('[onOpen]', this.master)
  }

  onClose (reasonCode, description) {
    console.log('[onClose]', reasonCode, description)
  }

  onMessage ({data}) {
    console.log('[onMessage]', data)
  }

  onError (error) {
    console.error('[onError]', error)
  }
}
