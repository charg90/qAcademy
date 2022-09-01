import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./alumnos.module.css";

const Alumnos = () => {
  return (
    <Container
      fluid
      className={`${styles.container} min-vh-100 d-flex flex-column justify-content-around  align-items-center bg-dark `}
    >
      <h2>Nuestro Alumnos/Cursos </h2>
      <Row className="  ">
        <Col>
          <iframe
            src="https://www.youtube.com/embed/IlRDZUaJ8fs"
            width="600rem"
            height="400rem"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col>
          <iframe
            width="600rem"
            height="400rem"
            src="https://www.youtube.com/embed/0qanF-91aJo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col>
          <iframe
            width="600rem"
            height="400rem"
            src="https://www.youtube.com/embed/3mbvWn1EY6g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
      <h2> frase motivadora</h2>
    </Container>
  );
};

export default Alumnos;
