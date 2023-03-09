import styled from "styled-components";

export const CardStyled = styled.div`
  .main__card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 3px;
    flex: 0 0 auto;
    padding: 6px 8px;
    background: #fff;
    margin-bottom: 5px;
  }

  .main__card__edit {
    height: 100%;
    display: flex;
    justify-content: start;
    font-size: 30px;
  }

  .main__card__content {
    color: #000000;
  }

  .main__card__span {
    font-size: 20px;
    padding-bottom: 10px;
  }

  .main__card__span:hover, .main__card__x:hover {
    cursor: pointer;
  }

  .main__card__x {
    font-weight: 600;
    font-size: 14px;
  }
  
  .input__title {
    border-radius: 3px;
    color: var(--ds-text-subtle, #5e6c84);
    border: none;
    height: 60px;
    width: 230px;
  }
`;