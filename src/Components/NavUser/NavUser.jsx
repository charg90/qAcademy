import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./navBar.module.css";

const NavUser = () => {
  const { name } = useSelector((state) => state.auth.auth);
  return (
    <div className={`${styles.wrapper} w-100 d-flex `}>
      <Navbar
        expand="lg"
        className={`${styles.nav} navbar-dark  d-flex justify-content-center w-100  `}
      >
        <Container className="d-flex justify-content-center mr-5">
          <Navbar.Brand className={`${styles.links}`}>
            Q <span className={`${styles.bar}  `}>|</span> Capital Stock Market
            Academy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex ">
              <Nav.Link
                className={`${styles.links}`}
                hrfe="#"
                style={{ textDecoration: "none" }}
              >
                Cursos
              </Nav.Link>
              <Nav.Link
                className={`${styles.links}`}
                hrfe="#"
                to="contacto"
                style={{ textDecoration: "none" }}
              >
                Mis Cursos
              </Nav.Link>
            </Nav>
            <div className="w-75 d-flex justify-content-end p-4  align-items-center">
              <p className="text-danger m-0"> Hola {name}</p>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavUser;
