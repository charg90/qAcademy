import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./navBar.module.css";

const NavBar = () => {
  return (
    <div className={`${styles.wrapper} d-flex justify-content-center w-100 `}>
      <Navbar
        expand="lg"
        className={`${styles.nav} navbar-dark  d-flex justify-content-center   `}
      >
        <Container className="d-flex justify-content-center mr-5">
          <Navbar.Brand className={`${styles.links}`}>
            <Link to="intro" smooth={true} offset={0} duration={500}>
              Q <span className={`${styles.bar}  `}>|</span> Capital Stock
              Market Academy
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex ">
              <Nav.Link
                className={`${styles.links}`}
                style={{ textDecoration: "none !important" }}
              >
                <Link
                  to="aboutMe"
                  smooth={true}
                  offset={0}
                  duration={500}
                  style={{ textDecoration: "none" }}
                >
                  Para quien son nuestros Cursos ?
                </Link>
              </Nav.Link>
              <Nav.Link className={`${styles.links}`}>
                <Link
                  to="aboutMe"
                  smooth={true}
                  offset={0}
                  duration={500}
                  style={{ textDecoration: "none" }}
                >
                  About Me
                </Link>
              </Nav.Link>
              <Nav.Link className={`${styles.links}`}>
                <Link
                  to="cursos"
                  smooth={true}
                  offset={0}
                  duration={500}
                  style={{ textDecoration: "none" }}
                >
                  <div>Nuestros Cursos</div>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
