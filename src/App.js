import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import NotAuthNavbar from "./pages/Navbar/NotAuthNavbar/index"
import AuthNavbar from "./pages/Navbar/AuthNavbar/index"
import useToken from "./hooks/useToken";

export default function App() {

    const {token, setToken} = useToken();

    return (
        <Router>
            {
                token ?
                    <NotAuthNavbar setToken={setToken}/>
                    :
                    <AuthNavbar setToken={setToken}/>
            }
        </Router>
    );
}

