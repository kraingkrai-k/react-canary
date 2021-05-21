import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "..";
import {AuthenticateOutput} from "pages/authen/model/authen";

export type RootStoreType = RootState;

export interface IPropsState {
    isLoading?: boolean;
    authenticate: AuthenticateOutput
}

const initialState: IPropsState = {
    isLoading: false,
    authenticate: {
        accessToken: "",
        user: {
            id: 0,
            email: "",
        }
    }
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLoading: (state, {payload}: PayloadAction<boolean>) => {
            if (state.isLoading === payload) return;
            state.isLoading = payload;
        },
        setAuthenticate: (state, {payload}: PayloadAction<AuthenticateOutput>) => {
            state.authenticate = payload
        },
        setUnAuthorization: (state, {payload}: PayloadAction) => {
            state.authenticate = {} as AuthenticateOutput
        }
    },
    extraReducers: {},
});

export const {setLoading, setAuthenticate, setUnAuthorization} = appSlice.actions;
export default appSlice.reducer;
