import {Result, Button} from 'antd';
import {useHistory} from "react-router-dom";
import React from "react";

const ErrorGeneral: React.FunctionComponent = (): React.ReactElement => {
    const {push} = useHistory()
    return (
        <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong."
            extra={<Button type="primary" onClick={() => push('/')}>Back Home</Button>}
        />
    )
}

export default ErrorGeneral
