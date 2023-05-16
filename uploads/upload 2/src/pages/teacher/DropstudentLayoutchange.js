import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DropstudentLayoutchange(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
            
            <Button variant="danger" onClick={handleShow}>
               Drop Student
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Drop Students </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class='mb-2'>Search Student by Name:</div>
                    <input type='text' name='dropStudent' class='form-control mb-2'/>
                    <button class='btn btn-danger'>Show Students</button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Drop Student
                    </Button>
                </Modal.Footer>
            </Modal>
        
        </>
    )
}


export default DropstudentLayoutchange