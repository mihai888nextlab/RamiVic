import { useParams } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import AppInstance from "../Types/AppInstance";
import getAppById from "../Scripts/GetAppById";
import getCodes from "../Scripts/GetCodes";
import VeziEndpoints from "../DashboardPages/VeziEndpoints";
import BugPopup from "../DashboardPages/BugPopup";
import AddBug from "../Scripts/AddBug";

interface CodesInterface {
  endpoint: string;
  requests: { code: number; time: number }[];
}

function AppDashboardFree() {
  let id = useParams();
  const [appDetails, setAppDetails] = useState<AppInstance>();
  const [codes, setCodes] = useState<CodesInterface[]>([]);

  const [page, setPage] = useState("VeziEndpoints");
  const [success, setSuccess] = useState(false);

  const addBug = (e: FormEvent<HTMLFormElement>, desc: string | undefined) => {
    e.preventDefault();
    AddBug(desc || "", appDetails?.id || "", setSuccess);
  };

  const reload = async () => {
    await getAppById(id.id || "", setAppDetails);
    await getCodes(appDetails?.endpoint || [], setCodes);
  };

  useEffect(() => {
    getAppById(id.id || "", setAppDetails);
    getCodes(appDetails?.endpoint || [], setCodes);
  }, []);

  return (
    <div>
      <div className="dashFree">
        <div className="adauga">
          <h1>{appDetails?.name}</h1>
          {page === "VeziEndpoints" ? (
            <>
              <VeziEndpoints
                reload={reload}
                appDetails={appDetails}
                codes={codes}
              ></VeziEndpoints>
              <button className="report" onClick={() => setPage("bug")}>
                Raporteaza un bug
              </button>
            </>
          ) : (
            <BugPopup setPage={setPage} addBug={addBug} success={success} />
          )}
        </div>
      </div>
    </div>
  );
}

export default AppDashboardFree;
