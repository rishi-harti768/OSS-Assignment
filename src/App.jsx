import React from "react";
import { useState, useContext, createContext } from "react";
import Header from "./resources/components/header";
import Navmenu from "./resources/components/Navmenu";
import Content from "./resources/components/Content";
import { NavProvider } from "./resources/components/NavStatus";
import hwjson from "./resources/data/assignment.json";

function App() {
  const [currentdate, setcurrentdate] = useState(hwjson.length - 1);
  return (
    <>
      <NavProvider>
        <Header></Header>
        <div className="mainview">
          <Navmenu
            currentdate={currentdate}
            setcurrentdate={setcurrentdate}
          ></Navmenu>
          <Content
            currentdate={currentdate}
            setcurrentdate={setcurrentdate}
          ></Content>
        </div>
      </NavProvider>
    </>
  );
}

export default App;
