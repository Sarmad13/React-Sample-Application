import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavbarCustom = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Sample React App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/About">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/ShowData">
              Users
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/About">About</Link>
    //     </li>
    //     <li>
    //       <Link to="/Contact">Contact</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default NavbarCustom;
