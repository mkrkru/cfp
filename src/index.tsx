import React from "react";
import ReactDOM from "react-dom";
import { DAppProvider } from "@usedapp/core";
import LaptopApp from "./apps/LaptopApp";
import MobileApp from "./apps/MobileApp";
import { BrowserView, MobileView } from 'react-device-detect';

ReactDOM.render(
    <React.StrictMode>
        <DAppProvider config={{}}>
            <BrowserView><LaptopApp /></BrowserView>
            <MobileView><MobileApp /></MobileView>
        </DAppProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
