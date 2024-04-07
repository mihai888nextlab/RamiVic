import { addDoc, collection } from "firebase/firestore";
import { db } from "./FirebaseConfig";

const AddBug = (
  bug_desc: string,
  appId: string,
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>
) => {
  addDoc(collection(db, "Bugs"), {
    desc: bug_desc,
    appId: appId,
    fixed: false,
  }).then(async () => {
    setSuccess(true);
  });
};

export default AddBug;
