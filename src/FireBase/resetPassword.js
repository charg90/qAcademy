import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./config";

export const resetPassword = async (email) => {
  try {
    const response = await sendPasswordResetEmail(auth, email);
    console.log("enviado");
  } catch (err) {
    console.log(err);
  }
};
