import React from "react";
import { useContext } from "react";
import "../css/header.css";
import { NavContext } from "./NavStatus";


function Header() {
  const { toggleNav } = useContext(NavContext);
  return (
    <>
      <div className="header">
        <div className="menubar">
          <img src="/iconpack/lists.png" alt="rishi" draggable="false" onClick={toggleNav} />
        </div>
          <h3>My Assignments</h3>
      </div>
    </>
  );
}

export default Header;
