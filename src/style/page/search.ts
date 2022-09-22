import styled from "styled-components";
import { SFlexDiv, STd } from "../tag";

export const SSearchWrap = styled(SFlexDiv)`
    border: thick double;
`;

export const SSearchLeft = styled.div`
    width: 40%;
    border-right: thick double;
`;

export const SSearchLeftTitle = styled.p`
    font-size: 1.5rem;
    text-align: center;
`;
export const SSearchRight = styled.div`
    width: 100%;
`;

export const SSearchTitle = styled(STd)`
    text-align: center;
    white-space: nowrap;
    border: 1px solid black;
`;
export const SSearchValue = styled(STd)`
    text-align: center;
    border: 1px solid black;
`;
