import './App.css';
import BoardList from "./BoardList";
import {useRef, useState} from "react";
import WriteBoard from "./WriteBoard";

function App() {
    let [boards, setBoards] = useState([
        {
            id: 1,
            title: '여러분',
            content: '지각하지 마세요',
            nickname: '강사'

        },
        {
            id: 2,
            title: '여러분',
            content: '지각하지 마세요',
            nickname: '강사'
        },
        {
            id: 3,
            title: '여러분',
            content: '장마가 싫다',
            nickname: '강사'
        },
        {
            id: 4,
            title: '여러분',
            content: '집에 가고 싶다.',
            nickname: '강사'
        },
        {
            id: 5,
            title: '여러분',
            content: '지각하지 마세요',
            nickname: '강사'
        }
    ])


    let [inputs, setInputs] = useState({
        title: '',
        content: '',
        nickname: ''
    })

    let {title, content, nickname} = inputs

    let nextId = useRef(5)

    let onChange = (e) => {
        let {name, value} = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    let onWrite = () => {
        let board = {
            id: nextId.current,
            title,
            content,
            nickname
        }

        setBoards([
            ...boards,
            board
        ])

        // 초기화
        setInputs({
            title: '',
            content: '',
            nickname: ''
        })

        nextId.current += 1;
    }

    return (
      <div className="App">
          <WriteBoard
            title = {title}
            content = {content}
            nickname = {nickname}
            onWrite = {onWrite}
            onChange = {onChange}
          />
          <BoardList boards={boards}/>
      </div>
  );
}

export default App;
