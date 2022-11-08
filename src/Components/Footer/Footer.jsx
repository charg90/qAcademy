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
        <Col className="d-flex justify-content-center gap-2 ">
          <a
            href="https://instagram.com/qcapitalacademy?igshid=MDE2OWE1N2Q="
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.footer_links}  `}
          >
            <BsInstagram size={30} />
          </a>
          <FaDiscord size={30} />
          <a
            href="https://www.youtube.com/channel/UC0LDbc1iwKuS6Mas2ROQNbw"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.footer_links} `}
          >
            <BsYoutube size={30} />
          </a>
        </Col>
        <Col className="d-flex justify-content-center">
          <p>mail@gmail.com</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
