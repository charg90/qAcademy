import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./alumnos.module.css";
import ArrowDown from "../Commons/ArrowDown/ArrowDown";
import { motion } from "framer-motion";
const Alumnos = () => {
  return (
    <Container
      fluid
      className={`${styles.container} min-vh-100  d-flex flex-column justify-content-around align-items-center`}
    >
      <h2>Nuestro Alumnos</h2>
      <Row className="w-100 ">
        <Col
          sm={12}
          md={12}
          lg={4}
          className="embed-responsive embed-responsive-21by9 d-flex justify-content-center mt-2 mt-lg-2"
        >
          <iframe
            width="100%"
            height="500em"
            className="embed-responsive-item p-"
            src="https://www.youtube.com/embed/HJWFsZ_YUc4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col
          sm={12}
          md={12}
          lg={4}
          className="embed-responsive embed-responsive-16by9 d-flex justify-content-center  mt-2 mt-lg-2"
        >
          <iframe
            width="100%"
            height="500em"
            className="embed-responsive-item "
            src="https://www.youtube.com/embed/3mbvWn1EY6g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col
          sm={12}
          md={12}
          lg={4}
          className="embed-responsive embed-responsive-16by9 d-flex justify-content-center mt-2 mt-lg-0"
        >
          <iframe
            height="500em"
            className="embed-responsive-item  w-100"
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
      <Row>
        <Col>
          <motion.div
            className="d-flex justify-content-center mb-5"
            initial={{ y: -10 }}
            transition={{ duration: 1, repeat: Infinity }}
            animate={{ y: 50 }}
          >
            <ArrowDown />
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Alumnos;
