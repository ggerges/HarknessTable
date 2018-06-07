var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DiscussionSchema = new Schema({
  topic: String,
  students: Array
});

var Discussion = mongoose.model("Discussion", DisccussionSchema);
module.exports = Discussion;