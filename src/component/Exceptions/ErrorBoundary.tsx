import React from "react";
import {ErrorMsg} from "../common/ToastMessage";

class ErrorBoundary extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error: Error) {
        console.log('getDerivedStateFromError:', error)
        // Update state so the next render will show the fallback UI.
        return {hasError: true};
    }

    componentDidCatch(error: Error, errorInfo: any) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
        console.log('error', error)
        ErrorMsg('componentDidCatch').then()
        console.log('errorInfo', errorInfo)
    }

    render() {
        // @ts-ignore
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary
