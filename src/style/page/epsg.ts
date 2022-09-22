import styled from "styled-components";

export const SEpsgTableWrap = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`;

export const SEpsgTableMain = styled.div`
    width: 100%;
`;

export const SEpsgTableLeft = styled.div`
    width: 25%;
    border-right: 1px solid ${({ theme }) => theme.borderLine};
`;

export const SEpsgTableRight = styled.div`
    width: 75%;
`;

export const SEpsgTableDiv = styled.div`
    padding: 0.2em;
    border-bottom: 1px solid ${({ theme }) => theme.borderLine};
`;

export const SEpsgLanguageDiv = styled(SEpsgTableDiv)`
    :hover {
        background-color: ${({ theme }) => theme.navMenuActive};
    }
`;

export const SEpsgTableTitle = styled.p`
    font-weight: bold;
    line-height: 2em;
`;

export const SEpsgLanuageTitle = styled.p`
    line-height: 1.5em;
    cursor: pointer;
`;

export const SEpsgCode = styled.p`
    word-break: break-all;
    letter-spacing: 0.1em;
    padding: 0.5em;
`;
