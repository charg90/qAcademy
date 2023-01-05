import React from "react";
import WidgetBot from "@widgetbot/react-embed";
import styles from "./userHome.module.css";

const UserHome = () => {
  return (
    <>
      <div className={`${styles.container} mb-2  `}>
        <div className={`${styles.announce}`}>
          <p>
            Para poder chatear con nosotros logeate en Discord y vas a poder
            tomar contacto y recibir todas las novedades!
          </p>
        </div>
        <div className={`${styles.containerWidgetBot}`}>
          <WidgetBot
            server="1036420999844999210"
            channel="1036421000402829314"
            className={`${styles.WidgetBot} `}
          />
        </div>
      </div>
    </>
  );
};

export default UserHome;
