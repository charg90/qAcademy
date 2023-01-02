import { collection, getDocs } from "@firebase/firestore";
import { db } from "./config";
export const getUsers = async () => {
  let allUsers = [];
  try {
    const usuariosRef = collection(db, "usuarios");
    const snapshot = await getDocs(usuariosRef);

    snapshot.forEach((doc) => {
      allUsers.push(doc.data());
    });
    return allUsers;
  } catch (err) {
    console.log(err);
  }
};
