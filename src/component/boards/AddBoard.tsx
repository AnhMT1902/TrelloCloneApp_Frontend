import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {addBoard} from "../../redux/actions/BoardAction";

export function AddBoard({token}: any) {
    const dispatch = useDispatch();
    const [click, setClick] = useState(false);
    const [checkValid, setCheckValid] = useState(true);
    const handleClick = () => {
        setClick(!click);
        if (!checkValid) {
            handleValid();
        }
    }
    const handleValid = () => setCheckValid(!checkValid)
    const initialBoard = {
        title: ''
    }
    const handleSubmit = (values: any) => {
        dispatch(addBoard(values))
    }
    return (<>
        {click ? <div className={"main__create"}>
                <Formik initialValues={initialBoard} onSubmit={(values) => {
                    if (values.title) {
                        handleSubmit(values)
                        handleClick()
                    } else {
                        if (checkValid) {
                            handleValid();
                        }
                    }
                }}>
                    <Form>
                        {checkValid ?
                            <Field className={"main__input__create"} name={"title"} type={'text'}
                                   placeholder={"Board title"}/> :
                            <Field className={"main__input__create error__valid"} name={"title"}
                                   type={'text'}
                                   placeholder={"Board title *"}/>}
                        <button onClick={() => handleClick()}
                                className={"main__button__close nav__button__create nav__button"}
                                type={"reset"}>Close
                        </button>
                    </Form>
                </Formik>
            </div> :
            <button onClick={() => handleClick()} className={"nav__button nav__button__create"}>
                <span>Create</span></button>}
    </>)
}