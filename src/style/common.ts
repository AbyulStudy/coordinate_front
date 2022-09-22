import styled from "styled-components";
import { SButton, SInputText50P, SLabelNoWrap } from "./tag";

export const SFormWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1.5em;
    width: 100%;
`;

export const SInputWrap = styled.div`
    display: flex;
    width: 100%;
    column-gap: 1em;
`;

export const SCustomButton = styled(SButton)`
    margin: 0;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: 0.2s;
`;

export const SSearchButton = styled(SCustomButton)`
    background-color: #6eff9f;
    color: rgb(30, 30, 30);
    :hover {
        background-color: #59cf80;
        outline: 0;
    }
    :active {
        color: rgb(200, 200, 200);
        background-color: #2d6941;
        outline: 0;
    }
`;

export const SSearchInput = styled(SInputText50P)`
    font-size: 1.5rem;
    line-height: 1.5rem;
`;

export const SCustomLabel = styled(SLabelNoWrap)`
    margin: 0;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: 0.2s;
    margin: auto 0;
`;

export const SUploadLabel = styled(SCustomLabel)`
    background-color: #f57783;
    color: rgb(30, 30, 30);
    :hover {
        background-color: #db6b77;
        outline: 0;
    }
    :active {
        color: rgb(200, 200, 200);
        background-color: #a8525b;
        outline: 0;
    }
`;
