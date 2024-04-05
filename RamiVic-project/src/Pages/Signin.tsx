import { useState } from "react";
import signIn from "../Scripts/Signin";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    signIn(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Register</h1>

      <input
        type="email"
        placeholder="Email:"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Pass:"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => handleSubmit()}>SUBMIT</button>
    </div>
  );
}

export default Signin;
