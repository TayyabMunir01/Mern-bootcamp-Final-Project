const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    credentials: {
        userName: String,
        password: String,
        role: String
    },
    currentCourses:[
        {
            courseInfo: {
                courseName: String,
                professorName: String,
                department: String,
                section: String,
                semester: Number,
                courseCode: String,
                hoursPerWeek: Number,
                totalWeeks: Number,
                daysOfWeek: Array,
                Timings: Array
            },
            courseTable: [{
                num: Number,
                date: Date,
                timing: String,
                marked: Boolean
            }],
            addedStudents: [
                {name: String,
                department: String,
                section: String,
                id: String
                }
            ],
            attendanceData:[
                {
                    date: Date,
                    timing: String,
                    presentStudents: Array,
                    absentStudents: Array
                }
            ]
        }
    ],
    previousCourses:[
        {
            courseInfo: {
                courseName: String,
                professorName: String,
                department: String,
                section: String,
                semester: Number,
                courseCode: String,
                hoursPerWeek: Number,
                totalWeeks: Number,
                daysOfWeek: Array,
                Timings: Array
            },
            courseTable: [{
                num: Number,
                date: Date,
                timing: String,
                marked: Boolean
            }],
            addedStudents: [
                {name: String,
                department: String,
                section: String,
                id: String
                }
            ],
            attendanceData:[
                {
                    date: Date,
                    timing: String,
                    presentStudents: Array,
                    absentStudents: Array
                }
            ]
        }
    ]
})

const Teacher = mongoose.model('Teacher',teacherSchema)


module.exports = Teacher