const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const jwt_secret = 'asdfjhsdgfb12312lkj213l41'

// const Teacher = require('./teacherschema')
// const Student = require('./studentschema')
const { Student, Course, Teacher, Attendance } = require('./testSchema')
const {doesStudentExists,createNewStudent,doesTeacherExists,createNewTeacher,findStudent,findTeacher,updateStudentInfo,updateTeacherInfo,addCourse} = require('./basicqueries')

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('hello')
})

app.post('/studentlogin',async (req,res)=>{
    let username = req.body.username
    let password = req.body.password
    let user = await findStudent(username)
    console.log(user)
    console.log(user.credentials,user._id)
    if(user){
        let matched = await bcrypt.compare(password, user.credentials.password)
        if(matched){
            let token = jwt.sign({userlogged: user},jwt_secret)
            return res.send({status:'login as student',token})
        }
        else{
            return res.send({status:'wrong password'})
        }
    }
    else{
        return res.send({status: 'user not exist'})
    }
})

app.post('/teacherlogin', async (req,res)=>{
    let username = req.body.username
    let password = req.body.password
    let user = await findTeacher(username)
    console.log(user)
    console.log(user.credentials,user._id)
    if(user){
        let matched = await bcrypt.compare(password, user.credentials.password)
        if(matched){
            let token = jwt.sign({userlogged: user},jwt_secret)
            return res.send({status:'login as teacher',token})
        }
        else{
            return res.send({status:'wrong password'})
        }
    }
    else{
        return res.send({status: 'user not exist'})
    }
})

app.post('/registeraccount',async (req,res)=>{
    let username = req.body.username
    let password = req.body.password
    let role = req.body.role
    
    if(role=='student'){        
        let exists = await doesStudentExists(username)
        if(exists=='yes') {return res.send({status:'user exists'})}
        if(exists=='no') {
            let hashPassword = await bcrypt.hash(password, 10)
            await createNewStudent(username,hashPassword,role)
            return res.send({status: 'new user created'})
        }
    }

    if(role=='teacher'){        
        let exists = await doesTeacherExists(username)
        if(exists=='yes') {return res.send({status:'user exists'})}
        if(exists=='no') {
            let hashPassword = await bcrypt.hash(password, 10)
            await createNewTeacher(username,hashPassword,role)
            return res.send({status: 'new user created'})
        }
    }

})


app.post('/studentdetails',(req,res)=>{
    let token = req.body.token
    try{
        const user = jwt.verify(token,jwt_secret)
        const loggedInAs = user.userlogged
        return res.send({userData: loggedInAs})
    }   
    catch(err){
        console.log(err.message)
    }
    return res.send('error')
})


app.post('/getstudentinfo',async (req,res)=>{
    let token = req.body.token
    try{
        const user = jwt.verify(token,jwt_secret)
        const loggedInAs = user.userlogged
        let res1 = await Student.findById(loggedInAs._id)
        return res.send({userData: res1})
    }   
    catch(err){
        console.log(err.message)
    }
    return res.send('error')
})

app.post('/updatestudentinfo', async (req,res)=>{
    let token = req.body.token
    let data = req.body.userinfo
    try{
        const user = jwt.verify(token,jwt_secret)
        const loggedInAs = user.userlogged
        console.log(loggedInAs)
        let updated = await updateStudentInfo(loggedInAs._id, data)
        if(updated){
            return res.send({status: "userinfo updated"   })
        }
    }   
    catch(err){
        console.log(err.message)
    }
    return res.send('error')
})


app.post('/updateteacherinfo', async(req,res)=>{
    let token = req.body.token
    let data = req.body.userinfo
    console.log(data,'data---------')
    try{
        const user = jwt.verify(token,jwt_secret)
        const loggedInAs = user.userlogged
        console.log(loggedInAs)
        let updated = await updateTeacherInfo(loggedInAs._id, data)
        if(updated){
            return res.send({status: "userinfo updated"   })
        }
    }   
    catch(err){
        console.log(err.message)
    }
    return res.send('error')
})

app.post('/getteacherinfo', async (req,res)=>{
    let token = req.body.token
    try{
        const user = jwt.verify(token,jwt_secret)
        const loggedInAs = user.userlogged
        // console.log('loggedin as user------------------------', loggedInAs)
        let res1 = await Teacher.findById(loggedInAs._id)
        // return res.send({userData: loggedInAs})
        // console.log(res1)
        return res.send({userData: res1})
    }   
    catch(err){
        console.log(err.message)
    }
    return res.send('error')
})

app.post('/addcourse',async (req,res)=>{
    let token = req.body.token
    let courseInfo = req.body.courseInfo
    // console.log(courseInfo,'courseinfo --------------------')
    try{
        const user = jwt.verify(token,jwt_secret)
        const loggedInAs = user.userlogged
        let courseAdded = await addCourse(loggedInAs._id,courseInfo)
        let courses = await Teacher.findById(loggedInAs._id).populate('courses') //extra line for redux
        return res.send({status: 'course added',courses:courses})
    }
    catch(err){
        console.log(err.message)
    }
    return res.send('error')
})

app.post('/getteachercourses',async (req,res)=>{
    let token = req.body.token
    try{
        const user = jwt.verify(token,jwt_secret)
        const loggedInAs = user.userlogged
        let teacherCourses = await Teacher.findById(loggedInAs._id).populate('courses')
        return res.send({status: 'course added', courses: teacherCourses})
    }
    catch(err){
        console.log(err.message)
    }
    return res.send('error')
})



app.listen(3003,()=>{
    console.log('connected to server')
})

async function a(){
    let a = await mongoose.connect('mongodb://127.0.0.1:27017/testdb')
    console.log('connected')
}
a()