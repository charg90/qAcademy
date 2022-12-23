import React from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./registration.module.css";

export const Registration = () => {
  return (
    <>
      <h2>Registro</h2>
      <Form className="w-xs-100 ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className={`${styles.labelText}`}>Email</Form.Label>
          <Form.Control type="email" placeholder="qacademy@example.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className={`${styles.labelText}`}>Password</Form.Label>
          <Form.Control type="password" placeholder="******" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword2">
          <Form.Label className={`${styles.labelText}`}>
            Repetir Password
          </Form.Label>
          <Form.Control type="password" placeholder="*******" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>
    </>
  );
};
