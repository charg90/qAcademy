import React, { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { FiBookOpen } from "react-icons/fi";
import photoBook from "./../../../assets/e1[2372].jpeg";
import Ebook from "./../../../assets/Ebook Q lCapital - Stock Market Academy[2361].pdf";
import styles from "./ModalEbook.module.css";
const ModalEbook = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, "100");
  }, []);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        style={{ color: "#00f0df", zIndex: "2000" }}
        centered
      >
        <Modal.Header closeButton style={{ backgroundColor: "rgb(45, 4, 53)" }}>
          <Modal.Title className="text-center">Nuestro Ebook</Modal.Title>
        </Modal.Header>
        <Row>
          <Col xs={12} sm={12} md={6} className="pe-xs-4 pe-sm-0">
            <img
              src={photoBook}
              style={{ width: "100%", height: "100%" }}
              alt="ebook-photo"
            />
          </Col>
          <Col xs={12} sm={12} md={6} className=" ps-sm-0">
            <Modal.Body
              className={`${styles.modalBody} d-flex flex-column  justify-content-between   align-items-center `}
            >
              <h1>No te vayas con las manos vacias</h1>
              <p>
                Descargarlo gratis y empecemos con los primeros pasos en este
                emocionante mundo
              </p>
              <Button
                className={`${styles.btnVerMas} d-flex justify-content-center `}
              >
                <a
                  href={Ebook}
                  download
                  className="d-flex flex-column justify-content-center text-decoration-none"
                >
                  Quiero mi Ebook
                </a>
              </Button>
            </Modal.Body>
          </Col>
        </Row>
        <Modal.Footer className={`${styles.modalFooter}`}>
          <button
            className={`${styles.links}`}
            style={{
              backgroundColor: "transparent",
              border: "#00f0df solid 3px",
              color: "#00f0df",

              height: "40px",
              borderRadius: "50px",
            }}
          >
            <a
              target="blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLScb1MfgLI9Hcb_keEwvnNT8HMEQOY7YLhsDxqqTcsK1J8pMyw/viewform?usp=sf_link"
              style={{ textDecoration: "none", color: "#00f0df" }}
            >
              INSCRIPCION SUMMER TRADE
            </a>
          </button>
          <button className={`${styles.btnModal}`} onClick={handleClose}>
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEbook;
