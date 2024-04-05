import { FormEvent, useState } from "react";
import login from "../Scripts/Login";
import { User } from "firebase/auth";

interface Props {
  authInst: User | null | undefined;
  setAuthInst: React.Dispatch<React.SetStateAction<User | null | undefined>>;
}

function Login(props: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    login(email, password, setError, props.setAuthInst);
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
