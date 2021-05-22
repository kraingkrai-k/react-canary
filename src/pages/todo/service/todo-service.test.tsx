/* eslint-disable */
import {AxiosInstance} from "axios";

import {IS_MOCKUP} from 'core/utils/env'

import TodoService from "./todo-service";
import {UserListMock} from "../mock/userList";

const get = jest.fn()
const axiosInstance: AxiosInstance = {
    get
} as any

describe('todoService', () => {
    const service = TodoService(axiosInstance)

    it('get user List should be success', async () => {

        get.mockResolvedValue([])

        const actual = await service.getUserList()

        if (IS_MOCKUP) {
            expect(actual).toEqual(UserListMock)
        } else {
            expect(actual).toEqual([])
            expect(get).toHaveBeenCalledWith('/users')
            expect(get).toHaveBeenCalledTimes(1)
        }

    })
})
