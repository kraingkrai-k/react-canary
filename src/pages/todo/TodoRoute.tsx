import React from "react";
import {Route, Switch} from "react-router-dom";

import {IPropSubRoute} from "../../core/app/route/type";

import TodoPage from '.'
import TodoSubRoute from './TodoSubRoute'

const TodoRoute: React.FunctionComponent<IPropSubRoute> = ({baseUrl}): React.ReactElement => {
    return (
        <>
            <Switch>
                <Route exact path={baseUrl}>
                    <TodoPage/>
                </Route>

                <Route path={`${baseUrl}/:id`}>
                    <TodoSubRoute/>
                </Route>
            </Switch>
        </>
    )
}

export default TodoRoute
