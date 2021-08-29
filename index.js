import React from "react";
import ReactDOM from "react-dom";
import ESOP from "./components/Esop";

/**
 * Main module for the ESOP app. It bootstraps the app and render it in the DOM with ReactDOM.
 *
 * @module
 */
ReactDOM.render(
    <ESOP />,
    document.getElementById("esop-app")
);