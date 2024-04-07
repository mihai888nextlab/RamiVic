import { collection, query, getDocs } from "firebase/firestore";
import { db } from "./FirebaseConfig";
import AppInstance from "../Types/AppInstance";

const getAppsFree = async (
  setAplicatii: React.Dispatch<React.SetStateAction<AppInstance[]>>
) => {
  const q = query(collection(db, "Endpoints"));

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
  console.log(apps);
};

export default getAppsFree;
