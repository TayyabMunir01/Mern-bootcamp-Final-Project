import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Addcoursemodal(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
                    <input type='text' name="courseName" className='form-control'/> 
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
                Hours/Week:
                    <select class="form-select" aria-label="Default select example" name='hoursPerWeek'>
                        <option selected>Open this select menu</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                Total Weeks:
                    <input type='text' name='totalWeeks' class='form-control'></input>
                Days of Week: 'select 3 days only' <br/>
                    <div class='user-select-none'>
                        <input type='checkbox' value='mon' id='mon' name='daysOfWeek' class='form-check-input'/> <label for='mon' class='me-3'>Monday</label> 
                        <input type='checkbox' value='tue' id='tue' name='daysOfWeek' class='form-check-input'/> <label for='tue' class='me-2'>Tuesday</label> 
                        <input type='checkbox' value='tue' id='wed' name='daysOfWeek' class='form-check-input'/>  <label for='wed' class='me-2'>Wednesday</label> <br/>
                        <input type='checkbox' value='tue' id='thur' name='daysOfWeek' class='form-check-input'/>   <label for='thur' class='me-2'>Thursday</label> 
                        <input type='checkbox' value='tue' id='fri' name='daysOfWeek' class='form-check-input'/>    <label for='fri' class='me-2'>Friday</label> 
                    </div>
                Timings: <br/>
                    conditional rendering

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Create Course
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}


export default Addcoursemodal