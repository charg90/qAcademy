import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";
export const registrationWithEmail = async () => {
  try {
    const user = await createUserWithEmailAndPassword(auth);
    console.log(user);
  } catch (er) {
    console.log(err.message);
  }
};
