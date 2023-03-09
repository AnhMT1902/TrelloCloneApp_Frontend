import {BoardContentStyled} from "../../style/boards/BoardContent.Styled";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {List} from "../lists/List";
import {AddList} from "../lists/AddList";


export function BoardContent() {
    const {id} = useParams<{ id: string }>();
    useEffect(() => {
        document.title = `${id} | Trello`;
    })
    return (
        <BoardContentStyled>
            <div className={'main'}>
                <List title={"minh anh"} id={"abc12434"} cards={[{detail: "minhanh", id: "2131241231"}]}/>
                <AddList/>
            </div>
        </BoardContentStyled>
    )
}