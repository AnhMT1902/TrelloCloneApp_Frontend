import styled from "styled-components";

export const NavbarDefaultStyled = styled.div`
  .nav {
    height: 60px;
    align-items: stretch;
    display: flex;
    background-color: #FFFFFF;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.08);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 100;
    justify-content: space-between;
  }

  .nav__left, .nav__right {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .logo__link {
    padding: 14px;
  }

  .nav__link {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-family: 'Charlie Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Noto Sans', 'Ubuntu', 'Droid Sans', 'Helvetica Neue', sans-serif
  }

  .nav__login {
    background: #0065ff;
    height: 100%;
    padding: 0 20px 0 20px;
    font-size: 1.1rem;
  }

  .nav__login:hover {
    background: #0747A6;
  }

  .link__style {
    text-decoration: none;
  }
`;