import React from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {Form, Input, Button} from 'antd';

import {setAuthenticate} from "store/app";
import useAxios, {UseService} from "hooks/useAxios";
import {ErrorMsg, SuccessMsg} from "component/common/ToastMessage";
import {ACCESS_TOKEN} from "core/utils/storage";

import {IFromLoginField, IFromLogin} from "../model/formLogin";
import {AuthenticateInputMock, AuthenticateOutputMock} from "../mock/authen";
import AuthService, {IServiceAuth} from "../service/authen-service";

const FormLogin: React.FunctionComponent = (): React.ReactElement => {
    const {service} = useAxios<IServiceAuth>((axiosInstance) => AuthService(axiosInstance))

    const dispatch = useDispatch();
    const {push} = useHistory()

    const {signInWithUserNameAndPassword} = service()

    const onFinish = async (values: IFromLogin) => {
        try {
            const {result, err} = await UseService(() => signInWithUserNameAndPassword(values))
            if (err) {
                ErrorMsg()
                return
            }
            window.sessionStorage.setItem(ACCESS_TOKEN, AuthenticateOutputMock.token)
            dispatch(setAuthenticate(result))
            push("/")
            SuccessMsg('Login Success.')
        } catch (err) {
            ErrorMsg()
        }
    };

    return (
        <Form
            initialValues={AuthenticateInputMock}
            onFinish={onFinish}
        >
            <Form.Item
                label="Username"
                name={IFromLoginField.userName}
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Password"
                name={IFromLoginField.passWord}
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item style={{textAlign: "center"}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FormLogin
