const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    credentials: {
        userName: String,
        password: String,
        role: String
    },
    studentInfo: {
        name: {type:String,default:null},
        semester: {type:Number,default:null},
        department: {type:String,default:null},
        section: {type:String,default:null}
    }
})


const student = mongoose.model('student',studentSchema)


module.exports = student