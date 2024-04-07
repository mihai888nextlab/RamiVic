import { useParams } from "react-router-dom";
import { FormEvent, useEffect, useRef, useState } from "react";
import AppInstance from "../Types/AppInstance";
import getAppById from "../Scripts/GetAppById";
import addNewEndpoint from "../Scripts/AddEndpoint";
import getCodes from "../Scripts/GetCodes";
import AdaugaEndpoint from "../DashboardPages/AdaugaEndpoint";
import DashAppMenu from "../Components/DashAppMenu";
import { auth } from "../Scripts/FirebaseConfig";
import VeziEndpoints from "../DashboardPages/VeziEndpoints";
import SeeBugs from "../DashboardPages/SeeBugs";
import GetBugs from "../Scripts/GetBugs";

interface CodesInterface {
  endpoint: string;
  requests: { code: number; time: number }[];
}

interface Bug {
  id: string;
  desc: string;
  appId: string;
  fixed: boolean;
}

function AppDashboard() {
  let id = useParams();
  const [appDetails, setAppDetails] = useState<AppInstance>();
  const [codes, setCodes] = useState<CodesInterface[]>([]);
  const [success, setSuccess] = useState(false);

  const [page, setPage] = useState("AdaugaEndpoint");
  const [bugs, setBugs] = useState<Bug[]>([]); // [1

  let newEndpoint = useRef<HTMLInputElement>(null);

  const reload = async () => {
    await getAppById(id.id || "", setAppDetails);
    await getCodes(appDetails?.endpoint || [], setCodes);
    await GetBugs(id.id || "", setBugs);
  };

  const bugReload = async () => {
    await GetBugs(id.id || "", setBugs);
  };

  const addEndpoint = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewEndpoint(
      id.id || "",
      appDetails?.endpoint || [],
      newEndpoint.current?.value || "",
      setSuccess
    );
    newEndpoint.current!.value = "";
    //getAppById(id.id || "", setAppDetails);
    getCodes(appDetails?.endpoint || [], setCodes);
  };

  useEffect(() => {
    getAppById(id.id || "", setAppDetails);
    getCodes(appDetails?.endpoint || [], setCodes);
  }, []);

  return (
    <div>
      <div className="dash">
        <DashAppMenu
          username={auth.currentUser?.displayName}
          setPage={setPage}
        ></DashAppMenu>
        <div className="adauga">
          <h1>{appDetails?.name}</h1>

          {page === "AdaugaEndpoint" ? (
            <AdaugaEndpoint
              addEndpoint={addEndpoint}
              newEndpoint={newEndpoint}
              success={success}
            ></AdaugaEndpoint>
          ) : page === "VeziEndpoint" ? (
            <VeziEndpoints
              bugs={bugs}
              reload={reload}
              appDetails={appDetails}
              codes={codes}
            ></VeziEndpoints>
          ) : page == "Bugs" ? (
            <SeeBugs reload={bugReload} bugs={bugs} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default AppDashboard;
