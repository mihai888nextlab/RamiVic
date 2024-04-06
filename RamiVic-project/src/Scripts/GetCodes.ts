import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./FirebaseConfig";

interface Code {
  endpoint: string;
  time: string;
  code: number;
}

const getCodes = async (
  endpoints: string[],
  setCodes: React.Dispatch<React.SetStateAction<Code[]>>
) => {
  const codes: Code[] = [];

  endpoints.forEach(async (endpoint) => {
    const q = query(
      collection(db, "Response-Codes"),
      where("endpoint", "==", endpoint)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      codes.push({
        endpoint: doc.data().endpoint,
        time: doc.data().time,
        code: doc.data().code,
      });
    });
  });

  setCodes(codes);
  console.log(codes);
};

export default getCodes;
