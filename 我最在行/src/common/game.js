const Https = require('./https')

module.exports = async (player, {master = false, match = false, theme = 0} = {}) => {
  const https = new Https(player)
  // 获取用户信息
  const accountsSelf = await https.accountsSelf()
  // 获取题库分类
  const challenges = await https.challenges()
  // 获取某个分类下的信息
  const {theme_id} = challenges[theme]
  const danGrade = (await https.selfDanGrades({theme_id}))[0] || {}
  const ret = {
    theme_id,
    avatar: accountsSelf.avatar,
    level: accountsSelf.level,
    player_id: player.account_id,
    token: player.access_token,
    dan: danGrade.dan,
    grade: danGrade.grade,
    star: danGrade.star,
    master
  }
  if (master) {
    const {address} = await https.booking(ret)
    ret.address = address
  }
  if (match) {
    const seasons = await https.unfinishedSeasons()
    ret.season_id = seasons.find(s => s.active).id
  }
  return ret
}
