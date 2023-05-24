import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useRef} from 'react' 
import axios from 'axios';


function Addcoursemodal(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let courseName = useRef()
    let courseCode = useRef()
    let creditHours = useRef()
    let semester = useRef()
    let section = useRef()
    let department = useRef()

   async function handleCreateCourse(){
        let courseName1  = courseName.current.value
        let courseCode1  = courseCode.current.value
        let creditHours1 = creditHours.current.value
        let department1  = department.current.value
        let semester1    = semester.current.value
        let section1     = section.current.value
        console.log(courseName1,courseCode1,creditHours1,semester1,section1,department1)

        let res = await axios.post('http://localhost:3003/addcourse',  {token:window.localStorage.getItem('token'), courseInfo:{courseName:courseName1,courseCode:courseCode1,creditHours:creditHours1,department:department1,semester:semester1,section:section1}}  )
        console.log(res)
        // window.location.reload()
        // dispatch({type:'addTeacher',payload:{name:name1,email:email1}})


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
                Department:
                    <select class="form-select" aria-label="Default select example" name='department' ref={department}>
                        <option selected>Open this select menu</option>
                        <option value="mechatronics">Mechatronics</option>
                        <option value="electrical">Electrical</option>
                        <option value="software">Software</option>
                        <option value="mechanical">Mechanical</option>
                    </select>
                Semester:
                    <select class="form-select" aria-label="Default select example" name='semester' ref={semester}>
                        <option selected>Open this select menu</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                Section:
                    <select class="form-select" aria-label="Default select example" name='section' ref={section}>
                        <option selected>Open this select menu</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>

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