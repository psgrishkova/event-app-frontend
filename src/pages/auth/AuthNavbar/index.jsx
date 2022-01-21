import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {Link } from "react-router-dom";
function AuthNavbar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <span className="navbar-brand">EventApp</span>
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link className="nav-link" to={"/home"}>
                Карта
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/profile"}>
                Профиль
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/events"}>
                Cобытия
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/login"}>
                Выйти
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default AuthNavbar;