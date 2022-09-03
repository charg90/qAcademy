import React from "react";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <Container fluid className={`${styles.container}   `}>
      <Row>
        <Col className="d-flex justify-content-center">
          <p>Copyright © 2022 Q Academy</p>
        </Col>
        <Col className="d-flex justify-content-center">
          <BsInstagram size={30} />
          <FaDiscord size={30} />
          <BsYoutube size={30} />
        </Col>
        <Col className="d-flex justify-content-center">
          <p>mail@gmail.com</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
