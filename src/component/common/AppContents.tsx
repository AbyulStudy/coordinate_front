import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AppContentRoute from "../../route/AppContentRoute";
import Spinner from "./Spinner";

const AppContents = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                {AppContentRoute.map((route: any, idx: any) => {
                    const { path } = route;
                    return (
                        route.element && (
                            <Route
                                key={idx}
                                path={path}
                                element={
                                    <>
                                        <route.element />
                                    </>
                                }
                            ></Route>
                        )
                    );
                })}
            </Routes>
        </Suspense>
    );
};

export default AppContents;
