let express = require('express')
let app = express()
let cors = require('cors')
let jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())

let jwt_secret = 'asdf1242asdf13-0i123-0120923'

const users = [
    {
        name: 'tayyab',
        data : {
            fullname: 'tayyab munir',
            city: 'islamabad'
        }
    },
    {
        name: 'teacher1',
        data: {
            fullname: 'teacher one',
            city: 'lahore'
        }
    }
]

app.get('/',(req,res)=>{
    res.send('hello')
})

app.post('/login',(req,res)=>{
    let user = req.body.name
    console.log(req.body)
    let token = jwt.sign({userlogged: user},jwt_secret)
    // console.log(res.status(201))
    console.log(token)
    console.log('------------')
    if(user=='tayyab'){
       return res.send({status:'login as student',token:token})
    }
    if(user=='teacher1'){
        return res.send({status:'login as teacher',token:token})
    }
    return res.send({status:'user not found'})
})

app.post('/studentdata',async (req,res)=>{
    const token = req.body.token
    try{
        const user = jwt.verify(token,jwt_secret)
        const userName = user.userlogged
        console.log(user)
        if(userName=='tayyab')
        return res.send({ui: users[0].data})
        if(userName=='teacher1')
        return res.send({ui: users[1].data})
    }
    catch(err){
        console.log(err.message)
    }
    return res.send('error')
})

app.listen(3003,()=>{
    console.log('server running ---------')
})


