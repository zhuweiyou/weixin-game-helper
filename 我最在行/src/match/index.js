const MatchSocket = require('./match-socket')
const game = require('../common/game')
const eventbus = require('./eventbus')
const events = {
  event_battle_score: require('./event-battle-score'),
  event_battle_start: require('./event-battle-start'),
  event_round_result: require('./event-round-result')
}

module.exports = player => {
  async function start () {
    /* eslint-disable no-new */
    new MatchSocket({
      options: await game(player, {match: true}),
      events
    })
  }

  eventbus.on('start', start)
  start()
}
