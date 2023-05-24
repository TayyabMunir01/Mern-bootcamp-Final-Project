import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';



function Teacherinfo(){
    let teacherInfoRedux = useSelector((state)=>state.storeTeacherInfo)
    let dispatch = useDispatch()
    
    console.log(teacherInfoRedux,'teacher infor reduc 0-----------------------------')

    useEffect(()=>{
        getTeacherInfo()
    },[])

    async function getTeacherInfo(){
        let res = await axios.post('http://localhost:3003/getteacherinfo',{token: window.localStorage.getItem('token')})
        console.log(res.data)
        let teacherInfo = res.data.userData.teacherInfo
        dispatch({type:'addTeacher', payload: teacherInfo})
      
    }

    return (
        <>
        
                 <Table striped bordered hover size='sm' >
                    <thead>
                        <tr>
                            <td >Name</td>
                            <td class='text-center'>{teacherInfoRedux?.name}</td>
                        </tr>             
                    </thead>
                    <tbody>
                        <tr >
                            <td>Email</td>
                            <td class='text-center'>{teacherInfoRedux?.email} </td>
                        </tr>
                    </tbody>
                </Table>
            
        </>
    )

}


export default Teacherinfo