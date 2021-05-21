import {Result} from 'antd';
import ModalLogin from "../../pages/authen/component/ModalLogin";
import React from "react";

const ErrorUnAuthorized: React.FunctionComponent = (): React.ReactElement => {
    return (
        <>
            <ModalLogin/>
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
            />
        </>
    )
}

export default ErrorUnAuthorized
