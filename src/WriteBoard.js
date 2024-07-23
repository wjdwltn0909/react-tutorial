import React from "react";
import BorderBox from "./BorderBox";

// 파라미터에 중괄호{ } 필요!!
function WriteBoard({title, content, nickname, onWrite, onChange}) {
    return (
        <BorderBox>
            <input name="title" placeholder="제목" value={title} onChange={onChange}/> <br/>
            <input name="content" placeholder="내용" value={content} onChange={onChange}/> <br/>
            <input name="nickname" placeholder="작성자" value={nickname} onChange={onChange}/> <br/>
            <button onClick={onWrite}>작성하기</button>
        </BorderBox>
    )
}

export default WriteBoard;