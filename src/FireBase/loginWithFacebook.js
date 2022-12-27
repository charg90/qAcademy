import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./config";

const provider = new FacebookAuthProvider();

export const loginWithFacebook = async () => {
  try {
    const response = await signInWithPopup(auth, provider);
    const credentials = FacebookAuthProvider.credentialFromResult(response);
    console.log(response);
    return response._tokenResponse;
  } catch (err) {
    console.log(err);
  }
};
