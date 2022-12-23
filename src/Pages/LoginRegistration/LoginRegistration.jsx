import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Registration } from "./../../Components/Registration/Registration";
import styles from "./loginRegistration.module.css";

const LoginRegistration = () => {
  return (
    <Container
      fluid
      className={`${styles.wrapper} vh-100 d-flex flex-column justify-content-center `}
    >
      <Row className="">
        <Col
          xs={12}
          lg={6}
          className={`${styles.wrapper} d-flex flex-column  justify-content-center`}
        >
          <Registration />
        </Col>
        <Col xs={12} lg={6}>
          <h2>Iniciar Session</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginRegistration;
