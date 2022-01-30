import styled from "styled-components";

const ProductDetailsStyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  min-height: calc(100vh - max(6vh, 50px));
  .productsContainer {
    display: flex;
    flex-direction: column;
    padding-top: 10%;
    width: 90%;
    min-height: calc(100vh - max(6vh, 50px));
    background-color: rgba(255, 255, 255, 1);
  }
  .productImage {
    background-color: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
  .skeletonImage {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
  .productInfo {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .titleText {
    font-size: 18px;
    color: InfoText;
    font-weight: bold;
    margin-right: 10px;
  }
  .valueText {
    font-size: 17px;
    color: InfoText;
  }
  .readMore {
    font-size: 16px;
    color: blue;
    text-decoration-line: underline;
  }
`;

export default ProductDetailsStyle;
