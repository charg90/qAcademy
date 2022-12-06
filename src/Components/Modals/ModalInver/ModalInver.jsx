import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "./modalInver.module.css";
export const ModalInver = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className={`${styles.btnVerMas}`} onClick={handleShow}>
        Ver Mas
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={`${styles.modal} `}
      >
        <Modal.Header className={`${styles.modalHeader} `} closeButton>
          <Modal.Title className="text-center">Inversor Bursatil</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${styles.modalBody} `}>
          Convertite en un experto en reconocer las mejores oportunidades que el
          mundo bursatil brinda, podras ser capaz de determinar cuales son las
          empresas que a futuro daran los mejores rendimientos, conocer de todo
          nuevo instrumento y como se comportaran en corto, mediano y largo
          plazo para saber determinar la formacion de carteras de inversion que
          brinden los mejores resultados ante contextos adversos y prosperos.
          Esto te permitira saber diversificar el capital que poseas y obtener
          ingresos pasivos haciendo que el dinero trabaje para vos. No solo
          veras temas relacionados a chartismo, sino que ingresaras al mundo del
          analisis fundamental, para conocer desde adentro como se componen los
          estados financieros de cada empresa y poder determinar cual sera su
          proyeccion a largo plazo, entender la Macroeconomia en todo su
          contexto y aprovechar de esta informacion para saber cuando es el
          momento correcto de invertir.
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
export default ModalInver;
