export interface IAddress {
    street: string
    suite: string
    city: string
    zipcode: string
}

export interface ICompany {
    name: string
    catchPhrase: string
    bs: string
}

export interface IUser {
    id: number
    name: string
    username: string
    email: string
    phone: string
    website: string
    address: IAddress
    company: ICompany
}
