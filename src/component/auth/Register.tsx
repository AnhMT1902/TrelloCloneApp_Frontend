import {Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {AuthStyled} from "../../style/auth/Auth.Styled";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {register} from "../../redux/actions/UserAction";
import {getAllBoardByUser} from "../../redux/actions/BoardAction";

export function Register() {
    const dispatch: any = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    useEffect(() => {
        document.title = "Sign Up for a Free Trello Account";
    }, []);

    const initialRegister = {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    let handleRegister = async (value: any) => {
        let checkRegister: any = await dispatch(register(value))
        console.log(checkRegister)
        if (checkRegister.payload.message) {
            setError(checkRegister.payload.message)
        } else if (checkRegister.payload.accessToken) {
            await localStorage.setItem('token', checkRegister.payload.accessToken);
            await localStorage.setItem('name', value.name);
            navigate("/")
        }
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

    return (
        <AuthStyled>
            <div className={"container"}>
                <div className={"card-login"}>
                    <img className={"card__logo"}
                         src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png"
                         alt="logo"/>
                    {error && <p className={"p__error"}>{error}</p>}
                    <Formik initialValues={initialRegister}
                            validationSchema={validationSchema}
                            onSubmit={(value) => {
                                handleRegister(value).then();
                            }}>
                        {({errors, touched}) => (
                            <Form style={{width: "100%"}}>
                                <h3 className={"form__title"}>Sign up for your account</h3>
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
                                {(errors.email && touched.password) || (errors.password && touched.email) ?
                                    <button className={'form__button form__button__disable'}
                                            disabled={true}
                                            type={"submit"}>
                                        Sign in
                                    </button> :
                                    <button className={'form__button'} type={"submit"}>Sign up</button>}
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

