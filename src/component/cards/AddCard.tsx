import {useState} from "react";
import {AddCardStyled} from "../../style/cards/AddCard.Styled";
import {Field, Form, Formik} from "formik";
import {IAddCard} from "./Interface/Card.Interface";
import {useDispatch} from "react-redux";
import {addCard} from "../../redux/actions/CardAction";
import {IdList} from "../lists/Interface/List.Interface";
import {useLocation} from "react-router-dom";

export function AddCard({id}: IdList) {
    const dispatch = useDispatch<any>();
    let idBoard = useLocation().pathname.split("/")[1];
    let initialCard = {
        detail: "",
    }
    const [checkCreate, setCheckCreate] = useState(true);
    const handleClick = (checkCreate: boolean) => {
        setCheckCreate(!checkCreate);
    }
    let handleSubmit = (values: IAddCard) => {
        dispatch(addCard(values));
    }
    return (
        <AddCardStyled>
            {checkCreate ? <div onClick={() => handleClick(checkCreate)} className="main__add__card">
                <span className={'add__title plus'}>+</span><span className={'add__title'}> Add a card</span>
            </div> : <div className={'form_add_card'}>
                <Formik initialValues={initialCard} onSubmit={(values) => {
                    let cardNew = {
                        detail: values.detail,
                        lists: id,
                        broad: idBoard,
                    };
                    handleSubmit(cardNew)
                }}>
                    <Form style={{height: '100%'}}>
                        <Field className={'input__title'} name="detail" placeholder={'Enter a title for this card...'}
                               component="textarea"/>
                        <button type={"submit"} className={'button__list__submit'}>Add card</button>
                        <button className={'button__list__submit button__list_close'}
                                onClick={() => handleClick(checkCreate)}>Close
                        </button>
                    </Form>
                </Formik>
            </div>}
        </AddCardStyled>
    )
}