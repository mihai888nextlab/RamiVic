import { useState } from "react";
import AppInstance from "../Types/AppInstance";
import VeziAplicatiiPublic from "../DashboardPages/VeziAplicatiiPublic";
import getAppsFree from "../Scripts/GetAppsFree";

function DashboardFree() {
  const [aplicatii, setAplicatii] = useState<AppInstance[]>([]);

  const reload = async () => {
    await getAppsFree(setAplicatii);
  };

  return (
    <div>
      <div className="Free">
        <div className="adauga">
          <h1>Dashboard Public</h1>

          <VeziAplicatiiPublic
            aplicatii={aplicatii}
            reload={reload}
          ></VeziAplicatiiPublic>
        </div>
      </div>
    </div>
  );
}

export default DashboardFree;
