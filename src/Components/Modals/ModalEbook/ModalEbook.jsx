import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { FiBookOpen } from "react-icons/fi";
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
        className={`${styles.modal} `}
      >
        <Modal.Header closeButton className={`${styles.modalHeader} `}>
          <Modal.Title className="text-center">Nuestro Ebook</Modal.Title>
        </Modal.Header>
        <Modal.Body
          className={`${styles.modalBody} d-flex  justify-content-center align-items-center `}
        >
          <p>
            Descargarlo gratis y empecemos con los primeros pasos en este
            emocionante mundo
          </p>
          <a href={Ebook} download>
            <FiBookOpen size={100} className={`${styles.icon} `} />
          </a>
        </Modal.Body>
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
