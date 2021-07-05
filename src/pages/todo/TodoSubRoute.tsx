import React from "react";
import {useRouteMatch} from "react-router-dom";

import {IPropRouteComponent, IRole} from "../../core/app/route/type";
import TopBarMenu from "../../component/Layout/component/topbarMenu";
import RenderSubRoute from "../../component/Layout/component/renderSubRoute";

import Counters from "../home/component/Counters";
import UserList from "./component/UserList";

const routes: IPropRouteComponent[] = [
    {
        label: "Counter",
        path: "/ct",
        icon: <></>,
        role: [IRole.Developer],
        showInMenu: true,
        Component: <Counters/>
    },
    {
        label: "List",
        path: "/ul",
        icon: <></>,
        role: [IRole.Developer],
        showInMenu: true,
        Component: <UserList/>
    },
]

const TodoSubRoute: React.FunctionComponent = (): React.ReactElement => {
    const {url} = useRouteMatch()
    return (
        <>
            <TopBarMenu baseUrl={url} routes={routes}/>
            <RenderSubRoute routes={routes}/>
        </>
    )
}

export default TodoSubRoute
