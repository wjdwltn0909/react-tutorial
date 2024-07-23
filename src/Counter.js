import React, {useState} from "react";
import BorderBox from "./BorderBox";

function Counter() {
    let numberState   = useState(0);
    let number = numberState[0];
    let setNumber = numberState[1];
    // let [number, setNumber] = useState(0)

    let onMinus = () => {
        setNumber(prevNumber => prevNumber - 1)
    }
    let onPlus = () => {
        setNumber(number + 1)

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

export default Counter;