const axios = require('axios')
const querystring = require('querystring')

module.exports = async (userid, objectid) => {
  const {data} = await axios({
    url: 'https://code.motisky.com/api/authorizeShowAuthor',
    data: querystring.stringify({userid, objectid}),
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
  console.log('[Response]', data)
}
