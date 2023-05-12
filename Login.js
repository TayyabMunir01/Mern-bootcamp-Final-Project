import { useState } from 'react';

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
  function handleRegister(e){
    e.preventDefault()
    console.log(e,e.target)
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

  if(loginState=='main') {
    return <>
          <div style={{width:'100vw',height:'100vh',background:'url("")',position:'absolute',top:'0',left:'0',objectFit:'contain'}}>
              <div style={mainStyle} class='container-sm bg-white d-flex justify-content-center align-items-center gap-5 rounded-4'>
                <button style={{fontSize: '25px'}} class='btn btn-primary h-50 rounded-4' onClick={handleTeacherLogin}>Teacher Login</button>
                <button style={{fontSize: '25px'}} class='btn btn-primary h-50 rounded-4' onClick={handleStudentLogin}>Student Login</button>
                <a style={{position:'absolute',top:'80%',color:'red'}} href='' onClick={handleRegister}>Register</a>
              </div>    
          </div>
           </>
  }

  if(loginState=='teacher') {
    return <>
           <div style={{width:'100vw',height:'100vh',background:'url("")',position:'absolute',top:'0',left:'0',objectFit:'contain'}}>
              <div style={mainStyle} class='container-sm bg-white border rounded-4'>
                  <div class='mt-5 ms-3'>Teacher Login</div>
                  <div class='mt-5'>
                    <input type='text' name='userName' class='form-control w-75 m-3' placeholder='Enter User Name'/>
                    <input type='text' name='userPassword' class='form-control w-75 m-3' placeholder='Enter Password'/>
                  </div>
                  <div>
                      <button class='btn btn-primary ms-3 mt-5'>Login</button>
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
       <div style={{width:'100vw',height:'100vh',background:'url("")',position:'absolute',top:'0',left:'0',objectFit:'contain'}}>
          <div style={mainStyle} class='container-sm bg-white border rounded-4'>
              <div class='mt-5 ms-3'>Student Login</div>
              <div class='mt-5'>
                <input type='text' name='userName' class='form-control w-75 m-3' placeholder='Enter User Name'/>
                <input type='text' name='userPassword' class='form-control w-75 m-3' placeholder='Enter Password'/>
              </div>
              <div>
                  <button class='btn btn-primary ms-3 mt-5'>Login</button>
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
         <div style={{width:'100vw',height:'100vh',background:'url("")',position:'absolute',top:'0',left:'0',objectFit:'contain'}}>
              <div style={mainStyle} class='container-sm bg-white border rounded-4'>
                <div class='mt-5 ms-3'>Register</div>
                <div class='mt-5'>
                  <input type='text' name='userName' class='form-control w-75 m-3' placeholder='Enter User Name'/>
                  <input type='text' name='userPassword' class='form-control w-75 m-3' placeholder='Enter Password'/>
                </div>
                <div style={{fontSize:'18px'}} class='mt-4 ms-3'>
                  <span class='me-4 fw-bold'>Role:</span>
                    <label htmlFor='teacher' >Teacher</label>  <input type='radio' name='role'  value='teacher' id='teacher' class='me-2 form-check-input'/>
                    <label htmlFor='student'>Student</label> <input type='radio' name='role' value='student' id='student' class='me-2 form-check-input'/>
                </div>
                <div>
                    <button class='btn btn-primary ms-3 mt-5'>Register</button>
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
