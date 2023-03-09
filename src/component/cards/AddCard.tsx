import {useState} from "react";
import {AddCardStyled} from "../../style/cards/AddCard.Styled";
import {Field, Form, Formik} from "formik";
import {IAddCard} from "./Interface/Card.Interface";

export function AddCard() {
    let initialCard = {
        content: "",
    }
    const [checkCreate, setCheckCreate] = useState(true);
    const handleClick = (checkCreate: boolean) => {
        setCheckCreate(!checkCreate);
    }
    let handleSubmit = (values: IAddCard) => {
        console.log(values)
    }
    return (
        <AddCardStyled>
            {checkCreate ? <div onClick={() => handleClick(checkCreate)} className="main__add__card">
                <span className={'add__title plus'}>+</span><span className={'add__title'}> Add a card</span>
            </div> : <div className={'form_add_card'}>
                <Formik initialValues={initialCard} onSubmit={(values) => handleSubmit(values)}>
                    <Form style={{height: '100%'}}>
                        <Field className={'input__title'} name="content" placeholder={'Enter a title for this card...'} component="textarea"/>
                        <button type={"submit"} className={'button__list__submit'}>Add card</button>
                        <button className={'button__list__submit button__list_close'} onClick={()=>handleClick(checkCreate)}>Close</button>
                    </Form>
                </Formik>
            </div>}
        </AddCardStyled>
    )
}