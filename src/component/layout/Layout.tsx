import React from "react";
import { SLayout } from "../../style/layout";
import AppContents from "../common/AppContents";
import Nav from "../common/SNav";

const Layout = () => {
    return (
        <SLayout>
            <Nav></Nav>
            <AppContents></AppContents>
        </SLayout>
    );
};

export default Layout;
