import React from "react";
import {Spin} from "antd";
import {SyncOutlined,} from '@ant-design/icons';

const LoadingComp: React.FunctionComponent = (): React.ReactElement => (
    <div style={{
        width: '100%',
        textAlign: 'center',
        marginTop: '25%',
    }}>
        <Spin size="large" indicator={<SyncOutlined spin/>}/>
    </div>
)

export default LoadingComp
