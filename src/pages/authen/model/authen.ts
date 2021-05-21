export interface AuthenticateInput {
    username: string
    password: string
}

export interface AuthenticateOutput {
    token: string
    data: {
        firstName: string,
        lastName: string,
    }
}
