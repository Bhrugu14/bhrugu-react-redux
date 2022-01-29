import { combineReducers } from "redux";

const initialData = {
  productsListData: [],
  categoriesData: [],
};
const AntDesignReducer = (state = initialData, action) => {
  switch (action.type) {
    case "GET_PRODUCT": {
      const { data } = action.payload;
      return {
        ...state,
        productsListData: data,
      };
    }
    case "GET_CATEGORIES": {
      const { data } = action.payload;
      return {
        ...state,
        categoriesData: data,
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  AntDesignReducer,
});
export default rootReducer;
