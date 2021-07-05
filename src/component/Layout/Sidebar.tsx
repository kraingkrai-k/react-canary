import React from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Menu, Image, Typography, Modal} from 'antd';
import {LogoutOutlined, ExclamationCircleOutlined} from "@ant-design/icons";

import {RootStoreType, setUnAuthorization} from "store/app";
import {ACCESS_TOKEN} from "core/utils/storage";

import {ErrorMsg, SuccessMsg} from "../common/ToastMessage";
import SideBarMenu from "./component/sidebarMenu";

const {confirm} = Modal

const SideBar: React.FunctionComponent = (): React.ReactElement => {
    const dispatch = useDispatch();
    const {authenticate} = useSelector(
        (state: RootStoreType) => state.app
    );
    const {push, location} = useHistory()

    const handlerSubmitLogOut = async () => {
        try {
            window.sessionStorage.removeItem(ACCESS_TOKEN)
            dispatch(setUnAuthorization())
            push("/")
            SuccessMsg(`Bye - ${authenticate.user.email}`)
        } catch (err) {
            ErrorMsg()
            console.warn('ERR - ', err)
        }
    };

    const onConfirmLogOut = () => {
        confirm({
            title: 'Do you want logout?',
            icon: <ExclamationCircleOutlined/>,
            onOk() {
                return handlerSubmitLogOut()
            },
        });
    }

    return (
        <Menu
            defaultSelectedKeys={[location.pathname]}
            defaultOpenKeys={[location.pathname]}
            triggerSubMenuAction="click"
            mode="inline"
            style={{height: '100%'}}
        >
            <Menu.Item disabled style={{textAlign: "center", margin: "12px 0 12px 0"}}>
                <Image
                    preview={false}
                    width={30}
                    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                />
            </Menu.Item>
            {SideBarMenu}
            {
                authenticate.accessToken &&
                <Menu.Item key="logout" icon={<LogoutOutlined/>} onClick={onConfirmLogOut}>
                    <Typography.Text>
                        Logout
                    </Typography.Text>
                </Menu.Item>
            }
        </Menu>
    );
};

export default SideBar;
