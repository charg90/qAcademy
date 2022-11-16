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
      id="aboutMe"
    >
      <h2 className={styles.text}>Quien Soy ?</h2>

      <Row className="d-flex justify-content-between align-items-center w-75">
        <Col sm={12} lg={6} className="">
          <video
            src="https://res.cloudinary.com/dnxh0fyqg/video/upload/v1668633744/Trading_-_Inversiones_Burs%C3%A1tiles_Q___Capital_-Stock_Market_Academy_Viv%C3%AD_algo_DIFERENTE_ufkkrm.mp4"
            width="100%"
            height="100%"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            controls
          >
            <source
              src="https://res.cloudinary.com/dnxh0fyqg/video/upload/v1668633744/Trading_-_Inversiones_Burs%C3%A1tiles_Q___Capital_-Stock_Market_Academy_Viv%C3%AD_algo_DIFERENTE_ufkkrm.mp4"
              type="video/mp4"
            ></source>
          </video>
        </Col>
        <Col sm={12} lg={6} className="d-flex flex-column align-items-center">
          <Col>
            <video
              width="100%"
              height="100%"
              className="embed-responsive-item  w-100"
              src="https://res.cloudinary.com/dnxh0fyqg/video/upload/v1668636414/TIPS_para_ser_TRADER_o_INVERSOR._Te_cuento_lo_que_Necesitas_para_Arrancar_lhdf3u.mp4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              controls
            ></video>
          </Col>
          <Col>
            <video
              width="100%"
              height="100%"
              className="embed-responsive-item  w-100"
              src="https://res.cloudinary.com/dnxh0fyqg/video/upload/v1668634804/Como__GANE_202_DOLARES__en_60_Segundos_-_Scalping_en_menos_de_10_minutos_de_mercado_dodkcu.mp4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              controls
            ></video>
          </Col>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 className={`${styles.frase} text-center`}>
            {" "}
            Unos meses de estudio, para una vida de Libertad
          </h2>
        </Col>
      </Row>

      <Row>
        <Col>
          <motion.div
            className="d-flex justify-content-center mb-5"
            initial={{ y: -10 }}
            transition={{ duration: 1.5, repeat: Infinity }}
            animate={{ y: 40 }}
          >
            <ArrowDown />
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Alumnos;
