// Header.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          {/* <Navbar.Brand as={NavLink} to="/">
            Користувачі
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={NavLink} to="/" activeclassname="active">
                Користувачі
              </Nav.Link>
              <Nav.Link as={NavLink} to="/messages" activeclassname="active">
                Розсилки
              </Nav.Link>
              <Nav.Link as={NavLink} to="/analytics" activeclassname="active">
                Аналітика
              </Nav.Link>
              <Nav.Link as={NavLink} to="/login" activeclassname="active">
                Логін
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
