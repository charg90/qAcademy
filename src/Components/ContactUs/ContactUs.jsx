import React from "react";
import { useForm } from "react-hook-form";
import { Button, FloatingLabel, Form, Row } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./contactus.module.css";

const ContactUs = () => {
  const schema = yup
    .object()
    .shape({
      nombreCompleto: yup
        .string()
        .min(4, { message: "tiene que tener mas 4 caracteres" })
        .max(15, { message: "Demasiado largo" })
        .required({ message: "campo requerido" }),
      email: yup
        .string()
        .email({ message: "tiene que tener formato de mail" })
        .required({ message: "campo requerido" }),
      comentarios: yup
        .string()
        .min(4, { message: "tiene que tener mas 4 caracteres" })
        .max(200, { message: "Comentario demasiado largo" })
        .required({ message: "campo requerido" }),
    })
    .required();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Row fuild className={`${styles.container} min-vh-100 d-flex  `}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2 className="mb-4"> Contacto </h2>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className={`${styles.formContact} p-4`}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className={`${styles.formLabels}`}>
              Nombre y Apellido*{" "}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre y Apellido"
              {...register("nombreCompleto")}
              className={`${styles.formInputs}`}
            />
          </Form.Group>
          {errors.nombreCompleto && (
            <p className={`${styles.formErrors}`}>
              {errors.nombreCompleto.message.message}
            </p>
          )}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className={`${styles.formLabels}`}>Email* </Form.Label>
            <Form.Control
              type="text"
              placeholder="qcapital@example.com"
              {...register("email")}
              className={`${styles.formInputs}`}
            />
          </Form.Group>
          <p className={`${styles.formErrors}`}>
            {errors.email && errors.email.message.message}
          </p>
          <Form.Label className={`${styles.formLabels}`}>
            Charlemos*{" "}
          </Form.Label>
          <FloatingLabel controlId="floatingTextarea2">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              {...register("comentarios")}
            />
          </FloatingLabel>
          <p className={`${styles.formErrors}`}>
            {errors.comentarios && errors.comentarios.message.message}
          </p>
          <Button className="mt-2" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Row>
  );
};

export default ContactUs;
