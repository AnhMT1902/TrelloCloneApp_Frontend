import {IAddCard, ICard, IUpdateCard} from "./Interface/Card.Interface";
import {CardStyled} from "../../style/cards/Card.Styled";
import {useState} from "react";
import {Field, Form, Formik} from "formik";

export function Card({detail, id}: ICard) {
    const [initialCard, setInitialCard] = useState({detail: detail});
    const [checkCard, setCheckCard] = useState<boolean>(false);
    const handleClick = (check: boolean) => {
        setCheckCard(!check)
    }

    const handleEdit = (card: any) => {

    }
    return (
        <CardStyled>
            <div className="main__card">
                {checkCard ?
                    <div>
                        <Formik initialValues={initialCard} onSubmit={(values) => handleEdit(values)}>
                            <Form>
                                <Field className={'input__title'} key={id} component={"textarea"}
                                       placeholder={'Enter a title for this card...'}
                                       name={"detail"}/>
                            </Form>
                        </Formik>
                    </div> :
                    <span className="main__card__content">
                    {detail}
                </span>}
                <div className={'main__card__edit'}>
                    {checkCard ?
                        <span onClick={() => handleClick(checkCard)}
                              className={'main__card__content main__card__span main__card__x'}
                        >x</span> :
                        <span onClick={() => handleClick(checkCard)} className={'main__card__content main__card__span'}
                        >...</span>}
                </div>
            </div>
        </CardStyled>
    )
}