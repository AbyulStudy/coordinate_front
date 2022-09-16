import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { SHeader, SNav, SNavMenu, SNavTheme, SThemeToggler, SToggleThumb } from "../../style/header/header";
import { SLayout } from "../../style/layout";
import { SMain } from "../../style/main";

const Layout = () => {
    const navigate = useNavigate();
    const { setTheme, theme } = useContext(ThemeContext);
    const [tabNumber, setTabNumber] = useState<number>(1);

    const navNavgiate = (path: string) => () => {
        switch (path) {
            case "proj4":
                setTabNumber(1);
                break;
            case "epsg":
                setTabNumber(2);
                break;
            case "map":
                setTabNumber(3);
                break;
        }
        navigate(path);
    };

    return (
        <SLayout>
            <SHeader>
                <SNav>
                    <SNavMenu isSelect={tabNumber} onClick={navNavgiate("proj4")}>
                        위도경도 찾기
                    </SNavMenu>
                    <SNavMenu isSelect={tabNumber} onClick={navNavgiate("epsg")}>
                        epsg 개발코드
                    </SNavMenu>
                    <SNavMenu isSelect={tabNumber} onClick={navNavgiate("map")}>
                        지도 검색
                    </SNavMenu>
                    <SNavTheme>
                        ☀️
                        <SThemeToggler isActive={theme === "dark"} onClick={() => setTheme((p: string) => (p === "light" ? "dark" : "light"))}>
                            <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                        </SThemeToggler>
                        🌙
                    </SNavTheme>
                </SNav>
            </SHeader>
            <SMain>hi</SMain>
        </SLayout>
    );
};

export default Layout;
