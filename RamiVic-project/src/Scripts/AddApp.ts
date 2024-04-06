import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "./FirebaseConfig";

const AddApp = (
  name: string,
  first_endpoint: string,
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>
) => {
  addDoc(collection(db, "Endpoints"), {
    name: name,
    endpoints: [first_endpoint],
    owner: auth.currentUser?.uid,
  }).then(() => {
    setSuccess(true);
  });
};

export default AddApp;
