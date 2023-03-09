import {NavbarStyled} from "../../style/navbar/Navbar.Styled";
import {Link} from "react-router-dom";
import {AddBoard} from "../boards/AddBoard";

export function Navbar() {
    let nameUser: string | null = localStorage.getItem("name");
    let token: string | null = localStorage.getItem("token");
    let name = nameUser ? nameUser[0].toUpperCase() : null;
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
        </NavbarStyled>
    )
}