var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
  name: String,
  description: String,
  knowledgePoint: String,
  thinkingPoint: String,
  communicationPoint: String,
  applicationPoint: String
});

var Student = mongoose.model("Student", StudentSchema);
module.exports = Student;