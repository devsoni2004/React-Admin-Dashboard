import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Merchantsdata from "./Components/Merchantsdata";
import MerchantsUserData from "./Components/MerchantsUserData";
import FaildUser from "./Components/FaildUser";
import AcceptUser from "./Components/AcceptUser";
import PayoutUser from "./Components/PayoutUser";
// import Register from "./Components/Register";
import Login from "./Components/Login";

import { RequireAuth } from "react-auth-kit";
import Userprofile from "./Components/Userprofile";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path={"/"}
          element={
            <RequireAuth loginPath={"/Login"}>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/MerchantsUserData"
          element={
            <RequireAuth loginPath={"/Login"}>
              {" "}
              <MerchantsUserData />{" "}
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/Merchantsdata"
          element={
            <RequireAuth loginPath={"/Login"}>
              {" "}
              <Merchantsdata />
            </RequireAuth>
          }
        />
        <Route exact path="/FaildUser" element={<FaildUser />} />
        <Route exact path="/AcceptUser" element={<AcceptUser />} />
        <Route exact path="/PayoutUser" element={<PayoutUser />} />
        {/* <Route exact path="/Register" element={<Register />} /> */}
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Userprofile" element={<Userprofile />} />
      </Routes>
    </div>
  );
}

export default App;
