// post.js (student) schema model
// in this project, a "post" will be representing a "student" 
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// student schema model properties
var PostSchema = new Schema({
  name: String, // name of student
  description: String, // dicussion notes concerning student
  knowledgePoint: Number, // K points awarded for current discussion
  thinkingPoint: Number, // T points awarded for current discussion
  communicationPoint: Number, // C points awarded for current discussion
  applicationPoint: Number // A points awarded for current discussion
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;