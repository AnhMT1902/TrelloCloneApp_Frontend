import {NavbarDefaultStyled} from "../../style/navbar/NavbarDefault.Styled";
import {Link} from "react-router-dom";

export function NavbarDefault() {
    return (
        <NavbarDefaultStyled>
            <div className={"nav"}>
                <div className="nav__left">
                    <div className="logo__link">
                        <Link to={'/'}>
                            <img style={{height: "31px"}}
                                 src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png"
                                 alt="logo"/>
                        </Link>
                    </div>
                    <div className={"logo__link nav__link"}>
                    <span>
                        Features
                    </span>
                    </div>
                    <div className={"logo__link nav__link"}>
                    <span>
                       Solutions
                    </span>
                    </div>
                    <div className={"logo__link nav__link"}>
                    <span>
                        Plans
                    </span>
                    </div>
                    <div className={"logo__link nav__link"}>
                    <span>
                      Pricing
                    </span>
                    </div>
                    <div className={"logo__link nav__link"}>
                    <span>
                       Resources
                    </span>
                    </div>
                </div>
                <div className="nav__right">
                    <div className={"logo__link nav__link"} style={{fontSize: '1.1rem'}}>
                    <Link className={'link__style'} style={{color: "black"}} to={"/auth/login"}>
                        Log in
                    </Link>
                    </div>
                    <div className={"logo__link nav__link nav__login"}>
                    <Link className={"link__style"} style={{color: "#ffffff"}} to={"/auth/signup"}>
                        Get Trello for free
                    </Link>
                    </div>
                </div>
            </div>
        </NavbarDefaultStyled>
    )
}