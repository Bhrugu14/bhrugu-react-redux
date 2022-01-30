import styled from "styled-components";

const ProductListStyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  min-height: calc(100vh - max(6vh, 50px));
  .productsContainer {
    display: flex;
    flex-direction: column;
    width: 90%;
    min-height: calc(100vh - max(6vh, 50px));
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
    padding-left: 1%;
    padding-right: 1%;
  }
  .toggleButton:focus {
    color: #fff;
    background-color: transparent;
    border-color: transparent;
    outline: transparent !important;
    box-shadow: 0 transparent !important;
  }
  .toggleButton:focus:not(:focus-visible) {
    box-shadow: none !important;
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
    border-radius: 10% !important;
  }
  .dropdownItem {
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
    background-color: rgba(250, 250, 250, 1);
  }
  .dropdownItem:focus,
  .dropdownItem:hover {
    color: transparent !important;
    color: #020202 !important;
  }
  .dropdownItem.active,
  .dropdownItem:active {
    text-decoration: none !important;
    color: #020202 !important;
    border: 0px !important;
    outline: 0px !important;
  }
  .skeletonImage {
    display: flex;
    width: 100%;
    flex: 1;
    height: 300px;
  }
  .skeletonDis {
    height: 100px;
    width: 100%;
  }
`;

export default ProductListStyle;
