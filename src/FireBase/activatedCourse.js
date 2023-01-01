import { db } from "./config";
import { doc, updateDoc, getDoc } from "firebase/firestore";

const activateCoures = (user, curso) => {
  const { trader, inverBur, combo } = user;
  const userRef = doc(db, "usuarios", user.uid);
  console.log(user, trader);

  try {
    switch (curso) {
      case "trader":
        return updateUser(userRef, trader);

      case "inverBur": {
        console.log("inverBur");
        break;
      }
      case "combo": {
        console.log("combo");
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (userRef, trader) => {
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

export default activateCoures;
