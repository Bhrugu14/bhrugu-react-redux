import styled from "styled-components";

const ErrorStyle = styled.div`
  font-family: poppins;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  min-height: calc(100vh - max(6vh, 50px));
  .container {
    min-width: 90vw;
    max-width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 1);
  }
  .errorText {
    font-size: 10vw;
    color: rgba(200, 0, 0, 1);
    font-family: monospace;
  }
  .notFound {
    font-size: 5vw;
    color: rgba(200, 0, 0, 1);
  }
  .goaBack {
    font-size: 15px;
    color: blue;
    text-decoration-line: underline;
  }
`;

export default ErrorStyle;
