import React, { InputHTMLAttributes, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { SHeader, SNav, SNavMenu, SNavTheme, SThemeToggler, SToggleThumb } from "../../style/header/header";
import { SLayout } from "../../style/layout";
import { SMain } from "../../style/main";

const Layout = () => {
    const navigate = useNavigate();
    const { setTheme, theme } = useContext(ThemeContext);
    const [tabNumber, setTabNumber] = useState<number>(1);

    /**
     * 위도경도 찾기
     */
    const [fileName, setFileName] = useState<string>("");
    const [sendFile, setSendFile] = useState<File>();

    /**
     *  epsg 개발코드
     */
    const [epsgCode, setEpsgCode] = useState<string>("");

    const navNavgiate = (path: string) => () => {
        switch (path) {
            case "proj4":
                setTabNumber(1);
                break;
            case "epsg":
                setTabNumber(2);
                break;
            case "map":
                setTabNumber(3);
                break;
        }
        navigate(path);
    };
    /**
 * 
 * [Error] Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
    input
    div
    main
    @http://localhost:3000/static/js/bundle.js:50731:68
    div
    @http://localhost:3000/static/js/bundle.js:50731:68
    Layout@http://localhost:3000/static/js/bundle.js:361:81
    RenderedRoute@http://localhost:3000/static/js/bundle.js:44617:11
    Routes@http://localhost:3000/static/js/bundle.js:45065:12
    Suspense
    Router
    Fe@http://localhost:3000/static/js/bundle.js:50676:60
    App@http://localhost:3000/static/js/bundle.js:38:76
    Router@http://localhost:3000/static/js/bundle.js:45000:12
    BrowserRouter@http://localhost:3000/static/js/bundle.js:43218:11
	printWarning (bundle.js:12310)
	error (bundle.js:12284)
	checkControlledValueProps (bundle.js:13804)
	initWrapperState (bundle.js:13985)
	setInitialProperties (bundle.js:22133)
	finalizeInitialChildren (bundle.js:23195)
	completeWork (bundle.js:34272)
	completeUnitOfWork (bundle.js:38634)
	performUnitOfWork (bundle.js:38606)
	workLoopSync (bundle.js:38508)
	renderRootSync (bundle.js:38477)
	performConcurrentWorkOnRoot (bundle.js:37774:93)
	performConcurrentWorkOnRoot
	workLoop (bundle.js:49579)
	flushWork (bundle.js:49553)
	performWorkUntilDeadline (bundle.js:49837)
 */
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
        <SLayout>
            <SHeader>
                <SNav>
                    <SNavMenu isSelect={tabNumber} onClick={navNavgiate("proj4")}>
                        위도경도 찾기
                    </SNavMenu>
                    <SNavMenu isSelect={tabNumber} onClick={navNavgiate("epsg")}>
                        epsg 개발코드
                    </SNavMenu>
                    <SNavMenu isSelect={tabNumber} onClick={navNavgiate("map")}>
                        지도 검색
                    </SNavMenu>
                    <SNavTheme>
                        ☀️
                        <SThemeToggler isActive={theme === "dark"} onClick={() => setTheme((p: string) => (p === "light" ? "dark" : "light"))}>
                            <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                        </SThemeToggler>
                        🌙
                    </SNavTheme>
                </SNav>
            </SHeader>
            <SMain style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "0.5em" }}>
                {/* 위도 경도 찾기 */}
                {/* <div className="wrap" style={{ display: "flex", flexDirection: "row", marginTop: "1.5em", justifyContent: "space-between" }}>
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
                </div> */}
                {/* epsg 개발 코드 */}
                {/* <div className="wrap" style={{ display: "flex", flexDirection: "row", marginTop: "1.5em", justifyContent: "space-between" }}>
                    <div style={{ width: "75%" }}>
                        <input
                            type="text"
                            value={epsgCode}
                            style={{ width: "50%" }}
                            onChange={e => {
                                setEpsgCode(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <button onClick={sendFileHandler()}>epsg 코드 검색</button>
                    </div>
                </div>
                <div style={{ width: "100%", display: "flex", flexDirection: "column", padding: "0.5em 1.5em 1.5em 0" }}>
                    <table style={{ border: "1px solid green" }}>
                        <thead style={{ textAlign: "start", fontSize: "20px", lineHeight: "36px" }}>
                            <tr>
                                <th style={{ border: "1px solid red", textAlign: "start" }}>언어</th>
                                <th style={{ border: "1px solid red", textAlign: "start" }}>epsg 코드</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>JAVA</td>
                                <td>epsg.def.....</td>
                            </tr>
                            <tr>
                                <td>JAVA</td>
                                <td>epsg.def.....</td>
                            </tr>
                            <tr>
                                <td>JAVA</td>
                                <td>epsg.def.....</td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}

                {/* 지도 검색 */}
                <div className="wrap" style={{ display: "flex", flexDirection: "column", margin: "1em auto 0 auto", gap: "1em" }}>
                    <div style={{ padding: "1em" }}>
                        <input type="text" style={{ width: "50%", height: "3em", marginRight: "1em" }} />
                        <button>검색</button>
                    </div>
                    <div style={{ padding: "1em" }}>
                        <table>
                            <tbody>
                                <td>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>정제/전환 결과데이터</td>
                                            </tr>
                                            <tr>
                                                <td>입력</td>
                                                <td>경기도 부천시 오정구 성곡로 110-1</td>
                                            </tr>
                                            <tr>
                                                <td>구 주소</td>
                                                <td>경기도 부천시 오정구 성곡로 110-1</td>
                                            </tr>
                                            <tr>
                                                <td>도로명 주소</td>
                                                <td>경기도 부천시 오정구 성곡로 110-1</td>
                                            </tr>
                                            <tr>
                                                <td>우편번호</td>
                                                <td>경기도 부천시 오정구 성곡로 110-1</td>
                                            </tr>
                                            <tr>
                                                <td>좌표</td>
                                                <td>
                                                    X :126.1234567890, <br />Y :37.1234567890
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>

                                <td>
                                    <div style={{ width: "60vw", height: "60vh", border: "1px solid black" }}></div>
                                </td>
                            </tbody>
                        </table>
                    </div>
                </div>
            </SMain>
        </SLayout>
    );
};

export default Layout;
