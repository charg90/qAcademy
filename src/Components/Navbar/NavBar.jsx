import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./navBar.module.css";
import Buttons from "../Buttons/Buttons";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={`${styles.wrapper} w-100 `}>
      <Navbar
        expand="lg"
        className={`${styles.nav} navbar-dark  d-flex justify-content-between  w-100  `}
      >
        <Container className="d-flex justify-content-center mr-5">
          <Navbar.Brand className={`${styles.links}`}>
            <Link to="/intro" smooth={true} offset={0} duration={500} hrfe="/">
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
                  to="target"
                  smooth={true}
                  offset={0}
                  duration={500}
                  style={{ textDecoration: "none" }}
                  hrfe="/target"
                >
                  Para quien son nuestros Cursos ?
                </Link>
              </Nav.Link>
              <Nav.Link className={`${styles.links}`} hrfe="#">
                <Link
                  to="aboutMe"
                  smooth={true}
                  offset={0}
                  duration={500}
                  style={{ textDecoration: "none" }}
                  hrfe="/aboutMe"
                >
                  About Me
                </Link>
              </Nav.Link>
              <Nav.Link className={`${styles.links}`} hrfe="#">
                <Link
                  to="cursos"
                  smooth={true}
                  offset={0}
                  duration={500}
                  style={{ textDecoration: "none" }}
                  hrfe="/cursos"
                >
                  <div>Nuestros Cursos</div>
                </Link>
              </Nav.Link>
              <Nav.Link className={`${styles.links}`} hrfe="#">
                <Link
                  to="contacto"
                  smooth={true}
                  offset={0}
                  duration={500}
                  style={{ textDecoration: "none" }}
                  hrfe="/contacto"
                >
                  <div>Contacto</div>
                </Link>
              </Nav.Link>
            </Nav>

            <a href="https://discord.gg/MvKGvzdf2z" target="_blank">
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "#00f0df solid 3px",
                  color: "#00f0df",
                  height: "40px",
                  borderRadius: "50px",
                }}
              >
                {" "}
                Grupo Apertura de cursos anuales
              </button>
            </a>

            <div className={`${styles.buttonsContainer}`}>
              <Buttons title="Cuenta" destination="cuentas" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
