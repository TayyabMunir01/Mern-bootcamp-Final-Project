import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState,useRef } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';


function Updateprofilemodal(){
    const [show, setShow] = useState(false);
    let dispatch = useDispatch()

    let name = useRef()
    let department = useRef()
    let section  = useRef()
    let semester = useRef()
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  async  function handleUpdate(){
        let name1 = name.current.value
        let department1 = department.current.value
        let section1 = section.current.value
        let semester1 = parseInt(semester.current.value)
        console.log(name1,department1,section1,semester1)
        let res = await axios.post('http://localhost:3003/updatestudentinfo',  {token:window.localStorage.getItem('token'), userinfo:{name:name1,department:department1,section:section1,semester:semester1}}  )
        console.log(res)
        // window.location.reload()
        dispatch({type:'addStudent',payload:{name:name1,department:department1,section:section1,semester:semester1}})
        setShow(false)
    }

    return(
        <>
            <Button variant="primary" onClick={handleShow}>
                Update Profile
            </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>User Profile</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <span class='fw-bold'>User Name:</span> 
                                <input type='text' class='form-control' ref={name}/>
                            <span class='fw-bold'>Department:</span>
                                <select class="form-select" aria-label="Default select example" ref={department}>
                                    <option selected>Open this select menu</option>
                                    <option value="mechatronics">Mechatronics</option>
                                    <option value="mechanical">Mechanical</option>
                                    <option value="software">Software</option>
                                    <option value="electrical">Electrical</option>
                                </select>
                            <span class='fw-bold'>Section:</span>
                                <select class="form-select" aria-label="Default select example" ref={section}>
                                    <option selected>Open this select menu</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select>
                            <span class='fw-bold'>Semester:</span>
                                <select class="form-select" aria-label="Default select example" ref={semester}>
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
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleUpdate}>
                                Update
                            </Button>
                        </Modal.Footer>
                    </Modal>

        </>
    )

}


export default Updateprofilemodal

