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
            <Link to={"/register"}>Register</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
