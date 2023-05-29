const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    credentials:{
        userName: String,
        password: String,
        role: String
    },
    studentInfo:{
        name: {type: String, default:null},
        department: {type: String, default:null},
        section: {type: String, default:null},
        semester: {type: Number, default: 1},
    }
});

const teacherSchema = new mongoose.Schema({
    credentials:{
        userName: String,
        password: String,
        role: String
    },
    teacherInfo: {
        name: {type: String, default:null},
        email: {type: String, default:null},
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const courseSchema = new mongoose.Schema({
    courseInfo: {
        courseName: String,
        courseCode: String,
        creditHours: String
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
});


const attendanceSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  attendance: [{
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true
    },
    present: {
      type: Boolean,
      default: false
    }
  }]
});


const Student = mongoose.model('Student', studentSchema);
const Course = mongoose.model('Course', courseSchema);
const Teacher = mongoose.model('Teacher', teacherSchema);
const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = { Student, Course, Teacher, Attendance };