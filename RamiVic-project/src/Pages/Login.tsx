import { FormEvent, useState } from "react";
import login from "../Scripts/Login";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

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
    <>
      <Header></Header>
      <div className="register">
        <div className="registerStyle">
          <h1>Login</h1>
          <form onSubmit={(e) => handleData(e)}>
            <input
              type="email"
              placeholder="Email:"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password:"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">SUBMIT</button>
            <h2>
              Don't have an account? <Link to={"/register"}>Register</Link>
            </h2>
          </form>

          {error && <p>{error}</p>}
        </div>
      </div>
    </>
  );
}

export default Login;
