import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./FirebaseConfig";

interface Code {
  endpoint: string;
  requests: { code: number; time: number }[];
}

const getCodes = async (endpoints: string[], setCodes: (e: Code[]) => void) => {
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
        requests: doc.data().requests,
      });
    });
  });

  setCodes(codes);
  console.log(codes);
};

export default getCodes;
