import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "./modalTraderInver.module.css";
import Temario from "../../../assets/TEMARIO COMBO ANUAL[2476].pdf";
export const ModalTraderInver = () => {
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
          <Modal.Title className="text-center">
            Combo Trader/Inversor Bursatil:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${styles.modalBody} `}>
          Combina los dos mundos mas importantes de los mercados financieros. No
          es necesario que cuentes con experiencia previa. Esto te dara la
          posibilidad de una polivalencia mucho mas amplia y obviamente contaras
          con un beneficio no solo en relacion a lo economico en cuanto a los
          costos del curso, sino tambien que contaras con bonos adicionales que
          haciendo los modulos por separado no podras obtener. Estos bonos,
          estaran relacionados en Cryptomercados, Herramientas de resolucion
          QRTI (Sistema para resolucion de problemas avanzados), Psicotrading,
          Financiamiento en los mercados para Pequeñas y medianas empresas
          (Pymes). Este ultimo es un bono especial para todos aquellos
          empresarios que necesitan de nuevas opciones de financiamiento, que
          podran obtener dentro del mundo bursatil con el respaldo de
          instituciones que le otorgaran una mejor posicion economica en corto y
          largo plazo.
        </Modal.Body>
        <Modal.Footer className={`${styles.modalFooter}`}>
          <a href="https://hotmart.com/es/marketplace/productos/trading-e-inversiones-bursatiles/E79732743B">
            <button className={`${styles.btnModal}`}>Inscribite</button>
          </a>
          <button className={`${styles.btnModal}`}>
            <a href={Temario} download>
              Temario
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
export default ModalTraderInver;
