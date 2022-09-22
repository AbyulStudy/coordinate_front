import styled from "styled-components";

const SMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5em;
    width: 100%;
    max-width: 1180px;
    margin-top: 3.25em;
`;

const SWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em auto 0 auto;
    gap: 1em;
    width: 100%;
    max-width: 980px;
    min-width: auto;
`;

export { SMain, SWrap };
