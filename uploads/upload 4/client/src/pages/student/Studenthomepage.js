import React, { useEffect,useState } from 'react'
import Updateprofilemodal from './Updateprofilemodal';
import Studentinfo from './Studentinfo'
import Previouscurrent from './Previouscurrent';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Studenthomepage(){
    const navigate = useNavigate()
    let [userName, setUserName] = useState('')

    useEffect(()=>{
        getStudentData()
    })

    async function getStudentData(){
        let res = await axios.post('http://localhost:3003/studentdetails',{token: window.localStorage.getItem('token')})
        console.log(res.data)
        setUserName(res.data.userData.credentials.userName)
    }
    
    function handlelogout(){
        window.localStorage.clear()
        navigate('/')
    }

    return(
        <>
           <div class='d-flex justify-content-between flex-nowrap mb-3'>
                <div class='ms-4 mt-3 fs-2 fw-bold text-decoration-underline '>{userName}</div>
                <div class='me-4 mt-3'>
                    {/* <button class='btn btn-primary me-4 mt-3'>Update Profile</button> */}
                    <Updateprofilemodal ></Updateprofilemodal>
                    <button class='btn btn-danger ms-3' onClick={handlelogout}>Logout</button>
                </div>
           </div>
            
           <div class='container '>
                <div class='row '>
                    <div class='col-12 col-sm-8 mb-3'>
                        <Previouscurrent></Previouscurrent>
                    </div>
                    <div class='col-12 col-sm-4 mt-5'>
                        <h3 class='mt-3'>Student Info</h3>
                        <div class='mt-3'>
                            <Studentinfo></Studentinfo>
                        </div>
                    </div>
                </div>
           </div>
                



        </>
    )
}

export default Studenthomepage