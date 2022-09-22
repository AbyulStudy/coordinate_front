import React, { useState } from "react";
import { KakaoMap } from "src/component/kakao/KakaoMap";
import { SFormWrap, SInputWrap } from "src/style/common";
import { SSearchButton, SSearchInput } from "src/style/common";
import { SSearchLeft, SSearchLeftTitle, SSearchWrap, SSearchRight, SSearchTitle, SSearchValue } from "src/style/page/search";
import { STable, STbody, STr } from "src/style/tag";
import { SMain, SWrap } from "src/style/main";

const SearchAddress = () => {
    const [mapSize, setMapSize] = useState<any>({
        width: "100%",
        height: "100%"
    });

    return (
        <SMain style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "0.5em" }}>
            <SWrap>
                <SFormWrap>
                    <SInputWrap>
                        <SSearchInput />
                        <SSearchButton>검색</SSearchButton>
                    </SInputWrap>
                </SFormWrap>
                <SSearchWrap>
                    <SSearchLeft>
                        <SSearchLeftTitle>정제/전환 결과데이터</SSearchLeftTitle>
                        <STable>
                            <STbody>
                                <STr>
                                    <SSearchTitle>입력</SSearchTitle>
                                    <SSearchValue>경기도 부천시 오정구 성곡로 110-1</SSearchValue>
                                </STr>
                                <STr>
                                    <SSearchTitle>구 주소</SSearchTitle>
                                    <SSearchValue>경기도 부천시 오정구 성곡로 110-1</SSearchValue>
                                </STr>
                                <STr>
                                    <SSearchTitle>도로명 주소</SSearchTitle>
                                    <SSearchValue>경기도 부천시 오정구 성곡로 110-1</SSearchValue>
                                </STr>
                                <STr>
                                    <SSearchTitle>우편번호</SSearchTitle>
                                    <SSearchValue>경기도 부천시 오정구 성곡로 110-1</SSearchValue>
                                </STr>
                                <STr>
                                    <SSearchTitle>좌표</SSearchTitle>
                                    <SSearchValue>
                                        X :126.1234567890, <br />Y :37.1234567890
                                    </SSearchValue>
                                </STr>
                            </STbody>
                        </STable>
                    </SSearchLeft>
                    <SSearchRight>
                        <KakaoMap size={mapSize} coordinate={{ latitude: 33.450701, longitude: 126.570667 }} />
                    </SSearchRight>
                </SSearchWrap>
            </SWrap>
        </SMain>
    );
};

export default SearchAddress;
