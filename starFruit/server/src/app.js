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
var Post = require("../models/post");

// CREATE: Add new post
app.post('/posts', (req, res) => {
  var db = req.db;
  var time = req.body.time;
  var minutes = req.body.minutes;
  var seconds = req.body.seconds;
  var name = req.body.name;
  var description = req.body.description;
  var knowledgePoint = req.body.knowledgePoint;
  var thinkingPoint = req.body.thinkingPoint;
  var communicationPoint = req.body.communicationPoint;
  var applicationPoint = req.body.applicationPoint;
  var new_post = new Post({
    time: time,
    minutes: minutes,
    seconds: seconds,
    name: name,
    description: description,
    knowledgePoint: knowledgePoint,
    thinkingPoint: thinkingPoint,
    communicationPoint: communicationPoint,
    applicationPoint: applicationPoint
  })

  new_post.save(function (error) {
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
app.get('/posts', (req, res) => {
  Post.find({}, 'time minutes seconds name description knowledgePoint thinkingPoint communicationPoint applicationPoint', function (error, posts) {
    if (error) { console.error(error); }
    res.send({
      posts: posts
    })
  }).sort({_id:-1})
})

// UPDATE: Fetch single post
app.get('/post/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'time minutes seconds name description knowledgePoint thinkingPoint communicationPoint applicationPoint', function (error, post) {
    if (error) { console.error(error); }
    res.send(post)
  })
})

// Update a post
app.put('/posts/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'time minutes seconds name description knowledgePoint thinkingPoint communicationPoint applicationPoint', function (error, post) {
    if (error) { console.error(error); }
    post.time = req.body.time
    post.minutes = req.body.minutes
    post.seconds = req.body.seconds
    post.name = req.body.name
    post.description = req.body.description
    post.knowledgePoint = req.body.knowledgePoint
    post.thinkingPoint = req.body.thinkingPoint
    post.communicationPoint = req.body.communicationPoint
    post.applicationPoint = req.body.applicationPoint
    post.save(function (error) {
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
app.delete('/posts/:id', (req, res) => {
  console.log('delete me...')
  var db = req.db;
  Post.remove({
    _id: req.params.id
  }, function(err, post){
    if (err)
      res.send(err)
      Post.find({}, 'time minutes seconds name description knowledgePoint thinkingPoint communicationPoint applicationPoint', function (error, posts) {
      if (error) { console.error(error); }
     	res.send({
      		posts: posts
    	})
  	}).sort({_id:-1}) 
  })
})

/*
// CREATE: Add new dicussion 
app.discussion('/post', (req, res) => {
  var db = req.db;
  var dicussionTopic = req.body.dicussionTopic;
  var new_post = new Post({
    dicussionTopic: dicussionTopic,
  })

  new_post.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Discussion saved successfully!'
    })
  })
}) */