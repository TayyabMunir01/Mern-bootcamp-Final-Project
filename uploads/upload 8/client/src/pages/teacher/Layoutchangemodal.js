import React from 'react'
import ShowstudentLayoutchange from './ShowstudentLayoutchange'
import DropstudentLayoutchange from './DropstudentLayoutchange'
import AddstudentLayoutchange from './AddstudentLayoutchange'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

function Layoutchangemodal(){
    console.log('course info rendered')
    // let selectedCourse = useSelector(state=>state.storeSelectedCourseTeacher)
    // console.log(selectedCourse)

    return(
        <>
            <div style={{maxWidth:'800px'}} class='d-flex justify-content-around  mx-4 mb-5 mt-5'>
                <AddstudentLayoutchange/>
                <DropstudentLayoutchange/>
                <ShowstudentLayoutchange/>
            </div>
            <div style={{maxWidth:'900px'}} class='mx-5 my-4'>
                <table class='table'>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>Date</td>
                            <td>Timing</td>
                            <td> <button class='btn btn-primary'><Link to='/teacher/courseinfo/markattendance' class='text-white'>Mark</Link> </button>  </td>
                            <td>Marked</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default Layoutchangemodal