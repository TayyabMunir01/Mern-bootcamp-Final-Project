import React from 'react'
import Updateprofilemodal from './Updateprofilemodal';
import Studentinfo from './Studentinfo'
import Previouscurrent from './Previouscurrent';


function Studenthomepage(){
   

    return(
        <>
           <div class='d-flex justify-content-between flex-nowrap mb-3'>
                <div class='ms-4 mt-3 fs-2 fw-bold text-decoration-underline'>Student Name</div>
                <div class='me-4 mt-3'>
                    {/* <button class='btn btn-primary me-4 mt-3'>Update Profile</button> */}
                    <Updateprofilemodal ></Updateprofilemodal>
                </div>
           </div>
            
           <div class='container '>
                <div class='row '>
                    <div class='col-12 col-sm-8 mb-3'>
                        <Previouscurrent></Previouscurrent>
                    </div>
                    <div class='col-12 col-sm-4 mt-5'>
                        <h3 class='mt-3'>Student Info</h3>
                        <div class='mt-3'>
                            <Studentinfo></Studentinfo>
                        </div>
                    </div>
                </div>
           </div>
                



        </>
    )
}

export default Studenthomepage