import * as yup from "yup";

export const contactSchema = yup
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
      .max(200, { message: "Comentario demasiado largo" }),
  })
  .required();
