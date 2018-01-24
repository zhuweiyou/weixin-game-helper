const request = require('./request')

// 抓包 https://mp.weixin.qq.com/wxagame/wxagame_getmusicmeta 返回的 music_id
const songs = [
  // 篇章1
  // 新年好，生日快乐，铃儿响叮当
  'It56nWPr9RGXmkDmhP8sTQ', 'e_wFWXsvtfgurmV1_HHI9Q', 'f3NDlYesND0GDO9RyvCoRg',

  // 篇章2
  // 有需求的自己挨个抓 music_id 填到这里
]

module.exports = options =>
  songs.forEach(stage_id => request({...options, stage_id}))

