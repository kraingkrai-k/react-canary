import React from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {Form, Input, Button, message} from 'antd';

import {setAuthenticate} from "store/app";

import {IFromLoginField, IFromLogin} from "../model/formLogin";
import {AuthenticateInputMock} from "../mock/authen";
import AuthService from "../service/authen";

const {signInWithUserNameAndPassword} = AuthService()

const FormLogin: React.FunctionComponent = (): React.ReactElement => {
    const dispatch = useDispatch();
    const {push} = useHistory()

    const onFinish = async (values: IFromLogin) => {
        try {
            const response = await signInWithUserNameAndPassword(values)
            if (!response) {
                message.error(`Something went wrong.`)
                return
            }
            dispatch(setAuthenticate(response))
            push("/")
            message.success(`Login Success.`)
        } catch (err) {
            console.error('ERR - ', err)
            message.error(`Login Failed.`)
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
