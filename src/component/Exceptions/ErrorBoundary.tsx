import React from "react";

import ErrorGeneral from './500'

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
        console.log('errorInfo', errorInfo)
    }

    render() {
        // @ts-ignore
        if (this.state.hasError) {
            return <ErrorGeneral/>
        }

        return this.props.children;
    }
}

export default ErrorBoundary
