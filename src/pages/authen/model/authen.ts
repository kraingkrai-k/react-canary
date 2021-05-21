export interface AuthenticateInput {
    email: string
    password: string
}

export interface AuthenticateOutput {
    accessToken: string
    user: {
        id: number
        email: string,
    }
}
