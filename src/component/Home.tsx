import {HomeStyled} from "../style/Home.Styled";
import {Navbar} from "./navbar/Navbar";
import {BoardTitle} from "./boards/BoardTitle";
import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllBoardByUser} from "../redux/actions/BoardAction";
import {RequiredLogin} from "./auth/RequiredLogin";

export function Home() {
    const dispatch = useDispatch();
    let [checkLogin, setCheckLogin] = useState(true);

    useEffect(() => {
        const token: string | null = localStorage.getItem("token");
        !token && setCheckLogin(false)
        dispatch(getAllBoardByUser(token));
    }, [dispatch])

    let listBoard = useSelector((state: any) => {
        return state.board.currentBoard
    });

    return (
        <>
            {checkLogin ? <HomeStyled>
                <div className={"home"}>
                    <Navbar/>
                    <div className="main">
                        <div className="sidebar">
                            <div style={{
                                display: 'flex',
                                alignItems: "center",
                                borderBottom: '0.01px solid #ffffff29',
                                height: '40px'
                            }}>
                                <span className={'your__broads'}>Your Boards</span>
                            </div>
                            {listBoard ? listBoard.map((item: any) => (
                                <BoardTitle title={item.title} id={item._id}/>)) : <div>Loading...</div>}
                        </div>
                        <div className="content">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </HomeStyled> : <RequiredLogin/>}
        </>
    )
}