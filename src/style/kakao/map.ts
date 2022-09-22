import { kakaoMapStyled } from "src/interface/kakao/IKaKaoMap";
import styled, { css } from "styled-components";

export const SKaKaoMap = styled.div<kakaoMapStyled>`
    margin: 0 auto;
    display: flex;

    ${({ size: isSize }) => {
        if (isSize) {
            return css`
                width: ${isSize.width};
                height: ${isSize.height};
            `;
        }
        return css`
            width: 100%;
            height: 100%;
        `;
    }}
`;
