import React, {useEffect, useState} from "react";
import {Layout, Space, Switch as SwitchUI} from "antd";
import {BulbFilled, BulbOutlined} from "@ant-design/icons";

import {THEME} from "core/utils/storage";
import {toggleTheme} from "../../hooks/useTheme";

const Header: React.FunctionComponent = (): React.ReactElement => {
    const localTheme = window.localStorage.getItem(THEME)
    const [theme, setTheme] = useState<string>(localTheme || 'light')
    const isLight = theme === 'light'

    const handlerChangeTheme = () => {
        if (isLight) {
            setTheme('dark')
            toggleTheme('dark')
            return
        }
        setTheme('light')
        toggleTheme('light')
    }

    useEffect(() => {
        toggleTheme(theme)
        window.localStorage.setItem(THEME, theme)
    }, [theme])

    return (
        <Layout.Header style={{textAlign: 'right'}}>
            <Space>
                <SwitchUI
                    checked={isLight}
                    checkedChildren={<BulbOutlined/>}
                    unCheckedChildren={<BulbFilled/>}
                    onChange={handlerChangeTheme}
                />
            </Space>
        </Layout.Header>
    )
}

export default Header
