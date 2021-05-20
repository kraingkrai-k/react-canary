import {message} from "antd";

export const SuccessMsg = (msg: string) => message.success(msg)
export const InfoMsg = (msg: string) => message.info(msg)
export const WarningMsg = (msg: string) => message.warn(msg)
export const ErrorMsg = (msg?: string) => message.error(msg || 'Something went wrong.')
