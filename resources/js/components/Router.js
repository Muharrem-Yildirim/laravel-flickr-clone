import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "../views/Home";

export default function Router() {
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
