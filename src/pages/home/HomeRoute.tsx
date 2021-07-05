import React from "react";
import {Route, useRouteMatch} from "react-router-dom";

import Home from '.'

const HomeRoute = () => {
    const {path} = useRouteMatch()

    return (
        <>
            <Route path={path} exact>
                <Home/>
            </Route>
        </>
    )
}

export default HomeRoute
