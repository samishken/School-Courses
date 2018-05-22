// require all our ependencies
const express = require('express')
// create and set up our express app
const app = express()
const hbs = require('hbs')
const coursesController = require('./controllers/courses')
const bodyParser = require('body-parser')
const newCourses = require('./models/Courses')

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  newCourses.find({}).then(function (courses) {
    res.render('index', { courses })
  })
})

// define a route
// app.get('/', (req, res) => {
//   res.send('Liverpool')
// })

app.use('/courses', coursesController)
// start our server
app.listen(3004, () => console.log('This is working'))
