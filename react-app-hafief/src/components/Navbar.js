import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="header">
      <div className="header-left">
        <img src={require("../images/exhibitionlogo.png")} alt=" "/>
      </div>
      <div className="header-right">
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
