const express = require('express')
const router = express.Router()

const newCourses = require('../models/Courses')

router.get('/', (req, res) => {
  newCourses.find({}).then(function (courses) {
    res.render('courses/index', { courses })
  })
})

module.exports = router
