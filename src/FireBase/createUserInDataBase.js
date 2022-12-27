import { db } from "./config";
import { doc, setDoc } from "firebase/firestore";

export const createUserDb = (result) => {
  const { user } = result;
  const userRef = doc(db, `usuarios/${user.uid}`);

  const userObj = {
    uid: user.uid,
    name: user.displayName,
    userPhoto: user.photoURL,
    email: user.email,
    trader: false,
    inverBur: false,
    combo: false,
  };

  setDoc(userRef, userObj);
};
