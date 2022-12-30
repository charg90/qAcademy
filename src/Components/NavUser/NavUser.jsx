import { onAuthStateChanged } from "@firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../FireBase/config";
import { logOut } from "../../Store/Features/auth";
import styles from "./navBar.module.css";

const NavUser = () => {
  const [uid, setUid] = useState();
  onAuthStateChanged(auth, (currentUser) => {
    setUid(currentUser.uid);
  });
  const dispatch = useDispatch();
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
              </Nav.Link>{" "}
              {uid == import.meta.env.VITE_ADMIN && (
                <Link to="admin" className={`${styles.links}`}>
                  Admin
                </Link>
              )}
            </Nav>

            <Dropdown>
              <Dropdown.Toggle
                id="dropdownUserHomer"
                className={styles.dropdownUser}
              >
                Hola {name}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    dispatch(logOut());
                  }}
                >
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavUser;
