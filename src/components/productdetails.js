import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./product";

function ProductsDetails() {
  const productUrl = `https://fakestoreapi.com/products`;
  const [product, setProduct] = useState({});
  const Id = useParams();
  
  useEffect(() => {
    fetch(`${productUrl}/${Id.ProductId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <Product product={product} showButton={false} />
    </>
  );
}

export default ProductsDetails;
