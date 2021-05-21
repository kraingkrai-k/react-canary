import {AuthenticateInput, AuthenticateOutput} from "../model/authen";

export const AuthenticateInputMock: AuthenticateInput = {
    username: "KK",
    password: "password"
}

export const AuthenticateOutputMock: AuthenticateOutput = {
    token: "KKK",
    data: {
        firstName: "Kraingkrai",
        lastName: "Keawobchoei"
    }
}
