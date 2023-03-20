import {useEffect, useState} from "react";
import {AddCardStyled} from "../../style/cards/AddCard.Styled";
import {Field, Form, Formik} from "formik";
import {IAddCard} from "./Interface/Card.Interface";
import {useDispatch} from "react-redux";
import {addCard} from "../../redux/actions/CardAction";
import {IdList} from "../lists/Interface/List.Interface";
import {useLocation, useParams} from "react-router-dom";

export function AddCard({id}: IdList) {
    let idBroad = useParams()
    const dispatch = useDispatch<any>();
    const idBoard = useLocation().pathname.split("/")[1];
    const initialCard = {
        detail: "",
    }
    const [checkCreate, setCheckCreate] = useState(true);
    useEffect(() => {
        setCheckCreate(true)
    }, [idBroad])
    const handleClick = () => {
        setCheckCreate(!checkCreate);
    }
    const handleSubmit = (values: IAddCard) => {
        dispatch(addCard(values));
        handleClick()
    }
    return (
        <AddCardStyled>
            {checkCreate ? <div onClick={() => handleClick()} className="main__add__card">
                <span className={'add__title plus'}>+</span><span className={'add__title'}> Add a card</span>
            </div> : <div className={'form_add_card'}>
                <Formik initialValues={initialCard} onSubmit={(values) => {
                    if (values.detail.trim().length > 0) {
                        let cardNew = {
                            detail: values.detail.trim(),
                            lists: id,
                            broad: idBoard,
                        };
                        handleSubmit(cardNew)
                    }
                }}>
                    <Form style={{height: '100%'}}>
                        <Field className={'input__title'} name="detail" placeholder={'Enter a title for this card...'}
                               component="textarea"/>
                        <button type={"submit"} className={'button__list__submit'}>Add card</button>
                        <button className={'button__list__submit button__list_close'}
                                onClick={() => handleClick()}>Close
                        </button>
                    </Form>
                </Formik>
            </div>}
        </AddCardStyled>
    )
}