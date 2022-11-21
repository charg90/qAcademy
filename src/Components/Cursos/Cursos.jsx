import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import InversorBursatil from "./../../assets/Inversor Bursatil.jpg";
import Combo from "./../../assets/Combo.jpg";
import styles from "./cursos.module.css";

import { TiTick } from "react-icons/ti";
const Cursos = () => {
  const cardsContainer = {
    how: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  const cards = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <Container
      fluid
      className={`${styles.container} min-vh-100 d-flex flex-column justify-content-around align-items-center w-100`}
      id="cursos"
    >
      <Row className="w-75 d-flex justify-content-center">
        <h2 className="text-center">Nuestro cursos</h2>
        <Row className="w-100">
          <Col
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 1 }}
            as={motion.div}
            variants={cardsContainer}
            sm={12}
            md={4}
            lg={4}
            className="mt-4 d-flex justify-content-center"
          >
            <Card
              as={motion.div}
              variants={cards}
              style={{ width: "18rem" }}
              className={` ${styles.cardBody} p-4 h-100`}
            >
              <Card.Body className="d-flex flex-column d-flex justify-content-around">
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
                  Domina los mercados finacieros
                </Card.Subtitle>
                <div className="">
                  <Card.Text className="d-flex flex-column align-items-center   ">
                    <div className="mt-3">
                      <div className="d-flex   ">
                        <TiTick color=" FF0000" size={30} />
                        <p className={`${styles.text} m-0 `}> Scalping</p>
                      </div>
                      <div className="d-flex ">
                        <TiTick size={30} color=" FF0000" />
                        <p className={`${styles.text} m-0`}> Swing Trading</p>
                      </div>
                      <div className="d-flex ">
                        <TiTick size={30} color=" FF0000" />
                        <p className={`${styles.text} m-0`}> Day Trading</p>
                      </div>
                      <div className="d-flex   ">
                        <TiTick color=" FF0000" size={30} />
                        <p className={`${styles.text} m-0 `}> Investment</p>
                      </div>
                    </div>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 1 }}
            as={motion.div}
            variants={cardsContainer}
            sm={12}
            md={4}
            lg={4}
            className="mt-4 d-flex justify-content-center"
          >
            <Card
              as={motion.div}
              variants={cards}
              style={{ width: "18rem" }}
              className={` ${styles.cardBody} p-4 h-100`}
            >
              <Card.Body className="d-flex flex-column d-flex justify-content-around">
                <Card.Img variant="top" src={InversorBursatil} />
                <Card.Title className={`${styles.titleText} text-center`}>
                  Inversor Bursatil
                </Card.Title>
                <Card.Subtitle
                  className={`${styles.titleText} mb-2  text-center`}
                >
                  Inverti con fundamento
                </Card.Subtitle>
                <div className="">
                  <Card.Text className="d-flex flex-column align-items-center   ">
                    <div className="mt-3">
                      <div className="d-flex   ">
                        <TiTick color=" FF0000" size={30} />
                        <p className={`${styles.text} m-0 `}>
                          Activos Fijos y Variables
                        </p>
                      </div>
                      <div className="d-flex ">
                        <TiTick size={30} color=" FF0000" />
                        <p className={`${styles.text} m-0`}>
                          Analisis Fundamental
                        </p>
                      </div>
                      <div className="d-flex ">
                        <TiTick size={30} color=" FF0000" />
                        <p className={`${styles.text} m-0`}>
                          Armado de Carteras
                        </p>
                      </div>
                      <div className="d-flex   ">
                        <TiTick color=" FF0000" size={30} />
                        <p className={`${styles.text} m-0 `}>
                          {" "}
                          Ingresos Pasivos
                        </p>
                      </div>
                    </div>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 1 }}
            as={motion.div}
            variants={cardsContainer}
            sm={12}
            md={4}
            lg={4}
            className="mt-4 d-flex justify-content-center"
          >
            <Card
              as={motion.div}
              variants={cards}
              style={{ width: "18rem" }}
              className={` ${styles.cardBody} p-4 h-100`}
            >
              <Card.Body className="d-flex flex-column d-flex justify-content-around">
                <Card.Img variant="top" src={Combo} />
                <Card.Title className={`${styles.titleText} text-center`}>
                  Combo: Trader/Inversor Bursatil
                </Card.Title>
                <Card.Subtitle
                  className={`${styles.titleText} mb-2  text-center`}
                >
                  Obten bonos especiales
                </Card.Subtitle>
                <div className="">
                  <Card.Text className="d-flex flex-column align-items-center   ">
                    <div className="mt-3">
                      <div className="d-flex   ">
                        <TiTick color=" FF0000" size={30} />
                        <p className={`${styles.text} m-0 `}>
                          Herramientas QRTI
                        </p>
                      </div>
                      <div className="d-flex ">
                        <TiTick size={30} color=" FF0000" />
                        <p className={`${styles.text} m-0`}>Psicotrading</p>
                      </div>
                      <div className="d-flex ">
                        <TiTick size={30} color=" FF0000" />
                        <p className={`${styles.text} m-0`}>
                          Pymes en los Mercados
                        </p>
                      </div>
                      <div className="d-flex   ">
                        <TiTick color=" FF0000" size={30} />
                        <p className={`${styles.text} m-0 `}>Cryptos</p>
                      </div>
                    </div>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="m-5 ">
          <Col className="d-flex justify-content-center">
            <h2 className={`${styles.frase}`}>
              Tenemos una vida hacelo todo!{" "}
            </h2>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Cursos;
