import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Button, Navbar, Nav, NavItem } from "react-bootstrap";
import LogoImg from "../images/nav-logo.png"
import LogoSymbol from "../images/logo-symbol.svg"
import LogoText from "../images/logo-text.svg"
import LogoTextGrace from "../images/logo-text__grace.svg"
import LogoTextLLC from "../images/logo-text__llc.svg"

const Header = ({ siteTitle }) => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand as={Link} href="/">
      <img
        src={LogoSymbol}
        // src='https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg'
        alt='Grace Assisted Living'
        // width="400"
        // height="30"
      />
      {/* <img src={LogoText} alt='Grace Assisted Living' /> */}
      <img src={LogoTextGrace} alt='Grace Assisted Living' />
      <img src={LogoTextLLC} alt='Grace Assisted Living' />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavItem href="/about">
          <Nav.Link as={Link} activeClassName="active" to="/about">
            About
          </Nav.Link>
        </NavItem>
      </Nav>
      <Nav className="ml-auto">
        <Button variant="success" onClick={() => alert("Sign Up")}>
          Sign Up
        </Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
