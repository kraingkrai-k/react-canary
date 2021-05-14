import React from "react";

export enum ITypeNavLink {
    NavLink = "navLink",
    Dropdown = "dropdown",
    Hide = "hide"
}

export interface IPropRouteComponent {
    label: string
    path: string
    type: ITypeNavLink
    icon: React.ReactElement
    Component: React.ReactElement
}

export interface IPropPrivateRoute {
    children: React.ReactElement
}
