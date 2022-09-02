import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "./cursos.module.css";
import ArrowDown from "../Commons/ArrowDown/ArrowDown";
import { TiTick } from "react-icons/ti";
const Cursos = () => {
  return (
    <Container
      fluid
      className={`${styles.container} min-vh-100 d-flex flex-column justify-content-around align-items-center`}
    >
      <h2>Nuestro cursos</h2>
      <Row>
        <Col>
          <Card
            style={{ width: "18rem" }}
            className={` ${styles.cardBody} p-4 h-100`}
          >
            <Card.Body>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeLLJAsGAECjOQytQ4qm0QNrJfaW58NyxCA&usqp=CAU"
              />
              <Card.Title className={`${styles.titleText} text-center`}>
                Trader
              </Card.Title>
              <Card.Subtitle
                className={`${styles.titleText} mb-2  text-center`}
              >
                descripcion corta del curso
              </Card.Subtitle>
              <Card.Text className="d-flex flex-column   ">
                <div className="d-flex  justify-content-center">
                  <TiTick color="#FF0000" size={30} />
                  <p className={`${styles.text} m-0 `}>Descripcion</p>
                </div>
                <div className="d-flex justify-content-center">
                  <TiTick size={30} color="#FF0000" />
                  <p className={`${styles.text} m-0`}>Descripcion</p>
                </div>
                <div className="d-flex justify-content-center">
                  <TiTick size={30} color="#FF0000" />
                  <p className={`${styles.text} m-0`}>Descripcion</p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{ width: "18rem" }}
            className={` ${styles.cardBody} p-4 h-100`}
          >
            <Card.Body>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeLLJAsGAECjOQytQ4qm0QNrJfaW58NyxCA&usqp=CAU"
              />

              <Card.Title className={`${styles.titleText} text-center`}>
                Inversor Bursatil
              </Card.Title>
              <Card.Subtitle className={`${styles.titleText} mb-2 `}>
                descripcion corta del curso
              </Card.Subtitle>
              <Card.Text className="d-flex flex-column">
                <div className="d-flex">
                  <TiTick color="#FF0000" size={30} />
                  <p className={`${styles.text} m-0 text-center`}>
                    Descripcion
                  </p>
                </div>
                <div className="d-flex">
                  <TiTick size={30} color="#FF0000" />
                  <p className={`${styles.text} m-0`}>Descripcion</p>
                </div>
                <div className="d-flex">
                  <TiTick size={30} color="#FF0000" />
                  <p className={`${styles.text} m-0`}>Descripcion</p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{ width: "18rem" }}
            className={` ${styles.cardBody} p-4`}
          >
            <Card.Body>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeLLJAsGAECjOQytQ4qm0QNrJfaW58NyxCA&usqp=CAU"
              />
              <Card.Title className={`${styles.titleText} text-center h-100`}>
                Trader/Inversor Bursatil
              </Card.Title>
              <Card.Subtitle className={`${styles.titleText} mb-2 `}>
                descripcion corta del curso
              </Card.Subtitle>
              <Card.Text className="d-flex flex-column">
                <div className="d-flex">
                  <TiTick color="#FF0000" size={30} />
                  <p className={`${styles.text} m-0`}>Descripcion</p>
                </div>
                <div className="d-flex">
                  <TiTick size={30} color="#FF0000" />
                  <p className={`${styles.text} m-0`}>Descripcion</p>
                </div>
                <div className="d-flex">
                  <TiTick size={30} color="#FF0000" />
                  <p className={`${styles.text} m-0`}>Descripcion</p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Aca otra frase </p>
        </Col>
      </Row>
      <ArrowDown />
    </Container>
  );
};

export default Cursos;
