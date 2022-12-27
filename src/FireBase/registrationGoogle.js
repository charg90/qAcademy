import { auth } from "./config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createUserDb } from "./createUserInDataBase";
import Swal from "sweetalert2";
const provider = new GoogleAuthProvider();

export const signInWithPopupGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    sessionStorage.setItem("Auth Token", result._tokenResponse.refreshToken);
    console.log(result);
    createUserDb(result);
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Este mail ya se encuentra registrado ",
    });
  }
};
