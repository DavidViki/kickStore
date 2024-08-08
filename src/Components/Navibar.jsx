import React from 'react';
import Container from 'react-bootstrap/Container'; //Importing Container component by Bootstrap
import Nav from 'react-bootstrap/Nav'; //Importing Nav component by Bootstrap
import Navbar from 'react-bootstrap/Navbar'; //Importing Navbar component by Bootstrap
import NavDropdown from 'react-bootstrap/NavDropdown'; //Importing Dropdown by Bootstrap

function Navibar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">KickLover</Navbar.Brand> {/* Logo */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/men">Men</Nav.Link>
            <Nav.Link href="/women">Women</Nav.Link>
            <Nav.Link href="/kids">Kids</Nav.Link>
            <NavDropdown title="Brands" id="basic-nav-dropdown"> {/* Dropdown */}
              <NavDropdown.Item href="/nike">Nike</NavDropdown.Item>
              <NavDropdown.Item href="/adidas">Adidas</NavDropdown.Item>
              <NavDropdown.Item href="/reebok">Reebok</NavDropdown.Item>
              <NavDropdown.Item href="/puma">Puma</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;