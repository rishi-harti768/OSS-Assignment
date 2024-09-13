import React from "react";
import { useState, useContext, createContext } from "react";
import "../css/navmenu.css";
import navjson from "../data/assignment.json";
import { NavContext } from "./NavStatus";

function Navmenu({ currentdate, setcurrentdate }) {
  const { navOpen, toggleNav } = useContext(NavContext);
  function selectitem(item) {
    var index = -1;
    for (var i = 0; i < navjson.length; i++) {
      if (navjson[i].title == item) {
        index = i;
        break;
      }
    }
    setcurrentdate(index);
    toggleNav();
  }
  return (
    <>
      <div className="navlist" style={{ left: navOpen ? "0" : "-384px" }}>
        <div className="closenav">
          <img
            src="/iconpack/arrow-back.svg"
            alt="close"
            draggable="false"
            onClick={toggleNav}
          />
        </div>
        {navjson.map((item) => (
          <div
            className="navitem"
            key={item.title}
            onClick={() => {
              var ititle = item.title;
              selectitem(ititle);
            }}
          >
            {item.title}
          </div>
        ))}
      </div>
    </>
  );
}

export default Navmenu;
