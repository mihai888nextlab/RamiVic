import { doc, setDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig";

const addNewEndpoint = (
  id: string,
  currentEndpoints: string[],
  newEndpoint: string,
  setSuccess: (e: boolean) => void
) => {
  const docRef = doc(db, "Endpoints", id);
  setDoc(
    docRef,
    { endpoints: [...currentEndpoints, newEndpoint] },
    { merge: true }
  );
  setSuccess(true);
};

export default addNewEndpoint;
