const querystring = require('querystring')
const Socket = require('../common/socket')
const PkSocket = require('../common/pk_socket')

module.exports = class MatchSocket extends Socket {
  constructor ({options, events}) {
    const wss = `wss://puzzle.zaih.com/reception/pairing?${querystring.stringify(options)}`
    super({wss})
    this.options = options
    this.events = events
  }

  onMessage ({data}) {
    console.log(data)
    if (data.address) {
      console.log('获取到房间地址', data.address)
      this.client.close()
      new PkSocket({
        ...this.options,
        address: data.address,
        events: this.events
      })
    }
  }
}
