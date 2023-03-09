import {useState} from "react";
import {AddListStyled} from "../../style/lists/AddList.Styled";
import {Field, Form, Formik} from "formik";
import {ICreateList} from "./Interface/List.Interface";
import {useDispatch} from "react-redux";
import {addList} from "../../redux/actions/ListAction";
import {useLocation} from "react-router-dom";

export function AddList() {
    const dispatch = useDispatch<any>();
    let idBoard = useLocation().pathname.split("/")[1];
    let initialList = {
        title: ""
    }
    const [created, setCreated] = useState(false);

    const handleClick = (created: boolean) => {
        setCreated(!created)
    }

    const handleSubmit = (values: ICreateList) => {
        values.title = values.title.trim();
        values.broad = idBoard;
        dispatch(addList(values));
    }

    return (
        <AddListStyled>
            {created ? <div className="form__add__list">
                <Formik initialValues={initialList} onSubmit={(values) => {
                    if (values.title.trim().length > 0) {
                        handleSubmit(values)
                    }
                }}>
                    <Form>
                        <Field type="text" className="input__list__title"
                               name={'title'}
                               placeholder="Enter list title..."/>
                        <button type="submit" className={"button__list__submit"}>Add list</button>
                        <button type={"reset"} className={"button__list__submit"} onClick={() => {
                            handleClick(created)
                        }}>Close
                        </button>
                    </Form>
                </Formik>

            </div> : <div onClick={() => {
                handleClick(created)
            }} className={'main_add_list'}>
                <span className={'plus'}>+</span><span>Add another list</span>
            </div>}
        </ AddListStyled>
    )
}