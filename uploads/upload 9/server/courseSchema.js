
const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
    
  title: String,
  creditHours: Number
});

const CourseModel = mongoose.model('Course', CourseSchema);
module.exports = CourseModel;
//export default ReviewModel;