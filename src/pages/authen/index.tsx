import React from "react";
import {Row, Col, Card} from 'antd';

import FormLogin from "./component/FormLogin";

const AuthenticatePages: React.FunctionComponent = (): React.ReactElement => {
    return (
        <>
            <Row>
                <Col span={24}>
                    <Card>
                        <FormLogin/>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default AuthenticatePages;

