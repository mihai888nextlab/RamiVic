import { doc, getDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig";
import AppInstance from "../Types/AppInstance";

const getAppById = async (
  id: string,
  setAppDetails: React.Dispatch<React.SetStateAction<AppInstance | undefined>>
) => {
  console.log("test");
  const docRef = doc(db, "Endpoints", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    setAppDetails({
      id: docSnap.id,
      name: docSnap.data().name,
      owner: docSnap.data().owner,
      endpoint: docSnap.data().endpoints,
    });
  } else {
    console.log("No such document!");
    return null;
  }
};

export default getAppById;
