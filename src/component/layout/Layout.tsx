import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { SHeader, SNav, SNavMenu, SNavTheme, SThemeToggler, SToggleThumb } from "../../style/header/header";
import { SLayout } from "../../style/layout";
import { SMain } from "../../style/main";

const Layout = () => {
    const { setTheme, theme } = useContext(ThemeContext);

    return (
        <SLayout>
            <SHeader>
                <SNav>
                    <SNavMenu>위도경도 찾기</SNavMenu>
                    <SNavMenu>epsg 개발코드</SNavMenu>
                    <SNavMenu>지도 검색</SNavMenu>
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
