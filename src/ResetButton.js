import React, {useState} from "react";
import BorderBox from "./BorderBox";

function ResetButton() {
    let [text, setText] = useState('')
    let onChange = (event) => {
        // 현재 event(input)의 target의 value를 setText해준다.
        setText(event.target.value);
    }

    let onClick = () => {
        setText('');
    }

    return (
        <BorderBox>
            <input onChange={onChange} value={text}/>
            <button onClick={onClick}>초기화</button>
            <h1>입력된 값: {text} </h1>
        </BorderBox>
    );

}

export default  ResetButton;