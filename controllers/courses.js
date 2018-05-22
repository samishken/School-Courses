const express = require('express')
const router = express.Router()
const newCourses = require('../models/Courses')

router.get('/', (req, res) => {
  newCourses.find({}).then(function (courses) {
    res.render('courses/index', { courses })
  })
})

router.get('/new', (req, res) => {
  res.render('courses/new')
})

// new post add to inventory and
router.post('/', (req, res) => {
  newCourses.create({
    Course: req.body.course,
    Instructor: req.body.instructor
  }).then(courses => {
    res.redirect('/courses')
  })
    .catch(err => console.log('it\'s not adding the new inventory'))
})


//show details
router.get('/:id', (req, res) => {
  newCourses.findOne({ _id: req.params.id })
    .then(courses => {
      res.render('courses/show', courses)
    })
    .catch(err => console.log('oh oh problem with showing details'))
})

// edit
router.get('/edit/:id', (req, res) => {
  newCourses.findOne({ _id: req.params.id })
  .then(course => {
    res.render('courses/edit', course)
  })
})


//delete
// router.delete('/edit/:id', (req, res) => {
//   newCourses.findOneAndRemove({ _id: req.params.id })
//   .then(courses => {
//     res.redirect('/courses/index')
//   })
// })

router.delete("/:id", (req, res) => {
  newCourses.findOneAndRemove({ _id: req.params.id })
  .then(() => {
    res.redirect("/courses")
  })
})

module.exports = router
