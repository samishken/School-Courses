const mongoose = require('../db/connection')

const coursesSchema = new mongoose.Schema({
  Course: String,
  Instructor: String
})

const SchoolCourses = mongoose.model('SchoolCourses', coursesSchema)

module.exports = SchoolCourses
