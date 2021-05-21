import {Result, Button} from 'antd';
import {useHistory} from "react-router-dom";

const ErrorUnAuthorized = () => {
    const {push} = useHistory()
    return (
        <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button type="primary" onClick={() => push('/')}>Back Home</Button>}
        />
    )
}

export default ErrorUnAuthorized
