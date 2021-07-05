import React from "react";
import {Menu} from 'antd'
import {Link} from "react-router-dom";

import {AppRoute} from "../../../core/app/route";

const SideBarMenu = AppRoute
    .filter(route => route.showInMenu)
    .map((route) => {
            if (route.subMenu) {
                return (
                    <Menu.SubMenu key={route.label} icon={route.icon} title={route.label}>
                        {route.subMenu
                            .filter(sub => sub.showInMenu)
                            .map(sub => (
                            <Menu.Item key={sub.path} icon={sub.icon}>
                                <Link to={sub.path}>
                                    {sub.label}
                                </Link>
                            </Menu.Item>
                        ))}
                    </Menu.SubMenu>
                )
            }
            return (
                <Menu.Item key={route.path} icon={route.icon}>
                    <Link to={route.path}>
                        {route.label}
                    </Link>
                </Menu.Item>
            )
        }
    )

export default SideBarMenu
