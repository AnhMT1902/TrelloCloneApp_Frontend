import {IList} from "./Interface/List.Interface";
import {ListStyled} from "../../style/lists/List.Styled";
import {TitleList} from "./TitleList";
import {AddCard} from "../cards/AddCard";
import {Card} from "../cards/Card";

export function List({title, id, cards}: IList) {
    return (
        <ListStyled>
            <div className={'list_cards'}>
                <TitleList title={title} id={id}/>
                <div className={'list__card__render'}>
                    <Card content={"là người dùng, tôi muốn đăng ký"} id={"12345"}/>
                    <Card content={"là người dùng, tôi muốn tạo một tài khoản"} id={"12345"}/>
                    <Card content={"Là người dùng tôi muốn sau khi đăng nhập sẽ nhìn thấy giao diện Trang chủ"} id={"12345"}/>
                </div>
                <AddCard/>
            </div>
        </ListStyled>
    )
}