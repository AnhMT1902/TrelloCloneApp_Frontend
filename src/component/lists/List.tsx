import {IList} from "./Interface/List.Interface";
import {ListStyled} from "../../style/lists/List.Styled";
import {TitleList} from "./TitleList";

export function List({title, id, cards}: IList) {
    return (
        <ListStyled>
            <div className={'list_cards'}>
                <TitleList title={title} id={id}/>
            </div>
        </ListStyled>
    )
}