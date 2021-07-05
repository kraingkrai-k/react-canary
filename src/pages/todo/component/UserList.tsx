import React, {useCallback, useEffect, useState} from "react";
import {List, Avatar, Skeleton} from 'antd';

import useAxios, {UseService} from "hooks/useAxios";
import {ErrorMsg} from "component/common/ToastMessage";

import {IUser} from "../model/todo";
import TodoService, {ITodoService} from "../service/todo-service";

interface InterfaceState {
    loading: boolean,
    userList: IUser[]
}

const UserList: React.FunctionComponent = (): React.ReactElement => {

    const {service} = useAxios<ITodoService>((axiosInstance) => TodoService(axiosInstance))
    const [state, setState] = useState<InterfaceState>({loading: true, userList: []})

    const {getUserList} = service()

    const fetchUserList = useCallback(async () => {
        const {result, err} = await UseService(getUserList)
        if (err) {
            ErrorMsg()
            setState(prevState => ({...prevState, loading: false}))
            return
        }
        setState(prevState => ({...prevState, userList: result, loading: false}))
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        fetchUserList().catch(() => null)
        // eslint-disable-next-line
    }, [])

    return (
        <Skeleton loading={state.loading} active>
            <List
                itemLayout="horizontal"
                dataSource={state.userList}
                renderItem={(item: IUser) => (
                    <List.Item
                        // onClick={() => push(`${url}/${item.id}/ct`)}
                    >
                        <List.Item.Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            }
                            title={<a href="https://ant.design">{item.name}</a>}
                            description={item.address.city}
                        />
                    </List.Item>
                )}
            />
        </Skeleton>
    )
}

export default UserList
