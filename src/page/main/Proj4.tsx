import React, { useState } from "react";
import { SFormWrap, SInputWrap } from "src/style/common";
import { SSearchButton, SSearchInput, SUploadLabel } from "src/style/common";
import { SInputFileHidden, STextAreaReadOnly } from "src/style/tag";
import { SMain, SWrap } from "src/style/main";

const Proj4 = () => {
    const [fileName, setFileName] = useState<string>("");
    const [sendFile, setSendFile] = useState<File>();
    const [fileText, setFileText] = useState<any>("");

    const setFileHandler = () => (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList: FileList | null = e.target.files;
        if (fileList) {
            const fileInfo = fileList[0];
            const { name, size } = fileInfo;
            if (size < 2049) {
                setFileName(name);
                setSendFile(fileInfo);
                readFileText(fileInfo);
            } else {
                alert("파일 용량을 확인해주세요 limit:2048 byte");
            }
        }
    };

    const readFileText = (fileInfo: File) => {
        const fileReader = new FileReader();
        let fileText: any = "";
        fileReader.readAsText(fileInfo);
        fileReader.onload = () => {
            fileText = fileReader.result;
            setFileText(fileText);
        };
    };

    const sendFileHandler = () => () => {
        if (sendFile) {
        } else {
            alert("파일을 선택해주세요.");
        }
    };
    return (
        <SMain>
            {/* 위도 경도 찾기 */}
            <SWrap>
                <SFormWrap>
                    <SInputWrap>
                        <SSearchInput value={fileName} />
                        <SUploadLabel htmlFor="proj4File">Upload</SUploadLabel>
                        <SInputFileHidden id="proj4File" accept="text/plain, text/csv" onChange={setFileHandler()} />
                    </SInputWrap>
                    <SSearchButton onClick={sendFileHandler()}>위도경도 찾기</SSearchButton>
                </SFormWrap>
                <STextAreaReadOnly cols={30} rows={7} value={fileText}></STextAreaReadOnly>
                <STextAreaReadOnly cols={30} rows={7}></STextAreaReadOnly>
            </SWrap>
        </SMain>
    );
};

export default Proj4;
