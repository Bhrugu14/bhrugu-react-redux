import styled from "styled-components";

const ProductCardStyle = styled.div`
  .cardContainer {
    display: flex;
    background-color: rgba(255, 250, 250, 1);
    box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.3);
    min-height: 400px;
    width: 100%;
    margin-bottom: 15px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 3%;
    flex-direction: column;
  }
  .productImage {
    width: 100%;
    height: 300px;
    background-color: grey;
    border-radius: 3%;
    object-fit: cover;
  }
  .productInfo {
    display: flex;
    min-width: 100%;
    height: 80px;
    align-items: center;
  }
  .productInfoLeft {
    display: flex;
    flex-direction: column;
    width: 70%;
  }
  .productInfoRight {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 30%;
  }
  .productName {
    font-size: 18px;
    color: InfoText;
    font-weight: bold;
  }
  .productModel {
    line-height: 16px;
    font-size: 15px;
    color: GrayText;
  }
  .productPrice {
    line-height: 16px;
    font-size: 15px;
    font-weight: normal;
    color: darkgoldenrod;
  }
  .productPriceValue {
    line-height: 16px;
    font-size: 15px;
    color: black;
  }
`;

export default ProductCardStyle;
