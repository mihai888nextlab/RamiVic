import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";

function Header() {
  return (
    <header>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <ul>
          <li>
            <Link id="loga" to={"/login"}>Log in</Link>
          </li>
          <li>
            <Link id="reg" to={"/register"}>Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
