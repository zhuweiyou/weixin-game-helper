const match = require('./match')

match({
  // 抓登录请求返回的 access_token 和 account_id
  access_token: '',
  account_id: '',
  // 分类索引。比如 0 为全能王
  theme: 0
})
