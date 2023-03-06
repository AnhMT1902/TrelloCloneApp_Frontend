import {Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";
import {AuthStyled} from "../../style/Auth.Styled";
import * as Yup from "yup";

export function Register() {
    const initialRegister = {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    let validationSchema = Yup.object().shape({
        name: Yup.string().required("Please Enter your email"),
        email: Yup.string().email('Email must be a valid email').required('Please Enter your email'),
        password: Yup
            .string()
            .required('Please Enter your password')
            .matches(
                /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/,
                "Must Contain 8 Characters, One Lowercase and One Number"
            ),
        confirmPassword: Yup
            .string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
    })
    let handleRegister = ({values}: { values: any }) => {
        console.log(values)
    }
    return (
        <AuthStyled>
            <div className={"container"}>
                <div className={"card-login"}>
                    <img className={"card__logo"}
                         src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png"
                         alt="logo"/>
                    <Formik initialValues={initialRegister}
                            validationSchema={validationSchema}
                            onSubmit={(values, {resetForm}) => {
                                handleRegister({values: values});
                                resetForm();
                            }}>
                        {({errors, touched}) => (
                            <Form style={{width: "100%"}}>
                                <h3 className={"form__title"}>Sign in to continue</h3>
                                <Field type="text" className=" form__input"
                                       name={'name'}
                                       placeholder="Your name"/>
                                {errors.name && touched.name ?
                                    <div className={"error__message"}>{errors.name}</div>
                                    : null}
                                <Field type="email" className=" form__input"
                                       name={'email'}
                                       placeholder="Your email"/>
                                {errors.email && touched.email ?
                                    <div className={"error__message"}>{errors.email}</div>
                                    : null}
                                <Field type="password" className=" form__input"
                                       name={'password'}
                                       placeholder="Password"/>
                                {errors.password && touched.password ?
                                    <div className={"error__message"}>{errors.password}</div>
                                    : null}
                                <Field type="password" className=" form__input"
                                       name={'confirmPassword'}
                                       placeholder="Confirm Password"/>
                                {errors.confirmPassword && touched.confirmPassword ?
                                    <div className={"error__message"}>{errors.confirmPassword}</div>
                                    : null}
                                {errors.email && touched.password || errors.password && touched.email ?
                                    <button className={'form__button form__button__disable'}
                                            disabled={true}
                                            type={"submit"}>
                                        Sign in
                                    </button> :
                                    <button className={'form__button'} type={"submit"}>Sign in</button>}
                            </Form>
                        )}
                    </Formik>
                    <h4 className={"card__register"}>Already have an Atlassian account? <Link
                        className={'link__register'}
                        to={"/auth/login"}>Log in</Link>
                    </h4>
                </div>
            </div>
        </AuthStyled>
    )
}

