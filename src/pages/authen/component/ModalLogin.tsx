import React, {useState} from 'react';
import {Form, Input, Modal} from 'antd';
import {useDispatch} from "react-redux";

import useAxios, {UseService} from "hooks/useAxios";
import {setAuthenticate} from "store/app";
import {ACCESS_TOKEN} from "core/utils/storage";

import {ErrorMsg, SuccessMsg} from "../../../component/common/ToastMessage";

import {IFromLogin, IFromLoginField} from "../model/formLogin";
import AuthService, {IServiceAuth} from "../service/authen-service";
import {AuthenticateInputMock} from "../mock/authen";

const ModalLogin: React.FunctionComponent = (): React.ReactElement => {
    const {service} = useAxios<IServiceAuth>((axiosInstance) => AuthService(axiosInstance))
    const [form] = Form.useForm()

    const dispatch = useDispatch();

    const {signInWithUserNameAndPassword} = service()

    const [isModalVisible, setIsModalVisible] = useState<boolean>(true);
    const [isConfirmLoading, setIsConfirmLoading] = useState<boolean>(false);

    const handlerModal = (isOk: boolean): void => {
        if (isOk) {
            setIsConfirmLoading(true)
            form.submit()
            return
        }
        setIsModalVisible(false);
    };

    const onFinish = async (values: IFromLogin) => {
        try {
            const {result, err} = await UseService(() => signInWithUserNameAndPassword(values))
            if (err) {
                ErrorMsg()
                return
            }
            window.sessionStorage.setItem(ACCESS_TOKEN, result.accessToken)
            dispatch(setAuthenticate(result))
            SuccessMsg('Login Success.')
        } catch (err) {
            ErrorMsg()
        } finally {
            setIsModalVisible(false);
        }
    };

    return (
        <Modal
            title="Login"
            visible={isModalVisible}
            onOk={() => handlerModal(true)}
            onCancel={() => handlerModal(false)}
            maskClosable={false}
            confirmLoading={isConfirmLoading}
        >
            <Form
                form={form}
                initialValues={AuthenticateInputMock}
                onFinish={onFinish}
                wrapperCol={{span: 24, offset: 1}}
                labelCol={{span: 4}}
            >
                <Form.Item
                    label="Email"
                    name={IFromLoginField.email}
                    rules={[{required: true, message: 'Please input your email!'}]}
                >
                    <Input maxLength={12}/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name={IFromLoginField.password}
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password maxLength={12}/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalLogin
