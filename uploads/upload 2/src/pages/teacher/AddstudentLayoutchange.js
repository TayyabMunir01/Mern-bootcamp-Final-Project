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
                   <div>Search Students</div>
                   Department:
                    <select class="form-select" aria-label="Default select example" name='department'>
                        <option selected>Open this select menu</option>
                        <option value="mechatronics">Mechatronics</option>
                        <option value="electrical">Electrical</option>
                        <option value="software">Software</option>
                        <option value="mechanical">Mechanical</option>
                    </select>
                    Semester:
                    <select class="form-select" aria-label="Default select example" name='semester'>
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
                    <select class="form-select" aria-label="Default select example" name='section'>
                        <option selected>Open this select menu</option>
                        <option value="a">A</option>
                        <option value="b">B</option>
                        <option value="c">C</option>
                    </select>
                    <div class='d-flex justify-content-between my-2'>
                        <Button variant="primary" size='sm'> Search Students </Button>
                        <Button variant="success" size='sm'> ADD All </Button>
                    </div>
                    <div class='border border-black rounded mb-2'>
                        <div class='mx-3'>
                            <div class='my-1'>Search Individual Student by name:</div>
                            <div>
                                <input type='text' name='searchByName' class='form-control'/>
                                <div class='d-flex justify-content-between my-2'>
                                    <Button variant="primary" size='sm'> Search Student </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table class='table table-primary text-center'>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>Name</td>
                                <td>Department</td>
                                <td>Section</td>
                                <td><button class='btn btn-danger btn-sm'> Add Student </button></td>
                            </tr>
                        </tbody>
                    </table>

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