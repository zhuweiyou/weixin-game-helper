const Https = require('../common/https')
const Socket = require('../common/socket')
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

async function joinRoom (player, master = false) {
  const https = new Https(player)
  // 获取用户信息
  const accountsSelf = await https.accountsSelf()
  // 获取题库分类
  const challenges = await https.challenges()
  // 获取某个分类下的信息。比如 [0] 是 “全能王”
  const {theme_id} = challenges[0]
  const selfDanGrades = await https.selfDanGrades({theme_id})
  const ret = {
    theme_id,
    avatar: accountsSelf.avatar,
    level: accountsSelf.level,
    player_id: player.account_id,
    token: player.access_token,
    dan: selfDanGrades.dan,
    grade: selfDanGrades.grade,
    master
  }
  if (master) {
    const {address} = await https.booking(ret)
    ret.address = address
  }
  return ret
}

module.exports = async players => {
  const rooms = await Promise.all([
    joinRoom(players[0], true),
    joinRoom(players[1])
  ])
  return rooms.map(room => new Socket({
    ...room,
    type: 'pk',
    address: rooms[0].address,
    theme_id: rooms[0].theme_id,
    events
  }))
}
