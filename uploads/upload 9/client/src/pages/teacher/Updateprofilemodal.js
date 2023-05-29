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
    let email = useRef()
 
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  async  function handleUpdate(){
        let name1 = name.current.value
        let email1 = email.current.value
        console.log(name1,email1)
        let res = await axios.post('http://localhost:3003/updateteacherinfo',  {token:window.localStorage.getItem('token'), userinfo:{name:name1,email:email1}}  )
        console.log(res)
        // window.location.reload()
        dispatch({type:'addTeacher',payload:{name:name1,email:email1}})
        setShow(false)
    }

    return(
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Update Profile
            </Button> */}
            <button onClick={handleShow} class='btn btn-primary ms-3'> Update Profile </button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>User Profile</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <span class='fw-bold'>User Name:</span> 
                                <input type='text' class='form-control' ref={name}/>
                            <span class='fw-bold'>User Email:</span> 
                            <input type='text' class='form-control' ref={email}/>
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

