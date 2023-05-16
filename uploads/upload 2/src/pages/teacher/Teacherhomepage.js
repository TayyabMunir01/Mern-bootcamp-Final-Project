import React from 'react'
import { Button } from 'react-bootstrap'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Teachercoursecard from './Teachercoursecard';
import Addcoursemodal from './Addcoursemodal';
import Layoutchangemodal from './Layoutchangemodal';
import {BrowserRouter,Routes,Route,Outlet} from 'react-router-dom'



function Teacherhomepage(){
    return(
        <>
            <div class='d-flex justify-content-between flex-nowrap mb-3'>
                <div class='ms-4 mt-3 fs-2 fw-bold text-decoration-underline'>Teacher Name</div>
           </div>

            <div class='ms-4 d-flex gap-4 mb-4 mt-4'>
                {/* <Button variant="outline-success">Add Course</Button> */}
                <Addcoursemodal></Addcoursemodal>
                <Button variant="outline-danger">Finish a Course</Button>
            </div> 

            <Outlet>
                
            </Outlet>
                {/* <Routes>
                    <Route path='/' element={<PreviouscurrentTabs />} />
                    <Route path='ci' element={<MarkAttendanceOnCard />} />
                    <Route path='ma' element={<MarkButtonInside />} />
                </Routes> */}
                
           
            
            {/* here should be layout change */}

            {/* <div class='container overflow-hidden'>
                <Tabs
                defaultActiveKey="active"
                id="active-finished-courses"
                className="mb-3"
                >
                    <Tab eventKey="active" title="Active Courses">
                        <Teachercoursecard></Teachercoursecard>
                    </Tab>
                    <Tab eventKey="finished" title="Finished Courses">
                        finished
                    </Tab>
                
                </Tabs>
            </div> */}

            {/* <Layoutchangemodal></Layoutchangemodal> */}
            
            {/* showing individual dates to add attendance */}
            
            
            {/* layout change for names and attende present absent */}
            


             {/* <div style={{maxWidth:'1000px'}} class='m-4'>
                <table  class='table '>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>Name</td>
                            <td>Department</td>
                            <td>Semester</td>
                            <td>Section</td>
                            <td>
                                <td>
                                    <label class='text-success fw-bold'>P: <input type='radio' class='form-check-input me-3' name='studentname2' value='present' /></label>  
                                </td>
                                <td>
                                    <label class='text-danger fw-bold'>A: <input type='radio' class='form-check-input' name='studentname2' value='absent' /></label> 
                                </td>

                            </td>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>Name</td>
                            <td>Department</td>
                            <td>Semester</td>
                            <td>Section</td>
                            <td>
                                <td>
                                    <label class='text-success fw-bold'>P: <input type='radio' class='form-check-input me-3' name='studentname2' value='present' /></label>  
                                </td>
                                <td>
                                    <label class='text-danger fw-bold'>A: <input type='radio' class='form-check-input' name='studentname2' value='absent' /></label> 
                                </td>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class='text-end mx-4' style={{maxWidth:'1000px'}}>
                <button class='btn btn-success ' > save </button>

            </div>  */}

        </>
    )
}


export default Teacherhomepage

export function PreviouscurrentTabs(){
    return(
        <>
            <div class='container overflow-hidden'>
                <Tabs
                defaultActiveKey="active"
                id="active-finished-courses"
                className="mb-3"
                >
                    <Tab eventKey="active" title="Active Courses">
                        <Teachercoursecard></Teachercoursecard>
                    </Tab>
                    <Tab eventKey="finished" title="Finished Courses">
                        finished
                    </Tab>
                
                </Tabs>
            </div>
        </>
    )
}


export function MarkAttendanceOnCard(){
    return(
        <>
             <Layoutchangemodal></Layoutchangemodal>
        </>
    )
}

export function MarkButtonInside(){
    return (
        <>
            <div style={{maxWidth:'1000px'}} class='m-4'>
                <table  class='table '>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>Name</td>
                            <td>Department</td>
                            <td>Semester</td>
                            <td>Section</td>
                            <td>
                                <td>
                                    <label class='text-success fw-bold'>P: <input type='radio' class='form-check-input me-3' name='studentname2' value='present' /></label>  
                                </td>
                                <td>
                                    <label class='text-danger fw-bold'>A: <input type='radio' class='form-check-input' name='studentname2' value='absent' /></label> 
                                </td>

                            </td>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>Name</td>
                            <td>Department</td>
                            <td>Semester</td>
                            <td>Section</td>
                            <td>
                                <td>
                                    <label class='text-success fw-bold'>P: <input type='radio' class='form-check-input me-3' name='studentname2' value='present' /></label>  
                                </td>
                                <td>
                                    <label class='text-danger fw-bold'>A: <input type='radio' class='form-check-input' name='studentname2' value='absent' /></label> 
                                </td>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class='text-end mx-4' style={{maxWidth:'1000px'}}>
                <button class='btn btn-success ' > save </button>

            </div>  
        </>
    )
}