import React from 'react'
import Table from 'react-bootstrap/Table';


function Studentinfo(){

    return (
        <>
        
                 <Table striped bordered hover size='sm' >
                    <thead>
                        <tr>
                            <td >Name</td>
                            <td class='text-center'>Tayyab Munir</td>
                        </tr>             
                    </thead>
                    <tbody>
                        <tr >
                            <td>Semester</td>
                            <td class='text-center'>8<sup>th</sup> </td>
                        </tr>
                        <tr >
                            <td >Department</td>
                            <td class='text-center'>Mechatronics</td>
                        </tr>
                        <tr >
                            <td >Section</td>
                            <td class='text-center'>B</td>
                        </tr>
                    </tbody>
                </Table>
            
        </>
    )

}


export default Studentinfo