import styled from "styled-components";

export const AddCardStyled = styled.div`
  .main__add__card {
    border-radius: 3px;
    display: flex;
    align-items: center;
    flex: 1 0 auto;
    margin: 2px 8px;
    padding: 6px 8px;
    position: relative;
    text-decoration: none;
  }

  .main__add__card:hover {
    background: #C7C7C793;
    cursor: pointer;
  }

  .add__title {
    color: var(--ds-text-subtle, #5e6c84);
  }

  .plus {
    width: 30px;
    font-size: 27px;
    margin-bottom: 7px;
  }

  .form_add_card {
    height: 100%;
  }

  .input__title {
    border-radius: 3px;
    width: calc(100% - 28px);
    height: 60px;
    color: var(--ds-text-subtle, #5e6c84);
    border: none;
    padding: 2px 6px;
    margin: 4px 8px 40px 8px;
  }

  .button__list__submit {
    float: left;
    height: 32px;
    min-height: 32px;
    padding-bottom: 4px;
    padding-top: 4px;
    background-color: var(--ds-background-brand-bold, #0079bf);
    border: none;
    box-shadow: none;
    color: var(--ds-text-inverse, #fff);
    border-radius: 3px;
    margin-top: -38px;
    margin-left: 8px;
  }

  .button__list__submit:hover {
    background: #026AA7;
    cursor: pointer;
  }

  .button__list_close {
    margin-left: 85px ;
  }
`;