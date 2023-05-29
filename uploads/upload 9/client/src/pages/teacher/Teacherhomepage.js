import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Teachercoursecard from './Teachercoursecard';
import Addcoursemodal from './Addcoursemodal';
import Layoutchangemodal from './Layoutchangemodal';
import Updateprofilemodal from './Updateprofilemodal';
import Teacherinfo from './Teacherinfo'
import {Outlet, useNavigate} from 'react-router-dom'
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';

// import Spinner from 'react-bootstrap';


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
    let [loading,setLoading] = useState(true)
    // let [courses,setCourses] = useState([])
    let teacherCourses = useSelector((state)=>state.storeTeacherCourses)
    let dispatch = useDispatch()

    console.log(teacherCourses,'teacher coureses')
    
    useEffect(()=>{
        getCourseCards()
    },[])
    
    
    async function getCourseCards(){
        let res = await axios.post('http://localhost:3003/getteachercourses',{token: window.localStorage.getItem('token')})
        setLoading(false)
        let courseArrays = res.data.courses.courses
        console.log(courseArrays,'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF')
        dispatch({type:'addTeacherCourses',payload:courseArrays})
        // setCourses([...courseArrays])
    }



    return(
        <>
            <div class='container '>
                <div class='row '>
                        <hr/>
                    <div class='col-12 col-sm-8 mb-3 d-flex gap-3 flex-wrap'>
                    {loading ? <Spinner animation="border" variant="danger" /> :  teacherCourses.map((course)=><Teachercoursecard data={course}/>)}
                    </div>
                    <div class='col-12 col-sm-4 mt-5'>
                        <h3 class=''>Teacher Info</h3>
                        <div class=''>
                           {loading? <Spinner animation="grow" variant="info" />: <Teacherinfo></Teacherinfo>}
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

    return(
            <>
                <TeacherNavBar2/>

                <div class='ms-4 d-flex gap-4 mb-4 mt-4'>
                    <Addcoursemodal></Addcoursemodal>
                </div> 
            </>
    )
}






function TeacherNavBar2() {
    const navigate = useNavigate()
    function handlelogout(){
        window.localStorage.clear()
        navigate('/')
    }
    return (
        <>
       
            <Navbar key={'lg'} bg="dark" expand={'lg'} className="mb-3" variant='dark' sticky="top" >
            <Container fluid>
                <Navbar.Brand >Teacher Name</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'lg'}`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${'lg'}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${'lg'}`}
                placement="end"
                > 
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'lg'}`}>
                    Offcanvas
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Updateprofilemodal></Updateprofilemodal>
                        <button class='btn btn-danger ms-3' onClick={handlelogout}>Logout</button>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        
        </>
    );
}
