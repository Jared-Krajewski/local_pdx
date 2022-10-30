import React from "react";

import "bootstrap/dist/css/bootstrap.css";

// import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// renders Navbar
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          <img
            style={{ width: 125 + "px" }}
            src="https://i.etsystatic.com/26743355/r/il/d8af98/2841465122/il_1588xN.2841465122_3jpa.jpg"
            alt="logo"
          ></img>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                Add a Business
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
