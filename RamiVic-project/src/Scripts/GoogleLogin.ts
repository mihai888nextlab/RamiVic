import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./FirebaseConfig";

function GoogleLogin() {
  let provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(() => {
      window.location.href = "/dashboard";
      console.log(auth);
    })
    .catch((error) => {
      console.error(error);
    });
}

export default GoogleLogin;
