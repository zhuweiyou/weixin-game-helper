const axios = require('axios')
const qs = require('querystring')

module.exports = async (userid, objectid) => {
  const {data} = await axios({
    url: 'https://code.motisky.com/api/authorizeShowAuthor',
    data: qs.stringify({userid, objectid}),
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
  console.log('[Response]', data)
}
