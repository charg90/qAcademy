import React from "react";
import styles from "./intro.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import banner from "../../assets/Banner-web.webp";
import ArrowDown from "./../Commons/ArrowDown/ArrowDown";
import FotoPerfil from "./../../assets/Foto Perfil.jpg";
import { motion } from "framer-motion";

import { data, fullData } from "./../../helpers/data";
import { useState } from "react";
const Intro = () => {
  const [showMore, setShowMore] = useState(false);
  const info = data;

  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <Container
      fluid
      className={`${styles.container} min-vh-100 d-flex flex-column  justify-content-center`}
      id="intro"
    >
      <Row className="d-flex justify-content-center">
        <Col className="p-0 d-flex justify-content-center">
          <img src={banner} className={`${styles.banner} p-0 w-75 `}></img>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center mt-5 mb-5 p-0 ">
        <Col
          xs={12}
          sm={12}
          lg={4}
          className={` ${styles.profileFoto_container} d-flex flex-column justify-content-center align-items-center   `}
        >
          <img
            src={FotoPerfil}
            className={`${styles.profilePhoto} rounded-circle `}
          />

          <p className={`${styles.nombre}`}>Damian Quiros</p>
          <p className={`${styles.ceo} text-center`}>
            CEO Q | Capital-Stock Market Academy
          </p>
        </Col>
        <Col
          as={motion.div}
          xs={12}
          sm={12}
          lg={6}
          className="d-flex flex-column  align-items-center justify-content-center"
          layout
          transition={{ layout: { duration: 0.5, type: "spring" } }}
        >
          <motion.p className={`${styles.info} w-75`}>
            {!showMore ? info : info + fullData}
          </motion.p>
          <Button
            className={`${styles.button}`}
            onClick={() => setShowMore(!showMore)}
          >
            Ver Mas
          </Button>
        </Col>
        <Row>
          <motion.div
            className="d-flex justify-content-center "
            initial={{ y: 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
            animate={{ y: 50 }}
          >
            <ArrowDown />
          </motion.div>
        </Row>
      </Row>
    </Container>
  );
};

export default Intro;
