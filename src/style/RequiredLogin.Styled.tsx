import styled from "styled-components";

export const RequiredLoginStyled = styled.div`
  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Noto Sans', 'Ubuntu', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(250, 251, 252);
    background-image: url(https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.424/static/media/trello-left.7317ad1f.svg);
    background-repeat: no-repeat, no-repeat;
    background-attachment: fixed;
    background-size: 368px;
    background-position: right bottom;
    background-position-x: right;
    background-position-y: bottom;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button__signup {
    background-color:#0079bf;
    box-shadow: none;
    border: none;
    text-decoration: none;
    color: #ffffff;
    border-radius: 3px;
    padding: 6px 12px;
  }

  .button__signup:hover {
    background-color: #026AA7;
  }

  .button__link {
    text-decoration: none;
    color: black;
  }

  .button__link:hover {
    text-decoration: underline;
    color:  #0079bf;
  }
`;