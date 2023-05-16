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
  let [teachernp, setTeachernp] = useState({name:'',password:''})
  let [studentnp, setStudentnp] = useState({name:'',password:''})
  let [newUsernp, setNewUsernp] = useState({name:'',password:'',role:''})


  function handleTeachernp(e){
    // console.log(e.target.value,e.target.type)
    if(e.target.type == 'text' ){
      setTeachernp({...teachernp,name: e.target.value})
    }   
    if(e.target.type == 'password' ){
      setTeachernp({...teachernp,password: e.target.value})
    }
  }

  function handleStudentnp(e){
    // console.log(e.target.value,e.target.type)
    if(e.target.type == 'text' ){
      setStudentnp({...studentnp,name: e.target.value})
    }   
    if(e.target.type == 'password' ){
      setStudentnp({...studentnp,password: e.target.value})
    }
  }

  function handleNewUsernp(e){
    if(e.target.type == 'text' ){
      setNewUsernp({...newUsernp,name: e.target.value})
    }   
    if(e.target.type == 'password' ){
      setNewUsernp({...newUsernp,password: e.target.value})
    }
    if(e.target.type=='radio'){
      setNewUsernp({...newUsernp,role: e.target.value})
    }
  }

  console.log('--------------------------------------------')
  console.log(teachernp,studentnp,newUsernp)
  console.log('--------------------------------------------')

  function resetnpOnLoginPageChange(){
    setTeachernp({name:'',password:''})
    setStudentnp({name:'',password:''})
    setNewUsernp({name:'',password:'',role:''})
  }

  function handleRegister(e){
    e.preventDefault()
    resetnpOnLoginPageChange()
    setLoginState('register')
  }
  function handleTeacherLogin(){
    resetnpOnLoginPageChange()
    setLoginState('teacher')
  }
  function handleStudentLogin(){
    resetnpOnLoginPageChange()
    setLoginState('student')
  }
  function handleAlreadyHaveAccount(e){
    e.preventDefault()
    resetnpOnLoginPageChange()
    setLoginState('main')
  }




  if(loginState=='main') {
    return <>
          <div style={{width:'100vw',height:'100vh',background:'url("")',position:'absolute',top:'0',left:'0',objectFit:'contain',userSelect:'none'}}>
              <div style={mainStyle} class='container-sm bg-white d-flex justify-content-center align-items-center gap-5 rounded-4'>
                <button style={{fontSize: '25px'}} class='btn btn-primary h-50 rounded-4' onClick={handleTeacherLogin}>Teacher Login</button>
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
                    <input type='text' name='teacherName' class='form-control w-75 m-3' placeholder='Enter User Name' onChange={handleTeachernp}/>
                    <input type='password' name='teahcerPassword' class='form-control w-75 m-3' placeholder='Enter Password' onChange={handleTeachernp}/>
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
       <div style={{width:'100vw',height:'100vh',background:'url("")',position:'absolute',top:'0',left:'0',objectFit:'contain',userSelect:'none'}}>
          <div style={mainStyle} class='container-sm bg-white border border-white rounded-4'>
              <div class='mt-5 ms-3'>Student Login</div>
              <div class='mt-5'>
                <input type='text' name='studentName' class='form-control w-75 m-3' placeholder='Enter User Name' onChange={handleStudentnp}/>
                <input type='password' name='studentPassword' class='form-control w-75 m-3' placeholder='Enter Password' onChange={handleStudentnp}/>
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
         <div style={{width:'100vw',height:'100vh',background:'url("")',position:'absolute',top:'0',left:'0',objectFit:'contain',userSelect:'none'}}>
              <div style={mainStyle} class='container-sm bg-white border border-white rounded-4'>
                <div class='mt-5 ms-3'>Register</div>
                <div class='mt-5'>
                  <input type='text' name='newUserName' class='form-control w-75 m-3' placeholder='Enter User Name' onChange={handleNewUsernp}/>
                  <input type='password' name='newUserPassword' class='form-control w-75 m-3 ' placeholder='Enter Password' onChange={handleNewUsernp}/>
                </div>
                <div style={{fontSize:'18px'}} class='mt-4 ms-3'>
                  <span class='me-4 fw-bold'>Role:</span>
                    <label htmlFor='teacher' >Teacher</label>  <input type='radio' name='role'  value='teacher' id='teacher' class='me-2 form-check-input' onChange={handleNewUsernp}/>
                    <label htmlFor='student'>Student</label> <input type='radio' name='role' value='student' id='student' class='me-2 form-check-input' onChange={handleNewUsernp}/>
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
