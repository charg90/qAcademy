import React from "react";
import { useForm } from "react-hook-form";
import { Button, FloatingLabel, Form, Row } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./contactUs.module.css";

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
      <div className="d-flex justify-content-center align-items-center">
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

          <FloatingLabel controlId="floatingTextarea2" label="Charlemos">
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
