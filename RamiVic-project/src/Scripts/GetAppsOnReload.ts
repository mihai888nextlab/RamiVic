import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./FirebaseConfig";
import AppInstance from "../Types/AppInstance";
import { User } from "firebase/auth";

const getAppsOnReload = async (
  setAplicatii: React.Dispatch<React.SetStateAction<AppInstance[]>>,
  authInst: User | null | undefined
) => {
  const q = query(
    collection(db, "Endpoints"),
    where("owner", "==", authInst?.uid)
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

export default getAppsOnReload;
