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

  console.log(codes);
  setCodes(codes);

  // codes.forEach((code) => {
  //   let req = code.requests.sort((a, b) => {
  //     return b.time - a.time;
  //   });

  //   let index = 0;
  //   let stable = 0;

  //   req.forEach((r) => {
  //     if (index < 10) {
  //       if (r.code === 200 || r.code === 302) {
  //         stable++;
  //       }
  //     }
  //     index++;
  //   });

  //   console.log(code.endpoint, stable);
  // });
};

export default getCodes;
