import axios from "axios";

export const getProducts = () => {
  console.log("getProducts");
  //this is the thunk
  return (dispatch) => {
    axios
      .get("/api/products")
      .then((res) => {
        dispatch({ type: "SET_PRODUCTS", products: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addProduct = (productDataFromForm) => {
  //this is the thunk
  return (dispatch) => {
    axios
      .post("/api/products", { product: productDataFromForm })
      .then((res) => {
        dispatch({ type: "ADD_PRODUCT", product: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    axios.delete(`/api/products/${id}`).then((res) => {
      dispatch({ type: "DELETE_PRODUCT", id });
    });
  };
};

const products = (state = [], action) => {
  console.log("products reducer called", action);
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.products;
    case "ADD_PRODUCT":
      return [action.product, ...state];
    case "DELETE_PRODUCT":
      return state.filter((p) => p.id !== action.id);
    default:
      return state;
  }
};

export default products;
