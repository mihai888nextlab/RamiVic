import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./FirebaseConfig";

const signIn = (
  email: string,
  password: string,
  displayName: string,
  errorInst: React.Dispatch<React.SetStateAction<string>>
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(displayName);
      updateProfile(user, { displayName: displayName }).catch((error) =>
        console.log(error.message)
      );
      window.location.href = "/dashboard";
    })
    .catch((error) => {
      let errorMes = error.message;
      console.log(error.message);
      errorInst(errorMes);
    });
};

export default signIn;
