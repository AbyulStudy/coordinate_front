import React, { useState } from "react";
import { SCustomLabel, SFormWrap, SInputWrap } from "src/style/common";
import { SSearchButton, SSearchInput, SUploadLabel } from "src/style/common";
import { SInputFileHidden, STextAreaReadOnly } from "src/style/tag";
import { SMain, SWrap } from "src/style/main";
import { Proj4Service } from "src/model/proj4";
import { coordinateSystemType, separator } from "src/interface/entity/proj4";
import axios from "axios";

const fileTextExample = `※주의사항※
1. 인코딩 형태 utf-8과 euc-kr만 지원하고 있습니다.
2. 좌표계는 utmk와 wgs84만 지원하고 있습니다.
3. 파일의 최대 크기는 2048byte까지 지원합니다.
4. 좌표계는 현재 작성된 파일의 좌표계를 입력해주세요.

※분리 기호에 따라 파일을 다음과 같이 작성해주세요.
 - [주소],[x좌표],[y좌표]
서울특별시 종로구 청운동 자하문로 99-4 경복빌라 청운효자동,953193.346779,1954097.453223
서울특별시 종로구 청운동 자하문로 99-4 경복빌라 청운효자동|953193.346779|1954097.453223
`;

const Proj4 = () => {
    const [fileName, setFileName] = useState<string>("");
    const [fileText, setFileText] = useState<string>(fileTextExample);
    const [convertText, setConvertText] = useState<string>("");

    const [coordinateFile, setCoordinateFile] = useState<File>();
    const [separator, setSeparator] = useState<separator>(",");
    const [coordinateSystemType, setCoordinateSystemType] = useState<coordinateSystemType>("utmk");

    const setFileHandler = () => (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList: FileList | null = e.target.files;
        if (fileList) {
            const fileInfo = fileList[0];
            const { name, size } = fileInfo;
            if (size < 2049) {
                setFileName(name);
                setCoordinateFile(fileInfo);
                readFileText(fileInfo);
            } else {
                alert("파일 용량을 확인해주세요 limit:2048 byte");
            }
        }
    };

    const setQueryStringState = (key: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value: any = e.target.value;
        switch (key) {
            case "separator":
                setSeparator(value);
                break;
            case "coordinateFileSystemType":
                setCoordinateSystemType(value);
                break;
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

    const sendFileHandler = () => async () => {
        if (coordinateFile) {
            try {
                const formData = new FormData();
                formData.append("coordinateFile", coordinateFile);
                const { data } = await Proj4Service.coordinate(formData, separator, coordinateSystemType);
                setConvertText(data.join("\n"));
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    // do what you want with your axios error
                    console.log(error);
                    const { data }: any = error.response;
                    if (data.code === "INVALID_DATA") {
                        return alert("파일 혹은 분리기호를 확인하세요.");
                    }
                    return alert("네트워크 통신 에러가 발생했습니다.");
                } else {
                    // do whatever you want with native error
                    return alert(error);
                }
            }
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
                        <SCustomLabel>분리기호</SCustomLabel>
                        <select onChange={setQueryStringState("separator")}>
                            <option value=",">,</option>
                            <option value="|">|</option>
                        </select>
                        <SCustomLabel>좌표계</SCustomLabel>
                        <select onChange={setQueryStringState("coordinateFileSystemType")}>
                            <option value="utmk">utmk</option>
                            <option value="wgs84">wgs84</option>
                        </select>
                        <SInputFileHidden id="proj4File" accept="text/plain, text/csv" onChange={setFileHandler()} />
                    </SInputWrap>
                    <SSearchButton onClick={sendFileHandler()}>위도경도 찾기</SSearchButton>
                </SFormWrap>
                <STextAreaReadOnly cols={30} rows={7} value={fileText}></STextAreaReadOnly>
                <STextAreaReadOnly cols={30} rows={7} value={convertText}></STextAreaReadOnly>
            </SWrap>
        </SMain>
    );
};

export default Proj4;
