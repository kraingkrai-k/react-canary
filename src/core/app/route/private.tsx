import React from "react";
import {useSelector} from "react-redux";
import {Route} from "react-router-dom";

import {RootStoreType} from "store/app";
import {IPropPrivateRoute} from "./type";
import UnauthorizedPage from "../../../component/Exceptions/403";

const PrivateRoute = ({children, ...props}: IPropPrivateRoute): React.ReactElement => {
    const {authenticate} = useSelector(
        (state: RootStoreType) => state.app
    );

    return (
        <Route
            {...props}
            render={({location}) =>
                authenticate.accessToken ? (
                    children
                ) : (
                    <UnauthorizedPage/>
                )
            }
        />
    )
}

export default PrivateRoute
