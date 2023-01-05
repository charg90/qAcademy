import { storage } from "./config";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const reference = ref(storage, "trader");
export const videosStorage = async () => {
  try {
    const result = await listAll(reference);
    const url = result.items.map((imageUrl) => getDownloadURL(imageUrl));

    return Promise.all(url);
  } catch (err) {
    console.log(err);
  }
};
