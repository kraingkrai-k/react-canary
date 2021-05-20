import React from "react";
import {Spin} from "antd";

const LoadingComp: React.FunctionComponent = (): React.ReactElement => {
    return (
        <div style={{
            width: '100%',
            textAlign: 'center',
            marginTop: '15%'
        }}>
            <Spin size="large"/>
        </div>
    )
}

export default LoadingComp
