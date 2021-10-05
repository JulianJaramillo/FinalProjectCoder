import React from 'react';
import { Navbar, Nav, NavDropdown,Container } from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container fluid>
                    <Navbar.Brand href="#">Book Store Items</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="HomeView.html">Home</Nav.Link>
                            <Nav.Link href="ItemListContainer.html">News</Nav.Link>
                            <NavDropdown title="Books" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#">Digital Books</NavDropdown.Item>
                                <NavDropdown.Item href="#">Physical Books</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">
                                About Us
                            </Nav.Link>
                        </Nav>
                        <CartWidget/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
