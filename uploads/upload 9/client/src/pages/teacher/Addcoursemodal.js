import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useRef} from 'react' 
import axios from 'axios';
import { useDispatch } from 'react-redux';


function Addcoursemodal(){
    const [show, setShow] = useState(false);
    let dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let courseName = useRef()
    let courseCode = useRef()
    let creditHours = useRef()

   async function handleCreateCourse(){
        let courseName1  = courseName.current.value
        let courseCode1  = courseCode.current.value
        let creditHours1 = creditHours.current.value
        console.log(courseName1,courseCode1,creditHours1)

        let res = await axios.post('http://localhost:3003/addcourse',  {token:window.localStorage.getItem('token'), courseInfo:{courseName:courseName1,courseCode:courseCode1,creditHours:creditHours1}}  )
        let coursesToRedux = res.data.courses.courses
        dispatch({type:'addTeacherCourses',payload:[...coursesToRedux]})
        console.log(res)
        // window.location.reload()

        setShow(false)
    }   


    return (
        <>

        <Button variant="outline-success" onClick={handleShow}>
            Add Course
        </Button>


        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Course Name: 
                    <input type='text' name="courseName" className='form-control' ref={courseName}/> 
                Course Code: 
                    <input type='text' name="courseCode" className='form-control' ref={courseCode}/> 
                Credit Hours:
                    <input type='text' name="creditHours" className='form-control' ref={creditHours}/> 
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleCreateCourse}>
                    Create Course
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}


export default Addcoursemodal