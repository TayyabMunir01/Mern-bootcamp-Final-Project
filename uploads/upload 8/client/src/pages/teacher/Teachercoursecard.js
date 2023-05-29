import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';



function Teachercoursecard({data}){
    let navigate = useNavigate()
    // let dispatch = useDispatch()

    console.log(data)
    function handleRoute(){
        console.log(data._id)
        // dispatch({type:'selectCourseTeacher',payload:data._id})
        navigate('/teacher/courseinfo')
    }
    return(
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{data.courseInfo.courseName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><span class='fw-bold text-warning'>Code:</span>  {data.courseInfo.courseCode}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted"><span class='fw-bold text-warning'> CreditHours:</span> {data.courseInfo.creditHours}</Card.Subtitle>
                 <Button class='m-auto d-block' onClick={handleRoute}>Mark Attendance</Button>
            </Card.Body>
        </Card>
        </>
    )
}


export default Teachercoursecard