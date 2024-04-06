import { doc, setDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig";

const addNewEndpoint = (
  id: string,
  currentEndpoints: string[],
  newEndpoint: string
) => {
  const docRef = doc(db, "Endpoints", id);
  setDoc(
    docRef,
    { endpoints: [...currentEndpoints, newEndpoint] },
    { merge: true }
  );
};

export default addNewEndpoint;
