import React, { useState } from "react";
import { GlobalStyle } from "./style/globalStyles";
import Router from "./Router";
import { ThemeContext, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/theme";

function App() {
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle />
                <Router />
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default App;
