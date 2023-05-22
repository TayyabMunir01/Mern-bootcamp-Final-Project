const mongoose = require('mongoose')


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
    },
    currentCourses:[{
        courseInfo: {
            professorName: String,
            courseName: String,
            semester: String,
            hoursPerWeek: Number
        },
        attendance: [
            {
                num: Number,
                date: Date,
                timing: String,
                present: String            
            }
        ]
    }
    ],
    previousCourses:[{
        courseInfo: {
            professorName: String,
            courseName: String,
            semester: String,
            hoursPerWeek: Number
        },
        attendanceData: [
            {
                num: Number,
                date: Date,
                timing: String,
                present: String            
            }
        ]
    }
    ],
})


const Student = mongoose.model("Student",studentSchema)


module.exports = Student