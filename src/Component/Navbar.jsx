import React from "react";
import "../App.css";
import LogOut from "../Component/LogOut.js";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              AQMS
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Detailed Stats
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link to="/byday" className="dropdown-item">
                        {" "}
                        By day{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/bymonth" className="dropdown-item">
                        {" "}
                        By Month{" "}
                      </Link>
                    </li>

                    <li>
                      <Link to="/byyear" className="dropdown-item">
                        {" "}
                        By year{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="btn btn-primary nav-link active col-2"
                    aria-current="page"
                  >
                    logOut
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
//onClick={LogOut}
