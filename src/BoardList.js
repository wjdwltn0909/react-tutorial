import React, {useContext, useEffect} from "react";
import BorderBox from "./BorderBox";
import {BoardDispatch} from "./App";

let Board = React.memo(function Board({board, onDelete, onToggle}) {
    let dispatch = useContext(BoardDispatch)

    useEffect(() => {
        return () => {
            console.log('board컴포넌트가 언마운트됨')
        }
    } , [board])

    useEffect(() => {
        return () => {
            console.log('수정수정')
        }
    } , [board])

    return (
        <BorderBox>
            <BorderBox>
                <p style= {{
                    cursor:'pointer',
                    backgroundColor:board.active? 'yellow' : 'beige'
                }} onClick={ () => {
                    dispatch({type:'TOGGLE_TITLE', id: board.id})
                }}> 제목: {board.title}</p>
                <p>글번호: {board.id}</p>
                <p>작성자: {board.nickname}</p>
                <p>내용: {board.content}</p>
            </BorderBox>
            <button onClick={() => {
                dispatch({type: 'DELETE_BOARD', id: board.id})
            }}>삭제하기</button>
        </BorderBox>
    )
})


function BoardList({boardArray}) {
    return (
        <BorderBox>
            {boardArray.map((board) => (
                // 키 설정 필요함
                <Board board={board} key={board.id}/>
            ))}
        </BorderBox>
    )

}

export default React.memo(BoardList);