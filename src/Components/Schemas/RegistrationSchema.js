import * as yup from "yup";

export const RegistrationSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email({ message: "tiene que tener formato de mail" })
      .required({ message: "campo requerido" }),
    password: yup
      .string()
      .required("Requerido")
      .min(8, "Debe ser mayor de 8 caracteres")
      .matches(/[A-Z]+/, "Debe contener una mayuscula")
      .matches(/\d+/, "Debe contener un numero "),
    confirmPassword: yup
      .string()
      .required("Password es obligatoria")
      .oneOf([yup.ref("password")], "Passwords no coinciden"),
  })
  .required();
