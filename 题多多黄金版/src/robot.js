const search = require('search')
const crypto = require('./crypto')

module.exports = {
  * beforeSendRequest (requestDetail) {},
  * beforeSendResponse (requestDetail, responseDetail) {
    if (requestDetail.url.indexOf('/practice/practice_v2?action=get_subject') !== -1) {
      const response = responseDetail.response
      const body = JSON.parse(response.body)
      const data = JSON.parse(crypto.decrypt(body.data, body.encrypt))
      console.log('[返回题目]', JSON.stringify(data))
      const searchResult = yield search({
        question: data.title,
        options: data.answer.map(({ans}) => ans)
      })
      console.log('[搜索答案]', JSON.stringify(searchResult))
      searchResult.result.forEach((r, i) => {
        data.answer[i].ans = `${searchResult.index === i ? '√ ' : ''}[${r}] ${data.answer[i].ans}`
      })
      body.data = crypto.encrypt(JSON.stringify(data), body.encrypt)
      response.body = JSON.stringify(body)
      return {response}
    }
  }
}
