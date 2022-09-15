import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import styles from "./cursos.module.css";

import { TiTick } from "react-icons/ti";
const Cursos = () => {
  const cardsContainer = {
    how: {
      transition: {
        staggerChildren: 1.35,
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
      className={`${styles.container} min-vh-100 d-flex flex-column justify-content-around align-items-center`}
    >
      <h2>Nuestro cursos</h2>
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
                descripcion corta del curso
              </Card.Subtitle>
              <div className="">
                <Card.Text className="d-flex flex-column  align-items-around  ">
                  <div className="d-flex  justify-content-center ">
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
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeLLJAsGAECjOQytQ4qm0QNrJfaW58NyxCA&usqp=CAU"
              />
              <Card.Title className={`${styles.titleText} text-center`}>
                Inversor Bursatil
              </Card.Title>
              <Card.Subtitle
                className={`${styles.titleText} mb-2  text-center`}
              >
                descripcion corta del curso
              </Card.Subtitle>
              <div className="">
                <Card.Text className="d-flex flex-column  align-items-around  ">
                  <div className="d-flex  justify-content-center ">
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
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeLLJAsGAECjOQytQ4qm0QNrJfaW58NyxCA&usqp=CAU"
              />
              <Card.Title className={`${styles.titleText} text-center`}>
                Trader/Inversor Bursatil
              </Card.Title>
              <Card.Subtitle
                className={`${styles.titleText} mb-2  text-center`}
              >
                descripcion corta del curso
              </Card.Subtitle>
              <div className="">
                <Card.Text className="d-flex flex-column  align-items-around  ">
                  <div className="d-flex  justify-content-center ">
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
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="m-5">
        <Col>
          <h2>Aca otra frase </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Cursos;
