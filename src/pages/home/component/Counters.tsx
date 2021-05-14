import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Button, Typography, Space, Divider} from 'antd';

import {incremented, decremented, RootStoreType} from "store/counter";

import {ICounterType} from "../model/counter";

const Counters: React.FunctionComponent = (): React.ReactElement => {
    const dispatch = useDispatch();
    const {value: counterReducer} = useSelector(
        (state: RootStoreType) => state.counter
    );
    const [counter, setCounter] = useState<number>(1);

    const handleCounter = (type: ICounterType) => {
        switch (type) {
            case ICounterType.INCREMENT:
                dispatch(incremented());
                setCounter(counter + 1);
                break;
            case ICounterType.DECREMENT:
                if (counter === 0) return;
                dispatch(decremented());
                setCounter(counter - 1);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <Space>
                <Typography.Text>State:
                    <strong data-testid="var-counter"> {counter}</strong>
                </Typography.Text>

                <Typography.Text>Store:
                    <strong data-testid="var-reducer-counter"> {counterReducer}</strong>
                </Typography.Text>

            </Space>
            <Divider/>

            <Space>
                <Button
                    type="primary"
                    data-testid="btn-counter-increment"
                    onClick={() => handleCounter(ICounterType.INCREMENT)}
                >
                    <Typography.Text>+</Typography.Text>
                </Button>

                <Button
                    type="primary"
                    data-testid="btn-counter-decrement"
                    onClick={() => handleCounter(ICounterType.DECREMENT)}
                    disabled={counter === 0}
                >
                    <Typography.Text>-</Typography.Text>
                </Button>
            </Space>
        </>
    );
};

export default Counters;
