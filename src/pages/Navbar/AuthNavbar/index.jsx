import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {Link, Route, Switch} from "react-router-dom";
import HomePage from "../../HomePage";
import Profile from "../../Profile";
import ViewEvents from "../../EventPage/ViewEvents";
import CreateEvent from "../../EventPage/CreateEvent";

function AuthNavbar({setToken}) {

    const user = JSON.parse(localStorage.getItem("user"));

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div>
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
                            {user.role === "USER_BUSINESS" ?
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/create/event"}>
                                        Создать событие
                                    </Link>
                                </li> : <></>
                            }
                            <li className="nav-item">
                                <Link className="nav-link" to={"/events"}>
                                    Cобытия
                                </Link>
                            </li>
                            <li className="nav-item" onClick={logout}>
                                <Link className="nav-link" to={"/login"}>
                                    Выйти
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route path="/home">
                            <HomePage/>
                        </Route>
                        <Route path="/profile">
                            <Profile/>
                        </Route>
                        <Route path="/create/event">
                            <CreateEvent/>
                        </Route>
                        <Route path="/events">
                            <ViewEvents/>
                        </Route>
                    </Switch>
                </div>
        </div>
    );
}

export default AuthNavbar;