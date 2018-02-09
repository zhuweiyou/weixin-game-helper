const querystring = require('querystring')
const Socket = require('../common/socket')
const PkSocket = require('../common/pk-socket')

module.exports = class MatchSocket extends Socket {
  constructor ({options, events}) {
    super({wss: `wss://puzzle.zaih.com/reception/pairing?${querystring.stringify(options)}`})
    this.options = options
    this.events = events
  }

  onMessage (options) {
    const data = super.onMessage(options)
    if (data.address) {
      console.log('获取到房间地址', data.address)
      new PkSocket({
        ...this.options,
        address: data.address,
        events: this.events
      })
    }
  }
}
