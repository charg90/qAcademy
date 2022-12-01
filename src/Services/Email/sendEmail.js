import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const sendEmail = (form, reset) => {
  emailjs
    .sendForm(
      "service_f3uv7pg",
      "template_xlqgvbr",
      form.current,
      "jnaxoL854aOS04eZk"
    )
    .then(
      (result) => {
        Swal.fire({
          icon: "success",
          title: "A la brevedad te responderemos",
          showConfirmButton: false,
          timer: 1500,
        });
        form.current.reset();
        console.log(result.text);
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "algo salio mal vuelva intentarlo mas tarde",
        });
        console.log(error.text);
      }
    );
  reset({});
};

export default sendEmail;
