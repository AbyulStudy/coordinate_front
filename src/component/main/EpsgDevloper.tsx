import React, { Suspense, useState } from "react";
const Coordinate = () => {
    /**
     * 위도경도 찾기
     */
    const [fileName, setFileName] = useState<string>("");
    const [sendFile, setSendFile] = useState<File>();

    const setFileHandler = () => (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList: FileList | null = e.target.files;
        if (fileList) {
            const fileInfo = fileList[0];
            const { name, size } = fileInfo;
            if (size < 2049) {
                setFileName(name);
                setSendFile(fileInfo);
            } else {
                alert("파일 용량을 확인해주세요 limit:2048");
            }
        }
    };

    const sendFileHandler = () => () => {
        if (sendFile) {
        } else {
            alert("파일을 선택해주세요.");
        }
    };
    return (
        <>
            {/* 위도 경도 찾기 */}
            <div className="wrap" style={{ display: "flex", flexDirection: "row", marginTop: "1.5em", justifyContent: "space-between" }}>
                <div style={{ width: "75%" }}>
                    <input type="text" value={fileName} style={{ width: "50%" }} />
                    <input type="file" name="file" id="file" style={{ width: "25%" }} accept="text/plain, text/csv" onChange={setFileHandler()} />
                </div>
                <div>
                    <button onClick={sendFileHandler()}>위도경도 찾기</button>
                </div>
            </div>
            <div style={{ marginTop: "1.5em" }}>
                <textarea name="" id="" cols={30} rows={10} readOnly style={{ width: "100%" }}></textarea>
            </div>
        </>
    );
};

export default Coordinate;
