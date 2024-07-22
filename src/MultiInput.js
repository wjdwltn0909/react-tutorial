import React, {useState} from "react";
import BorderBox from "./BorderBox";

function MultiInput() {
    // useState는 한번만 부를 것임.
    let [inputs, setInputs] = useState({
        username: '',
        password: ''
    })

    let [message, setMessage] =useState('')

    let onChange = (e) => {
        let {name, value} = e.target
        setInputs({
            ...inputs,
            [name]: value       // 필드값 접근시 .과 대괄호[] 모두 가능
        })
        console.log(e.target.name + ": " + e.target.value)
    }

    let onClick = () => {

        let {username, password} = inputs
        if (username===password){
            setMessage('로그인성공')
        } else{
            setMessage('로그인실패')
        }
    }

    return (
        <BorderBox>
            <input placeholder='username' name='username' onChange={onChange}/>
            <input placeholder='password' type='password' name='password' onChange={onChange}/>
            <button onClick={onClick}>로그인</button>
            <h1>{message}</h1>
        </BorderBox>
    )
}

export default MultiInput