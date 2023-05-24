const mongoose = require('mongoose')
// const Teacher = require('./teacherschema')
// const Student = require('./studentschema')
const { Student, Course, Teacher, Attendance } = require('./testSchema')



async function doesStudentExists(username){
    let res = await Student.findOne({'credentials.userName' : username})
    if(res!=null) {
        console.log('user exists')
        return 'yes'
    }
    else { return 'no'}
}
async function createNewStudent(username,password,role){
    let res = await Student.create({credentials: {userName:username,password,role}})
    console.log('new student added')
}

async function doesTeacherExists(username){
    let res = await Teacher.findOne({'credentials.userName' : username})
    if(res!=null) {
        console.log('user exists')
        return 'yes'
    }
    else { return 'no'}
}

async function createNewTeacher(username,password,role){
    let res = await Teacher.create({credentials: {userName:username,password,role}})
    console.log('new student added')
}

async function findStudent(username){
    let res = await Student.findOne({'credentials.userName' : username})
    if(res!=null){
        return res
    }
    else{
        return false
    }
}

async function findTeacher(username){
    let res = await Teacher.findOne({'credentials.userName' : username})
    if(res!=null){
        return res
    }
    else{
        return false
    }
}

async function updateStudentInfo(id, userinfo){
    let res = await Student.findOneAndUpdate({_id:id},{$set:{'studentInfo.name':userinfo.name,'studentInfo.department':userinfo.department,'studentInfo.section':userinfo.section,'studentInfo.semester':userinfo.semester}})
    if(res){
        return true
    }
    else{
        return false
    }
}

async function updateTeacherInfo(id, userinfo){
    let res = await Teacher.findOneAndUpdate({_id:id},{$set:{'teacherInfo.name':userinfo.name,'teacherInfo.email':userinfo.email}})
    if(res){
        return true
    }
    else{
        return false
    }
}

async function addCourse(id,userInfo){
    let res = await Course.create({courseInfo:{courseName: userInfo.courseName,courseCode: userInfo.courseCode,creditHours: userInfo.creditHours,semester: userInfo.semester, department: userInfo.department,section: userInfo.section}, teacher: new mongoose.Types.ObjectId(id) })
    let res1 = await Teacher.findByIdAndUpdate( id,  {$push:{courses: [ new mongoose.Types.ObjectId(res._id) ]}} )
}


module.exports = {
    doesStudentExists,
    createNewStudent,
    doesTeacherExists,
    createNewTeacher,
    findStudent,
    findTeacher,
    updateStudentInfo,
    updateTeacherInfo,
    addCourse
}