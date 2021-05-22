import {AxiosInstance} from "axios";

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
                return Promise.resolve(AuthenticateOutputMock)
            }
            try {
                const {status, data} = await axiosInstance.post('/authentication', {...input, strategy: 'local'})
                if (status !== 201) {
                    return {} as AuthenticateOutput
                }
                return data
            } catch (err) {
                throw new Error(err)
            }
        },
    }
}

export default AuthService
