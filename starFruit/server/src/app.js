const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || 8081)

// connection with database called posts
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/posts');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});



// Post model 
var Student = require("../models/student");

// CREATE: Add new post
app.student('/students', (req, res) => {
  var db = req.db;
  var name = req.body.name;
  var description = req.body.description;
  var knowledgePoint = req.body.knowledgePoint;
  var thinkingPoint = req.body.thinkingPoint;
  var communicationPoint = req.body.communicationPoint;
  var applicationPoint = req.body.applicationPoint;
  var new_student = new Student({
    name: name,
    description: description,
    knowledgePoint: knowledgePoint,
    thinkingPoint: thinkingPoint,
    communicationPoint: communicationPoint,
    applicationPoint: applicationPoint
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

// READ: Fetch all posts in descending order
app.get('/students', (req, res) => {
  Student.find({}, 'name description knowledgePoint thinkingPoint communicationPoint applicationPoint', function (error, students) {
    if (error) { console.error(error); }
    res.send({
      students: students
    })
  }).sort({_id:-1})
})

// UPDATE: Fetch single post
app.get('/student/:id', (req, res) => {
  var db = req.db;
  Student.findById(req.params.id, 'name description knowledgePoint thinkingPoint communicationPoint applicationPoint', function (error, student) {
    if (error) { console.error(error); }
    res.send(student)
  })
})

// Update a post
app.put('/students/:id', (req, res) => {
  var db = req.db;
  Student.findById(req.params.id, 'name description knowledgePoint thinkingPoint communicationPoint applicationPoint', function (error, student) {
    if (error) { console.error(error); }

    student.name = req.body.name
    student.description = req.body.description
    student.knowledgePoint = req.body.knowledgePoint
    student.thinkingPoint = req.body.thinkingPoint
    student.communicationPoint = req.body.communicationPoint
    student.applicationPoint = req.body.applicationPoint
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

// DELETE: Delete a post
app.delete('/students/:id', (req, res) => {
  console.log('delete me...')
  var db = req.db;
  Student.remove({
    _id: req.params.id
  }, function(err, student){
    if (err)
      res.send(err)
      Student.find({}, 'name description knowledgePoint thinkingPoint communicationPoint applicationPoint', function (error, students) {
      if (error) { console.error(error); }
     	res.send({
      		students: students
    	})
  	}).sort({_id:-1}) 
  })
})
