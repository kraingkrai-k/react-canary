import React from "react";
import {Row, Col} from 'antd';

import ModalLogin from "./component/ModalLogin";

const AuthenticatePages: React.FunctionComponent = (): React.ReactElement => {
    return (
        <Row>
            <Col span={24}>
                <ModalLogin/>
            </Col>
        </Row>
    );
};

export default AuthenticatePages;

