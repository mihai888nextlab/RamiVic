import { FormEvent, useState } from "react";
import signIn from "../Scripts/Signin";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

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
    <>
      <Header></Header>
      <div className="register">
        <div className="registerStyle">
          <h1>Register</h1>

          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="email"
              placeholder="Email:"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <input
              type="password"
              placeholder="Password:"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <input
              type="text"
              placeholder="Username:"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />{" "}
            <button>SUBMIT</button>
            <h2>
              Already have a account? <Link to={"/login"}>Login</Link>
            </h2>
          </form>

          {error && <p>{error}</p>}
        </div>
      </div>
    </>
  );
}

export default Signin;
