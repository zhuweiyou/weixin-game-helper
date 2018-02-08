const {w3cwebsocket: WebSocket} = require('websocket')

module.exports = class Socket {
  constructor ({wss, events}) {
    console.log(wss)
    this.client = new WebSocket(wss)
    this.client.onopen = this.onOpen.bind(this)
    this.client.onclose = this.onClose.bind(this)
    this.client.onmessage = this.onMessage.bind(this)
    this.client.onerror = this.onError.bind(this)
    this.events = events
  }

  onOpen () {
    console.log('[onOpen]', `打开连接`)
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
