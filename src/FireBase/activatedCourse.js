import { db } from "./config";
import { doc, updateDoc, getDoc } from "firebase/firestore";

const activateCoures = (user, curso) => {
  const { trader, inverBur, combo } = user;

  const userRef = doc(db, "usuarios", user.uid);

  try {
    switch (curso) {
      case "trader":
        return updateUserTrader(userRef, trader);

      case "inverBur": {
        return updateUserinvBur(userRef, inverBur);
      }
      case "combo": {
        return updateUserCombo(userRef, combo);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const updateUserTrader = async (userRef, trader) => {
  try {
    const response = await updateDoc(userRef, {
      trader: !trader,
    });
    const document = await getDoc(userRef);

    return document.data();
  } catch (err) {
    console.log(err);
  }
};
const updateUserinvBur = async (userRef, inverBur) => {
  try {
    const response = await updateDoc(userRef, {
      inverBur: !inverBur,
    });
    const document = await getDoc(userRef);

    return document.data();
  } catch (err) {
    console.log(err);
  }
};
const updateUserCombo = async (userRef, combo) => {
  try {
    const response = await updateDoc(userRef, {
      combo: !combo,
    });
    const document = await getDoc(userRef);

    return document.data();
  } catch (err) {
    console.log(err);
  }
};

export default activateCoures;
