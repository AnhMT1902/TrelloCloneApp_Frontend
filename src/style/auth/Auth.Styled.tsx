import styled from "styled-components";

export const AuthStyled = styled.div`
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(250, 251, 252);
    background-image: url(https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.424/static/media/trello-left.7317ad1f.svg),
    url(https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.424/static/media/trello-right.16b9c9bb.svg);
    background-repeat: no-repeat, no-repeat;
    background-attachment: fixed, fixed;
    background-size: 368px, 368px;
    background-position: left bottom, right bottom;
    background-position-x: left, right;
    background-position-y: bottom, bottom;
    display: flex;
    justify-content: center;
  }

  .card-login {
    width: 320px;
    height: 500px;
    background: rgb(255, 255, 255);
    margin-top: 30px;
    padding: 32px 40px;
    border-radius: 3px;
    box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card__logo {
    width: 117.500px;
    height: 34px;
    padding-bottom: 20px;
  }

  .form__input {
    color: #000000;
    width: calc(100% - 16px);
    padding: 8px 6px;
    margin-bottom: 10px;
    height: 1.57em;
    background-color: transparent;
    font-size: 14px;
    border-radius: 3px;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(154, 154, 154, 0.76);
  }

  .form__button {
    width: 100%;
    height: 40px;
    background: #0052CC;
    border-radius: 3px;
    border: none;
    color: #FFFFFF;
    font-size: inherit;
    font-style: normal;
    font-family: inherit;
    font-weight: 500;
  }

  .form__button:hover {
    background: #0747A6;
  }

  .card__register {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: rgb(107 119 140);
  }

  .link__register {
    text-decoration: none;
    color: rgb(107 119 140);
  }

  .link__register:hover {
    text-decoration: underline;
    color: #0052CC;
  }

  .form__title {
    text-align: center;
    font-weight: 600;
  }

  .error__message {
    color: red;
    margin: -10px 0 13px 0;
    font-size: 12px;
  }

  .form__button__disable:hover {
    cursor: no-drop;
  }

  .p__error {
    border-radius: 3px;
    background: #eb5a46;
    color: #fbedeb;
    font-size: 14px;
    display: inline-block;
    padding: .5em 1em;
    width: calc(100% - 30px);
  }
`