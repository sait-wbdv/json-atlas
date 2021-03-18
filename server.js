const mongoose = require('./_connection.js') 

const express = require('express')
const cors = require('cors')

const api = require('./routes/v0')
const Definition = require('./models/definition')
const app = express()

app.use('/api/v0', api)

// Boring stuff
app.use((req,res) => {
  res.sendStatus(404)
})

const PORT = process.env.PORT || 3000
app.listen(PORT,() => {
  console.log(`Listening on port ${PORT}`)
})