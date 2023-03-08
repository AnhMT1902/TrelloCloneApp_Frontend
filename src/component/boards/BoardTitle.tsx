import {IBoard} from "./interface/Board.Interface";
import {BoardTitleStyled} from "../../style/boards/BoardTitle.Styled";
import {Link} from "react-router-dom";

export function BoardTitle({title, id}: IBoard) {
    return (
        <BoardTitleStyled>
            <Link style={{textDecoration: "none", width: "100%", height: '100%'}} to={id}>
                <div className='cardTitle'>
                    {title}
                </div>
            </Link>
        </BoardTitleStyled>
    )
}