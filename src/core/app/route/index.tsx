import React, {lazy} from "react";
import {Route} from "react-router-dom";
import {
    HomeOutlined,
    MenuFoldOutlined,
    UserOutlined,
    ContainerOutlined,
    BarChartOutlined,
    AliwangwangOutlined
} from '@ant-design/icons';

import {IPropRouteComponent, IRole} from "./type";
// import PrivateRoute from "./private";
import ErrorNotFound from "../../../component/Exceptions/404";

const AuthenticatePage = lazy(() => import('pages/authen/'));

const HomeRote = lazy(() => import('pages/home/HomeRoute'));
const TodoRoute = lazy(() => import('pages/todo/TodoRoute'));


export const AppRoute: IPropRouteComponent[] = [
    {
        label: "Home",
        path: "/",
        icon: <HomeOutlined/>,
        role: [IRole.Developer],
        showInMenu: true,
        Component: <HomeRote/>,
    },
    {
        label: "",
        path: "/privilege",
        icon: <MenuFoldOutlined/>,
        role: [IRole.Developer],
        showInMenu: false,
        Component: <AuthenticatePage/>
    },
    {
        label: "Todo",
        path: "",
        icon: <ContainerOutlined/>,
        role: [IRole.Tester, IRole.Developer],
        showInMenu: true,
        Component: <></>,
        subMenu: [
            {
                label: "List",
                path: "/list",
                icon: <AliwangwangOutlined/>,
                role: [IRole.Developer],
                showInMenu: true,
                // Component: <PrivateRoute><TodoRoute/></PrivateRoute>
                Component: <TodoRoute baseUrl="/list"/>
            },
        ],
    },
    {
        label: "About",
        path: "/about",
        icon: <UserOutlined/>,
        role: [IRole.Developer],
        showInMenu: true,
        Component: <></>
    },
    {
        label: "Jobs",
        path: "/jobs",
        icon: <BarChartOutlined/>,
        role: [IRole.Developer],
        showInMenu: true,
        Component: <></>
    },
    {
        label: "",
        icon: <></>,
        path: "*",
        role: [IRole.Developer],
        showInMenu: false,
        Component: <ErrorNotFound/>
    },
]

export const RenderAppRoute = AppRoute.map((route) => {
        if (route.subMenu) {
            return route.subMenu.map(sub => (
                <Route key={sub.path} path={sub.path}>
                    {sub.Component}
                </Route>
            ))
        }
        return (
            <Route key={route.path} path={route.path} exact={route.path === '/'}>
                {route.Component}
            </Route>
        )
    }
)
