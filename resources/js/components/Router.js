import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../actions/authActions";
import cookieHelper from "../cookieHelper";

import Home from "../views/Home";

export default function Router() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        console.log(1, cookieHelper.get("user"));
        if (
            cookieHelper.get("isLoggedIn") === "true" &&
            cookieHelper.get("user") !== "null"
        )
            dispatch(setAuthenticated(true, cookieHelper.get("user")));
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
