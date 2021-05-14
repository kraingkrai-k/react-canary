import React from "react";
import {Provider} from "react-redux";

import AppContainer from "core/app/AppContainer";
import store from "store";

const App: React.FunctionComponent = (): React.ReactElement => {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    );
};

export default App;
