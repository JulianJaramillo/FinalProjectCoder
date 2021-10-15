import React from 'react';
import { Navbar, Nav, NavDropdown,Container } from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget.js';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">Book Store Items</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                           <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <NavDropdown title="Books" id="navbarScrollingDropdown">
                                <NavDropdown.Item as={Link} to="/products/Digital">Digital Books</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/products/Printed">Printed Books</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/products/">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="#">
                                About Us
                            </Nav.Link>
                        </Nav>
                        <Nav.Link as={Link} to="/cart"> <CartWidget/></Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
