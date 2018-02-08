const {w3cwebsocket: WebSocket} = require('websocket')
const querystring = require('querystring')
const events = {
  event_someone_join: require('./events/event_someone_join')
}

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

  onClose ({reason}) {
    console.log('[onClose]', reason)
  }

  onMessage ({data}) {
    try {
      console.log('[onMessage]', data)
      data = JSON.parse(data)
      events[data.event](this, data)
    } catch (e) {}
  }

  onError (error) {
    console.error('[onError]', error)
  }
}
