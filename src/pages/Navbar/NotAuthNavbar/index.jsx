import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {Link } from "react-router-dom";
function NotAuthNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <span className="navbar-brand">EventApp</span>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/login"}>
                Войти
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/registration/business"}>
                Зарегистрировать компанию
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/registration/default"}>
                Зарегистрировать пользователя
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NotAuthNavbar;