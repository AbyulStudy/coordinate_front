import styled from "styled-components";

export const SInputText50P = styled.input.attrs(() => ({ type: "text" }))`
    width: 50%;
`;

export const SInputFileHidden = styled.input.attrs(() => ({ type: "file" }))`
    display: none;
`;
export const SLabelNoWrap = styled.label`
    white-space: nowrap;
`;

export const SButton = styled.button`
    white-space: nowrap;
`;

export const STextAreaReadOnly = styled.textarea.attrs(() => ({
    readOnly: true
}))``;

export const SFlexDiv = styled.div`
    display: flex;
`;

export const STable = styled.table``;

export const STbody = styled.tbody``;

export const STr = styled.tr``;

export const STd = styled.td``;
