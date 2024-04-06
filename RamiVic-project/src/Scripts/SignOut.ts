import { auth } from "./FirebaseConfig";

const signOut = () => {
  auth
    .signOut()
    .then(() => {
      console.log("Signed out");
      window.location.href = "/";
    })
    .catch((error) => {
      console.error(error);
    });
};

export default signOut;
