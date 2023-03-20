import {ITitleList} from "./Interface/List.Interface";
import {TitleListStyled} from "../../style/lists/TitleList.Styled";
import {Simulate} from "react-dom/test-utils";

export function TitleList({title, id}: ITitleList) {
    return (
        <TitleListStyled>
            <div className={"main__title__list"}>
                <span className={"span__title"}>{title}</span>
            </div>
        </TitleListStyled>
    )
}