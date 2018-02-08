const mongoose = require('mongoose')

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
  answer: Number,
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
})

QuizSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createdAt = this.meta.updatedAt = Date.now()
  } else {
    this.meta.updatedAt = Date.now()
  }
  next()
})

module.exports = mongoose.model('Quiz', QuizSchema)
