const mongoose = require('mongoose')
const Teacher = require('./teacherschema')
const Student = require('./studentschema')



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


module.exports = {
    doesStudentExists,
    createNewStudent,
    doesTeacherExists,
    createNewTeacher,
    findStudent,
    findTeacher
}