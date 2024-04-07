import { addDoc, collection } from "firebase/firestore";
import { db } from "./FirebaseConfig";

import emailjs from "@emailjs/browser";

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

    var templateParaams = {
      email: "mihai.gorunescu.jr@gmail.com",
    };

    emailjs.send("service_avqkg5j", "template_oskegj8", templateParaams).then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error.text);
      }
    );
  });
};

export default AddBug;
