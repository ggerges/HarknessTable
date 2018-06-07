var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  name: String,
  description: String,
  knowledgePoint: String,
  thinkingPoint: String,
  communicationPoint: String,
  applicationPoint: String
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;