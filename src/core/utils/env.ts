const {REACT_APP_BASE_URL_REST, REACT_APP_IS_MOCKUP} = process.env;

export const BASE_URL_REST = REACT_APP_BASE_URL_REST;
export const IS_MOCKUP = REACT_APP_IS_MOCKUP === "true";
