import {AxiosInstance} from "axios";

import TodoService from "./todo-service";

const get = jest.fn()
const axiosInstance: AxiosInstance = {
    get
} as any

describe('todoService', () => {
    const service = TodoService(axiosInstance)

    it('get user List should be success', async () => {
        get.mockResolvedValue([])

        const actual = await service.getUserList()
        expect(actual).toEqual([])

        expect(get).toHaveBeenCalledWith('/users')
        expect(get).toHaveBeenCalledTimes(1)
    })
})
