const fs = require('fs-extra')
const request = require('./request')

const userid = ''//填入你的userid

;(async () => {
  let data
  try {
    data = await fs.readFile('local.json')
  } catch (e) {
    console.log('请先填入数据到 local.json 文件中')
    return
  }
  JSON.parse(data.toString())
    .forEach(item => request(userid, item._id))
})()
