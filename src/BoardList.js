import React from "react";
import BorderBox from "./BorderBox";

function Board({board, onDelete, onToggle}) {
    console.log(board)
    return (
        <BorderBox>
            <BorderBox>
                <p style= {{
                    cursor:'pointer',
                    backgroundColor:board.active? 'yellow' : 'beige'
                }} onClick={() => onToggle(board.id)}> 제목: {board.title}</p>
                <p>글번호: {board.id}</p>
                <p>작성자: {board.nickname}</p>
                <p>내용: {board.content}</p>

            </BorderBox>

            <button onClick={() => onDelete(board.id)}>삭제하기</button>
        </BorderBox>
    )
}

function BoardList({boards, onDelete, onToggle}) {
    return (
        <BorderBox>
            {boards.map((board) => (
                // 키 설정 필요함
                <Board board={board} key={board.id} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </BorderBox>
    )

}

export default BoardList;