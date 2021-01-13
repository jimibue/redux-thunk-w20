import "./App.css";
import { useEffect, useState } from "react";
import { addProduct, deleteProduct, getProducts } from "./reducers/products";
import { connect } from "react-redux";

function App({ addProductX, deleteProductX, getProductsX, products }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [department, setDepartment] = useState("");
  useEffect(() => {
    getProductsX();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addProductX({ name, description, price, department });
    setName("");
    setDescription("");
    setPrice("");
    setDepartment("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <p>name</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>description</p>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <p>price</p>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <p>department</p>
        <input
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
      {products.map((p) => (
        <h1>
          {p.name}
          {/* <span onClick={() => handleDelete(p.id)}>X</span> */}
          <span onClick={() => deleteProductX(p.id)}>X</span>
        </h1>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { products: state.products };
};

const mapDispatchToProps = (dispatch) => ({
  addProductX: (product) => dispatch(addProduct(product)),
  deleteProductX: (id) => dispatch(deleteProduct(id)),
  getProductsX: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
