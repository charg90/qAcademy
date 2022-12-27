import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./config";

const provider = new FacebookAuthProvider();

export const loginWithFacebook = async () => {
  try {
    const response = await signInWithPopup(auth, provider);
    const credentials = FacebookAuthProvider.credentialFromResult(response);
    const accessToken = credentials.accessToken;
    console.log(response, accessToken);
  } catch (err) {
    console.log(err);
  }
};
