import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Spinner from "./component/common/Spinner";
import Layout from "./component/layout/Layout";

const Router = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                <Route path="*" element={<Layout />}></Route>
            </Routes>
        </Suspense>
    );
};

export default Router;
