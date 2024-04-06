import Header from "../Components/Header";
import search from "../assets/search.png";
import logo from "../assets/logo2.png"

import google from "../assets/Google_2015_logo.svg (1).png";
import emag from "../assets/2560px-Logo_eMAG.svg.png";
import tiktok from "../assets/640px-TikTok_logo.svg.png";
import roblox from "../assets/Roblox_logo_2015.png";
import insta from "../assets/69662-instagram-media-brand-social-logo-photography.png";
import gmali from "../assets/ae47fa9a8fd263aa364018517020552d.png";
import amazon from "../assets/Amazon_PNG6.png";
import facebook from "../assets/Facebook-Logo-2019.png";

function Home() {
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
          <input type="text" placeholder="Wich apps are you having problems with?" />
          <button>
            <img src={search} alt="" />
          </button>
        </div>
        <div className="sites">
        <div className="site-box">
          <img src={google} alt="" />
          

        </div>
        <div className="site-box">
          <img src={emag} alt="" />
          

        </div>
        <div className="site-box">
        <img src={tiktok} alt="" />
        

        </div>
        <div className="site-box">
        <img src={roblox} alt="" />
        

        </div>
        <div className="site-box">
        <img src={insta} alt="" />
        

        </div>
        <div className="site-box">
        <img src={gmali} alt="" />
        

        </div>
        <div className="site-box">
        <img src={amazon} alt="" />
       

        </div>
        <div className="site-box">
        <img src={facebook} alt="" />
        

        </div>

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
