import styled, { keyframes } from "styled-components";

export const LoadingSection = styled.section`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

const SpiinerAction = keyframes`
    from {
        transform: rotate(0deg);
    }
    
    to {
        transform: rotate(360deg);
    }
`;

export const SpinnerDiv = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 64px;
    height: 64px;
    margin-top: -32px;
    margin-left: -32px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top-color: black;
    border-bottom-color: black;
    animation: ${SpiinerAction} 0.8s ease infinite;
`;
