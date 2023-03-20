import styled from "styled-components";

export const BoardContentStyled = styled.div`
  .main {
    width: 100%;
    height: calc(100vh - 44.333px);
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .main::-webkit-scrollbar {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px;
    width: 10px;
    height: 9px;
  }

  .main::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(75, 75, 75, 0.3);
    background-color: #555;
  }

  .main::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(75, 75, 75, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

`;