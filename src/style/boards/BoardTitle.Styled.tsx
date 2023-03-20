import styled from "styled-components";

export const BoardTitleStyled = styled.div`
  .cardTitle {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 14px;
    width: calc(100% - 16px);
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .cardTitle:hover {
    cursor: pointer;
    background: #ffffff33;
  }

  .choiceTitle {
    rgba(171, 171, 171, 0.2)
  }

  .cardTitleClick {
    background: rgba(178, 178, 178, 0.19);
  }
`;