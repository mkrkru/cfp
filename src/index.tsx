import React from "react";
import ReactDOM from "react-dom";
import { DAppProvider } from "@usedapp/core";
import LaptopApp from "./apps/LaptopApp";
import MobileApp from "./apps/MobileApp";
// import { BrowserView, MobileView } from "react-device-detect";

ReactDOM.render(
    <DAppProvider config={{}}>{window.innerWidth > 1000 ? <LaptopApp /> : <MobileApp />}</DAppProvider>,
    document.getElementById("root")
);
