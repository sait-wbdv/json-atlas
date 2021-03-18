const mongoose = require('../_connection')
const express = require('express')

const Definition = require('../models/definition')
const router = express()

router.get('/definitions', async (req, res) => {
  const definitions = await Definition.find({})
  try {
    res.json(definitions)
  } catch (error) {
    res.sendStatus(404)
  }
})

module.exports = router