import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navigation.css'

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img className="img-fluid" src="/McKenzie Logo.png" width="250px" alt="Logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="fs-5 fw-bold">
                        <Nav.Link href="#about">ABOUT</Nav.Link>
                        <NavDropdown className="mx-5" title="SERVICES" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Construction Services</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <p className="px-3 fw-bold">Your trusted construction partner for:</p>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">Design Build</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Design Bid Build</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#contact" className="fs-5 fw-bold button">CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;