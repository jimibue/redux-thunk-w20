import axios from "axios";

export const getProducts = () => {
  console.log("getProducts");
  //this is the thunk
  return (dispatch) => {
    axios
      .get("/api/products")
      .then((res) => {
        console.log("res");
        dispatch({ type: "SET_PRODUCTS", products: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const products = (state = [], action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.products;
    default:
      return state;
  }
};

export default products;
