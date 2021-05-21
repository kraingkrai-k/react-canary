import {AxiosInstance} from "axios"

import {IS_MOCKUP} from "core/utils/env";
import {UserListMock} from "../mock/userList";
import {IUser} from "../model/todo";

export interface ITodoService {
    getUserList: () => Promise<IUser[]>
}

const Services = (axiosInstance: AxiosInstance): ITodoService => {
    return {
        getUserList: async (): Promise<IUser[]> => {
            if (IS_MOCKUP) {
                return Promise.resolve(UserListMock)
            }
            return Promise.resolve(UserListMock)
            // try {
            //     const {status, data} = await axiosInstance.get(`/users`);
            //     if (status !== 200) {
            //         return []
            //     }
            //     return data
            // } catch (err) {
            //     return err
            // }
        }
    }
}

export default Services
