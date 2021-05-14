import React from "react";
import {BrowserRouter} from "react-router-dom";
import LayoutComponent from "../../component/Layout";

const AppContainer: React.FunctionComponent = (): React.ReactElement => {
    return (
        <BrowserRouter>
            <LayoutComponent/>
        </BrowserRouter>
    );
};

export default AppContainer;
