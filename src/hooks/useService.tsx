import {useCallback, useEffect, useState} from "react";
import {AxiosError} from "axios";

function UseService<S>(service: () => Promise<S>) {
    return service()
        .then((result) => ({err: null, result}))
        .catch((err: AxiosError) => ({err, result: null}))
}

function UseHookService<S>(service: any) {
    const [state, setState] = useState<{ loading: boolean, result: S, err: AxiosError | null }>({
        loading: true,
        result: {} as S,
        err: null
    })

    useEffect(() => {
        fetchService()
        // eslint-disable-next-line
    }, [service])

    const fetchService = useCallback(() => {
        service()
            .then((result: S) => setState((prevState => ({...prevState, result, err: null, loading: false}))))
            .catch((err: AxiosError) => setState((prevState => ({...prevState, err, loading: false}))))
        // eslint-disable-next-line
    }, [state.loading, service])

    return state
}

export {
    UseHookService,
    UseService
}

