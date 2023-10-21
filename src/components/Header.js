// Header.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "./logo-numo.png";

const Header = () => {
  const logoStyle = {
    maxHeight: "50px",
  };
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img src={logo} alt="Logo" style={logoStyle} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={NavLink} to="/" activeClassName="active">
                Користувачі
              </Nav.Link>
              <Nav.Link as={NavLink} to="/messages" activeClassName="active">
                Розсилки
              </Nav.Link>
              <Nav.Link as={NavLink} to="/analytics" activeClassName="active">
                Аналітика
              </Nav.Link>
              <Nav.Link as={NavLink} to="/login" activeClassName="active">
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
