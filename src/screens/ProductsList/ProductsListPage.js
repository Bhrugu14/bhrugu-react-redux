import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ProductCard from "../../components/ProductCard/ProductCardComponent";
import { useHistory } from "react-router-dom";
import { GetProductsList, GetCategories } from "../../redux/action";
import { useDispatch } from "react-redux";
import demo2 from "../../assets/images/demo_image2.webp";
import ProductListStyle from "./ProductListStyle";

function ProductsList() {
  const histroy = useHistory();
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
    console.log("GetProductsList", newData);
    setProducts(newData);
  };

  const fetchCategories = async () => {
    const res = await dispatch(GetCategories());
    console.log("GetCategories", res);
    const newData = [{ id: -1, name: "all" }].concat(res);
    setDropdownData(newData);
  };
  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  const onSelectCategory = (category) => {
    console.log("CATEGORY", category);
    setSelectedCategory(category.name);
    setCategoryId(category.id);
  };

  return (
    <ProductListStyle>
      <div className={"productsContainer"}>
        <div className={"productHeader"}>
          <label className={"productHeaderText"}>Select Category:</label>
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
          {products &&
            products.map((item, k) => {
              if (categoryId === -1) {
                return (
                  <ProductCard
                    onClick={() => histroy.push(`product/${item.id}`)}
                    item={item}
                  />
                );
              } else {
                if (categoryId === item.categoryId) {
                  return (
                    <ProductCard
                      onClick={() => histroy.push(`product/${item.id}`)}
                      item={item}
                    />
                  );
                } else {
                  return null;
                }
              }
            })}
        </div>
      </div>
    </ProductListStyle>
  );
}

export default ProductsList;
