const Courses = require('../models/Courses')

const data = require('./seeds.json')

Courses.remove({})
  .then(() => {
    console.log('passed')
    return Courses.collection.insert(data)
  })
  .then(() => {
    process.exit()
  }) 