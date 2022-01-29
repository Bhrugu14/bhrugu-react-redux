import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductListStyle from "./HeaderStyle";

function MainHeader() {
  const params = useLocation();
  const [backButton, setBackButton] = useState(false);
  console.log("params", params);
  useEffect(() => {
    if (params.pathname === "/") {
      setBackButton(false);
    } else {
      setBackButton(true);
    }
  }, [params]);
  return (
    <ProductListStyle>
      {backButton && (
        <div
          style={{ height: "20px", width: "20px", backgroundColor: "red" }}
        ></div>
      )}
      <label className={"titleText"}>React Redux Assignment</label>
    </ProductListStyle>
  );
}

export default MainHeader;
