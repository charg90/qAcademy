import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { auth } from "./config";

export const loginWithEmail = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
  } catch (err) {
    console.log(err);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Contraseña o mail incorrectos ",
    });
  }
};
