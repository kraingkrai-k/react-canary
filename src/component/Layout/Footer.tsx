import React from "react";
import {Row, Col, Typography} from 'antd';

const Footer: React.FunctionComponent = (): React.ReactElement => {
    return (
        <Row style={{textAlign: "center"}}>
            <Col span={24} flex={1}>
                <Typography.Text>Ant Design</Typography.Text>
            </Col>
        </Row>
    );
};

export default Footer;
