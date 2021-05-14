import React from "react";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Menu, Image, Typography, message} from 'antd';
import {MoreOutlined, LogoutOutlined} from "@ant-design/icons";

import {AppRoute} from "core/app/route";
import {RootStoreType, setUnAuthorization} from "store/app";

const {SubMenu} = Menu;

const _renderNavLink = () => {
    return (
        AppRoute().NavLink.map((route) => (
                <Menu.Item key={route.path} icon={route.icon}>
                    <Link to={route.path}>
                        {route.label}
                    </Link>
                </Menu.Item>
            )
        )
    )
};

const _renderDropDown = () => {
    return (
        AppRoute().Dropdown.map((route) => (
                <Menu.Item key={route.path} icon={route.icon}>
                    <Link to={route.path}>
                        {route.label}
                    </Link>
                </Menu.Item>
            )
        )
    );
};

const NavLink: React.FunctionComponent = (): React.ReactElement => {
    const dispatch = useDispatch();
    const {authenticate} = useSelector(
        (state: RootStoreType) => state.app
    );
    const {push, location} = useHistory()

    const handleSubmitLogOut = async () => {
        try {
            dispatch(setUnAuthorization())
            push("/")
            message.success(`Bye - ${authenticate.data.firstName}`)
        } catch (err) {
            console.error('ERR - ', err)
        }
    };

    return (
        <Menu
            defaultSelectedKeys={[location.pathname]}
            defaultOpenKeys={[location.pathname]}
            triggerSubMenuAction="click"
            mode="inline"
            style={{height : '100%'}}
        >
            <Menu.Item style={{textAlign: "center", margin: "12px 0 12px 0"}} onClick={() => push("/")}>
                <Image
                    preview={false}
                    width={30}
                    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                />
            </Menu.Item>
            {_renderNavLink()}

            <SubMenu key="sub1" icon={<MoreOutlined/>} title="More">
                {_renderDropDown()}
            </SubMenu>

            {
                authenticate.token &&
                <Menu.Item key="logout" icon={<LogoutOutlined/>} onClick={handleSubmitLogOut}>
                    <Typography.Text style={{color: "#FFFFFF"}}>
                        Logout
                    </Typography.Text>
                </Menu.Item>
            }

        </Menu>
    );
};

export default NavLink;
