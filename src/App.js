import "./App.css";
import { user, useAuth0 } from "@auth0/auth0-react";
// components
import Navbar from "./components/Navbar";

import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";
import Weather from "./components/Weather";
import Calculator from "./components/Apps";
function App() {
  const { isAutenticated } = useAuth0();
  return (
    <>
      <Navbar></Navbar>
      
      <Routes>
        <Route exact path="/weather" Component={Weather}></Route>

        <Route exact path="/" Component={Header } ></Route>
        <Route exact path="/calculator" Component={Calculator}></Route>
        
      </Routes>

    
  
    </>
  );
}

export default App;
