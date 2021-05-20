import React, {Suspense, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {useDispatch} from 'react-redux'

import {setAuthenticate} from "store/app";
import {AuthenticateOutputMock} from "pages/authen/mock/authen";

import {ACCESS_TOKEN} from "../utils/storage";

import LayoutComponent from "../../component/Layout";
import ErrorBoundary from "../../component/Exceptions/ErrorBoundary";
import Loading from "../../component/common/LoadingComp";
import {ErrorMsg} from "../../component/common/ToastMessage";


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
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Suspense fallback={<Loading/>}>
                    <LayoutComponent/>
                </Suspense>
            </BrowserRouter>
        </ErrorBoundary>
    );
};

export default AppContainer;
