import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "./FirebaseConfig";
import AppInstance from "../Types/AppInstance";

const getApps = async (
  setAplicatii: React.Dispatch<React.SetStateAction<AppInstance[]>>
) => {
  const q = query(
    collection(db, "Endpoints"),
    where("owner", "==", auth.currentUser?.uid)
  );

  const querySnapshot = await getDocs(q);

  const apps: AppInstance[] = [];
  querySnapshot.forEach((doc) => {
    apps.push({
      id: doc.id,
      endpoint: doc.data().endpoints,
      name: doc.data().name,
      owner: doc.data().owner,
    });
  });

  setAplicatii(apps);
};

export default getApps;
