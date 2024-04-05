import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import { app } from "./Scripts/FirebaseConfig";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  console.log(app);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<></>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Signin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
