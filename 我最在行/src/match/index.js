const MatchSocket = require('./match_socket')
const game = require('../common/game')
const events = {
  event_battle_score: require('./event_battle_score'),
  event_battle_start: require('./event_battle_start'),
  event_round_result: require('./event_round_result')
}

module.exports = async player => {
  new MatchSocket({
    options: await game(player, {match: true}),
    events
  })
}

