import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'


function Teachercoursecard(){
    return(
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Course Name</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Course Code: EDA101</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">hours/week: 18</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Semester: 8</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Mechatronics</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Section: B</Card.Subtitle>
                 <Button class='m-auto d-block'><Link to='/teacher/courseinfo' className='text-white'>Mark Attendance</Link></Button>
            </Card.Body>
        </Card>
        </>
    )
}


export default Teachercoursecard