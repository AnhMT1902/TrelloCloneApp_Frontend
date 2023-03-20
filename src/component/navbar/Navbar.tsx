import {NavbarStyled} from "../../style/navbar/Navbar.Styled";
import {Link, useNavigate} from "react-router-dom";
import {AddBoard} from "../boards/AddBoard";
import {useState} from "react";

export function Navbar() {
    const navigate = useNavigate();
    const [showLogout, setShowLogout] = useState<boolean>(false);
    const nameUser: string | null = localStorage.getItem("name");
    const token: string | null = localStorage.getItem("token");
    const name = nameUser ? nameUser[0].toUpperCase() : null;
    const showDivLogout = () => {
        console.log(showLogout)
        setShowLogout(!showLogout);
    }
    const logout = () => {
        localStorage.clear();
        navigate('/auth/login');
    }

    return (
        <NavbarStyled>
            <div className="main">
                <div className="nav__right">
                    <div className={"nav__logo"}>
                        <Link to={"/"} style={{height: "100%"}}>
                            <img className={"nav__img"}
                                 src="https://a.trellocdn.com/prgb/assets/87e1af770a49ce8e84e3.gif" alt="logo"/>
                        </Link>
                    </div>
                    <div className={"nav__link"}>
                        <button className={"nav__button"}><span>Workspaces</span></button>
                    </div>
                    <div className={"nav__link"}>
                        <button className={"nav__button"}><span>Recent</span></button>
                    </div>
                    <div className={"nav__link"}>
                        <button className={"nav__button"}><span>Starred</span></button>
                    </div>
                    <div className={"nav__link"}>
                        <button className={"nav__button"}><span>Template</span></button>
                    </div>
                    <div className={"nav__link"}>
                        <AddBoard token={token}/>
                    </div>
                </div>
                <div>

                    <div onClick={showDivLogout}>
                        <div className="nav__left">
                            {name ?
                                <div style={{
                                    width: "30px",
                                    height: "30px",
                                    marginRight: "20px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <button className={'btn__user'}>
                                        {name}
                                    </button>
                                </div>
                                : null}
                        </div>
                    </div>
                    {showLogout ?
                        <div className={"dropdown__logout"}>
                            <button className={'button__logout'}>Profile</button>
                            <button onClick={logout} className={'button__logout'}>Log out</button>
                        </div> : null}
                </div>
            </div>
        </NavbarStyled>
    )
}