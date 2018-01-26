const request = require('./request')

// 填入 userid
const userid = ''

// 填入响应内容
const response = []

response.forEach(({_id}) => request(userid, _id))

