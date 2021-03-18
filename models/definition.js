const mongoose = require('mongoose')

const defSchema = new mongoose.Schema({
  term: String,
  description: String,
  slug: String
})

const Definition = mongoose.model('Definition', defSchema)

module.exports = Definition