import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Login from "../../Components/Login/Login";
import { Registration } from "./../../Components/Registration/Registration";
import styles from "./loginRegistration.module.css";
import ModalRecoverPassword from "../../Components/Modals/ModalRecoverPassword/ModalRecoverPassword";

const LoginRegistration = () => {
  const [show, SetShow] = useState(false);
  return (
    <Container
      fluid
      className={`${styles.wrapper}  d-flex flex-column justify-content-center `}
    >
      <Row className="">
        <Col
          xs={12}
          lg={6}
          className={`${styles.wrapper} d-flex flex-column  justify-content-center align-items-center vh-100 `}
        >
          <Registration />
        </Col>
        <Col
          xs={12}
          lg={6}
          className={`${styles.wrapperLogin} d-flex flex-column  justify-content-center align-items-center  vh-100`}
        >
          <Login />
          <ModalRecoverPassword boolean={show} />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginRegistration;
