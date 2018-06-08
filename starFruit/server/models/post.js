var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  time: String,
  minutes: Array,
  seconds: Array,
  // discussions: Array,
  // discussionTopic: String,
  name: String,
  description: String, // dicussion notes concerning student
  /*
  skills: {
  	knowledgePoint: Number
  }, */
  knowledgePoint: Number,
  thinkingPoint: Number,
  communicationPoint: Number,
  applicationPoint: Number
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;