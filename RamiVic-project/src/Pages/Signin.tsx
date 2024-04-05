import { FormEvent, useState } from "react";
import signIn from "../Scripts/Signin";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    signIn(email, password, displayName, setError);

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
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
        <input
          type="text"
          placeholder="User:"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <button>SUBMIT</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}

export default Signin;
