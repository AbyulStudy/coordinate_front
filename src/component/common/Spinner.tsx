import React from "react";
import { LoadingSection, SpinnerDiv } from "src/style/spinner";

function Spinner() {
    return (
        <>
            <LoadingSection>
                <SpinnerDiv></SpinnerDiv>
            </LoadingSection>
        </>
    );
}

export default React.memo(Spinner);
