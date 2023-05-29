import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function AddstudentLayoutchange(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
            <Button variant="success" onClick={handleShow}>
               Add Students
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Add Students </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <StudentTable />             
                    <StudentTable />             

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


export default AddstudentLayoutchange


function StudentTable(){
    let [marked,setmarked] = useState(false)

    function handlemarked(){
        setmarked(true)
    }
    // btn btn-primary btn-sm
    return(
        <>
            <table class='table table-primary text-center'>
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>Name</td>
                        <td>Department</td>
                        <td>Section</td>
                        <td><button class={`btn btn-${marked?'primary':'danger'} btn-sm`} onClick={handlemarked}> {marked?'Added':"Add Student"} </button></td>
                    </tr>
                </tbody>
            </table>            
        </>
    )
}