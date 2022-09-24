import React from "react";
import { NavContent as data } from "../Content";

function Nav() {
  return (
    <div
      style={{ background: "#db9989", padding: "5px 0" }}
      className="container-fluid"
    >
      <ul className="nav justify-content-center">
        {data.map((c) => {
          return (
            <li key={c.id} className="nav-item">
              <a href="./" className="nav-link" style={{ color: "white" }}>
                {c.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Nav;
