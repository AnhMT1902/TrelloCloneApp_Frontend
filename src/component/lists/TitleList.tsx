import {ITitleList} from "./Interface/List.Interface";
import {TitleListStyled} from "../../style/lists/TitleList.Styled";

export function TitleList({title, id}: ITitleList) {
    console.log(id)
    return (
        <TitleListStyled>
            <div className={"main__title__list"}>
                <span className={"span__title"}>{title}</span>
            </div>
        </TitleListStyled>
    )
}