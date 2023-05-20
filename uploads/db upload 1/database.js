const mongoose = require('mongoose')
// const student = require('./schemas')
const Student = require('./studentschema')
const Teacher = require('./teacherschema')



async function a(){
    let a = await mongoose.connect('mongodb://127.0.0.1:27017/testdb')
    console.log('connected')
}
a()



// async function add(){
//     // let studnet1 = await student.findOneAndUpdate({credentials:{userName:'tayyab'}},{ credentials: {password:'asdf'}   })
    
//  //   let studnet1 = await student.findOneAndUpdate({credentials:{userName:'tayyab'}},{ credentials: { $set:{password:'asdf'} }  })

//     // let studnet1 = await student.findOneAndUpdate({credentials:{userName:'tayyab'}},{  $set: { credentials:  { password:'asdf'} } })

//     // let studnet1 = await student.findOneAndUpdate({credentials:{userName:'tayyab'}}, { $set: { credentials:  {$set:{ password:'asdf'} }} })   


//     // let studnet1 = await student.findOneAndUpdate({'credentials.userName':'tayyab'},{$set: {'credentials.password':'mypassword'}})
//     let studnet1 = await student.findOneAndUpdate({'credentials.userName':'tayyab'},{$set: {'studentInfo.semester':8,'studentInfo.section':'B','studentInfo.department':'Mechatronics'}})

//     // let studnet1 = await student.create({credentials:{userName:'tayyab'}})

//     // let studnet1 = await student.create({'credentials.userName': 'tayyab'})

//     console.log(studnet1)
  
//     console.log('studnet1 saved')
// }

// add()

// let studnet1 = await student.create({credentials:{userName:'tayyab'}})


// async function queries(){
//     await user.fiind
// }
// queries()



async function b(){
    let a = await Student.create({credentials:{userName:'teache1',password:'asdf',role:'teacher'}})
    console.log(a)
}
b(
    
)