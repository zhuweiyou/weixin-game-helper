const match = require('./match')

match({
  // 抓登录请求返回的 access_token 和 account_id
  access_token: '',
  account_id: '',
  // 分类索引。（关注打印的 `[challenges]` 数组，索引对应它）
  theme: 0
})
