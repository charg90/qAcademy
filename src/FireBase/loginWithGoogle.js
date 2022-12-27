import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./config";

const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    const response = signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(response);
    const token = credential.accessToken;
    console.log(token, response);
  } catch (err) {}
};
