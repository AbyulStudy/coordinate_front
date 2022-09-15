import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        *, *::before, *::after{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
    }

    body{
        font-family: 'Roboto', sans-serif;
        letter-spacing: .6px;
    }
`;
