import React from "react";

import { ProductCardStrings } from "../../constant/strings";
import ProductCardStyle from "./ProductCardStyle";

function ProductCard(props) {
  const { item, onClick } = props;
  //   const histroy = useHistory();
  return (
    <ProductCardStyle onClick={onClick}>
      <div className={"cardContainer"}>
        <img className={"productImage"} src={item.image} alt={"productImage"} />
        <div className={"productInfo"}>
          <div className={"productInfoLeft"}>
            <label className={"productName"}>{item.name}</label>
            <label className={"productModel"}>{item.model}</label>
          </div>
          <div className={"productInfoRight"}>
            <label className={"productPrice"}>
              {ProductCardStrings.price}:
            </label>
            <label className={"productPriceValue"}>
              {ProductCardStrings.rupees}
              {Intl.NumberFormat("en-IN", {
                maximumSignificantDigits: 3,
              }).format(item.price)}
            </label>
          </div>
        </div>
      </div>
    </ProductCardStyle>
  );
}

export default ProductCard;
