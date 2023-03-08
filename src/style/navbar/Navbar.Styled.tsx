import styled from "styled-components";

export const NavbarStyled = styled.div`
  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Noto Sans', 'Ubuntu', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  .main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    height: 31.333px;
    max-height: 31.333px;
    padding: 6px 4px;
    background-color: rgb(100, 107, 110);
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #ffffff29;
    z-index: 10000;
  }

  .nav__right, .nav__left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .nav__img {
    margin-top: 2px;
    padding: 6px 12px;
    width: 75px;
  }

  .nav__link {
    margin-left: 10px
  }

  .nav__button {
    color: #ffffff;
    background: none;
    border: none;
    font-size: 14px;
    font-weight: 400;
    padding: 0 12px;
  }

  .nav__button:hover {
    cursor: pointer;
  }

  .nav__button__create {
    background: #ffffff33;
    border-radius: 3px;
    height: 32px;
  }

  .nav__button:hover {
    background: #C7C7C793;
    border-radius: 3px;
    height: 32px;
  }

  .nav__logo:hover {
    background: #C7C7C793;
    border-radius: 3px;
  }

  .btn__user {
    width: 100%;
    height: 100%;
    border: none;
    background: #F3A242;
    border-radius: 100%;
    text-align: center;
    color: #ffffff;
  }

  .btn__user:hover {
    border: 2px solid rgba(224, 223, 223, 0.78);
    cursor: pointer;
  }
`;