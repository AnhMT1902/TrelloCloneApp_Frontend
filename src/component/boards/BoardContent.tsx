import {BoardContentStyled} from "../../style/boards/BoardContent.Styled";
import {useLocation, useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getOneBoard} from "../../redux/actions/BoardAction";
import {RenderList} from "../lists/RenderList";

export function BoardContent() {
    const id = useLocation().pathname.split("/")[1];
    const dispatch = useDispatch();
    let listCreate = useSelector((state: any) => {
        return state.list.listCreated
    });
    useEffect(() => {
        console.log(id)
        dispatch(getOneBoard(id))
    }, [id, listCreate]);

    let boardFind: any = useSelector<any>(state => {
        state.board.boardFind.title ?
            document.title = `${state.board.boardFind.title} | Trello`
            : document.title = 'Trello';
        return state.board.boardFind
    });

    return (
        <BoardContentStyled>
            <div className='main'>
                {boardFind.lists ?
                    <RenderList lists={boardFind.lists}/>
                    : null}
            </div>
        </BoardContentStyled>
    )
}