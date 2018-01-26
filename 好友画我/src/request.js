const axios = require('axios')
const queryString = require('querystring')

module.exports = async (userid, objectid) => {
  const {data} = await axios({
    url: 'https://code.motisky.com/api/authorizeShowAuthor',
    data: queryString.stringify({
      userid,
      objectid
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
  console.log(data)
}
