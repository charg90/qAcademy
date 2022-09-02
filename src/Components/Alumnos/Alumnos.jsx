import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./alumnos.module.css";
import ArrowDown from "../Commons/ArrowDown/ArrowDown";
const Alumnos = () => {
  return (
    <Container
      fluid
      className={`${styles.container} min-vh-100  d-flex flex-column justify-content-around align-items-center`}
    >
      <h2>Nuestro Alumnos</h2>
      <Row>
        <Col>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HJWFsZ_YUc4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3mbvWn1EY6g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0qanF-91aJo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2> mas frasee....</h2>
        </Col>
      </Row>
      <ArrowDown />
    </Container>
  );
};

export default Alumnos;
