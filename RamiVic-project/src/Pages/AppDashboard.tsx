import { useParams } from "react-router-dom";
import DashMenu from "../Components/DashMenu";

function AppDashboard() {
  let id = useParams();

  return (
    <div>
      <h1>App Dashboard</h1>

      <DashMenu />
    </div>
  );
}

export default AppDashboard;
