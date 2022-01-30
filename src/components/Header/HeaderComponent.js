import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

import { HeaderStrings } from "../../constant/strings";
import ProductListStyle from "./HeaderStyle";

function MainHeader() {
  const history = useHistory();
  const params = useLocation();
  const [backButton, setBackButton] = useState(false);
  useEffect(() => {
    if (params.pathname === "/" || !params.pathname.includes("/product")) {
      setBackButton(false);
    } else {
      setBackButton(true);
    }
  }, [params]);
  return (
    <ProductListStyle>
      {backButton && (
        <div onClick={() => history.goBack()} className={"backButton"}>
          <ArrowLeftOutlined
            style={{ color: "#ffffff", height: "30px", width: "40px" }}
          />
        </div>
      )}
      <label className={"titleText"}>{HeaderStrings.headerTitle}</label>
    </ProductListStyle>
  );
}

export default MainHeader;
