import React from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./registration.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegistrationSchema } from "../Schemas/RegistrationSchema";
export const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegistrationSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h2>Registro</h2>
      <Form className="w-xs-100 " onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className={`${styles.labelText}`}>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="qacademy@example.com"
            {...register("email")}
            name="email"
          />
        </Form.Group>
        {errors.email && (
          <p className={`${styles.formErrors} text-center text-danger`}>
            {errors.email.message.message}
          </p>
        )}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className={`${styles.labelText}`}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="******"
            {...register("password")}
            name="password"
          />
          <Form.Text>
            Debe contener Mayuscula, un numero y tener mas de 8 caracteres
          </Form.Text>
        </Form.Group>
        {errors.password && (
          <p className={`${styles.formErrors} text-center text-danger`}>
            {errors.password.message}
          </p>
        )}

        <Form.Group className="mb-3" controlId="formBasicPassword2">
          <Form.Label className={`${styles.labelText}`}>
            Repetir Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="*******"
            {...register("confirmPassword")}
            name="confirmPassword"
          />
        </Form.Group>
        {errors.confirmPassword && (
          <p className={`${styles.formErrors} text-center text-danger`}>
            {errors.confirmPassword.message}
          </p>
        )}
        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>
    </>
  );
};
