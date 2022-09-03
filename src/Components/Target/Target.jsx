import React from "react";
import styles from "./target.module.css";
import { Container, Row, Col } from "react-bootstrap";
import logo from "./../../assets/Qcapital.webp";
import ArrowDown from "../Commons/ArrowDown/ArrowDown";
const Cursos = () => {
  return (
    <>
      <Container
        fluid
        className={`${styles.container} min-vh-100 d-flex flex-column justify-content-around align-items-center`}
      >
        <h2>Par quien son nuestro cursos</h2>

        <Row className={`d-flex  w-100 `}>
          <Col xs={12} lg={6} className="d-flex justify-content-center">
            <img src={logo} className={`${styles.logo} img-fluid `} />
          </Col>

          <Col xs={12} md={12} lg={6} className={`d-flex `}>
            <Row className={`d-flex justify-content-center w-100 mt-md-5 mt-5`}>
              <Col
                xs={12}
                md={12}
                lg={6}
                className={`text-center ${styles.texto} d-flex flex-column justify-content-center `}
              >
                <p className={` ${styles.textos}`}>Sin experiencia</p>
                <div className="d-flex flex-column h-75 justify-content-around ">
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
              <Col
                xs={12}
                md={12}
                lg={6}
                className={`text-center mt-sm-5 mt-md-0 d-flex flex-column justify-content-center mt-4 mt-md-0 `}
              >
                <p className={` ${styles.textos}`}>Con experiencia</p>
                <div className="d-flex flex-column h-75 justify-content-around">
                  <p className={` ${styles.textoDescripcion} `}>
                    descripcion 1
                  </p>
                  <p className={` ${styles.textoDescripcion} `}>
                    descripcion 2
                  </p>
                  <p className={` ${styles.textoDescripcion} `}>
                    descripcion 3!
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Row className="d-flex justify-content-end">
            <Col xs={12} lg={6}>
              <h2 className={`text-end mt-2 mt-md-5  p-0`}>Otra frase mas</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="d-flex justify-content-center">
              <ArrowDown />
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Cursos;
