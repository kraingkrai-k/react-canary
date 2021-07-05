import React, {Suspense, useEffect, useState} from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import {useDispatch} from 'react-redux'
import {Layout} from "antd";

import {setAuthenticate} from "store/app";
import {AuthenticateOutputMock} from "pages/authen/mock/authen";

import {ACCESS_TOKEN} from "../utils/storage";

import ErrorBoundary from "../../component/Exceptions/ErrorBoundary";
import Loading from "../../component/common/LoadingComp";
import {ErrorMsg} from "../../component/common/ToastMessage";
import Sidebar from "../../component/Layout/Sidebar";
import Header from "../../component/Layout/Header";
import FooterComponent from "../../component/Layout/Footer";

import {RenderAppRoute} from "./route";

const {Sider, Content, Footer} = Layout;

const AppContainer: React.FunctionComponent = (): React.ReactElement => {
    const dispatch = useDispatch()
    const [ready, setReady] = useState<boolean>(false)

    const initialApp = async () => {
        try {
            const token = window.sessionStorage.getItem(ACCESS_TOKEN)
            if (!token) {
                return
            }
            dispatch(setAuthenticate(AuthenticateOutputMock))
        } catch (err) {
            ErrorMsg('oops !')
            console.warn(err)
        }
        setReady(false)
    }

    useEffect(() => {
        initialApp().then()
        // eslint-disable-next-line
    }, [])

    if (ready) {
        return <Loading/>
    }
    return (
        <ErrorBoundary>
            <BrowserRouter
                // basename={process.env.PUBLIC_URL}
            >
                <Suspense fallback={<Loading/>}>
                    <Layout style={{minHeight: "100vh"}}>
                        <Sider collapsible>
                            <Sidebar/>
                        </Sider>
                        <Content>
                            <Header/>
                            <div style={{padding: "24px", minHeight: '85vh'}}>
                                <Switch>
                                    {RenderAppRoute}
                                </Switch>
                            </div>
                            <Footer><FooterComponent/></Footer>
                        </Content>
                    </Layout>
                </Suspense>
            </BrowserRouter>
        </ErrorBoundary>
    );
};

export default AppContainer;
