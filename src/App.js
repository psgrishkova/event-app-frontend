import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import NotAuthNavbar from "./pages/auth/NotAuthNavbar"
import AuthNavbar from "./pages/auth/AuthNavbar"
import Login from "./pages/Login";
import BusinessReg from "./pages/registration/BusinessReg";
import DefaultReg from "./pages/registration/DefaultReg";
import MainPage from "./pages/main/MainPage";
import ViewProfile from "./pages/profile/ViewProfile";
import ViewEvents from "./pages/events/ViewEvents";
import CreateEvent from "./pages/events/CreateEvent";
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

