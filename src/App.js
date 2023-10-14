import React from "react";
import Productlist from "./components/productlist";
import Navpar from "./components/navpar";
import Carousel from "./components/caresoul";
import ProductsList from "./components/productslist";
import { Routes, Route } from "react-router-dom";
import About from "./components/about";
import ProductDetails from "./components/productdetails";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navpar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <ProductsList />
                <Productlist />
              </>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="product/:ProductId" element={<ProductDetails />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
