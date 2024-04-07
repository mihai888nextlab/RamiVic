import { Link } from "react-router-dom";
import AppInstance from "../Types/AppInstance";
import reload from "../assets/reload.png";

interface Props {
  aplicatii: AppInstance[];
  reload: () => void;
}

function VeziAplicatii(props: Props) {
  return (
    <div className="aplicatii">
      <h2>
        Aplicatiile cautate:{" "}
        <span onClick={() => props.reload()}>
          <img src={reload} />
        </span>
      </h2>
      <br />
      <div className="aplicatiiList">
        {props.aplicatii.map((app) => (
          <div key={app.id}>
            <Link to={"/public-dashboard/" + app.id}>
              <div key={app.id} className="app">
                <h3>{app.name}</h3>
              </div>
            </Link>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default VeziAplicatii;
