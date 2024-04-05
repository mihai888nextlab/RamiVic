import { FormEvent, useState } from "react";
import login from "../Scripts/Login";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    login(email, password, setError);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => handleData(e)}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">SUBMIT</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
