var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DiscussionSchema = new Schema({
  topic: String,
  /* students: {
  		name: String,
  		description: String,
  		knowledgePoint: String,
  		thinkingPoint: String,
  		communicationPoint: String,
  		applicationPoint: String
 	} */
});

var Discussion = mongoose.model("Discussion", DiscussionSchema);
module.exports = Discussion;