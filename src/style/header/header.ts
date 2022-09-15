import styled from "styled-components";
import { IsActive } from "../../interface/type";

const SHeader = styled.header`
    position: fixed;
    width: 100%;
    height: 3.25em;
    text-align: center;
    background-color: ${({ theme }) => theme.bg};
`;

const SNav = styled.ul`
    display: flex;
    justify-content: center;
    gap: 1em;
`;

const SNavMenu = styled.li`
    height: 3.25em;
    line-height: 3.25em;
    cursor: pointer;
    padding: 0 10px 0 10px;
    :hover {
        background-color: gray;
        height: 3.5em;
        border-radius: 0 0 10px 10px;
    }
`;

const SNavTheme = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    height: 3.25em;
    line-height: 3.25em;
    right: 0;
    margin-right: 10px;
    cursor: default;
    gap: 0.5em;
`;

const SThemeToggler = styled.button<IsActive>`
    position: relative;
    margin: auto;
    cursor: pointer;
    width: 5em;
    height: 2em;
    border-radius: 1.75em;
    background: ${({ theme, isActive }: any) => (!isActive ? theme.bg3 : theme.bg3)};
`;

const SToggleThumb = styled.div`
    width: 1.75em;
    height: 1.75em;
    position: absolute;
    top: 0.1em;
    transition: 0.2s ease right;
    right: calc(99% - 1.75em);
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
`;

export { SHeader, SNav, SNavMenu, SNavTheme, SThemeToggler, SToggleThumb };
