const fs = require('fs-extra')
const request = require('./request')

// 填入 userid
const userid = ''

// 填入响应内容
const response = []

response.forEach(item => request(userid, item._id))

