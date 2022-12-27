import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../FireBase/config";
const UserHome = () => {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <>
      <h1>hola{user.displayName}</h1>
      <p>{user.email}</p>
      <img src={user.photoURL} />
      <p>{user.uid} </p>
    </>
  );
};

export default UserHome;
