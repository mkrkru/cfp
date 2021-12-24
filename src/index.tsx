import React from "react";
import ReactDOM from "react-dom";
import { DAppProvider } from "@usedapp/core";
import LaptopApp from "./apps/LaptopApp";
import MobileApp from "./apps/MobileApp";
import { BrowserView, MobileView } from 'react-device-detect';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <DAppProvider config={{}}>
            <BrowserRouter>
                <BrowserView>
                    <Routes>
                        <Route path="/" element={<LaptopApp />} />
                        {/*<Route path="/mint" element={<LaptopMint />} />*/}
                    </Routes>
                </BrowserView>
                <MobileView>
                    <Routes>
                        <Route path="/" element={<MobileApp />} />
                        {/*<Route path="/mint" element={<MobileMint />} />*/}
                    </Routes>
                </MobileView>
            </BrowserRouter>
        </DAppProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
