import React, {forwardRef, useImperativeHandle} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {Form, FormInstance, Input} from 'antd';

import {setAuthenticate} from "store/app";
import useAxios, {UseService} from "hooks/useAxios";
import {ErrorMsg, SuccessMsg} from "component/common/ToastMessage";
import {ACCESS_TOKEN} from "core/utils/storage";

import {IFromLoginField, IFromLogin} from "../model/formLogin";
import {AuthenticateInputMock, AuthenticateOutputMock} from "../mock/authen";
import AuthService, {IServiceAuth} from "../service/authen-service";

interface IProps {
    children?: React.ReactNode
}

const FormLogin = forwardRef<FormInstance, IProps>((props, ref) => {
    const {service} = useAxios<IServiceAuth>((axiosInstance) => AuthService(axiosInstance))
    const [form] = Form.useForm()

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

    // @ts-ignore
    useImperativeHandle(ref, () => ({
        submit: () => {
            form.submit()
        },
    }), [form])

    return (
        <Form
            ref={ref}
            form={form}
            initialValues={AuthenticateInputMock}
            onFinish={onFinish}
            wrapperCol={{span: 24, offset: 1}}
            labelCol={{span: 4}}
        >
            <Form.Item
                label="Username"
                name={IFromLoginField.username}
                rules={[{required: true, message: 'Please input your username!'}]}
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
    );
});

export default FormLogin
