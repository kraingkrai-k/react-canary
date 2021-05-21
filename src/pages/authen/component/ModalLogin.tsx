import React, {useState, createRef} from 'react';
import {FormInstance, Modal} from 'antd';

import FormLogin from "./FormLogin";

const ModalLogin: React.FunctionComponent = (): React.ReactElement => {
    const ref = createRef<FormInstance>()
    const [isModalVisible, setIsModalVisible] = useState<boolean>(true);

    const handleOk = () => {
        ref.current?.submit()
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Modal
            title="Login"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            confirmLoading={!isModalVisible}
        >
            <FormLogin ref={ref}/>
        </Modal>
    );
};

export default ModalLogin
