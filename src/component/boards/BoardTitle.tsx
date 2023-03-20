import {IBoard} from "./interface/Board.Interface";
import {BoardTitleStyled} from "../../style/boards/BoardTitle.Styled";
import {Link, useLocation, useParams} from "react-router-dom";

export function BoardTitle({title, id}: IBoard) {
    const idBroad = useLocation().pathname.split("/")[1];
    return (
        <BoardTitleStyled>
            {idBroad === id ? <Link style={{textDecoration: "none", width: "100%", height: '100%'}} to={id}>
                <div className='cardTitle cardTitleClick'>
                    {title}
                </div>
            </Link> : <Link style={{textDecoration: "none", width: "100%", height: '100%'}} to={id}>
                <div className='cardTitle'>
                    {title}
                </div>
            </Link>}
        </BoardTitleStyled>
    )
}