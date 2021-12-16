import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Link to="/"><Navbar.Brand><img className="img-fluid" src="/McKenzie Logo.png" width="250px" alt="Logo" /></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="fs-5 fw-bold d-flex align-items-center">
                            <Nav.Link href="#about">ABOUT</Nav.Link>
                            <NavDropdown className="mx-5" title="SERVICES" id="collasible-nav-dropdown">
                            <Link to="/servicesDetail" style={{textDecoration: 'none'}}><NavDropdown.Item href="#action/3.1">Construction Services</NavDropdown.Item></Link>
                                
                                <NavDropdown.Divider />
                                <p className="px-3 fw-bold">Your trusted construction partner for:</p>
                                <NavDropdown.Divider />
                                <Link to="/servicesDetail" style={{textDecoration: 'none'}}><NavDropdown.Item href="#action/3.2">Design Build</NavDropdown.Item></Link>
                                <Link to="/servicesDetail" style={{textDecoration: 'none'}}><NavDropdown.Item href="#action/3.3">Design Bid Build</NavDropdown.Item></Link>
                            </NavDropdown>
                            <Nav.Link href="#contact" className="mb-0"><button className="button mb-0">CONTACT</button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;