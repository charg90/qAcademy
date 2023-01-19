import { collection, getDocs, where, query } from "@firebase/firestore";
import { db } from "./config";

export const searchUser = async (email) => {
  try {
    let userSearch = [];
    const q = query(collection(db, "usuarios"), where("email", "==", email));
    const snapshot = await getDocs(q);
    snapshot.forEach((doc) => {
      userSearch.push(doc.data());
    });
    if (userSearch.length > 0) {
      return userSearch;
    } else {
      return userSearch;
    }
  } catch (err) {
    console.log(err);
  }
};
