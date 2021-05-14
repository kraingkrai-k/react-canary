import axios, {AxiosRequestConfig} from "axios";
import {BASE_URL_REST} from "core/utils/env";

const INIT_OPTION: AxiosRequestConfig = {
    baseURL: BASE_URL_REST || "",
}

const Axios = (options: AxiosRequestConfig) => {
    let http = axios.create(options)

    const handlerSuccessResponse = (response: any) => response;
    const handlerErrorResponse = (errors: any) => {
        switch (errors.status) {
            case "400":
                break;
            default:
                break;
        }
    };

    http?.interceptors.response.use(handlerSuccessResponse, handlerErrorResponse);

    const addHeader = (headers = {}) => {
        Object.assign(http.defaults.headers, headers);
    };
    const removeHeader = (headers = []) => {
        headers.forEach((header) => delete http.defaults[header]);
    };

    return {
        http: {
            addHeader,
            removeHeader
        },
        httpClient: http
    };
};

export const {http, httpClient} = Axios(INIT_OPTION)
