import {httpClient} from "core/utils/axios";

import {IS_MOCKUP} from "core/utils/env";
import {UserListMock} from "../mock/userList";
import {IGetTodoFilter, ITodo, IUser} from "../model/todo";

interface ITodoService {
    getTodoByID: (filter: IGetTodoFilter) => Promise<ITodo>
    getUserList: () => Promise<IUser[]>
}

const Services = (): ITodoService => {
    return {
        getUserList: async (): Promise<IUser[]> => {
            if (IS_MOCKUP) {
                return Promise.resolve(UserListMock)
            }
            try {
                const {status, data} = await httpClient.get(`/users`);
                if (status !== 200) {
                    return {} as IUser[]
                }
                return data
            } catch (err) {
                throw new Error(err)
            }
        },
        getTodoByID: async (filter: IGetTodoFilter): Promise<ITodo> => {
            if (IS_MOCKUP) {
                return {} as ITodo
            }
            try {
                const {status, data} = await httpClient.get(`/todos/${filter.id}`);
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

export const {getUserList, getTodoByID} = Services()
