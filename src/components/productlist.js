import { useState, useEffect } from "react";
import Product from "./product";
import "./products.css";

function Productlist() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  let getCategories = () => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((json) => setCategories(json));
  };

  let getProducts = (category) => {
    fetch(`https://fakestoreapi.com/products${category ? `/category/${category}` : ""}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    getProducts(category);
  };

  return (
    <>
      {products.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
        <div className="category-list m-3">
            {selectedCategory && (
              <button
                className="btn btn-primary m-1"
                onClick={() => {
                  setSelectedCategory("");
                  getProducts();
                }}
              >
                All Products
              </button>
            )}
            {categories.map((category) => (
              <button
                key={category}
                className={`btn btn-primary m-1 ${category === selectedCategory ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <h1 className="text-center p-3">Our Products</h1>
          <div className="product-list">
            {products.map((product) => (
              <Product product={product} showButton={true} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Productlist;

