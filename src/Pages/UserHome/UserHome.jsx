import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../FireBase/config";
import WidgetBot from "@widgetbot/react-embed";
import styles from "./userHome.module.css";
import { Button } from "react-bootstrap";
// --------------------------------------------------------------------------------
import { storage } from "../../FireBase/config";
import { ref, listAll, getDownloadURL } from "firebase/storage";
//--------------------------------------------------------------------------------

const UserHome = () => {
  const reference = ref(storage, "trader");
  const fetchUrl = async () => {
    const result = await listAll(reference);
    const url = result.items.map((imageUrl) => getDownloadURL(imageUrl));
    return Promise.all(url);
  };
  const handlerclick = async () => {
    const urls = await fetchUrl();
    console.log(urls);
  };

  onAuthStateChanged(auth, (currentUser) => {});
  return (
    <>
      <div className={`${styles.container} mt-2`}>
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
            className={`${styles.WidgetBot}`}
          />
          <Button onClick={handlerclick}>tocar</Button>
        </div>
      </div>
    </>
  );
};

export default UserHome;
