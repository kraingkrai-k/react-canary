import React from "react";
import {IPropRouteComponent} from "../../../core/app/route/type";
import {Route, Switch, useRouteMatch} from "react-router-dom";

interface Interface {
    routes: IPropRouteComponent[]
}

const RenderSubRoute: React.FunctionComponent<Interface> = ({routes}): React.ReactElement => {
    const {url} = useRouteMatch()
    return (
        <Switch>
            {
                routes.map(route => {
                        return (
                            <Route key={`${url}${route.path}`} path={`${url}${route.path}`}>
                                {route.Component}
                            </Route>
                        )
                    }
                )
            }
        </Switch>
    )
}

export default RenderSubRoute
