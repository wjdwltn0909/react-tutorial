import React from "react";
import BorderBox from "./BorderBox";

function Header({name='게스트', age = -1}) {
    const HeaderStyle = {
        background: 'beige',
        fontSize: 'large',
        color: 'blue'
    }

    // 이것은 주석입니다.
    /*
     이것은 여러 줄 주석입니다.
     */
    Header.defaultProps = {
        name: '게스트',
        age: -1
    }

    return(
        // 이것은 주석입니다.
        <BorderBox>
            <div style={HeaderStyle} className="AAA">
                {
                    /*
                    이것은 여러 줄 주석입니다.
                    */
                }
                여기는 헤더입니다.
                반갑습니다. {name} 회원님!!!
            </div>
        </BorderBox>
    );
}

export default Header;