import styled from "styled-components";

const ProductListStyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  min-height: 94vh;
  .productsContainer {
    display: flex;
    flex-direction: column;
    width: 90%;
    min-height: 94vh;
    background-color: rgba(255, 255, 255, 1);
  }
  .productHeader {
    display: flex;
    height: 80px;
    padding-left: 5%;
  }
  .productHeaderText {
    display: flex;
    height: 45px;
    font-size: 20px;
    font-weight: bold;
    align-items: center;
    margin-right: 15px;
  }
  .productsCardContainer {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  .toggleButton:focus {
    color: #fff;
    background-color: transparent;
    border-color: transparent;
    outline: transparent !important;
    box-shadow: 0 transparent !important;
  }
  .toggleButton {
    background-color: transparent !important;
    border-color: transparent !important;
    padding: 0 !important;
    height: 44px !important;
    border-radius: 0px !important;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 19px;
    color: #020202 !important;
    border: 0px !important;
    outline: transparent !important;
    box-shadow: 0 transparent !important;
  }
  .dropdownMenu {
    margin-top: -2px !important;
    border: 0px !important;
    padding: 0px !important;
    background-color: transparent !important;
    box-shadow: 0 transparent !important;
  }
  .dropdownItem {
    font-family: Avenir-Regular !important;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 19px;
    color: #020202;
    text-align: center;
    height: 50px;
    display: flex;
    padding-left: 13px;
    padding-right: 13px;
    align-items: center;
    justify-content: center;
    background-color: white;
  }
  .dropdownItem:focus,
  .dropdownItem:hover {
    color: transparent !important;
    background-color: #edc9b8 !important;
    color: #020202 !important;
    background-color: #e48759 !important;
  }
  .dropdownItem.active,
  .dropdownItem:active {
    color: #edc9b8 !important;
    text-decoration: none !important;
    background-color: #e48759 !important;
    color: #020202 !important;
    border: 0px !important;
    outline: 0px !important;
  }
`;

export default ProductListStyle;
