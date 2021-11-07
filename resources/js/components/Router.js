import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../actions/authActions";

import Home from "../views/Home";

export default function Router() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (localStorage.getItem("isLoggedIn"))
            dispatch(
                setAuthenticated(true, JSON.parse(localStorage.getItem("user")))
            );
    });

    return (
        <BrowserRouter>
            <Navbar />
            <div className="main">
                <Switch>
                    <Route component={Home}></Route>
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>
    );
}
