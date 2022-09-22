import React, { useEffect, useState } from "react";
import { SButton, SFlexDiv } from "src/style/tag";
import { SMain, SWrap } from "src/style/main";
import { epsgDummy } from "src/dummy";
import {
    SEpsgCode,
    SEpsgLanguageDiv,
    SEpsgLanuageTitle,
    SEpsgTableDiv,
    SEpsgTableLeft,
    SEpsgTableMain,
    SEpsgTableRight,
    SEpsgTableTitle,
    SEpsgTableWrap
} from "src/style/page/epsg";
import { SSearchButton, SSearchInput } from "src/style/common";
import { SFormWrap, SInputWrap } from "src/style/common";

const EpsgDeveloper = () => {
    const [epsgNumber, setEpsgNumber] = useState<string>("");
    const [epsgCode, setEpsgCode] = useState<any>("");
    const [copyButton, setCopyButton] = useState<boolean>(false);

    const setEpsgNumberHandler = () => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEpsgNumber(value);
    };

    const copyEpsgCodeHandler = (code: string) => () => {
        if (code) {
            navigator.clipboard
                .writeText(code)
                .then(() => {
                    setCopyButton(true);
                })
                .catch(() => {
                    alert("copy Error");
                });
        } else {
            alert("blank");
        }
    };

    const { data } = epsgDummy;
    // const data: any[] = [];

    useEffect(() => {
        setTimeout(() => {
            setCopyButton(false);
        }, 5000);
    }, [copyButton]);

    return (
        <SMain>
            <SWrap>
                <SFormWrap>
                    <SInputWrap>
                        <SSearchInput value={epsgNumber} onChange={setEpsgNumberHandler()} />
                        <SSearchButton>검색</SSearchButton>
                    </SInputWrap>
                </SFormWrap>

                <SEpsgTableWrap>
                    <SEpsgTableMain>
                        <SEpsgTableDiv>
                            ref : <a href={data[0]?.url}>{data[0]?.url}</a>
                            {/* {data[0] !== undefined ? <a href={data[0]?.url}>{data[0]?.url}</a> : <></>} */}
                        </SEpsgTableDiv>
                        <SFlexDiv>
                            <SEpsgTableLeft>
                                <SEpsgTableDiv>
                                    <SEpsgTableTitle>Language</SEpsgTableTitle>
                                </SEpsgTableDiv>
                                {data.map((el, idx) => {
                                    const { code, title } = el;
                                    if (idx === 0) return;
                                    return (
                                        <>
                                            <SEpsgLanguageDiv
                                                onClick={() => {
                                                    setEpsgCode(code);
                                                }}
                                            >
                                                <SEpsgLanuageTitle>{title}</SEpsgLanuageTitle>
                                            </SEpsgLanguageDiv>
                                        </>
                                    );
                                })}
                            </SEpsgTableLeft>
                            <SEpsgTableRight>
                                <SEpsgTableDiv style={{ display: "flex", justifyContent: "space-between" }}>
                                    <SEpsgTableTitle>Code</SEpsgTableTitle>
                                    <SButton onClick={copyEpsgCodeHandler(epsgCode)}>{copyButton ? "Copyed!" : "Copy"}</SButton>
                                </SEpsgTableDiv>

                                <SEpsgCode>{epsgCode}</SEpsgCode>
                            </SEpsgTableRight>
                        </SFlexDiv>
                    </SEpsgTableMain>
                </SEpsgTableWrap>
            </SWrap>
        </SMain>
    );
};

export default EpsgDeveloper;
