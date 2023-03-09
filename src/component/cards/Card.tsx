import {IAddCard, ICard} from "./Interface/Card.Interface";
import {CardStyled} from "../../style/cards/Card.Styled";
import {useState} from "react";
import {Field, Form, Formik} from "formik";

export function Card({content, id}: ICard) {
    const [initialCard, setInitialCard] = useState<IAddCard>({content: content});
    const [checkCard, setCheckCard] = useState<boolean>(false);
    const handleClick = (check: boolean) => {
        setCheckCard(!check)
    }

    const handleEdit = (card: IAddCard) => {

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
                                       name={"content"}/>
                            </Form>
                        </Formik>
                    </div> :
                    <span className="main__card__content">
                    {content}
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