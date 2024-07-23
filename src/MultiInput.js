import React, {useState, useRef} from "react";
import BorderBox from "./BorderBox";

function MultiInput() {
    // useState는 한번만 부를 것임.
    let [inputs, setInputs] = useState({
        username: '',
        password: ''
    })

    // 우리가 일반적으로 자바스크립트로 특정 DOM 객체를 찾을 때에는?
    // getElementById, querySelector
    // 리액트 상에서는 저러한 상황에서는 useRef()를 사용하게 된다.

    let passwordInput = useRef();

    let [message, setMessage] = useState('')

    let onChange = (e) => {
        let {name, value} = e.target
        setInputs({
            ...inputs,
            [name]: value       // 필드값 접근시 .과 대괄호[] 모두 가능
        })
        console.log(e.target.name + ": " + e.target.value)
    }

    let {username, password} = inputs

    let onClick = () => {

        if (username === password) {
            setMessage('로그인성공')
        } else {
            setMessage('로그인실패')
            setInputs({
                ...inputs,
                password: ''
            })
            passwordInput.current.value = ''
            passwordInput.current.focus()
        }
    }

    return (
        <BorderBox>
            <input placeholder='username' name='username' onChange={onChange} value={username}/>
            <input placeholder='password' type='password' name='password' onChange={onChange} value={password}
                   ref={passwordInput}/>
            <button onClick={onClick}>로그인</button>
            <h1>{message}</h1>
        </BorderBox>
    )
}

export default MultiInput