import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Skeleton } from "antd";

import { GetProductsList, GetCategories } from "../../redux/action";
import { ProductDetailsStrings } from "../../constant/strings";
import { Card, Row, Col } from "react-bootstrap";
import demo2 from "../../assets/images/demo_image2.webp";

import ProductDetailsStyle from "./ProductDetailsStyle";

function ProductDetails() {
  const dispatch = useDispatch();
  let { ProductId } = useParams();
  const [product, setProduct] = useState();
  const [disLength, setDisLength] = useState(200);

  const fetchData = async () => {
    const res = await dispatch(GetProductsList(ProductId));
    const catRes = await dispatch(GetCategories());
    let newCategoryObject = { ...{ categoryName: "-" }, ...res };
    catRes.map((i) => {
      if (newCategoryObject.categoryId === i.id) {
        newCategoryObject.categoryName = i.name;
      }
    });
    setProduct(newCategoryObject);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductDetailsStyle>
      <div className={"productsContainer"}>
        {product ? (
          <Row xs={1} md={1} sm={1} lg={1}>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Card.Body>
                <img
                  alt={"ProductImage"}
                  src={demo2}
                  className={"productImage"}
                ></img>
              </Card.Body>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Card.Body>
                <div className={"productInfo"}>
                  <div>
                    <label className={"titleText"}>
                      {ProductDetailsStrings.productName}:
                    </label>
                    <label className={"valueText"}>{product.name}</label>
                  </div>
                  <div>
                    <label className={"titleText"}>
                      {ProductDetailsStrings.model}:
                    </label>
                    <label className={"valueText"}>{product.model}</label>
                  </div>
                  <div>
                    <label className={"titleText"}>
                      {ProductDetailsStrings.category}:
                    </label>
                    <label className={"valueText"}>
                      {product.categoryName}
                    </label>
                  </div>
                  <div>
                    <label className={"titleText"}>
                      {ProductDetailsStrings.price}:
                    </label>
                    <label className={"valueText"}>
                      {ProductDetailsStrings.rupees}
                      {Intl.NumberFormat("en-IN", {
                        maximumSignificantDigits: 3,
                      }).format(product.price)}
                    </label>
                  </div>
                  <div>
                    <label className={"titleText"}>
                      {ProductDetailsStrings.description}:
                    </label>
                    <label className={"valueText"}>
                      {product.description.substr(0, disLength)}
                      {product.description.length > disLength && (
                        <span>
                          ...{" "}
                          <span
                            onClick={() =>
                              setDisLength(product.description.length)
                            }
                            className={"readMore"}
                          >
                            {ProductDetailsStrings.readMore}
                          </span>
                        </span>
                      )}
                    </label>
                  </div>
                </div>
              </Card.Body>
            </Col>
          </Row>
        ) : (
          <Row xs={1} md={1} sm={1} lg={1}>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Card.Body>
                <Skeleton.Image block={true} className={"skeletonImage"} />
              </Card.Body>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <Card.Body>
                <Skeleton.Button
                  active={true}
                  size={"default"}
                  shape={"default"}
                  block={true}
                />
                <br />
                <br />
                <Skeleton.Button
                  active={true}
                  size={"default"}
                  shape={"default"}
                  block={true}
                />
                <br />
                <br />
                <Skeleton.Button
                  active={true}
                  size={"large"}
                  shape={"default"}
                  block={true}
                />
                <br />
              </Card.Body>
            </Col>
          </Row>
        )}
      </div>
    </ProductDetailsStyle>
  );
}

export default ProductDetails;
