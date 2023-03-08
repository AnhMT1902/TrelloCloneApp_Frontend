import styled from "styled-components";

export const AddListStyled = styled.div`

  .main_add_list {
    display: flex;
    align-items: center;
    padding: 0 0 0 8px;
    flex: 0 0 auto;
    width: 271px;
    height: 40px;
    max-width: 271px;
    background: #ffffff33;
    border-radius: 3px;
    margin-top: 10px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 400;
  }

  .main_add_list:hover {
    background: #C7C7C793;
    cursor: pointer;
  }

  .form__add__list {
    flex: 0 0 auto;
    width: 271px;
    max-width: 271px;
    height: 80px; 
    background: #ebecf0;
    border-radius: 3px;
    margin-top: 10px;
    margin-left: 10px;
  }

  .input__list__title {
    width: calc(100% - 32px);
    margin: 4px;
    background-color: #fff;
    box-shadow: inset 0 0 0 2px #0079bf;
    border: none;
    border-radius: 3px;
    line-height: 20px;
    padding: 8px 12px;
    font-weight: 400;
    color: #000000;
  }

  .button__list__submit {
    float: left;
    height: 32px;
    min-height: 32px;
    padding-bottom: 4px;
    padding-top: 4px;
    background-color: var(--ds-background-brand-bold,#0079bf);
    border: none;
    box-shadow: none;
    color: var(--ds-text-inverse,#fff);
    border-radius: 3px;
    margin: 0 4px 4px 4px;
  }
  .button__list__submit:hover {
    background: #026AA7;
    cursor: pointer;
  }
`