import React from "react";
import { useHistory } from "react-router-dom";

import { ErrorPage } from "../../constant/strings";
import ErrorStyle from "./ErrorStyles";

function Error() {
  const history = useHistory();
  return (
    <ErrorStyle>
      <div className={"container"}>
        <label className={"errorText"}>{ErrorPage.fourOFour}</label>
        <label className={"notFound"}>{ErrorPage.notFound}</label>
        <label onClick={() => history.push("/")} className={"goaBack"}>
          {ErrorPage.goBack}
        </label>
      </div>
    </ErrorStyle>
  );
}

export default Error;
