import React, {lazy} from "react";
import {Link, Route} from "react-router-dom";
import {Menu} from "antd";
import {
    HomeOutlined,
    MenuFoldOutlined,
    UserOutlined,
    ContainerOutlined,
    BarChartOutlined,
} from '@ant-design/icons';

import {IPropRouteComponent, ITypeNavLink, IRole} from "./type";
import PrivateRoute from "./private";

const AuthenticatePage = lazy(() => import('pages/authen/'));
const HomePage = lazy(() => import('pages/home/'));
const TodoPage = lazy(() => import('pages/todo/'));

const RouteComponents: IPropRouteComponent[] = [
    {
        label: "Home",
        path: "/",
        type: ITypeNavLink.NavLink,
        icon: <HomeOutlined/>,
        role: [IRole.Developer],
        Component: <HomePage/>
    },
    {
        label: "Home",
        path: "/privilege",
        type: ITypeNavLink.Hide,
        icon: <MenuFoldOutlined/>,
        role: [IRole.Developer],
        Component: <AuthenticatePage/>
    },
    {
        label: "Todo",
        path: "/todo",
        icon: <ContainerOutlined/>,
        role: [IRole.Tester, IRole.Developer],
        type: ITypeNavLink.NavLink,
        Component: <PrivateRoute><TodoPage/></PrivateRoute>
    },
    {
        label: "About",
        path: "/about",
        type: ITypeNavLink.SubMenuMore,
        icon: <UserOutlined/>,
        role: [IRole.Developer],
        Component: <></>
    },
    {
        label: "Jobs",
        path: "/jobs",
        type: ITypeNavLink.SubMenuMore,
        icon: <BarChartOutlined/>,
        role: [IRole.Developer],
        Component: <></>
    },
]

export const AppRoute = () => {

    let All = [] as IPropRouteComponent[]
    let _NavLink = [] as IPropRouteComponent[]
    let _SubMenuMore = [] as IPropRouteComponent[]

    RouteComponents.forEach(route => {
        if (route.type === ITypeNavLink.NavLink) {
            _NavLink.push(route)
        } else if (route.type === ITypeNavLink.SubMenuMore) {
            _SubMenuMore.push(route)
        }
        All.push(route)
    })

    return {
        All,
        NavLink: _NavLink,
        SubMenuMore: _SubMenuMore,
    }
}

const {All, NavLink, SubMenuMore} = AppRoute()

export const RenderAppRoute = () => All.map((route) =>
    <Route key={route.path} path={route.path} exact>
        {route.Component}
    </Route>
)

export const RenderMenuAndIcon = (routes: IPropRouteComponent[]) => routes.map((route) => (
        <Menu.Item key={route.path} icon={route.icon}>
            <Link to={route.path}>
                {route.label}
            </Link>
        </Menu.Item>
    )
)

export const RenderMenu = RenderMenuAndIcon(NavLink)
export const RenderSubMenuMore = RenderMenuAndIcon(SubMenuMore)
