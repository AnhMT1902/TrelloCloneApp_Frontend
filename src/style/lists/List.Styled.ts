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
    width: calc(100% - 21px);
    overflow-y: auto;
    padding-right: 5px;
  }

  .list__card__render::-webkit-scrollbar {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px;
    width: 7px;
  }

  .list__card__render::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgb(253, 253, 253);
    background-color: #a6a4a4;
  }

  .list__card__render::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(145, 144, 144, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }
`