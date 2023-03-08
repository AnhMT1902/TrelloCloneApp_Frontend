import styled from "styled-components";

export const HomeStyled = styled.div`
  * {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #ffffff;
  }

  .home {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .main {
    display: flex;
  }

  .sidebar {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    border-right: 0.01px solid #ffffff29;
    margin-top: 44px;
    width: 260px;
    background: rgb(100, 107, 110);
  }

  .your__broads {
    padding-left: 16px;
    width: 100%;
    font-weight: 700;
  }

  .content {
    margin-top: 44px;
    margin-left: 260px;
    height: calc(100vh - 44px);
    width: calc(100% - 260px);
    background: #838C91;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .content::-webkit-scrollbar {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px;
    width: 10px;
    height: 10px;
  }

  .content::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(75, 75, 75, 0.3);
    background-color: #555;
  }

  .content::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(75, 75, 75, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  .choiceTitle {
    rgb(255 255 255 / 20%)
  }
`