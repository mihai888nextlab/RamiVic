import { User, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FirebaseConfig";

const login = (
  email: string,
  password: string,
  errorInst: React.Dispatch<React.SetStateAction<string>>,
  setAuthInst: React.Dispatch<React.SetStateAction<User | null | undefined>>
) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setAuthInst(user);
      window.location.href = "/dashboard";
    })
    .catch((error) => {
      let errorMes = error.message;
      errorInst(errorMes);
    });
};

export default login;
