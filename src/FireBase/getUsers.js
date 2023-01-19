import {
  collection,
  getDocs,
  orderBy,
  limit,
  query,
} from "@firebase/firestore";
import { db } from "./config";
export const getUsers = async () => {
  let users = [];
  const usuariosRef = collection(db, "usuarios");
  const que = query(collection(db, "usuarios"), limit(10));
  const snapshot = await getDocs(que);
  snapshot.forEach((snap) => {
    users.push(snap.data());
  });

  return users;
};
