import {Link, NavLink, Outlet} from "react-router-dom";

let BoardList2 = () => {
    let style ={
        fontStyle: 'italic',
        fontSize: 'large'

    }

    return (
        <>
            <Outlet/>
            <ol>
                <li>
                    <Link to={"/board/1"}>
                        <NavLink to={"/board/1"}
                                 style={({isActive}) => (isActive? style : undefined)}>
                            1번 게시글
                        </NavLink>
                    </Link>
                </li>
                <li>
                    <Link to={"/board/2"}>
                        <NavLink to={"/board/2"}
                                 style={({isActive}) => (isActive? style : undefined)}>
                            2번 게시글
                        </NavLink>
                    </Link>
                </li>
                <li>
                    <Link to={"/board/3"}>
                    <NavLink to={"/board/3"}
                             style={({isActive}) => (isActive? style : undefined)}>
                        3번 게시글
                    </NavLink>
                </Link>
                </li>
                <li>
                    <Link to={"/board/4"}>
                        <NavLink to={"/board/4"}
                                 style={({isActive}) => (isActive? style : undefined)}>
                            4번 게시글
                        </NavLink>
                    </Link>
                </li>
            </ol>
        </>
    );
}

export default BoardList2;