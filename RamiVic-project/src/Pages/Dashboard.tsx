import { FormEvent, useEffect, useState } from "react";
import DashMenu from "../Components/DashMenu";
import AddApp from "../Scripts/AddApp";
import getApps from "../Scripts/GetApps";
import AppInstance from "../Types/AppInstance";
import { Link } from "react-router-dom";
import { auth } from "../Scripts/FirebaseConfig";

function Dashboard() {
  const [numeAplicatie, setNuemAplicatie] = useState("");
  const [endpoints, setEndpoints] = useState("");
  const [success, setSuccess] = useState(false);

  const [aplicatii, setAplicatii] = useState<AppInstance[]>([]);

  const reload = () => {
    if (auth.currentUser) {
      getApps(setAplicatii);
    }
  };

  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AddApp(numeAplicatie, endpoints, setSuccess);
  };

  useEffect(() => {
    reload();
  }, [success]);

  return (
    <div>
      <h1>DEVELOPER Dashboard</h1>

      <div className="dash">
        <DashMenu />

        <div className="adauga">
          <h2>Adauga Aplicatie</h2>
          <form onSubmit={(e) => handleAdd(e)}>
            <input
              type="text"
              placeholder="Nume Aplicatie"
              value={numeAplicatie}
              onChange={(e) => setNuemAplicatie(e.target.value)}
            />
            <input
              type="text"
              placeholder="Url Aplicatie"
              value={endpoints}
              onChange={(e) => setEndpoints(e.target.value)}
            />

            <button type="submit">SUBMIT</button>
          </form>

          {success ? <p>Aplicatia a fost adaugata cu succes</p> : null}

          <br />
          <br />

          <div className="aplicatii">
            <h2>
              Aplicatiile Tale: <span onClick={() => reload()}>REINCARCA</span>
            </h2>
            <br />
            {aplicatii.map((app) => (
              <div key={app.id}>
                <Link to={"/dashboard/" + app.id}>
                  <div key={app.id} className="app">
                    <h3>{app.name}</h3>
                  </div>
                </Link>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
