import React, { useEffect,useState } from 'react'
import Updateprofilemodal from './Updateprofilemodal';
import Studentinfo from './Studentinfo'
import Previouscurrent from './Previouscurrent';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import Offcanvas from 'react-bootstrap/Offcanvas';


function Studenthomepage(){
    const navigate = useNavigate()
    let [userName, setUserName] = useState('')

    useEffect(()=>{
        getStudentData()
    })

    async function getStudentData(){
        let res = await axios.post('http://localhost:3003/studentdetails',{token: window.localStorage.getItem('token')})
        console.log(res.data)
        setUserName(res.data.userData.credentials.userName)
    }
    
    function handlelogout(){
        window.localStorage.clear()
        navigate('/')
    }


    return(
        <>
            <StudentNavBar2 userName={userName}/>

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








function StudentNavBar(){
    const navigate = useNavigate()
    function handlelogout(){
        window.localStorage.clear()
        navigate('/')
    }
    return(
        <>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container fluid>
                    <Navbar.Brand >Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                     />                    
                    <Nav className="d-flex">
                        <Updateprofilemodal></Updateprofilemodal>
                        <button class='btn btn-danger ms-3' onClick={handlelogout}>Logout</button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}




function StudentNavBar2({userName}) {
    const navigate = useNavigate()
    function handlelogout(){
        window.localStorage.clear()
        navigate('/')
    }
    return (
        <>
       
            <Navbar key={'lg'} bg="dark" expand={'lg'} className="mb-3" variant='dark'>
            <Container fluid>
                <Navbar.Brand >{userName}</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'lg'}`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${'lg'}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${'lg'}`}
                placement="end"
                > 
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'lg'}`}>
                    Offcanvas
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Updateprofilemodal></Updateprofilemodal>
                        <button class='btn btn-danger ms-3' onClick={handlelogout}>Logout</button>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        
        </>
    );
}
