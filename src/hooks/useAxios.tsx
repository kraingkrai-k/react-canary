import {useCallback} from "react";
import axios, {AxiosError, AxiosInstance} from "axios";

import {BASE_URL_REST} from "core/utils/env";

export default function useAxios<S>(serviceFn: (axiosInstance: AxiosInstance) => S) {
    const mockToken = 'KKK'

    const axiosInstance = axios.create({
        baseURL: BASE_URL_REST,
        headers: {
            Authorization: `Bearer ${mockToken}`
        }
    }) as AxiosInstance

    return {
        service: useCallback(() => serviceFn(axiosInstance), [axiosInstance, serviceFn]) as () => S,
    }
}

export function UseService<S>(service: () => Promise<S>) {
    return service()
        .then((result) => ({err: null, result}))
        .catch((err: AxiosError) => ({err, result: {} as S}))
}

