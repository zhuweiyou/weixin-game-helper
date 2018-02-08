const {w3cwebsocket: WebSocket} = require('websocket')
const querystring = require('querystring')
const events = {
  event_battle_result: require('./event_battle_result'),
  event_battle_score: require('./event_battle_score'),
  event_battle_start: require('./event_battle_start'),
  event_owner_leave: require('./event_owner_leave'),
  event_preemptive_score: require('./event_preemptive_score'),
  event_room_full: require('./event_room_full'),
  event_round_result: require('./event_round_result'),
  event_someone_join: require('./event_someone_join'),
  event_someone_leave: require('./event_someone_leave')
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
    console.log('[onOpen]', `${(this.master ? '大号' : '小号')}连接成功`)
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

  send (data) {
    this.client.send(JSON.stringify(data))
  }
}
