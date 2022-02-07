import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import Login from "../../Login";
import BusinessRegistration from "../../Registration/BusinessRegistration";
import DefaultRegistration from "../../Registration/DefaultRegistration";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function NotAuthNavbar({setToken}) {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <span className="navbar-brand">EventApp</span>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Войти
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/registration/business">
                                    Зарегистрировать компанию
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/registration/default">
                                    Зарегистрировать пользователя
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Login setToken={setToken}/>
                    </Route>
                    <Route path="/login">
                        <Login setToken={setToken}/>
                    </Route>
                    <Route path="/registration/business">
                        <BusinessRegistration/>
                    </Route>
                    <Route path="/registration/default">
                        <DefaultRegistration/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default NotAuthNavbar;