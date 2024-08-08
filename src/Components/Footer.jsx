import React from "react";
import Container from 'react-bootstrap/Container'; //Importing Container component by Bootstrap
import Nav from 'react-bootstrap/Nav'; //Importing Nav component by Bootstrap
import Navbar from 'react-bootstrap/Navbar'; //Importing Navbar component by Bootstrap

function Footer(){
    const year = new Date().getFullYear(); //Dynamic year


    return(
        <div>
            <Navbar bg="dark" data-bs-theme="dark" sticky="bottom">
                <Container>
                        <Navbar.Brand href="/">©{year} KickLover</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="/team">Our Team</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    </div>

    )
    
}

export default Footer;