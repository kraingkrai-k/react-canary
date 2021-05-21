import React from "react";
import {Row, Col, Breadcrumb} from 'antd';
import {useSelector} from "react-redux";
import {RootStoreType} from "../../store/app";

const MyBreadcrumb: React.FunctionComponent = (): React.ReactElement => {
    const {authenticate} = useSelector(
        (state: RootStoreType) => state.app
    );

    return (
        <Row>
            <Col span={24}>
                <Breadcrumb style={{margin: '24px'}}>
                    <Breadcrumb.Item>My</Breadcrumb.Item>
                    <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
                    {authenticate.accessToken && <Breadcrumb.Item>Hi - {authenticate.user.email}</Breadcrumb.Item>}
                </Breadcrumb>
            </Col>
        </Row>
    );
};

export default MyBreadcrumb;
