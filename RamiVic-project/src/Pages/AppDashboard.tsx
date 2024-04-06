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

interface CodesInterface {
  endpoint: string;
  requests: { code: number; time: string }[];
}

function AppDashboard() {
  let id = useParams();
  const [appDetails, setAppDetails] = useState<AppInstance>();
  const [codes, setCodes] = useState<CodesInterface[]>([]);

  const [page, setPage] = useState("AdaugaEndpoint");

  let newEndpoint = useRef<HTMLInputElement>(null);

  const reload = async () => {
    await getAppById(id.id || "", setAppDetails);
    await getCodes(appDetails?.endpoint || [], setCodes);
  };

  const addEndpoint = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewEndpoint(
      id.id || "",
      appDetails?.endpoint || [],
      newEndpoint.current?.value || ""
    );
    newEndpoint.current!.value = "";
    getAppById(id.id || "", setAppDetails);
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
            ></AdaugaEndpoint>
          ) : page === "VeziEndpoint" ? (
            <VeziEndpoints
              reload={reload}
              appDetails={appDetails}
              codes={codes}
            ></VeziEndpoints>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default AppDashboard;
