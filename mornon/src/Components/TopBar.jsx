import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import '../Components/TopBar.css'

const TopBar = () => {
    return (
        <div className="container-fluid bg-dark novabr">
            <Navbar fixed='top' expand="lg" className="bg-body bg-dark" bg='dark' data-bs-theme="dark">
                <Container >
                    <Navbar.Brand href="#home"><span className='topbar_logo'>WaterWatch</span></Navbar.Brand>
                    <Nav className="me-auto-dark">
                        <Nav.Link href="#home"><span className='home_nav'>About Us</span></Nav.Link>
                        {/* <Nav className='justify-content-end'> */}
                        <Nav.Link href="#link"><span className='home_nav'>Log In</span></Nav.Link>
                        <Nav.Link href="#link"><span className='home_nav'>Sign Up</span></Nav.Link>     
                        {/* </Nav> */}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default TopBar