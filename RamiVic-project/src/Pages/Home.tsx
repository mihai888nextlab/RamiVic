import Header from "../Components/Header";
import logo from "../assets/logo2.png";

import google from "../assets/Google_2015_logo.svg (1).png";
import emag from "../assets/2560px-Logo_eMAG.svg.png";
import tiktok from "../assets/640px-TikTok_logo.svg.png";
import roblox from "../assets/Roblox_logo_2015.png";
import insta from "../assets/69662-instagram-media-brand-social-logo-photography.png";
import gmali from "../assets/ae47fa9a8fd263aa364018517020552d.png";
import amazon from "../assets/Amazon_PNG6.png";
import facebook from "../assets/Facebook-Logo-2019.png";
import arrow from "../assets/right-arrow (1).png";
import { Link } from "react-router-dom";

function Home() {
  const buttonRedirect = () => {
    window.location.href = "/public-dashboard";
  };

  return (
    <div>
      <Header></Header>

      <div className="hero">
        <h1>
          Need to check if you can game?
          <br />
          Check here!
        </h1>
        <div className="box">
          <button onClick={buttonRedirect}>
            Go to Public Dashboard Now! <img src={arrow} />
          </button>
        </div>
        <div className="sites">
          <Link to={"/public-dashboard/Az4UXobnnMz6hAG48lxD"}>
            <div className="site-box">
              <img src={google} alt="" />
            </div>
          </Link>
          <Link to={"/public-dashboard/YyFHJdzOq8tg9cJTF6eo"}>
            <div className="site-box">
              <img src={emag} alt="" />
            </div>
          </Link>
          <Link to={"/public-dashboard/UnMlNzKvPr6h58E4HDTo"}>
            <div className="site-box">
              <img src={tiktok} alt="" />
            </div>
          </Link>
          <Link to={"/public-dashboard/3NMBPX2kfml8UCVBcVu2"}>
            <div className="site-box">
              <img src={roblox} alt="" />
            </div>
          </Link>
          <Link to={"/public-dashboard/wq7zQ9hGBg4VMAcfyVGU"}>
            <div className="site-box">
              <img src={insta} alt="" />
            </div>
          </Link>
          <Link to={"/public-dashboard/zCD0jjgBijJOhYvJhIAS"}>
            <div className="site-box">
              <img src={gmali} alt="" />
            </div>
          </Link>
          <Link to={"/public-dashboard/yz0j8InAs0dxpDFXLdzk"}>
            <div className="site-box">
              <img src={amazon} alt="" />
            </div>
          </Link>
          <Link to={"/public-dashboard/hqFLKeDx02aABPWWHg8g"}>
            <div className="site-box">
              <img src={facebook} alt="" />
            </div>
          </Link>
        </div>
      </div>
      <footer>
        <img src={logo} alt="" />
        <h4>© 2024 uApp? Technologies Inc.</h4>
      </footer>
    </div>
  );
}

export default Home;
