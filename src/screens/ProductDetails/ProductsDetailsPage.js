import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetProductsList } from "../../redux/action";
// import { addInRedux } from "../../redux/action/index";
import { Card, Row, Col, Container } from "react-bootstrap";
import ProductDetailsStyle from "./ProductDetailsStyle";

function ProductDetails() {
  const history = useHistory();
  const dispatch = useDispatch();
  let { ProductId } = useParams();
  const [products, setProducts] = useState();

  const fetchData = async () => {
    const res = await dispatch(GetProductsList(ProductId));
    console.log("GetProductsList", res);
    // setProducts(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("ProductId", ProductId);
  return (
    <ProductDetailsStyle>
      <div className={"productsContainer"}>
        <Card>
          <Container>
            <Row xs={8} md={12} lg={12}>
              <Col xs={6} md={6} lg={6}>
                <Card.Body>Hello</Card.Body>
              </Col>
              <Col xs={6} md={6} lg={6}>
                <Card.Body>Other</Card.Body>
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
    </ProductDetailsStyle>
  );
}

export default ProductDetails;
