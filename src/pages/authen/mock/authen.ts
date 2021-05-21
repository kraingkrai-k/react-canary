import {AuthenticateInput, AuthenticateOutput} from "../model/authen";

export const AuthenticateInputMock: AuthenticateInput = {
    email: "kraingkrai",
    password: "kkk1234"
}

export const AuthenticateOutputMock: AuthenticateOutput = {
    accessToken: "KKK",
    user: {
        id: 0,
        email: "Kraingkrai",
    }
}
