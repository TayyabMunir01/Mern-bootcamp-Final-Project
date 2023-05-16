import './App.css';
import LoginPage from './pages/login/Login'
import Studenthomepage from './pages/student/Studenthomepage'
import Teacherhomepage from './pages/teacher/Teacherhomepage';
import { Routes,Route } from 'react-router-dom';
import {PreviouscurrentTabs,MarkAttendanceOnCard, MarkButtonInside} from './pages/teacher/Teacherhomepage';


function App() {


  return(
    <>
      <div > 
            {/* <Teacherhomepage /> */}
            {/* <Studenthomepage></Studenthomepage> */}
            {/* <LoginPage/> */}
            {/* <h1>Attendance App</h1> */}
           
              <Routes>
                  <Route path='/' element={<LoginPage/>} />
                  <Route path='/student' element={<Studenthomepage/>}/>
                  <Route path='/teacher' element={<Teacherhomepage/>} >
                    <Route index element={<PreviouscurrentTabs/>} />
                    <Route path='courseinfo' element={<MarkAttendanceOnCard/>} > </Route>
                    <Route path='courseinfo/markattendance' element={<MarkButtonInside/>} />
                  </Route>
              </Routes>

            

        </div>
      
    </>
  )


}

export default App;
