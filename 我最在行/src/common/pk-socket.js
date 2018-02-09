const Socket = require('./socket')
const querystring = require('querystring')

module.exports = class PkSocket extends Socket {
  constructor ({options, events}) {
    const address = options.address
    delete options.address
    super({wss: `${address}&${querystring.stringify(options)}`, events})
    this.master = options.master
    this.player_id = options.player_id
  }

  onOpen () {
    console.log('[onOpen]', `${this.player_id} 打开连接`)
  }
}
