import { doc, setDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig";

const updateBug = (bugId: string) => {
  let doc_ref = doc(db, "Bugs", bugId);
  setDoc(doc_ref, { fixed: true }, { merge: true });
};

export default updateBug;
