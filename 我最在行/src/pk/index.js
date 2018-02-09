const PkSocket = require('../common/pk-socket')
const game = require('../common/game')
const events = {
  event_battle_score: require('./event-battle-score'),
  event_battle_start: require('./event-battle-start'),
  event_round_result: require('./event-round-result'),
  event_someone_join: require('./event-someone-join')
}

module.exports = async players => {
  const rooms = await Promise.all([
    game(players[0], {master: true}),
    game(players[1])
  ])
  rooms.map(room => new PkSocket({
    options: {
      ...room,
      address: rooms[0].address,
      theme_id: rooms[0].theme_id
    },
    events
  }))
}
