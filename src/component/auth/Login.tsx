import {ErrorMessage, Field, Form, Formik, useFormik} from "formik";
import {Link} from "react-router-dom";
import {AuthStyled} from "../../style/Auth.Styled";
import * as Yup from "yup";

export function Login() {
    const initialLogin = {
        email: '',
        password: ''
    }
    let validationSchema = Yup.object().shape({
        email: Yup.string().email('Email must be a valid email').required('Please Enter your email'),
        password: Yup
            .string()
            .required('Please Enter your password')
            .matches(
                /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/,
                "Must Contain 8 Characters, One Lowercase and One Number"
            )
    })

    let handleLogin = (value: {}) => {
        console.log(value)
    }
    return (
        <AuthStyled>
            <div className={"container"}>
                <div className={"card-login"}>
                    <img className={"card__logo"}
                         src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png"
                         alt="logo"/>
                    <Formik initialValues={initialLogin}
                            validationSchema={validationSchema}
                            onSubmit={(values, {resetForm}) => {
                                handleLogin({values: values});
                                resetForm();
                            }}>
                        {({errors, touched}) => (
                            <Form style={{width: '100%'}}>
                                <h3 className={"form__title"}>Log in to continue</h3>
                                <Field type="text" className="form__input"
                                       name={'email'}
                                       placeholder="Your email" required/>
                                {errors.email && touched.email ?
                                    <div className={"error__message"}>{errors.email}</div>
                                    : null}
                                <Field current-password="true" type="password" className=" form__input"
                                       name={'password'}
                                       placeholder="Password" required/>
                                {errors.password && touched.password ?
                                    <div className={"error__message"}>{errors.password}</div>
                                    : null}
                                {errors.email && touched.password || errors.password && touched.email ?
                                    <button className={'form__button form__button__disable'}
                                            disabled={true}
                                            type={"submit"}>
                                        Log in
                                    </button> :
                                    <button className={'form__button'}
                                            type={"submit"}>
                                        Log in
                                    </button>}
                            </Form>
                        )}
                    </Formik>
                    <h4 className={"card__register"}>Don't have an account? <Link
                        className={'link__register'}
                        to={"/auth/signup"}>Create an account</Link>
                    </h4>
                </div>
            </div>
        </AuthStyled>
    )
}