import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import NotAuthNavbar from "./pages/Navbar/NotAuthNavbar/index"
import AuthNavbar from "./pages/Navbar/AuthNavbar/index"
import Login from "./pages/Login/index";
import BusinessReg from "./pages/Registration/BusinessRegistration/index";
import DefaultReg from "./pages/Registration/DefaultRegistration/index";
import MainPage from "./pages/HomePage/index";
import ViewProfile from "./pages/Profile/index";
import ViewEvents from "./pages/EventPage/ViewEvents/index";
import CreateEvent from "./pages/EventPage/CreateEvent/index";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <NotAuthNavbar />
        <Login />
        </Route>

        <Route path = "/login">
        <NotAuthNavbar />
        <Login />
        </Route>

        <Route path = "/registration/default">
        <NotAuthNavbar />
        <DefaultReg />
        </Route>

        <Route path = "/registration/business">
        <NotAuthNavbar />
        <BusinessReg />
        </Route>

        <Route path = "/home">
        <AuthNavbar />
        <MainPage />
        </Route>

        <Route path = "/profile">
        <AuthNavbar />
        <ViewProfile />
        </Route>

        <Route path = "/events">
        <AuthNavbar />
        <ViewEvents />
        </Route>
        <Route path = "/create/event">
        <AuthNavbar />
        <CreateEvent />
        </Route>
      </Switch>
    </Router>
  );
}

