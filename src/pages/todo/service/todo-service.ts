import {AxiosInstance} from "axios"

import {IS_MOCKUP} from "core/utils/env";
import {UserListMock} from "../mock/userList";
import {IGetTodoFilter, ITodo, IUser} from "../model/todo";

export interface ITodoService {
    getTodoByID: (filter: IGetTodoFilter) => Promise<ITodo>
    getUserList: () => Promise<IUser[]>
}

const Services = (axiosInstance: AxiosInstance): ITodoService => {
    return {
        getUserList: async (): Promise<IUser[]> => {
            if (IS_MOCKUP) {
                return Promise.resolve(UserListMock)
            }
            try {
                const {status, data} = await axiosInstance.get(`/users`);
                if (status !== 200) {
                    return []
                }
                return data
            } catch (err) {
                return err
            }
        },
        getTodoByID: async (filter: IGetTodoFilter): Promise<ITodo> => {
            if (IS_MOCKUP) {
                return {} as ITodo
            }
            try {
                const {status, data} = await axiosInstance.get(`/todos/${filter.id}`);
                if (status !== 200) {
                    return {} as ITodo
                }
                return data
            } catch (err) {
                throw new Error(err)
            }
        }
    }
}

export default Services
