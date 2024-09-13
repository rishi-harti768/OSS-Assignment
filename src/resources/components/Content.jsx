import React, { useEffect } from "react";
import "../css/content.css";
import { useContext } from "react";
import { NavContext } from "./NavStatus";
import hwjson from "../data/assignment.json";

function Content({ currentdate, setcurrentdate }) {
  const { navOpen, toggleNav } = useContext(NavContext);
  return (
    <>
      <div className="content" style={{ left: navOpen ? "384px" : "0" }}>
        <h1>{hwjson[currentdate].title}</h1>
        <div className="assignmentslist">
          {hwjson[currentdate].assignments.map((item) => (
            <a href={item.url} rel="noopener" target="_blank" className="tasklist" key={item.desc}>
              {item.desc}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Content;
