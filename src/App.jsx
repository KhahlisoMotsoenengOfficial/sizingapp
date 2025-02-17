import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/jsx/Navbar";
import Home from "./components/jsx/Home";
import SizeFinder from "./components/jsx/SizeFinder";
import Print from "./components/jsx/Print";
import Login from "./components/jsx/Login";
import SignUp from "./components/jsx/SignUp";


function App() {
  let component;

  switch (window.location.pathname) {
    case "/Home":
      component = <Home />;
      break;
    case "/":
      component = <Home />;
      break;
    // case "/SizeFinder":
    //   component = <SizeFinder />;
    //   break;
    // case "/Print":
    //   component = <Print />;
    //   break;
     case "/Login":
       component = <Login />;
       break;
    // case "/SignUp":
    //   component = <SignUp/>
  }

  console.log(window.location);

  return (
    <>
      {component}
    </>
  );
}

export default App;
