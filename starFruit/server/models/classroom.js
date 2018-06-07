var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ClassroomSchema = new Schema({
  courseName: String,
  students: Array
});

var Classroom = mongoose.model("Classroom", ClassroomSchema);
module.exports = Classroom;