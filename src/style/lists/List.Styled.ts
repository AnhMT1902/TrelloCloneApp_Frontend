import styled from "styled-components";

export const ListStyled = styled.div`
  .list_cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 0 auto;
    width: 271px;
    max-width: 271px;
    max-height: 530px;
    background: #ebecf0;
    border-radius: 3px;
    margin-top: 10px;
    margin-left: 10px;
  }

  .span__title {
    color: black;
    font-weight: 600;
  }
  .list__card__render {
    max-height: calc(100% - 215px);
    width: calc(100% - 16px);
  }
`