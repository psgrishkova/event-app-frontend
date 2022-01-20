import React, { Component, StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./pages/main/MainPage.css";
import MainPage from "./pages/main/MainPage";
ReactDOM.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById("root")
);
