import Header from "../Components/Header";
import search from "../assets/search.png";

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
          <input type="text" placeholder="Search  for the server" />
          <button>
            <img src={search} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
