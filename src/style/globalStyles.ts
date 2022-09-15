import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        *, *::before, *::after{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
    }

    body{
        background: ${({ theme }: any) => theme.bg2};
        color: ${({ theme }: any) => theme.text};
        font-family: 'Roboto', sans-serif;
        letter-spacing: .6px;
    }

    button{
        font-family: inherit;
        outline: none;
        border: none;
        background: none;
        letter-spacing: inherit;
        color: inherit;
        font-size: inherit;
        text-align: inherit;
        padding: 0;
    }
`;
