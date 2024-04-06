import { FormEvent, useRef, useState } from "react";
import DashMenu from "../Components/DashMenu";
import AddApp from "../Scripts/AddApp";
import getApps from "../Scripts/GetApps";
import AppInstance from "../Types/AppInstance";
import { auth } from "../Scripts/FirebaseConfig";
import AdaugaApp from "../DashboardPages/AdaugaApp";
import VeziAplicatii from "../DashboardPages/VeziAplicatii";

function Dashboard() {
  let nume = useRef<HTMLInputElement>(null);
  let url = useRef<HTMLInputElement>(null);

  const [selectedPage, setSelectedPage] = useState("AdaugaApp");

  const [success, setSuccess] = useState(false);

  const [aplicatii, setAplicatii] = useState<AppInstance[]>([]);

  const reload = async () => {
    if (auth.currentUser) {
      await getApps(setAplicatii);
    }
  };

  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AddApp(nume.current?.value || "", url.current?.value || "", setSuccess);
  };

  return (
    <div>
      <div className="dash">
        <DashMenu
          username={auth.currentUser?.displayName}
          setPage={setSelectedPage}
        />

        <div className="adauga">
          <h1>Developer Dashboard</h1>

          {selectedPage === "AdaugaApp" ? (
            <AdaugaApp
              handleAdd={handleAdd}
              url={url}
              nume={nume}
              success={success}
            ></AdaugaApp>
          ) : selectedPage === "VeziAplicatii" ? (
            <VeziAplicatii
              aplicatii={aplicatii}
              reload={reload}
            ></VeziAplicatii>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
