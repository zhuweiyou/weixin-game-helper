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

  onMessage ({data: {address}}) {
    if (address) {
      new PkSocket({
        ...this.options,
        address,
        events: this.events
      })
    }
  }
}
