import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "./modalScalping.module.css";
import Temario from "../../../assets/TEMARIO TRADER ANUAL[2477].pdf";
export const ModalScalping = () => {
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
          <Modal.Title className="text-center">Trader</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${styles.modalBody} `}>
          Dominá los mercados financieros y aprende una habilidad unica que te
          brindara libertad financiera y personal. Seras capaz de determinar las
          tendencias, formas y figuras, comportamiento de los precios y
          volumenes, conoceras los principales indicadores que te guiaran a
          tomar la mejor posicion y obtener los beneficios que los Traders
          profesionales hoy utilizan en las grandes corporaciones en todo tipo
          de activo. Tendras la posibilidad ademas de adquirir conocimientos de
          resolucion de problemas tecnicos, con herramientas unicas basadas en 8
          disciplinas japonesas para erradicar de raiz esas fallas que
          provocaron algun trade negativo. Estaras acompañado durante todo el
          proceso por nuestro CEO Damian Quiros como tu mentor para ayudarte a
          transitar el camino y superar los primeros obstaculos de esta hermosa
          profesion, como asi tambien contaras con la ayuda de personal idoneo
          en Psicologia, que te daran soporte para aprender a conocerte, y
          sobrellevar las emociones y cambios que este nuevo desafio depara para
          vos.
        </Modal.Body>
        <Modal.Footer className={`${styles.modalFooter}`}>
          <a href="https://hotmart.com/es/marketplace/productos/trader-owuk7/E79733585I">
            <button className={`${styles.btnModal}`}>Inscribite</button>
          </a>
          <a href={Temario} download>
            <button className={`${styles.btnModal}`}>Temario</button>
          </a>
          <button className={`${styles.btnModal}`} onClick={handleClose}>
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
