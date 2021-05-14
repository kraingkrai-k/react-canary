import {http, httpClient} from "core/utils/axios";
import {IS_MOCKUP} from "core/utils/env";

import {AuthenticateOutput, AuthenticateInput} from "../model/authen";
import {AuthenticateOutputMock} from "../mock/authen";

interface IServiceAuth {
    signInWithUserNameAndPassword: (input: AuthenticateInput) => Promise<AuthenticateOutput>
}

const AuthService = (): IServiceAuth => {
    return {
        signInWithUserNameAndPassword: async (input: AuthenticateInput): Promise<AuthenticateOutput> => {
            if (IS_MOCKUP) {
                http.addHeader({Authorization: `Bearer ${AuthenticateOutputMock.token}`})
                return AuthenticateOutputMock
            }
            const {status, data} = await httpClient.post('login', input)
            if (status !== 200) {
                return {} as AuthenticateOutput
            }
            http.addHeader({Authorization: `Bearer ${data.token}`})
            return data
        },
    }
}

export default AuthService