import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Modal } from "react-bootstrap";


function Coursecards(){    
    const [showAtt, setShowAtt] = useState(false);

    const showAttendance = () => setShowAtt(true);
    const closeAttendance = () => setShowAtt(false);

    return (
        <>
            <div style={{display:'inline-block', margin:'10px'}}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Course Name</Card.Title>
                    <Card.Text>
                        Professor Name <br/>
                        Semester
                    </Card.Text>
                    <Button variant="primary" onClick={showAttendance}>Show Attendane</Button>
                </Card.Body>
                </Card>
            </div>

                <Modal show={showAtt} onHide={closeAttendance}>
                    <Modal.Header closeButton>
                        <Modal.Title>Attendance</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table class='table'>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Date</td>
                                    <td>Timing</td>
                                    <td>Present/Absent</td>
                                </tr>
                           
                                 <tr>
                                    <td>2</td>
                                    <td>Date</td>
                                    <td>Timing</td>
                                    <td>Present/Absent</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class='d-flex justify-content-around'>
                            <div class='flex-grow-1 text-primary'>Percentage</div>
                            <div class='mx-3 text-success'>Present</div>
                            <div class='mx-3 text-danger'>Absent</div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeAttendance}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
        </>
    )
}

export default Coursecards