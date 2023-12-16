import React from "react";
import { Routes, Route } from "react-router-dom";
import config from "../pages/config";


function RoutesProviders() {
    return (
        <Routes>
            {
                config.map(({ element, path, Layout }, idx) => (
                    <Route
                        element={<Layout>{element}</Layout>}
                        path={path}
                        key={idx} />
                ))
            }
        </Routes>
    )
}

export default RoutesProviders