import { FormEvent, useEffect, useRef, useState } from "react";
import DashMenu from "../Components/DashMenu";
import AddApp from "../Scripts/AddApp";
import getApps from "../Scripts/GetApps";
import AppInstance from "../Types/AppInstance";
import { Link } from "react-router-dom";
import { auth } from "../Scripts/FirebaseConfig";

function Dashboard() {
  let nume = useRef<HTMLInputElement>(null);
  let url = useRef<HTMLInputElement>(null);

  const [success, setSuccess] = useState(false);
  const [username, setUsername] = useState(auth.currentUser?.displayName);

  const [aplicatii, setAplicatii] = useState<AppInstance[]>([]);

  const reload = () => {
    if (auth.currentUser) {
      getApps(setAplicatii);
    }
  };

  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AddApp(nume.current?.value || "", url.current?.value || "", setSuccess);
  };

  auth.onAuthStateChanged((user) => {
    if (user?.displayName) {
      setUsername(user.displayName);
      console.log(user.displayName);
    }
  });

  console.log(auth);

  return (
    <div>
      <h1>DEVELOPER Dashboard</h1>

      <div className="dash">
        <DashMenu username={username} />

        <div className="adauga">
          <h2>Adauga Aplicatie</h2>
          <form onSubmit={(e) => handleAdd(e)}>
            <input type="text" placeholder="Nume Aplicatie" ref={nume} />
            <input type="text" placeholder="Url Aplicatie" ref={url} />

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
