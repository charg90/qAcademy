import { createUserWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { auth } from "./config";
import { createUserDb } from "./createUserInDataBase";

export const registrationWithEmail = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    createUserDb(response);
    return response._tokenResponse;
  } catch (er) {
    console.log(er.message);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Este mail ya se encuentra registrado ",
    });
  }
};
