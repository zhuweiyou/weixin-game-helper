const {w3cwebsocket: WebSocket} = require('websocket')
const querystring = require('querystring')

module.exports = class Socket {
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
    console.log(wss)
    this.client = new WebSocket(wss)
    this.client.onopen = this.onOpen.bind(this)
    this.client.onclose = this.onClose.bind(this)
    this.client.onmessage = this.onMessage.bind(this)
    this.client.onerror = this.onError.bind(this)
    this.master = master
    this.events = events
  }

  onOpen () {
    console.log('[onOpen]', `${(this.master ? '大号' : '小号')}连接成功`)
  }

  onClose ({reason}) {
    console.log('[onClose]', reason)
  }

  onMessage ({data}) {
    try {
      console.log('[onMessage]', data)
      data = JSON.parse(data)
      this.events[data.event](this, data)
    } catch (e) {}
  }

  onError (error) {
    console.error('[onError]', error)
  }

  send (data) {
    this.client.send(JSON.stringify(data))
  }
}
