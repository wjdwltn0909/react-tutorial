import React, {useReducer, useState} from "react";
import BorderBox from "./BorderBox";

function Counter() {
    let [number, dispatch] = useReducer(reducer, 0)

    let onMinus = () => {
        dispatch({type: 'MINUS'})

    }

    let onPlus = () => {
        dispatch({type: 'PLUS'})
    }

    return (
        <BorderBox>
            <p>
                <button onClick={onMinus}>-1</button>
                {number}
                <button onClick={onPlus}>+1</button>
            </p>
        </BorderBox>
    );
}

function reducer(state, action) {
    switch (action.type) {
        case 'MINUS':
            return state - 1;
        case 'PLUS':
            return state + 1;
        default:
            return state;
    }
}

export default Counter;