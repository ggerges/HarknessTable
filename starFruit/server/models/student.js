var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
  title: String,
  description: String
});

var Student = mongoose.model("Student", StudentSchema);
module.exports = Student;