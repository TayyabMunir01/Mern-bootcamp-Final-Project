import React from 'react'
import ShowstudentLayoutchange from './ShowstudentLayoutchange'
import DropstudentLayoutchange from './DropstudentLayoutchange'
import AddstudentLayoutchange from './AddstudentLayoutchange'

function Layoutchangemodal(){
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
                            <td> <button class='btn btn-primary'>Mark</button>  </td>
                            <td>Marked</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default Layoutchangemodal