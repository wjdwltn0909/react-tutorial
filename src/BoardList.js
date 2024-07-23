import React from "react";
import BorderBox from "./BorderBox";

function Board({board}) {
    return (
        <BorderBox>
            <p>제목: {board.title}</p >
            <p>글번호: {board.id}</p>
            <p>작성자: {board.nickname}</p>
            <p>내용: {board.content}</p>
        </BorderBox>
    )
}

function BoardList({boards}) {
    return (
        <BorderBox>
            {boards.map((board) => (
                // 키 설정 필요함
                <Board board={board} key={board.id}/>
            ))}
        </BorderBox>
    )

}

export default BoardList;