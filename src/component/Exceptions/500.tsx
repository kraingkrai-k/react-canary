import {Result, Button} from 'antd';
import {useHistory} from "react-router-dom";

const ErrorGeneral = () => {
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
