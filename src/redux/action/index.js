import Config from "../../constant";
export const GetProductsList = (productId) => async (dispatch) => {
  let url = `${Config.BASE_URL}/products`;
  if (productId) {
    url = `${Config.BASE_URL}/products/${productId}`;
  }
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, options)
    .then((r) => {
      return r.json();
    })
    .catch((error) => {
      return error;
    });

  dispatch({
    type: "GET_PRODUCT",
    payload: response,
  });
  return response;
};

export const GetCategories = () => async (dispatch) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${Config.BASE_URL}/categories`, options)
    .then((r) => {
      return r.json();
    })
    .catch((error) => {
      return error;
    });

  dispatch({
    type: "GET_CATEGORIES",
    payload: response,
  });
  return response;
};
