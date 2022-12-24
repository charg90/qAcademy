import React, { useRef, useState } from "react";
import sendEmail from "./../../Services/Email/sendEmail";
import { useForm } from "react-hook-form";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "./../Schemas/ContactSchema";
import styles from "./contactus.module.css";

const ContactUs = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  return (
    <Row
      fuild
      className={`${styles.container} min-vh-100 d-flex  align-items-center justify-content-center m-0  `}
      id="contacto"
    >
      <Col sm={12} md={6} lg={6} className=" ">
        <h2 className="mb-4 text-center"> Contacto </h2>
        <Form
          onSubmit={handleSubmit(() => sendEmail(form, reset))}
          className={`${styles.formContact} p-4  `}
          ref={form}
        >
          <Form.Group
            className="mb-3 d-flex flex-column align-items-center"
            controlId="formBasicEmail"
          >
            <Form.Label
              className={`${styles.formLabels} justify-content-center `}
            >
              Nombre y Apellido*{" "}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre y Apellido"
              {...register("nombreCompleto")}
              className={`${styles.formInputs}`}
              name="nombreCompleto"
            />
          </Form.Group>
          {errors.nombreCompleto && (
            <p className={`${styles.formErrors} text-center`}>
              {errors.nombreCompleto.message.message}
            </p>
          )}
          <Form.Group
            className="mb-3 d-flex flex-column align-items-center   "
            controlId="formBasicEmail"
          >
            <Form.Label className={`${styles.formLabels}`}>Email* </Form.Label>
            <Form.Control
              type="text"
              placeholder="qcapital@example.com"
              {...register("email")}
              className={`${styles.formInputs}   `}
              name="email"
            />
          </Form.Group>
          <p className={`${styles.formErrors} text-center`}>
            {errors.email && errors.email.message.message}
          </p>
          <Form.Label className={`${styles.formLabels} text-center`}>
            Charlemos*{" "}
          </Form.Label>
          <FloatingLabel controlId="floatingTextarea2">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              {...register("comentarios")}
              name="comentario"
            />
          </FloatingLabel>
          <p className={`${styles.formErrors} text-center`}>
            {errors.comentarios && errors.comentarios.message.message}
          </p>
          <button
            className={`${styles.btnContact}`}
            variant="primary"
            type="submit"
          >
            enviar
          </button>
        </Form>
      </Col>
    </Row>
  );
};

export default ContactUs;
