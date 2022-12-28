import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../FireBase/config";
import WidgetBot from "@widgetbot/react-embed";
import styles from "./userHome.module.css";
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
      <p>{user.uid}</p>
      <div className={`${styles.container}`}>
        <div className={`${styles.containerWidgetBot}`}>
          <WidgetBot
            server="1039614936428580935"
            channel="1039614936428580944"
            className={`${styles.WidgetBot}`}
          />
        </div>
      </div>
    </>
  );
};

export default UserHome;
