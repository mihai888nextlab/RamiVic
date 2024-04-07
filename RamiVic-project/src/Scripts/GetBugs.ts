import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./FirebaseConfig";

interface Bug {
  id: string;
  desc: string;
  appId: string;
  fixed: boolean;
}

const GetBugs = async (
  appId: string,
  setBugs: React.Dispatch<React.SetStateAction<Bug[]>>
) => {
  const q = query(collection(db, "Bugs"), where("appId", "==", appId));

  const querySnapshot = await getDocs(q);

  const bugs: Bug[] = [];
  querySnapshot.forEach((doc) => {
    bugs.push({
      id: doc.id,
      desc: doc.data().desc,
      appId: doc.data().appId,
      fixed: doc.data().fixed,
    });
  });

  setBugs(bugs);
};

export default GetBugs;
