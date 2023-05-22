import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';



function Studentinfo(){
    let studentInfoRedux = useSelector((state)=>state.storeStudentInfo)
    let dispatch = useDispatch()
    
    console.log(studentInfoRedux,'student infor reduc 0-----------------------------')

    useEffect(()=>{
        getStudentInfo()
    },[])

    async function getStudentInfo(){
        let res = await axios.post('http://localhost:3003/getstudentinfo',{token: window.localStorage.getItem('token')})
        console.log(res.data)
        let studentInfo = res.data.userData.studentInfo
        dispatch({type:'add', payload: studentInfo})
      
    }

    return (
        <>
        
                 <Table striped bordered hover size='sm' >
                    <thead>
                        <tr>
                            <td >Name</td>
                            <td class='text-center'>{studentInfoRedux?.name}</td>
                        </tr>             
                    </thead>
                    <tbody>
                        <tr >
                            <td>Semester</td>
                            <td class='text-center'>{studentInfoRedux?.semester} </td>
                        </tr>
                        <tr >
                            <td >Department</td>
                            <td class='text-center'>{studentInfoRedux?.department}</td>
                        </tr>
                        <tr >
                            <td >Section</td>
                            <td class='text-center'>{studentInfoRedux?.section}</td>
                        </tr>
                    </tbody>
                </Table>
            
        </>
    )

}


export default Studentinfo