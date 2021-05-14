import React from "react";
import {
    HomeOutlined,
    MenuFoldOutlined,
    UserOutlined,
    ContainerOutlined,
    BarChartOutlined,
} from '@ant-design/icons';
import {AuthenticatePage, HomePage, TodoPage} from "pages";

import {IPropRouteComponent, ITypeNavLink} from "./type";
import PrivateRoute from "./private";

export const AppRoute = () => {
    let All = [] as IPropRouteComponent[]
    let _NavLink = [] as IPropRouteComponent[]
    let _Dropdown = [] as IPropRouteComponent[]

    RouteComponents.forEach(route => {
        if (route.type === ITypeNavLink.NavLink) {
            _NavLink.push(route)
        } else if (route.type === ITypeNavLink.Dropdown) {
            _Dropdown.push(route)
        }
        All.push(route)
    })
    return {
        All,
        NavLink: _NavLink,
        Dropdown: _Dropdown,
    }
}

export const RouteComponents: IPropRouteComponent[] = [
    {
        label: "Home",
        path: "/", type: ITypeNavLink.NavLink,
        icon: <HomeOutlined/>,
        Component: <HomePage/>
    },
    {
        label: "Home",
        path: "/privilege", type: ITypeNavLink.Hide,
        icon: <MenuFoldOutlined/>,
        Component: <AuthenticatePage/>
    },
    {
        label: "Todo",
        path: "/todo",
        icon: <ContainerOutlined/>,
        type: ITypeNavLink.NavLink,
        Component: <PrivateRoute><TodoPage/></PrivateRoute>
    },
    {
        label: "About", path: "/about",
        type: ITypeNavLink.Dropdown,
        icon: <UserOutlined/>,
        Component: <></>
    },
    {
        label: "Jobs",
        path: "/jobs",
        type: ITypeNavLink.Dropdown,
        icon: <BarChartOutlined/>,
        Component: <></>
    },
]
