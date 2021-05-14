import React from "react";
import {render} from '@testing-library/react'
import {Provider} from "react-redux";

import store from "../../store";
import axios from "axios";

const WrapperProvider: React.FunctionComponent = ({children}): React.ReactElement => {
    window.matchMedia = window.matchMedia || function () {
        return {
            matches: false,
            addListener: function () {
            },
            removeListener: function () {
            }
        };
    };
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock('axios');

const CustomerRender = (ui: React.ReactElement) => render(ui, {wrapper: WrapperProvider})

export * from '@testing-library/react'
export {
    CustomerRender as render,
    mockedAxios
}
