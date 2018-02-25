const game = require('../common/game')
const MatchSocket = require('./match-socket')
const eventbus = require('./eventbus')
const events = {
  event_battle_score: require('./event-battle-score'),
  event_battle_start: require('./event-battle-start'),
  event_no_puzzles: require('./event-no-puzzles'),
  event_round_result: require('./event-round-result')
}

module.exports = async player => {
  const options = await game({player, match: true, theme: player.theme})
  const start = () => new MatchSocket({options, events})
  eventbus.on('over', start)
  start()
}
