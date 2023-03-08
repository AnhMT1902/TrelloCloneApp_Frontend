import {useState} from "react";
import {AddListStyled} from "../../style/lists/AddList.Styled";
import {Field, Form, Formik} from "formik";
import {ICreateList} from "./Interface/List.Interface";

export function AddList() {
    let initialList = {
        title: ""
    }
    const [created, setCreated] = useState(true);

    const handleClick = (created: boolean) => {
        setCreated(!created)
    }

    const handleSubmit = (values: ICreateList) => {
        console.log(values)
    }

    return (
        <AddListStyled>
            {created ? <div className="form__add__list">
                <Formik initialValues={initialList} onSubmit={(values) => {
                    handleSubmit(values)
                }}>
                    <Form>
                        <Field type="text" className="input__list__title"
                               name={'title'}
                               placeholder="Enter list title..."/>
                        <button type="submit" className={"button__list__submit"}>Add list</button>
                        <button type={"reset"} className={"button__list__submit"} onClick={()=>{handleClick(created)} }>Close</button>
                    </Form>
                </Formik>

            </div> : <div onClick={() => {
                handleClick(created)
            }} className={'main_add_list'}>
                <span>Add another list</span>
            </div>}
        </ AddListStyled>
    )
}