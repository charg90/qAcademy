import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./modalRecoverPassword.module.css";
import { resetPassword } from "../../../FireBase/resetPassword";
const ModalRecoverPassword = ({ boolean }) => {
  const [show, setShow] = useState(boolean);
  const [email, setEmail] = useState("");
  const handleRecoverPassword = async () => {
    await resetPassword(email);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className={`${styles.btnRecover}`}
      >
        Olvidaste tu contraseña??
      </Button>

      <Modal show={show} s>
        <Modal.Header closeButton>
          <Modal.Title>Recuperar Contraseña</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleRecoverPassword}>
            recuperar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalRecoverPassword;
