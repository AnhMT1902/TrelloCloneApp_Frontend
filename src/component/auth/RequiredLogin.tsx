import {RequiredLoginStyled} from "../../style/RequiredLogin.Styled";
import {Navbar} from "../navbar/navbar";
import {Link} from "react-router-dom";

export function RequiredLogin() {
    return (
        <RequiredLoginStyled>
            <div className="container">
                <Navbar/>
                <div className={'content-wrapper'}>
                    <div>
                        <h1>Sign up to see this board</h1>
                        <p>You’re almost there! The board you are trying to access requires a Trello account.</p>
                    </div>
                    <div>
                        <Link className={"button__signup"} to={"/auth/signup"}>Sign up for free</Link>
                        <p>Already have an account? <Link to={"/auth/login"} className={'button__link'}>Log in.</Link></p>
                    </div>
                </div>
            </div>
        </RequiredLoginStyled>
    )
}