import styled from "styled-components";

const HeaderStyle = styled.div`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  background-color: green;
  height: max(6vh, 50px);
  padding-left: 5%;
  padding-right: 5%;
  position: sticky;
  top: 0;
  z-index: 9999999999;
  .titleText {
    font-size: 20px;
    font-weight: bold;
    color: white;
  }
  .backButton {
    height: 30px;
    width: 40px;
    color: #ffffff;
  }
`;

export default HeaderStyle;
