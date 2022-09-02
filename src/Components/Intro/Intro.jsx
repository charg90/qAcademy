import React from "react";
import styles from "./Intro.module.css";
import { Container, Row, Col } from "react-bootstrap";
import banner from "../../assets/Banner-web.webp";
import ArrowDown from "./../Commons/ArrowDown/ArrowDown";
const Intro = () => {
  return (
    <Container
      fluid
      className={`${styles.container} min-vh-100 d-flex flex-column `}
    >
      <Row className="p-0">
        <img src={banner} className={`${styles.banner} p-0`}></img>
      </Row>
      <Row className="d-flex justify-content-around align-items-center mt-5 mb-5 p-0">
        <Col className="d-flex justify-content-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDkubybETfGZg8E0_SH-SY3wF_TcjxnPIzoA&usqp=CAU"
            className={`${styles.profilePhoto} justify-content-center align-items-center`}
          ></img>
        </Col>
        <Col className="d-flex justify-content-center">
          Déjame comentarte un poco a que me dedico. Soy trader profesional ya
          hace varios años, me inicie en el mundo de la economía en el año 2015,
          operando primeramente en el mercado local. Al notar una atracción por
          este mundo cada vez mayor, fui tomando diferentes cursos que hicieron
          de mi, poder tener un nivel avanzado y pasar a operar en mercados
          internacionales con la capacidad de operar todo tipo de activos. Claro
          esta, que ese esfuerzo no solo vino por efectuar cursos sino también,
          por propia voluntad, amor y pasión por el mundo Bursátil. Es así que
          también mientras adquiría practica y consistencia de lo aprendido en
          las academias que me especializaron, en paralelo comencé a cursar la
          carrera de Licenciatura de Economía. La misma estoy finalizando este
          año, la cual me dio un campo de conocimiento aun mayor de todo lo que
          sucede no solo en nuestro país (Argentina), sino también en el resto
          del mundo, ya que el contexto de todo mercado, industria, etc.,
          siempre este ligado a hechos y situaciones económicas que el ser
          humano como ser social y racional va cambiando en su día a día.
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center ">
          <ArrowDown />
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
