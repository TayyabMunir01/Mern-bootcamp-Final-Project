import React from 'react'
import { Button } from 'react-bootstrap'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Teachercoursecard from './Teachercoursecard';
import Addcoursemodal from './Addcoursemodal';
import Layoutchangemodal from './Layoutchangemodal';
import Updateprofilemodal from './Updateprofilemodal';
import Teacherinfo from './Teacherinfo'
import {Outlet, useNavigate} from 'react-router-dom'



function Teacherhomepage(){
    return(
        <>
            <TeacherHomepageStaticThings />

            <Outlet>
            </Outlet>

        </>
    )
}

export default Teacherhomepage





export function PreviouscurrentTabs(){
    console.log('teacher homepage rendrer')
    return(
        <>
            {/* <div class='container overflow-hidden'>        
                <Teachercoursecard></Teachercoursecard>
            </div> */}

            <div class='container '>
                <div class='row '>
                    <div class='col-12 col-sm-8 mb-3'>
                        <hr/>
                        <Teachercoursecard></Teachercoursecard>
                    </div>
                    <div class='col-12 col-sm-4 mt-5'>
                        <h3 class=''>Teacher Info</h3>
                        <div class=''>
                            <Teacherinfo></Teacherinfo>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export function MarkAttendanceOnCard(){
    return(
        <>
             <Layoutchangemodal></Layoutchangemodal>
        </>
    )
}

export function MarkButtonInside(){
    console.log('marked attendance rendrer')
    return (
        <>
            <div style={{maxWidth:'1000px'}} class='m-4'>
                <table  class='table '>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>Name</td>
                            <td>Department</td>
                            <td>Semester</td>
                            <td>Section</td>
                            <td>
                                <td>
                                    <label class='text-success fw-bold'>P: <input type='radio' class='form-check-input me-3' name='studentname2' value='present' /></label>  
                                </td>
                                <td>
                                    <label class='text-danger fw-bold'>A: <input type='radio' class='form-check-input' name='studentname2' value='absent' /></label> 
                                </td>

                            </td>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>Name</td>
                            <td>Department</td>
                            <td>Semester</td>
                            <td>Section</td>
                            <td>
                                <td>
                                    <label class='text-success fw-bold'>P: <input type='radio' class='form-check-input me-3' name='studentname2' value='present' /></label>  
                                </td>
                                <td>
                                    <label class='text-danger fw-bold'>A: <input type='radio' class='form-check-input' name='studentname2' value='absent' /></label> 
                                </td>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class='text-end mx-4' style={{maxWidth:'1000px'}}>
                <button class='btn btn-success ' > save </button>

            </div>  
        </>
    )
}

export function TeacherHomepageStaticThings(){
    let navigate = useNavigate()

    function handlelogout(){
        window.localStorage.clear()
        navigate('/')
    }

    function handleupdateprofile(){

    }

    return(
            <>
                <div class='d-flex justify-content-between align-items-center flex-nowrap mb-3'>
                    <div class='ms-4 mt-3 fs-2 fw-bold text-decoration-underline'>Teacher Name</div>
                    <div>
                        <Updateprofilemodal />
                        <button style={{height:'40px'}} class='btn btn-danger ms-3 me-3' onClick={handlelogout}>Logout</button>
                    </div>
                 </div>

                <div class='ms-4 d-flex gap-4 mb-4 mt-4'>
                    <Addcoursemodal></Addcoursemodal>
                    {/* <Button variant="outline-danger">Finish a Course</Button> */}
                </div> 


            </>
    )
}