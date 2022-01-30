import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Dropdown, Col, Row } from "react-bootstrap";
import { Skeleton } from "antd";

import ProductCard from "../../components/ProductCard/ProductCardComponent";
import { ProductsListStrings } from "../../constant/strings";
import { GetProductsList, GetCategories } from "../../redux/action";
import demo2 from "../../assets/images/demo_image2.webp";

import ProductListStyle from "./ProductListStyle";

function ProductsList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [categoryId, setCategoryId] = useState(-1);
  const [products, setProducts] = useState();
  const [dropdownData, setDropdownData] = useState();
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const fetchData = async () => {
    const res = await dispatch(GetProductsList());
    const newData = res.map((i) => {
      i.image = demo2;
      return i;
    });
    setProducts(newData);
  };

  const fetchCategories = async () => {
    const res = await dispatch(GetCategories());
    const newData = [{ id: -1, name: "all" }].concat(res);
    setDropdownData(newData);
  };
  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  const onSelectCategory = (category) => {
    setSelectedCategory(category.name);
    setCategoryId(category.id);
  };

  return (
    <ProductListStyle>
      <div className={"productsContainer"}>
        <div className={"productHeader"}>
          {dropdownData && (
            <label className={"productHeaderText"}>
              {ProductsListStrings.selectCategory}:
            </label>
          )}
          {dropdownData && (
            <Dropdown>
              <Dropdown.Toggle className={"toggleButton"}>
                {selectedCategory}
              </Dropdown.Toggle>
              <Dropdown.Menu
                onClick={() => setToggleDropdown(true)}
                className={"dropdownMenu"}
                show={toggleDropdown}
              >
                {dropdownData.map((i, k) => {
                  return (
                    <Dropdown.Item
                      onClick={() => onSelectCategory(i)}
                      className={"dropdownItem"}
                      key={k}
                    >
                      {i.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          )}
        </div>
        <div className={"productsCardContainer"}>
          <Row xs={1} md={1} sm={1} lg={1}>
            {products
              ? products.map((item, k) => {
                  if (categoryId === -1) {
                    return (
                      <Col key={"product" + k} xs={12} sm={6} md={4} x lg={4}>
                        <ProductCard
                          onClick={() => history.push(`product/${item.id}`)}
                          item={item}
                        />
                      </Col>
                    );
                  } else {
                    if (categoryId === item.categoryId) {
                      return (
                        <Col key={"product" + k} xs={12} sm={6} md={4} x lg={4}>
                          <ProductCard
                            onClick={() => history.push(`product/${item.id}`)}
                            item={item}
                          />
                        </Col>
                      );
                    } else {
                      return null;
                    }
                  }
                })
              : [...Array(3)].map((i, k) => (
                  <Col key={"product" + k} xs={12} sm={6} md={4} x lg={4}>
                    <Skeleton.Image block={true} className={"skeletonImage"} />
                    <Skeleton.Button
                      active={true}
                      size={"default"}
                      shape={"default"}
                      className={"skeletonDis"}
                      block={true}
                    />
                    <br />
                    <br />
                  </Col>
                ))}
          </Row>
        </div>
      </div>
    </ProductListStyle>
  );
}

export default ProductsList;
