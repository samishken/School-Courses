const express = require('express')
const router = express.Router()

const newMessages = require('../models/Courses')

router.get('/', (req, res) => {
  newMessages.find({}).then(function (messages) {
    res.render('messages/index', { messages })
  })
})

router.get('/new', (req, res) => {
    res.render('messages/new')
  })

module.exports = router
