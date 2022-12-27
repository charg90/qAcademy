import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../FireBase/config";
const UserHome = () => {
  onAuthStateChanged(auth, (currentUser) => {
    console.log(currentUser);
  });

  return <div>Home</div>;
};

export default UserHome;
