import {Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {AuthStyled} from "../../style/auth/Auth.Styled";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {login} from "../../redux/actions/UserAction";

export function Login() {
    const dispatch: any = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    useEffect(() => {
        document.title = "Log in to Trello";
    }, []);

    const initialLogin = {
        email: '',
        password: ''
    }

    let handleLogin = async (value: any) => {
        let checkLogin: any = await dispatch(login(value));
        if (checkLogin.payload.message) {
            setError(checkLogin.payload.message);
        } else if (checkLogin.payload.accessToken) {
            await localStorage.setItem('token', checkLogin.payload.accessToken);
            await localStorage.setItem('name', checkLogin.payload.user.name);
            navigate("/")
        }
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

    return (
        <AuthStyled>
            <div className={"container"}>
                <div className={"card-login"}>
                    <img className={"card__logo"}
                         src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png"
                         alt="logo"/>
                    {error && <p className={"p__error"}>{error}</p>}
                    <Formik initialValues={initialLogin}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                handleLogin(values).then();
                            }}>
                        {({errors, touched}) => (
                            <Form style={{width: '100%'}}>
                                <h3 className={"form__title"}>Log in to continue</h3>
                                <Field type="text" className="form__input"
                                       name={'email'}
                                       placeholder="Your email"/>
                                {errors.email && touched.email ?
                                    <div className={"error__message"}>{errors.email}</div>
                                    : null}
                                <Field current-password="true" type="password" className=" form__input"
                                       name={'password'}
                                       placeholder="Password"/>
                                {errors.password && touched.password ?
                                    <div className={"error__message"}>{errors.password}</div>
                                    : null}
                                {(errors.email && touched.password) || (errors.password && touched.email) ?
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