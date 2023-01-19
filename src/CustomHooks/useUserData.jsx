import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../FireBase/config";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
const useUserData = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUser = () => {
    onAuthStateChanged(auth, async (currentUser) => {
      try {
        const dataRef = doc(db, "usuarios", currentUser.uid);
        const docSnap = await getDoc(dataRef);
        setUserData(docSnap.data());
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    });
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return [userData, loading];
};

export default useUserData;
