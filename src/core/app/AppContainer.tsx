import React, {Suspense} from "react";
import {BrowserRouter} from "react-router-dom";

import LayoutComponent from "../../component/Layout";
import ErrorBoundary from "../../component/Exceptions/ErrorBoundary";
import Loading from "../../component/common/LoadingComp";

const AppContainer: React.FunctionComponent = (): React.ReactElement => {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Suspense fallback={<Loading/>}>
                    <LayoutComponent/>
                </Suspense>
            </BrowserRouter>
        </ErrorBoundary>
    );
};

export default AppContainer;
