import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { SHeader, SLogo, SNav, SNavMenu, SNavTheme, SThemeToggler, SToggleThumb } from "src/style/header/header";

const Nav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { setTheme, theme } = useContext(ThemeContext);
    const [tabNumber, setTabNumber] = useState<number>(0);

    useEffect(() => {
        const path = location.pathname;
        switch (path) {
            case "/proj4":
                setTabNumber(1);
                break;
            case "/epsg":
                setTabNumber(2);
                break;
            case "/map":
                setTabNumber(3);
                break;
            default:
                setTabNumber(0);
        }
    }, [location.pathname]);

    const navNavgiate = (path: string) => () => {
        navigate(path);
    };

    return (
        <SHeader>
            <SLogo onClick={navNavgiate("/")}>Home</SLogo>
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
            </SNav>
            <SNavTheme>
                ☀️
                <SThemeToggler isActive={theme === "dark"} onClick={() => setTheme((p: string) => (p === "light" ? "dark" : "light"))}>
                    <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                </SThemeToggler>
                🌙
            </SNavTheme>
        </SHeader>
    );
};

export default Nav;
