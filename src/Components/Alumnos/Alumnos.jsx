import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./alumnos.module.css";
const Alumnos = () => {
  return (
    <Container fluid className={`${styles.container} min-vh-100 `}>
      <h2>Nuestro Alumnos</h2>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Alumnos;
