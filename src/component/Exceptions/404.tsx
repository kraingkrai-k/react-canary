import {Result, Button} from 'antd';
import {useHistory} from "react-router-dom";
import React from "react";

const ErrorNotFound: React.FunctionComponent = (): React.ReactElement => {
    const {push} = useHistory()
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={() => push('/')}>Back Home</Button>}
        />
    )
}

export default ErrorNotFound
