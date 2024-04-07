import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppDashboard from "./Pages/AppDashboard";
import Home from "./Pages/Home";
import DashboardFree from "./Pages/DashboardFree";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Signin />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/dashboard/:id" element={<AppDashboard />}></Route>
          <Route path="/public-dashboard" element={<DashboardFree />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
