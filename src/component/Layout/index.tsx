import React from "react";
import {Switch} from "react-router-dom";
import {Layout} from "antd";

import {RenderAppRoute} from "core/app/route";

import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import Sidebar from "./Sidebar";
import FooterComponent from "./Footer";

const {Sider, Content, Footer} = Layout;

const LayoutComponent: React.FunctionComponent = (): React.ReactElement => {
    return (
        <Layout style={{minHeight: "100vh"}}>
            <Sider collapsible>
                <Sidebar/>
            </Sider>

            <Layout>
                <Header/>
                <Breadcrumb/>
                <Content style={{margin: "0 16px"}}>
                    <div style={{padding: "24px", minHeight: 360}}>
                        <Switch>
                            {RenderAppRoute()}
                        </Switch>
                    </div>
                </Content>

                <Footer><FooterComponent/></Footer>
            </Layout>

        </Layout>
    )
}

export default LayoutComponent
