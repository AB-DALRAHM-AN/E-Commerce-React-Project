import { useState, useEffect } from "react";
import Product from "./product";
import "./products.css";

function Productlist() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  let products = Products.map((product) => {
    return <Product key={product.id} product={product} />
  });
  return (
    <>
      {products.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className="product-list">{products}</div>
      )}
    </>
  );
}

export default Productlist;
