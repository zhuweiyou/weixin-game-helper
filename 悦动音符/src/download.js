const fs = require('fs-extra')
const exec = require('child_process').exec
const request = require('./request')

;(async () => {
  const res = await request('https://mp.weixin.qq.com/wxagame/wxagame_getmusiclist')
  if (!res.music) {
    console.log('下载音乐失败', res)
    return
  }
  const data = res.music.map(({title, music_id}) => ({
    title,
    music_id,
    score: 3588, // 推荐分数
    is_request: true
  }))
  await fs.writeFile('data/songs.json', JSON.stringify(data, null, 2))
  console.log('下载音乐完毕，编辑 data/songs.json 可修改 is_request 决定是否刷分（false 为不刷）')
  exec(`${/^win/.test(process.platform) ? 'start' : 'open'} data`)
})()
