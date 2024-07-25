import './App.css';
import BoardList from "./BoardList";
import React, {useCallback, useMemo, useReducer, useRef, useState} from "react";
import WriteBoard from "./WriteBoard";
import Counter from "./Counter";


function countRead(boards) {
    // 몇 개의 게시물을 봤는지 확인
    console.log('읽은 게시물 갯수를 셉니다.')
    return boards.filter(b => b.active).length;
}

let initialState = {
    inputs: {
        title: '',
        content: '',
        nickname: ''
    },
    boardArray: [
        {
            id: 1,
            title: '지금은 점심시간 이후',
            content: '밥 먹고 너무 졸리다.',
            nickname: '학생1',
            active: false
        },
        {
            id: 2,
            title: '지금은 수업시간',
            content: '리액트를 수업시간에 하는데 졸리다.',
            nickname: '학생2',
            active: false

        }
    ]
}

//이 부분 다시 작성
// (state, action) 으로 설정이 되어있고
// [state, dispatch]
function reducer(state, action) {
    switch (action.type) {
        // onChange와 같은 역할
        case 'CHANGE_INPUT': // 여기 끝난것 아니었으.
            return {
                ...state,
                inputs:{
                    ...state.inputs,
                    [action.name]: action.value
                }
            }

        case "WRITE_BOARD":
            return {
                inputs:initialState.inputs,
                boardArray: state.boardArray.concat(action.board)
            }

        case "TOGGLE_TITLE":
            return {
                ...state,
                boardArray: state.boardArray.map(b =>
                    b.id === action.id? {...b, active: !b.active} : b
                )
            }

        case "DELETE_BOARD":
            return {
                ...state,
                boardArray: state.boardArray.filter(b =>
                    b.id !== action.id
                )
            }

        default:
            return state
    }

}

export let BoardDispatch = React.createContext(null)

function App() {
    let [state, dispatch] =useReducer(reducer, initialState)
    let nextId =  useRef(3)
    let {title, content, nickname} = state.inputs
    let {boardArray} = state;



    let onChange = useCallback(e =>  {
        let {name, value} = e.target
        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value
        })
    }, [])

    let onWrite = useCallback(() => {

        dispatch({
            type: 'WRITE_BOARD',
            board: {
                id: nextId.current,
                title,
                content,
                nickname
            }
        })
        nextId.current += 1;
    }, [title, content, nickname])

    let onToggle = useCallback((id) => {
        dispatch({
            type: "TOGGLE_TITLE",
            id
        })
    }, [])

    let onDelete = useCallback((id) => {
        dispatch({
            type: "DELETE_BOARD",
            id
        })
    }, [])

    let count = useMemo(() => countRead(boardArray), [boardArray])


    return (
        <BoardDispatch.Provider value={dispatch}>
            <div className="App">
                {/*state.inputs 생략가능!!!*/}
                <WriteBoard
                    title={title}
                    content={content}
                    nickname={nickname}
                    onChange={onChange}
                    onWrite={onWrite}
                />
                <h1>읽은 글의 갯수: {count}</h1>
                <BoardList boardArray={boardArray}/>
            </div>
        </BoardDispatch.Provider>

    );
}

export default App;
