import React from "react";
import {Menu} from 'antd'
import {Link} from "react-router-dom";

import {IPropRouteComponent} from "../../../core/app/route/type";

interface Interface {
    baseUrl: string
    routes: IPropRouteComponent[]
}

const TopBarMenu: React.FunctionComponent<Interface> = ({baseUrl, routes}): React.ReactElement => {
    return (
        <Menu
            defaultActiveFirst
            mode="horizontal"
            style={{backgroundColor: 'transparent'}}
        >
            {routes
                .map((route) => {
                        return (
                            <Menu.Item key={route.path}>
                                <Link to={`${baseUrl}${route.path}`}>
                                    {route.label}
                                </Link>
                            </Menu.Item>
                        )
                    }
                )
            }
        </Menu>
    )
}

export default TopBarMenu
