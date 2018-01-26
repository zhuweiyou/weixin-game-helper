const axios = require('axios')
const queryString = require('query-string')

module.exports = async (userid, objectid) => {
  const url = 'https://code.motisky.com/api/authorizeShowAuthor'
  const res = await axios({
    url,
    data: queryString.stringify({
      userid,
      objectid
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
  console.log(`更新成功:${objectid}`)
}
