// require all our ependencies
const express = require('express')
// create and set up our express app
const app = express()
const hbs = require('hbs')
const coursesController = require('./controllers/courses')
//const bodyParser = require('body-parser')

app.set('view engine', 'hbs')




// define a route
// app.get('/', (req, res) => {
//   res.send('Liverpool')
// })

app.use('/courses', coursesController)
// start our server
app.listen(3004, () => console.log('This is working'))
