import React, { KeyboardEvent, useEffect, useState } from "react";
import axios from "axios";
import { SButton, SFlexDiv } from "src/style/tag";
import { SMain, SWrap } from "src/style/main";
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
import { epsgAPIEntity, epsgioDataEntity, epsgioUrlEntity } from "src/interface/entity/epsg";
import { checkStrToNumber } from "src/utility/numberRegx";
import { EpsgService } from "src/model/epsg";

const EpsgDeveloper = () => {
    const [epsgResult, setEpsgResult] = useState<[epsgioUrlEntity, ...epsgioDataEntity[]]>();
    const [epsgUrl, setEpsgUrl] = useState<epsgioUrlEntity>();
    const [epsgData, setEpsgData] = useState<epsgioDataEntity[]>();

    const [epsgNumber, setEpsgNumber] = useState<string>("");
    const [epsgCode, setEpsgCode] = useState<string>("");
    const [copyButton, setCopyButton] = useState<boolean>(false);

    /**
     * 입력한 값을 {@link epsgNumber} 에 담아주는 함수입니다.
     * @returns setEpsgNumber(e.target.value)
     */
    const setEpsgNumberHandler = () => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEpsgNumber(value);
    };

    /**
     * node 버서에서 데이터를 받아 epsgResult에 담아준느 함수입니다.
     * 에러가 발생시 axios.isAxiosError을 통해 통신 에러인지, 코드에러인지 확인합니다.
     * @returns epsgResult {@link epsgAPIEntity}
     */
    const getEpsgDataHandler = () => async () => {
        if (!epsgNumber || !checkStrToNumber(epsgNumber)) {
            return alert("epsgNumber 값을 입력하세요.");
        }
        try {
            const { data }: epsgAPIEntity = await EpsgService.code(Number(epsgNumber));
            setEpsgResult(data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // do what you want with your axios error
                const { data }: any = error.response;
                if (data.code === "WRONG_CODE") {
                    return alert("잘못된 코드 번호를 입력 하셨습니다.");
                }

                return alert("네트워크 통신 에러가 발생했습니다.");
            } else {
                // do whatever you want with native error
                return alert(error);
            }
        }
    };

    /**
     * getEpsgDataHandler()을 통해 입력 받은 epsgCode를 클립보드에 복사하는 함수입니다.
     * https 적용되었을 경우 navigator.clipboard 을 이용하여 복사합니다.
     * 그렇지 않을 경우 DOM 을 이용하여 복사합니다.
     * @ref https://developer.mozilla.org/en-US/docs/Web/API/Clipboard
     * @stackobverflow https://stackoverflow.com/questions/71873824/copy-text-to-clipboard-cannot-read-properties-of-undefined-reading-writetext
     * @param epsgCode
     * @returns
     */
    const copyEpsgCodeHandler = (epsgCode: string) => () => {
        if (epsgCode) {
            const httpsCheck = window.isSecureContext;
            const clipboardCheck = navigator.clipboard;
            if (httpsCheck && clipboardCheck) {
                clipboardCheck
                    .writeText(epsgCode)
                    .then(() => {
                        setCopyButton(true);
                    })
                    .catch(err => {
                        console.error("Unable to copy to clipboard", err);
                    });
            } else {
                const textArea = document.createElement("textarea");
                textArea.value = epsgCode;
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try {
                    setCopyButton(true);
                    document.execCommand("copy");
                } catch (err) {
                    console.error("Unable to copy to clipboard", err);
                }
                document.body.removeChild(textArea);
            }
        } else {
            alert("blank");
        }
    };

    const enterEvent = () => (e: KeyboardEvent<HTMLInputElement>) => {
        const { key } = e;

        if (key === "Enter") {
            getEpsgDataHandler()();
        }
    };

    /**
     * Copy가 성공 할 경우 Copy 버튼이 5초동안 변화합니다.
     */
    useEffect(() => {
        setTimeout(() => {
            setCopyButton(false);
        }, 5000);
    }, [copyButton]);

    /**
     * getEpsgDataHandler() 을 통해 정상적으로 데이터를 입력 받았을 경우 구조할당을 통해 데이터를 상태관리합니다.
     */
    useEffect(() => {
        if (epsgResult) {
            const [urlEntity, ...dataEntity] = epsgResult;
            setEpsgUrl(urlEntity);
            setEpsgData(dataEntity);
        }
    }, [epsgResult]);

    return (
        <SMain>
            <SWrap>
                <SFormWrap>
                    <SInputWrap>
                        <SSearchInput value={epsgNumber} onChange={setEpsgNumberHandler()} onKeyDown={enterEvent()} />
                        <SSearchButton onClick={getEpsgDataHandler()}>검색</SSearchButton>
                    </SInputWrap>
                </SFormWrap>

                <SEpsgTableWrap>
                    <SEpsgTableMain>
                        <SEpsgTableDiv>
                            ref : <a href={epsgUrl && epsgUrl.url}>{epsgUrl && epsgUrl.url}</a>
                        </SEpsgTableDiv>
                        <SFlexDiv>
                            <SEpsgTableLeft>
                                <SEpsgTableDiv>
                                    <SEpsgTableTitle>Language</SEpsgTableTitle>
                                </SEpsgTableDiv>
                                {epsgData &&
                                    epsgData.map((el, idx) => {
                                        const { code, title } = el;
                                        return (
                                            <SEpsgLanguageDiv
                                                key={idx}
                                                onClick={() => {
                                                    setEpsgCode(code);
                                                }}
                                            >
                                                <SEpsgLanuageTitle>{title}</SEpsgLanuageTitle>
                                            </SEpsgLanguageDiv>
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
