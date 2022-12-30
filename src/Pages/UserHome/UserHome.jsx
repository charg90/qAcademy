import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../FireBase/config";
import WidgetBot from "@widgetbot/react-embed";
import styles from "./userHome.module.css";
const UserHome = () => {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {});
  return (
    <>
      <div className={`${styles.container} mt-2`}>
        <div className={`${styles.announce}`}>
          <p>
            Para poder hacer chatear en nuestro chat hace click en el mismo
            logeate en Discord y ya vas poder chatear y recibir las ultimas
            novedades del mercado
          </p>
        </div>
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
