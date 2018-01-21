require('./request')({
  session_id: '', // 抓登录请求返回的 session_id
  // 可自行修改一个合理的分数 = 宝石 * 300 + (星球 - 100) * 200 + combo * n 各种加成等等，否则分数会清零
  newscore: 233000, // 分数
  level: 334, // 星球
  baoshi: 233, // 宝石
  combo: 233 // 连击
})
