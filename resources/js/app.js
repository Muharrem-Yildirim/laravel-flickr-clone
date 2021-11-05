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

import "animate.css";
import store from "./store";

import { Provider } from "react-redux";

import Router from "./components/Router";
import ModalRoot from "./components/modals/ModalRoot";

function App() {
    return (
        <Provider store={store}>
            <Router />
            <ModalRoot />
        </Provider>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
