const mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')

const QuizSchema = new mongoose.Schema({
  quiz: {
    type: String,
    unique: true,
    dropDups: true
  },
  options: [String],
  school: String,
  type: String,
  contributor: String,
  endTime: String,
  curTime: String,
  answer: Number
})

QuizSchema.plugin(timestamp)

module.exports = mongoose.model('Quiz', QuizSchema)
