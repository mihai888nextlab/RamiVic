import "./index2.css";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppDashboard from "./Pages/AppDashboard";
import Home from "./Pages/Home";
import DashboardFree from "./Pages/DashboardFree";
import AppDashboardFree from "./Pages/AppDashboardFree";
import { useEffect } from "react";

import emailjs from "@emailjs/browser";

function App() {
  useEffect(() => {
    emailjs.init("_LhA66uglW7HfJArr");
  });

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
          <Route
            path="/public-dashboard/:id"
            element={<AppDashboardFree />}
          ></Route>
          {/* <Route path="/test" element={<Tets />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
