import { auth } from "./config";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { createUserDb } from "./createUserInDataBase";
import Swal from "sweetalert2";

const provider = new FacebookAuthProvider();

export const registrationFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    sessionStorage.setItem("Auth Token", result._tokenResponse.refreshToken);
    createUserDb(result);
    return result._tokenResponse;
  } catch (err) {
    console.log(err);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Este mail ya se encuentra registrado ",
    });
  }
};
