import React, {useEffect} from "react";
import {List, Avatar, Skeleton, message} from 'antd';

import {IUser} from "../model/todo";
import {getUserList} from "../service/todo-service";
import {UseHookService} from "../../../hooks/useService";

const UserList: React.FunctionComponent = (): React.ReactElement => {
    const {loading, result, err} = UseHookService<IUser[]>(getUserList)

    useEffect(() => {
        if (err) {
            message.error('Fetch Failed.').then()
            return
        }
    }, [loading, err])

    return (
        <Skeleton loading={loading} active>
            <List
                itemLayout="horizontal"
                dataSource={result}
                renderItem={(item: IUser) => (
                    <List.Item>
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
