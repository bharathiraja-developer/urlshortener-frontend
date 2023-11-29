import React, { createContext, useState } from "react";
import SignupPage from "./components/SignupPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SigninPage from "./components/SigninPage";
import Welcome from "./components/Welcome";
import Forget from "./components/Forget";
import Reset from "./components/reset";
import ResetSucess from "./components/ResetSucess";
import Home from "./components/Home";
import Createurl from "./components/Createurl";

const userContext = createContext();

function App() {
  const [register, setRegister] = useState({
    email: "",
    Firstname: "",
    Lastname: "",
    password: "",
  });
  return (
    <userContext.Provider value={{ register, setRegister }}>
      <Router>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/Signin" element={<SigninPage />} />
          <Route path="/Welcome/:token" element={<Welcome />} />
          <Route path="/Forget" element={<Forget />} />
          <Route path="/Reset/:token" element={<Reset />} />
          <Route path="/ResetSucess" element={<ResetSucess />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Createurl" element={<Createurl />} />
        </Routes>
      </Router>
    </userContext.Provider>
  );
}

export { App as default, userContext };
