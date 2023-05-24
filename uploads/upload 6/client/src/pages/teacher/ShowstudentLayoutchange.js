import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ShowstudentLayoutchange(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
            <Button variant="warning" onClick={handleShow}>
                Show Students
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enrolled Students</Modal.Title>
                </Modal.Header>
                <Modal.Body>                    
                    <table class="table table-primary">
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Name</td>
                                <td>Department</td>
                                <td>Section</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Name</td>
                                <td>Department</td>
                                <td>Section</td>
                            </tr>
                        </tbody>
                    </table>
                   <span class='fw-bold'>Total:</span>  50
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


export default ShowstudentLayoutchange