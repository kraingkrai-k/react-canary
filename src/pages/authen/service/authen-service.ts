import {AxiosInstance} from "axios";

import {http} from "core/utils/axios";
import {IS_MOCKUP} from "core/utils/env";

import {AuthenticateOutput, AuthenticateInput} from "../model/authen";
import {AuthenticateOutputMock} from "../mock/authen";

export interface IServiceAuth {
    signInWithUserNameAndPassword: (input: AuthenticateInput) => Promise<AuthenticateOutput>
}

const AuthService = (axiosInstance: AxiosInstance): IServiceAuth => {
    return {
        signInWithUserNameAndPassword: async (input: AuthenticateInput): Promise<AuthenticateOutput> => {
            if (IS_MOCKUP) {
                http.addHeader({Authorization: `Bearer ${AuthenticateOutputMock.token}`})
                return AuthenticateOutputMock
            }
            // return Promise.resolve(AuthenticateOutputMock)
            try {
                // const {status, data} = await axiosInstance.post('login', input)
                // if (status !== 200) {
                //     return {} as AuthenticateOutput
                // }
                return AuthenticateOutputMock
            } catch (err) {
                return err
            }
        },
    }
}

export default AuthService
