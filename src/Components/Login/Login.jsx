import React from "react";
import { Button, Form, Row } from "react-bootstrap";
import styles from "./login.module.css";
import googleIcon from "./../../assets/google-icon.svg";
import FacebookIcon from "./../../assets/facebook-svgrepo-com.svg";
import { loginWithEmail } from "../../FireBase/loginInWithEmail";
import { loginWithFacebook } from "../../FireBase/loginWithFacebook";
import { loginWithGoogle } from "../../FireBase/loginWithGoogle";
import { useForm } from "react-hook-form";
import { logIn } from "../../Store/Features/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await loginWithEmail(data.email, data.password);
    dispatch(logIn(response));
    navigate("/userHome");
  };
  const HandlerFacebook = async () => {
    const data = await loginWithFacebook();
    dispatch(logIn(data));
    navigate("/userHome");
  };

  const handlerGoogle = async () => {
    const data = await loginWithGoogle();
    dispatch(logIn(data));
  };
  return (
    <>
      <h2>Iniciar Session</h2>
      <Form className="w-xs-100 " onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmailLogin">
          <Form.Label className={`${styles.labelText}`}>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="qacademy@example.com"
            name="email"
            {...register("email")}
          />
          <Form.Text>
            Debe contener Mayuscula, un numero y tener mas de 8 caracteres
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordLogin">
          <Form.Label className={`${styles.labelText}`}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="******"
            name="password"
            {...register("password")}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className={`${styles.btn}  `}>
          Iniciar
        </Button>
      </Form>
      <Row className="d-grid gap-2 mt-2 justify-content-center">
        <Button
          className={`${styles.btn}`}
          onClick={() => {
            handlerGoogle();
          }}
        >
          <img
            src={googleIcon}
            alt="google-icon"
            className={`${styles.svgGoogle} mx-2`}
          />
          Iniciar con Google
        </Button>
        <Button
          className={`${styles.btn} `}
          onClick={() => {
            HandlerFacebook();
          }}
        >
          <img
            src={FacebookIcon}
            alt="google-icon"
            className={`${styles.svgGoogle} mx-2 `}
          />
          Inicar con Facebook
        </Button>
      </Row>
    </>
  );
};

export default Login;
