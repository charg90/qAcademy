import React from "react";
import styles from "./Cursos.module.css";
import { Container, Row, Col } from "react-bootstrap";
import logo from "./../../assets/Qcapital.webp";
import ArrowDown from "./../Commons/ArrowDown/ArrowDown";
const Cursos = () => {
  return (
    <>
      <Container
        fluid
        className={`${styles.container} min-vh-100 d-flex flex-column justify-content-around align-items-center`}
      >
        <h2>Par quien son nuestro cursos</h2>

        <Row className={`d-flex  w-100 `}>
          <Col className="d-flex justify-content-center">
            <img src={logo} className={`${styles.logo} img-fluid `} />
          </Col>

          <Col className={`d-flex `}>
            <Row className={`d-flex justify-content-center w-100`}>
              <Col className={`text-center ${styles.texto}`}>
                <p className={` ${styles.textos}`}>Sin experiencia</p>
                <div className="d-flex flex-column h-75 justify-content-around">
                  <p className={` ${styles.textoDescripcion} `}>
                    descripcion 1
                  </p>
                  <p className={` ${styles.textoDescripcion} `}>
                    descripcion 2
                  </p>
                  <p className={` ${styles.textoDescripcion} `}>
                    descripcion 3
                  </p>
                </div>
              </Col>
              <Col className={`text-center`}>
                <p className={` ${styles.textos}`}>Con experiencia</p>
                <div className="d-flex flex-column h-75 justify-content-around">
                  <p className={` ${styles.textoDescripcion} `}>
                    descripcion 1
                  </p>
                  <p className={` ${styles.textoDescripcion} `}>
                    descripcion 2
                  </p>
                  <p className={` ${styles.textoDescripcion} `}>
                    descripcion 3
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <h2 className={`text-end`}>Otra frase mas</h2>
        </Row>
        <ArrowDown />
      </Container>
    </>
  );
};

export default Cursos;
