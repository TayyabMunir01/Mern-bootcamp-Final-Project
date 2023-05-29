import { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const mainStyle={
  marginTop: '75px',
  height:'500px',
  background:'red',
  position:'relative',
  fontSize: '32px',
  maxWidth: '500px',
  boxShadow: '0 2px 6px 0 #1c1c1c'
}


function Login() {
  let [loginState, setLoginState] = useState('main')
  let navigate = useNavigate()

  let tlu = useRef()
  let tlp =  useRef()

  let slu = useRef()
  let slp = useRef()

  let rpu = useRef()
  let rpp = useRef()
  let rpr = useRef()
 
  function handlerole(e){
    console.log(e.target.value)
    console.log(rpr)
    rpr.current = e.target.value
    console.log(rpr)
  }


  function handleRegister(e){
    e.preventDefault()
    setLoginState('register')
  }
  function handleTeacherLogin(){
    setLoginState('teacher')
  }
  function handleStudentLogin(){
    setLoginState('student')
  }
  function handleAlreadyHaveAccount(e){
    e.preventDefault()
    setLoginState('main')
  }


  async function loginStudent(){
    let username = slu.current.value
    let password = slp.current.value
    
    let res = await axios.post('http://localhost:3003/studentlogin',{username,password})
    console.log(res.data)
    localStorage.setItem('token',res.data.token)
    if(res.data.status == 'wrong password'){
      alert('wrong password')
    }    
    if(res.data.status == 'user not exist'){
      alert('user not exists')
    }
    if(res.data.status == 'login as student'){
      navigate('/student')
    }
  }

 async function loginTeacher(){
  let username = tlu.current.value
  let password = tlp.current.value
  
  let res = await axios.post('http://localhost:3003/teacherlogin',{username,password})
  console.log(res.data)
  localStorage.setItem('token',res.data.token)
  if(res.data.status == 'wrong password'){
    alert('wrong password')
  }    
  if(res.data.status == 'user not exist'){
    alert('user not exists')
  }
  if(res.data.status == 'login as teacher'){
    navigate('/teacher')
  }
  }

  async function registerAccount(){
    let username = rpu.current.value
    let password = rpp.current.value
    let role = rpr.current
    console.log(username,password,role)

    let res = await axios.post('http://localhost:3003/registeraccount',{username,password,role})
    console.log(res.data)
    if(res.data.status == 'user exists'){
      alert('user exists')
    }
    if(res.data.status=='new user created'){
      if(role=='student')
        setLoginState('student')
      if(role=='teacher')
        setLoginState('teacher')
    }

  }


  if(loginState=='main') {
    return <>
          <div style={{width:'100vw',height:'100vh',background:'url("")',position:'absolute',top:'0',left:'0',objectFit:'contain',userSelect:'none'}}>
              <div style={mainStyle} class='container-sm bg-white d-flex justify-content-center align-items-center gap-5 rounded-4'>
                <button style={{fontSize: '25px'}} class='btn btn-primary h-50 rounded-4' onClick={handleTeacherLogin} >Teacher Login</button>
                <button style={{fontSize: '25px'}} class='btn btn-primary h-50 rounded-4' onClick={handleStudentLogin}>Student Login</button>
                <a style={{position:'absolute',top:'80%',color:'red',fontSize:'20px'}} href='' onClick={handleRegister}>Don't have Account? Register!</a>
              </div>    
          </div>
           </>
  }

  if(loginState=='teacher') {
    return <>
           <div style={{width:'100vw',height:'100vh',background:'url("")',position:'absolute',top:'0',left:'0',objectFit:'contain',userSelect:'none'}}>
              <div style={mainStyle} class='container-sm bg-white border border-white rounded-4'>
                  <div class='mt-5 ms-3'>Teacher Login</div>
                  <div class='mt-5'>
                    <input type='text' name='teacherName' class='form-control w-75 m-3' placeholder='Enter User Name' ref={tlu}/>
                    <input type='password' name='teahcerPassword' class='form-control w-75 m-3' placeholder='Enter Password' ref={tlp}/>
                  </div>
                  <div>
                      <button class='btn btn-primary ms-3 mt-5' onClick={loginTeacher}>Login</button>
                  </div>
                  <div style={{fontSize:'20px'}} class='ms-3 mt-5 text-primary text-decoration-underline'>
                    <a href='' onClick={handleAlreadyHaveAccount}>Go back to Main Page!</a> 
                  </div>
              </div>
           </div>
           </>
  }

  if(loginState=='student'){
    return (
      <>
       <div style={{width:'100vw',height:'100vh',background:'url("")',position:'absolute',top:'0',left:'0',objectFit:'contain',userSelect:'none'}}>
          <div style={mainStyle} class='container-sm bg-white border border-white rounded-4'>
              <div class='mt-5 ms-3'>Student Login</div>
              <div class='mt-5'>
                <input type='text' name='studentName' class='form-control w-75 m-3' placeholder='Enter User Name' ref={slu}/>
                <input type='password' name='studentPassword' class='form-control w-75 m-3' placeholder='Enter Password' ref={slp}/>
              </div>
              <div>
                  <button class='btn btn-primary ms-3 mt-5' onClick={loginStudent}>Login</button>
              </div>
              <div style={{fontSize:'20px'}} class='ms-3 mt-5 text-primary text-decoration-underline'>
                <a href='' onClick={handleAlreadyHaveAccount}>Go back to Main Page!</a> 
              </div>
          </div>
       </div>
      </>
    )
  }

  if(loginState=='register'){
    return <>
         <div style={{width:'100vw',height:'100vh',background:'url("")',position:'absolute',top:'0',left:'0',objectFit:'contain',userSelect:'none'}}>
              <div style={mainStyle} class='container-sm bg-white border border-white rounded-4'>
                <div class='mt-5 ms-3'>Register</div>
                <div class='mt-5'>
                  <input type='text' name='newUserName' class='form-control w-75 m-3' placeholder='Enter User Name' ref={rpu}/>
                  <input type='password' name='newUserPassword' class='form-control w-75 m-3 ' placeholder='Enter Password' ref={rpp}/>
                </div>
                <div style={{fontSize:'18px'}} class='mt-4 ms-3'>
                  <span class='me-4 fw-bold'>Role:</span>
                    <label htmlFor='teacher' >Teacher</label>  <input type='radio' name='role'  value='teacher' id='teacher' class='me-2 form-check-input' onChange={handlerole}/>
                    <label htmlFor='student'>Student</label> <input type='radio' name='role' value='student' id='student' class='me-2 form-check-input' onChange={handlerole}/>
                </div>
                <div>
                    <button class='btn btn-primary ms-3 mt-5' onClick={registerAccount}>Register</button>
                </div>
                <div style={{fontSize:'20px'}} class='mt-4 ms-3 text-primary text-decoration-underline'>
                  <a href='' onClick={handleAlreadyHaveAccount}>Already have Account? Go back.</a> 
                </div>
            </div>
         </div>
    </>
  }


}

export default Login;
