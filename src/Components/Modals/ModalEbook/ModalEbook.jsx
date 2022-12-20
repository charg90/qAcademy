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
    });
  }, "10");
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
            <img src={photoBook} style={{ width: "100%", height: "100%" }} />
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
                  <p className={`${styles.EbookP}`}>Quiero mi Ebook </p>
                </a>
              </Button>
            </Modal.Body>
          </Col>
        </Row>
        <Modal.Footer className={`${styles.modalFooter}`}>
          <button className={`${styles.btnModal}`} onClick={handleClose}>
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEbook;

// <Modal
//   show={show}
//   onHide={handleClose}
//   size="lg"
//   aria-labelledby="contained-modal-title-vcenter"
//   className={`${styles.modal} `}
//   centered
// >
//   <Modal.Header closeButton>
//     <Modal.Title className="text-center">Nuestro Ebook</Modal.Title>
//   </Modal.Header>
//   <Modal.Body
//     className={`${styles.modalBody} d-flex  justify-content-center align-items-center `}
//   >
//     <p>
//       Descargarlo gratis y empecemos con los primeros pasos en este emocionante
//       mundo
//     </p>
//     <a href={Ebook} download>
//       <FiBookOpen size={100} className={`${styles.icon} `} />
//     </a>
//   </Modal.Body>
//   <Modal.Footer className={`${styles.modalFooter}`}>
//     <button className={`${styles.btnModal}`} onClick={handleClose}>
//       Cerrar
//     </button>
//   </Modal.Footer>
// </Modal>;
