const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || 8081)

// connection with database called students
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/students');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});



// Student model 
var Student = require("../models/student");

// CREATE: Add new student
app.student('/students', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var new_student = new Student({
    title: title,
    description: description
  })

  new_student.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Student saved successfully!'
    })
  })
})

// READ: Fetch all students in descending order
app.get('/students', (req, res) => {
  Student.find({}, 'title description', function (error, students) {
    if (error) { console.error(error); }
    res.send({
      students: students
    })
  }).sort({_id:-1})
})

// UPDATE: Fetch single student
app.get('/student/:id', (req, res) => {
  var db = req.db;
  Student.findById(req.params.id, 'title description', function (error, student) {
    if (error) { console.error(error); }
    res.send(student)
  })
})

// Update a student
app.put('/students/:id', (req, res) => {
  var db = req.db;
  Student.findById(req.params.id, 'title description', function (error, student) {
    if (error) { console.error(error); }

    student.title = req.body.title
    student.description = req.body.description
    student.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})

// DELETE: Delete a student
app.delete('/students/:id', (req, res) => {
  console.log('delete me...')
  var db = req.db;
  Student.remove({
    _id: req.params.id
  }, function(err, student){
    if (err)
      res.send(err)
      Student.find({}, 'title description', function (error, students) {
      if (error) { console.error(error); }
     	res.send({
      		students: students
    	})
  	}).sort({_id:-1}) 
  })
})
