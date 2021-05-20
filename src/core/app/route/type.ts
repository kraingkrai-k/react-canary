export enum ITypeNavLink {
    NavLink = "navLink",
    SubMenuMore = "subMenuMore",
    Hide = "hide"
}

export interface IPropRouteComponent {
    label: string
    path: string
    type: ITypeNavLink
    icon: React.ReactElement
    role: string[]
    Component: React.ReactElement
}

export interface IPropPrivateRoute {
    children: React.ReactElement
}

export enum IRole {
    Developer = 'developer',
    Tester = 'tester'
}
