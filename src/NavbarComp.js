import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login/Login";
import BusinessReg from "./pages/registration/BusinessReg";
import DefaultReg from "./pages/registration/DefaultReg";
import NoPage from "./pages/NoPage";
import "./App.css";
class NavbarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <div>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand">EventApp</Link>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/login/form"}>
                      Войти
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to={"/registration/form/business"}
                    >
                      Зарегистрировать компанию
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to={"/registration/form/default"}
                    >
                      Зарегистрироваться как пользователь
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/login/form">
                <Login />
              </Route>
              <Route path="/registration/form/default">
                <DefaultReg />
              </Route>
              <Route path="/registration/form/business">
                <BusinessReg />
              </Route>
              <Route path="/*">
                <NoPage />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarComp;
