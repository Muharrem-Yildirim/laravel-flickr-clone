/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// require("./components/App");

import React from "react";
import ReactDOM from "react-dom";

import { Grid } from "@mui/material";

import "animate.css";
import store from "./store";

import { Provider } from "react-redux";
import DailyPhotos from "./components/DailyPhotos";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Grid
                container
                spacing={5}
                justifyContent={"center"}
                style={{ marginTop: 10 }}
            >
                <Grid item xs={8}>
                    <DailyPhotos />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    );
}
