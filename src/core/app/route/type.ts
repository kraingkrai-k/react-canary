import React from "react";

export interface IPropRouteComponent {
    label: string
    path: string
    icon: React.ReactElement
    showInMenu: boolean
    subMenu?: IPropRouteComponent[]
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

export interface IPropSubRoute {
    baseUrl: string
}
