const Https = require('./https')
const Socket = require('./socket')

module.exports = async players => {
  const [player1, player2] = players
  const https = new Https(player1)

  // 获取 player1 的用户信息
  const accountsSelf = await https.accountsSelf()
  console.log(accountsSelf)

  // 获取题库分类
  const challenges = await https.challenges()
  console.log(challenges)

  // 获取 player1 在某个分类下的信息。比如 [0] 是 “全能王”
  const {theme_id} = challenges[0]
  const selfDanGrades = await https.selfDanGrades({theme_id})
  console.log(selfDanGrades)

  const socket = new Socket({
    player_id: player1.account_id,
    avatar: accountsSelf.avatar,
    level: accountsSelf.level,
    type: 'pk',
    theme_id,
    token: player1.access_token,
    dan: selfDanGrades.dan,
    grade: selfDanGrades.grade
  })
}
