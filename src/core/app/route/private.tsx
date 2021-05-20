import React from "react";
import {useSelector} from "react-redux";
import {Route, Redirect} from "react-router-dom";

import {RootStoreType} from "store/app";
import {IPropPrivateRoute} from "./type";

const PrivateRoute = ({children, ...props}: IPropPrivateRoute): React.ReactElement => {
    const {authenticate} = useSelector(
        (state: RootStoreType) => state.app
    );
    return (
        <Route
            {...props}
            render={({location}) =>
                authenticate.token ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/privilege",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute
