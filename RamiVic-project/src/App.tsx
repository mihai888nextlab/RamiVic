import { User } from "firebase/auth";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import AppDashboard from "./Pages/AppDashboard";

function App() {
  const [authInst, setAuthInst] = useState<User | null>();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<></>}></Route>
          <Route
            path="/login"
            element={<Login authInst={authInst} setAuthInst={setAuthInst} />}
          ></Route>
          <Route path="/register" element={<Signin />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/dashboard/:id" element={<AppDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
