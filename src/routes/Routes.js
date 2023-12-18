import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import adminConfig from "../admin/pages/adminConfig";
import config from "../pages/config";


function RoutesProviders() {
    // route config 
    const { pathname } = useLocation()
    const path = pathname.split('/')
    let admin = false
    if (path[1] && path[1] === 'admin') {
        admin = true
    }

    return (
        admin ? (
            <Routes>
                {
                    adminConfig.map(({ element, path, Layout }, idx) => (
                        <Route>
                            <Route
                                element={<Layout>{element}</Layout>}
                                path={path}
                                key={idx} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Route>
                    ))
                }
            </Routes>
        ) : (
            <Routes>
                {
                    config.map(({ element, path, Layout }, idx) => (
                        <Route>
                            <Route
                                element={<Layout>{element}</Layout>}
                                path={path}
                                key={idx} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Route>
                    ))
                }
            </Routes>
        )
    )
}

export default RoutesProviders